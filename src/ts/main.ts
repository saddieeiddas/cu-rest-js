/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/// <reference path="../tsd/tsd.d.ts" />

import * as $ from 'jquery';

class CuRestLibrary {
    private getSecureApiUrl(action: string) {
        var host = (typeof cuAPI !== "undefined" && cuAPI.webAPIHost) ? cuAPI.webAPIHost : 'hatchery.camelotunchained.com';
        var isLocalhost = host === 'localhost';
        var protocol = isLocalhost ? 'http' : 'https';
        var port = isLocalhost ? '8000' : '4443';
        return protocol + '://' + host + ':' + port + '/' + action;
    }
    
    login(email: string, password: string) {
        return new Promise((resolve: any, reject: any) => {
            $.ajax({
                type: "POST",
                url: 'https://api.citystateentertainment.com/Account/EmailLogin',
                data: {
                    email,
                    password,
                },
                dataType: 'json'
            })
            .done((loginResponse) => {
                resolve(loginResponse);
            })
            .fail((error: XMLHttpRequest) => {
                reject(error);
            });
        });
    }
    
    fetchCharacters(loginToken: LoginToken) {
        return new Promise((resolve: any, reject: any) => {
            $.ajax({
                type: "GET",
                url: this.getSecureApiUrl('api/characters'),
                data: {
                    loginToken,
                },
                dataType: 'json'
            })
            .done((characters: CharacterDescription[]) => {
                resolve(characters);
            })
            .fail((error: XMLHttpRequest) => {
                reject(error);
            });
        });
    }
    
    fetchAbilities(characterID: CharacterID, loginToken: LoginToken) {
        return new Promise((resolve: any, reject: any) => {
            $.ajax({
                type: "GET",
                url: this.getSecureApiUrl('api/craftedabilities'),
                data: {
                    characterID,
                    loginToken,
                },
                dataType: 'json'
            })
            .done((abilities) => {
                resolve(abilities);
            })
            .fail((error) => {
                reject(error);
            });
        });
    }
}

export default CuRestLibrary;
