/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 */

const { createKarmaConfig } = require("@mach9/blueprint-karma-build-scripts");
const path = require("path");
const coreManifest = require("../core/package.json");
const packageManifest = require("./package.json");

module.exports = function (config) {
    const baseConfig = createKarmaConfig({
        dirname: __dirname,
    });
    config.set(baseConfig);
    config.set({
        // overrides here
    });
};
