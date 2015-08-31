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

    _createClass(CuRestLibrary, [{
        key: 'getSecureApiUrl',
        value: function getSecureApiUrl(action) {
            var host = typeof cuAPI !== "undefined" && cuAPI.webAPIHost ? cuAPI.webAPIHost : 'hatchery.camelotunchained.com';
            var isLocalhost = host === 'localhost';
            var protocol = isLocalhost ? 'http' : 'https';
            var port = isLocalhost ? '8000' : '4443';
            return protocol + '://' + host + ':' + port + '/' + action;
        }
    }, {
        key: 'login',
        value: function login(email, password) {
            return new Promise(function (resolve, reject) {
                $.ajax({
                    type: "POST",
                    url: 'https://api.citystateentertainment.com/Account/EmailLogin',
                    data: {
                        email: email,
                        password: password
                    },
                    dataType: 'json'
                }).done(function (loginResponse) {
                    resolve(loginResponse);
                }).fail(function (error) {
                    reject(error);
                });
            });
        }
    }, {
        key: 'fetchCharacters',
        value: function fetchCharacters(loginToken) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                $.ajax({
                    type: "GET",
                    url: _this.getSecureApiUrl('api/characters'),
                    data: {
                        loginToken: loginToken
                    },
                    dataType: 'json'
                }).done(function (characters) {
                    resolve(characters);
                }).fail(function (error) {
                    reject(error);
                });
            });
        }
    }, {
        key: 'fetchAbilities',
        value: function fetchAbilities(characterID, loginToken) {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
                $.ajax({
                    type: "GET",
                    url: _this2.getSecureApiUrl('api/craftedabilities'),
                    data: {
                        characterID: characterID,
                        loginToken: loginToken
                    },
                    dataType: 'json'
                }).done(function (abilities) {
                    resolve(abilities);
                }).fail(function (error) {
                    reject(error);
                });
            });
        }
    }]);

    return CuRestLibrary;
})();

