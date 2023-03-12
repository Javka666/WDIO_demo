class MainPage  {
    get elementsButton () { return $('//h5[text()="Elements"]') };
    
    async openMainPage () {
    await browser.setWindowSize(1440,900);
    await browser.url("https://demoqa.com/");
    }

    async clickElementsButton () {
      await (await this.elementsButton).waitForClickable();
      await (await this.elementsButton).scrollIntoView();
      await (await this.elementsButton).click();   
    }

    async isMainPageDisplayed () {
      return (await browser.getUrl()) === 'https://demoqa.com/';
    }
  
    async isElementsPageDisplayed () {
     expect(browser).toHaveUrl('https://demoqa.com/elements');
  }
    
}
export default new MainPage();