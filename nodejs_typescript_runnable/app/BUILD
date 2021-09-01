load("@npm//@bazel/typescript:index.bzl", "ts_project")
load("@build_bazel_rules_nodejs//:index.bzl", "js_library")
load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_binary")


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
    package_name = "@example/app",
    srcs = ["package.json"],
    deps = [":app_compiled"],
)

nodejs_binary(
    name = "app",
    chdir = package_name(),
    data = [
        ":app_package",
    ],
    entry_point = ":index.js"

)