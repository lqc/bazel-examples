load("@npm//@bazel/typescript:index.bzl", "ts_project")
load("@build_bazel_rules_nodejs//:index.bzl", "js_library")
load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_binary")

load("//:jest.bzl", "jest_test")

ts_project(
    name = "app_compiled",
    srcs = glob(["src/*.ts"]),
    declaration = True,
    tsconfig = "//:tsconfig_node",
    validate = True,
    composite = True,
    root_dir = "src",
    deps = [
        "@npm//@types",
    ],
)

js_library(
    name = "app_package",
    package_name = "app",
    srcs = ["package.json"],
    deps = [":app_compiled"],
)

nodejs_binary(
    name = "app",
    chdir = package_name(),
    data = [
        ":app_package",
    ],
    entry_point = ":main.js"
)

# Test targets
ts_project(
    name = "test_compiled",
    srcs = glob(["tests/*.spec.ts"]),
    declaration = True,
    tsconfig = "//:tsconfig_node",
    validate = True,
    composite = True,
    root_dir = "tests",
    deps = [
        "@npm//@types",
        "@npm//jest",
        ":app_package",
    ]
)

exports_files([
    "jest.config.js",
    ],
    visibility = ["//visibility:public"],
)

jest_test(
    name = "test",
    jest_config = ":jest.config.js",
    srcs = [
        ":test_compiled",
    ],
    deps = [
        "@npm//@types/jest",
    ],
)
