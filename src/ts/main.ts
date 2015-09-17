/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/// <reference path="../tsd/tsd.d.ts" />
/// <reference path="./main.d.ts" />

import * as $ from 'jquery';

class CuRestLibrary {

    private static get host() {
        return (typeof cuAPI !== "undefined" && cuAPI.webAPIHost) 
            ? cuAPI.webAPIHost 
            : 'hatchery.camelotunchained.com';
    }

    private static get secureMasterUrl() {
        return 'https://api.citystateentertainment.com/';
    }

    private static get masterUrl() {
        return 'http://api.citystateentertainment.com:8001/';
    }

    private static get regularUrl() {
        return `http://${CuRestLibrary.host}:8000/`;
    }

    private static get secureUrl() {
        return `https://${CuRestLibrary.host}:4443/`;
    }

    private static request<T>(options: {}|string) {
        return new Promise((resolve: any, reject: any) => {
            var opts = {
                type: 'GET',
                url: `${CuRestLibrary.regularUrl}`,
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            }
            if (typeof options == 'string') {
                opts.url += options;
            } else {
                opts = $.extend(opts, options)
            }
            $.ajax(opts)
            .done((response: T) => {
                resolve(response);
            })
            .fail((error: XMLHttpRequest) => {
                reject(error);
            });
        });
    }

    /*
     * LOGIN 
     */
    static login(email: string, password: string) {
        return CuRestLibrary.request<LoginResponse>({
            url: `${CuRestLibrary.secureMasterUrl}Account/EmailLogin`, 
            data: {email, password}, 
            type: 'POST',
        });
    }
    
    /*
     * GENERAL GAME-WIDE INFORMATIONS 
     */

    /*
     * Retrieves online servers for a particular channel
     */
    static fetchServers(channelID: ChannelID) {
        return CuRestLibrary.request<ServerModel[]>({
            url: `${CuRestLibrary.masterUrl}api/servers`, 
            data: { channelID } 
        });
    }

    static fetchBanners() {
        return CuRestLibrary.request<BannerModel[]>('api/banners');
    }

    /*
     * STATIC GAME INFORMATIONS 
     */
    static fetchRaces() {
        return CuRestLibrary.request<RaceModel[]>('api/game/races');
    }

    static fetchFactions() {
        return CuRestLibrary.request<FactionModel[]>('api/game/factions');
    }

    static fetchArchetypes() {
        return CuRestLibrary.request<ArchetypeModel[]>('api/game/archetypes');
    }

    static fetchBanes() {
        return CuRestLibrary.request<BaneModel[]>('api/game/banes');
    }

    static fetchBoons() {
        return CuRestLibrary.request<BoonModel[]>('api/game/boons');
    }

    static fetchAttributes() {
        return CuRestLibrary.request<AttributeModel[]>('api/game/attributes');
    }

    static fetchAbilities() {
        return CuRestLibrary.request<AbilityModel[]>('api/abilities');
    }
    
    static fetchAbility(id: AbilityID) {
        return CuRestLibrary.request<AbilityModel>({
            url: `${CuRestLibrary.regularUrl}api/abilities`,
            data: {id},
        });
    }

    static fetchBuildingBlocks() {
        return CuRestLibrary.request<BuildingBlockModel[]>('api/buildingblocks');
    }

    /*
     * SERVER SPECIFIC INFORMATIONS 
     */
    static fetchScheduledEvents(type?: ScheduledEventType) {
        return CuRestLibrary.request<any[]>({
            url: `${CuRestLibrary.regularUrl}api/scheduledevents`,
            data: {type},
        });
    }

    static fetchSpawnPoints() {
        return CuRestLibrary.request<SpawnPointModel[]>('api/game/spawnpoints');
    }

    static fetchPlayers() {
        return CuRestLibrary.request<PlayersCountModel[]>('api/game/players');
    }

    static fetchPatchNotes() {
        return CuRestLibrary.request<PatchNoteModel[]>('api/patchnotes');
    }

    static fetchKills(data?: {}) {
        return CuRestLibrary.request<KillModel[]>({ 
            url: `${CuRestLibrary.regularUrl}api/kills`,
            data,
        });
    }

    static fetchKillsByFaction(faction: FactionName) {
        return CuRestLibrary.fetchKills({faction});
    }
    
    static fetchKillsByKiller(killer: CharacterID) {
        return CuRestLibrary.fetchKills({killer});
    }
    
    static fetchKillsByAttacker(attacker: CharacterID) {
        return CuRestLibrary.fetchKills({attacker});
    }

    static fetchKillsByVictim(victim: CharacterID) {
        return CuRestLibrary.fetchKills({victim});
    }
    
    static fetchKillsByDates(start: Iso8601, end?: Iso8601) {
        return CuRestLibrary.fetchKills({start, end});
    }

    static fetchCraftedAbilities() {
        return CuRestLibrary.request<DefaultCraftedAbilityList>('api/craftedabilities/defaults');
    }

    static fetchControlGame() {
        return CuRestLibrary.request<GameScoreModel[]>('api/game/controlgame');
    }
    
    /*
     * LOGGED OPERATIONS
     */
    static fetchCharacters(loginToken: LoginToken) {
        return CuRestLibrary.request<OwnCharacterModel[]>({
            url: `${CuRestLibrary.secureUrl}api/characters`, 
            data: { loginToken }, 
        });
    }

    static createCharacter(
        loginToken: LoginToken, 
        name: string, 
        faction: FactionName,
        race: RaceName,
        gender: GenderName,
        archetype: ArchetypeName,
        attributes: PrimaryAttributesStatsUppercase,
        banes: ActiveBanes, 
        boons: ActiveBoons) {
        return CuRestLibrary.request<CharacterCreationResponse[]>({
             url: `${CuRestLibrary.secureUrl}api/characters`,
             data: JSON.stringify({
                loginToken,
                name,
                attributes,
                banes,
                boons,
                faction,
                race,
                gender,
                archetype,
            }),
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
        });       
    }
    
    static deleteCharacter(loginToken: LoginToken, characterID: CharacterID) {
        return CuRestLibrary.request<void>({
            url: `${CuRestLibrary.secureUrl}api/characters`,
            data: JSON.stringify({ LoginToken: loginToken, ID: characterID }),
            type: 'DELETE',
            contentType: 'application/json; charset=utf-8',
        });
    }
    
    // static fetchCharacterAbilities(loginToken: LoginToken, characterID: CharacterID) {
    //     return CuRestLibrary.request<void>({
    //         url: `${CuRestLibrary.secureUrl}api/craftedabilities`,
    //         data: JSON.stringify({ LoginToken: loginToken, ID: characterID }),
    //         type: 'POST',
    //         contentType: 'application/json; charset=utf-8',
    //     });
    // }
}

export default CuRestLibrary;
