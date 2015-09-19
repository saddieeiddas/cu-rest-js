describe("Cu Rest Library", function() {
  
    var Rest = CuRestLibrary.default;

    var loginEMail = localStorage.getItem('cu-rest-library-test-email');
    if (!loginEMail) {
        loginEMail = window.prompt('email?');
        localStorage.setItem('cu-rest-library-test-email', loginEMail);
    }
    var loginPassword = localStorage.getItem('cu-rest-library-test-password');
    if (!loginPassword) {
        loginPassword = window.prompt('password?');
        localStorage.setItem('cu-rest-library-test-password', loginPassword);
    }
    var loginToken = null;
    var character = null;
    var characterID = null;
    var abilityID = null;
    
    if (loginEMail && loginPassword) {
        it("should allow to login", function(done) {
            function success(loginResponse) {
                expect(loginResponse.LoginToken).toBeTruthy();
                
                //Save login token for further tests
                loginToken = loginResponse.LoginToken;
            }
            
            function fail(error) {
                expect(error).toBeUndefined();
            }
            
            Rest.login(loginEMail, loginPassword)
                .then(success)
                .catch(fail)
                .then(done);
        });
    }
    
    it("should fetch online servers on a particular channel", function(done) {
        function success(servers) {
            expect(servers).toBeTruthy();
            if (servers.length) {
                expect(servers[0].accessLevel).toBeDefined();
                expect(servers[0].name).toBeTruthy();
                expect(servers[0].host).toBeTruthy();
                expect(servers[0].playerMaximum).toBeTruthy();
            }
        }
        
        function fail(error) {
            expect(error).toBeUndefined();
        }
        
        // 4 is Hatchery channel ID
        Rest.fetchServers(4)
            .then(success)
            .catch(fail)
            .then(done);
    });
    
    it("should fetch banners", function(done) {
        function success(banners) {
            expect(banners).toBeTruthy();
            if (banners.length) {
                expect(banners[0].id).toBeTruthy();
                expect(banners[0].content).toBeTruthy();
                expect(banners[0].created).toBeTruthy();
                expect(new Date(banners[0].created).toISOString()).toEqual(banners[0].created);
                expect(banners[0].modified).toBeDefined();
                if (banners[0].modified) {
                    expect(new Date(banners[0].modified).toISOString()).toEqual(banners[0].modified);
                }
            }
        }
        
        function fail(error) {
            expect(error).toBeUndefined();
        }
        
        Rest.fetchBanners()
            .then(success)
            .catch(fail)
            .then(done);
    });
    
    it("should fetch races", function(done) {
        function success(races) {
            expect(races).toBeTruthy();
            if (races.length) {
                expect(races[0].value).toBeDefined();
                expect(races[0].name).toBeTruthy();
                expect(races[0].description).toBeTruthy();
                expect(races[0].abilities).toBeTruthy();
                expect(races[0].banes).toBeTruthy();
                expect(races[0].boons).toBeTruthy();
            }
        }
        
        function fail(error) {
            expect(error).toBeUndefined();
        }
        
        Rest.fetchRaces()
            .then(success)
            .catch(fail)
            .then(done);
    });
    
    it("should fetch factions", function(done) {
        function success(factions) {
            expect(factions).toBeTruthy();
            if (factions.length) {
                expect(factions[0].value).toBeDefined();
                expect(factions[0].name).toBeTruthy();
                expect(factions[0].archetypes).toBeTruthy();
                expect(factions[0].attributes).toBeTruthy();
                expect(factions[0].banes).toBeTruthy();
                expect(factions[0].boons).toBeTruthy();
                expect(factions[0].races).toBeTruthy();
            }
        }
        
        function fail(error) {
            expect(error).toBeUndefined();
        }
        
        Rest.fetchFactions()
            .then(success)
            .catch(fail)
            .then(done);
    });
    
    it("should fetch archetypes", function(done) {
        function success(archetypes) {
            expect(archetypes).toBeTruthy();
            if (archetypes.length) {
                expect(archetypes[0].value).toBeDefined();
                expect(archetypes[0].name).toBeTruthy();
                expect(archetypes[0].description).toBeTruthy();
                expect(archetypes[0].attributes).toBeTruthy();
                expect(archetypes[0].banes).toBeTruthy();
                expect(archetypes[0].boons).toBeTruthy();
            }
        }
        
        function fail(error) {
            expect(error).toBeUndefined();
        }
        
        Rest.fetchArchetypes()
            .then(success)
            .catch(fail)
            .then(done);
    });
    
    it("should fetch banes", function(done) {
        function success(banes) {
            expect(banes).toBeTruthy();
            if (banes.length) {
                expect(banes[0].id).toBeTruthy();
                expect(banes[0].category).toBeDefined();
                expect(banes[0].categoryID).toBeDefined();
                expect(banes[0].channelID).toBeDefined();
                expect(banes[0].costPerRank).toBeDefined();
                expect(banes[0].description).toBeTruthy();
                expect(banes[0].icon).toBeTruthy();
                expect(banes[0].maxRanks).toBeDefined();
                expect(banes[0].name).toBeTruthy();
                expect(banes[0].prerequisite).toBeDefined();
                expect(banes[0].x).toBeDefined();
                expect(banes[0].y).toBeDefined();
            }
        }
        
        function fail(error) {
            expect(error).toBeUndefined();
        }
        
        Rest.fetchBanes()
            .then(success)
            .catch(fail)
            .then(done);
    });
    
    it("should fetch boons", function(done) {
        function success(boons) {
            expect(boons).toBeTruthy();
            if (boons.length) {
                expect(boons[0].id).toBeTruthy();
                expect(boons[0].category).toBeDefined();
                expect(boons[0].categoryID).toBeDefined();
                expect(boons[0].channelID).toBeDefined();
                expect(boons[0].costPerRank).toBeDefined();
                expect(boons[0].description).toBeTruthy();
                expect(boons[0].icon).toBeTruthy();
                expect(boons[0].maxRanks).toBeDefined();
                expect(boons[0].name).toBeTruthy();
                expect(boons[0].prerequisite).toBeDefined();
                expect(boons[0].x).toBeDefined();
                expect(boons[0].y).toBeDefined();
            }
        }
        
        function fail(error) {
            expect(error).toBeUndefined();
        }
        
        Rest.fetchBoons()
            .then(success)
            .catch(fail)
            .then(done);
    });
    
    it("should fetch attributes", function(done) {
        function success(attributes) {
            expect(attributes).toBeTruthy();
            if (attributes.length) {
                expect(attributes[0].name).toBeTruthy();
                expect(attributes[0].description).toBeTruthy();
                expect(attributes[0].min).toBeDefined();
                expect(attributes[0].max).toBeDefined();
                expect(attributes[0].cap).toBeDefined();
                expect(attributes[0].format).toBeTruthy();
            }
        }
        
        function fail(error) {
            expect(error).toBeUndefined();
        }
        
        Rest.fetchAttributes()
            .then(success)
            .catch(fail)
            .then(done);
    });
    
    it("should fetch abilities", function(done) {
        function success(abilities) {
            expect(abilities).toBeTruthy();
            if (abilities.length) {
                expect(abilities[0].cooldowns).toBeTruthy();
                expect(abilities[0].duration).toBeDefined();
                expect(abilities[0].icon).toBeTruthy();
                expect(abilities[0].id).toBeTruthy();
                expect(abilities[0].name).toBeTruthy();
                expect(abilities[0].tooltip).toBeTruthy();
                expect(abilities[0].triggerTime).toBeDefined();
                
                abilityID = abilities[0].id;
            }
        }
        
        function fail(error) {
            expect(error).toBeUndefined();
        }
        
        Rest.fetchAbilities()
            .then(success)
            .catch(fail)
            .then(done);
    });
    
    xit("should fetch one unique ability", function(done) {
        function success(ability) {
            expect(ability).toBeTruthy();
            expect(ability.cooldowns).toBeTruthy();
            expect(ability.duration).toBeDefined();
            expect(ability.icon).toBeTruthy();
            expect(ability.id).toBeTruthy();
            expect(ability.name).toBeTruthy();
            expect(ability.tooltip).toBeTruthy();
            expect(ability.triggerTime).toBeDefined();
        }
        
        function fail(error) {
            expect(error).toBeUndefined();
        }
        
        Rest.fetchAbility(abilityID)
            .then(success)
            .catch(fail)
            .then(done);
    });
    
    it("should fetch building block with their shapes and materials", function(done) {
        function success(buildingBlocks) {
            expect(buildingBlocks).toBeTruthy();
            if (buildingBlocks.length) {
                expect(buildingBlocks[0].id).toBeTruthy();
                expect(buildingBlocks[0].materials).toBeTruthy();
                expect(buildingBlocks[0].shapes).toBeTruthy();
            }
        }
        
        function fail(error) {
            expect(error).toBeUndefined();
        }
        
        Rest.fetchBuildingBlocks()
            .then(success)
            .catch(fail)
            .then(done);
    });
    
    it("should fetch scheduled events", function(done) {
        function success(scheduledEvents) {
            expect(scheduledEvents).toBeTruthy();
        }
        
        function fail(error) {
            expect(error).toBeUndefined();
        }
        
        Rest.fetchScheduledEvents()
            .then(success)
            .catch(fail)
            .then(done);
    });
    
    it("should fetch spawn points", function(done) {
        function success(spawnPoints) {
            expect(spawnPoints).toBeTruthy();
            if (spawnPoints.length) {
                expect(spawnPoints[0].x).toBeDefined();
                expect(spawnPoints[0].y).toBeDefined();
                expect(spawnPoints[0].faction).toBeTruthy();
            }
        }
        
        function fail(error) {
            expect(error).toBeUndefined();
        }
        
        Rest.fetchSpawnPoints()
            .then(success)
            .catch(fail)
            .then(done);
    });
    
    it("should fetch number of players connected to a server", function(done) {
        function success(playersCount) {
            expect(playersCount).toBeTruthy();
            expect(playersCount.arthurians).toBeDefined();
            expect(playersCount.tuathaDeDanann).toBeDefined();
            expect(playersCount.vikings).toBeDefined();
            expect(playersCount.max).toBeDefined();
        }
        
        function fail(error) {
            expect(error).toBeUndefined();
        }
        
        Rest.fetchPlayers()
            .then(success)
            .catch(fail)
            .then(done);
    });
    
    it("should fetch kills log", function(done) {
        function success(kills) {
            console.log(kills);
            expect(kills).toBeTruthy();
            if (kills.length) {
                expect(kills[0].id).toBeTruthy();
                expect(kills[0].victim).toBeTruthy();
                expect(kills[0].attackers).toBeTruthy();
                expect(kills[0].time).toBeTruthy();
                expect(kills[0].location).toBeTruthy();
                expect(kills[0].killer).toBeDefined();
            }
        }
        
        function fail(error) {
            expect(error).toBeUndefined();
        }
        
        Rest.fetchKills()
            .then(success)
            .catch(fail)
            .then(done);
    });
    
    xit("should fetch kills log by faction", function(done) {
        function success(kills) {
            console.log(kills);
            expect(kills).toBeTruthy();
            kills.forEach(function(kill) {
                expect(kill.killer).toBeTruthy();
                expect(kill.killer.faction).equal('Arthurian');
            });
        }
        
        function fail(error) {
            expect(error).toBeUndefined();
        }
        
        Rest.fetchKillsByFaction('Arthurian')
            .then(success)
            .catch(fail)
            .then(done);
    });
    
    xit("should fetch kills log by killer", function(done) {
        function success(kills) {
            console.log(kills);
            expect(kills).toBeTruthy();
            kills.forEach(function(kill) {
                expect(kill.killer).toBeTruthy();
                expect(kill.killer.id).equal('bazEeGOHcEIMb8Aje0B200');
            });
        }
        
        function fail(error) {
            expect(error).toBeUndefined();
        }
        
        Rest.fetchKillsByKiller('bazEeGOHcEIMb8Aje0B200')
            .then(success)
            .catch(fail)
            .then(done);
    });
    
    xit("should fetch kills log by attacker", function(done) {
        function success(kills) {
            console.log(kills);
            expect(kills).toBeTruthy();
            kills.forEach(function(kill) {
                expect(kill.attackers).toBeTruthy();
                expect(kill.attackers.filter(function(attacker){
                    return attacker.id === 'bazEeGOHcEIMb8Aje0B200';
                }).length).toBeGreaterThan(0);
            });
        }
        
        function fail(error) {
            expect(error).toBeUndefined();
        }
        
        Rest.fetchKillsByAttacker('bazEeGOHcEIMb8Aje0B200')
            .then(success)
            .catch(fail)
            .then(done);
    });
    
    xit("should fetch kills log by victim", function(done) {
        function success(kills) {
            console.log(kills);
            expect(kills).toBeTruthy();
            kills.forEach(function(kill) {
                expect(kill.victim).toBeTruthy();
                expect(kill.victim.id).equal('bazEeGOHcEIMb8Aje0B200');
            });
        }
        
        function fail(error) {
            expect(error).toBeUndefined();
        }
        
        Rest.fetchKillsByVictim('bazEeGOHcEIMb8Aje0B200')
            .then(success)
            .catch(fail)
            .then(done);
    });
    
    xit("should fetch kills log in an interval of date/time", function(done) {
        // Start date: Now - 30 minutes
        var startDate = new Date(Date.now() - 30 * 60 * 1000);
        // End date: StartDate + 15 minutes
        var endDate = new Date(startDate.getMilliseconds() + 15 * 60 * 1000);
        
        function success(kills) {
            console.log(kills);
            expect(kills).toBeTruthy();
            kills.forEach(function(kill) {
                expect(kill.time).toBeTruthy();
                var date = new Date(kill.time);
                expect(date.getMilliseconds()).toBeGreaterThan(startDate.getMilliseconds());
                expect(date.getMilliseconds()).toBeLessThan(endDate.getMilliseconds());
            });
        }
        
        function fail(error) {
            expect(error).toBeUndefined();
        }
        
        Rest.fetchKillsByDates(startDate.toISOString(), endDate.toISOString())
            .then(success)
            .catch(fail)
            .then(done);
    });
});
