// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

console.error(process.env);

const isUsingBazel = process.env['BAZEL_WORKSPACE'] !== undefined;

let CONFIG = {
    reporters: [
        ["jest-junit", {outputFile: process.env['XML_OUTPUT_FILE'] || 'target/unit/karma-reports/junit.xml'}],
    ],
    clearMocks: true,
    moduleFileExtensions: ["ts", "js", "graphql", "json"],
    testEnvironment: "node",
    collectCoverage: true,
    coverageProvider: "v8",
};


module.exports = CONFIG;