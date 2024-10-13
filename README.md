<br>
<p align="center">
  <img alt="Don Logo" width="300" src="https://raw.githubusercontent.com/lindenquan/don/main/.github/assets/logo.png" />
</p>
<br>
<p align="center">
  <a href="https://github.com/lindenquan/don/actions/workflows/ci.yaml">
  <img src="https://img.shields.io/github/actions/workflow/status/lindenquan/don/ci.yaml?branch=main&logo=github&style=for-the-badge" alt="Don CI">
  </a>
  <a href="https://don.doctornova.net/" target="_blank">
  <img src="https://img.shields.io/badge/Cloudflare_Pages-0690FA?labelColor=grey&logo=Cloudflare&style=for-the-badge" alt="Cloudflare Pages">
  </a>
  <a href="https://app.codecov.io/github/lindenquan/don">
  <img src="https://img.shields.io/codecov/c/github/lindenquan/don/master.svg?style=for-the-badge" alt="Codecov">
  </a>
  <a href=""><img src="https://img.shields.io/badge/License-ISC-blue.svg?style=for-the-badge" alt="License" /></a>
</p>
<br>
<br>

<h1 align="center">Personal Financial Management App</h1>

## Table of Contents

- [Tech stack](#tech-stack)
- [Project Structure](#project-structure)
- [Development](#development)
- [Production](#production)
- [Roadmap](#roadmap)

## Tech stack

[pNpm](https://pnpm.io/): Fast, disk space efficient package manager

[Release Please](https://github.com/googleapis/release-please): Release Please automates CHANGELOG generation, the creation of GitHub releases, and version bumps for your projects.

[Husky](https://github.com/typicode/husky): Auto run `lint`, `unit tests`, `build` before commit.

[SolidJS](https://www.solidjs.com/): Simple and performant reactivity for building user interfaces.

[Vite](https://vitejs.dev/): Frontend Tooling. It uses Rollup and esbuild internally for bundling

[Vitest](https://vitest.dev/): Testing Framework.

## Project Structure

This project is using Qwik with [QwikCity](https://qwik.dev/qwikcity/overview/). QwikCity is just an extra set of tools on top of Qwik to make it easier to build a full site, including directory-based routing, layouts, and more.

Inside your project, you'll see the following directory structure:

```
├── public/
│   └── ...
└── src/
    ├── components/
    │   └── ...
    └── routes/
        └── ...
```

- `src/routes`: Provides the directory-based routing, which can include a hierarchy of `layout.tsx` layout files, and an `index.tsx` file as the page. Additionally, `index.ts` files are endpoints. Please see the [routing docs](https://qwik.dev/qwikcity/routing/overview/) for more info.

- `src/components`: Recommended directory for components.

- `public`: Any static assets, like images, can be placed in the public directory. Please see the [Vite public directory](https://vitejs.dev/guide/assets.html#the-public-directory) for more info.

## Development

Development mode uses [Vite's development server](https://vitejs.dev/). The `dev` command will server-side render (SSR) the output during development.

```shell
pnpm start
```

> Note: during dev mode, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.

## Production

The production build will generate client and server modules by running both client and server build commands. The build command will use Typescript to run a type check on the source code.

```shell
pnpm build
```

## Roadmap

- 🚧 <span style="color:blue">**TODO**</span> Account Aggregation

  - Link multiple bank accounts, credit cards, loans, and investment accounts.
  - Real-time synchronization of balances and transactions.

- 🚧 <span style="color:blue">**TODO**</span> Expense Tracking

  - Automatically categorize transactions (e.g., groceries, entertainment, utilities) by taking pictures of receipts.
  - Manual entry of expenses and transactions.
  - Support for splitting transactions (e.g., shared bills).
  - Tagging expenses for more personalized tracking (e.g., vacations, business).

- 🚧 <span style="color:blue">**TODO**</span> Income Tracking

  - Record and categorize income (salary, freelance, dividends, etc.).
  - Monitor recurring income streams and one-time payments.
  - Integration with payroll systems and tax tracking for income insights.

- 🚧 <span style="color:blue">**TODO**</span> Bill Management

  - Add and track recurring bills (rent, utilities, subscriptions, etc.).
  - Bill reminders and notifications (upcoming due dates).
  - Ability to set up autopay or mark bills as paid.

- 🚧 <span style="color:blue">**TODO**</span> Investment Tracking

  - Link investment accounts and track portfolio performance.
  - Track asset allocations (stocks, bonds, mutual funds, etc.).
  - Monitor net worth based on assets and liabilities.
  - Portfolio diversification and investment insights.

- 🚧 <span style="color:blue">**TODO**</span> Debt Management

  - Track loans (student loans, mortgages, credit card debt).
  - Payment reminders and automated debt payoff plans (e.g., debt snowball, debt avalanche).
  - Interest calculation and amortization schedules.

- 🚧 <span style="color:blue">**TODO**</span> Financial Insights & Reports

  - Visualize monthly cash flow (income vs. expenses).
  - Detect trends in cash flow patterns (e.g., surpluses, deficits).
  - Forecast future cash flow based on current spending patterns.
  - Generate monthly, quarterly, and annual financial reports.
  - Provide insights into spending patterns, income trends, and savings performance.
  - Track overall net worth based on assets (bank balances, properties) and liabilities (debts, loans).
  - Historical data visualization to track net worth growth or decline.

- 🚧 <span style="color:blue">**TODO**</span> Credit Score Monitoring

  - Link with credit score agencies to monitor and report credit scores.
  - Provide insights on how to improve the credit score.
  - Offer alerts for changes in credit reports.

- 🚧 <span style="color:blue">**TODO**</span> Alerts & Notifications

  - Customizable alerts for various financial events (e.g., low balance, overspending, bill due).
  - Notifications for account changes, suspicious activity, or significant financial milestones.
  - Weekly or monthly summaries of financial activities.

- 🚧 <span style="color:blue">**TODO**</span> Security Features
  - Bank-level encryption to protect sensitive data.
  - Biometric login (fingerprint, face ID).
  - Automatic logout after a period of inactivity.
