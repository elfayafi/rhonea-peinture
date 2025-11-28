import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nom, email, telephone, sujet, message } = body;

    // Validation
    if (!nom || !email || !sujet || !message) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants" },
        { status: 400 }
      );
    }

    // Send email
    const { data, error } = await resend.emails.send({
      from: "RHONEA Peinture <noreply@rhonea-peinture.fr>",
      to: ["contact@rhonea-peinture.fr"],
      replyTo: email,
      subject: `[Contact Site Web] ${sujet} - ${nom}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>De:</strong> ${nom}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telephone:</strong> ${telephone || "Non renseigne"}</p>
        <p><strong>Sujet:</strong> ${sujet}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de l'email" },
        { status: 500 }
      );
    }

    // Send confirmation email to user
    await resend.emails.send({
      from: "RHONEA Peinture <noreply@rhonea-peinture.fr>",
      to: [email],
      subject: "Confirmation de votre message - RHONEA Peinture",
      html: `
        <h2>Bonjour ${nom},</h2>
        <p>Nous avons bien recu votre message et vous en remercions.</p>
        <p>Notre equipe vous recontactera dans les plus brefs delais.</p>
        <hr />
        <p><strong>Recapitulatif de votre message :</strong></p>
        <p><strong>Sujet:</strong> ${sujet}</p>
        <p>${message.replace(/\n/g, "<br />")}</p>
        <hr />
        <p>Cordialement,<br />L'equipe RHONEA Peinture</p>
        <p>
          <small>
            Tel: 06 12 34 56 78<br />
            Email: contact@rhonea-peinture.fr<br />
            12 rue des Artisans, 69000 Lyon
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
