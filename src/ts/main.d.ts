/// <reference path="../../node_modules/cu-tsd/cu.d.ts" />

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

interface Description<T> {
	name: string;
	value: T;
}

interface CharacterDescription {
	archetype: Description<Archetype>;
	attributes: Attributes;
	banes: Banes;
	boons: Boons;
	faction: Description<Faction>;
	id: CharacterID;
	lastLogin: UtcDateTime;
	name: string;
	race: Description<Race>;
	shardID: ShardID;
}