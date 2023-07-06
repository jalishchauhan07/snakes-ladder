
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// backgroundContainer
		const backgroundContainer = this.add.container(0, 0);

		// gameBackground
		const gameBackground = this.add.image(540, 960, "game-background");
		backgroundContainer.add(gameBackground);

		// diceRollContainer
		const diceRollContainer = this.add.container(0, 0);

		// diceBackground
		const diceBackground = this.add.image(540, 1750, "dice-background");
		diceBackground.scaleX = 0.5;
		diceBackground.scaleY = 0.5;
		diceRollContainer.add(diceBackground);

		// dice
		const dice = this.add.sprite(540, 1750, "diceValues", 0);
		dice.scaleX = 0.7;
		dice.scaleY = 0.7;
		diceRollContainer.add(dice);

		// gameBoardPrefab
		const gameBoardPrefab = new GameBoard(this, 540, 960);
		this.add.existing(gameBoardPrefab);
		gameBoardPrefab.scaleX = 1;
		gameBoardPrefab.scaleY = 1;

		// popup_
		const popup_ = this.add.rectangle(540, 960, 728, 328);
		popup_.visible = false;
		popup_.isFilled = true;

		// message_
		const message_ = this.add.text(245, 963, "", {});
		message_.visible = false;
		message_.setStyle({ "align": "center", "color": "#000000ff", "fontSize": "50px" });

		this.diceRollContainer = diceRollContainer;
		this.diceBackground = diceBackground;
		this.dice = dice;
		this.gameBoardPrefab = gameBoardPrefab;
		this.popup_ = popup_;
		this.message_ = message_;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	diceRollContainer;
	/** @type {Phaser.GameObjects.Image} */
	diceBackground;
	/** @type {Phaser.GameObjects.Sprite} */
	dice;
	/** @type {GameBoard} */
	gameBoardPrefab;
	/** @type {Phaser.GameObjects.Rectangle} */
	popup_;
	/** @type {Phaser.GameObjects.Text} */
	message_;

	/* START-USER-CODE */

	// Write more your code here
	currentPlayer=0
	players=["blue_pawn","green_pawn","yellow_pawn","red_pawn"]
	create() {
		this.editorCreate();
		this.dice.setInteractive().on("pointerdown", () => {
			this.dice.anims.play("diceRollAnimation", true).once('animationcomplete', () => {
				this.rollDice(nDiceValue || Math.floor(Math.random() * 6));
			});
		});
	}
	
	moveBySnakeBite({ nStart, nEnd }, cords,player) {
		console.log(player,this.gameBoardPrefab[player])
		this.gameBoardPrefab[player].setVisible(false)
		var x = cords[0];
		console.log(cords)
		var y = cords[1];
		console.log(x)
		if(typeof(x)=="object"){
			x=cords[0].x;
			y=cords[0].y;
			console.log(x)
		}
		console.log(x)
		console.log(y)

		const path = new Phaser.Curves.Path(x, y);
		path.splineTo(cords)
		const graphics = this.add.graphics();
		// graphics.lineStyle(1, "blue", 1);
		path.draw(graphics);
		const move = this.gameBoardPrefab.scene.add.follower(path, x, y, "");
		move.setTexture(this.gameBoardPrefab[player].texture.key)
		// console.log(move.setVisible(false))
		setTimeout(() => {
			move.startFollow({
				duration: 1000,
				repeat: 0,
				verticalAdjust: true
			})
		}, 1000)


		setTimeout(() => {
			move.setVisible(false)
			this.gameBoardPrefab[player].x=this.gameBoardPrefab.tilemapContainer.list[nEnd-1].x;
			this.gameBoardPrefab[player].y=this.gameBoardPrefab.tilemapContainer.list[nEnd-1].y;
			this.gameBoardPrefab[player].setVisible(true);
		}, 2000)

		return nEnd;


	}

	rollDice(nDiceValue) {
		this.dice.setTexture("diceValues", nDiceValue);
		this.gameBoardPrefab.playMove(nDiceValue + 1,this.players[this.currentPlayer],this.currentPlayer);
		this.currentPlayer++;
		if(this.currentPlayer==4){
			this.currentPlayer=0
		}
	}

	movePawn({ nStart, nEnd },player) {
		console.log("stairs :" + nStart, (nEnd + 1))
		// const startX = this.gameBoardPrefab.tilemapContainer.list[nStart].x, starty = this.gameBoardPrefab.tilemapContainer.list[nStart].y;
		const endX = this.gameBoardPrefab.tilemapContainer.list[nEnd].x, endY = this.gameBoardPrefab.tilemapContainer.list[nEnd].y;
		// console.log("Start X:"+startX," Start Y:"+starty);
		// console.log("End X:"+endX," End Y:"+endY)
		this.tweens.add({
			targets: this.gameBoardPrefab[player],
			x: endX,
			y: endY,
			ease: "power2",
			delay: 4000,
		})
		console.log("End Stair:" + nEnd)
		nEnd++;
		// this.gameBoardPrefab.finalPosition=nEnd;
		// console.log("final Position __",this.gameBoardPrefab.finalPosition);
		return nEnd

	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
