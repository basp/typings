/// <reference path="../levelup/levelup.d.ts" />

interface Change {
	key: any;
	value: any;
	type: string;
}

interface Hook {
	(ch: Change, add: Function): void;
}

interface SubLevel extends LevelUp {
	sublevel(name: string): SubLevel;
	pre(hook: Hook): Function;
}

declare function sublevel(levelup: LevelUp): SubLevel;

declare module "level-sublevel" {
	export = sublevel;
}