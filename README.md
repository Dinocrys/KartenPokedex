# KartenPokédex v3.16

Neu in v3.16:

- Neuer Menüpunkt **„Duplikate prüfen“** für die bereits gespeicherte Sammlung.
- Die App vergleicht bestehende Kartenfotos und zeigt verdächtige Paare nacheinander an.
- Bei jedem Treffer gibt es drei Entscheidungen:
  - **Doppelt erfasst**: dieselbe physische Karte wurde versehentlich zweimal gespeichert; ein Eintrag wird entfernt, ohne die Menge zu addieren.
  - **Weiteres Exemplar**: dieselbe Kartenvariante ist wirklich mehrfach vorhanden; die Einträge werden zusammengeführt und die Mengen addiert.
  - **Andere Karte**: das Paar wird als geprüft markiert und bei späteren Prüfungen nicht erneut vorgeschlagen.
- Pokémon-, Trainer- und Energiekarten werden berücksichtigt. Bei Trainerkarten fließen neben der Bildähnlichkeit auch Kartenname und Trainerkarten-Typ in die Vorauswahl ein.
- Bereits berechnete Bild-Fingerprints werden gespeichert, damit spätere Prüfungen schneller laufen.
- Als „andere Karte“ bestätigte Paare werden im Backup mitgesichert und beim Import wiederhergestellt.

Enthält weiterhin alle Funktionen aus v3.15, einschließlich Trainer-OCR, Trainerkarten-Typen und der Duplikatprüfung beim Hinzufügen neuer Karten.
