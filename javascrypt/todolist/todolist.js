const { Builder, Key, By } = require("selenium-webdriver");
const assert = require("assert");
var should = require("chai").should();

async function todolist() {

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

    /*Assertion Node Puro 
    assert.strictEqual(seleniumText, "Aprender Selenium");*/

    //Assertion Chai Should - Verificar se adicionou a tarefa requisitada;
    seleniumText.should.equal("Aprender Selenium")

    //Fechar o navegador
    await driver.close();

}
todolist();
