# ESLINT-CONFIG-ALROMANO

Coding standards for my JS/TS-based projects: an integration of the [Airbnb coding standards](https://www.npmjs.com/package/eslint-config-airbnb) and [Prettier code formatter](https://prettier.io/).

It works even on mixed JS/TS projects.

## Development

Run `npm i`

### Run tests

Run `npm test`
NB: tests can fails: don't worry, it's a playground for you, to test eslint settings

### Release flow

It will automatically push the tag to git.

```
npm version major|minor|patch
```

## Usage

1. Install this project in `devDependencies` for example (specify the version you need):

```
"eslint-config-alromano": ""
```

**NOTE**: no other eslint package (plugins, parser...) is required.
Everything comes from this centralized config

2. Create in the root of your project a file named `.eslintrc` with the following configuration:

```json
{
  "extends": "eslint-config-alromano"
}
```

or just

```json
{
  "extends": "lmn"
}
```

3a. Use it from your CLI or integrate it in your tasks in `package.json` Eg:

```json
{
  "scripts": {
    "lint:fix": "eslint './**/*.{ts,tsx,js,jsx}' --fix"
  }
}
```

3b. The **RECOMMENDED** approach is to fix only staged files in order to speed-up. You can do this with pre-commit hooks:

- Install [pre-commit](https://github.com/observing/pre-commit) or [husky](https://github.com/typicode/husky)
- Install [lint-staged](https://github.com/okonet/lint-staged)
- Configure them in `package.json`

```json
"scripts": {
    ...
    "lint:staged": "lint-staged && git add .",
  },
  "pre-commit": "lint:staged",
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": "eslint --fix"
  },
```

**It's highly recommended to use the `--fix` flag**
