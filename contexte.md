Tu es un développeur web fullstack expert. Je veux que tu créées un site web complet et professionnel pour mon entreprise de peinture en bâtiment dans le Rhône (69).

## INFORMATIONS ENTREPRISE (À PERSONNALISER)

Nom entreprise : RHONÉA Peinture

Slogan : Votre artisan peintre de confiance dans le Rhône

Téléphone : 06 12 34 56 78

Email : contact@rhonea-peinture.fr

Adresse : 12 rue des Artisans

Ville principale : Lyon

Années d'expérience : 12 ans

Nombre de chantiers réalisés : +480

Numéro SIRET : 912 345 678 00019

Assurance décennale : AXA Assurances – Contrat n° DÉC-4587962

## STACK TECHNIQUE IMPOSÉE

- Framework : Next.js 14 (App Router)
- Styling : Tailwind CSS
- Animations : Framer Motion
- Icônes : Lucide React
- Formulaires : React Hook Form + Zod (validation)
- Email : Resend ou Nodemailer (pour les formulaires)
- Hébergement prévu : Vercel
- Base de données : Aucune (site statique avec formulaires)

## STRUCTURE DU SITE (10 PAGES PRINCIPALES)

### 1. PAGE D'ACCUEIL (/)
Sections à inclure dans l'ordre :
- Hero section avec :
  - Image de fond (peinture/rénovation) avec overlay
  - Titre H1 : "Peintre professionnel à Lyon et dans le Rhône"
  - Sous-titre accrocheur
  - 2 boutons CTA : "Devis gratuit" (principal) + "Appeler maintenant" (secondaire)
  - Bandeau de réassurance en dessous : "✓ Devis sous 24h | ✓ Assurance décennale | ✓ 15 ans d'expérience | ✓ 4.9/5 sur Google"

- Section "Nos services" (grille 3 colonnes) :
  - Peinture intérieure
  - Peinture extérieure
  - Ravalement de façade
  - Revêtements muraux
  - Finitions décoratives
  - Conseil couleurs
  Chaque carte avec icône, titre, description courte, lien "En savoir plus"

- Section "Pourquoi nous choisir" (4 colonnes) :
  - Devis gratuit sous 24h
  - Artisan qualifié
  - Assurance décennale
  - Satisfaction garantie

- Section "Nos réalisations" :
  - Galerie avant/après avec slider interactif (min 6 projets)
  - Bouton "Voir toutes nos réalisations"

- Section "Témoignages clients" :
  - Carrousel avec 5 témoignages
  - Photo client (ou initiales), nom, ville, note étoiles, texte

- Section "Zone d'intervention" :
  - Carte stylisée du Rhône (SVG ou image)
  - Liste des principales villes : Lyon, Villeurbanne, Vénissieux, Caluire, Bron, etc.

- Section "CTA final" :
  - Fond coloré
  - "Prêt à transformer votre intérieur ?"
  - Bouton devis + numéro de téléphone

- Footer complet

### 2. PAGE SERVICES (/services)
- Hero avec titre "Nos services de peinture"
- Section détaillée pour chaque service :
  - Peinture intérieure (murs, plafonds, boiseries, radiateurs)
  - Peinture extérieure (façades, volets, portails, clôtures)
  - Ravalement de façade (diagnostic, traitement, finition)
  - Revêtements muraux (papier peint, toile de verre, crépi)
  - Finitions décoratives (effets, patines, stucco)
  - Conseil couleurs
- Chaque service : image, description 200 mots, liste avantages, CTA devis
- FAQ en bas de page (5 questions)

### 3. PAGE RÉALISATIONS (/realisations)
- Hero "Nos réalisations"
- Filtres : Tous | Intérieur | Extérieur | Façade | Professionnel
- Grille de projets (min 12 projets fictifs mais réalistes)
- Chaque projet : 
  - Image avant/après (slider au hover ou clic)
  - Type de projet
  - Ville
  - Surface
  - Durée
- Modal au clic avec galerie complète + description

### 4. PAGE SIMULATEUR DE PRIX (/simulateur)
- Hero "Estimez votre projet en 2 minutes"
- Formulaire multi-étapes animé :
  
  Étape 1 : Type de projet
  - Peinture intérieure
  - Peinture extérieure
  - Ravalement façade
  - Autre
  
  Étape 2 : Détails (conditionnel selon étape 1)
  Si intérieur :
  - Nombre de pièces
  - Types de pièces (multi-select)
  Si extérieur :
  - Type (façade, volets, portail...)
  
  Étape 3 : Surface
  - Slider ou input numérique (m²)
  
  Étape 4 : État actuel
  - Bon état (simple rafraîchissement)
  - État moyen (préparation nécessaire)
  - Mauvais état (gros travaux de préparation)
  
  Étape 5 : Finition souhaitée
  - Standard
  - Premium
  - Haut de gamme
  
  Étape 6 : Coordonnées (pour voir le résultat)
  - Prénom (obligatoire)
  - Email (obligatoire)
  - Téléphone (optionnel)
  - Code postal (obligatoire)
  - Checkbox RGPD
  
  Résultat :
  - Afficher fourchette de prix estimée
  - "Pour un devis précis et personnalisé, nous vous recontactons sous 24h"
  - Bouton "Être rappelé" ou "Voir nos réalisations"

- Disclaimer : "Estimation indicative, seul un devis sur place fait foi"

