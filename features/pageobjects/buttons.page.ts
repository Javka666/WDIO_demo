class ButtonsPage {

get getHeaderLoc () { return $('//div[text()="Buttons"]')};

get buttonsBtnLoc () { return $('(//ul[@class="menu-list"]//li)[5]')};

get doubleClickBtnPageLoc () { return $('#doubleClickBtn')};

get doubleClickNotifyOnButtonsPage () { return $(' p#doubleClickMessage')};

get rightClickBtnOnButtonsPage () { return $('#rightClickBtn')};

get rightClickNotifyOnButtonsPage () { return $('p#rightClickMessage')};

get dynamicClickBtnOnButtonsPage () { return $('//button[text()="Click Me"]')};

get dynamicClickNotifyOnButtonsPage () { return $('p#dynamicClickMessage')};
 



async clickButtonsBtn() {
    await (await this.buttonsBtnLoc).waitForClickable()
    await (await this.buttonsBtnLoc).scrollIntoView();
    await (await this.buttonsBtnLoc).click()   
}

async getHeader() {
    await this.getHeaderLoc.scrollIntoView();
    expect(await this.getHeaderLoc).toBeDisplayed();
}

async clickAllBtnsOnButtonsPage() {
    await this.doubleClickBtnPageLoc.scrollIntoView();
    await this.doubleClickBtnPageLoc.doubleClick();

    await this.rightClickBtnOnButtonsPage.scrollIntoView();
    await this.rightClickBtnOnButtonsPage.click({button: 2});

    await this.dynamicClickBtnOnButtonsPage.scrollIntoView();
    await this.dynamicClickBtnOnButtonsPage.click();
}    

async expectAllNotifyOnButtonsPage() {
  expect((await this.doubleClickNotifyOnButtonsPage).scrollIntoView()).toBeDisplayed();
  expect((await this.rightClickNotifyOnButtonsPage).scrollIntoView()).toBeDisplayed();
  expect((await this.dynamicClickNotifyOnButtonsPage).scrollIntoView()).toBeDisplayed();
}


}
    
export default new ButtonsPage();