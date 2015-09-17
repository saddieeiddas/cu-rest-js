/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _jquery = require('jquery');

var $ = _interopRequireWildcard(_jquery);

var CuRestLibrary = (function () {
    function CuRestLibrary() {
        _classCallCheck(this, CuRestLibrary);
    }

    _createClass(CuRestLibrary, null, [{
        key: 'request',
        value: function request(options) {
            return new Promise(function (resolve, reject) {
                var opts = {
                    type: 'GET',
                    url: '' + CuRestLibrary.regularUrl,
                    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
                };
                if (typeof options == 'string') {
                    opts.url += options;
                } else {
                    opts = $.extend(opts, options);
                }
                $.ajax(opts).done(function (response) {
                    resolve(response);
                }).fail(function (error) {
                    reject(error);
                });
            });
        }

        /*
         * LOGIN
         */
    }, {
        key: 'login',
        value: function login(email, password) {
            return CuRestLibrary.request({
                url: CuRestLibrary.secureMasterUrl + 'Account/EmailLogin',
                data: { email: email, password: password },
                type: 'POST'
            });
        }

        /*
         * GENERAL GAME-WIDE INFORMATIONS
         */
        /*
         * Retrieves online servers for a particular channel
         */
    }, {
        key: 'fetchServers',
        value: function fetchServers(channelID) {
            return CuRestLibrary.request({
                url: CuRestLibrary.masterUrl + 'api/servers',
                data: { channelID: channelID }
            });
        }
    }, {
        key: 'fetchBanners',
        value: function fetchBanners() {
            return CuRestLibrary.request('api/banners');
        }

        /*
         * STATIC GAME INFORMATIONS
         */
    }, {
        key: 'fetchRaces',
        value: function fetchRaces() {
            return CuRestLibrary.request('api/game/races');
        }
    }, {
        key: 'fetchFactions',
        value: function fetchFactions() {
            return CuRestLibrary.request('api/game/factions');
        }
    }, {
        key: 'fetchArchetypes',
        value: function fetchArchetypes() {
            return CuRestLibrary.request('api/game/archetypes');
        }
    }, {
        key: 'fetchBanes',
        value: function fetchBanes() {
            return CuRestLibrary.request('api/game/banes');
        }
    }, {
        key: 'fetchBoons',
        value: function fetchBoons() {
            return CuRestLibrary.request('api/game/boons');
        }
    }, {
        key: 'fetchAttributes',
        value: function fetchAttributes() {
            return CuRestLibrary.request('api/game/attributes');
        }
    }, {
        key: 'fetchAbilities',
        value: function fetchAbilities() {
            return CuRestLibrary.request('api/abilities');
        }
    }, {
        key: 'fetchAbility',
        value: function fetchAbility(id) {
            return CuRestLibrary.request({
                url: CuRestLibrary.regularUrl + 'api/abilities',
                data: { id: id }
            });
        }
    }, {
        key: 'fetchBuildingBlocks',
        value: function fetchBuildingBlocks() {
            return CuRestLibrary.request('api/buildingblocks');
        }

        /*
         * SERVER SPECIFIC INFORMATIONS
         */
    }, {
        key: 'fetchScheduledEvents',
        value: function fetchScheduledEvents(type) {
            return CuRestLibrary.request({
                url: CuRestLibrary.regularUrl + 'api/scheduledevents',
                data: { type: type }
            });
        }
    }, {
        key: 'fetchSpawnPoints',
        value: function fetchSpawnPoints() {
            return CuRestLibrary.request('api/game/spawnpoints');
        }
    }, {
        key: 'fetchPlayers',
        value: function fetchPlayers() {
            return CuRestLibrary.request('api/game/players');
        }
    }, {
        key: 'fetchPatchNotes',
        value: function fetchPatchNotes() {
            return CuRestLibrary.request('api/patchnotes');
        }
    }, {
        key: 'fetchKills',
        value: function fetchKills(data) {
            return CuRestLibrary.request({
                url: CuRestLibrary.regularUrl + 'api/kills',
                data: data
            });
        }
    }, {
        key: 'fetchKillsByFaction',
        value: function fetchKillsByFaction(faction) {
            return CuRestLibrary.fetchKills({ faction: faction });
        }
    }, {
        key: 'fetchKillsByKiller',
        value: function fetchKillsByKiller(killer) {
            return CuRestLibrary.fetchKills({ killer: killer });
        }
    }, {
        key: 'fetchKillsByAttacker',
        value: function fetchKillsByAttacker(attacker) {
            return CuRestLibrary.fetchKills({ attacker: attacker });
        }
    }, {
        key: 'fetchKillsByVictim',
        value: function fetchKillsByVictim(victim) {
            return CuRestLibrary.fetchKills({ victim: victim });
        }
    }, {
        key: 'fetchKillsByDates',
        value: function fetchKillsByDates(start, end) {
            return CuRestLibrary.fetchKills({ start: start, end: end });
        }
    }, {
        key: 'fetchCraftedAbilities',
        value: function fetchCraftedAbilities() {
            return CuRestLibrary.request('api/craftedabilities/defaults');
        }
    }, {
        key: 'fetchControlGame',
        value: function fetchControlGame() {
            return CuRestLibrary.request('api/game/controlgame');
        }

        /*
         * LOGGED OPERATIONS
         */
    }, {
        key: 'fetchCharacters',
        value: function fetchCharacters(loginToken) {
            return CuRestLibrary.request({
                url: CuRestLibrary.secureUrl + 'api/characters',
                data: { loginToken: loginToken }
            });
        }
    }, {
        key: 'createCharacter',
        value: function createCharacter(loginToken, name, faction, race, gender, archetype, attributes, banes, boons) {
            return CuRestLibrary.request({
                url: CuRestLibrary.secureUrl + 'api/characters',
                data: JSON.stringify({
                    loginToken: loginToken,
                    name: name,
                    attributes: attributes,
                    banes: banes,
                    boons: boons,
                    faction: faction,
                    race: race,
                    gender: gender,
                    archetype: archetype
                }),
                type: 'POST',
                contentType: 'application/json; charset=utf-8'
            });
        }
    }, {
        key: 'deleteCharacter',
        value: function deleteCharacter(loginToken, characterID) {
            return CuRestLibrary.request({
                url: CuRestLibrary.secureUrl + 'api/characters',
                data: JSON.stringify({ LoginToken: loginToken, ID: characterID }),
                type: 'DELETE',
                contentType: 'application/json; charset=utf-8'
            });
        }
    }, {
        key: 'host',
        get: function get() {
            return typeof cuAPI !== "undefined" && cuAPI.webAPIHost ? cuAPI.webAPIHost : 'hatchery.camelotunchained.com';
        }
    }, {
        key: 'secureMasterUrl',
        get: function get() {
            return 'https://api.citystateentertainment.com/';
        }
    }, {
        key: 'masterUrl',
        get: function get() {
            return 'http://api.citystateentertainment.com:8001/';
        }
    }, {
        key: 'regularUrl',
        get: function get() {
            return 'http://' + CuRestLibrary.host + ':8000/';
        }
    }, {
        key: 'secureUrl',
        get: function get() {
            return 'https://' + CuRestLibrary.host + ':4443/';
        }
    }]);

    return CuRestLibrary;
})();

