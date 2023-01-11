// Import the cucumber operators we need
import { Before, Given, TableDefinition, Then, When } from "cucumber";
import { AppPage } from "../app.po";
import { element, by } from "protractor";
import { expect } from "chai";

let dataTable=[]
let page: AppPage;
let befNumRow=0
Before(() => {
  page = new AppPage();
});

Given("I am on the home page2", async () => {
  await page.navigateTo();
});

When("I click on the Add New Row button", async () => {
  befNumRow= parseInt(await element(by.id('rowNumber')).getText())
  const addNewButton = element(by.id("addNew"));
  await addNewButton.click();
});

When("Type finput {string}, {string}, {string}, {string}", async (firstName, lastName, email, phone) => {
    dataTable=[firstName,lastName,email,phone]
    let tableHead=['firstName','lastName','email','phone']
    console.log('xxxx dataTable: ', dataTable)
    dataTable.forEach((value,index)=>{
        element(by.id(tableHead[index])).sendKeys(value)
    })
    const addNewButton = element(by.id(`Save`));
    await addNewButton.click();
})

Then("open add component", async () => {
    expect(parseInt(await element(by.id('rowNumber')).getText())).to.equal(befNumRow+1)

});


