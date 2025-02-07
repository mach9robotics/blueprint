/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 */

const { createKarmaConfig } = require("@mach9/blueprint-karma-build-scripts");

module.exports = function (config) {
    const baseConfig = createKarmaConfig({
        dirname: __dirname,
    });
    config.set(baseConfig);
};
