# 🎭 Playwright Automation Framework

> End-to-End Test Automation Framework built with Playwright and JavaScript

---

## 📋 Table of Contents
- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Framework Structure](#framework-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [How to Run Tests](#how-to-run-tests)
- [Test Reports](#test-reports)
- [Test Cases](#test-cases)
- [Author](#author)

---

## 📌 About the Project

This is an end-to-end automation framework built for testing **[Automation Exercise]** using **Playwright**.

The framework follows industry best practices including:
- **Page Object Model (POM)** for maintainability
- **Data-Driven Testing** using JSON files
- **Reusable Utility Functions** for common actions
- **Screenshot on Failure** for easy debugging
- **HTML Reports** for test results

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| [Playwright](https://playwright.dev/) | Test Automation Framework |
| JavaScript | Programming Language |
| Node.js | Runtime Environment |
| JSON | Test Data Management |
| HTML Reporter | Test Reporting |
| Git | Version Control |

---

## 📁 Framework Structure

```
playwright-sdet-pro/
│
├── tests/
│   └── user-e2e-case.spec.js     # Test spec files
│
├── pages/
│   ├── LoginPage.js               # Login page object
│   ├── ProductsPage.js            # Products page object
│   └── Locators.js                # Centralized locators & constants
│
├── utils/
│   └── CommonUtils.js             # Reusable utility functions
│
├── data/
│   └── testData.json              # Test data (JSON)
│
├── playwright.config.ts           # Playwright configuration
├── package.json
└── README.md
```

---

## ✅ Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

---

## ⚙️ Installation

**1. Clone the repository**
```bash
git clone https://github.com/Sarang2199/Playwright_Automation.git
```

**2. Navigate to project folder**
```bash
cd Playwright_Automation
```

**3. Install dependencies**
```bash
npm install
```

**4. Install Playwright browsers**
```bash
npx playwright install
```

---

## ▶️ How to Run Tests

**Run all tests**
```bash
npx playwright test
```

**Run a specific test file**
```bash
npx playwright test tests/user-e2e-case.spec.js
```

**Run a specific test by name**
```bash
npx playwright test --grep "TC01 Register User"
```

**Run tests in headed mode (see browser)**
```bash
npx playwright test --headed
```

**Run tests in UI mode (interactive)**
```bash
npx playwright test --ui
```

**Run tests on a specific browser**
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

---

## 📊 Test Reports

**View HTML Report after test run**
```bash
npx playwright show-report
```

> 📸 Screenshots are automatically captured on test failure and attached to the HTML report.

---

## 🧪 Test Cases

| Test Case | Description | Status |
|-----------|-------------|--------|
| TC01 | Register New User | ✅ |
| TC02 | Login User with correct email and password | ✅ |
| TC03 | Login User with incorrect email and password | ✅ |
| TC04 | Search Product | ✅ |
| TC05 | Search Product and Add to Cart | ✅ |

---

## 🔧 Framework Features

- ✅ **Page Object Model** — Separates test logic from page interactions
- ✅ **Data-Driven Testing** — Test data managed via `testData.json`
- ✅ **Reusable Utilities** — Common actions like click, verify text in `CommonUtils`
- ✅ **Screenshot on Failure** — Auto captures screenshots when tests fail
- ✅ **HTML Reports** — Detailed test execution reports
- ✅ **BeforeEach Hooks** — Consistent test setup before each test
- ✅ **Positive & Negative Scenarios** — Covers both happy and unhappy paths

---

## 👤 Author

**Sarang Ghayal**
- GitHub: [@sarang2199](https://github.com/Sarang2199)
- LinkedIn: www.linkedin.com/in/sarang-ghayal
- Email: ssarangghayal@gmail.com

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
