# Friedemann Gumz - Forstbewertung Schorndorf

Eine Single Page Application für das Forstbewertungsunternehmen Friedemann Gumz in Schorndorf, Baden-Württemberg.

## 🌲 Über das Projekt

Diese Website präsentiert die Dienstleistungen von Friedemann Gumz, einem spezialisierten Unternehmen für die Bewertung von Forstgrundstücken.

## ✨ Features

- **Single Page Application**: Flüssige Navigation ohne Seitenreload
- **Moderne UI/UX**: Professionelles Design mit natürlichen Farben
- **Kontaktformular**: Interaktives Formular für Kundenanfragen
- **SEO-optimiert**: Suchmaschinenfreundliche Struktur
- **Smooth Scrolling**: Sanfte Navigation zwischen Sektionen
- **Accessibility**: Barrierefreie Bedienung

## 🚀 Technologie-Stack

- **Frontend**: React 19.1.0 mit TypeScript
- **Build Tool**: Vite 7.0.0
- **Styling**: CSS3 mit CSS Grid und Flexbox
- **Linting**: ESLint mit TypeScript-Unterstützung
- **Type Checking**: TypeScript 5.8.3

## 📦 Installation

1. Repository klonen:

```bash
git clone https://github.com/yourusername/forst-gumz.git
cd forst-gumz
```

2. Dependencies installieren:

```bash
npm install
```

3. Entwicklungsserver starten:

```bash
npm run dev
```

4. Im Browser öffnen: `http://localhost:5173`

## 🛠️ Verfügbare Scripts

```bash
# Entwicklungsserver starten
npm run dev

# Production Build erstellen
npm run build

# Code linting
npm run lint

# Preview des Production Builds
npm run preview
```

## 🏗️ Projekt-Struktur

```
forst/
├── src/
│   ├── components/          # React Komponenten
│   │   ├── About.tsx       # Über mich Sektion
│   │   ├── Contact.tsx     # Kontaktformular
│   │   ├── Footer.tsx      # Footer
│   │   ├── Header.tsx      # Navigation
│   │   ├── Hero.tsx        # Hero Sektion
│   │   ├── Services.tsx    # Dienstleistungen
│   │   └── WhyChooseMe.tsx # Vorteile Sektion
│   ├── App.tsx             # Hauptkomponente
│   ├── App.css             # Globale Styles
│   └── main.tsx            # Entry Point
├── public/                 # Statische Assets
├── index.html              # HTML Template
└── package.json            # Abhängigkeiten
```

## 🎨 Design-Konzept

- **Farbschema**: Natürliche Grün- und Erdtöne
- **Typografie**: Open Sans für optimale Lesbarkeit
- **Layout**: CSS Grid und Flexbox für flexible Layouts
- **Bilder**: Platzhalter für Wald- und Profilbilder

## 🔧 Anpassungen

### Bilder ersetzen

Ersetzen Sie die Platzhalter in den Komponenten durch echte Bilder:

- Hero-Sektion: Waldaufnahme aus der Region
- Über mich: Professionelles Porträt
- Weitere Fotos nach Bedarf

### Kontaktdaten

- `src/components/Contact.tsx`
- `src/components/Footer.tsx`

### Inhalt

jeweiligen Komponenten

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Empfohlen)

```bash
# Vercel CLI installieren
npm i -g vercel

# Deployen
vercel
```

### Netlify

```bash
# Build erstellen
npm run build

# dist/ Ordner zu Netlify hochladen
```

### GitHub Pages

```bash
# Build erstellen
npm run build

# dist/ Ordner zu gh-pages branch pushen
```

## 🔒 Umgebungsvariablen

Für zusätzliche Konfigurationen erstellen Sie eine `.env` Datei:

```env
VITE_CONTACT_EMAIL=info@forst-gumz.de
VITE_CONTACT_PHONE=+49123456789
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
```

## 📈 SEO-Optimierung

- Semantische HTML-Struktur
- Meta-Tags in `index.html`
- Alt-Tags für Bilder
- Strukturierte Daten (Schema.org)
- Optimierte Ladezeiten

## 🤝 Beitragen

1. Fork des Repositories
2. Feature Branch erstellen (`git checkout -b feature/neue-funktion`)
3. Änderungen committen (`git commit -m 'Neue Funktion hinzufügen'`)
4. Branch pushen (`git push origin feature/neue-funktion`)
5. Pull Request erstellen

## 📄 Lizenz

Dieses Projekt ist urheberrechtlich geschützt. Alle Rechte vorbehalten.

## 📞 Kontakt

**Forst Gumz**

- 📧 E-Mail: info@forst-gumz.de
- 📞 Telefon: +49 123 456 789
- 📍 Standort: Schorndorf, Baden-Württemberg

---

Entwickelt mit ❤️ für nachhaltige Forstwirtschaft in Baden-Württemberg
