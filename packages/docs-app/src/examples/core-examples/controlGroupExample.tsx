/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
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

import { Button, ControlGroup, HTMLSelect, InputGroup, Switch } from "@mach9/blueprint-core";
import { Example, ExampleProps, handleBooleanChange } from "@mach9/blueprint-docs-theme";

const FILTER_OPTIONS = ["Filter", "Name - ascending", "Name - descending", "Price - ascending", "Price - descending"];

export interface IControlGroupExampleState {
    fill: boolean;
    vertical: boolean;
}

export class ControlGroupExample extends React.PureComponent<ExampleProps, IControlGroupExampleState> {
    public state: IControlGroupExampleState = {
        fill: false,
        vertical: false,
    };

    private toggleFill = handleBooleanChange(fill => this.setState({ fill }));

    private toggleVertical = handleBooleanChange(vertical => this.setState({ vertical }));

    public render() {
        const options = (
            <>
                <Switch checked={this.state.fill} label="Fill" onChange={this.toggleFill} />
                <Switch checked={this.state.vertical} label="Vertical" onChange={this.toggleVertical} />
            </>
        );

        return (
            <Example options={options} {...this.props}>
                <ControlGroup {...this.state}>
                    <HTMLSelect options={FILTER_OPTIONS} />
                    <InputGroup placeholder="Find filters..." />
                    <Button icon="arrow-right" />
                </ControlGroup>
            </Example>
        );
    }
}
