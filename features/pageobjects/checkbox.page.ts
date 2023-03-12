class CheckBoxPage  {

get getHeaderLoc () { return $('//div[text()="Check Box"]')};

get clickCheckBoxBtnLoc () { return $('(//ul[@class="menu-list"]//li)[2]')};

get clickExpandAllBtn () { return $('//*[@id="tree-node"]/div/button[1]')};
 
get commandsCheckbox () { return $('//span[text()="Commands"]')};

get privateCheckbox () { return $('//span[text()="Private"]')};

get excelFileCheckbox () { return $('//span[text()="Excel File.doc"]')};

get commandsSelected () { return $('//span[text()="commands"]')};

get privateSelected () { return $('//span[text()="private"]')};

get excelFileSelected () { return $('//span[text()="excelFile"]')};

get expandAllBtn () { return $('#tree-node > ol > li > span')};





async getHeader() {
  expect(await this.getHeaderLoc).toBeDisplayed();
}
    
async clickCheckBoxButton() {
  await (await this.clickCheckBoxBtnLoc).waitForClickable()
  await (await this.clickCheckBoxBtnLoc).scrollIntoView()
  await (await this.clickCheckBoxBtnLoc).click();
}

async expectExpendAllBtnWorks () {
  expect(await this.expandAllBtn).toExist;
}
 
async clickExpandAllButton() {
  await (await this.clickExpandAllBtn).waitForClickable()
  await (await this.clickExpandAllBtn).scrollIntoView()
  await (await this.clickExpandAllBtn).click();
}

async selectCommandsCheckbox() {
  await (await this.commandsCheckbox).waitForClickable()
  await (await this.commandsCheckbox).scrollIntoView()
  await (await this.commandsCheckbox).click()
}
    
async selectPrivateCheckbox() {
 await (await this.privateCheckbox).waitForClickable()
 await (await this.privateCheckbox).scrollIntoView()
 await (await this.privateCheckbox).click()
}
  
async selectExcelFileCheckbox() {
 await (await this.excelFileCheckbox).waitForClickable()
 await (await this.excelFileCheckbox).scrollIntoView()
 await (await this.excelFileCheckbox).click()
}
   
async isCommandsSelected() {
 await (await this.commandsSelected).scrollIntoView()
 expect(await this.commandsSelected).toHaveTextContaining('commands')
}
    
async isPrivateSelected() {
 expect(await this.privateSelected).toHaveTextContaining('private')
}
    
async isExcelFileSelected() {
 expect(await this.excelFileSelected).toHaveTextContaining('excelFile')
}





}     
export default new CheckBoxPage();