exports['default'] = CuRestLibrary;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL3RzL21haW4udHMiXSwibmFtZXMiOlsiQ3VSZXN0TGlicmFyeSIsIkN1UmVzdExpYnJhcnkuZ2V0U2VjdXJlQXBpVXJsIiwiQ3VSZXN0TGlicmFyeS5sb2dpbiIsIkN1UmVzdExpYnJhcnkuZmV0Y2hDaGFyYWN0ZXJzIiwiQ3VSZXN0TGlicmFyeS5mZXRjaEFiaWxpdGllcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7c0JBUW1CLFFBQVE7O0lBQWYsQ0FBQzs7SUFFYixhQUFBO2FBQUEsYUFBQTs4QkFBQSxhQUFBOzs7aUJBQUEsYUFBQTs7ZUFDMkJBLHlCQUFDQSxNQUFjQSxFQUFBQTtBQUNsQ0MsZ0JBQUlBLElBQUlBLEdBQUdBLEFBQUNBLE9BQU9BLEtBQUtBLEtBQUtBLFdBQVdBLElBQUlBLEtBQUtBLENBQUNBLFVBQVVBLEdBQUlBLEtBQUtBLENBQUNBLFVBQVVBLEdBQUdBLCtCQUErQkEsQ0FBQ0E7QUFDbkhBLGdCQUFJQSxXQUFXQSxHQUFHQSxJQUFJQSxLQUFLQSxXQUFXQSxDQUFDQTtBQUN2Q0EsZ0JBQUlBLFFBQVFBLEdBQUdBLFdBQVdBLEdBQUdBLE1BQU1BLEdBQUdBLE9BQU9BLENBQUNBO0FBQzlDQSxnQkFBSUEsSUFBSUEsR0FBR0EsV0FBV0EsR0FBR0EsTUFBTUEsR0FBR0EsTUFBTUEsQ0FBQ0E7QUFDekNBLG1CQUFPQSxRQUFRQSxHQUFHQSxLQUFLQSxHQUFHQSxJQUFJQSxHQUFHQSxHQUFHQSxHQUFHQSxJQUFJQSxHQUFHQSxHQUFHQSxHQUFHQSxNQUFNQSxDQUFDQTtTQUM5REE7OztlQUVJRCxlQUFDQSxLQUFhQSxFQUFFQSxRQUFnQkEsRUFBQUE7QUFDakNFLG1CQUFPQSxJQUFJQSxPQUFPQSxDQUFDQSxVQUFDQSxPQUFZQSxFQUFFQSxNQUFXQSxFQUFBQTtBQUN6Q0EsaUJBQUNBLENBQUNBLElBQUlBLENBQUNBO0FBQ0hBLHdCQUFJQSxFQUFFQSxNQUFNQTtBQUNaQSx1QkFBR0EsRUFBRUEsMkRBQTJEQTtBQUNoRUEsd0JBQUlBLEVBQUVBO0FBQ0ZBLDZCQUFLQSxFQUFMQSxLQUFLQTtBQUNMQSxnQ0FBUUEsRUFBUkEsUUFBUUE7cUJBQ1hBO0FBQ0RBLDRCQUFRQSxFQUFFQSxNQUFNQTtpQkFDbkJBLENBQUNBLENBQ0RBLElBQUlBLENBQUNBLFVBQUNBLGFBQWFBLEVBQUFBO0FBQ2hCQSwyQkFBT0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0E7aUJBQzFCQSxDQUFDQSxDQUNEQSxJQUFJQSxDQUFDQSxVQUFDQSxLQUFxQkEsRUFBQUE7QUFDeEJBLDBCQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtpQkFDakJBLENBQUNBLENBQUNBO2FBQ05BLENBQUNBLENBQUNBO1NBQ05BOzs7ZUFFY0YseUJBQUNBLFVBQXNCQSxFQUFBQTs7O0FBQ2xDRyxtQkFBT0EsSUFBSUEsT0FBT0EsQ0FBQ0EsVUFBQ0EsT0FBWUEsRUFBRUEsTUFBV0EsRUFBQUE7QUFDekNBLGlCQUFDQSxDQUFDQSxJQUFJQSxDQUFDQTtBQUNIQSx3QkFBSUEsRUFBRUEsS0FBS0E7QUFDWEEsdUJBQUdBLEVBQUVBLE1BQUtBLGVBQWVBLENBQUNBLGdCQUFnQkEsQ0FBQ0E7QUFDM0NBLHdCQUFJQSxFQUFFQTtBQUNGQSxrQ0FBVUEsRUFBVkEsVUFBVUE7cUJBQ2JBO0FBQ0RBLDRCQUFRQSxFQUFFQSxNQUFNQTtpQkFDbkJBLENBQUNBLENBQ0RBLElBQUlBLENBQUNBLFVBQUNBLFVBQWtDQSxFQUFBQTtBQUNyQ0EsMkJBQU9BLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO2lCQUN2QkEsQ0FBQ0EsQ0FDREEsSUFBSUEsQ0FBQ0EsVUFBQ0EsS0FBcUJBLEVBQUFBO0FBQ3hCQSwwQkFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7aUJBQ2pCQSxDQUFDQSxDQUFDQTthQUNOQSxDQUFDQSxDQUFDQTtTQUNOQTs7O2VBRWFILHdCQUFDQSxXQUF3QkEsRUFBRUEsVUFBc0JBLEVBQUFBOzs7QUFDM0RJLG1CQUFPQSxJQUFJQSxPQUFPQSxDQUFDQSxVQUFDQSxPQUFZQSxFQUFFQSxNQUFXQSxFQUFBQTtBQUN6Q0EsaUJBQUNBLENBQUNBLElBQUlBLENBQUNBO0FBQ0hBLHdCQUFJQSxFQUFFQSxLQUFLQTtBQUNYQSx1QkFBR0EsRUFBRUEsT0FBS0EsZUFBZUEsQ0FBQ0Esc0JBQXNCQSxDQUFDQTtBQUNqREEsd0JBQUlBLEVBQUVBO0FBQ0ZBLG1DQUFXQSxFQUFYQSxXQUFXQTtBQUNYQSxrQ0FBVUEsRUFBVkEsVUFBVUE7cUJBQ2JBO0FBQ0RBLDRCQUFRQSxFQUFFQSxNQUFNQTtpQkFDbkJBLENBQUNBLENBQ0RBLElBQUlBLENBQUNBLFVBQUNBLFNBQVNBLEVBQUFBO0FBQ1pBLDJCQUFPQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQTtpQkFDdEJBLENBQUNBLENBQ0RBLElBQUlBLENBQUNBLFVBQUNBLEtBQUtBLEVBQUFBO0FBQ1JBLDBCQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtpQkFDakJBLENBQUNBLENBQUNBO2FBQ05BLENBQUNBLENBQUNBO1NBQ05BOzs7V0FsRUwsYUFBQTs7O3FCQXFFZSxhQUFhIiwiZmlsZSI6InRzL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXHJcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcclxuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cclxuICovXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHNkL3RzZC5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmNsYXNzIEN1UmVzdExpYnJhcnkge1xyXG4gICAgcHJpdmF0ZSBnZXRTZWN1cmVBcGlVcmwoYWN0aW9uOiBzdHJpbmcpIHtcclxuICAgICAgICB2YXIgaG9zdCA9ICh0eXBlb2YgY3VBUEkgIT09IFwidW5kZWZpbmVkXCIgJiYgY3VBUEkud2ViQVBJSG9zdCkgPyBjdUFQSS53ZWJBUElIb3N0IDogJ2hhdGNoZXJ5LmNhbWVsb3R1bmNoYWluZWQuY29tJztcclxuICAgICAgICB2YXIgaXNMb2NhbGhvc3QgPSBob3N0ID09PSAnbG9jYWxob3N0JztcclxuICAgICAgICB2YXIgcHJvdG9jb2wgPSBpc0xvY2FsaG9zdCA/ICdodHRwJyA6ICdodHRwcyc7XHJcbiAgICAgICAgdmFyIHBvcnQgPSBpc0xvY2FsaG9zdCA/ICc4MDAwJyA6ICc0NDQzJztcclxuICAgICAgICByZXR1cm4gcHJvdG9jb2wgKyAnOi8vJyArIGhvc3QgKyAnOicgKyBwb3J0ICsgJy8nICsgYWN0aW9uO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsb2dpbihlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiBhbnksIHJlamVjdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vYXBpLmNpdHlzdGF0ZWVudGVydGFpbm1lbnQuY29tL0FjY291bnQvRW1haWxMb2dpbicsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZG9uZSgobG9naW5SZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShsb2dpblJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmZhaWwoKGVycm9yOiBYTUxIdHRwUmVxdWVzdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZldGNoQ2hhcmFjdGVycyhsb2dpblRva2VuOiBMb2dpblRva2VuKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiBhbnksIHJlamVjdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgdXJsOiB0aGlzLmdldFNlY3VyZUFwaVVybCgnYXBpL2NoYXJhY3RlcnMnKSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dpblRva2VuLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbidcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmRvbmUoKGNoYXJhY3RlcnM6IENoYXJhY3RlckRlc2NyaXB0aW9uW10pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoY2hhcmFjdGVycyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5mYWlsKChlcnJvcjogWE1MSHR0cFJlcXVlc3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmZXRjaEFiaWxpdGllcyhjaGFyYWN0ZXJJRDogQ2hhcmFjdGVySUQsIGxvZ2luVG9rZW46IExvZ2luVG9rZW4pIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6IGFueSwgcmVqZWN0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IHRoaXMuZ2V0U2VjdXJlQXBpVXJsKCdhcGkvY3JhZnRlZGFiaWxpdGllcycpLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlcklELFxyXG4gICAgICAgICAgICAgICAgICAgIGxvZ2luVG9rZW4sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZG9uZSgoYWJpbGl0aWVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGFiaWxpdGllcyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5mYWlsKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1UmVzdExpYnJhcnk7XHJcbiJdLCJzb3VyY2VSb290IjoiLi4vIn0=