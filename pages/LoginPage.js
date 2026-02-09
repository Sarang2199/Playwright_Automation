export class LoginPage{

constructor(page) {
        this.page = page;
        // Store your locators as properties
        this.titleMr = page.getByRole('radio', { name: 'Mr.' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password *' });
        this.firstNameInput = page.getByRole('textbox', { name: 'First name *' });
        this.lastNameInput = page.getByRole('textbox', { name: 'Last name *' });
        this.companyInput = page.getByRole('textbox', { name: 'Company', exact: true });
        this.zipcodeInput = page.locator('#zipcode'); // Using ID locator
        this.stateInput = page.getByRole('textbox', { name: 'State *' });
        this.cityInput = page.getByRole('textbox', { name: 'City * Zipcode *' });
        this.phoneInput = page.getByRole('textbox', { name: 'Mobile Number *' });
        this.addressInput = page.getByRole('textbox', { name: 'Address * (Street address, P.' });
        this.createAccountBtn = page.getByRole('button', { name: 'Create Account' });
    }

    async registerNewUser(){
        await this.passwordInput.fill('Test123');
        await this.firstNameInput.fill('John');
        await this.lastNameInput.fill('Don');
        await this.companyInput.fill('Apple Beed Ltd');
        await this.addressInput.fill('Mukkan Post Beed');
        await this.stateInput.fill('Maharashtra');
        await this.cityInput.fill('Beed');
        await this.zipcodeInput.fill('443323');
        await this.phoneInput.fill('8877665599');

    }

}
