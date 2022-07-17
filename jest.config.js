module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  modulePathIgnorePatterns: [
      "dist"
  ],
  setupFilesAfterEnv: [
    "jest-extended/all"
  ]
}
