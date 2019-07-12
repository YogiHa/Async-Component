var assert = require("assert").strict;
var webdriver = require("selenium-webdriver");
const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');

const driver = new Builder().forBrowser('chrome').build();
driver.get("http://localhost:3000/#");

describe("Home Page", () => {

 it("Should load the home page and get title", async () => {
     const title = await driver.getTitle();
     expect(title).to.equal('Hagai Protfolio');
   });

 it("Should check whether the given element is loaded", async () => {
     await driver.sleep(100);
     await driver.findElement({ id: "welcome-modal" }).click();
     await driver.sleep(150);
   });

 it("Should navigate to sign in and send form", async () => {
     await driver.findElement({id: "toggle"}).click();
     await driver.sleep(100);
     await  driver.findElement({ id: "signinlink" }).click();
     await driver.findElement({id: "email_address"}).sendKeys('test@selenium.com');
     await driver.sleep(100)
     await driver.findElement({id: "password"}).sendKeys('test');
     await driver.sleep(100);
     await driver.findElement({id: "sign_in"}).click();
     await driver.sleep(2000);
 });
 it("Should register in case that user not have profile", async () => {
     await driver.findElement({id: "toggle"}).click();
     let isUserAllow;
     try {
     isUserAllow = await driver.findElement(By.id("profile")).isDisplayed();
     } catch {
     isUserAllow = false;
     }
     if(!isUserAllow ) {
          console.log('not registerd')
          await driver.findElement({id: "registerlink"}).click();
          await driver.sleep(100);
          await driver.findElement({id: "name"}).sendKeys('test');
          await driver.sleep(100)
          await driver.findElement({id: "email_address"}).sendKeys('test@selenium.com');
          await driver.sleep(100)
          await driver.findElement({id: "password"}).sendKeys('test');
          await driver.sleep(100);
          await driver.findElement({id: "register"}).click();
          await driver.sleep(2000);
          await driver.findElement({id: "toggle"}).click();
          await driver.sleep(100);
    } else { console.log('user registered') }

          await driver.findElement({id: "profile"}).click();
          await driver.sleep(1000);
 })
})

describe("App usage", () => {
  it("Should check if user can change his name", async () => {
    await driver.findElement({id: "changename"}).sendKeys('selenium');
    await driver.sleep(1000);
    await driver.findElement({id: "entername"}).click();
    await driver.sleep(100);
    let checker = await driver.findElement({id: "namecheck"}).getText();
    expect(checker).to.equal("Welcome selenium!");
    await driver.findElement({id: "toggle"}).click();
    await driver.sleep(100);
    await driver.findElement({id: "profile"}).click();
    await driver.sleep(1000)
    await driver.findElement({id: "changename"}).sendKeys('test');
    await driver.sleep(100);
    await driver.findElement({id: "entername"}).click();
    await driver.sleep(200);

  })
  it("Should check if user can check the weather in Be'er Sheva", async () => {
    await driver.findElement({id: "WethWhat"}).click();
    await driver.sleep(200);
    await driver.findElement({id: "wethInput"}).sendKeys("Beer Sheva");
    await driver.sleep(100);
    await driver.findElement({id: "wethEnter"}).click();
    await driver.sleep(1500);
    let temp = await driver.findElement({id: "temp"}).getText();
    console.log(`Beer Sheva ${temp}`);
  })
  it("Should check if user can check faces in pics", async () => {
    await driver.findElement({id: "SmartBrain"}).click();
    await driver.sleep(100);
    await driver.findElement({id: "smartBrainInput"}).sendKeys('https://img.wcdn.co.il/f_auto,w_700/2/6/4/1/2641451-46.jpg');
    await driver.sleep(100);
    await driver.findElement({id: "smartBrainSubmit"}).click();
    await driver.sleep(2500);
    await driver.findElement({id: "faceBox"});
    await driver.sleep(300);
  })
  it("Should check that user nave token by refresh, and card has changed according to submit requests", async () => {
    driver.navigate().refresh();
    await driver.sleep(3500);
    await driver.findElement({id: "toggle"}).click();
    await driver.sleep(100);
    await driver.findElement({id: "profile"})

  })
})  

describe("About Page", () => {
  it("Should navigate to the About page and afterwards to github", async () => {
    await driver.findElement({id: "aboutLInk"}).click();
    await driver.sleep(800);
    await driver.findElement({id: "gitHubLink"}).click();
    await driver.sleep(2000);
    after(async () => driver.quit());


  })
 
})





