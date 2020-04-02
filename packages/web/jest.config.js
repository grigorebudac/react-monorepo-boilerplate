module.exports = {
  roots: ["<rootDir>/src"],
  testMatch: ["**/__tests__/**/*.+(ts|tsx)", "**/?(*.)+(test).+(ts|tsx)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  setupFilesAfterEnv: [
    "<rootDir>/jest.setup.js" //added this line to update setup for jest to include some extension to enable components as popper.js to be tested normally on virtual environment not a real one.
  ],
  moduleDirectories: ["node_modules", "src"],
  testPathIgnorePatterns: ["/node_modules/"],
  moduleFileExtensions: ["ts", "tsx", "js", "json"]
};
