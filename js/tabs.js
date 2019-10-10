/**
 * @name "toggleTab" - Responsável por aplicar a classe active no botão clicado.
 * @param {*} element Objeto clicado
 */
function toggleTab(element) {
    const elementWithActive = element.className.indexOf('active');

    if (elementWithActive === -1) {
        var listTabs = Array.from(element.parentElement.querySelectorAll('.tab'));

        listTabs.filter((tab) => {
            if(tab.className.indexOf('active') !== -1) { tab.classList.remove('active'); };
        });

        element.classList.add('active');
        const classesTab = Array.from(element.classList.value.split(' '));

        const classTabSelected = classesTab.filter((classCurrent) => {
            if(classCurrent.indexOf("tab--") !== -1) {
                return classCurrent;
            }
        });

        activeContentTab(classTabSelected[0].substr(3, (classTabSelected[0].length - 1)));
    }
}

/**
 * @name "activeContentTab" - Responsável por comparar o tipo de botão com o tipo de conteúdo e
 * aplicar a classe active no seu correspondente.
 * @param {*} classTabSelected Classe da Tab clicada passada para comparação com a de conteúdo
 */
function activeContentTab(classTabSelected) {
    const listContents = Array.from(document.querySelectorAll('.content'));

    listContents.filter((content) => {
        if(content.className.indexOf('active') !== -1) {
            content.classList.remove('active');
        };

        if(content.className.indexOf(classTabSelected) !== -1) {
            content.classList.add('active');       
        }
    });

    return;
}
