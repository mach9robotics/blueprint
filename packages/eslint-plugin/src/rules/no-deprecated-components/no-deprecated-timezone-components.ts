/*
 * (c) Copyright 2022 Palantir Technologies Inc. All rights reserved.
 */

import { createNoDeprecatedComponentsRule } from "./createNoDeprecatedComponentsRule";

export const timezoneComponentsMigrationMapping = {
    TimezonePicker: "TimezoneSelect",
};

/**
 * This rule is similar to "@mach9/blueprint-no-deprecated-components", but it only checks for usage
 * of deprecated components from @mach9/blueprint-timezone. This is useful for incremental migration to
 * newer Blueprint APIs.
 */
export const noDeprecatedTimezoneComponentsRule = createNoDeprecatedComponentsRule(
    "no-deprecated-timezone-components",
    ["@mach9/blueprint-timezone"],
    timezoneComponentsMigrationMapping,
);
