import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Extract form fields
    const civilite = formData.get("civilite") as string;
    const nom = formData.get("nom") as string;
    const prenom = formData.get("prenom") as string;
    const email = formData.get("email") as string;
    const telephone = formData.get("telephone") as string;
    const adresse = formData.get("adresse") as string;
    const codePostal = formData.get("codePostal") as string;
    const ville = formData.get("ville") as string;
    const typeProjet = formData.get("typeProjet") as string;
    const surface = formData.get("surface") as string;
    const description = formData.get("description") as string;
    const delai = formData.get("delai") as string;
    const source = formData.get("source") as string;

    // Validation
    if (!nom || !prenom || !email || !telephone || !adresse || !codePostal || !ville || !typeProjet || !surface || !description || !delai) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants" },
        { status: 400 }
      );
    }

    // Format delai
    const delaiLabels: Record<string, string> = {
      urgent: "Urgent (sous 15 jours)",
      "1mois": "Sous 1 mois",
      "3mois": "Sous 3 mois",
      flexible: "Flexible",
    };

    // Send email to company
    const { data, error } = await resend.emails.send({
      from: "RHONEA Peinture <noreply@rhonea-peinture.fr>",
      to: ["devis@rhonea-peinture.fr", "contact@rhonea-peinture.fr"],
      replyTo: email,
      subject: `[DEVIS] ${typeProjet} - ${prenom} ${nom} (${ville})`,
      html: `
        <h2>Nouvelle demande de devis</h2>

        <h3>Coordonnees du client</h3>
        <table>
          <tr><td><strong>Civilite:</strong></td><td>${civilite === "M" ? "Monsieur" : "Madame"}</td></tr>
          <tr><td><strong>Nom:</strong></td><td>${nom}</td></tr>
          <tr><td><strong>Prenom:</strong></td><td>${prenom}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
          <tr><td><strong>Telephone:</strong></td><td>${telephone}</td></tr>
        </table>

        <h3>Adresse du chantier</h3>
        <p>
          ${adresse}<br />
          ${codePostal} ${ville}
        </p>

        <h3>Details du projet</h3>
        <table>
          <tr><td><strong>Type:</strong></td><td>${typeProjet}</td></tr>
          <tr><td><strong>Surface:</strong></td><td>${surface} m²</td></tr>
          <tr><td><strong>Delai:</strong></td><td>${delaiLabels[delai] || delai}</td></tr>
          <tr><td><strong>Source:</strong></td><td>${source || "Non renseigne"}</td></tr>
        </table>

        <h3>Description du projet</h3>
        <p>${description.replace(/\n/g, "<br />")}</p>

        <hr />
        <p><em>Demande envoyee le ${new Date().toLocaleDateString("fr-FR")} a ${new Date().toLocaleTimeString("fr-FR")}</em></p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de l'email" },
        { status: 500 }
      );
    }

    // Send confirmation email to client
    await resend.emails.send({
      from: "RHONEA Peinture <noreply@rhonea-peinture.fr>",
      to: [email],
      subject: "Confirmation de votre demande de devis - RHONEA Peinture",
      html: `
        <h2>Bonjour ${prenom},</h2>

        <p>Nous avons bien recu votre demande de devis et vous remercions de votre confiance.</p>

        <p><strong>Notre equipe vous recontactera sous 24h</strong> pour discuter de votre projet et organiser une visite sur place si necessaire.</p>

        <h3>Recapitulatif de votre demande</h3>
        <ul>
          <li><strong>Type de projet:</strong> ${typeProjet}</li>
          <li><strong>Adresse:</strong> ${adresse}, ${codePostal} ${ville}</li>
          <li><strong>Surface estimee:</strong> ${surface} m²</li>
          <li><strong>Delai souhaite:</strong> ${delaiLabels[delai] || delai}</li>
        </ul>

        <h3>Description</h3>
        <p>${description.replace(/\n/g, "<br />")}</p>

        <hr />

        <p>En attendant, n'hesitez pas a consulter nos realisations sur notre site ou a nous contacter directement :</p>

        <ul>
          <li>Tel: 07 59 56 33 74</li>
          <li>Email: contact@rhonea-peinture.fr</li>
        </ul>

        <p>Cordialement,<br /><strong>L'equipe RHONEA Peinture</strong></p>

        <p>
          <small>
            RHONEA Peinture<br />
            12 rue des Artisans, 69000 Lyon<br />
            SIRET: 912 345 678 00019
          </small>
        </p>
      `,
    });

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
