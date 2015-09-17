/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
 
declare const cuAPI : any;

// ###################################################################
// TYPES
// ###################################################################
declare type AbilityID = string;
declare type AccountID = string;
declare type ArchetypeID = number;
declare type ArchetypeName = string;
declare type BaneID = string;
declare type BannerID = string;
declare type BlockID = number;
declare type BoonID = string;
declare type BuildingBlockID = number;
declare type CategoryID = number;
declare type ChannelID = number;
declare type CharacterID = string;
declare type CooldownGroupID = number;
declare type ComponentID = string;
declare type ControlPointID = string;
declare type FacebookUserID = string;
declare type FactionLetter = string;
declare type FactionID = number;
declare type FactionName = string;
declare type GameCenterID = string;
declare type GameState = number;
declare type GenderID = number;
declare type GenderName = string;
declare type HtmlString = string;
declare type Iso8601 = string;
declare type ItemID = string;
declare type KillID = string;
declare type LoginToken = string;
declare type PatchNoteID = string;
declare type RaceID = number;
declare type RaceName = string;
declare type ScheduledEventType = number;
declare type ShardID = string;
declare type SizeLetter = string;
declare type SoundID = number;

// ###################################################################
// INTERFACES
// ###################################################################
interface AbilityModel {
    cooldowns: CooldownGroupID[];
    duration: number;
    icon: string;
    id: AbilityID;
    name: string;
    tooltip: string;
    triggerTime: number;
}

interface DefaultCraftedAbilityList {
	arthurian: {
		fireMage: DefaultCraftedAbilityModel[];
		fighter: DefaultCraftedAbilityModel[];
		healer: DefaultCraftedAbilityModel[];
	};
	tdd: {
		earthMage: DefaultCraftedAbilityModel[];
		fighter: DefaultCraftedAbilityModel[];
		healer: DefaultCraftedAbilityModel[];
	};
	viking: {
		waterMage: DefaultCraftedAbilityModel[];
		fighter: DefaultCraftedAbilityModel[];
		healer: DefaultCraftedAbilityModel[];
	};
}

interface DefaultCraftedAbilityModel {
	id: number,
	characterID: {
		isNull: boolean;
		isValid: boolean;
		shardID: {
			isValid: boolean;
		}
	};
	shardID: {
		isValid: boolean;
	};
	name: string;
	icon: string;
	notes: string;
	rootComponentSlot: ComponentModel;
}

interface CraftedAbilityModel extends AbilityModel {
    characterID: CharacterID;
    notes: string;
    rootComponentSlot: ComponentModel;
    shardID: ShardID;
    stats: AbilityStatsModel;
}

interface AbilityStatsModel {
    bloodCost?: number;
    cooldownTime?: number;
    damage?: number;
    disruptionDamage?: number;
    disruptionHealth?: number;
    immobilizeDuration?: number;
    knockbackAmount?: number;
    preparationTime?: number;
    projectileDuration: number;
    projectileSpeed?: number;
    projectiletracking?: number;
    range?: number;
    recoveryTime?: number;
    staminaCost?: number;
}

interface ActiveBanes {
	//[name: BaneID]: rank;
	[name: string]: number;
}

interface ActiveBoons {
	//[name: BoonID]: rank;
	[name: string]: number;
}

interface ArchetypeModel extends Model<ArchetypeID, ArchetypeName> {
    attributes: AttributesStats;
	banes: BaneModel[];
	boons: BoonModel[];
	description: string;
}

interface AttributeModel {
	name: string,
	description: string,
	min: number,
	max: number,
	cap: number,
	format: string
}

interface AttributesStats {
	derived: DerivedAttributesStats;
	primary: PrimaryAttributesStats;
	secondary: SecondaryAttributesStats;
}

interface BaneAndBoonModel {
	category: number;
	categoryID: CategoryID;
	channelID: ChannelID;
	costPerRank: number;
	description: string;
	icon: string;
	maxRanks: number;
	name: string;
	prerequisite: string;
	x: number;
	y: number;
}

interface BaneModel extends BaneAndBoonModel {
	id: BaneID;
}

interface BoonModel extends BaneAndBoonModel {
	id: BoonID;
}

