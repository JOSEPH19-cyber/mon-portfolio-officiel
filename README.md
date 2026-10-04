<div align="center">

# 🚀 Portfolio — Joseph MBIKI

**Développeur Full-Stack & Future Data Scientist**

[![Portfolio](https://img.shields.io/badge/Portfolio-Live-06b6d4?style=for-the-badge&logo=vercel&logoColor=white)](https://mon-portfolio-officiel.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/joseph-mbiki-5346a5374)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/JOSEPH19-cyber)

*Un portfolio moderne, sombre et élégant — avec un mode clair, un formulaire de contact fonctionnel et des animations soignées.*

</div>

---

## ✨ Aperçu

Portfolio personnel développé avec **Vue.js 3** et **Tailwind CSS v4**, mettant en avant mon parcours, mes compétences et mes projets. Le site propose un **mode clair/sombre**, un **formulaire de contact fonctionnel** (via Web3Forms) et un design **Dark Néon** avec accents cyan et violet.

### 🎨 Points forts

- 🌓 **Mode clair / sombre** avec persistance (`localStorage`)
- 📱 **100% responsive** (mobile, tablette, desktop)
- 📬 **Formulaire de contact fonctionnel** (Web3Forms API)
- ✨ **Animations modernes** (scroll reveal, count-up, typewriter, hover effects)
- 🎯 **Architecture propre** (données centralisées, composants réutilisables)
- ⚡ **Performances optimisées** (Vite, lazy loading, tree-shaking)

---

## 🛠️ Stack Technique

### Frontend
![Vue.js](https://img.shields.io/badge/Vue.js-3-4FC08D?style=flat-square&logo=vuedotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

### Bibliothèques
- 🎯 **@heroicons/vue** — Icônes UI
- 🖼️ **@devicon/vue** — Icônes technologies
- 🎨 **simple-icons** — Logos de marque
- 🌊 **lenis** — Smooth scroll
- 🔧 **@vueuse/core** — Utilitaires Vue
- 📐 **vite-svg-loader** — Import SVG comme composant

### Services & Outils
- 📬 **Web3Forms** — API pour le formulaire de contact
- ☁️ **Vercel** — Hébergement et CI/CD
- 🐙 **GitHub** — Version control

---

## 📂 Structure du Projet

```
portfolio-joseph/
├── public/
│   ├── cv-joseph-mbiki.pdf
│   ├── photo-joseph.jpg
│   └── certifications/
│       └── excel-avance-disasterready.pdf
├── src/
│   ├── assets/
│   │   └── icons/
│   │       └── linkedin.svg
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.vue
│   │   │   └── Footer.vue
│   │   ├── sections/
│   │   │   ├── Hero.vue
│   │   │   ├── About.vue
│   │   │   ├── Services.vue
│   │   │   ├── Skills.vue
│   │   │   ├── Timeline.vue
│   │   │   ├── Projects.vue
│   │   │   └── Contact.vue
│   │   └── ui/
│   │       ├── SectionTitle.vue
│   │       ├── GlassCard.vue
│   │       ├── NeonButton.vue
│   │       ├── Badge.vue
│   │       └── BackToTop.vue
│   ├── composables/
│   │   ├── useScrollReveal.js
│   │   ├── useCountUp.js
│   │   └── useTheme.js
│   ├── data/
│   │   └── portfolio.js
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Installation & Développement

### Prérequis

- 🟢 **Node.js** ≥ 18
- 📦 **npm** ≥ 9

### Installation

```bash
# Cloner le repo
git clone https://github.com/JOSEPH19-cyber/mon-portfolio-officiel.git
cd mon-portfolio-officiel

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

### Build de production

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `dist/`.

---

## 🎯 Personnalisation

Toutes les données du portfolio sont **centralisées** dans un seul fichier :

```
src/data/portfolio.js
```

Pour personnaliser le portfolio :
1. 📝 Modifier `portfolio.js` (identité, bio, projets, compétences...)
2. 🖼️ Remplacer `public/photo-joseph.jpg` par ta photo
3. 📄 Remplacer `public/cv-joseph-mbiki.pdf` par ton CV
4. 📬 Remplacer la clé Web3Forms dans `src/components/sections/Contact.vue`

**Les stats se mettent à jour automatiquement** (projets, services, certifications, stacks).

---

## 📬 Contact

- 💼 **LinkedIn** : [joseph-mbiki-5346a5374](https://www.linkedin.com/in/joseph-mbiki-5346a5374)
- 🐙 **GitHub** : [JOSEPH19-cyber](https://github.com/JOSEPH19-cyber)
- 📧 **Email** : [josephmbiki06@gmail.com](mailto:josephmbiki06@gmail.com)
- 💬 **WhatsApp** : [+243 83 99 73 401](https://wa.me/243839973401)

---

<div align="center">

**Fait avec ❤️ et Vue.js**

</div>