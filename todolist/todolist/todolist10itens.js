const { Builder, Key, By } = require("selenium-webdriver");
var should = require("chai").should();

//Describe block
describe("Selenium", function () {

    //it Block
    it("Adicionou a primeira tarefa com sucesso", async function () {
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
    it("Adicionou a segunda tarefa com sucesso", async function () {
        //Abrir o navegador;
        let driver = await new Builder().forBrowser("chrome").build(); //Pedir para o código construir um driver do navegador escolhido;

        //Navegar até o site;
        await driver.get("https://lambdatest.github.io/sample-todo-app/");

        //Adicionar uma tarefa;
        await driver.findElement(By.id("sampletodotext")).sendKeys("Aprender Selenium", Key.RETURN);

        //Assertion - Verificar se adicionou a tarefa requisitada;
        let seleniumText = await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[6]/span")).getText().then(function (value) {
            return value
        });

        //Assertion Chai Should - Verificar se adicionou a tarefa requisitada;
        seleniumText.should.equal("Aprender Selenium")

        //Fechar o navegador
        await driver.close();

    });

});

describe("JavaScrypt", function () {

    //it Block
    it("Adicionou a primeira tarefa com sucesso", async function () {
        //Abrir o navegador;
        let driver = await new Builder().forBrowser("chrome").build(); //Pedir para o código construir um driver do navegador escolhido;

        //Navegar até o site;
        await driver.get("https://lambdatest.github.io/sample-todo-app/");

        //Adicionar uma tarefa;
        await driver.findElement(By.id("sampletodotext")).sendKeys("Aprender Selenium", Key.RETURN);

        //Assertion - Verificar se adicionou a tarefa requisitada;
        let seleniumText = await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[6]/span")).getText().then(function (value) {
            return value
        });

        //Assertion Chai Should - Verificar se adicionou a tarefa requisitada;
        seleniumText.should.equal("Aprender Selenium")

        //Fechar o navegador
        await driver.close();

    });

});

describe("Java", function () {

    //it Block
    it("Adicionou a primeira tarefa com sucesso", async function () {
        //Abrir o navegador;
        let driver = await new Builder().forBrowser("chrome").build(); //Pedir para o código construir um driver do navegador escolhido;

        //Navegar até o site;
        await driver.get("https://lambdatest.github.io/sample-todo-app/");

        //Adicionar uma tarefa;
        await driver.findElement(By.id("sampletodotext")).sendKeys("Aprender Selenium", Key.RETURN);

        //Assertion - Verificar se adicionou a tarefa requisitada;
        let seleniumText = await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[6]/span")).getText().then(function (value) {
            return value
        });

        //Assertion Chai Should - Verificar se adicionou a tarefa requisitada;
        seleniumText.should.equal("Aprender Selenium")

        //Fechar o navegador
        await driver.close();

    });

});

describe("HTML5", function () {

    //it Block
    it("Adicionou a primeira tarefa com sucesso", async function () {
        //Abrir o navegador;
        let driver = await new Builder().forBrowser("chrome").build(); //Pedir para o código construir um driver do navegador escolhido;

        //Navegar até o site;
        await driver.get("https://lambdatest.github.io/sample-todo-app/");

        //Adicionar uma tarefa;
        await driver.findElement(By.id("sampletodotext")).sendKeys("Aprender Selenium", Key.RETURN);

        //Assertion - Verificar se adicionou a tarefa requisitada;
        let seleniumText = await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[6]/span")).getText().then(function (value) {
            return value
        });

        //Assertion Chai Should - Verificar se adicionou a tarefa requisitada;
        seleniumText.should.equal("Aprender Selenium")

        //Fechar o navegador
        await driver.close();

    });

});

