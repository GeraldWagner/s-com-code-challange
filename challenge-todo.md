# TODO - Challenge

## Userstory

Als Sparkassenkunde möchte ich einen Tilgungsplan für Kredite berechnen können, damit ich den Verlauf meines Darlehens besser verstehen kann.

## Akzeptanzkriterien

- Der Nutzer kann Darlehensbetrag, Sollzinssatz und anfängliche Tilgung (%) eingeben
- Optional: Der Nutzer kann eine Zinsbindungsdauer zwischen 1 - 30 Jahren wählen
- Mit Klick auf den Button “Berechnen” werden dem Nutzer die monatliche Rate und optional die Restschuld am Ende der Zinsbindung angezeigt
- Weiterhin wird ein Tilgungsplan mit jährlicher Aufgliederung von Jahr, Rate, Zinsanteil, Tilgungsanteil und Restschuld angezeigt
- Bei Änderung der Eingabeparameter wird die Berechnung automatisch aktualisiert
- Der Tilgungsrechner ist sowohl mobil als auch per Desktop System verwendbar

## Ergänzende Informationen

- Die Umsetzung soll mittels ReactJS/NextJS und MUI erfolgen
- Es soll auf gute Bedienbarkeit und ansprechende optische Darstellung geachtet werden
- Der entstandene Code soll problemlos auch auf Systemen anderer Entwickler lauffähig sein
- Die Berechnung kann anhand von: <https://finanzrechner-tilgung.faz.net/rechner3/faz/tilgungsrechner/?AspxAutoDetectCookieSupport=1> überprüft werden
- Die Implementierung kann in Teilen prototypenhaft erfolgen, soll aber wesentliche Programmier-/Architekturkonzepte erkennen lassen. Abkürzungen sollten erkennbar sein und gern erläutert werden.
- Das Arbeitsergebnis muss inklusive dem Sourcecode komplett bereitgestellt werden

## Todo List 

### Aktzeptanzkriterien

- [X] Eingabe Darlehensbetrag
- [X] Eingabe Sollzinssatz
- [X] Eingabe anfängliche Tilgung (%)
- [X] Einheiten der Eingaben
- [ ] Optional: Eingabe Zinsbindungsdauer zwischen 1 - 30 Jahren
- [ ] Klick auf Button “Berechnen” => Anzeige dem Nutzer die monatliche Rate
- [ ] Optional: Anzeige Restschuld am Ende der Zinsbindung angezeigt
- [ ] Anzeige Tilgungsplan mit jährlicher Aufgliederung von Jahr, Rate, Zinsanteil, Tilgungsanteil und Restschuld
- [ ] Änderung der Eingabeparameter => Berechnung automatisch aktualisiert
- [ ] Tilgungsrechner ist sowohl mobil als auch per Desktop System verwendbar

- [ ] Einschränkung der Eingabe-Parameter
- [ ] Darstellung der Zahlen 250007 => 250.007

### NextJS 

Wie kann ich die Technologie einbinden? 
Übergabe der "GET" Parameter?

- [ ] NextJS installieren

### Die App soll auf unterschiedlichen Systemen laufen (Windows, Linux, Mac) Ingolf fragen?

- [ ] Docker Container erstellen

### Styling

- [ ] MUI als ReactJS Komponenten verwenden <https://mui.com/getting-started/usage/>
- [ ] Styling an S-Com ausrichten, 
      anhand der der Webseite ( oder stylesheet S-Com erfragen )

### Bereitstellung des Codes

- [ ] Upload auf GitHub
- [ ] Erstellung 

### Feedback

- [ ] Docker & Tilgungsrechner von Ingolf 
- [ ] React und Programmier-/Architekturkonzepte (Clean Code, etc.)

### Weiteres

- ggf. Test schreiben
- ggf. Barrierefreiheit Testen

> Beispiele:
> <https://www.sparkasse.de/rechner/autokostenrechner.html>
> <https://www.sparkasse.de/rechner/autokostenrechner.html>
