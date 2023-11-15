let { Builder, Key, By } = require("selenium-webdriver");
var should = require("chai").should();

    //describe block
    describe("loginFunctionality", function (){

        //it block
        it("TC01_loginSuccessfully", async function (){
            //Driver para o navegador
            let driver = await new Builder().forBrowser("chrome").build();

            //Acessar o site
            await driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

            //Digitar o username:"Admin"
            await driver.findElement(By.css("Username")).sendKeys("Admin")

            //Digitar o password:"admin123"
            await driver.findElement(By.xpath("/html/body/div/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input")).sendKeys("admin123")

            //Clicar no botão login
            await driver.findElement(By.xpath("/html/body/div/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button")).click();

            //Assertion - Verificar se o login foi realizado com sucesso
            let dashboardText = await driver.findElement(By.xpath("/html/body/div/div[1]/div[1]/header/div[1]/div[1]/span/h6")).getText().then(function(value){return value })
            dashboardText.should.equal("Dashboard")

        })
    })

    //Site não funciona com SeleniumWebDriver com JavaScript