# KartenPokédex v3.14

Optimierungen in v3.14:

- Schnellere Namens-OCR: zuerst ein kleiner schneller Namensausschnitt; nur bei unsicheren Ergebnissen folgen die aufwendigeren OCR-Durchläufe.
- OCR-Engine wird bereits beim Öffnen von „Karte hinzufügen“ im Hintergrund vorbereitet.
- Bildvorverarbeitung der OCR nutzt Histogramme statt große Pixel-Arrays zu sortieren und erzeugt die zusätzlichen OCR-Bilder nur noch bei Bedarf.
- Pokémon-Namen und Suchbegriffe werden einmalig vorindiziert statt bei jeder Suche/OCR erneut aufbereitet.
- Karten und Pokémon werden über Maps direkt gefunden statt jedes Mal komplette Arrays zu durchsuchen.
- Die Duplikatprüfung verwendet einen Index pro Pokémon statt jedes Mal alle Karten zu filtern.
- Im Stapelmodus wird die komplette Kartenübersicht nicht mehr nach jedem einzelnen Speichern neu aufgebaut; sie wird erst am Ende vollständig aktualisiert.
- OCR-Fortschrittsupdates wurden gedrosselt, um unnötige UI-Arbeit zu vermeiden.
- Statische App- und OCR-Ressourcen werden nach dem ersten Laden bevorzugt aus dem Cache verwendet; dadurch starten App und OCR bei weiteren Durchläufen schneller.
- Die Verbindung zum OCR-CDN wird beim App-Start vorab vorbereitet.
- Bestehende Funktionen, Datenbank und Backup-Format bleiben kompatibel.
