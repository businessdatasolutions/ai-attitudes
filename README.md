# AI Ethische Vragen Generator

Deze webapplicatie presenteert willekeurige ethische vraagstukken rondom de mate waarin AI al dan niet menselijke eigenschappen, emoties of gedragingen zou moeten vertonen. Het centrale thema is het **besef van antropomorfisme** onder gebruikers: in hoeverre vinden we het wenselijk of zelfs ongemakkelijk wanneer AI zich menselijk gedraagt?

## Overzicht

- **Antropomorfisme**  
  De vragen gaan in op onderwerpen als transparantie, mentaal bewustzijn, mens-AI relaties, omgangsvormen en verantwoordelijkheid. Ze zetten de gebruiker aan het denken over welke aspecten van AI wel of niet als menselijk (mogen) worden ervaren.

- **Kaartjes met Thema en Kleur**  
  Elke vraag is gekoppeld aan een `theme`, een `color` (Tailwind CSS-klasse) en de eigenlijke `question`. De achtergrondkleur zorgt voor een snelle visuele associatie met het thema (bijv. “bg-blue-200” voor transparantie).

- **Kaart-flip Mechanisme**  
  De vragen worden getoond op een ‘kaartje’ dat visueel om te klappen is. Bij elke klik wordt een eventuele ‘achterkant’ zichtbaar en kan de volgende vraag geladen worden.

## Bestanden en Structuur

1. **`index.html`**  
   - Bevat de algemene structuur, waaronder het kaart-element (`card-container`, `questionCard`), de thema-weergave (`theme`) en de vraag-weergave (`question`).  
   - **Flip-knop** (`flipButton`): Door hierop te klikken, wordt de kaart geflipt en verschijnt de volgende vraag.

2. **`script.js`**  
   - **`questions[]`:** Array met alle mogelijke vragen. Iedere vraag heeft:
     - `theme` (onderwerp, zoals “Transparantie”),
     - `question` (de eigenlijke vraag),
     - `color` (de achtergrondkleur van het kaartje).  
   - **`selectRandomQuestions(count)`:** Shuffle-t en selecteert `count` vragen.  
   - **`setQuestion()`:** Rendert de huidige vraag en past het thema en de kleur toe.  
   - **`flipCard()`:** Beheert de flip-animatie en laadt de volgende vraag na een klik op de knop.  
   - **Queryparameter `count`**: Stelt in hoeveel vragen willekeurig gekozen worden.  
     - Voorbeeld: `index.html?count=8` om acht vragen te tonen in plaats van de standaardwaarde (5).

## Installatie en Gebruik

1. **Kloon of download de repository**  
   ```bash
   git clone https://github.com/<gebruiker>/<repo-naam>.git
   ```
   Of download de bestanden als ZIP en pak ze uit.

2. **Open in de browser**  
   - Open `index.html` in een moderne webbrowser.  
   - Er is geen externe installatie nodig; de app maakt gebruik van [Tailwind CSS](https://tailwindcss.com/) en draait direct in de browser.

3. **Pas desgewenst het aantal vragen aan**  
   - Gebruik de queryparameter `count` om aan te geven hoeveel willekeurige vragen je wilt zien.  
   - Voorbeeld:  
     ```
     file:///.../index.html?count=10
     ```
     Selecteert 10 willekeurige vragen uit de verzameling.

4. **Interactief gebruik**  
   - Druk op **Nieuwe vraag** om de kaart te flippen en de volgende vraag te zien.
   - De achtergrondkleur van de kaart wordt aangepast aan het thema van de vraag.
   - Ga door de vragen totdat je de gewenste reflectie of discussie hebt gevoerd.

## Mogelijke Uitbreidingen

- **Resultaten of Discussie**  
  - Momenteel worden er geen antwoorden vastgelegd. Je zou een uitgebreidere versie kunnen maken waar gebruikers feedback geven (bijv. “Eens” / “Oneens”) of antwoorden opslaan voor later gebruik.

- **Extra Vragen**  
  - Voeg nieuwe vraagobjecten toe in de `questions[]` array om de reikwijdte rondom antropomorfisme te vergroten.

- **Animate de Flip**  
  - De flip-animatie is nu relatief eenvoudig (CSS `transform: rotateY(180deg)`). Je kunt dit uitbreiden met transitions, 3D-effecten of andere styling.

## Referentie

> Should AI systems behave like people? | AISI Work. (n.d.). Geraadpleegd op 27 januari 2025, van  
> [https://www.aisi.gov.uk/work/should-ai-systems-behave-like-people](https://www.aisi.gov.uk/work/should-ai-systems-behave-like-people)

## Licentie en Gebruik

- Dit project is vrij te gebruiken en aan te passen voor educatieve of niet-commerciële doeleinden.  
- Controleer bij commerciële toepassingen of er referenties of rechten van derden van toepassing zijn. 