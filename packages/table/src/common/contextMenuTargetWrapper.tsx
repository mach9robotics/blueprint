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

/**
 * @fileoverview This component is DEPRECATED, and the code is frozen.
 * Table components should use ContextMenu2 instead.
 */

/* eslint-disable deprecation/deprecation */

import * as React from "react";

import { ContextMenuTarget, IProps } from "@mach9/blueprint-core";

export interface IContextMenuTargetWrapper extends IProps {
    children?: React.ReactNode;
    renderContextMenu: (e: React.MouseEvent<HTMLElement>) => JSX.Element | undefined;
    style: React.CSSProperties;
}

/**
 * Since the ContextMenuTarget uses the `onContextMenu` prop instead
 * `element.addEventListener`, the prop can be lost. This wrapper helps us
 * maintain context menu fuctionality when doing fancy React.cloneElement
 * chains.
 *
 * @deprecated use ContextMenu2 instead
 */
@ContextMenuTarget
export class ContextMenuTargetWrapper extends React.PureComponent<IContextMenuTargetWrapper> {
    public render() {
        const { className, children, style } = this.props;
        return (
            <div className={className} style={style}>
                {children}
            </div>
        );
    }

    public renderContextMenu(e: React.MouseEvent<HTMLElement>) {
        return this.props.renderContextMenu(e);
    }
}