### 5. PAGE DEVIS (/devis)
- Hero "Demandez votre devis gratuit"
- Formulaire complet :
  - Civilité
  - Nom, Prénom
  - Email, Téléphone
  - Adresse complète du chantier
  - Code postal (obligatoire, validation 69XXX)
  - Type de projet (dropdown)
  - Surface estimée
  - Description du projet (textarea)
  - Upload photos (max 5, optionnel)
  - Délai souhaité (dropdown : Urgent, 1 mois, 3 mois, Flexible)
  - Comment nous avez-vous connu ?
  - Checkbox RGPD
- Bouton "Envoyer ma demande"
- Message de confirmation après envoi
- Envoi email automatique (Resend/Nodemailer)

### 6. PAGES LOCALES SEO (/peintre-lyon, /peintre-villeurbanne, etc.)
Créer 10 pages locales avec la structure suivante :

URLs :
- /peintre-lyon
- /peintre-villeurbanne
- /peintre-venissieux
- /peintre-caluire
- /peintre-bron
- /peintre-saint-priest
- /peintre-vaulx-en-velin
- /peintre-meyzieu
- /peintre-rillieux-la-pape
- /ravalement-facade-lyon

Structure de chaque page :
- H1 : "Peintre à [Ville] - Devis gratuit sous 24h"
- Introduction optimisée SEO (150 mots)
- Services disponibles dans cette ville
- Réalisations dans cette ville (3-4 projets)
- Témoignage d'un client local
- FAQ locale (3 questions)
- Formulaire de devis intégré
- Carte de la zone

### 7. PAGE À PROPOS (/a-propos)
- Hero avec photo équipe/artisan
- Histoire de l'entreprise
- Nos valeurs (qualité, respect, propreté, délais)
- Chiffres clés animés (compteurs)
- Certifications et assurances
- L'équipe (si applicable)
- CTA vers devis

### 8. PAGE NOS GARANTIES (/garanties)
- Liste des garanties avec icônes :
  - Devis gratuit et sans engagement
  - Assurance décennale
  - Garantie satisfaction
  - Respect des délais
  - Propreté du chantier
  - Conseils personnalisés
- Détail de chaque garantie
- Logos assurances

### 9. PAGE BLOG (/blog)
- Liste des articles (grille)
- 4 articles initiaux à créer :
  1. "Combien coûte un peintre à Lyon en 2025 ?"
  2. "Comment choisir les couleurs de sa peinture intérieure ?"
  3. "Quand faut-il refaire le ravalement de sa façade ?"
  4. "Peinture mate ou satinée : comment choisir ?"
- Chaque article : 600-800 mots, optimisé SEO, images, CTA vers devis

### 10. PAGE CONTACT (/contact)
- Coordonnées complètes
- Formulaire de contact simple
- Carte Google Maps (ou alternative)
- Horaires d'ouverture
- Liens réseaux sociaux

### PAGES LÉGALES
- /mentions-legales
- /politique-confidentialite

## COMPOSANTS GLOBAUX

### Header (sticky)
- Logo à gauche
- Menu navigation : Accueil | Services | Réalisations | Simulateur | À propos | Blog | Contact
- Numéro de téléphone cliquable (visible desktop)
- Bouton "Devis gratuit" (CTA principal)
- Menu hamburger sur mobile

### Footer
- 4 colonnes :
  1. Logo + description courte + réseaux sociaux
  2. Navigation rapide
  3. Nos services
  4. Contact (adresse, tel, email, horaires)
- Bandeau bottom : Copyright + Mentions légales + Politique confidentialité
- Badges : Assurance décennale, Note Google

### Éléments flottants
- Bouton téléphone flottant (mobile only, bottom right)
- Bouton WhatsApp flottant (bottom right, au-dessus du tel)
- Bouton "Retour en haut" (apparaît au scroll)

### Bandeau cookies
- Bandeau RGPD en bas
- Boutons : Accepter | Personnaliser | Refuser
- Sauvegarde du choix en localStorage

## DESIGN ET CHARTE GRAPHIQUE

### Couleurs
```css
:root {
  --primary: #1E40AF;      /* Bleu principal (confiance) */
  --primary-dark: #1E3A8A;
  --secondary: #F97316;    /* Orange CTA */
  --secondary-light: #FB923C;
  --accent: #059669;       /* Vert (validation/succès) */
  --neutral-900: #111827;  /* Texte principal */
  --neutral-700: #374151;
  --neutral-500: #6B7280;
  --neutral-200: #E5E7EB;
  --neutral-100: #F3F4F6;
  --white: #FFFFFF;
}
```

### Typographies (Google Fonts)
- Titres : Montserrat (Bold, Semi-bold)
- Corps : Inter ou Open Sans (Regular, Medium)

### Style général
- Design moderne et épuré
- Beaucoup d'espace blanc
- Coins arrondis (border-radius: 8px à 16px)
- Ombres légères (shadow-sm à shadow-md)
- Animations subtiles au scroll (Framer Motion)
- Hover effects sur les boutons et cartes
- Images avec overlay gradient si texte par-dessus

### Boutons
- Primaire : fond orange, texte blanc, hover plus foncé
- Secondaire : fond transparent, bordure bleu, texte bleu
- Tous avec transition smooth

## SEO ET PERFORMANCE

### Meta tags (chaque page)
- Title unique et optimisé (< 60 caractères)
- Meta description unique (< 155 caractères)
- Open Graph tags (titre, description, image)
- Twitter Card

### Exemple pour la homepage :