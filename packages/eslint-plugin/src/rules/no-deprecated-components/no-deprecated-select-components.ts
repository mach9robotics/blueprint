/*
 * (c) Copyright 2022 Palantir Technologies Inc. All rights reserved.
 */

import { createNoDeprecatedComponentsRule } from "./createNoDeprecatedComponentsRule";

export const selectComponentsMigrationMapping = {
    MultiSelect: "MultiSelect2",
    Select: "Select2",
    Suggest: "Suggest2",
};

/**
 * This rule is similar to "@mach9/blueprint-no-deprecated-components", but it only checks for usage
 * of deprecated components from @mach9/blueprint-select. This is useful for incremental migration to
 * newer Blueprint APIs.
 */
export const noDeprecatedSelectComponentsRule = createNoDeprecatedComponentsRule(
    "no-deprecated-select-components",
    ["@mach9/blueprint-select"],
    selectComponentsMigrationMapping,
);
