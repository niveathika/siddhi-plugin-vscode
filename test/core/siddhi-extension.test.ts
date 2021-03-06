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

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import { siddhiExtensionInstance } from '../../src/core/extension';
import { getSiddhiHome} from '../test-util';

// Siddhi tooling distribution will be copied to following location by maven
const testSiddhiHome = getSiddhiHome();

// Defines a Mocha test suite 
suite("Siddhi Extension Core Tests", function () {
    test("Test isValidSiddhiHome", function () {
        assert.equal(siddhiExtensionInstance.isValidSiddhiHome(testSiddhiHome), true);
        assert.equal(siddhiExtensionInstance.isValidSiddhiHome(__dirname), false);
    });
});
