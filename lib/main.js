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

        // DOES NOT WORK
        // found on: http://belatucadros.net/cu/wiki/index.php?title=/api/abilities
        // static fetchAbility(id: AbilityID) {
        //     return CuRestLibrary.request<AbilityModel>({
        //         url: `${CuRestLibrary.regularUrl}api/abilities`,
        //         data: {id},
        //     });
        // }
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

        // DOES NOT WORK
        // found on: http://belatucadros.net/cu/wiki/index.php?title=/api/kills
        // static fetchKillsByFaction(faction: FactionName) {
        //     return CuRestLibrary.fetchKills({faction});
        // }
        // DOES NOT WORK
        // found on: http://belatucadros.net/cu/wiki/index.php?title=/api/kills
        // static fetchKillsByKiller(killer: CharacterID) {
        //     return CuRestLibrary.fetchKills({killer});
        // }
        // DOES NOT WORK
        // found on: http://belatucadros.net/cu/wiki/index.php?title=/api/kills
        // static fetchKillsByAttacker(attacker: CharacterID) {
        //     return CuRestLibrary.fetchKills({attacker});
        // }
        // DOES NOT WORK
        // found on: http://belatucadros.net/cu/wiki/index.php?title=/api/kills
        // static fetchKillsByVictim(victim: CharacterID) {
        //     return CuRestLibrary.fetchKills({victim});
        // }
        // DOES NOT WORK
        // found on: http://belatucadros.net/cu/wiki/index.php?title=/api/kills
        // static fetchKillsByDates(start: Iso8601, end?: Iso8601) {
        //     return CuRestLibrary.fetchKills({start, end});
        // }
    }, {
        key: 'fetchDefaultAbilities',
        value: function fetchDefaultAbilities() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL3RzL21haW4udHMiXSwibmFtZXMiOlsiQ3VSZXN0TGlicmFyeSIsIkN1UmVzdExpYnJhcnkucmVxdWVzdCIsIkN1UmVzdExpYnJhcnkubG9naW4iLCJDdVJlc3RMaWJyYXJ5LmZldGNoU2VydmVycyIsIkN1UmVzdExpYnJhcnkuZmV0Y2hCYW5uZXJzIiwiQ3VSZXN0TGlicmFyeS5mZXRjaFJhY2VzIiwiQ3VSZXN0TGlicmFyeS5mZXRjaEZhY3Rpb25zIiwiQ3VSZXN0TGlicmFyeS5mZXRjaEFyY2hldHlwZXMiLCJDdVJlc3RMaWJyYXJ5LmZldGNoQmFuZXMiLCJDdVJlc3RMaWJyYXJ5LmZldGNoQm9vbnMiLCJDdVJlc3RMaWJyYXJ5LmZldGNoQXR0cmlidXRlcyIsIkN1UmVzdExpYnJhcnkuZmV0Y2hBYmlsaXRpZXMiLCJDdVJlc3RMaWJyYXJ5LmZldGNoQnVpbGRpbmdCbG9ja3MiLCJDdVJlc3RMaWJyYXJ5LmZldGNoU2NoZWR1bGVkRXZlbnRzIiwiQ3VSZXN0TGlicmFyeS5mZXRjaFNwYXduUG9pbnRzIiwiQ3VSZXN0TGlicmFyeS5mZXRjaFBsYXllcnMiLCJDdVJlc3RMaWJyYXJ5LmZldGNoUGF0Y2hOb3RlcyIsIkN1UmVzdExpYnJhcnkuZmV0Y2hLaWxscyIsIkN1UmVzdExpYnJhcnkuZmV0Y2hEZWZhdWx0QWJpbGl0aWVzIiwiQ3VSZXN0TGlicmFyeS5mZXRjaENvbnRyb2xHYW1lIiwiQ3VSZXN0TGlicmFyeS5mZXRjaENoYXJhY3RlcnMiLCJDdVJlc3RMaWJyYXJ5LmNyZWF0ZUNoYXJhY3RlciIsIkN1UmVzdExpYnJhcnkuZGVsZXRlQ2hhcmFjdGVyIiwiQ3VSZXN0TGlicmFyeS5ob3N0IiwiQ3VSZXN0TGlicmFyeS5zZWN1cmVNYXN0ZXJVcmwiLCJDdVJlc3RMaWJyYXJ5Lm1hc3RlclVybCIsIkN1UmVzdExpYnJhcnkucmVndWxhclVybCIsIkN1UmVzdExpYnJhcnkuc2VjdXJlVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7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Q0EsU0FBU0EsbUJBQWdCQTtBQUMvQ0Esb0JBQUlBLEVBQUVBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEVBQUVBLFVBQVVBLEVBQUVBLFVBQVVBLEVBQUVBLEVBQUVBLEVBQUVBLFdBQVdBLEVBQUVBLENBQUNBO0FBQ2pFQSxvQkFBSUEsRUFBRUEsUUFBUUE7QUFDZEEsMkJBQVdBLEVBQUVBLGlDQUFpQ0E7YUFDakRBLENBQUNBLENBQUNBO1NBQ05BOzs7YUFyT3NCdEIsZUFBQUE7QUFDbkJ1QixtQkFBT0EsQUFBQ0EsT0FBT0EsS0FBS0EsS0FBS0EsV0FBV0EsSUFBSUEsS0FBS0EsQ0FBQ0EsVUFBVUEsR0FDbERBLEtBQUtBLENBQUNBLFVBQVVBLEdBQ2hCQSwrQkFBK0JBLENBQUNBO1NBQ3pDQTs7O2FBRWlDdkIsZUFBQUE7QUFDOUJ3QixtQkFBT0EseUNBQXlDQSxDQUFDQTtTQUNwREE7OzthQUUyQnhCLGVBQUFBO0FBQ3hCeUIsbUJBQU9BLDZDQUE2Q0EsQ0FBQ0E7U0FDeERBOzs7YUFFNEJ6QixlQUFBQTtBQUN6QjBCLCtCQUFpQkEsYUFBYUEsQ0FBQ0EsSUFBSUEsWUFBU0E7U0FDL0NBOzs7YUFFMkIxQixlQUFBQTtBQUN4QjJCLGdDQUFrQkEsYUFBYUEsQ0FBQ0EsSUFBSUEsWUFBU0E7U0FDaERBOzs7V0F0QkwsYUFBQTs7O3FCQW9QZSxhQUFhIiwiZmlsZSI6InRzL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiAqL1xuXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHNkL3RzZC5kLnRzXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL21haW4uZC50c1wiIC8+XG5cbmltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5JztcblxuY2xhc3MgQ3VSZXN0TGlicmFyeSB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgaG9zdCgpIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgY3VBUEkgIT09IFwidW5kZWZpbmVkXCIgJiYgY3VBUEkud2ViQVBJSG9zdCkgXG4gICAgICAgICAgICA/IGN1QVBJLndlYkFQSUhvc3QgXG4gICAgICAgICAgICA6ICdoYXRjaGVyeS5jYW1lbG90dW5jaGFpbmVkLmNvbSc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IHNlY3VyZU1hc3RlclVybCgpIHtcbiAgICAgICAgcmV0dXJuICdodHRwczovL2FwaS5jaXR5c3RhdGVlbnRlcnRhaW5tZW50LmNvbS8nO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGdldCBtYXN0ZXJVcmwoKSB7XG4gICAgICAgIHJldHVybiAnaHR0cDovL2FwaS5jaXR5c3RhdGVlbnRlcnRhaW5tZW50LmNvbTo4MDAxLyc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IHJlZ3VsYXJVcmwoKSB7XG4gICAgICAgIHJldHVybiBgaHR0cDovLyR7Q3VSZXN0TGlicmFyeS5ob3N0fTo4MDAwL2A7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IHNlY3VyZVVybCgpIHtcbiAgICAgICAgcmV0dXJuIGBodHRwczovLyR7Q3VSZXN0TGlicmFyeS5ob3N0fTo0NDQzL2A7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVxdWVzdDxUPihvcHRpb25zOiB7fXxzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiBhbnksIHJlamVjdDogYW55KSA9PiB7XG4gICAgICAgICAgICB2YXIgb3B0cyA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnR0VUJyxcbiAgICAgICAgICAgICAgICB1cmw6IGAke0N1UmVzdExpYnJhcnkucmVndWxhclVybH1gLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04JyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIG9wdHMudXJsICs9IG9wdGlvbnM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9wdHMgPSAkLmV4dGVuZChvcHRzLCBvcHRpb25zKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJC5hamF4KG9wdHMpXG4gICAgICAgICAgICAuZG9uZSgocmVzcG9uc2U6IFQpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmFpbCgoZXJyb3I6IFhNTEh0dHBSZXF1ZXN0KSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIExPR0lOIFxuICAgICAqL1xuICAgIHN0YXRpYyBsb2dpbihlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBDdVJlc3RMaWJyYXJ5LnJlcXVlc3Q8TG9naW5SZXNwb25zZT4oe1xuICAgICAgICAgICAgdXJsOiBgJHtDdVJlc3RMaWJyYXJ5LnNlY3VyZU1hc3RlclVybH1BY2NvdW50L0VtYWlsTG9naW5gLCBcbiAgICAgICAgICAgIGRhdGE6IHtlbWFpbCwgcGFzc3dvcmR9LCBcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIC8qXG4gICAgICogR0VORVJBTCBHQU1FLVdJREUgSU5GT1JNQVRJT05TIFxuICAgICAqL1xuXG4gICAgLypcbiAgICAgKiBSZXRyaWV2ZXMgb25saW5lIHNlcnZlcnMgZm9yIGEgcGFydGljdWxhciBjaGFubmVsXG4gICAgICovXG4gICAgc3RhdGljIGZldGNoU2VydmVycyhjaGFubmVsSUQ6IENoYW5uZWxJRCkge1xuICAgICAgICByZXR1cm4gQ3VSZXN0TGlicmFyeS5yZXF1ZXN0PFNlcnZlck1vZGVsW10+KHtcbiAgICAgICAgICAgIHVybDogYCR7Q3VSZXN0TGlicmFyeS5tYXN0ZXJVcmx9YXBpL3NlcnZlcnNgLCBcbiAgICAgICAgICAgIGRhdGE6IHsgY2hhbm5lbElEIH0gXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBmZXRjaEJhbm5lcnMoKSB7XG4gICAgICAgIHJldHVybiBDdVJlc3RMaWJyYXJ5LnJlcXVlc3Q8QmFubmVyTW9kZWxbXT4oJ2FwaS9iYW5uZXJzJyk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBTVEFUSUMgR0FNRSBJTkZPUk1BVElPTlMgXG4gICAgICovXG4gICAgc3RhdGljIGZldGNoUmFjZXMoKSB7XG4gICAgICAgIHJldHVybiBDdVJlc3RMaWJyYXJ5LnJlcXVlc3Q8UmFjZU1vZGVsW10+KCdhcGkvZ2FtZS9yYWNlcycpO1xuICAgIH1cblxuICAgIHN0YXRpYyBmZXRjaEZhY3Rpb25zKCkge1xuICAgICAgICByZXR1cm4gQ3VSZXN0TGlicmFyeS5yZXF1ZXN0PEZhY3Rpb25Nb2RlbFtdPignYXBpL2dhbWUvZmFjdGlvbnMnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZmV0Y2hBcmNoZXR5cGVzKCkge1xuICAgICAgICByZXR1cm4gQ3VSZXN0TGlicmFyeS5yZXF1ZXN0PEFyY2hldHlwZU1vZGVsW10+KCdhcGkvZ2FtZS9hcmNoZXR5cGVzJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZldGNoQmFuZXMoKSB7XG4gICAgICAgIHJldHVybiBDdVJlc3RMaWJyYXJ5LnJlcXVlc3Q8QmFuZU1vZGVsW10+KCdhcGkvZ2FtZS9iYW5lcycpO1xuICAgIH1cblxuICAgIHN0YXRpYyBmZXRjaEJvb25zKCkge1xuICAgICAgICByZXR1cm4gQ3VSZXN0TGlicmFyeS5yZXF1ZXN0PEJvb25Nb2RlbFtdPignYXBpL2dhbWUvYm9vbnMnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZmV0Y2hBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4gQ3VSZXN0TGlicmFyeS5yZXF1ZXN0PEF0dHJpYnV0ZU1vZGVsW10+KCdhcGkvZ2FtZS9hdHRyaWJ1dGVzJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZldGNoQWJpbGl0aWVzKCkge1xuICAgICAgICByZXR1cm4gQ3VSZXN0TGlicmFyeS5yZXF1ZXN0PEFiaWxpdHlNb2RlbFtdPignYXBpL2FiaWxpdGllcycpO1xuICAgIH1cbiAgICBcbiAgICAvLyBET0VTIE5PVCBXT1JLXG4gICAgLy8gZm91bmQgb246IGh0dHA6Ly9iZWxhdHVjYWRyb3MubmV0L2N1L3dpa2kvaW5kZXgucGhwP3RpdGxlPS9hcGkvYWJpbGl0aWVzXG4gICAgLy8gc3RhdGljIGZldGNoQWJpbGl0eShpZDogQWJpbGl0eUlEKSB7XG4gICAgLy8gICAgIHJldHVybiBDdVJlc3RMaWJyYXJ5LnJlcXVlc3Q8QWJpbGl0eU1vZGVsPih7XG4gICAgLy8gICAgICAgICB1cmw6IGAke0N1UmVzdExpYnJhcnkucmVndWxhclVybH1hcGkvYWJpbGl0aWVzYCxcbiAgICAvLyAgICAgICAgIGRhdGE6IHtpZH0sXG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cblxuICAgIHN0YXRpYyBmZXRjaEJ1aWxkaW5nQmxvY2tzKCkge1xuICAgICAgICByZXR1cm4gQ3VSZXN0TGlicmFyeS5yZXF1ZXN0PEJ1aWxkaW5nQmxvY2tNb2RlbFtdPignYXBpL2J1aWxkaW5nYmxvY2tzJyk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBTRVJWRVIgU1BFQ0lGSUMgSU5GT1JNQVRJT05TIFxuICAgICAqL1xuICAgIHN0YXRpYyBmZXRjaFNjaGVkdWxlZEV2ZW50cyh0eXBlPzogU2NoZWR1bGVkRXZlbnRUeXBlKSB7XG4gICAgICAgIHJldHVybiBDdVJlc3RMaWJyYXJ5LnJlcXVlc3Q8YW55W10+KHtcbiAgICAgICAgICAgIHVybDogYCR7Q3VSZXN0TGlicmFyeS5yZWd1bGFyVXJsfWFwaS9zY2hlZHVsZWRldmVudHNgLFxuICAgICAgICAgICAgZGF0YToge3R5cGV9LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZmV0Y2hTcGF3blBvaW50cygpIHtcbiAgICAgICAgcmV0dXJuIEN1UmVzdExpYnJhcnkucmVxdWVzdDxTcGF3blBvaW50TW9kZWxbXT4oJ2FwaS9nYW1lL3NwYXducG9pbnRzJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZldGNoUGxheWVycygpIHtcbiAgICAgICAgcmV0dXJuIEN1UmVzdExpYnJhcnkucmVxdWVzdDxQbGF5ZXJzQ291bnRNb2RlbD4oJ2FwaS9nYW1lL3BsYXllcnMnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZmV0Y2hQYXRjaE5vdGVzKCkge1xuICAgICAgICByZXR1cm4gQ3VSZXN0TGlicmFyeS5yZXF1ZXN0PFBhdGNoTm90ZU1vZGVsW10+KCdhcGkvcGF0Y2hub3RlcycpO1xuICAgIH1cblxuICAgIHN0YXRpYyBmZXRjaEtpbGxzKGRhdGE/OiB7fSkge1xuICAgICAgICByZXR1cm4gQ3VSZXN0TGlicmFyeS5yZXF1ZXN0PEtpbGxNb2RlbFtdPih7IFxuICAgICAgICAgICAgdXJsOiBgJHtDdVJlc3RMaWJyYXJ5LnJlZ3VsYXJVcmx9YXBpL2tpbGxzYCxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICAvLyBET0VTIE5PVCBXT1JLXG4gICAgLy8gZm91bmQgb246IGh0dHA6Ly9iZWxhdHVjYWRyb3MubmV0L2N1L3dpa2kvaW5kZXgucGhwP3RpdGxlPS9hcGkva2lsbHNcbiAgICAvLyBzdGF0aWMgZmV0Y2hLaWxsc0J5RmFjdGlvbihmYWN0aW9uOiBGYWN0aW9uTmFtZSkge1xuICAgIC8vICAgICByZXR1cm4gQ3VSZXN0TGlicmFyeS5mZXRjaEtpbGxzKHtmYWN0aW9ufSk7XG4gICAgLy8gfVxuICAgIFxuICAgIC8vIERPRVMgTk9UIFdPUktcbiAgICAvLyBmb3VuZCBvbjogaHR0cDovL2JlbGF0dWNhZHJvcy5uZXQvY3Uvd2lraS9pbmRleC5waHA/dGl0bGU9L2FwaS9raWxsc1xuICAgIC8vIHN0YXRpYyBmZXRjaEtpbGxzQnlLaWxsZXIoa2lsbGVyOiBDaGFyYWN0ZXJJRCkge1xuICAgIC8vICAgICByZXR1cm4gQ3VSZXN0TGlicmFyeS5mZXRjaEtpbGxzKHtraWxsZXJ9KTtcbiAgICAvLyB9XG4gICAgXG4gICAgLy8gRE9FUyBOT1QgV09SS1xuICAgIC8vIGZvdW5kIG9uOiBodHRwOi8vYmVsYXR1Y2Fkcm9zLm5ldC9jdS93aWtpL2luZGV4LnBocD90aXRsZT0vYXBpL2tpbGxzXG4gICAgLy8gc3RhdGljIGZldGNoS2lsbHNCeUF0dGFja2VyKGF0dGFja2VyOiBDaGFyYWN0ZXJJRCkge1xuICAgIC8vICAgICByZXR1cm4gQ3VSZXN0TGlicmFyeS5mZXRjaEtpbGxzKHthdHRhY2tlcn0pO1xuICAgIC8vIH1cblxuICAgIC8vIERPRVMgTk9UIFdPUktcbiAgICAvLyBmb3VuZCBvbjogaHR0cDovL2JlbGF0dWNhZHJvcy5uZXQvY3Uvd2lraS9pbmRleC5waHA/dGl0bGU9L2FwaS9raWxsc1xuICAgIC8vIHN0YXRpYyBmZXRjaEtpbGxzQnlWaWN0aW0odmljdGltOiBDaGFyYWN0ZXJJRCkge1xuICAgIC8vICAgICByZXR1cm4gQ3VSZXN0TGlicmFyeS5mZXRjaEtpbGxzKHt2aWN0aW19KTtcbiAgICAvLyB9XG4gICAgXG4gICAgLy8gRE9FUyBOT1QgV09SS1xuICAgIC8vIGZvdW5kIG9uOiBodHRwOi8vYmVsYXR1Y2Fkcm9zLm5ldC9jdS93aWtpL2luZGV4LnBocD90aXRsZT0vYXBpL2tpbGxzXG4gICAgLy8gc3RhdGljIGZldGNoS2lsbHNCeURhdGVzKHN0YXJ0OiBJc284NjAxLCBlbmQ/OiBJc284NjAxKSB7XG4gICAgLy8gICAgIHJldHVybiBDdVJlc3RMaWJyYXJ5LmZldGNoS2lsbHMoe3N0YXJ0LCBlbmR9KTtcbiAgICAvLyB9XG5cbiAgICBzdGF0aWMgZmV0Y2hEZWZhdWx0QWJpbGl0aWVzKCkge1xuICAgICAgICByZXR1cm4gQ3VSZXN0TGlicmFyeS5yZXF1ZXN0PERlZmF1bHRDcmFmdGVkQWJpbGl0eUxpc3Q+KCdhcGkvY3JhZnRlZGFiaWxpdGllcy9kZWZhdWx0cycpO1xuICAgIH1cblxuICAgIHN0YXRpYyBmZXRjaENvbnRyb2xHYW1lKCkge1xuICAgICAgICByZXR1cm4gQ3VSZXN0TGlicmFyeS5yZXF1ZXN0PEdhbWVTY29yZU1vZGVsW10+KCdhcGkvZ2FtZS9jb250cm9sZ2FtZScpO1xuICAgIH1cbiAgICBcbiAgICAvKlxuICAgICAqIExPR0dFRCBPUEVSQVRJT05TXG4gICAgICovXG4gICAgc3RhdGljIGZldGNoQ2hhcmFjdGVycyhsb2dpblRva2VuOiBMb2dpblRva2VuKSB7XG4gICAgICAgIHJldHVybiBDdVJlc3RMaWJyYXJ5LnJlcXVlc3Q8T3duQ2hhcmFjdGVyTW9kZWxbXT4oe1xuICAgICAgICAgICAgdXJsOiBgJHtDdVJlc3RMaWJyYXJ5LnNlY3VyZVVybH1hcGkvY2hhcmFjdGVyc2AsIFxuICAgICAgICAgICAgZGF0YTogeyBsb2dpblRva2VuIH0sIFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlQ2hhcmFjdGVyKFxuICAgICAgICBsb2dpblRva2VuOiBMb2dpblRva2VuLCBcbiAgICAgICAgbmFtZTogc3RyaW5nLCBcbiAgICAgICAgZmFjdGlvbjogRmFjdGlvbk5hbWUsXG4gICAgICAgIHJhY2U6IFJhY2VOYW1lLFxuICAgICAgICBnZW5kZXI6IEdlbmRlck5hbWUsXG4gICAgICAgIGFyY2hldHlwZTogQXJjaGV0eXBlTmFtZSxcbiAgICAgICAgYXR0cmlidXRlczogUHJpbWFyeUF0dHJpYnV0ZXNTdGF0c1VwcGVyY2FzZSxcbiAgICAgICAgYmFuZXM6IEFjdGl2ZUJhbmVzLCBcbiAgICAgICAgYm9vbnM6IEFjdGl2ZUJvb25zKSB7XG4gICAgICAgIHJldHVybiBDdVJlc3RMaWJyYXJ5LnJlcXVlc3Q8Q2hhcmFjdGVyQ3JlYXRpb25SZXNwb25zZVtdPih7XG4gICAgICAgICAgICAgdXJsOiBgJHtDdVJlc3RMaWJyYXJ5LnNlY3VyZVVybH1hcGkvY2hhcmFjdGVyc2AsXG4gICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGxvZ2luVG9rZW4sXG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLFxuICAgICAgICAgICAgICAgIGJhbmVzLFxuICAgICAgICAgICAgICAgIGJvb25zLFxuICAgICAgICAgICAgICAgIGZhY3Rpb24sXG4gICAgICAgICAgICAgICAgcmFjZSxcbiAgICAgICAgICAgICAgICBnZW5kZXIsXG4gICAgICAgICAgICAgICAgYXJjaGV0eXBlLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnLFxuICAgICAgICB9KTsgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyBkZWxldGVDaGFyYWN0ZXIobG9naW5Ub2tlbjogTG9naW5Ub2tlbiwgY2hhcmFjdGVySUQ6IENoYXJhY3RlcklEKSB7XG4gICAgICAgIHJldHVybiBDdVJlc3RMaWJyYXJ5LnJlcXVlc3Q8dm9pZD4oe1xuICAgICAgICAgICAgdXJsOiBgJHtDdVJlc3RMaWJyYXJ5LnNlY3VyZVVybH1hcGkvY2hhcmFjdGVyc2AsXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7IExvZ2luVG9rZW46IGxvZ2luVG9rZW4sIElEOiBjaGFyYWN0ZXJJRCB9KSxcbiAgICAgICAgICAgIHR5cGU6ICdERUxFVEUnLFxuICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04JyxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIC8vIERPRVMgTk9UIFdPUktcbiAgICAvLyBzdGF0aWMgZmV0Y2hDaGFyYWN0ZXJBYmlsaXRpZXMobG9naW5Ub2tlbjogTG9naW5Ub2tlbiwgY2hhcmFjdGVySUQ6IENoYXJhY3RlcklEKSB7XG4gICAgLy8gICAgIHJldHVybiBDdVJlc3RMaWJyYXJ5LnJlcXVlc3Q8dm9pZD4oe1xuICAgIC8vICAgICAgICAgdXJsOiBgJHtDdVJlc3RMaWJyYXJ5LnNlY3VyZVVybH1hcGkvY3JhZnRlZGFiaWxpdGllc2AsXG4gICAgLy8gICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7IExvZ2luVG9rZW46IGxvZ2luVG9rZW4sIElEOiBjaGFyYWN0ZXJJRCB9KSxcbiAgICAvLyAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAvLyAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VSZXN0TGlicmFyeTtcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=
