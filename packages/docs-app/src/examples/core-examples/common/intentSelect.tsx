/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
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

import { HTMLSelect, Intent, Label } from "@mach9/blueprint-core";

const INTENTS = [
    { label: "None", value: Intent.NONE },
    { label: "Primary", value: Intent.PRIMARY },
    { label: "Success", value: Intent.SUCCESS },
    { label: "Warning", value: Intent.WARNING },
    { label: "Danger", value: Intent.DANGER },
    { label: "Mach9", value: Intent.MACH9 },
];

export interface IIntentSelectProps {
    intent: Intent;
    label?: React.ReactNode;
    onChange: React.FormEventHandler<HTMLSelectElement>;
}

export const IntentSelect: React.FC<IIntentSelectProps> = props => (
    <Label>
        {props.label}
        <HTMLSelect value={props.intent} onChange={props.onChange} options={INTENTS} />
    </Label>
);
IntentSelect.defaultProps = {
    label: "Intent",
};
