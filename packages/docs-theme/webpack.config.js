/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const path = require("path");

const { baseConfig, COMMON_EXTERNALS } = require("@mach9/blueprint-webpack-build-scripts");

module.exports = Object.assign({}, baseConfig, {
    entry: {
        "docs-theme": ["./src/index.ts"],
    },

    externals: COMMON_EXTERNALS,

    output: {
        filename: "[name].bundle.js",
        library: ["Blueprint", "DocsTheme"],
        libraryTarget: "umd",
        path: path.resolve(__dirname, "./dist"),
    },
});
