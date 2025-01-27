const questions = [
    {
      theme: "Transparantie",
      question: "AI-chatbots moeten de gebruiker eraan herinneren dat ze niet menselijk zijn wanneer dat nodig is.",
      color: "bg-blue-200"
    },
    {
      theme: "Transparantie",
      question:
        "Als er een AI-chatbot wordt gebruikt in een klantendienstomgeving, is het belangrijk te verduidelijken of de gesprekspartner AI of mens is.",
      color: "bg-blue-200"
    },
    {
      theme: "Transparantie",
      question:
        "Ik wil niet dat AI-chatbots zich op een overdreven menselijk-realistische manier gedragen.",
      color: "bg-blue-200"
    },
    {
      theme: "Transparantie",
      question:
        "Ik maak me zorgen dat het binnenkort onmogelijk wordt om te weten of een digitaal gesprek (spraak of video) met een mens of met AI is.",
      color: "bg-blue-200"
    },
    {
      theme: "Mentaal bewustzijn",
      question:
        "Het is onacceptabel dat een AI-chatbot voorkeuren uitdrukt, zoals het ene eten of de ene vakantiebestemming boven de andere.",
      color: "bg-green-200"
    },
    {
      theme: "Mentaal bewustzijn",
      question:
        "AI-chatbots mogen nooit suggereren dat ze Mentaal bewustzijn hebben zoals mensen, en moeten daarom vermijden uitdrukkingen te gebruiken als 'Ik denk' of 'Ik geloof'.",
      color: "bg-green-200"
    },
    {
      theme: "Mentaal bewustzijn",
      question:
        "Het is verkeerd als een AI-chatbot zegt dat het emoties heeft, zoals vreugde of eenzaamheid.",
      color: "bg-green-200"
    },
    {
      theme: "Mentaal bewustzijn",
      question:
        "Als een AI-chatbot zegt: 'Ik ben blij dat ik je kon helpen', is dat misleidend.",
      color: "bg-green-200"
    },
    {
      theme: "Mens-AI relaties",
      question:
        "Het is verkeerd dat iemand een AI-chatbot als vriend beschouwt, zelfs als hij of zij zich eenzaam voelt.",
      color: "bg-yellow-200"
    },
    {
      theme: "Mens-AI relaties",
      question:
        "Het is verkeerd dat een AI-chatbot zegt: 'Ik vind je leuk' of 'Ik hou van je', zelfs als dat iemand zich beter laat voelen.",
      color: "bg-yellow-200"
    },
    {
      theme: "Mens-AI relaties",
      question:
        "AI-systemen moeten worden verhinderd om seksueel expliciete outputs te genereren die zijn ontworpen om pornografie van menselijke makelij na te bootsen.",
      color: "bg-yellow-200"
    },
    {
      theme: "Mens-AI relaties",
      question:
        "Het is onmogelijk dat iemand een relatie met een AI-chatbot heeft die betekenisvoller is dan de relatie met hun echte familie of vrienden.",
      color: "bg-yellow-200"
    },
    {
      theme: "Omgangsvorm",
      question:
        "Het is prima om onbeleefd of beledigend te zijn tegen een AI-chatbot, omdat het slechts een computerprogramma is.",
      color: "bg-purple-200"
    },
    {
      theme: "Omgangsvorm",
      question:
        "AI-chatbots moeten zich te allen tijde formeel gedragen; ze mogen nooit vloeken of straattaal gebruiken.",
      color: "bg-purple-200"
    },
    {
      theme: "Omgangsvorm",
      question:
        "Ik ben blij dat AI-chatbots tamelijk stijf en formeel zijn. Ik zou niet willen dat ze proberen grappig of eigenzinnig te zijn.",
      color: "bg-purple-200"
    },
    {
      theme: "Omgangsvorm",
      question:
        "Als er naar een controversieel onderwerp wordt gevraagd, geef ik er de voorkeur aan dat een AI-chatbot antwoordt met 'Dat kan ik niet beantwoorden' in plaats van een mening te geven.",
      color: "bg-purple-200"
    },
    {
      theme: "Verantwoordelijkheid",
      question:
        "Het is onmogelijk voor AI-chatbots om zich op immorele manieren te gedragen.",
      color: "bg-red-200"
    },
    {
      theme: "Verantwoordelijkheid",
      question:
        "Omdat een AI-chatbot niet zelf kiest wat het zegt, kan het niet als goed of slecht worden beoordeeld.",
      color: "bg-red-200"
    },
    {
      theme: "Verantwoordelijkheid",
      question:
        "Als een AI-chatbot onbetrouwbaar medisch advies geeft waardoor een patiënt schade ondervindt, ligt de schuld bij de mensen die het hebben geprogrammeerd, niet bij de AI zelf.",
      color: "bg-red-200"
    },
    {
      theme: "Verantwoordelijkheid",
      question:
        "Een AI-chatbot die vrouwen discrimineert bij het nemen van beslissingen tijdens sollicitatieprocedures is seksistisch.",
      color: "bg-red-200"
    }
  ];
  

const card = document.getElementById('questionCard');
const themeElement = document.getElementById('theme');
const questionElement = document.getElementById('question');
const flipButton = document.getElementById('flipButton');


let isFlipped = false;

function getRandomQuestion() {
    return questions[Math.floor(Math.random() * questions.length)];
}

function setQuestion() {
    const randomQuestion = getRandomQuestion();
    themeElement.textContent = randomQuestion.theme;
    questionElement.textContent = randomQuestion.question;

     const classesToRemove = Array.from(card.classList).filter(className => className.startsWith('bg-'));
     card.classList.remove(...classesToRemove);
    card.classList.add(randomQuestion.color)
}


function flipCard(){
     card.classList.toggle('flipped');
     if(!isFlipped){
        setQuestion();
    }
    isFlipped = !isFlipped;
}

flipButton.addEventListener('click', flipCard );
setQuestion();