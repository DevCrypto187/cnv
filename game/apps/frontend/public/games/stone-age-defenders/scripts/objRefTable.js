const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Touch,
		C3.Plugins.LocalStorage,
		C3.Plugins.AdvancedRandom,
		C3.Plugins.Mouse,
		C3.Plugins.AJAX,
		C3.Plugins.Browser,
		C3.Plugins.Text,
		C3.Plugins.Sprite,
		C3.Behaviors.Sin,
		C3.Behaviors.Bullet,
		C3.Behaviors.Fade,
		C3.Behaviors.Pin,
		C3.Behaviors.Timer,
		C3.Behaviors.Flash,
		C3.Plugins.Arr,
		C3.Plugins.Button,
		C3.Plugins.Audio,
		C3.Behaviors.Turret,
		C3.Behaviors.destroy,
		C3.Behaviors.Tween,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetTimescale,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.LocalStorage.Acts.CheckItemExists,
		C3.Plugins.AJAX.Acts.RequestFile,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Behaviors.Turret.Acts.AddTarget,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.Sprite.Cnds.PickChildren,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Exps.LayerName,
		C3.Plugins.Sprite.Acts.AddChild,
		C3.Plugins.Sprite.Exps.UID,
		C3.Plugins.AdvancedRandom.Acts.CreateProbabilityTable,
		C3.Plugins.AdvancedRandom.Acts.AddProbabilityEntry,
		C3.Plugins.Sprite.Exps.ObjectTypeName,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.System.Exps.int,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Sprite.Exps.AnimationFrameCount,
		C3.Behaviors.Fade.Acts.StartFade,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.System.Cnds.IsPreview,
		C3.Plugins.System.Acts.SetGroupActive,
		C3.Plugins.LocalStorage.Cnds.OnItemExists,
		C3.Plugins.LocalStorage.Acts.GetItem,
		C3.Plugins.LocalStorage.Cnds.OnItemGet,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.LocalStorage.Exps.ItemValue,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.AJAX.Cnds.OnComplete,
		C3.Plugins.Arr.Acts.JSONLoad,
		C3.Plugins.AJAX.Exps.LastData,
		C3.Plugins.System.Exps.max,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.LocalStorage.Acts.SetItem,
		C3.Plugins.System.Cnds.EvaluateExpression,
		C3.Plugins.Arr.Exps.Width,
		C3.Plugins.Arr.Exps.Height,
		C3.Plugins.System.Acts.SetFunctionReturnValue,
		C3.Plugins.Arr.Exps.At,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Audio.Acts.Play,
		C3.Behaviors.Flash.Acts.Flash,
		C3.Plugins.Mouse.Acts.SetCursor,
		C3.Plugins.Mouse.Acts.SetCursorSprite,
		C3.Plugins.Sprite.Cnds.PickByUID,
		C3.Plugins.Sprite.Cnds.IsVisible,
		C3.Plugins.System.Cnds.LayerVisible,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.System.Acts.SetObjectTimescale,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Sprite.Acts.SetScale,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Behaviors.Turret.Cnds.OnShoot,
		C3.Behaviors.Turret.Exps.TargetUID,
		C3.Plugins.Sprite.Cnds.IsOnScreen,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Cnds.OnFrameChanged,
		C3.Plugins.Sprite.Cnds.IsAnimPlaying,
		C3.Plugins.Sprite.Exps.ImagePointCount,
		C3.Plugins.System.Acts.CreateObjectByName,
		C3.Plugins.Sprite.Exps.ImagePointX,
		C3.Plugins.Sprite.Exps.ImagePointY,
		C3.Plugins.System.Cnds.PickLastCreated,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Behaviors.Bullet.Acts.SetAngleOfMotion,
		C3.Plugins.Sprite.Exps.Angle,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.System.Exps.layoutwidth,
		C3.Plugins.System.Exps.layoutheight,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Behaviors.Pin.Cnds.IsPinned,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Behaviors.Bullet.Acts.SetEnabled,
		C3.Plugins.Sprite.Acts.SetTowardPosition,
		C3.Plugins.Sprite.Acts.ZMoveToObject,
		C3.Behaviors.Pin.Acts.PinByProperties,
		C3.Plugins.Sprite.Cnds.OnAnimFinished,
		C3.Behaviors.Turret.Cnds.HasTarget,
		C3.Plugins.Sprite.Cnds.PickParent,
		C3.Plugins.System.Exps.min,
		C3.Plugins.Sprite.Cnds.OnCreated,
		C3.Plugins.Sprite.Acts.MoveToTop,
		C3.Plugins.Sprite.Cnds.OnDestroyed,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.Repeat,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.AdvancedRandom.Exps.Weighted,
		C3.Plugins.System.Cnds.PickByEvaluate,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Sprite.Exps.BBoxLeft,
		C3.Plugins.Sprite.Exps.BBoxRight,
		C3.Plugins.Sprite.Exps.BBoxTop,
		C3.Plugins.Sprite.Exps.BBoxBottom,
		C3.Plugins.System.Cnds.ForEachOrdered,
		C3.Plugins.System.Cnds.PickRandom,
		C3.Plugins.Sprite.Acts.SetY,
		C3.Behaviors.Timer.Acts.StartTimer,
		C3.Plugins.Sprite.Exps.AnimationFrame,
		C3.Plugins.Mouse.Cnds.IsOverObject,
		C3.Plugins.Touch.Cnds.OnTapGesture,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.Touch.Exps.X,
		C3.Plugins.Touch.Exps.Y,
		C3.Plugins.Sprite.Exps.Height,
		C3.Behaviors.Fade.Acts.SetWaitTime,
		C3.Behaviors.Fade.Exps.FadeInTime,
		C3.Behaviors.Fade.Exps.FadeOutTime,
		C3.Plugins.Sprite.Acts.SetPosToObject,
		C3.Plugins.Audio.Cnds.OnEnded,
		C3.Behaviors.Timer.Cnds.OnTimer,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Touch.Cnds.IsInTouch,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Sprite.Acts.SetWidth,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.Browser.Acts.ConsoleLog,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.Sprite.Acts.MoveToBottom,
		C3.Plugins.Touch.Cnds.OnTouchEnd,
		C3.Plugins.Sprite.Acts.ToggleBoolInstanceVar,
		C3.Plugins.Audio.Acts.SetSilent,
		C3.Plugins.Audio.Acts.PlayByName,
		C3.Plugins.System.Exps.choose,
		C3.Plugins.Sprite.Cnds.CompareFrame
	];
};
self.C3_JsPropNameTable = [
	{Touch: 0},
	{LocalStorage: 0},
	{AdvancedRandom: 0},
	{Mouse: 0},
	{AJAX: 0},
	{Browser: 0},
	{BaseText: 0},
	{txBest: 0},
	{Sine: 0},
	{btnPlay: 0},
	{Logo: 0},
	{brdBestscore: 0},
	{HP: 0},
	{Damage: 0},
	{Team: 0},
	{DataIndex: 0},
	{Moves: 0},
	{UseProjectile: 0},
	{ProjectileName: 0},
	{DestroyProjectile: 0},
	{Level: 0},
	{MaxLevel: 0},
	{Guard: 0},
	{Wall: 0},
	{Reward: 0},
	{AnimalAir: 0},
	{AnimalLand: 0},
	{EnemyMelee: 0},
	{EnemyRanged: 0},
	{Bullet: 0},
	{Fire: 0},
	{Fade: 0},
	{Lightning: 0},
	{Typhoon: 0},
	{ButtonHolder: 0},
	{End: 0},
	{GuardHolder: 0},
	{Name: 0},
	{Spawner: 0},
	{WallHolder: 0},
	{Destroyer: 0},
	{Coin: 0},
	{Diamond: 0},
	{Rock: 0},
	{Rock2: 0},
	{Pin: 0},
	{Spear: 0},
	{btnPause: 0},
	{btnReplay: 0},
	{btnResume: 0},
	{txScore: 0},
	{BG: 0},
	{brdPause: 0},
	{brdTop: 0},
	{txTimer: 0},
	{brdEnd: 0},
	{Label: 0},
	{bgMeter: 0},
	{orgWidth: 0},
	{brdMeter: 0},
	{brdScore: 0},
	{brdWave: 0},
	{Cursor: 0},
	{Icon: 0},
	{Star: 0},
	{lblWave: 0},
	{speed: 0},
	{Meter: 0},
	{IsNew: 0},
	{NewCost: 0},
	{UpgradeCost: 0},
	{Allowed: 0},
	{btnUpgrade: 0},
	{PowerName: 0},
	{AutoSpawn: 0},
	{Cost: 0},
	{CostMultiplier: 0},
	{Quantity: 0},
	{QuantityMultiplier: 0},
	{Duration: 0},
	{DurationMultiplier: 0},
	{DamageMultiplier: 0},
	{Timer: 0},
	{btnPower: 0},
	{txPrice: 0},
	{Flash: 0},
	{txMoney: 0},
	{brdPrice: 0},
	{aUnits: 0},
	{dbg: 0},
	{DEBUG: 0},
	{Stick: 0},
	{Title: 0},
	{Sprite: 0},
	{Active: 0},
	{btnSound: 0},
	{btnHelp: 0},
	{Audio: 0},
	{Remaining: 0},
	{help: 0},
	{Sprite2: 0},
	{Turret2: 0},
	{FEnemy: 0},
	{DestroyOutsideLayout: 0},
	{FProjectile: 0},
	{FHolder: 0},
	{FUnit: 0},
	{FUpgradeButton: 0},
	{FPower: 0},
	{FBase: 0},
	{FAnimal: 0},
	{FUpgradable: 0},
	{FUI: 0},
	{Tween: 0},
	{FUIOverlay: 0},
	{value: 0},
	{UpdateScore: 0},
	{objectIndex: 0},
	{keyIndex: 0},
	{normal: 0},
	{uid: 0},
	{enable: 0},
	{show: 0},
	{new: 0},
	{x: 0},
	{y: 0},
	{ret: 0},
	{targetUID: 0},
	{projectileUID: 0},
	{unitUID: 0},
	{uidBase: 0},
	{uidHolder: 0},
	{base: 0},
	{multiplier: 0},
	{level: 0},
	{showMeter: 0},
	{showButtons: 0},
	{AutoEnd: 0},
	{TyphoonDistanceMin: 0},
	{msg: 0},
	{Score: 0},
	{BestScore: 0},
	{KEYBestScore: 0},
	{Money: 0},
	{InitMoney: 0},
	{EnemySpawnMin: 0},
	{EnemySpawnMax: 0},
	{EnemySpawnCount: 0},
	{EnemyGroupSpacing: 0},
	{EnemySpawnIncreaseTime: 0},
	{TBLSpawn: 0},
	{RNDNone: 0},
	{SPWGeneral: 0},
	{IMGThrow: 0},
	{TEMPlayer: 0},
	{TEMEnemy: 0},
	{PowerQuantity: 0},
	{PowerDuration: 0},
	{PowerDamage: 0},
	{FireOffset: 0},
	{TyphoonDoT: 0},
	{TMRDuration: 0},
	{FlashTime: 0},
	{FlashCount: 0},
	{AJXDesign: 0},
	{IDXHPBase: 0},
	{IDXHPMultiplier: 0},
	{IDXCostNew: 0},
	{IDXCostMultiplier: 0},
	{IDXDamageBase: 0},
	{IDXDamageMultiplier: 0},
	{IDXReward: 0}
];