exports['default'] = CuRestLibrary;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL3RzL21haW4udHMiXSwibmFtZXMiOlsiQ3VSZXN0TGlicmFyeSIsIkN1UmVzdExpYnJhcnkucmVxdWVzdCIsIkN1UmVzdExpYnJhcnkubG9naW4iLCJDdVJlc3RMaWJyYXJ5LmZldGNoU2VydmVycyIsIkN1UmVzdExpYnJhcnkuZmV0Y2hCYW5uZXJzIiwiQ3VSZXN0TGlicmFyeS5mZXRjaFJhY2VzIiwiQ3VSZXN0TGlicmFyeS5mZXRjaEZhY3Rpb25zIiwiQ3VSZXN0TGlicmFyeS5mZXRjaEFyY2hldHlwZXMiLCJDdVJlc3RMaWJyYXJ5LmZldGNoQmFuZXMiLCJDdVJlc3RMaWJyYXJ5LmZldGNoQm9vbnMiLCJDdVJlc3RMaWJyYXJ5LmZldGNoQXR0cmlidXRlcyIsIkN1UmVzdExpYnJhcnkuZmV0Y2hBYmlsaXRpZXMiLCJDdVJlc3RMaWJyYXJ5LmZldGNoQWJpbGl0eSIsIkN1UmVzdExpYnJhcnkuZmV0Y2hCdWlsZGluZ0Jsb2NrcyIsIkN1UmVzdExpYnJhcnkuZmV0Y2hTY2hlZHVsZWRFdmVudHMiLCJDdVJlc3RMaWJyYXJ5LmZldGNoU3Bhd25Qb2ludHMiLCJDdVJlc3RMaWJyYXJ5LmZldGNoUGxheWVycyIsIkN1UmVzdExpYnJhcnkuZmV0Y2hQYXRjaE5vdGVzIiwiQ3VSZXN0TGlicmFyeS5mZXRjaEtpbGxzIiwiQ3VSZXN0TGlicmFyeS5mZXRjaEtpbGxzQnlGYWN0aW9uIiwiQ3VSZXN0TGlicmFyeS5mZXRjaEtpbGxzQnlLaWxsZXIiLCJDdVJlc3RMaWJyYXJ5LmZldGNoS2lsbHNCeUF0dGFja2VyIiwiQ3VSZXN0TGlicmFyeS5mZXRjaEtpbGxzQnlWaWN0aW0iLCJDdVJlc3RMaWJyYXJ5LmZldGNoS2lsbHNCeURhdGVzIiwiQ3VSZXN0TGlicmFyeS5mZXRjaENyYWZ0ZWRBYmlsaXRpZXMiLCJDdVJlc3RMaWJyYXJ5LmZldGNoQ29udHJvbEdhbWUiLCJDdVJlc3RMaWJyYXJ5LmZldGNoQ2hhcmFjdGVycyIsIkN1UmVzdExpYnJhcnkuY3JlYXRlQ2hhcmFjdGVyIiwiQ3VSZXN0TGlicmFyeS5kZWxldGVDaGFyYWN0ZXIiLCJDdVJlc3RMaWJyYXJ5Lmhvc3QiLCJDdVJlc3RMaWJyYXJ5LnNlY3VyZU1hc3RlclVybCIsIkN1UmVzdExpYnJhcnkubWFzdGVyVXJsIiwiQ3VSZXN0TGlicmFyeS5yZWd1bGFyVXJsIiwiQ3VSZXN0TGlicmFyeS5zZWN1cmVVcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O3NCQVNtQixRQUFROztJQUFmLENBQUM7O0lBRWIsYUFBQTthQUFBLGFBQUE7OEJBQUEsYUFBQTs7O2lCQUFBLGFBQUE7O2VBd0IwQkEsaUJBQUlBLE9BQWtCQSxFQUFBQTtBQUN4Q0MsbUJBQU9BLElBQUlBLE9BQU9BLENBQUNBLFVBQUNBLE9BQVlBLEVBQUVBLE1BQVdBLEVBQUFBO0FBQ3pDQSxvQkFBSUEsSUFBSUEsR0FBR0E7QUFDUEEsd0JBQUlBLEVBQUVBLEtBQUtBO0FBQ1hBLHVCQUFHQSxPQUFLQSxhQUFhQSxDQUFDQSxVQUFVQSxBQUFFQTtBQUNsQ0EsK0JBQVdBLEVBQUVBLGtEQUFrREE7aUJBQ2xFQSxDQUFBQTtBQUNEQSxvQkFBSUEsT0FBT0EsT0FBT0EsSUFBSUEsUUFBUUEsRUFBRUE7QUFDNUJBLHdCQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxPQUFPQSxDQUFDQTtpQkFDdkJBLE1BQU1BO0FBQ0hBLHdCQUFJQSxHQUFHQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFBQTtpQkFDakNBO0FBQ0RBLGlCQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUNYQSxJQUFJQSxDQUFDQSxVQUFDQSxRQUFXQSxFQUFBQTtBQUNkQSwyQkFBT0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7aUJBQ3JCQSxDQUFDQSxDQUNEQSxJQUFJQSxDQUFDQSxVQUFDQSxLQUFxQkEsRUFBQUE7QUFDeEJBLDBCQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtpQkFDakJBLENB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LFdBQXdCQSxFQUFBQTtBQUNuRTRCLG1CQUFPQSxhQUFhQSxDQUFDQSxPQUFPQSxDQUFPQTtBQUMvQkEsbUJBQUdBLEVBQUtBLGFBQWFBLENBQUNBLFNBQVNBLG1CQUFnQkE7QUFDL0NBLG9CQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxFQUFFQSxVQUFVQSxFQUFFQSxVQUFVQSxFQUFFQSxFQUFFQSxFQUFFQSxXQUFXQSxFQUFFQSxDQUFDQTtBQUNqRUEsb0JBQUlBLEVBQUVBLFFBQVFBO0FBQ2RBLDJCQUFXQSxFQUFFQSxpQ0FBaUNBO2FBQ2pEQSxDQUFDQSxDQUFDQTtTQUNOQTs7O2FBek5zQjVCLGVBQUFBO0FBQ25CNkIsbUJBQU9BLEFBQUNBLE9BQU9BLEtBQUtBLEtBQUtBLFdBQVdBLElBQUlBLEtBQUtBLENBQUNBLFVBQVVBLEdBQ2xEQSxLQUFLQSxDQUFDQSxVQUFVQSxHQUNoQkEsK0JBQStCQSxDQUFDQTtTQUN6Q0E7OzthQUVpQzdCLGVBQUFBO0FBQzlCOEIsbUJBQU9BLHlDQUF5Q0EsQ0FBQ0E7U0FDcERBOzs7YUFFMkI5QixlQUFBQTtBQUN4QitCLG1CQUFPQSw2Q0FBNkNBLENBQUNBO1NBQ3hEQTs7O2FBRTRCL0IsZUFBQUE7QUFDekJnQywrQkFBaUJBLGFBQWFBLENBQUNBLElBQUlBLFlBQVNBO1NBQy9DQTs7O2FBRTJCaEMsZUFBQUE7QUFDeEJpQyxnQ0FBa0JBLGFBQWFBLENBQUNBLElBQUlBLFlBQVNBO1NBQ2hEQTs7O1dBdEJMLGFBQUE7OztxQkF1T2UsYUFBYSIsImZpbGUiOiJ0cy9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4gKi9cblxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3RzZC90c2QuZC50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9tYWluLmQudHNcIiAvPlxuXG5pbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSc7XG5cbmNsYXNzIEN1UmVzdExpYnJhcnkge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IGhvc3QoKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIGN1QVBJICE9PSBcInVuZGVmaW5lZFwiICYmIGN1QVBJLndlYkFQSUhvc3QpIFxuICAgICAgICAgICAgPyBjdUFQSS53ZWJBUElIb3N0IFxuICAgICAgICAgICAgOiAnaGF0Y2hlcnkuY2FtZWxvdHVuY2hhaW5lZC5jb20nO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGdldCBzZWN1cmVNYXN0ZXJVcmwoKSB7XG4gICAgICAgIHJldHVybiAnaHR0cHM6Ly9hcGkuY2l0eXN0YXRlZW50ZXJ0YWlubWVudC5jb20vJztcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgbWFzdGVyVXJsKCkge1xuICAgICAgICByZXR1cm4gJ2h0dHA6Ly9hcGkuY2l0eXN0YXRlZW50ZXJ0YWlubWVudC5jb206ODAwMS8nO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGdldCByZWd1bGFyVXJsKCkge1xuICAgICAgICByZXR1cm4gYGh0dHA6Ly8ke0N1UmVzdExpYnJhcnkuaG9zdH06ODAwMC9gO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGdldCBzZWN1cmVVcmwoKSB7XG4gICAgICAgIHJldHVybiBgaHR0cHM6Ly8ke0N1UmVzdExpYnJhcnkuaG9zdH06NDQ0My9gO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIHJlcXVlc3Q8VD4ob3B0aW9uczoge318c3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTogYW55LCByZWplY3Q6IGFueSkgPT4ge1xuICAgICAgICAgICAgdmFyIG9wdHMgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICAgICAgICAgICAgdXJsOiBgJHtDdVJlc3RMaWJyYXJ5LnJlZ3VsYXJVcmx9YCxcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOCcsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBvcHRzLnVybCArPSBvcHRpb25zO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvcHRzID0gJC5leHRlbmQob3B0cywgb3B0aW9ucylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQuYWpheChvcHRzKVxuICAgICAgICAgICAgLmRvbmUoKHJlc3BvbnNlOiBUKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZhaWwoKGVycm9yOiBYTUxIdHRwUmVxdWVzdCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBMT0dJTiBcbiAgICAgKi9cbiAgICBzdGF0aWMgbG9naW4oZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gQ3VSZXN0TGlicmFyeS5yZXF1ZXN0PExvZ2luUmVzcG9uc2U+KHtcbiAgICAgICAgICAgIHVybDogYCR7Q3VSZXN0TGlicmFyeS5zZWN1cmVNYXN0ZXJVcmx9QWNjb3VudC9FbWFpbExvZ2luYCwgXG4gICAgICAgICAgICBkYXRhOiB7ZW1haWwsIHBhc3N3b3JkfSwgXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICAvKlxuICAgICAqIEdFTkVSQUwgR0FNRS1XSURFIElORk9STUFUSU9OUyBcbiAgICAgKi9cblxuICAgIC8qXG4gICAgICogUmV0cmlldmVzIG9ubGluZSBzZXJ2ZXJzIGZvciBhIHBhcnRpY3VsYXIgY2hhbm5lbFxuICAgICAqL1xuICAgIHN0YXRpYyBmZXRjaFNlcnZlcnMoY2hhbm5lbElEOiBDaGFubmVsSUQpIHtcbiAgICAgICAgcmV0dXJuIEN1UmVzdExpYnJhcnkucmVxdWVzdDxTZXJ2ZXJNb2RlbFtdPih7XG4gICAgICAgICAgICB1cmw6IGAke0N1UmVzdExpYnJhcnkubWFzdGVyVXJsfWFwaS9zZXJ2ZXJzYCwgXG4gICAgICAgICAgICBkYXRhOiB7IGNoYW5uZWxJRCB9IFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZmV0Y2hCYW5uZXJzKCkge1xuICAgICAgICByZXR1cm4gQ3VSZXN0TGlicmFyeS5yZXF1ZXN0PEJhbm5lck1vZGVsW10+KCdhcGkvYmFubmVycycpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogU1RBVElDIEdBTUUgSU5GT1JNQVRJT05TIFxuICAgICAqL1xuICAgIHN0YXRpYyBmZXRjaFJhY2VzKCkge1xuICAgICAgICByZXR1cm4gQ3VSZXN0TGlicmFyeS5yZXF1ZXN0PFJhY2VNb2RlbFtdPignYXBpL2dhbWUvcmFjZXMnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZmV0Y2hGYWN0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIEN1UmVzdExpYnJhcnkucmVxdWVzdDxGYWN0aW9uTW9kZWxbXT4oJ2FwaS9nYW1lL2ZhY3Rpb25zJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZldGNoQXJjaGV0eXBlcygpIHtcbiAgICAgICAgcmV0dXJuIEN1UmVzdExpYnJhcnkucmVxdWVzdDxBcmNoZXR5cGVNb2RlbFtdPignYXBpL2dhbWUvYXJjaGV0eXBlcycpO1xuICAgIH1cblxuICAgIHN0YXRpYyBmZXRjaEJhbmVzKCkge1xuICAgICAgICByZXR1cm4gQ3VSZXN0TGlicmFyeS5yZXF1ZXN0PEJhbmVNb2RlbFtdPignYXBpL2dhbWUvYmFuZXMnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZmV0Y2hCb29ucygpIHtcbiAgICAgICAgcmV0dXJuIEN1UmVzdExpYnJhcnkucmVxdWVzdDxCb29uTW9kZWxbXT4oJ2FwaS9nYW1lL2Jvb25zJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZldGNoQXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIEN1UmVzdExpYnJhcnkucmVxdWVzdDxBdHRyaWJ1dGVNb2RlbFtdPignYXBpL2dhbWUvYXR0cmlidXRlcycpO1xuICAgIH1cblxuICAgIHN0YXRpYyBmZXRjaEFiaWxpdGllcygpIHtcbiAgICAgICAgcmV0dXJuIEN1UmVzdExpYnJhcnkucmVxdWVzdDxBYmlsaXR5TW9kZWxbXT4oJ2FwaS9hYmlsaXRpZXMnKTtcbiAgICB9XG4gICAgXG4gICAgc3RhdGljIGZldGNoQWJpbGl0eShpZDogQWJpbGl0eUlEKSB7XG4gICAgICAgIHJldHVybiBDdVJlc3RMaWJyYXJ5LnJlcXVlc3Q8QWJpbGl0eU1vZGVsPih7XG4gICAgICAgICAgICB1cmw6IGAke0N1UmVzdExpYnJhcnkucmVndWxhclVybH1hcGkvYWJpbGl0aWVzYCxcbiAgICAgICAgICAgIGRhdGE6IHtpZH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBmZXRjaEJ1aWxkaW5nQmxvY2tzKCkge1xuICAgICAgICByZXR1cm4gQ3VSZXN0TGlicmFyeS5yZXF1ZXN0PEJ1aWxkaW5nQmxvY2tNb2RlbFtdPignYXBpL2J1aWxkaW5nYmxvY2tzJyk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBTRVJWRVIgU1BFQ0lGSUMgSU5GT1JNQVRJT05TIFxuICAgICAqL1xuICAgIHN0YXRpYyBmZXRjaFNjaGVkdWxlZEV2ZW50cyh0eXBlPzogU2NoZWR1bGVkRXZlbnRUeXBlKSB7XG4gICAgICAgIHJldHVybiBDdVJlc3RMaWJyYXJ5LnJlcXVlc3Q8YW55W10+KHtcbiAgICAgICAgICAgIHVybDogYCR7Q3VSZXN0TGlicmFyeS5yZWd1bGFyVXJsfWFwaS9zY2hlZHVsZWRldmVudHNgLFxuICAgICAgICAgICAgZGF0YToge3R5cGV9LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZmV0Y2hTcGF3blBvaW50cygpIHtcbiAgICAgICAgcmV0dXJuIEN1UmVzdExpYnJhcnkucmVxdWVzdDxTcGF3blBvaW50TW9kZWxbXT4oJ2FwaS9nYW1lL3NwYXducG9pbnRzJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZldGNoUGxheWVycygpIHtcbiAgICAgICAgcmV0dXJuIEN1UmVzdExpYnJhcnkucmVxdWVzdDxQbGF5ZXJzQ291bnRNb2RlbFtdPignYXBpL2dhbWUvcGxheWVycycpO1xuICAgIH1cblxuICAgIHN0YXRpYyBmZXRjaFBhdGNoTm90ZXMoKSB7XG4gICAgICAgIHJldHVybiBDdVJlc3RMaWJyYXJ5LnJlcXVlc3Q8UGF0Y2hOb3RlTW9kZWxbXT4oJ2FwaS9wYXRjaG5vdGVzJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZldGNoS2lsbHMoZGF0YT86IHt9KSB7XG4gICAgICAgIHJldHVybiBDdVJlc3RMaWJyYXJ5LnJlcXVlc3Q8S2lsbE1vZGVsW10+KHsgXG4gICAgICAgICAgICB1cmw6IGAke0N1UmVzdExpYnJhcnkucmVndWxhclVybH1hcGkva2lsbHNgLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZldGNoS2lsbHNCeUZhY3Rpb24oZmFjdGlvbjogRmFjdGlvbk5hbWUpIHtcbiAgICAgICAgcmV0dXJuIEN1UmVzdExpYnJhcnkuZmV0Y2hLaWxscyh7ZmFjdGlvbn0pO1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgZmV0Y2hLaWxsc0J5S2lsbGVyKGtpbGxlcjogQ2hhcmFjdGVySUQpIHtcbiAgICAgICAgcmV0dXJuIEN1UmVzdExpYnJhcnkuZmV0Y2hLaWxscyh7a2lsbGVyfSk7XG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyBmZXRjaEtpbGxzQnlBdHRhY2tlcihhdHRhY2tlcjogQ2hhcmFjdGVySUQpIHtcbiAgICAgICAgcmV0dXJuIEN1UmVzdExpYnJhcnkuZmV0Y2hLaWxscyh7YXR0YWNrZXJ9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZmV0Y2hLaWxsc0J5VmljdGltKHZpY3RpbTogQ2hhcmFjdGVySUQpIHtcbiAgICAgICAgcmV0dXJuIEN1UmVzdExpYnJhcnkuZmV0Y2hLaWxscyh7dmljdGltfSk7XG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyBmZXRjaEtpbGxzQnlEYXRlcyhzdGFydDogSXNvODYwMSwgZW5kPzogSXNvODYwMSkge1xuICAgICAgICByZXR1cm4gQ3VSZXN0TGlicmFyeS5mZXRjaEtpbGxzKHtzdGFydCwgZW5kfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZldGNoQ3JhZnRlZEFiaWxpdGllcygpIHtcbiAgICAgICAgcmV0dXJuIEN1UmVzdExpYnJhcnkucmVxdWVzdDxEZWZhdWx0Q3JhZnRlZEFiaWxpdHlMaXN0PignYXBpL2NyYWZ0ZWRhYmlsaXRpZXMvZGVmYXVsdHMnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZmV0Y2hDb250cm9sR2FtZSgpIHtcbiAgICAgICAgcmV0dXJuIEN1UmVzdExpYnJhcnkucmVxdWVzdDxHYW1lU2NvcmVNb2RlbFtdPignYXBpL2dhbWUvY29udHJvbGdhbWUnKTtcbiAgICB9XG4gICAgXG4gICAgLypcbiAgICAgKiBMT0dHRUQgT1BFUkFUSU9OU1xuICAgICAqL1xuICAgIHN0YXRpYyBmZXRjaENoYXJhY3RlcnMobG9naW5Ub2tlbjogTG9naW5Ub2tlbikge1xuICAgICAgICByZXR1cm4gQ3VSZXN0TGlicmFyeS5yZXF1ZXN0PE93bkNoYXJhY3Rlck1vZGVsW10+KHtcbiAgICAgICAgICAgIHVybDogYCR7Q3VSZXN0TGlicmFyeS5zZWN1cmVVcmx9YXBpL2NoYXJhY3RlcnNgLCBcbiAgICAgICAgICAgIGRhdGE6IHsgbG9naW5Ub2tlbiB9LCBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUNoYXJhY3RlcihcbiAgICAgICAgbG9naW5Ub2tlbjogTG9naW5Ub2tlbiwgXG4gICAgICAgIG5hbWU6IHN0cmluZywgXG4gICAgICAgIGZhY3Rpb246IEZhY3Rpb25OYW1lLFxuICAgICAgICByYWNlOiBSYWNlTmFtZSxcbiAgICAgICAgZ2VuZGVyOiBHZW5kZXJOYW1lLFxuICAgICAgICBhcmNoZXR5cGU6IEFyY2hldHlwZU5hbWUsXG4gICAgICAgIGF0dHJpYnV0ZXM6IFByaW1hcnlBdHRyaWJ1dGVzU3RhdHNVcHBlcmNhc2UsXG4gICAgICAgIGJhbmVzOiBBY3RpdmVCYW5lcywgXG4gICAgICAgIGJvb25zOiBBY3RpdmVCb29ucykge1xuICAgICAgICByZXR1cm4gQ3VSZXN0TGlicmFyeS5yZXF1ZXN0PENoYXJhY3RlckNyZWF0aW9uUmVzcG9uc2VbXT4oe1xuICAgICAgICAgICAgIHVybDogYCR7Q3VSZXN0TGlicmFyeS5zZWN1cmVVcmx9YXBpL2NoYXJhY3RlcnNgLFxuICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBsb2dpblRva2VuLFxuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcyxcbiAgICAgICAgICAgICAgICBiYW5lcyxcbiAgICAgICAgICAgICAgICBib29ucyxcbiAgICAgICAgICAgICAgICBmYWN0aW9uLFxuICAgICAgICAgICAgICAgIHJhY2UsXG4gICAgICAgICAgICAgICAgZ2VuZGVyLFxuICAgICAgICAgICAgICAgIGFyY2hldHlwZSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04JyxcbiAgICAgICAgfSk7ICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgZGVsZXRlQ2hhcmFjdGVyKGxvZ2luVG9rZW46IExvZ2luVG9rZW4sIGNoYXJhY3RlcklEOiBDaGFyYWN0ZXJJRCkge1xuICAgICAgICByZXR1cm4gQ3VSZXN0TGlicmFyeS5yZXF1ZXN0PHZvaWQ+KHtcbiAgICAgICAgICAgIHVybDogYCR7Q3VSZXN0TGlicmFyeS5zZWN1cmVVcmx9YXBpL2NoYXJhY3RlcnNgLFxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoeyBMb2dpblRva2VuOiBsb2dpblRva2VuLCBJRDogY2hhcmFjdGVySUQgfSksXG4gICAgICAgICAgICB0eXBlOiAnREVMRVRFJyxcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICAvLyBzdGF0aWMgZmV0Y2hDaGFyYWN0ZXJBYmlsaXRpZXMobG9naW5Ub2tlbjogTG9naW5Ub2tlbiwgY2hhcmFjdGVySUQ6IENoYXJhY3RlcklEKSB7XG4gICAgLy8gICAgIHJldHVybiBDdVJlc3RMaWJyYXJ5LnJlcXVlc3Q8dm9pZD4oe1xuICAgIC8vICAgICAgICAgdXJsOiBgJHtDdVJlc3RMaWJyYXJ5LnNlY3VyZVVybH1hcGkvY3JhZnRlZGFiaWxpdGllc2AsXG4gICAgLy8gICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7IExvZ2luVG9rZW46IGxvZ2luVG9rZW4sIElEOiBjaGFyYWN0ZXJJRCB9KSxcbiAgICAvLyAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAvLyAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VSZXN0TGlicmFyeTtcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
