// Import the cucumber operators we need
import { Before, Given, Then, When } from "cucumber";
import { AppPage } from "../app.po";
import { element, by, $$ } from "protractor";
import { expect } from "chai";

let page: AppPage;

let itemValu=[]
let itemNum=0
let editedRow=0
let tableHead=[]

Before(() => {
  page = new AppPage();
});

Given("I am on the home page4", async () => {
  await page.navigateTo();
});

When("I click on the Edit button {string}", async (editRowNumber) => {
  editedRow= editRowNumber
  const editButton = element(by.id(`editBut${editedRow}`));
  await editButton.click();
});

When("open editComponent and fill input {string}, {string}, {string}, {string}", async (firstName, lastName, email, phone) => {
  let  dataTable=[firstName,lastName,email,phone]
  tableHead=['firstName','lastName','email','phone']
  expect(await element.all(by.id('onSave')).isPresent()).to.equal(true)
  for(let i=0;i<dataTable.length;i++){
    await element(by.id(tableHead[i])).clear()
    await element(by.id(tableHead[i])).sendKeys(dataTable[i])
  }

});

When("click on save button", async () => {
  itemValu=[]
  await element.all(by.css('label')).then(item=>{itemNum=item.length})
  for (let i = 0; i < itemNum; i++) {
    let idName=await element.all(by.css('label')).get(i).getText()
    if(idName.endsWith(':')){
      idName=idName.replace(':','')
    }
    itemValu.push(await element.all(by.id(idName)).getAttribute('value'))
  }
  const saveButton = element(by.id("onSave"));
  await saveButton.click();
});

Then("data must have been changed", async () => {
    let res=  (await element.all(by.id(`trtableData${editedRow}`)).getText())[0].split(' ')
    res.pop()
    res.shift()
    for (let i = 1; i < res.length; i++) {
     expect(itemValu[i][0]).to.equal(res[i])
    }

});


