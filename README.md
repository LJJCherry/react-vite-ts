# Visual Regression Testing

视觉回归测试

采用的测试库基础库是 [Cypress](https://www.cypress.io/), 视觉回归测试库是 [cypress-image-diff](https://github.com/uktrade/cypress-image-diff)

运行测试

```sh
npm i
npx cypress open
```

更新基线图片

```sh
npm run test:update
```

参考文档：https://www.browserstack.com/guide/cypress-visual-testing-components
