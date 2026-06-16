# 🚀 Portfolio Minosoa Ravelonirina - Full Stack Developer

Un portfolio moderne et responsive créé avec **Next.js 16**, **React 19**, et **Tailwind CSS 4** pour mettre en avant les compétences en développement full-stack et DevOps.

## 📸 Aperçu

**Design sombre et élégant** avec:
- ✅ Navigation responsive avec menu mobile
- ✅ Section héro avec photo de profil
- ✅ Services présentés en cartes animées
- ✅ Compétences par catégories
- ✅ Projets réalisés avec détails
- ✅ Formulaire de contact fonctionnel
- ✅ Animations fluides au défilement
- ✅ Entièrement optimisé pour mobile/tablet/desktop

## 🛠️ Stack Technologique

```json
{
  "framework": "Next.js 16.2.6",
  "library": "React 19.2.4",
  "styling": "Tailwind CSS 4",
  "language": "TypeScript",
  "packageManager": "pnpm 11.7.0"
}
```

## 📦 Installation

### Prérequis
- Node.js 18+ ou supérieur
- pnpm (ou npm/yarn)

### Étapes

```bash
# 1. Installer les dépendances
pnpm install

# 2. Démarrer le serveur de développement
pnpm dev

# 3. Ouvrir dans le navigateur
# http://localhost:3000
```

## 🏗️ Structure du Projet

```
.
├── app/
│   ├── layout.tsx          # Layout principal + métadonnées
│   ├── page.tsx            # Page d'accueil 
│   └── globals.css         # Styles globaux
├── components/
│   ├── navigation.tsx      # Barre de navigation
│   ├── hero.tsx            # Section présentation
│   ├── services.tsx        # Section services
│   ├── about.tsx           # Section À propos
│   ├── skills.tsx          # Section compétences
│   ├── projects.tsx        # Section projets
│   └── contact.tsx         # Section contact + formulaire
├── public/
│   └── profile.png         # Photo de profil
└── PORTFOLIO.md            # Documentation détaillée
```

## 🎨 Palette de Couleurs

| Nom | Valeur | Usage |
|-----|--------|-------|
| **Background** | `#000000` | Arrière-plan principal |
| **Foreground** | `#F5F5F5` | Texte principal |
| **Primary** | `#2563EB` | Accent bleu (boutons, titres) |
| **Secondary** | `#333333` | Texte secondaire |
| **Border** | `#1F1F1F` | Bordures et séparateurs |

## ✨ Sections du Portfolio

### 1. Navigation
- Logo "MR" animé
- Menu de navigation fluide
- Bouton "Download CV" visible
- Menu hamburger pour mobile

### 2. Hero Section
- Titre avec gradient bleu/violet
- Description professionnelle
- Boutons d'action (Download CV, Get in Touch)
- Photo de profil animée
- Liens sociaux (LinkedIn, GitHub, Email)

### 3. Services
- Full Stack Development
- Cloud Infrastructure
- DevOps & Automation
- System Administration

Chaque service avec animation au défilement.

### 4. À Propos
- Présentation textuelle
- "My Approach" - 3 étapes du processus
- Statistiques professionnelles

### 5. Compétences
4 catégories:
- **Backend**: Node.js, Java, Python
- **Frontend**: React, Next.js, Tailwind CSS
- **Cloud & DevOps**: Docker, Kubernetes, AWS, GCP
- **Outils**: Git, Linux, PostgreSQL, MySQL

### 6. Projets
- Highly Available WordPress
- Cloud OwnCloud Deployment
- Marina - AI Translation App
- PicoCTF 2026 Challenge

### 7. Contact
- Informations de contact
- Formulaire fonctionnel
- Liens sociaux
- Footer

## 🎬 Animations & Interactions

### Animations Activées
- ✨ Fade-in au défilement (Intersection Observer)
- 🎯 Hover effects sur les cartes
- ⚡ Scale transform sur les boutons
- 🎪 Bounce animation sur l'indicateur de scroll

### Interactions
- Défilement lisse vers les sections
- Menu mobile toggle
- Soumission de formulaire avec feedback
- Boutons de téléchargement actifs

## 📱 Responsive Design

| Écran | Breakpoint | Adaptation |
|-------|-----------|-----------|
| **Mobile** | < 640px | 1 colonne, menu hamburger |
| **Tablet** | 640px - 1024px | 2 colonnes |
| **Desktop** | > 1024px | 3-4 colonnes |
| 