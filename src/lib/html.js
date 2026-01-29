export function generateIndexHtml() {
    const html = /* HTML */`
    <html>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script src="scripts.js" type="module"></script>
            <link rel="stylesheet" href="./styles.css" />
        </head>
        <body>
            <header><h2>Velkomin velkomin!</h2></header>
            <p>Veldu Flokk sem þú vilt svara spurningum úr</p>
            <ul>
                <li><a href="saga.html"> Saga </a></li>
                <li><a href="general.html"> Almenn kunnátta </a></li>
                <li><a href="science.html"> Náttúra og vísindi </a></li>
                <li><a href="art.html"> Bókmenntir og List </a></li>
                <li><a href="geography.html"> Landafræði </a></li>
                <li><a href="fun.html"> Skemmtun og afþreying </a></li>
                <li><a href="sport.html"> Íþróttir og tómstundir </a></li>
            </ul>
        </body>
    </html>
    `;
    
    return html;    
}


export function generateQuestionHtml(q) {

    const html = /* HTML */ `
  <section class="question" data-answered="False">
    <h3>${q.question}</h3>
    <button type="button" class="button button-show"> Sýna svar</button>
    <p class="answer" hidden>${q.answer}</p>
    <button type="button" class="button button-correct"> Rétt </button>
    <button type="button" class="button button-incorrect"> Rangt </button>
  </section>`;

    return html;
}

export function generateQuestionCategoryHtml(title, questionsHtml) {
    const html = /* HTML */`
    <html>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script src="scripts.js" type="module"></script>
            <link rel="stylesheet" href="./styles.css" />
        </head>
        <body>
            <header><h1>Spurningarleikur</h1></header>
            <p><a href="index.html">Til baka</a></p>
            <div class="counter">
                <div class="rett">Rétt</div>
                <div class="rangt">Rangt</div>
                <div class="correct">0</div>
                <div class="incorrect">0</div>
            </div>
            <div class="questions">
                <h2>${title}</h2>${questionsHtml}</div>
        </body>
    </html>
    `;
    
    return html;
}