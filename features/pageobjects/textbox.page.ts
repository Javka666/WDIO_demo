class TextBoxPage  {

get textBoxButton () { return $('(//ul[@class="menu-list"]//li)[1]') };

get nameInput () { return $('input#userName') };

get emailInput () { return $('input#userEmail') };

get currentAddressInput () { return $('textarea#currentAddress') };

get permanentAddressInput () { return $('textarea#permanentAddress') };

get submitButton () { return $('button#submit') };

get fullNameLabel () { return $('(//p[@class="mb-1"])[1]') };

get emailLabel () { return $('(//p[@class="mb-1"])[2]') };

get currentAddressLabel () { return $('p#currentAddress') };   

get permanentAddressLabel () { return $('(//p[@class="mb-1"])[4]') };
    

   

async clickTextBoxButton () {
    await (await this.textBoxButton).click();
}

async isTextBoxPageDisplayed () {
    return (await browser.getUrl()) === 'https://demoqa.com/text-box';
}


async fillTextBox (fullName: string, email: string, currentAddress: string, permanentAddress: string) {
    await (await this.nameInput).setValue(fullName);
    await (await this.emailInput).setValue(email);
    await (await this.currentAddressInput).setValue(currentAddress);
    await (await this.permanentAddressInput).setValue(permanentAddress);
}


async clickSubmitButton () {
    await (await this.submitButton).waitForClickable();
    await (await this.submitButton).scrollIntoView();
    await (await this.submitButton).click();  
}

async isConfirmationPageDisplayed () {
    return (await browser.getUrl()) === 'https://demoqa.com/text-box';
}

async getFullName () {
    expect(await this.fullNameLabel).toHaveTextContaining('John Doe');
}

async getEmail () {
    expect(await this.emailLabel).toHaveTextContaining('johndoe@example.com');
}

async getCurrentAddress () {
    expect(await this.currentAddressLabel).toHaveTextContaining('Test str 1');
}

async getPermanententAddress () {
    expect(await this.permanentAddressLabel).toHaveTextContaining('Test str 2');
}



}
export default new TextBoxPage();
