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

/* eslint-disable  max-classes-per-file */

import * as React from "react";
import * as ReactDOM from "react-dom";

// tslint:disable-next-line:no-submodule-imports
import { Browser } from "@mach9/blueprint-core/lib/esm/compatibility";

export type MouseEventType = "click" | "mousedown" | "mouseup" | "mousemove" | "mouseenter" | "mouseleave";
export type KeyboardEventType = "keypress" | "keydown" | "keyup";

export interface IHarnessMouseOptions {
    /** @default 0 */
    offsetX?: number;

    /** @default 0 */
    offsetY?: number;

    /** @default false */
    altKey?: boolean;

    /** @default false */
    ctrlKey?: boolean;

    /** @default false */
    metaKey?: boolean;

    /** @default false */
    shiftKey?: boolean;

    /** @default 0 */
    button?: number;
}

function dispatchTestKeyboardEvent(target: EventTarget, eventType: string, key: string, modKey = false) {
    const event = document.createEvent("KeyboardEvent");
    const keyCode = key.charCodeAt(0);

    let ctrlKey = false;
    let metaKey = false;

    if (modKey) {
        if (typeof navigator !== "undefined" && /Mac|iPod|iPhone|iPad/.test(navigator.platform)) {
            metaKey = true;
        } else {
            ctrlKey = true;
        }
    }

    (event as any).initKeyboardEvent(eventType, true, true, window, key, 0, ctrlKey, false, false, metaKey);

    // Hack around these readonly properties in WebKit and Chrome
    if (Browser.isWebkit()) {
        (event as any).key = key;
        (event as any).which = keyCode;
    } else {
        Object.defineProperty(event, "key", { get: () => key });
        Object.defineProperty(event, "which", { get: () => keyCode });
    }

    target.dispatchEvent(event);
}

// TODO: Share with blueprint-components #27

export class ElementHarness {
    public static document() {
        return new ElementHarness(document.documentElement);
    }

    public element: Element | null;

    constructor(element: Element | null) {
        this.element = element;
    }

    public exists() {
        return this.element != null;
    }

    public find(query: string, nth?: number) {
        const element = this.findElement(query, nth);
        return new ElementHarness(element ?? null);
    }

    public hasClass(className: string) {
        return this.element?.classList.contains(className) ?? false;
    }

    public bounds() {
        return this.element?.getBoundingClientRect();
    }

    public text() {
        return this.element?.textContent;
    }

    public style() {
        return (this.element as HTMLElement | null)?.style;
    }

    public focus() {
        (this.element as HTMLElement | null)?.focus();
        return this;
    }

    public blur() {
        (this.element as HTMLElement | null)?.blur();
        return this;
    }

    public mouse(
        eventType: MouseEventType = "click",
        offsetXOrOptions: number | IHarnessMouseOptions = 0, // TODO: Change all tests to the object API
        offsetY = 0,
        isMetaKeyDown = false,
        isShiftKeyDown = false,
        button: number = 0,
    ) {
        let offsetX: number;
        let isAltKeyDown: boolean = false;
        let isCtrlKeyDown: boolean = false;

        if (typeof offsetXOrOptions === "object") {
            offsetX = this.defaultValue(offsetXOrOptions.offsetX, 0);
            offsetY = this.defaultValue(offsetXOrOptions.offsetY, 0);
            isAltKeyDown = this.defaultValue(offsetXOrOptions.altKey, false);
            isCtrlKeyDown = this.defaultValue(offsetXOrOptions.ctrlKey, false);
            isMetaKeyDown = this.defaultValue(offsetXOrOptions.metaKey, false);
            isShiftKeyDown = this.defaultValue(offsetXOrOptions.shiftKey, false);
            button = this.defaultValue(offsetXOrOptions.button, 0);
        } else {
            offsetX = offsetXOrOptions as number;
        }

        const bounds = this.bounds();
        if (bounds !== undefined) {
            const x = bounds.left + bounds.width / 2 + offsetX;
            const y = bounds.top + bounds.height / 2 + offsetY;
            const event = document.createEvent("MouseEvent");

            // The crazy long list of arguments below are defined in this ancient web API:
            // event.initMouseEvent(
            //     type, canBubble, cancelable, view,
            //     detail, screenX, screenY, clientX, clientY,
            //     ctrlKey, altKey, shiftKey, metaKey,
            //     button, relatedTarget
            // );
            // HACKHACK: see https://github.com/palantir/blueprint/issues/5173
            // eslint-disable-next-line deprecation/deprecation
            event.initMouseEvent(
                eventType,
                true,
                true,
                window,
                0,
                0,
                0,
                x,
                y,
                isCtrlKeyDown,
                isAltKeyDown,
                isShiftKeyDown,
                isMetaKeyDown,
                button,
                null,
            );
            this.element!.dispatchEvent(event);
        }
        return this;
    }

    public keyboard(eventType: KeyboardEventType = "keypress", key = "", modKey = false) {
        if (this.exists()) {
            dispatchTestKeyboardEvent(this.element!, eventType, key, modKey);
        }
        return this;
    }

    public change(value?: string) {
        if (this.exists()) {
            if (value != null) {
                (this.element as HTMLInputElement).value = value;
            }

            // Apparently onChange listeners are listening for "input" events.
            const event = document.createEvent("HTMLEvents");
            event.initEvent("input", true, true);
            this.element!.dispatchEvent(event);
        }
        return this;
    }

    private findElement(query: string, nth?: number) {
        if (nth != null) {
            return this.element?.querySelectorAll(query)[nth];
        } else {
            return this.element?.querySelector(query);
        }
    }

    /** Returns the default value if the provided value is not defined. */
    private defaultValue(value: any | null | undefined, defaultValue: any) {
        return value != null ? value : defaultValue;
    }
}

export class ReactHarness {
    private container: HTMLElement;

    constructor() {
        this.container = document.createElement("div");
        document.documentElement.appendChild(this.container);
    }

    public mount(component: React.ReactElement<any>) {
        ReactDOM.render(component, this.container);
        return new ElementHarness(this.container);
    }

    public unmount() {
        ReactDOM.unmountComponentAtNode(this.container);
    }

    public destroy() {
        document.documentElement.removeChild(this.container);
        // @ts-ignore
        delete this.container;
    }

    public sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
