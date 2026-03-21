# Top Haircut – Fariba Ranaey

Website für den Friseursalon **Top Haircut** von Fariba Ranaey, Arbeitergasse 50, 1050 Wien.

---

## Schnellstart

### Lokal öffnen (ohne Server)

1. Repository/Ordner auf dem Rechner haben
2. `index.html` im Browser öffnen:
   - **Doppelklick** auf `index.html` im Datei-Explorer / Finder
   - Oder im Terminal:
     ```bash
     open index.html        # macOS
     xdg-open index.html    # Linux
     start index.html       # Windows
     ```

> Alle Seiten funktionieren direkt als statische HTML-Dateien – kein Build-Schritt nötig.

### Lokal mit Live-Server (Hot Reload)

Falls Änderungen live im Browser sichtbar sein sollen:

```bash
# Option 1: VS Code Extension "Live Server" installieren → Rechtsklick auf index.html → "Open with Live Server"

# Option 2: Python (bereits auf den meisten Systemen installiert)
python3 -m http.server 8000
# → http://localhost:8000

# Option 3: Node.js
npx serve .
# → http://localhost:3000
```

---

## Auf GitHub veröffentlichen (GitHub Pages)

1. **Repository erstellen** auf [github.com](https://github.com) (z.B. `top-haircut`)

2. **Code hochladen:**
   ```bash
   cd /pfad/zum/Fariba
   git init
   git add index.html about.html services.html gallery.html contact.html css/ js/
   git commit -m "Initial commit"
   git remote add origin https://github.com/DEIN-USER/top-haircut.git
   git push -u origin main
   ```

3. **GitHub Pages aktivieren:**
   - Repository → **Settings** → **Pages**
   - Source: **Deploy from a branch**
   - Branch: `main` / Ordner: `/ (root)`
   - **Save**

4. Nach ca. 1 Minute ist die Seite live unter:
   ```
   https://DEIN-USER.github.io/top-haircut/
   ```

---

## Auf einem Webserver veröffentlichen

### Variante A: Klassisches Webhosting (FTP)

1. Webhosting-Paket buchen (z.B. bei World4You, Strato, IONOS)
2. FTP-Zugangsdaten erhalten
3. Mit einem FTP-Client (z.B. [FileZilla](https://filezilla-project.org/)) verbinden
4. Alle Dateien in den `public_html` / `htdocs` / `www` Ordner hochladen:
   ```
   index.html
   about.html
   services.html
   gallery.html
   contact.html
   css/style.css
   js/main.js
   ```
5. Domain aufrufen → fertig

### Variante B: Netlify (kostenlos, kein Server nötig)

1. [netlify.com](https://www.netlify.com/) → Konto erstellen
2. **"Add new site" → "Deploy manually"**
3. Den gesamten Projektordner per Drag & Drop hochladen
4. Seite ist sofort live unter einer `*.netlify.app`-URL
5. Optional: Eigene Domain verbinden unter **Domain settings**

### Variante C: Eigener Server (VPS)

```bash
# Dateien auf den Server kopieren
scp -r ./* user@server:/var/www/top-haircut/

# Nginx-Konfiguration (Beispiel)
server {
    listen 80;
    server_name top-haircut.at;
    root /var/www/top-haircut;
    index index.html;
}
```

---

## Projektstruktur

```
Fariba/
├── index.html          Startseite
├── about.html          Über uns
├── services.html       Leistungen & Preise
├── gallery.html        Galerie
├── contact.html        Kontakt & Anfahrt
├── css/
│   └── style.css       Stylesheet (Neon Noir Design)
├── js/
│   └── main.js         Navigation, Lightbox, Filter, Animationen
└── README.md
```

## Technologie

- **Vanilla HTML/CSS/JS** – kein Framework, kein Build-Schritt
- **Google Fonts** – Epilogue, Manrope, Space Grotesk
- **Material Symbols** – Icons (via Google CDN)
- Responsive Design für Desktop, Tablet & Mobile
