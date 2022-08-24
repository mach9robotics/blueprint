/*
 * Copyright 2021 Palantir Technologies, Inc. All rights reserved.
 *
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

import * as React from "react";

import { BreadcrumbProps, Breadcrumbs2 } from "@mach9/blueprint-popover2";

import { ExampleCard } from "./ExampleCard";

const ITEMS: BreadcrumbProps[] = [
    { icon: "folder-close", text: "All files" },
    { icon: "folder-close", text: "Overflow 1" },
    { icon: "folder-close", text: "Overflow 2" },
    { icon: "folder-close", text: "Unselectable" },
    { href: "#", icon: "folder-close", text: "Link" },
    { icon: "document", text: "Selected", current: true },
];

export class BreadcrumbExample extends React.PureComponent {
    public render() {
        return (
            <ExampleCard label="Breadcrumbs">
                <Breadcrumbs2 items={ITEMS} />
            </ExampleCard>
        );
    }
}
