// @ts-check
import { test, expect } from '@playwright/test';
import {ConstantText} from '../pages/Locators.js';
import {LoginPage} from '../pages/LoginPage.js';
import {CommonUtils} from '../utils/CommonUtils';
import { ProductsPage } from '../pages/ProductsPage.js';
test.describe('User Management Flow', () => {
  /** @type {LoginPage} */
  let login;
  /** @type {ProductsPage} */
  let products;
test.beforeEach('Navigate to Automation Exercise url',async ({ page }) => {
  login = new LoginPage(page);
  products = new ProductsPage(page);
  await page.goto('/');
  await expect(page.getByRole('link',{name:' Home'})).toHaveCSS('color', 'rgb(255, 165, 0)');

});
test('TC01 Register User', async ({ page }) => {
  //Naviaget to Signup/Login
  await login.navigateToLogin();
  await login.signUp();
  //Assert User Navigated to Sign Up Page
  await expect(page.getByText(ConstantText.ACCOUNT_INFO)).toBeVisible(); 
  //Register user with valid details
  await login.registerNewUser();
  await login.clickContinue();
  //Verify User logged in successfully
  await expect(page.getByRole('link', { name: ' Logout' })).toBeVisible();
  await expect(page.getByText('Logged in as JohnTheDon')).toBeVisible();
  //Delete the Account and Verify user account deleted
  await login.deleteAccount();
  await expect(page.getByText(ConstantText.ACCOUNT_DELETED)).toBeVisible();
  await login.clickContinue();
});
test('Test Case 2: Login User with correct email and password',async({page})=>{
  //Naviaget to Signup/Login
  await login.navigateToLogin();
  //Login with valid user email and password
  await login.login('admindummy@gmail.com','admindummy');
  await CommonUtils.clickButtonWithName('Login',page);
  //Verify that 'Logged in as username' is visible
  await expect(page.getByText('Logged in as admindummy')).toBeVisible();
  await expect(page.getByRole('link', { name: /Logout/ })).toBeVisible();
  //Click on Logout button
  await page.getByRole('link', { name: /Logout/ }).click();
});
test('Test Case 3: Login User with incorrect email and password',async({page})=>{
  //Naviaget to Signup/Login
  await login.navigateToLogin();
  //Verify 'Login to your account' is visible
  await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();
  //Enter incorrect email address and password
  await login.login('admindummy@gmail.com','admin123');
  await CommonUtils.clickButtonWithName('Login',page);
  //Verify error 'Your email or password is incorrect!' is visible
  await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();
});

test('Test Case 4: Search Product',async({page})=>{
  //Verify that home page is visible successfully
  await expect(page.getByRole('link', { name: /Home/ })).toBeVisible();
  //Click on 'Products' button
  await CommonUtils.clickLinkWithNameRegex(page,'Products');
  //Verify user is navigated to ALL PRODUCTS page successfully
  await expect(page.getByRole('heading', { name: 'All Products' })).toBeVisible();
  //Enter product name in search input and click search button
  await products.searchProduct('Mens Tshirt');
  //Verify 'SEARCHED PRODUCTS' is visible
  await expect(page.getByRole('heading', { name: 'Searched Products' })).toBeVisible();
});

});