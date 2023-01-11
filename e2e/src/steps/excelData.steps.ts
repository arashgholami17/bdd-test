// Import the cucumber operators we need
import { Before, Given, Then, When } from "cucumber";
import { AppPage } from "../app.po";
import { element, by, $$ } from "protractor";
import { expect } from "chai";

let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given("I am in the login page", async () => {
  await page.navigateTo();
});

When("read data in excel at /'([^/']*)/'$", async () => {
    
});


