'use strict';
/**
 * Copyright (c) 2019, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */

 /**
  * Provides logging capabilities into a output channel.
  */

import * as vscode from 'vscode';
const outputChannel = vscode.window.createOutputChannel("Siddhi");
const logLevelDebug: boolean = vscode.workspace.getConfiguration('siddhi').get('debugLog') === true;

function withNewLine(value: string) {
    if (!value.endsWith('\n')) {
        return value += '\n';
    }
    return value;
}

export function debug(value: string) : void {
    const output = withNewLine(value);
    if (logLevelDebug) {
        outputChannel.append(output);
    }
}

export function log(value: string) : void {
    const output = withNewLine(value);
    outputChannel.append(output);
}

export function getOutputChannel() {
    if (logLevelDebug) {
        return outputChannel;
    }
}
