// ========================================
// EBD CONECTA
// SCRIPT PRINCIPAL
// ========================================


// ========================================
// CARREGAR LISTA DE LIÇÕES
// ========================================

function carregarListaLicoes() {

    const classe = localStorage.getItem("classeSelecionada");
    const trimestre = localStorage.getItem("trimestreSelecionado");

    const lista = document.getElementById("listaLicoes");

    const tituloTrimestre =
        document.getElementById("tituloTrimestre");

    const tituloClasse =
        document.getElementById("tituloClasse");


    // Se a página não possui a lista, não faz nada

    if (!lista) {
        return;
    }


    // ========================================
    // NOMES DAS CLASSES
    // ========================================

    const nomesClasses = {

        adultos: "Lições de Adultos",

        jovens: "Lições de Jovens",

        juvenis: "Lições de Juvenis",

        adolescentes: "Lições de Adolescentes",

        "pre-adolescentes":
            "Lições de Pré-Adolescentes",

        juniores:
            "Lições de Juniores"

    };


    // ========================================
    // MOSTRAR NOME DA CLASSE
    // ========================================

    if (
        tituloClasse &&
        nomesClasses[classe]
    ) {

        tituloClasse.textContent =
            nomesClasses[classe];

    }


    // ========================================
    // MOSTRAR TRIMESTRE
    // ========================================

    if (
        tituloTrimestre &&
        trimestre
    ) {

        tituloTrimestre.textContent =
            "📚 " +
            trimestre +
            "º Trimestre";

    }


    // ========================================
    // VERIFICAR DADOS
    // ========================================

    if (
        typeof licoes === "undefined" ||
        !licoes[classe] ||
        !licoes[classe][trimestre]
    ) {

        lista.innerHTML = `

            <div class="card-licao">

                <div class="info-licao">

                    <h3>
                        📚 Nenhuma lição cadastrada
                    </h3>

                    <p>
                        As lições deste trimestre
                        ainda não foram cadastradas.
                    </p>

                </div>

            </div>

        `;

        return;
    }


    // ========================================
    // PEGAR LIÇÕES DO TRIMESTRE
    // ========================================

    const listaLicoes =
        licoes[classe][trimestre];


    // Limpar lista

    lista.innerHTML = "";


    // ========================================
    // CRIAR CARDS
    // ========================================

    Object.keys(listaLicoes).forEach(
        function(numero) {

            const licao =
                listaLicoes[numero];


            const card =
                document.createElement("div");


            card.className =
                "card-licao";


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


                <button
                    onclick="abrirLicao(${numero})"
                >

                    Estudar

                </button>

            `;


            lista.appendChild(card);

        }
    );

}



// ========================================
// ABRIR UMA LIÇÃO
// ========================================

function abrirLicao(numero) {

    const classe =
        localStorage.getItem(
            "classeSelecionada"
        );


    const trimestre =
        localStorage.getItem(
            "trimestreSelecionado"
        );


    // Verificar se existe classe

    if (!classe) {

        alert(
            "Selecione uma classe primeiro."
        );

        return;
    }


    // Verificar se existe trimestre

    if (!trimestre) {

        alert(
            "Selecione um trimestre primeiro."
        );

        return;
    }


    // Salvar número da lição

    localStorage.setItem(
        "licaoSelecionada",
        numero
    );


    // Abrir página da lição

    window.location.href =
        "licao.html";

}



// ========================================
// INICIALIZAÇÃO
// ========================================

carregarListaLicoes();