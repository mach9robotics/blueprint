/*
 * (c) Copyright 2022 Palantir Technologies Inc. All rights reserved.
 */

import { createNoDeprecatedComponentsRule } from "./createNoDeprecatedComponentsRule";

export const datetimeComponentsMigrationMapping = {
    DateInput: "DateInput2",
    DateRangeInput: "DateRangeInput2",
    // TODO(@adidahiya): Blueprint v6
    // DateTimePicker: "DatePicker",
};

/**
 * This rule is similar to "@mach9/blueprint-no-deprecated-components", but it only checks for usage
 * of deprecated components from @mach9/blueprint-datetime. This is useful for incremental migration to
 * newer Blueprint APIs.
 */
export const noDeprecatedDatetimeComponentsRule = createNoDeprecatedComponentsRule(
    "no-deprecated-datetime-components",
    ["@mach9/blueprint-datetime"],
    datetimeComponentsMigrationMapping,
);
