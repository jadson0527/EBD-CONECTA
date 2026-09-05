function carregarListaLicoes() {

const classe = localStorage.getItem("classeSelecionada");

const trimestre = localStorage.getItem("trimestreSelecionado");

const lista = document.getElementById("listaLicoes");

const tituloTrimestre = document.getElementById("tituloTrimestre");

const tituloClasse = document.getElementById("tituloClasse");


if (!lista) {
    return;
}


// Nomes das classes

const nomesClasses = {

    adultos: "Lições de Adultos",

    jovens: "Lições de Jovens",

    juvenis: "Lições de Juvenis",

    adolescentes: "Lições de Adolescentes",

    "pre-adolescentes": "Lições de Pré-Adolescentes",

    juniores: "Lições de Juniores"

};


// Mostra o nome da classe

if (tituloClasse && nomesClasses[classe]) {

    tituloClasse.textContent = nomesClasses[classe];

}


// Mostra o trimestre selecionado

if (tituloTrimestre && trimestre) {

    tituloTrimestre.textContent =
        "📚 " + trimestre + "º Trimestre";

}


// Verifica se existem lições cadastradas

if (
    typeof licoes === "undefined" ||
    !licoes[classe] ||
    !licoes[classe][trimestre]
) {

    lista.innerHTML = `
        <div class="card-licao">

            <div class="info-licao">

                <h3>📚 Nenhuma lição cadastrada</h3>

                <p>
                    As lições deste trimestre ainda não foram cadastradas.
                </p>

            </div>

        </div>
    `;

    return;

}


const listaDoTrimestre = licoes[classe][trimestre];


// Limpa a lista

lista.innerHTML = "";


// Cria cada lição

Object.keys(listaDoTrimestre).forEach(function(numero) {

    const licao = listaDoTrimestre[numero];


    const card = document.createElement("div");

    card.className = "card-licao";


    card.innerHTML = `

        <div class="numero-licao">

            ${String(numero).padStart(2, "0")}

        </div>


        <div class="info-licao">

            <h3>
                ${licao.numero}
            </h3>

            <p>
                ${licao.titulo}
            </p>

        </div>


        <button onclick="abrirLicao(${numero})">

            Estudar

        </button>

    `;


    lista.appendChild(card);

});

}

// Carrega a lista de lições quando a página abre

carregarListaLicoes();
function carregarListaLicoes() {

    const classe = localStorage.getItem("classeSelecionada");
    const trimestre = localStorage.getItem("trimestreSelecionado");

    const lista = document.getElementById("listaLicoes");

    if (!lista) {
        return;
    }

    if (!licoes[classe] || !licoes[classe][trimestre]) {
        return;
    }

    const listaDoTrimestre = licoes[classe][trimestre];

    lista.innerHTML = "";

    Object.keys(listaDoTrimestre).forEach(function(numero) {

        const licao = listaDoTrimestre[numero];

        lista.innerHTML += `

            <div class="card-licao">

                <div class="numero-licao">
                    ${String(numero).padStart(2, "0")}
                </div>

                <div class="info-licao">

                    <h3>${licao.numero}</h3>

                    <p>${licao.titulo}</p>

                </div>

                <button onclick="abrirLicao(${numero})">
                    Estudar
                </button>

            </div>

        `;

    });

}

carregarListaLicoes();
function carregarListaLicoes() {

    const classe = localStorage.getItem("classeSelecionada");
    const trimestre = localStorage.getItem("trimestreSelecionado");

    const lista = document.getElementById("listaLicoes");

    if (!lista) {
        return;
    }

    if (!licoes[classe] || !licoes[classe][trimestre]) {
        lista.innerHTML = "<p>Nenhuma lição cadastrada.</p>";
        return;
    }

    const listaLicoes = licoes[classe][trimestre];

    lista.innerHTML = "";

    Object.keys(listaLicoes).forEach(function(numero) {

        const licao = listaLicoes[numero];

        lista.innerHTML += `

            <div class="card-licao">

                <div class="numero-licao">
                    ${String(numero).padStart(2, "0")}
                </div>

                <div class="info-licao">

                    <h3>${licao.numero}</h3>

                    <p>${licao.titulo}</p>

                </div>

                <button onclick="abrirLicao(${numero})">
                    Estudar
                </button>

            </div>

        `;

    });

}

carregarListaLicoes();

function carregarListaLicoes() {

    const classe = localStorage.getItem("classeSelecionada");
    const trimestre = localStorage.getItem("trimestreSelecionado");

    const lista = document.getElementById("listaLicoes");

    if (!lista) {
        return;
    }

    if (!licoes[classe] || !licoes[classe][trimestre]) {

        lista.innerHTML =
            "<p>Nenhuma lição cadastrada.</p>";

        return;
    }

    const listaLicoes = licoes[classe][trimestre];

    lista.innerHTML = "";

    Object.keys(listaLicoes).forEach(function(numero) {

        const licao = listaLicoes[numero];

        lista.innerHTML += `

            <div class="card-licao">

                <div class="numero-licao">
                    ${String(numero).padStart(2, "0")}
                </div>

                <div class="info-licao">

                    <h3>${licao.numero}</h3>

                    <p>${licao.titulo}</p>

                </div>

                <button onclick="abrirLicao(${numero})">
                    Estudar
                </button>

            </div>

        `;

    });

}

carregarListaLicoes();