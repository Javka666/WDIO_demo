class PracticeFormPage {

get practiceFormLoc () { return $('(//div[@class="header-wrapper"])[2]')};

get formsDropdownMenuLoc () { return $('(//li[@id="item-0"])[2]')}; 

get formFirstNameLoc () { return $('#firstName')};

get formLastNameLoc () { return $('#lastName')};

get formUserEmailLoc () { return $('#userEmail')};

get formGenderLoc () { return $('#gender-radio-1')};

get formUserPhoneNumberLoc () { return $('#userNumber')};

get formBirthDateLoc () { return $('#dateOfBirthInput')};

get formBirthDateYearLoc () { return $('.react-datepicker__year-select')};

get formBirthDateMonthLoc () { return $('.react-datepicker__month-select')};

get formBirthDateDayLoc () { return $('.react-datepicker__day--021')};

get formSubjectsDropdownMenuLoc () { return $('#subjectsInput')};

get formCurrentAddresLoc () { return $('#currentAddress')};

get formHobbiesReadingCheckboxLoc () { return $('//label[text()="Reading"]')};

get formStateLoc () { return $('//div[@class=" css-yk16xz-control"]//div[@class=" css-1wa3eu0-placeholder"]')};

get formCityLoc () { return $('(//div[@class="col-md-4 col-sm-12"])[2]')};

get formSubmitBtn () { return $('#submit')};

get expectFilledForm () { return $('.modal-body')};

get filledStudentFullNameLoc () { return $('tr:nth-child(1) >td:nth-child(2)')};

get filledStudentEmailLoc () { return $('tr:nth-child(2) >td:nth-child(2)')};

get filledGenderLoc () { return $('tr:nth-child(3) >td:nth-child(2)')};

get filledPhoneLoc () { return $('tr:nth-child(4) >td:nth-child(2)')};

get expectBirthDateLoc () { return $('tr:nth-child(5) >td:nth-child(2)')};

get filledSubjectLoc () { return $('tr:nth-child(6) >td:nth-child(2)')};

get filledHobbiesLoc () { return $('tr:nth-child(7) >td:nth-child(2)')};

get filledAddresLoc () { return $('tr:nth-child(9) >td:nth-child(2)')};

get filledStateAndCity () { return $('tr:nth-child(10) >td:nth-child(2)')};


    
testPerson = {
  firstName:'Test', 
  secondName:'Test2',
  email:'Test@gmail.com', 
  currAddres: 'Test 999 str', 
  permAddres: 'Test 11 str',
  salary :'123456789',
  age: 99,     
  department: 'TestDpt',
  phoneNumber: '1234567890',
};
        

async clickPracticeFormLoc() {
  await this.practiceFormLoc.waitForDisplayed()
  await (await this.practiceFormLoc).waitForClickable();
  await (await this.practiceFormLoc).scrollIntoView();
  await (await this.practiceFormLoc).click();
}


async clickFormsDropdownMenuLoc() {
  await this.formsDropdownMenuLoc.waitForDisplayed()
  await (await this.formsDropdownMenuLoc).waitForClickable();
  await (await this.formsDropdownMenuLoc).scrollIntoView();
  await (await this.formsDropdownMenuLoc).click();
}



async clickAndFillForm() {  
  await this.formFirstNameLoc.setValue(this.testPerson.firstName);
  await this.formLastNameLoc.setValue(this.testPerson.secondName);
  await this.formUserEmailLoc.setValue(this.testPerson.email);

  const radioBtn = await $('#gender-radio-1');
  await browser.execute(async (el) => { await el.click() }, radioBtn);

  await this.formUserPhoneNumberLoc.setValue(this.testPerson.phoneNumber);
  await (await this.formBirthDateLoc).waitForClickable()
  await (await this.formBirthDateLoc).scrollIntoView()
  await (await this.formBirthDateLoc).click();
  await this.formBirthDateYearLoc.selectByVisibleText('1999');
  await this.formBirthDateMonthLoc.selectByVisibleText('May');
  await this.formBirthDateDayLoc.click();

  await this.formSubjectsDropdownMenuLoc.setValue('mat');
  await browser.keys('Enter');

  await (await this.formHobbiesReadingCheckboxLoc).waitForClickable()
  await (await this.formHobbiesReadingCheckboxLoc).scrollIntoView()
  await (await this.formHobbiesReadingCheckboxLoc).click();

  await this.formCurrentAddresLoc.setValue(this.testPerson.currAddres);

  await (await this.formStateLoc).scrollIntoView()
  await (await this.formStateLoc).click();
  await browser.keys('Enter');

  await this.formCityLoc.click();
  await browser.keys('Enter');
}

async clickFormSubmitBtn()  {
  await (await this.formSubmitBtn).waitForClickable();
  await (await this.formSubmitBtn).scrollIntoView();
  await (await this.formSubmitBtn).click();
}


async expectFullFilledFormPage() {
  await this.expectFilledForm.waitForDisplayed();
}
    
async expectFullFilledForm() {    
  expect(await this.filledPhoneLoc.getText()).toEqual('1234567890');
  expect(await this.expectBirthDateLoc.getText()).toEqual('21 May,1999');
  expect(await this.filledStudentFullNameLoc.getText()).toEqual('Test Test2');
  expect(await this.filledStudentEmailLoc.getText()).toEqual(this.testPerson.email);
  expect(await this.filledGenderLoc.getText()).toEqual('Male');
  expect(await this.filledSubjectLoc.getText()).toEqual('Maths');
  expect(await this.filledHobbiesLoc.getText()).toEqual('Reading');
  expect(await this.filledAddresLoc.getText()).toEqual(this.testPerson.currAddres);
  expect(await this.filledStateAndCity.getText()).toEqual('NCR Delhi');
}



}
export default new PracticeFormPage();