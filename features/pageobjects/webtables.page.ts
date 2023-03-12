
class WebTablesPage {

get getHeaderLoc () { return $('//div[text()="Web Tables"]') }; 

get getHeaderOfRegistrationFormLoc() { return $('//div[@class="modal-title h4"]') };

get webTablesBtnLoc () { return $('(//ul[@class="menu-list"]//li)[4]') };

get webTablesBtnPageLoc () { return $('div.web-tables-wrapper') };

get addBtnLoc () { return $('#addNewRecordButton') };

get registrationFormLoc () { return $('#registration-form-modal') };

get firstNameLoc () { return $('#firstName') };

get lastNameLoc () { return $('#lastName') };

get emailLoc () { return $('#userEmail') };

get ageLoc () { return $('#age') };

get salaryLoc () { return $('#salary') };

get departmentLoc () { return $('#department') };

get formSubmitBtnLoc () { return $('button#submit.btn.btn-primary') };

get searchFieldLoc () { return $('#searchBox') };

get editBtnLoc () { return $('#edit-record-4') };

get closeBtnLoc () { return $('button.close:nth-child(2) > span:nth-child(1)') };

get deleteBtndLoc () { return $('#delete-record-4') };




getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

private testPerson = {
  firstName: 'John',
  secondName: 'Doe',
  email: 'johndoe@example.com',
  age: '30',
  salary: '40000',
  department: 'Testing',
};
    

async clickWebTablesBtn() {
  await (await this.webTablesBtnLoc).waitForClickable();
  await (await this.webTablesBtnLoc).scrollIntoView();
  await (await this.webTablesBtnLoc).click(); 
}
    
 

async getHeader() {
  expect(await this.getHeaderLoc).toBeDisplayed();
}
    
async clickAddBtnLoc() {
  await this.addBtnLoc.click();
}
   
async fillRegistrationForm(firstName: string,secondName: string, email: string, age: string, salary: string, department: string) {
  await (await this.firstNameLoc).setValue(firstName);
  await (await this.lastNameLoc).setValue(secondName);
  await (await this.emailLoc).setValue(email);
  await (await this.ageLoc).setValue(age);
  await (await this.salaryLoc).setValue(salary);
  await (await this.departmentLoc).setValue(department);
}
    
async clickFormSubmitBtn() {
  await (await this.formSubmitBtnLoc).waitForClickable();
  await (await this.formSubmitBtnLoc).scrollIntoView();
  await (await this.formSubmitBtnLoc).click() 
}
        
async searchForPerson(firstName) {
  await (await this.searchFieldLoc).setValue(firstName);
}
        
async clickFormEditBtn() {
  await (await this.editBtnLoc).waitForClickable();
  await (await this.editBtnLoc).scrollIntoView();
  await (await this.editBtnLoc).click(); 
}

async getHeaderOfRegistrationForm() {
  expect(await this.getHeaderOfRegistrationFormLoc).toBeDisplayed();
}

async expectRegistrationForm() {
  expect (await this.firstNameLoc).toHaveText(this.testPerson.firstName);
  expect (await this.lastNameLoc).toHaveText(this.testPerson.secondName);
  expect (await this.emailLoc).toHaveText(this.testPerson.email);
  expect (await this.ageLoc).toHaveText(this.testPerson.age);
  expect (await this.salaryLoc).toHaveText(this.testPerson.salary);
  expect (await this.departmentLoc).toHaveText(this.testPerson.department);
}

async clickFormCloseBtn() {
  await (await this.closeBtnLoc).waitForClickable();
  await (await this.closeBtnLoc).scrollIntoView();
  await (await this.closeBtnLoc).click(); 
}

async clickDeleteBtn() {
  await (await this.deleteBtndLoc).waitForClickable();
  await (await this.deleteBtndLoc).scrollIntoView();
  await (await this.deleteBtndLoc).click(); 
}



}  
export default new WebTablesPage();
