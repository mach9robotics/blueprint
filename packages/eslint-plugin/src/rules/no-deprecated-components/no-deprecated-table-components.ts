/*
 * (c) Copyright 2022 Palantir Technologies Inc. All rights reserved.
 */

import { createNoDeprecatedComponentsRule } from "./createNoDeprecatedComponentsRule";

export const tableComponentsMigrationMapping = {
    JSONFormat: "JSONFormat2",
    TruncatedFormat: "TruncatedFormat2",
    // TODO(@adidahiya): Blueprint v6
    // ColumnHeaderCell: "ColumnHeaderCell2",
    // EditableCell: "EditableCell2",
    // RowHeaderCell: "RowHeaderCell2",
    // Table: "Table2",
};

/**
 * This rule is similar to "@mach9/blueprint-no-deprecated-components", but it only checks for usage
 * of deprecated components from @mach9/blueprint-table. This is useful for incremental migration to
 * newer Blueprint APIs.
 */
export const noDeprecatedTableComponentsRule = createNoDeprecatedComponentsRule(
    "no-deprecated-table-components",
    ["@mach9/blueprint-table"],
    tableComponentsMigrationMapping,
);
