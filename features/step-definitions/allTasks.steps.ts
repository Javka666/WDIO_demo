import { Given, When, Then } from '@wdio/cucumber-framework';
import  MainPage  from '../pageobjects/main.page';
import  TextBoxPage  from '../pageobjects/textbox.page';
import  CheckBoxPage  from '../pageobjects/checkbox.page';
import  RadioboxPage  from '../pageobjects/radioButtons.page';
import  WebTablesPage  from '../pageobjects/webtables.page';
import  ButtonsPage  from '../pageobjects/buttons.page';
import  PracticeFormPage  from '../pageobjects/practiceForm.page';


Given('I am on Main page', async () => {
  await MainPage.openMainPage()
});

Then('I should see the main page', async () => {
  expect(await MainPage.isMainPageDisplayed()).toBe(true);
});

When('I click on the "Elements" button', async () => {
  await MainPage.clickElementsButton()
});

Then('I should see the "Elements" button page', async () => {
  expect(await MainPage.isElementsPageDisplayed())
});

When('I select the "Text Box" button', async () => {
  await TextBoxPage.clickTextBoxButton();
});

Then('I should see "Text Box" field container', async () => {
  expect(await TextBoxPage.isTextBoxPageDisplayed()).toBe(true);
});

When('I am filling in the table of the "Text Box" element', async () => {
  await TextBoxPage.fillTextBox('John Doe', 'johndoe@example.com', 'Test str 1', 'Test str 2');
});

Then('I click on "Submit" button', async () => {
  await TextBoxPage.clickSubmitButton();
});

Then('I should see confirmation table with information', async () => {
  await TextBoxPage.getFullName()
  await TextBoxPage.getEmail()
  await TextBoxPage.getCurrentAddress()
  await TextBoxPage.getPermanententAddress()
});

When('I select the "Check Box" button',async () => {
  await CheckBoxPage.clickCheckBoxButton();
});

Then('I should see the "Check Box" page',async () => {
  await CheckBoxPage.getHeader();
});

When('I click on "expand all" button', async() => {
  await CheckBoxPage.clickExpandAllButton();
});

Then('I should see the "expand all" button works',async () => {
  await CheckBoxPage.expectExpendAllBtnWorks();
});

When('I mark all the needed parameters', async() => {
   await CheckBoxPage.selectCommandsCheckbox();
   await CheckBoxPage.selectPrivateCheckbox();
   await CheckBoxPage.selectExcelFileCheckbox();
});

Then('I check that all parameters had been selected',async () => {
  await CheckBoxPage.isCommandsSelected();
  await CheckBoxPage.isPrivateSelected();
  await CheckBoxPage.isExcelFileSelected();
});

When('I select the "Radio button"', async () => {
  await RadioboxPage.selectRadioButton();
});

Then('I should see the "Radio button" page', async () => {
 await RadioboxPage.getHeader();
});

When('I select the first button', async () => {
  await RadioboxPage.clickYesButton();
});

Then('I should see the result of pressing the first button', async () => {
 await RadioboxPage.getResult();
});

When('I select the second button', async () => {
  await RadioboxPage.clickImpressiveButton();
});

Then('I should see the result of pressing the second button', async () => {
  await RadioboxPage.getResult2();
});


When('I select the "Web Tables" button', async () => {
  await WebTablesPage.clickWebTablesBtn()
});

Then('I should see the "Web Tables" page', async () => {
  await WebTablesPage.getHeader();
});

When('I click "Add" button', async () => {
  await WebTablesPage.clickAddBtnLoc()
});

When('I fill registraion form', async () => {
  await WebTablesPage.fillRegistrationForm('John','Doe','johndoe@mail.ru','30','40000','Testing')
});

When('I click "Submit" button on registration page', async () => {
  await WebTablesPage.clickFormSubmitBtn()
});

When('I click on search field and fill details of a new account', async () => {
  await WebTablesPage.searchForPerson('John')
});

Then('I click on the "Edit" button', async () => {
  await WebTablesPage.clickFormEditBtn()
});

When('I should see Registration form', async () => {
  await WebTablesPage.getHeaderOfRegistrationForm()
});

Then('I check that all fields are filled in correctly', async () => {
  await WebTablesPage.expectRegistrationForm()
});

When('I click on "close" button', async () => {
  await WebTablesPage.clickFormCloseBtn()
});   

Then('I click on "delete" button for new profile', async () => {
  await WebTablesPage.clickDeleteBtn()
}); 

When('I click on the "Buttons" button', async () => {
  await ButtonsPage.clickButtonsBtn()
});

Then('I should see the "Buttons page"', async () => {
  await ButtonsPage.getHeader()
});

When('I click on all buttons on the "Buttons page"', async () => {
  await ButtonsPage.clickAllBtnsOnButtonsPage()
});

Then('I check that all buttons were clicked', async () => {
  await ButtonsPage.expectAllNotifyOnButtonsPage()
});


When('I select the "Form button"', async () => {
  await PracticeFormPage.clickPracticeFormLoc()
});

Then('I click "Practice Form"', async () => {
  await PracticeFormPage.clickFormsDropdownMenuLoc()
});

When('I am filling in the form', async () => {
  await PracticeFormPage.clickAndFillForm()
});

Then('I click on "Form Submit" button', async () => {
  await PracticeFormPage.clickFormSubmitBtn()
});

Then('I should see fulfilled form page', async () => {
  await PracticeFormPage.expectFullFilledFormPage()
});

Then('I should see fulfilled form', async () => {
  await PracticeFormPage.expectFullFilledForm()
});
