// @ts-check
import { test, expect } from '@playwright/test';
import {ConstantText} from '../pages/Locators.js';
import {LoginPage} from '../pages/LoginPage.js';
import {CommonUtils} from '../utils/CommonUtils';
import { ProductsPage } from '../pages/ProductsPage.js';
import testData from '../data/testData.json' with { type: 'json' };;
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
  await login.registerNewUser(testData.newUser);
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
  await login.login(testData.validUser.email,testData.validUser.password);
  await CommonUtils.clickButtonWithName('Login',page);
  //Verify that 'Logged in as username' is visible
  await expect(page.getByText('Logged in as admindummy')).toBeVisible();
  //Click on Logout button
  await login.clickLogout();
});
test('Test Case 3: Login User with incorrect email and password',async({page})=>{
  //Naviaget to Signup/Login
  await login.navigateToLogin();
  //Verify 'Login to your account' is visible
  await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();
  //Enter incorrect email address and password
  await login.login(testData.invalidUser.email,testData.invalidUser.password);
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

test('Test Case 5: Serach Product and add to cart',async({page})=>{
  await CommonUtils.clickLinkWithNameRegex(page,'Products');
  await products.searchProduct('Men Tshirt');
  await CommonUtils.clickLinkWithNameRegex(page,'View Product');
  await expect(page.getByRole('heading', { name: 'Men Tshirt' })).toBeVisible();
  await page.getByRole('button', { name: ' Add to cart' }).click();
  await expect(page.getByText('Your product has been added')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Added!' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Continue Shopping' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'View Cart' })).toBeVisible();
  
});
test.afterEach(async ({ page }) => {
  await page.close();
});

});