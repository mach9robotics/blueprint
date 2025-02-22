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

import { Hotkey, Hotkeys, HotkeysTarget } from "@mach9/blueprint-core";
import { Example, ExampleProps } from "@mach9/blueprint-docs-theme";

import { PianoKey } from "./audio";

export interface IHotkeyPianoState {
    keys: boolean[];
}

// eslint-disable-next-line @typescript-eslint/dot-notation
const AUDIO_CONTEXT = (window as any)["AudioContext"] != null ? new AudioContext() : null;

// eslint-disable-next-line deprecation/deprecation
@HotkeysTarget
export class HotkeyPiano extends React.PureComponent<ExampleProps, IHotkeyPianoState> {
    public state: IHotkeyPianoState = {
        // Use feature detection to disable example if we have to
        keys: Array.apply(null, Array(24)).map(() => false),
    };

    private pianoRef: HTMLElement | null = null;

    public render() {
        const { keys } = this.state;

        if (AUDIO_CONTEXT == null) {
            return (
                <Example options={false} {...this.props}>
                    <div tabIndex={0}>
                        Oops! This browser does not support the WebAudio API needed for this example.
                    </div>
                </Example>
            );
        }

        return (
            <Example options={false} {...this.props}>
                <div tabIndex={0} className="docs-hotkey-piano-example" ref={ref => (this.pianoRef = ref)}>
                    <div>
                        <PianoKey note="C5" hotkey="Q" pressed={keys[0]} context={AUDIO_CONTEXT} />
                        <PianoKey note="C#5" hotkey="2" pressed={keys[1]} context={AUDIO_CONTEXT} />
                        <PianoKey note="D5" hotkey="W" pressed={keys[2]} context={AUDIO_CONTEXT} />
                        <PianoKey note="D#5" hotkey="3" pressed={keys[3]} context={AUDIO_CONTEXT} />
                        <PianoKey note="E5" hotkey="E" pressed={keys[4]} context={AUDIO_CONTEXT} />
                        <PianoKey note="F5" hotkey="R" pressed={keys[5]} context={AUDIO_CONTEXT} />
                        <PianoKey note="F#5" hotkey="5" pressed={keys[6]} context={AUDIO_CONTEXT} />
                        <PianoKey note="G5" hotkey="T" pressed={keys[7]} context={AUDIO_CONTEXT} />
                        <PianoKey note="G#5" hotkey="6" pressed={keys[8]} context={AUDIO_CONTEXT} />
                        <PianoKey note="A5" hotkey="Y" pressed={keys[9]} context={AUDIO_CONTEXT} />
                        <PianoKey note="A#5" hotkey="7" pressed={keys[10]} context={AUDIO_CONTEXT} />
                        <PianoKey note="B5" hotkey="U" pressed={keys[11]} context={AUDIO_CONTEXT} />
                    </div>
                    <div>
                        <PianoKey note="C4" hotkey="Z" pressed={keys[12]} context={AUDIO_CONTEXT} />
                        <PianoKey note="C#4" hotkey="S" pressed={keys[13]} context={AUDIO_CONTEXT} />
                        <PianoKey note="D4" hotkey="X" pressed={keys[14]} context={AUDIO_CONTEXT} />
                        <PianoKey note="D#4" hotkey="D" pressed={keys[15]} context={AUDIO_CONTEXT} />
                        <PianoKey note="E4" hotkey="C" pressed={keys[16]} context={AUDIO_CONTEXT} />
                        <PianoKey note="F4" hotkey="V" pressed={keys[17]} context={AUDIO_CONTEXT} />
                        <PianoKey note="F#4" hotkey="G" pressed={keys[18]} context={AUDIO_CONTEXT} />
                        <PianoKey note="G4" hotkey="B" pressed={keys[19]} context={AUDIO_CONTEXT} />
                        <PianoKey note="G#4" hotkey="H" pressed={keys[20]} context={AUDIO_CONTEXT} />
                        <PianoKey note="A4" hotkey="N" pressed={keys[21]} context={AUDIO_CONTEXT} />
                        <PianoKey note="A#4" hotkey="J" pressed={keys[22]} context={AUDIO_CONTEXT} />
                        <PianoKey note="B4" hotkey="M" pressed={keys[23]} context={AUDIO_CONTEXT} />
                    </div>
                </div>
            </Example>
        );
    }

