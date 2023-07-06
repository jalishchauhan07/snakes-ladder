
// You can write more code here

/* START OF COMPILED CODE */

class Spline extends Phaser.Scene {

	constructor() {
		super("Spline");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// green_pawn
		const green_pawn = this.add.image(519, 528, "green-pawn");

		this.green_pawn = green_pawn;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	green_pawn;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		const path=new Phaser.Curves.Path(200,600);
		path.splineTo([200,600,1000,600]);
		path.lineTo(1000,600);
		path.lineTo(100,700);
		path.lineTo(1000,700);
		path.lineTo(1000,1900);
		path.lineTo(100,1900);
		path.lineTo(100,1800);
		const graphics=this.add.graphics();
		graphics.lineStyle(1,0xffffff,1);
		path.draw(graphics,128);
		const lemming=this.add.follower(path,200,600,this.green_pawn.texture.key);
		lemming.startFollow({
			duration:10000,
			repeat:0,
		});

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
