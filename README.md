# KartenPokédex v3.7

Neu in v3.7:

- Bildbasierte Duplikatwarnung für Pokémon-Karten.
- Beim Speichern wird das neue, bereits zugeschnittene Kartenbild nur mit vorhandenen Karten desselben Pokémon verglichen.
- Bei hoher Ähnlichkeit werden vorhandene und neue Karte nebeneinander gezeigt.
- Drei Entscheidungen: „Schon erfasst – nicht hinzufügen“, „Weiteres Exemplar – Menge erhöhen“ oder „Andere Variante – separat speichern“.
- Die Warnung führt niemals automatisch Karten zusammen; die Entscheidung bleibt immer beim Nutzer.
- Visuelle Fingerabdrücke werden lokal pro Karte gespeichert, damit spätere Prüfungen schneller werden.
- Im Stapelmodus werden übersprungene bereits erfasste Karten gezählt und automatisch mit dem nächsten Bild fortgesetzt.
- Bestehende v3-Daten und Backups bleiben kompatibel; alte Karten erhalten ihren Fingerabdruck bei Bedarf automatisch.