self.InstanceType = {
	Touch: class extends self.IInstance {},
	LocalStorage: class extends self.IInstance {},
	AdvancedRandom: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	AJAX: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	txBest: class extends self.ITextInstance {},
	btnPlay: class extends self.ISpriteInstance {},
	Logo: class extends self.ISpriteInstance {},
	brdBestscore: class extends self.ISpriteInstance {},
	Guard: class extends self.ISpriteInstance {},
	Wall: class extends self.ISpriteInstance {},
	AnimalAir: class extends self.ISpriteInstance {},
	AnimalLand: class extends self.ISpriteInstance {},
	EnemyMelee: class extends self.ISpriteInstance {},
	EnemyRanged: class extends self.ISpriteInstance {},
	Fire: class extends self.ISpriteInstance {},
	Lightning: class extends self.ISpriteInstance {},
	Typhoon: class extends self.ISpriteInstance {},
	ButtonHolder: class extends self.ISpriteInstance {},
	End: class extends self.ISpriteInstance {},
	GuardHolder: class extends self.ISpriteInstance {},
	Spawner: class extends self.ISpriteInstance {},
	WallHolder: class extends self.ISpriteInstance {},
	Destroyer: class extends self.ISpriteInstance {},
	Coin: class extends self.ISpriteInstance {},
	Diamond: class extends self.ISpriteInstance {},
	Rock: class extends self.ISpriteInstance {},
	Rock2: class extends self.ISpriteInstance {},
	Spear: class extends self.ISpriteInstance {},
	btnPause: class extends self.ISpriteInstance {},
	btnReplay: class extends self.ISpriteInstance {},
	btnResume: class extends self.ISpriteInstance {},
	txScore: class extends self.ITextInstance {},
	BG: class extends self.ISpriteInstance {},
	brdPause: class extends self.ISpriteInstance {},
	brdTop: class extends self.ISpriteInstance {},
	txTimer: class extends self.ITextInstance {},
	brdEnd: class extends self.ISpriteInstance {},
	Label: class extends self.ITextInstance {},
	bgMeter: class extends self.ISpriteInstance {},
	brdMeter: class extends self.ISpriteInstance {},
	brdScore: class extends self.ISpriteInstance {},
	brdWave: class extends self.ISpriteInstance {},
	Cursor: class extends self.ISpriteInstance {},
	Icon: class extends self.ISpriteInstance {},
	Star: class extends self.ISpriteInstance {},
	lblWave: class extends self.ISpriteInstance {},
	Meter: class extends self.ISpriteInstance {},
	btnUpgrade: class extends self.ISpriteInstance {},
	btnPower: class extends self.ISpriteInstance {},
	txPrice: class extends self.ITextInstance {},
	txMoney: class extends self.ITextInstance {},
	brdPrice: class extends self.ISpriteInstance {},
	aUnits: class extends self.IArrayInstance {},
	dbg: class extends self.ITextInstance {},
	DEBUG: class extends self.IButtonInstance {},
	Stick: class extends self.ISpriteInstance {},
	Title: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	btnSound: class extends self.ISpriteInstance {},
	btnHelp: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	Remaining: class extends self.ITextInstance {},
	help: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	FEnemy: class extends self.ISpriteInstance {},
	FProjectile: class extends self.ISpriteInstance {},
	FHolder: class extends self.ISpriteInstance {},
	FUnit: class extends self.ISpriteInstance {},
	FUpgradeButton: class extends self.ISpriteInstance {},
	FPower: class extends self.ISpriteInstance {},
	FBase: class extends self.ISpriteInstance {},
	FAnimal: class extends self.ISpriteInstance {},
	FUpgradable: class extends self.ISpriteInstance {},
	FUI: class extends self.ISpriteInstance {},
	FUIOverlay: class extends self.ISpriteInstance {}
}