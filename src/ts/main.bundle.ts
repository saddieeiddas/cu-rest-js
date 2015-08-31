/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/// <reference path="../tsd/tsd.d.ts" />

import * as library from './main';

// interface to allow us to bind library to window
interface WindowInterface extends Window {
    CuRestLibrary: any;
}

// declare window implements WindowInterface
declare var window: WindowInterface;

// bind library to window
window.CuRestLibrary = library;
