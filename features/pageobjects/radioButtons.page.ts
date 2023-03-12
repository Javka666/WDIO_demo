
class RadioboxPage {

  get elementsButton() { return $('(//ul[@class="menu-list"]//li)[3]') };
  
  get button1() { return  $('input[id="yesRadio"]') };
  
  get button2() { return $('input[id="impressiveRadio"]') };
  
  get result() { return $('//p[text()="You have selected "]') };
    
  get getHeaderLoc () { return $('//div[text()="Radio Button"]') };



  async getHeader() {
    expect(await this.getHeaderLoc).toBeDisplayed();
  }
 
  async selectRadioButton() {
    await (await this.elementsButton).waitForClickable();
    await (await this.elementsButton).scrollIntoView();
    await (await this.elementsButton).click(); 
  }
 
  async clickYesButton() {
    const radioBtn = await $('input#yesRadio');
    await browser.execute(async (el) => {
      await el.click();
    }, radioBtn);
  }

  async clickImpressiveButton() {
    const radioBtn = await $('input#impressiveRadio');
    await browser.execute(async (el) => {
      await el.click();
    }, radioBtn);
    }
  
  async getResult() {
    expect(await this.result).toHaveTextContaining('Yes');
  }

  async getResult2() {
    expect(await this.result).toHaveTextContaining('Impressive');
  }

}
export default new RadioboxPage();
