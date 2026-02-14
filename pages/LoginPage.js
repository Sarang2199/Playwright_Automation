import { CommonUtils } from "../utils/CommonUtils";
import { ConstantText } from "./Locators";

export class LoginPage{

constructor(page) {
        this.page = page;
        // Store your locators as properties
        this.signupName = page.locator('[data-qa="signup-name"]');
        this.signupEmail =page.locator('[data-qa="signup-email"]');
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
        this.signupLoginBtn =page.getByRole('link',{name:' Signup / Login'});
        this.emailExistsError = page.getByText('Email Address already exist!');
        this.deleteAccountBtn = page.getByRole('link', { name: ' Delete Account' });
        this.continueBtn = page.getByRole('link', { name: 'Continue' });
        this.loginPassword = page.getByRole('textbox', { name: 'Password' });
        this.loginEmail = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
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

        await CommonUtils.clickButtonWithName('Create Account',this.page);
        await CommonUtils.verifyTextVisibility(this.page,ConstantText.ACCOUNT_CREATED)
        await CommonUtils.verifyTextVisibility(this.page,ConstantText.CONGRATULATIONS_TXT);

    }

    async navigateToLogin(){
        await this.signupLoginBtn.click();
        await CommonUtils.verifyTextVisibility(this.page,'New User Signup!') 
    }

    async signUp(){
        await this.signupName.fill('JohnTheDon');
        var userEmail = CommonUtils.generateRandomEmail();
        console.log(userEmail);
        await this.signupEmail.fill(userEmail);
        await CommonUtils.clickButtonWithName('Signup',this.page);
        const isErrorVisible = await this.emailExistsError.isVisible();
        if(isErrorVisible){
            console.log("Email Address already exists!");
            var userAnotherEmail = CommonUtils.generateRandomEmail();
            await this.signupEmail.fill(userAnotherEmail);
            await CommonUtils.clickButtonWithName('Signup',this.page);
        }
    }
    async login(userEmail,password){
        await this.loginEmail.fill(userEmail);
        await this.loginPassword.fill(password);
        
    }

    async deleteAccount(){
        await this.deleteAccountBtn.click();
    }

    async clickContinue(){
        await this.continueBtn.click();
    }
}
