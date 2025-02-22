/*
 * Copyright 2022 Palantir Technologies, Inc. All rights reserved.
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

import { Classes } from "@mach9/blueprint-core";

const NS = Classes.getClassNamespace();

export const DATE_INPUT = `${NS}-date-input`;
export const DATE_INPUT_POPOVER = `${NS}-date-input-popover`;
export const DATE_INPUT_TIMEZONE_SELECT = `${NS}-date-input-timezone-select`;

export const DATE_RANGE_INPUT = `${NS}-date-range-input`;
export const DATE_RANGE_INPUT_POPOVER = `${NS}-date-range-input-popover`;

export const TIMEZONE_SELECT = `${NS}-timezone-select`;
export const TIMEZONE_SELECT_POPOVER = `${TIMEZONE_SELECT}-popover`;