interface BuildingBlockModel {
	id: BuildingBlockID;
	shapes: string[];
	materials: string[];
}

interface CharacterCreationResponse {
	results: { success: string};
	character: OwnCharacterModel;
}

interface CharacterModel {
	archetype: ArchetypeName;
	faction: FactionName;
	id: CharacterID;
	name: string;
	race: RaceName;
	shardID: ShardID;
}

interface OwnCharacterModel {
	archetype: Model<ArchetypeID, ArchetypeName>;
	attributes: PrimaryAttributesStats;
	banes: ActiveBanes;
	boons: ActiveBoons;
	faction: Model<FactionID, FactionName>;
	id: CharacterID;
	lastLogin: Iso8601;
	name: string;
	race: Model<RaceID, RaceName>;
	shardID: ShardID;
}

interface ComponentModel {
    baseComponentID: ComponentID;
    children: ComponentModel[];
    componentID: ComponentID;
}

interface ControlPointModel extends Vector2 {
	faction: FactionLetter;
	id: ControlPointID;
	size: SizeLetter;
}

interface DerivedAttributesStats {
	carryCapacity: number;
	detection: number;
	healthRegeneration: number;
	maxHP: number;
	maxMoveSpeed: number;
	maxPanic: number;
	maxStamina: number;
	panicDecay: number;
	staminaRegeneration: number;
	vision: number;
}

interface FactionModel extends Model<FactionID, FactionName> {
	archetypes: ArchetypeModel;
	attributes: AttributesStats;
	banes: BaneModel[];
	boons: BoonModel[];
	races: RaceModel[];
}

interface GameScoreModel {
	arthurianScore: number;
	tuathaDeDanannScore: number;
	vikingScore: number;
	gameState: GameState;
	timeLeft: number;
	controlPoints: ControlPointModel[];
}

interface GenderModel extends Model<GenderID, GenderName> {	
}

interface KillModel {
    id: KillID;
    victim: CharacterModel;
    attackers: CharacterModel[];
    time: Iso8601;
    location: LocationModel;
    killer: CharacterModel;
}

interface LocationModel {
	pos: Vector3;
	orient: any;
	velocity: Vector3;
	airbone: boolean;
}

interface LoginResponse {
	Accounts: AccountID[];
	Email: string;
	Emails: string[];
	FacebookUserID: FacebookUserID;
	GameCenterID: GameCenterID;
	IsGuest: boolean;
	IsLoggedIn: boolean;
	IsNewAccount: boolean;
	LoginToken: LoginToken;
	Result: string;
	ScreenName: string;
	ScreenNameSuggestions: string;
	StrongAuth: number;
}

interface Model<ID, Name> {
	name: Name;
	value: ID;
}

interface PatchNoteModel {
	id: PatchNoteID;
    content: string;
    created: Iso8601;
    modified: Iso8601;
}

interface PlayersCountModel {
	arthurians: number;
	tuathaDeDanann: number;
	vikings: number;
	max: number;
}

interface PrimaryAttributesStats {
	agility: number;
	attunement: number;
	dexterity: number;
	endurance: number;
	eyesightv: number;
	faith: number;
	resonance: number;
	strength: number;
	vitality: number;
	will: number;
}

interface PrimaryAttributesStatsUppercase {
	Agility: number;
	Attunement: number;
	Dexterity: number;
	Endurance: number;
	Eyesightv: number;
	Faith: number;
	Resonance: number;
	Strength: number;
	Vitality: number;
	Will: number;
}

interface RaceModel extends Model<RaceID, RaceName> {
	abilities?: AbilityModel[];
	banes?: BaneModel[];
	boons?: BoonModel[];
	description?: string;
}

interface SecondaryAttributesStats {
	affinity: number;
	clarity: number;
	hearing: number;
	mass: number;
	presence: number;
}

interface ServerModel {
	accessLevel: number;
    name: string;
    host: string;
    playerMaximum: number;
}

interface SpawnPointModel {
	x: number;
	y: number;
	faction: FactionLetter;
}

interface Vector2 {
	x: number;
	y: number;
}

interface Vector3 extends Vector2 {
	z: number;
}

interface BannerModel {
	id: BannerID,
    content: HtmlString,
    created: Iso8601,
    modified: Iso8601
}
