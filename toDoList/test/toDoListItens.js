const { Builder, Key, By } = require("selenium-webdriver");
var should = require("chai").should();

//Describe block
describe("Selenium", function () {

    //it Block
    it("Adicionou Selenium com sucesso", async function () {
        //Abrir o navegador;
        let driver = await new Builder().forBrowser("chrome").build(); //Pedir para o código construir um driver do navegador escolhido;

        //Navegar até o site;
        await driver.get("https://lambdatest.github.io/sample-todo-app/");

        //Adicionar uma tarefa;
        await driver.findElement(By.id("sampletodotext")).sendKeys("Selenium", Key.RETURN);

        //Assertion - Verificar se adicionou a tarefa requisitada;
        let seleniumText = await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[6]/span")).getText().then(function (value) {
            return value
        });

        //Assertion Chai Should - Verificar se adicionou a tarefa requisitada;
        seleniumText.should.equal("Selenium")

        //Fechar o navegador
        await driver.close();

    });

});

describe("Cypress", function () {

    //it Block
    it("Adicionou Cypress com sucesso", async function () {
        //Abrir o navegador;
        let driver = await new Builder().forBrowser("chrome").build(); //Pedir para o código construir um driver do navegador escolhido;

        //Navegar até o site;
        await driver.get("https://lambdatest.github.io/sample-todo-app/");

        //Adicionar uma tarefa;
        await driver.findElement(By.id("sampletodotext")).sendKeys("Cypress", Key.RETURN);

        //Assertion - Verificar se adicionou a tarefa requisitada;
        let cypressText = await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[6]/span")).getText().then(function (value) {
            return value
        });

        //Assertion Chai Should - Verificar se adicionou a tarefa requisitada;
        cypressText.should.equal("Cypress")

        //Fechar o navegador
        await driver.close();

    });

});

describe("JavaScrypt", function () {

    //it Block
    it("Adicionou JavaScrypt com sucesso", async function () {
        //Abrir o navegador;
        let driver = await new Builder().forBrowser("chrome").build(); //Pedir para o código construir um driver do navegador escolhido;

        //Navegar até o site;
        await driver.get("https://lambdatest.github.io/sample-todo-app/");

        //Adicionar uma tarefa;
        await driver.findElement(By.id("sampletodotext")).sendKeys("JavaScrypt", Key.RETURN);

        //Assertion - Verificar se adicionou a tarefa requisitada;
        let javascryptText = await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[6]/span")).getText().then(function (value) {
            return value
        });

        //Assertion Chai Should - Verificar se adicionou a tarefa requisitada;
        javascryptText.should.equal("JavaScrypt")

        //Fechar o navegador
        await driver.close();

    });

});

describe("Java", function () {

    //it Block
    it("Adicionou Java com sucesso", async function () {
        //Abrir o navegador;
        let driver = await new Builder().forBrowser("chrome").build(); //Pedir para o código construir um driver do navegador escolhido;

        //Navegar até o site;
        await driver.get("https://lambdatest.github.io/sample-todo-app/");

        //Adicionar uma tarefa;
        await driver.findElement(By.id("sampletodotext")).sendKeys("Java", Key.RETURN);

        //Assertion - Verificar se adicionou a tarefa requisitada;
        let JavaText = await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[6]/span")).getText().then(function (value) {
            return value
        });

        //Assertion Chai Should - Verificar se adicionou a tarefa requisitada;
        JavaText.should.equal("Java")

        //Fechar o navegador
        await driver.close();

    });

});

describe("HTML5", function () {

    //it Block
    it("Adicionou HTML5 com sucesso", async function () {
        //Abrir o navegador;
        let driver = await new Builder().forBrowser("chrome").build(); //Pedir para o código construir um driver do navegador escolhido;

        //Navegar até o site;
        await driver.get("https://lambdatest.github.io/sample-todo-app/");

        //Adicionar uma tarefa;
        await driver.findElement(By.id("sampletodotext")).sendKeys(" HTML5", Key.RETURN);

        //Assertion - Verificar se adicionou a tarefa requisitada;
        let HTML5Text = await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[6]/span")).getText().then(function (value) {
            return value
        });

        //Assertion Chai Should - Verificar se adicionou a tarefa requisitada;
        HTML5Text.should.equal("HTML5")

        //Fechar o navegador
        await driver.close();

    });

});

