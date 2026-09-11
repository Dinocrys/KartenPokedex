# Mein Karten-Pokédex – installierbare PWA

## Was diese Version kann
- deutscher Nationaldex
- Suche / Gesammelt / Fehlt
- Kartenfotos über Kamera oder Galerie
- mehrere Karten pro Pokémon
- lokale Speicherung in IndexedDB
- Backup-Export / Backup-Import
- Installation auf Android als PWA
- Offline-Start nach dem ersten erfolgreichen Laden

## Wichtig beim Wechsel von der Testdatei
Die bisherige HTML-Testversion wurde über `content://...` geöffnet.
Android/Chrome behandelt die installierte HTTPS-Version als einen anderen Speicherbereich.
Darum werden vorhandene Karten NICHT automatisch übernommen.

Vor dem Wechsel:
1. Alte Testversion öffnen.
2. Oben auf den Kopf doppelt tippen.
3. `Backup exportieren`.
4. Installierte PWA öffnen.
5. Menü `☰` -> `Backup importieren`.

## Kostenlos über GitHub Pages veröffentlichen
1. Auf github.com ein kostenloses Konto nutzen/anlegen.
2. Neues Repository erstellen, z. B. `karten-pokedex`.
3. Die Dateien aus diesem Ordner in die oberste Ebene des Repositories hochladen:
   - index.html
   - manifest.webmanifest
   - sw.js
   - icon-192.png
   - icon-512.png
4. Repository öffnen -> Settings -> Pages.
5. Unter `Build and deployment`:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
6. Speichern.
7. Nach kurzer Zeit erscheint dort die HTTPS-Adresse der App.
8. Diese Adresse auf dem Android-Handy in Chrome öffnen.
9. In der App auf `↓` drücken oder Chrome-Menü -> `App installieren`.

Danach erscheint der Karten-Pokédex wie eine normale App mit eigenem Icon auf dem Homescreen.

## Datensicherung
Die Kartenfotos liegen lokal auf dem jeweiligen Gerät.
Regelmäßig über `☰ -> Backup exportieren` sichern.
