# KartenPokédex v3.18

Neu in v3.18:

- **Pokémon-Karten lassen sich nach Pokédex-Nummer sortieren.** Im Reiter „Alle Karten“ erscheint beim Filter „Pokémon“ eine Sortierung mit:
  - Pokédex-Nr. aufsteigend
  - Pokédex-Nr. absteigend
  - zuletzt hinzugefügt
  - Name A–Z
- Standardmäßig werden Pokémon-Karten jetzt nach **Pokédex-Nr. aufsteigend** angezeigt.
- **Trainerkarten-OCR deutlich verbessert:**
  - eigener deutscher + englischer OCR-Modus für Trainerkarten
  - getrennte Erkennung der Namenszeile und des Kartenkopfs
  - besserer Fallback für ältere Trainerkarten-Layouts
  - unsichere OCR-Ergebnisse werden nicht mehr so leicht automatisch als Kartenname übernommen
- Trainerkarten-Typen (Item, Unterstützer, Pokémon-Ausrüstung, Stadion) werden weiterhin automatisch erkannt, wenn der Typ auf der Karte lesbar ist. Bei älteren normalen Trainerkarten bleibt „Item“ der Standard.
- Eine manuell gewählte Trainerkarten-Kategorie wird nicht mehr nachträglich von der OCR überschrieben.

Alle Daten und Backups aus v3.16 bleiben kompatibel.
