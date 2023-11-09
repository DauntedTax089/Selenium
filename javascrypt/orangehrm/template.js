const {Builder} = require ("selenium-webdriver")

async function name() {

    //Abrir o navegador
    let driver = await new Builder().forBrowser("chrome").build(); //Pedir para o código construir um driver do navegador escolhido;

    //Navegar até o site
    await driver.get("https://lambdatest.github.io/sample-todo-app/");
    //Adicionar uma tarefa

    //Fechar o navegador




}
