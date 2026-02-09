// @ts-check
import { test, expect } from '@playwright/test';
import {ConstantText} from '../pages/Locators.js';
import {LoginPage} from '../pages/LoginPage.js';
import {CommonUtils} from '../utils/CommonUtils';
test.beforeEach('Navigate to Automation Exercise url',async ({ page }) => {
  await page.goto('https://automationexercise.com');
  await expect(page.getByRole('link',{name:' Home'})).toHaveCSS('color', 'rgb(255, 165, 0)');

});
test('TC01 Register User', async ({ page }) => {
  await page.getByRole('link',{name:' Signup / Login'}).click();
  await expect(page.getByText('New User Signup!')).toBeVisible({timeout:20000});
  await page.locator('[data-qa="signup-name"]').fill('JohnTheDon');
  var userEmail = CommonUtils.generateRandomEmail();
  console.log(userEmail);
  await page.locator('[data-qa="signup-email"]').fill(userEmail);
  await page.getByRole('button',{name:'Signup'}).click();
  const isErrorVisible = await page.getByText('Email Address already exist!').isVisible();
  if(isErrorVisible){
    console.log("Email Address already exists!");
  }
  await CommonUtils.verifyTextVisibility(ConstantText.ACCOUNT_INFO,page);
  const login = new LoginPage(page);
  await login.registerNewUser();
  await CommonUtils.clickButtonWithName('Create Account',page);
  await CommonUtils.verifyTextVisibility('Account Created!',page)
  await CommonUtils.verifyTextVisibility('Congratulations! Your new',page);
  await page.getByRole('link', { name: 'Continue' }).click();
  await expect(page.getByRole('link', { name: ' Logout' })).toBeVisible();
  await expect(page.getByText('Logged in as JohnTheDon')).toBeVisible();
  await page.getByRole('link', { name: ' Delete Account' }).click();
  await CommonUtils.verifyTextVisibility('Account Deleted!',page);
  await page.getByRole('link', { name: 'Continue' }).click();

});

