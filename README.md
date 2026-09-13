# KartenPokédex v3.23

Lokale PWA zur Verwaltung einer Pokémon-Kartensammlung. Karten, Fotos, Mengen, Sets und Pokédex-Zuordnungen werden im Browser in IndexedDB gespeichert.

## Neu in v3.23

### Trainerkarten-Erkennung
- Typzeile und Kartenname werden jetzt aus getrennten Bildbereichen gelesen. Dadurch soll z. B. **„Unterstützer“ nicht mehr als Kartenname** übernommen werden.
- Trainer-Typen werden mit toleranter OCR-Auswertung erkannt, sodass leichte Lesefehler wie `Unterstützen` oder auseinandergezogene Buchstaben trotzdem als **Unterstützer** erkannt werden können.
- Die Namenszeile wird in einem schmalen Bereich gelesen, der sowohl moderne linke als auch ältere rechte Kartenlayouts abdeckt.
- Führende OCR-Artefakte wie `E Flottball` sowie einzelne Randzeichen/Ziffern werden bereinigt.
- Für ältere normale Trainerkarten gibt es einen vorsichtigen **Item-Fallback**, wenn der Name eindeutig im typischen rechten Namensbereich erkannt wird.
- Referenzfälle für diese Version: **Leval → Unterstützer**, **Flottball → Item**, **Stadtgeschäft → Stadion**.

### Filter-Layout
- Trainerkarten-Typen im Fenster **„Filter & Sortierung“** werden auf schmalen Displays als übersichtliches 2-Spalten-Raster dargestellt.
- „Alle Trainer“ belegt dabei eine eigene volle Zeile; lange Bezeichnungen wie „Pokémon-Ausrüstung“ werden nicht mehr seitlich abgeschnitten.

### Wartung
- `404.html` ist wieder mit der aktuellen App-Version synchronisiert, damit GitHub Pages bei Fallback-Aufrufen keine veraltete App ausliefert.
- Service-Worker-Cache auf **v3.23** erhöht.
- Datenbankschema bleibt unverändert auf **Schema v2**. Backups und vorhandene Daten aus v3.20–v3.22 bleiben kompatibel.

## Wichtige Hinweise zur Datensicherheit
- Die Sammlung liegt lokal im Browser-/PWA-Speicher und nicht im GitHub-Repository.
- Regelmäßig über **Menü → Backup exportieren** sichern.
- Der Backup-Import wird vor dem Ersetzen der Sammlung geprüft und atomar übernommen.
- Android-/Chrome-„Daten löschen“ kann den lokalen Sammlungsbestand entfernen.

## Update auf GitHub Pages
Alle Dateien aus der ZIP in das bestehende Repository übernehmen und die alten Dateien ersetzen. Besonders wichtig sind `index.html`, `404.html`, `sw.js`, `manifest.webmanifest` und die Icons. Nach dem Upload die Webseite einmal in Chrome öffnen/aktualisieren und danach die installierte PWA neu starten.