describe("CSS3", function () {

    //it Block
    it("Adicionou a primeira tarefa com sucesso", async function () {
        //Abrir o navegador;
        let driver = await new Builder().forBrowser("chrome").build(); //Pedir para o código construir um driver do navegador escolhido;

        //Navegar até o site;
        await driver.get("https://lambdatest.github.io/sample-todo-app/");

        //Adicionar uma tarefa;
        await driver.findElement(By.id("sampletodotext")).sendKeys("Aprender Selenium", Key.RETURN);

        //Assertion - Verificar se adicionou a tarefa requisitada;
        let seleniumText = await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[6]/span")).getText().then(function (value) {
            return value
        });

        //Assertion Chai Should - Verificar se adicionou a tarefa requisitada;
        seleniumText.should.equal("Aprender Selenium")

        //Fechar o navegador
        await driver.close();

    });

});

describe("Git e GitHub", function () {

    //it Block
    it("Adicionou a primeira tarefa com sucesso", async function () {
        //Abrir o navegador;
        let driver = await new Builder().forBrowser("chrome").build(); //Pedir para o código construir um driver do navegador escolhido;

        //Navegar até o site;
        await driver.get("https://lambdatest.github.io/sample-todo-app/");

        //Adicionar uma tarefa;
        await driver.findElement(By.id("sampletodotext")).sendKeys("Aprender Selenium", Key.RETURN);

        //Assertion - Verificar se adicionou a tarefa requisitada;
        let seleniumText = await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[6]/span")).getText().then(function (value) {
            return value
        });

        //Assertion Chai Should - Verificar se adicionou a tarefa requisitada;
        seleniumText.should.equal("Aprender Selenium")

        //Fechar o navegador
        await driver.close();

    });

});

describe("Jira", function () {

    //it Block
    it("Adicionou a primeira tarefa com sucesso", async function () {
        //Abrir o navegador;
        let driver = await new Builder().forBrowser("chrome").build(); //Pedir para o código construir um driver do navegador escolhido;

        //Navegar até o site;
        await driver.get("https://lambdatest.github.io/sample-todo-app/");

        //Adicionar uma tarefa;
        await driver.findElement(By.id("sampletodotext")).sendKeys("Aprender Selenium", Key.RETURN);

        //Assertion - Verificar se adicionou a tarefa requisitada;
        let seleniumText = await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[6]/span")).getText().then(function (value) {
            return value
        });

        //Assertion Chai Should - Verificar se adicionou a tarefa requisitada;
        seleniumText.should.equal("Aprender Selenium")

        //Fechar o navegador
        await driver.close();

    });

});

describe("Selenium com Java", function () {

    //it Block
    it("Adicionou a primeira tarefa com sucesso", async function () {
        //Abrir o navegador;
        let driver = await new Builder().forBrowser("chrome").build(); //Pedir para o código construir um driver do navegador escolhido;

        //Navegar até o site;
        await driver.get("https://lambdatest.github.io/sample-todo-app/");

        //Adicionar uma tarefa;
        await driver.findElement(By.id("sampletodotext")).sendKeys("Aprender Selenium", Key.RETURN);

        //Assertion - Verificar se adicionou a tarefa requisitada;
        let seleniumText = await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[6]/span")).getText().then(function (value) {
            return value
        });

        //Assertion Chai Should - Verificar se adicionou a tarefa requisitada;
        seleniumText.should.equal("Aprender Selenium")

        //Fechar o navegador
        await driver.close();

    });

});

describe("API", function () {

    //it Block
    it("Adicionou a primeira tarefa com sucesso", async function () {
        //Abrir o navegador;
        let driver = await new Builder().forBrowser("chrome").build(); //Pedir para o código construir um driver do navegador escolhido;

        //Navegar até o site;
        await driver.get("https://lambdatest.github.io/sample-todo-app/");

        //Adicionar uma tarefa;
        await driver.findElement(By.id("sampletodotext")).sendKeys("Aprender Selenium", Key.RETURN);

        //Assertion - Verificar se adicionou a tarefa requisitada;
        let seleniumText = await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[6]/span")).getText().then(function (value) {
            return value
        });

        //Assertion Chai Should - Verificar se adicionou a tarefa requisitada;
        seleniumText.should.equal("Aprender Selenium")

        //Fechar o navegador
        await driver.close();

    });

});
