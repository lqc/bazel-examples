load("@npm//@bazel/typescript:index.bzl", "ts_project")

ts_project(
    name = "main_compiled",
    srcs = [
        "src/index.ts"
    ],
    declaration = True,
    tsconfig = "//:tsconfig_node",
    validate = True,
    composite = True,
    root_dir = "src",
    deps = [
        "@npm//@types",
    ],
)
