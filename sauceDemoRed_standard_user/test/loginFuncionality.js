const { Builder, By, Key } = require("selenium-webdriver")
var should = require("chai").should();

//Describe block
describe("loginFunctionality", function () {

    //it block
    it("TC01_loginSuccessfully", async function () {
        //Construir o driver para o navegador
        let driver = await new Builder().forBrowser("chrome").build();

        //Acessar site
        await driver.get("https://www.saucedemo.com/v1/index.html");

        //Inserir nome de usuário: "standard_user"
        await driver.findElement(By.id("user-name")).sendKeys("standard_user");

        //Inserir password: "secret_sauce"
        await driver.findElement(By.id("password")).sendKeys("secret_sauce");

        //Clicar no botão login;
        await driver.findElement(By.id("login-button")).click();

        //Assertion - Verificar se o login foi feito com sucesso;
        let productsText = await driver.findElement(By.xpath("/html/body/div/div[2]/div[2]/div/div[1]/div[3]/div")).getText().then(function (value) { return value })
        productsText.should.equal("Products")

        //Fechar o navegador
        await driver.quit();
    })

    //it block
    it("TC02_invalidUsername", async function () {

        //Construir o driver para o navegador
        let driver = await new Builder().forBrowser("chrome").build();

        //Acessar site
        await driver.get("https://www.saucedemo.com/v1/index.html");

        //Inserir nome de usuário: "vasco_da_gama"
        await driver.findElement(By.id("user-name")).sendKeys("vasco_da_gama");

        //Inserir password: "secret_sauce"
        await driver.findElement(By.id("password")).sendKeys("secret_sauce");

        //Clicar no botão login;
        await driver.findElement(By.id("login-button")).click();

        //Assertion - Verificar se o login não foi realizado
        let userinvalidText = await driver.findElement(By.xpath("/html/body/div[2]/div[1]/div/div/form/h3")).getText().then(function (value) { return value })
        userinvalidText.should.contain("Username and password do not match")

        //Fechar o navegador
        await driver.quit();
    })

    //it block
    it("TC03_invalidPassword", async function () {

        //Construir o driver para o navegador
        let driver = await new Builder().forBrowser("chrome").build();

        //Acessar site
        await driver.get("https://www.saucedemo.com/v1/index.html");

        //Inserir nome de usuário: "standard_user"
        await driver.findElement(By.id("user-name")).sendKeys("standard_user");

        //Inserir password: "vasco_da_gama"
        await driver.findElement(By.id("password")).sendKeys("vasco_da_gama");

        //Clicar no botão login;
        await driver.findElement(By.id("login-button")).click();

        //Assertion - Verificar se o login não foi realizado
        let userinvalidText = await driver.findElement(By.xpath("/html/body/div[2]/div[1]/div/div/form/h3")).getText().then(function (value) { return value })
        userinvalidText.should.contain("Username and password do not match")

        //Fechar o navegador
        await driver.quit();
    })

    //it block
    it("TC04_changedCredentials", async function () {

        //Construir o driver para o navegador
        let driver = await new Builder().forBrowser("chrome").build();

        //Acessar site
        await driver.get("https://www.saucedemo.com/v1/index.html");

        //Inserir nome de usuário: "secret_sauce"
        await driver.findElement(By.id("user-name")).sendKeys("secret_sauce");

        //Inserir password: "standard_user"
        await driver.findElement(By.id("password")).sendKeys("standard_user");

        //Clicar no botão login;
        await driver.findElement(By.id("login-button")).click();

        //Assertion - Verificar se o login não foi realizado;
        let userinvalidText = await driver.findElement(By.xpath("/html/body/div[2]/div[1]/div/div/form/h3")).getText().then(function (value) { return value })
        userinvalidText.should.contain("Username and password do not match")

        //Fechar o navegador
        await driver.quit();
    })

    //it block
    it("TC05_capitalUsername", async function () {

        //Construir o driver para o navegador
        let driver = await new Builder().forBrowser("chrome").build();

        //Acessar site
        await driver.get("https://www.saucedemo.com/v1/index.html");

        //Inserir nome de usuário: "STANDARD_USER"
        await driver.findElement(By.id("user-name")).sendKeys("STANDARD_USER");

        //Inserir password: "secret_sauce"
        await driver.findElement(By.id("password")).sendKeys("secret_sauce");

        //Clicar no botão login;
        await driver.findElement(By.id("login-button")).click();

        //Assertion - Verificar se o login não foi realizado
        let userinvalidText = await driver.findElement(By.xpath("/html/body/div[2]/div[1]/div/div/form/h3")).getText().then(function (value) { return value })
        userinvalidText.should.contain("Username and password do not match")

        //Fechar o navegador
        await driver.quit();
    })

    //it block
    it("TC06_capitalPassword", async function () {

        //Construir o driver para o navegador
        let driver = await new Builder().forBrowser("chrome").build();

        //Acessar site
        await driver.get("https://www.saucedemo.com/v1/index.html");

        //Inserir nome de usuário: "standard_user"
        await driver.findElement(By.id("user-name")).sendKeys("standard_user");

        //Inserir password: "SECRET_SAUCE"
        await driver.findElement(By.id("password")).sendKeys("SECRET_SAUCE");

        //Clicar no botão login;
        await driver.findElement(By.id("login-button")).click();

        //Assertion - Verificar se o login não foi realizado
        let userinvalidText = await driver.findElement(By.xpath("/html/body/div[2]/div[1]/div/div/form/h3")).getText().then(function (value) { return value })
        userinvalidText.should.contain("Username and password do not match")

        //Fechar o navegador
        await driver.quit();
    })

    //it block
    it("TC07_withoutUsername", async function () {

        //Construir o driver para o navegador
        let driver = await new Builder().forBrowser("chrome").build();

        //Acessar site
        await driver.get("https://www.saucedemo.com/v1/index.html");

        //Inserir nome de usuário: ""
        await driver.findElement(By.id("user-name")).sendKeys("");

        //Inserir password: "secret_sauce"
        await driver.findElement(By.id("password")).sendKeys("secret_sauce");

        //Clicar no botão login;
        await driver.findElement(By.id("login-button")).click();

        //Assertion - Verificar se o login não foi realizado
        let userinvalidText = await driver.findElement(By.xpath("/html/body/div[2]/div[1]/div/div/form/h3")).getText().then(function (value) { return value })
        userinvalidText.should.contain("Username is required")

        //Fechar o navegador
        await driver.quit();
    })

    //it block
    it("TC08_withoutPassword", async function () {

        //Construir o driver para o navegador
        let driver = await new Builder().forBrowser("chrome").build();

        //Acessar site
        await driver.get("https://www.saucedemo.com/v1/index.html");

        //Inserir nome de usuário: "standard_user"
        await driver.findElement(By.id("user-name")).sendKeys("standard_user");

        //Inserir password: ""
        await driver.findElement(By.id("password")).sendKeys("");

        //Clicar no botão login;
        await driver.findElement(By.id("login-button")).click();

        //Assertion - Verificar se o login não foi realizado
        let userinvalidText = await driver.findElement(By.xpath("/html/body/div[2]/div[1]/div/div/form/h3")).getText().then(function (value) { return value })
        userinvalidText.should.contain("Password is required")

        //Fechar o navegador
        await driver.quit();
    })

    //it block
    it("TC09_withoutCredentials", async function () {

        //Construir o driver para o navegador
        let driver = await new Builder().forBrowser("chrome").build();

        //Acessar site
        await driver.get("https://www.saucedemo.com/v1/index.html");

        //Inserir nome de usuário: ""
        await driver.findElement(By.id("user-name")).sendKeys("");

        //Inserir password: ""
        await driver.findElement(By.id("password")).sendKeys("");

        //Clicar no botão login;
        await driver.findElement(By.id("login-button")).click();

        //Assertion - Verificar se o login não foi realizado
        let userinvalidText = await driver.findElement(By.xpath("/html/body/div[2]/div[1]/div/div/form/h3")).getText().then(function (value) { return value })
        userinvalidText.should.equal("Epic sadface: Username is required")

        //Fechar o navegador
        await driver.quit();
    })

    //it block
    it("TC10_backspaceBeforeUsername", async function () {

        //Construir o driver para o navegador
        let driver = await new Builder().forBrowser("chrome").build();

        //Acessar site
        await driver.get("https://www.saucedemo.com/v1/index.html");

        //Inserir nome de usuário: " standard_user"
        await driver.findElement(By.id("user-name")).sendKeys(" standard_user");

        //Inserir password: "secret_sauce"
        await driver.findElement(By.id("password")).sendKeys("secret_sauce");

        //Clicar no botão login;
        await driver.findElement(By.id("login-button")).click();

        //Assertion - Verificar se o login não foi realizado
        let userinvalidText = await driver.findElement(By.xpath("/html/body/div[2]/div[1]/div/div/form/h3")).getText().then(function (value) { return value })
        userinvalidText.should.equal("Epic sadface: Username and password do not match any user in this service")

        //Fechar o navegador
        await driver.quit();
    })

    //it block
    it("TC11_backspaceAfterUsername", async function () {

        //Construir o driver para o navegador
        let driver = await new Builder().forBrowser("chrome").build();

        //Acessar site
        await driver.get("https://www.saucedemo.com/v1/index.html");

        //Inserir nome de usuário: "standard_user "
        await driver.findElement(By.id("user-name")).sendKeys("standard_user ");

        //Inserir password: "secret_sauce"
        await driver.findElement(By.id("password")).sendKeys("secret_sauce");

        //Clicar no botão login;
        await driver.findElement(By.id("login-button")).click();

        //Assertion - Verificar se o login não foi realizado
        let userinvalidText = await driver.findElement(By.xpath("/html/body/div[2]/div[1]/div/div/form/h3")).getText().then(function (value) { return value })
        userinvalidText.should.equal("Epic sadface: Username and password do not match any user in this service")

        //Fechar o navegador
        await driver.quit();
    })

    //it block
    it("TC12_backspaceBeforePassword", async function () {

        //Construir o driver para o navegador
        let driver = await new Builder().forBrowser("chrome").build();

        //Acessar site
        await driver.get("https://www.saucedemo.com/v1/index.html");

        //Inserir nome de usuário: "standard_user"
        await driver.findElement(By.id("user-name")).sendKeys("standard_user");

        //Inserir password: " secret_sauce"
        await driver.findElement(By.id("password")).sendKeys(" secret_sauce");

        //Clicar no botão login;
        await driver.findElement(By.id("login-button")).click();

        //Assertion - Verificar se o login não foi realizado
        let userinvalidText = await driver.findElement(By.xpath("/html/body/div[2]/div[1]/div/div/form/h3")).getText().then(function (value) { return value })
        userinvalidText.should.equal("Epic sadface: Username and password do not match any user in this service")

        //Fechar o navegador
        await driver.quit();
    })

    //it block
    it("TC13_backspaceAfterPassword", async function () {

        //Construir o driver para o navegador
        let driver = await new Builder().forBrowser("chrome").build();

        //Acessar site
        await driver.get("https://www.saucedemo.com/v1/index.html");

        //Inserir nome de usuário: "standard_user"
        await driver.findElement(By.id("user-name")).sendKeys("standard_user");

        //Inserir password: "secret_sauce "
        await driver.findElement(By.id("password")).sendKeys("secret_sauce ");

        //Clicar no botão login;
        await driver.findElement(By.id("login-button")).click();

        //Assertion - Verificar se o login não foi realizado
        let userinvalidText = await driver.findElement(By.xpath("/html/body/div[2]/div[1]/div/div/form/h3")).getText().then(function (value) { return value })
        userinvalidText.should.equal("Epic sadface: Username and password do not match any user in this service")

        //Fechar o navegador
        await driver.quit();
    })
})