describe("CSS3", function () {

    //it Block
    it("Adicionou CSS3 com sucesso", async function () {
        //Abrir o navegador;
        let driver = await new Builder().forBrowser("chrome").build(); //Pedir para o código construir um driver do navegador escolhido;

        //Navegar até o site;
        await driver.get("https://lambdatest.github.io/sample-todo-app/");

        //Adicionar uma tarefa;
        await driver.findElement(By.id("sampletodotext")).sendKeys("CSS3", Key.RETURN);

        //Assertion - Verificar se adicionou a tarefa requisitada;
        let CSS3Text = await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[6]/span")).getText().then(function (value) {
            return value
        });

        //Assertion Chai Should - Verificar se adicionou a tarefa requisitada;
        CSS3Text.should.equal("CSS3")

        //Fechar o navegador
        await driver.close();

    });

});

describe("Git e GitHub", function () {

    //it Block
    it("Adicionou Git e GitHub com sucesso", async function () {
        //Abrir o navegador;
        let driver = await new Builder().forBrowser("chrome").build(); //Pedir para o código construir um driver do navegador escolhido;

        //Navegar até o site;
        await driver.get("https://lambdatest.github.io/sample-todo-app/");

        //Adicionar uma tarefa;
        await driver.findElement(By.id("sampletodotext")).sendKeys("Git e GitHub", Key.RETURN);

        //Assertion - Verificar se adicionou a tarefa requisitada;
        let gitText = await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[6]/span")).getText().then(function (value) {
            return value
        });

        //Assertion Chai Should - Verificar se adicionou a tarefa requisitada;
        gitText.should.equal("Git e GitHub")

        //Fechar o navegador
        await driver.close();

    });

});

describe("Jira", function () {

    //it Block
    it("Adicionou Jira com sucesso", async function () {
        //Abrir o navegador;
        let driver = await new Builder().forBrowser("chrome").build(); //Pedir para o código construir um driver do navegador escolhido;

        //Navegar até o site;
        await driver.get("https://lambdatest.github.io/sample-todo-app/");

        //Adicionar uma tarefa;
        await driver.findElement(By.id("sampletodotext")).sendKeys("Jira", Key.RETURN);

        //Assertion - Verificar se adicionou a tarefa requisitada;
        let JiraText = await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[6]/span")).getText().then(function (value) {
            return value
        });

        //Assertion Chai Should - Verificar se adicionou a tarefa requisitada;
        JiraText.should.equal("Jira")

        //Fechar o navegador
        await driver.close();

    });

});

describe("Selenium com Java", function () {

    //it Block
    it("Adicionou Selenium com Java com sucesso", async function () {
        //Abrir o navegador;
        let driver = await new Builder().forBrowser("chrome").build(); //Pedir para o código construir um driver do navegador escolhido;

        //Navegar até o site;
        await driver.get("https://lambdatest.github.io/sample-todo-app/");

        //Adicionar uma tarefa;
        await driver.findElement(By.id("sampletodotext")).sendKeys("Selenium com Java", Key.RETURN);

        //Assertion - Verificar se adicionou a tarefa requisitada;
        let seleniumjavaText = await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[6]/span")).getText().then(function (value) {
            return value
        });

        //Assertion Chai Should - Verificar se adicionou a tarefa requisitada;
        seleniumjavaText.should.equal("Selenium com Java")

        //Fechar o navegador
        await driver.close();

    });

});

describe("API", function () {

    //it Block
    it("Adicionou API com sucesso", async function () {
        //Abrir o navegador;
        let driver = await new Builder().forBrowser("chrome").build(); //Pedir para o código construir um driver do navegador escolhido;

        //Navegar até o site;
        await driver.get("https://lambdatest.github.io/sample-todo-app/");

        //Adicionar uma tarefa;
        await driver.findElement(By.id("sampletodotext")).sendKeys("API", Key.RETURN);

        //Assertion - Verificar se adicionou a tarefa requisitada;
        let apiText = await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[6]/span")).getText().then(function (value) {
            return value
        });

        //Assertion Chai Should - Verificar se adicionou a tarefa requisitada;
        apiText.should.equal("API")

        //Fechar o navegador
        await driver.close();

    });

});
