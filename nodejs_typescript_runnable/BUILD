package(default_visibility = ["//visibility:public"])

exports_files([
    "package.json",
])

load("@npm//@bazel/typescript:index.bzl", "ts_config")

ts_config(
    name = "tsconfig_node",
    src = "tsconfig.json",
    visibility = [":__subpackages__"],
)
