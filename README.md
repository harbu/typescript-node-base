### typescript-node-base

A project template for Typescript-based Node.js applications. Includes minimal
configuration files by leaning on default settings and only explicitly setting
configuration options when deviations are necessary.

Comes equipped with:
- Typescript
  - configured to work with Node.js v16
  - package `ts-node` to run app without building
- eslint
  - strict rule sets enabled
  - no semicolons, 4 space indentation, 100 max line length, double quotes
- jest
  - `ts-jest` for running tests without building project
  - `jest-extended` included for eloquently expressing a wide array of assertions
- simple **`package.json`** tailored for a Node.js based application
    - simple scripts such as `build`, `clean`, `lint`, `start`, and `test`.
- IntelliJ configuration
  - with a few pre-configured run configurations
