// Import the cucumber operators we need
import { Before, Given, Then, When } from "cucumber";
import { AppPage } from "../app.po";
import { element, by } from "protractor";
import { expect } from "chai";

let page: AppPage;
let befNumRow=0

Before(() => {
  page = new AppPage();
});

Given("I am on the home page3", async () => {
  await page.navigateTo();
});

When("I click on the Delete button {string}", async (number) => {
    console.log('xxx1 number: ',number)
  befNumRow= parseInt(await element(by.id('rowNumber')).getText())
  const addNewButton = element(by.id(`deleteBut${number}`));
  await addNewButton.click();
});

Then("Delete one row", async () => {
  expect(parseInt(await element(by.id('rowNumber')).getText())).to.equal(befNumRow-1)
});


