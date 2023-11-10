const { Builder, Key, By } = require("selenium-webdriver");
var should = require("chai").should();

//Describe block
describe("todolist", function () {

    //it Block
    it("Adicionou as tarefas com sucesso", async function () {
        //Abrir o navegador;
        let driver = await new Builder().forBrowser("chrome").build(); //Pedir para o código construir um driver do navegador escolhido;

        //Navegar até o site;
        await driver.get("https://lambdatest.github.io/sample-todo-app/");

        //Adicionar uma tarefa;
        await driver.findElement(By.id("sampletodotext")).sendKeys("Selenium", Key.RETURN);
        await driver.findElement(By.id("sampletodotext")).sendKeys("Cypress", Key.RETURN);
        await driver.findElement(By.id("sampletodotext")).sendKeys("JavaScrypt", Key.RETURN);
        await driver.findElement(By.id("sampletodotext")).sendKeys("Java", Key.RETURN);
        await driver.findElement(By.id("sampletodotext")).sendKeys("HTML5", Key.RETURN);
        await driver.findElement(By.id("sampletodotext")).sendKeys("CSS3", Key.RETURN);
        await driver.findElement(By.id("sampletodotext")).sendKeys("Git e GitHub", Key.RETURN);
        await driver.findElement(By.id("sampletodotext")).sendKeys("Jira", Key.RETURN);
        await driver.findElement(By.id("sampletodotext")).sendKeys("Selenium com Java", Key.RETURN);
        await driver.findElement(By.id("sampletodotext")).sendKeys("API", Key.RETURN);

        /*Assertion - Verificar se adicionou as tarefas requisitadas;*/
        let seleniumText = await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[6]/span")).getText().then(function (value) {return value});
        let cypressText = await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[7]/span")).getText().then(function (value) {return value});
        let javascryptText = await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[8]/span")).getText().then(function (value) {return value});
        let javaText = await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[9]/span")).getText().then(function (value) {return value});
        let htmlText = await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[10]/span")).getText().then(function (value) {return value});
        let cssText = await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[11]/span")).getText().then(function (value) {return value});
        let gitText = await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[12]/span")).getText().then(function (value) {return value});
        let jiraText = await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[13]/span")).getText().then(function (value) {return value});
        let seleniumjavaText = await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[14]/span")).getText().then(function (value) {return value});
        let apiText = await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[15]/span")).getText().then(function (value) {return value});

        //Assertion Chai Should - Verificar se adicionou a tarefa requisitada;
        seleniumText.should.equal("Selenium")
        cypressText.should.equal("Cypress")
        javascryptText.should.equal("JavaScrypt")
        javaText.should.equal("Java")
        htmlText.should.equal("HTML5")
        cssText.should.equal("CSS3")
        gitText.should.equal("Git e GitHub")
        jiraText.should.equal("Jira")
        seleniumjavaText.should.equal("Selenium com Java")
        apiText.should.equal("API")

        //Fechar o navegador
        await driver.close();

    });

});