    public renderHotkeys() {
        return (
            <Hotkeys tabIndex={null}>
                <Hotkey global={true} label="Focus the piano" combo="shift + P" onKeyDown={this.focusPiano} />

                <Hotkey
                    group="Piano"
                    label="Play a C5"
                    combo="Q"
                    onKeyDown={this.setKey(0, true)}
                    onKeyUp={this.setKey(0, false)}
                />
                <Hotkey
                    group="Piano"
                    label="Play a C#5"
                    combo="2"
                    onKeyDown={this.setKey(1, true)}
                    onKeyUp={this.setKey(1, false)}
                />
                <Hotkey
                    group="Piano"
                    label="Play a D5"
                    combo="W"
                    onKeyDown={this.setKey(2, true)}
                    onKeyUp={this.setKey(2, false)}
                />
                <Hotkey
                    group="Piano"
                    label="Play a D#5"
                    combo="3"
                    onKeyDown={this.setKey(3, true)}
                    onKeyUp={this.setKey(3, false)}
                />
                <Hotkey
                    group="Piano"
                    label="Play a E5"
                    combo="E"
                    onKeyDown={this.setKey(4, true)}
                    onKeyUp={this.setKey(4, false)}
                />
                <Hotkey
                    group="Piano"
                    label="Play a F5"
                    combo="R"
                    onKeyDown={this.setKey(5, true)}
                    onKeyUp={this.setKey(5, false)}
                />
                <Hotkey
                    group="Piano"
                    label="Play a F#5"
                    combo="5"
                    onKeyDown={this.setKey(6, true)}
                    onKeyUp={this.setKey(6, false)}
                />
                <Hotkey
                    group="Piano"
                    label="Play a G5"
                    combo="T"
                    onKeyDown={this.setKey(7, true)}
                    onKeyUp={this.setKey(7, false)}
                />
                <Hotkey
                    group="Piano"
                    label="Play a G#5"
                    combo="6"
                    onKeyDown={this.setKey(8, true)}
                    onKeyUp={this.setKey(8, false)}
                />
                <Hotkey
                    group="Piano"
                    label="Play a A5"
                    combo="Y"
                    onKeyDown={this.setKey(9, true)}
                    onKeyUp={this.setKey(9, false)}
                />
                <Hotkey
                    group="Piano"
                    label="Play a A#5"
                    combo="7"
                    onKeyDown={this.setKey(10, true)}
                    onKeyUp={this.setKey(10, false)}
                />
                <Hotkey
                    group="Piano"
                    label="Play a B5"
                    combo="U"
                    onKeyDown={this.setKey(11, true)}
                    onKeyUp={this.setKey(11, false)}
                />

                <Hotkey
                    group="Piano"
                    label="Play a C4"
                    combo="Z"
                    onKeyDown={this.setKey(12, true)}
                    onKeyUp={this.setKey(12, false)}
                />
                <Hotkey
                    group="Piano"
                    label="Play a C#4"
                    combo="S"
                    onKeyDown={this.setKey(13, true)}
                    onKeyUp={this.setKey(13, false)}
                />
                <Hotkey
                    group="Piano"
                    label="Play a D4"
                    combo="X"
                    onKeyDown={this.setKey(14, true)}
                    onKeyUp={this.setKey(14, false)}
                />
                <Hotkey
                    group="Piano"
                    label="Play a D#4"
                    combo="D"
                    onKeyDown={this.setKey(15, true)}
                    onKeyUp={this.setKey(15, false)}
                />
                <Hotkey
                    group="Piano"
                    label="Play a E4"
                    combo="C"
                    onKeyDown={this.setKey(16, true)}
                    onKeyUp={this.setKey(16, false)}
                />
                <Hotkey
                    group="Piano"
                    label="Play a F4"
                    combo="V"
                    onKeyDown={this.setKey(17, true)}
                    onKeyUp={this.setKey(17, false)}
                />
                <Hotkey
                    group="Piano"
                    label="Play a F#4"
                    combo="G"
                    onKeyDown={this.setKey(18, true)}
                    onKeyUp={this.setKey(18, false)}
                />
                <Hotkey
                    group="Piano"
                    label="Play a G4"
                    combo="B"
                    onKeyDown={this.setKey(19, true)}
                    onKeyUp={this.setKey(19, false)}
                />
                <Hotkey
                    group="Piano"
                    label="Play a G#4"
                    combo="H"
                    onKeyDown={this.setKey(20, true)}
                    onKeyUp={this.setKey(20, false)}
                />
                <Hotkey
                    group="Piano"
                    label="Play a A4"
                    combo="N"
                    onKeyDown={this.setKey(21, true)}
                    onKeyUp={this.setKey(21, false)}
                />
                <Hotkey
                    group="Piano"
                    label="Play a A#4"
                    combo="J"
                    onKeyDown={this.setKey(22, true)}
                    onKeyUp={this.setKey(22, false)}
                />
                <Hotkey
                    group="Piano"
                    label="Play a B4"
                    combo="M"
                    onKeyDown={this.setKey(23, true)}
                    onKeyUp={this.setKey(23, false)}
                />
            </Hotkeys>
        );
    }

    private focusPiano = () => {
        if (this.pianoRef != null) {
            this.pianoRef.focus();
        }
    };

    private setKey = (index: number, keyState: boolean) => {
        return () => {
            const keys = this.state.keys.slice();
            keys[index] = keyState;
            this.setState({ keys });
        };
    };
}
