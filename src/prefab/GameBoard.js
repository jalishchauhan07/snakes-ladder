
// You can write more code here

/* START OF COMPILED CODE */

class GameBoard extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// gameboard
		const gameboard = scene.add.image(0, 0, "game-board");
		this.add(gameboard);

		// playerPawnContainer
		const playerPawnContainer = scene.add.container(0, 0);
		this.add(playerPawnContainer);

		// blue_pawn
		const blue_pawn = scene.add.image(-455, 562, "blue-pawn");
		playerPawnContainer.add(blue_pawn);

		// yellow_pawn
		const yellow_pawn = scene.add.image(-356, 562, "yellow-pawn");
		playerPawnContainer.add(yellow_pawn);

		// tilemapContainer
		const tilemapContainer = scene.add.container(0, 0);
		this.add(tilemapContainer);

		// one
		const one = scene.add.rectangle(-450, 451, 95, 95);
		one.name = "one";
		one.alpha = 0.1;
		one.isFilled = true;
		tilemapContainer.add(one);

		// two
		const two = scene.add.rectangle(-350, 449, 95, 95);
		two.name = "two";
		two.alpha = 0;
		two.isFilled = true;
		tilemapContainer.add(two);

		// three
		const three = scene.add.rectangle(-250, 449, 95, 95);
		three.name = "three";
		three.alpha = 0;
		three.isFilled = true;
		tilemapContainer.add(three);

		// four
		const four = scene.add.rectangle(-150, 449, 95, 95);
		four.name = "four";
		four.alpha = 0;
		four.isFilled = true;
		tilemapContainer.add(four);

		// five
		const five = scene.add.rectangle(-50, 449, 95, 95);
		five.name = "five";
		five.alpha = 0;
		five.isFilled = true;
		tilemapContainer.add(five);

		// six
		const six = scene.add.rectangle(50, 449, 95, 95);
		six.name = "six";
		six.alpha = 0;
		six.isFilled = true;
		tilemapContainer.add(six);

		// seven
		const seven = scene.add.rectangle(150, 449, 95, 95);
		seven.name = "seven";
		seven.alpha = 0;
		seven.isFilled = true;
		tilemapContainer.add(seven);

		// eight
		const eight = scene.add.rectangle(250, 449, 95, 95);
		eight.name = "eight";
		eight.alpha = 0;
		eight.isFilled = true;
		tilemapContainer.add(eight);

		// nine
		const nine = scene.add.rectangle(350, 449, 95, 95);
		nine.name = "nine";
		nine.alpha = 0;
		nine.isFilled = true;
		tilemapContainer.add(nine);

		// ten
		const ten = scene.add.rectangle(450, 449, 95, 95);
		ten.name = "ten";
		ten.alpha = 0;
		ten.isFilled = true;
		tilemapContainer.add(ten);

		// eleven
		const eleven = scene.add.rectangle(455, 349, 95, 95);
		eleven.name = "eleven";
		eleven.alpha = 0;
		eleven.isFilled = true;
		tilemapContainer.add(eleven);

		// twelve
		const twelve = scene.add.rectangle(355, 349, 95, 95);
		twelve.name = "twelve";
		twelve.alpha = 0;
		twelve.isFilled = true;
		tilemapContainer.add(twelve);

		// thirteen
		const thirteen = scene.add.rectangle(255, 349, 95, 95);
		thirteen.name = "thirteen";
		thirteen.alpha = 0;
		thirteen.isFilled = true;
		tilemapContainer.add(thirteen);

		// fourteen
		const fourteen = scene.add.rectangle(150, 349, 95, 95);
		fourteen.name = "fourteen";
		fourteen.alpha = 0;
		fourteen.isFilled = true;
		tilemapContainer.add(fourteen);

		// fifteen
		const fifteen = scene.add.rectangle(50, 349, 95, 95);
		fifteen.name = "fifteen";
		fifteen.alpha = 0;
		fifteen.isFilled = true;
		tilemapContainer.add(fifteen);

		// sixteen
		const sixteen = scene.add.rectangle(-50, 349, 95, 95);
		sixteen.name = "sixteen";
		sixteen.alpha = 0;
		sixteen.isFilled = true;
		tilemapContainer.add(sixteen);

		// seventeen
		const seventeen = scene.add.rectangle(-150, 349, 95, 95);
		seventeen.name = "seventeen";
		seventeen.alpha = 0;
		seventeen.isFilled = true;
		tilemapContainer.add(seventeen);

		// eighteen
		const eighteen = scene.add.rectangle(-250, 349, 95, 95);
		eighteen.name = "eighteen";
		eighteen.alpha = 0;
		eighteen.isFilled = true;
		tilemapContainer.add(eighteen);

		// nineteen
		const nineteen = scene.add.rectangle(-350, 349, 95, 95);
		nineteen.name = "nineteen";
		nineteen.alpha = 0;
		nineteen.isFilled = true;
		tilemapContainer.add(nineteen);

		// twenty
		const twenty = scene.add.rectangle(-450, 349, 95, 95);
		twenty.name = "twenty";
		twenty.alpha = 0;
		twenty.isFilled = true;
		tilemapContainer.add(twenty);

		// twenty_one
		const twenty_one = scene.add.rectangle(-450, 249, 95, 95);
		twenty_one.name = "twenty_one";
		twenty_one.alpha = 0.1;
		twenty_one.isFilled = true;
		tilemapContainer.add(twenty_one);

		// twenty_two
		const twenty_two = scene.add.rectangle(-350, 249, 95, 95);
		twenty_two.name = "twenty_two";
		twenty_two.alpha = 0;
		twenty_two.isFilled = true;
		tilemapContainer.add(twenty_two);

		// twenty_three
		const twenty_three = scene.add.rectangle(-250, 250, 95, 95);
		twenty_three.name = "twenty_three";
		twenty_three.alpha = 0;
		twenty_three.isFilled = true;
		tilemapContainer.add(twenty_three);

		// twenty_four
		const twenty_four = scene.add.rectangle(-150, 249, 95, 95);
		twenty_four.name = "twenty_four";
		twenty_four.alpha = 0;
		twenty_four.isFilled = true;
		tilemapContainer.add(twenty_four);

		// twenty_five
		const twenty_five = scene.add.rectangle(-50, 250, 95, 95);
		twenty_five.name = "twenty_five";
		twenty_five.alpha = 0;
		twenty_five.isFilled = true;
		tilemapContainer.add(twenty_five);

		// twenty_six
		const twenty_six = scene.add.rectangle(50, 249, 95, 95);
		twenty_six.name = "twenty_six";
		twenty_six.alpha = 0;
		twenty_six.isFilled = true;
		tilemapContainer.add(twenty_six);

		// twenty_seven
		const twenty_seven = scene.add.rectangle(150, 249, 95, 95);
		twenty_seven.name = "twenty_seven";
		twenty_seven.alpha = 0;
		twenty_seven.isFilled = true;
		tilemapContainer.add(twenty_seven);

		// twenty_eight
		const twenty_eight = scene.add.rectangle(250, 248, 95, 95);
		twenty_eight.name = "twenty_eight";
		twenty_eight.alpha = 0;
		twenty_eight.isFilled = true;
		tilemapContainer.add(twenty_eight);

		// twenty_nine
		const twenty_nine = scene.add.rectangle(350, 250, 95, 95);
		twenty_nine.name = "twenty_nine";
		twenty_nine.alpha = 0;
		twenty_nine.isFilled = true;
		tilemapContainer.add(twenty_nine);

		// thirty
		const thirty = scene.add.rectangle(450, 250, 95, 95);
		thirty.name = "thirty";
		thirty.alpha = 0;
		thirty.isFilled = true;
		tilemapContainer.add(thirty);

		// thirty_one
		const thirty_one = scene.add.rectangle(450, 150, 95, 95);
		thirty_one.name = "thirty_one";
		thirty_one.alpha = 0;
		thirty_one.isFilled = true;
		tilemapContainer.add(thirty_one);

		// thirty_two
		const thirty_two = scene.add.rectangle(350, 149, 95, 95);
		thirty_two.name = "thirty_two";
		thirty_two.alpha = 0;
		thirty_two.isFilled = true;
		tilemapContainer.add(thirty_two);

		// thirty_three
		const thirty_three = scene.add.rectangle(250, 149, 95, 95);
		thirty_three.name = "thirty_three";
		thirty_three.alpha = 0;
		thirty_three.isFilled = true;
		tilemapContainer.add(thirty_three);

		// thirty_four
		const thirty_four = scene.add.rectangle(150, 149, 95, 95);
		thirty_four.name = "thirty_four";
		thirty_four.alpha = 0;
		thirty_four.isFilled = true;
		tilemapContainer.add(thirty_four);

		// thirty_five
		const thirty_five = scene.add.rectangle(50, 149, 95, 95);
		thirty_five.name = "thirty_five";
		thirty_five.alpha = 0;
		thirty_five.isFilled = true;
		tilemapContainer.add(thirty_five);

		// thirty_six
		const thirty_six = scene.add.rectangle(-50, 149, 95, 95);
		thirty_six.name = "thirty_six";
		thirty_six.alpha = 0;
		thirty_six.isFilled = true;
		tilemapContainer.add(thirty_six);

		// thirty_seven
		const thirty_seven = scene.add.rectangle(-150, 149, 95, 95);
		thirty_seven.name = "thirty_seven";
		thirty_seven.alpha = 0;
		thirty_seven.isFilled = true;
		tilemapContainer.add(thirty_seven);

		// thirty_eight
		const thirty_eight = scene.add.rectangle(-250, 149, 95, 95);
		thirty_eight.name = "thirty_eight";
		thirty_eight.alpha = 0;
		thirty_eight.isFilled = true;
		tilemapContainer.add(thirty_eight);

		// thirty_nine
		const thirty_nine = scene.add.rectangle(-350, 149, 95, 95);
		thirty_nine.name = "thirty_nine";
		thirty_nine.alpha = 0;
		thirty_nine.isFilled = true;
		tilemapContainer.add(thirty_nine);

		// forty
		const forty = scene.add.rectangle(-450, 149, 95, 95);
		forty.name = "forty";
		forty.alpha = 0;
		forty.isFilled = true;
		tilemapContainer.add(forty);

		// forty_one
		const forty_one = scene.add.rectangle(-450, 49, 95, 95);
		forty_one.name = "forty_one";
		forty_one.alpha = 0.1;
		forty_one.isFilled = true;
		tilemapContainer.add(forty_one);

		// forty_two
		const forty_two = scene.add.rectangle(-350, 49, 95, 95);
		forty_two.name = "forty_two";
		forty_two.alpha = 0;
		forty_two.isFilled = true;
		tilemapContainer.add(forty_two);

		// forty_three
		const forty_three = scene.add.rectangle(-250, 49, 95, 95);
		forty_three.name = "forty_three";
		forty_three.alpha = 0;
		forty_three.isFilled = true;
		tilemapContainer.add(forty_three);

		// forty_four
		const forty_four = scene.add.rectangle(-150, 49, 95, 95);
		forty_four.name = "forty_four";
		forty_four.alpha = 0;
		forty_four.isFilled = true;
		tilemapContainer.add(forty_four);

		// forty_five
		const forty_five = scene.add.rectangle(-50, 49, 95, 95);
		forty_five.name = "forty_five";
		forty_five.alpha = 0;
		forty_five.isFilled = true;
		tilemapContainer.add(forty_five);

		// forty_six
		const forty_six = scene.add.rectangle(50, 50, 95, 95);
		forty_six.name = "forty_six";
		forty_six.alpha = 0;
		forty_six.isFilled = true;
		tilemapContainer.add(forty_six);

		// forty_seven
		const forty_seven = scene.add.rectangle(150, 47, 95, 95);
		forty_seven.name = "forty_seven";
		forty_seven.alpha = 0;
		forty_seven.isFilled = true;
		tilemapContainer.add(forty_seven);

		// forty_eight
		const forty_eight = scene.add.rectangle(250, 49, 95, 95);
		forty_eight.name = "forty_eight";
		forty_eight.alpha = 0;
		forty_eight.isFilled = true;
		tilemapContainer.add(forty_eight);

		// forty_nine
		const forty_nine = scene.add.rectangle(350, 49, 95, 95);
		forty_nine.name = "forty_nine";
		forty_nine.alpha = 0;
		forty_nine.isFilled = true;
		tilemapContainer.add(forty_nine);

		// fifty
		const fifty = scene.add.rectangle(450, 49, 95, 95);
		fifty.name = "fifty";
		fifty.alpha = 0;
		fifty.isFilled = true;
		tilemapContainer.add(fifty);

		// fifty_one
		const fifty_one = scene.add.rectangle(450, -51, 95, 95);
		fifty_one.name = "fifty_one";
		fifty_one.alpha = 0;
		fifty_one.isFilled = true;
		tilemapContainer.add(fifty_one);

		// fifty_two
		const fifty_two = scene.add.rectangle(350, -51, 95, 95);
		fifty_two.name = "fifty_two";
		fifty_two.alpha = 0;
		fifty_two.isFilled = true;
		tilemapContainer.add(fifty_two);

		// fifty_three
		const fifty_three = scene.add.rectangle(250, -51, 95, 95);
		fifty_three.name = "fifty_three";
		fifty_three.alpha = 0;
		fifty_three.isFilled = true;
		tilemapContainer.add(fifty_three);

		// fifty_four
		const fifty_four = scene.add.rectangle(150, -51, 95, 95);
		fifty_four.name = "fifty_four";
		fifty_four.alpha = 0;
		fifty_four.isFilled = true;
		tilemapContainer.add(fifty_four);

		// fifty_five
		const fifty_five = scene.add.rectangle(50, -51, 95, 95);
		fifty_five.name = "fifty_five";
		fifty_five.alpha = 0;
		fifty_five.isFilled = true;
		tilemapContainer.add(fifty_five);

		// fifty_six
		const fifty_six = scene.add.rectangle(-50, -51, 95, 95);
		fifty_six.name = "fifty_six";
		fifty_six.alpha = 0;
		fifty_six.isFilled = true;
		tilemapContainer.add(fifty_six);

		// fifty_seven
		const fifty_seven = scene.add.rectangle(-150, -51, 95, 95);
		fifty_seven.name = "fifty_seven";
		fifty_seven.alpha = 0;
		fifty_seven.isFilled = true;
		tilemapContainer.add(fifty_seven);

		// fifty_eight
		const fifty_eight = scene.add.rectangle(-250, -51, 95, 95);
		fifty_eight.name = "fifty_eight";
		fifty_eight.alpha = 0;
		fifty_eight.isFilled = true;
		tilemapContainer.add(fifty_eight);

		// fifty_nine
		const fifty_nine = scene.add.rectangle(-350, -51, 95, 95);
		fifty_nine.name = "fifty_nine";
		fifty_nine.alpha = 0;
		fifty_nine.isFilled = true;
		tilemapContainer.add(fifty_nine);

		// sixty
		const sixty = scene.add.rectangle(-450, -51, 95, 95);
		sixty.name = "sixty";
		sixty.alpha = 0;
		sixty.isFilled = true;
		tilemapContainer.add(sixty);

		// sixty_one
		const sixty_one = scene.add.rectangle(-450, -150, 95, 95);
		sixty_one.name = "sixty_one";
		sixty_one.alpha = 0.1;
		sixty_one.isFilled = true;
		tilemapContainer.add(sixty_one);

		// sixty_two
		const sixty_two = scene.add.rectangle(-350, -150, 95, 95);
		sixty_two.name = "sixty_two";
		sixty_two.alpha = 0;
		sixty_two.isFilled = true;
		tilemapContainer.add(sixty_two);

		// sixty_three
		const sixty_three = scene.add.rectangle(-250, -150, 95, 95);
		sixty_three.name = "sixty_three";
		sixty_three.alpha = 0;
		sixty_three.isFilled = true;
		tilemapContainer.add(sixty_three);

		// sixty_four
		const sixty_four = scene.add.rectangle(-150, -150, 95, 95);
		sixty_four.name = "sixty_four";
		sixty_four.alpha = 0;
		sixty_four.isFilled = true;
		tilemapContainer.add(sixty_four);

		// sixty_five
		const sixty_five = scene.add.rectangle(-50, -150, 95, 95);
		sixty_five.name = "sixty_five";
		sixty_five.alpha = 0;
		sixty_five.isFilled = true;
		tilemapContainer.add(sixty_five);

		// sixty_six
		const sixty_six = scene.add.rectangle(51, -150, 95, 95);
		sixty_six.name = "sixty_six";
		sixty_six.alpha = 0;
		sixty_six.isFilled = true;
		tilemapContainer.add(sixty_six);

		// sixty_seven
		const sixty_seven = scene.add.rectangle(150, -150, 95, 95);
		sixty_seven.name = "sixty_seven";
		sixty_seven.alpha = 0;
		sixty_seven.isFilled = true;
		tilemapContainer.add(sixty_seven);

		// sixty_eight
		const sixty_eight = scene.add.rectangle(251, -150, 95, 95);
		sixty_eight.name = "sixty_eight";
		sixty_eight.alpha = 0;
		sixty_eight.isFilled = true;
		tilemapContainer.add(sixty_eight);

		// sixty_nine
		const sixty_nine = scene.add.rectangle(351, -149, 95, 95);
		sixty_nine.name = "sixty_nine";
		sixty_nine.alpha = 0;
		sixty_nine.isFilled = true;
		tilemapContainer.add(sixty_nine);

		// seventy
		const seventy = scene.add.rectangle(450, -152, 95, 95);
		seventy.name = "seventy";
		seventy.alpha = 0;
		seventy.isFilled = true;
		tilemapContainer.add(seventy);

		// seventy_one
		const seventy_one = scene.add.rectangle(453, -250, 95, 95);
		seventy_one.name = "seventy_one";
		seventy_one.alpha = 0;
		seventy_one.isFilled = true;
		tilemapContainer.add(seventy_one);

		// seventy_two
		const seventy_two = scene.add.rectangle(350, -249, 95, 95);
		seventy_two.name = "seventy_two";
		seventy_two.alpha = 0;
		seventy_two.isFilled = true;
		tilemapContainer.add(seventy_two);

		// seventy_three
		const seventy_three = scene.add.rectangle(250, -249, 95, 95);
		seventy_three.name = "seventy_three";
		seventy_three.alpha = 0;
		seventy_three.isFilled = true;
		tilemapContainer.add(seventy_three);

		// seventy_four
		const seventy_four = scene.add.rectangle(150, -249, 95, 95);
		seventy_four.name = "seventy_four";
		seventy_four.alpha = 0;
		seventy_four.isFilled = true;
		tilemapContainer.add(seventy_four);

		// seventy_five
		const seventy_five = scene.add.rectangle(50, -249, 95, 95);
		seventy_five.name = "seventy_five";
		seventy_five.alpha = 0;
		seventy_five.isFilled = true;
		tilemapContainer.add(seventy_five);

		// seventy_six
		const seventy_six = scene.add.rectangle(-50, -249, 95, 95);
		seventy_six.name = "seventy_six";
		seventy_six.alpha = 0;
		seventy_six.isFilled = true;
		tilemapContainer.add(seventy_six);

		// seventy_seven
		const seventy_seven = scene.add.rectangle(-150, -249, 95, 95);
		seventy_seven.name = "seventy_seven";
		seventy_seven.alpha = 0;
		seventy_seven.isFilled = true;
		tilemapContainer.add(seventy_seven);

		// seventy_eight
		const seventy_eight = scene.add.rectangle(-250, -249, 95, 95);
		seventy_eight.name = "seventy_eight";
		seventy_eight.alpha = 0;
		seventy_eight.isFilled = true;
		tilemapContainer.add(seventy_eight);

		// seventy_nine
		const seventy_nine = scene.add.rectangle(-350, -249, 95, 95);
		seventy_nine.name = "seventy_nine";
		seventy_nine.alpha = 0;
		seventy_nine.isFilled = true;
		tilemapContainer.add(seventy_nine);

		// eighty
		const eighty = scene.add.rectangle(-450, -249, 95, 95);
		eighty.name = "eighty";
		eighty.alpha = 0;
		eighty.isFilled = true;
		tilemapContainer.add(eighty);

		// eighty_one
		const eighty_one = scene.add.rectangle(-450, -350, 95, 95);
		eighty_one.name = "eighty_one";
		eighty_one.alpha = 0.1;
		eighty_one.isFilled = true;
		tilemapContainer.add(eighty_one);

		// eighty_two
		const eighty_two = scene.add.rectangle(-350, -350, 95, 95);
		eighty_two.name = "eighty_two";
		eighty_two.alpha = 0;
		eighty_two.isFilled = true;
		tilemapContainer.add(eighty_two);

		// eigthy_three
		const eigthy_three = scene.add.rectangle(-250, -350, 95, 95);
		eigthy_three.name = "eigthy_three";
		eigthy_three.alpha = 0;
		eigthy_three.isFilled = true;
		tilemapContainer.add(eigthy_three);

		// eighty_four
		const eighty_four = scene.add.rectangle(-150, -350, 95, 95);
		eighty_four.name = "eighty_four";
		eighty_four.alpha = 0;
		eighty_four.isFilled = true;
		tilemapContainer.add(eighty_four);

		// eighty_five
		const eighty_five = scene.add.rectangle(-50, -350, 95, 95);
		eighty_five.name = "eighty_five";
		eighty_five.alpha = 0;
		eighty_five.isFilled = true;
		tilemapContainer.add(eighty_five);

		// eighty_six
		const eighty_six = scene.add.rectangle(50, -350, 95, 95);
		eighty_six.name = "eighty_six";
		eighty_six.alpha = 0;
		eighty_six.isFilled = true;
		tilemapContainer.add(eighty_six);

		// eighty_seven
		const eighty_seven = scene.add.rectangle(150, -350, 95, 95);
		eighty_seven.name = "eighty_seven";
		eighty_seven.alpha = 0;
		eighty_seven.isFilled = true;
		tilemapContainer.add(eighty_seven);

		// eighty_eight
		const eighty_eight = scene.add.rectangle(250, -350, 95, 95);
		eighty_eight.name = "eighty_eight";
		eighty_eight.alpha = 0;
		eighty_eight.isFilled = true;
		tilemapContainer.add(eighty_eight);

		// eighty_nine
		const eighty_nine = scene.add.rectangle(350, -350, 95, 95);
		eighty_nine.name = "eighty_nine";
		eighty_nine.alpha = 0;
		eighty_nine.isFilled = true;
		tilemapContainer.add(eighty_nine);

		// ninety
		const ninety = scene.add.rectangle(450, -350, 95, 95);
		ninety.name = "ninety";
		ninety.alpha = 0;
		ninety.isFilled = true;
		tilemapContainer.add(ninety);

		// ninety_one
		const ninety_one = scene.add.rectangle(450, -450, 95, 95);
		ninety_one.name = "ninety_one";
		ninety_one.alpha = 0;
		ninety_one.isFilled = true;
		tilemapContainer.add(ninety_one);

		// ninety_two
		const ninety_two = scene.add.rectangle(350, -450, 95, 95);
		ninety_two.name = "ninety_two";
		ninety_two.alpha = 0;
		ninety_two.isFilled = true;
		tilemapContainer.add(ninety_two);

		// ninety_three
		const ninety_three = scene.add.rectangle(250, -450, 95, 95);
		ninety_three.name = "ninety_three";
		ninety_three.alpha = 0;
		ninety_three.isFilled = true;
		tilemapContainer.add(ninety_three);

		// ninety_four
		const ninety_four = scene.add.rectangle(150, -450, 95, 95);
		ninety_four.name = "ninety_four";
		ninety_four.alpha = 0;
		ninety_four.isFilled = true;
		tilemapContainer.add(ninety_four);

		// ninety_five
		const ninety_five = scene.add.rectangle(50, -450, 95, 95);
		ninety_five.name = "ninety_five";
		ninety_five.alpha = 0;
		ninety_five.isFilled = true;
		tilemapContainer.add(ninety_five);

		// ninety_six
		const ninety_six = scene.add.rectangle(-50, -450, 95, 95);
		ninety_six.name = "ninety_six";
		ninety_six.alpha = 0;
		ninety_six.isFilled = true;
		tilemapContainer.add(ninety_six);

		// ninety_seven
		const ninety_seven = scene.add.rectangle(-150, -450, 95, 95);
		ninety_seven.name = "ninety_seven";
		ninety_seven.alpha = 0;
		ninety_seven.isFilled = true;
		tilemapContainer.add(ninety_seven);

		// ninety_eight
		const ninety_eight = scene.add.rectangle(-250, -450, 95, 95);
		ninety_eight.name = "ninety_eight";
		ninety_eight.alpha = 0;
		ninety_eight.isFilled = true;
		tilemapContainer.add(ninety_eight);

		// ninety_nine
		const ninety_nine = scene.add.rectangle(-350, -450, 95, 95);
		ninety_nine.name = "ninety_nine";
		ninety_nine.alpha = 0;
		ninety_nine.isFilled = true;
		tilemapContainer.add(ninety_nine);

		// hundred
		const hundred = scene.add.rectangle(-450, -450, 95, 95);
		hundred.name = "hundred";
		hundred.alpha = 0;
		hundred.isFilled = true;
		tilemapContainer.add(hundred);

		// red_pawn
		const red_pawn = scene.add.image(-405, 562, "red-pawn");
		this.add(red_pawn);

		// green_pawn
		const green_pawn = scene.add.image(-305, 562, "green-pawn");
		this.add(green_pawn);

		this.blue_pawn = blue_pawn;
		this.yellow_pawn = yellow_pawn;
		this.tilemapContainer = tilemapContainer;
		this.one = one;
		this.two = two;
		this.three = three;
		this.four = four;
		this.five = five;
		this.six = six;
		this.seven = seven;
		this.eight = eight;
		this.nine = nine;
		this.ten = ten;
		this.eleven = eleven;
		this.twelve = twelve;
		this.thirteen = thirteen;
		this.fourteen = fourteen;
		this.fifteen = fifteen;
		this.sixteen = sixteen;
		this.seventeen = seventeen;
		this.eighteen = eighteen;
		this.nineteen = nineteen;
		this.twenty = twenty;
		this.twenty_one = twenty_one;
		this.twenty_two = twenty_two;
		this.twenty_three = twenty_three;
		this.twenty_four = twenty_four;
		this.twenty_five = twenty_five;
		this.twenty_six = twenty_six;
		this.twenty_seven = twenty_seven;
		this.twenty_eight = twenty_eight;
		this.twenty_nine = twenty_nine;
		this.thirty = thirty;
		this.thirty_one = thirty_one;
		this.thirty_two = thirty_two;
		this.thirty_three = thirty_three;
		this.thirty_four = thirty_four;
		this.thirty_five = thirty_five;
		this.thirty_six = thirty_six;
		this.thirty_seven = thirty_seven;
		this.thirty_eight = thirty_eight;
		this.thirty_nine = thirty_nine;
		this.forty = forty;
		this.forty_one = forty_one;
		this.forty_two = forty_two;
		this.forty_three = forty_three;
		this.forty_four = forty_four;
		this.forty_five = forty_five;
		this.forty_six = forty_six;
		this.forty_seven = forty_seven;
		this.forty_eight = forty_eight;
		this.forty_nine = forty_nine;
		this.fifty = fifty;
		this.fifty_one = fifty_one;
		this.fifty_two = fifty_two;
		this.fifty_three = fifty_three;
		this.fifty_four = fifty_four;
		this.fifty_five = fifty_five;
		this.fifty_six = fifty_six;
		this.fifty_seven = fifty_seven;
		this.fifty_eight = fifty_eight;
		this.fifty_nine = fifty_nine;
		this.sixty = sixty;
		this.sixty_one = sixty_one;
		this.sixty_two = sixty_two;
		this.sixty_three = sixty_three;
		this.sixty_four = sixty_four;
		this.sixty_five = sixty_five;
		this.sixty_six = sixty_six;
		this.sixty_seven = sixty_seven;
		this.sixty_eight = sixty_eight;
		this.sixty_nine = sixty_nine;
		this.seventy = seventy;
		this.seventy_one = seventy_one;
		this.seventy_two = seventy_two;
		this.seventy_three = seventy_three;
		this.seventy_four = seventy_four;
		this.seventy_five = seventy_five;
		this.seventy_six = seventy_six;
		this.seventy_seven = seventy_seven;
		this.seventy_eight = seventy_eight;
		this.seventy_nine = seventy_nine;
		this.eighty = eighty;
		this.eighty_one = eighty_one;
		this.eighty_two = eighty_two;
		this.eigthy_three = eigthy_three;
		this.eighty_four = eighty_four;
		this.eighty_five = eighty_five;
		this.eighty_six = eighty_six;
		this.eighty_seven = eighty_seven;
		this.eighty_eight = eighty_eight;
		this.eighty_nine = eighty_nine;
		this.ninety = ninety;
		this.ninety_one = ninety_one;
		this.ninety_two = ninety_two;
		this.ninety_three = ninety_three;
		this.ninety_four = ninety_four;
		this.ninety_five = ninety_five;
		this.ninety_six = ninety_six;
		this.ninety_seven = ninety_seven;
		this.ninety_eight = ninety_eight;
		this.ninety_nine = ninety_nine;
		this.hundred = hundred;
		this.red_pawn = red_pawn;
		this.green_pawn = green_pawn;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.oScene = scene;
		// this.finalPosition = 0;
		this.stairs = [
			{ nStart: 4, nEnd: 15 },
			{ nStart: 8, nEnd: 28 },
			{ nStart: 20, nEnd: 63 },
			{ nStart: 30, nEnd: 31 },
			{ nStart: 40, nEnd: 59 },
			{ nStart: 49, nEnd: 67 },
			{ nStart: 61, nEnd: 78 },
			{ nStart: 66, nEnd: 73 },
			{ nStart: 77, nEnd: 94 },
			{ nStart: 80, nEnd: 98 },
			{ nStart: 90, nEnd: 91 },
		];
		this.snakeBites = [
			{ nStart: 28, nEnd: 6, cords: [780, 1200, 770, 1200, 750, 1200, 730, 1350, 600, 1350, 580, 1400] },
			{ nStart: 35, nEnd: 15, cords: [590, 1100, 470, 1150, 460, 1200, 470, 1250, 640, 1250, 640, 1300, 600, 1300] },
			{ nStart: 38, nEnd: 18, cords: [290, 1120, 360, 1150, 360, 1220, 240, 1220, 210, 1250, 230, 1300, 280, 1300] },
			{ nStart: 51, nEnd: 31, cords: [990, 920, 1020, 945, 1020, 1000, 950, 1020, 880, 1020, 880, 1080, 990, 1100] },
			{ nStart: 62, nEnd: 42, cords: [190, 820, 280, 860, 280, 890, 180, 900, 160, 930, 160, 980, 200, 990] },
			{ nStart: 71, nEnd: 48, cords: [990, 720, 900, 740, 930, 780, 980, 780, 980, 840, 890, 790, 800, 820, 750, 920, 800, 1000] },
			{ nStart: 88, nEnd: 76, cords: [790, 620, 720, 620, 780, 660, 780, 700, 700, 720, 660, 640, 600, 620, 500, 700] },
			{ nStart: 93, nEnd: 67, cords: [790, 520, 900, 600, 950, 650, 920, 700, 820, 720, 700, 790] },
			{ nStart: 98, nEnd: 24, cords: [290, 500, 350, 625, 330, 750, 540, 750, 620, 920, 420, 940, 370, 1000, 400, 1100, 400, 1200] },

		]
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	blue_pawn;
	/** @type {Phaser.GameObjects.Image} */
	yellow_pawn;
	/** @type {Phaser.GameObjects.Container} */
	tilemapContainer;
	/** @type {Phaser.GameObjects.Rectangle} */
	one;
	/** @type {Phaser.GameObjects.Rectangle} */
	two;
	/** @type {Phaser.GameObjects.Rectangle} */
	three;
	/** @type {Phaser.GameObjects.Rectangle} */
	four;
	/** @type {Phaser.GameObjects.Rectangle} */
	five;
	/** @type {Phaser.GameObjects.Rectangle} */
	six;
	/** @type {Phaser.GameObjects.Rectangle} */
	seven;
	/** @type {Phaser.GameObjects.Rectangle} */
	eight;
	/** @type {Phaser.GameObjects.Rectangle} */
	nine;
	/** @type {Phaser.GameObjects.Rectangle} */
	ten;
	/** @type {Phaser.GameObjects.Rectangle} */
	eleven;
	/** @type {Phaser.GameObjects.Rectangle} */
	twelve;
	/** @type {Phaser.GameObjects.Rectangle} */
	thirteen;
	/** @type {Phaser.GameObjects.Rectangle} */
	fourteen;
	/** @type {Phaser.GameObjects.Rectangle} */
	fifteen;
	/** @type {Phaser.GameObjects.Rectangle} */
	sixteen;
	/** @type {Phaser.GameObjects.Rectangle} */
	seventeen;
	/** @type {Phaser.GameObjects.Rectangle} */
	eighteen;
	/** @type {Phaser.GameObjects.Rectangle} */
	nineteen;
	/** @type {Phaser.GameObjects.Rectangle} */
	twenty;
	/** @type {Phaser.GameObjects.Rectangle} */
	twenty_one;
	/** @type {Phaser.GameObjects.Rectangle} */
	twenty_two;
	/** @type {Phaser.GameObjects.Rectangle} */
	twenty_three;
	/** @type {Phaser.GameObjects.Rectangle} */
	twenty_four;
	/** @type {Phaser.GameObjects.Rectangle} */
	twenty_five;
	/** @type {Phaser.GameObjects.Rectangle} */
	twenty_six;
	/** @type {Phaser.GameObjects.Rectangle} */
	twenty_seven;
	/** @type {Phaser.GameObjects.Rectangle} */
	twenty_eight;
	/** @type {Phaser.GameObjects.Rectangle} */
	twenty_nine;
	/** @type {Phaser.GameObjects.Rectangle} */
	thirty;
	/** @type {Phaser.GameObjects.Rectangle} */
	thirty_one;
	/** @type {Phaser.GameObjects.Rectangle} */
	thirty_two;
	/** @type {Phaser.GameObjects.Rectangle} */
	thirty_three;
	/** @type {Phaser.GameObjects.Rectangle} */
	thirty_four;
	/** @type {Phaser.GameObjects.Rectangle} */
	thirty_five;
	/** @type {Phaser.GameObjects.Rectangle} */
	thirty_six;
	/** @type {Phaser.GameObjects.Rectangle} */
	thirty_seven;
	/** @type {Phaser.GameObjects.Rectangle} */
	thirty_eight;
	/** @type {Phaser.GameObjects.Rectangle} */
	thirty_nine;
	/** @type {Phaser.GameObjects.Rectangle} */
	forty;
	/** @type {Phaser.GameObjects.Rectangle} */
	forty_one;
	/** @type {Phaser.GameObjects.Rectangle} */
	forty_two;
	/** @type {Phaser.GameObjects.Rectangle} */
	forty_three;
	/** @type {Phaser.GameObjects.Rectangle} */
	forty_four;
	/** @type {Phaser.GameObjects.Rectangle} */
	forty_five;
	/** @type {Phaser.GameObjects.Rectangle} */
	forty_six;
	/** @type {Phaser.GameObjects.Rectangle} */
	forty_seven;
	/** @type {Phaser.GameObjects.Rectangle} */
	forty_eight;
	/** @type {Phaser.GameObjects.Rectangle} */
	forty_nine;
	/** @type {Phaser.GameObjects.Rectangle} */
	fifty;
	/** @type {Phaser.GameObjects.Rectangle} */
	fifty_one;
	/** @type {Phaser.GameObjects.Rectangle} */
	fifty_two;
	/** @type {Phaser.GameObjects.Rectangle} */
	fifty_three;
	/** @type {Phaser.GameObjects.Rectangle} */
	fifty_four;
	/** @type {Phaser.GameObjects.Rectangle} */
	fifty_five;
	/** @type {Phaser.GameObjects.Rectangle} */
	fifty_six;
	/** @type {Phaser.GameObjects.Rectangle} */
	fifty_seven;
	/** @type {Phaser.GameObjects.Rectangle} */
	fifty_eight;
	/** @type {Phaser.GameObjects.Rectangle} */
	fifty_nine;
	/** @type {Phaser.GameObjects.Rectangle} */
	sixty;
	/** @type {Phaser.GameObjects.Rectangle} */
	sixty_one;
	/** @type {Phaser.GameObjects.Rectangle} */
	sixty_two;
	/** @type {Phaser.GameObjects.Rectangle} */
	sixty_three;
	/** @type {Phaser.GameObjects.Rectangle} */
	sixty_four;
	/** @type {Phaser.GameObjects.Rectangle} */
	sixty_five;
	/** @type {Phaser.GameObjects.Rectangle} */
	sixty_six;
	/** @type {Phaser.GameObjects.Rectangle} */
	sixty_seven;
	/** @type {Phaser.GameObjects.Rectangle} */
	sixty_eight;
	/** @type {Phaser.GameObjects.Rectangle} */
	sixty_nine;
	/** @type {Phaser.GameObjects.Rectangle} */
	seventy;
	/** @type {Phaser.GameObjects.Rectangle} */
	seventy_one;
	/** @type {Phaser.GameObjects.Rectangle} */
	seventy_two;
	/** @type {Phaser.GameObjects.Rectangle} */
	seventy_three;
	/** @type {Phaser.GameObjects.Rectangle} */
	seventy_four;
	/** @type {Phaser.GameObjects.Rectangle} */
	seventy_five;
	/** @type {Phaser.GameObjects.Rectangle} */
	seventy_six;
	/** @type {Phaser.GameObjects.Rectangle} */
	seventy_seven;
	/** @type {Phaser.GameObjects.Rectangle} */
	seventy_eight;
	/** @type {Phaser.GameObjects.Rectangle} */
	seventy_nine;
	/** @type {Phaser.GameObjects.Rectangle} */
	eighty;
	/** @type {Phaser.GameObjects.Rectangle} */
	eighty_one;
	/** @type {Phaser.GameObjects.Rectangle} */
	eighty_two;
	/** @type {Phaser.GameObjects.Rectangle} */
	eigthy_three;
	/** @type {Phaser.GameObjects.Rectangle} */
	eighty_four;
	/** @type {Phaser.GameObjects.Rectangle} */
	eighty_five;
	/** @type {Phaser.GameObjects.Rectangle} */
	eighty_six;
	/** @type {Phaser.GameObjects.Rectangle} */
	eighty_seven;
	/** @type {Phaser.GameObjects.Rectangle} */
	eighty_eight;
	/** @type {Phaser.GameObjects.Rectangle} */
	eighty_nine;
	/** @type {Phaser.GameObjects.Rectangle} */
	ninety;
	/** @type {Phaser.GameObjects.Rectangle} */
	ninety_one;
	/** @type {Phaser.GameObjects.Rectangle} */
	ninety_two;
	/** @type {Phaser.GameObjects.Rectangle} */
	ninety_three;
	/** @type {Phaser.GameObjects.Rectangle} */
	ninety_four;
	/** @type {Phaser.GameObjects.Rectangle} */
	ninety_five;
	/** @type {Phaser.GameObjects.Rectangle} */
	ninety_six;
	/** @type {Phaser.GameObjects.Rectangle} */
	ninety_seven;
	/** @type {Phaser.GameObjects.Rectangle} */
	ninety_eight;
	/** @type {Phaser.GameObjects.Rectangle} */
	ninety_nine;
	/** @type {Phaser.GameObjects.Rectangle} */
	hundred;
	/** @type {Phaser.GameObjects.Image} */
	red_pawn;
	/** @type {Phaser.GameObjects.Image} */
	green_pawn;

	/* START-USER-CODE */

	// Write your code here.

	checkStair(nDiceValue, player, currentPositon) {
		for (let i = 0; i < this.stairs.length; i++) {
			if (this.stairs[i].nStart == nDiceValue) {
				// console.log("got stair at ",nDiceValue);
				this.finalPosition[currentPositon] = this.oScene.movePawn(this.stairs[i], player)
				break;
			}
		}
		// console.log(this.finalPosition)	
	}

	snakeBite(nDiceValue, player, currentPosition) {
		for (let i = 0; i < this.snakeBites.length; i++) {
			if (this.snakeBites[i].nStart == nDiceValue) {
				console.log(this.snakeBites[i].cords.length)
				setTimeout(() => {
					console.log(player)
					this.finalPosition[currentPosition] = this.oScene.moveBySnakeBite(this.snakeBites[i], this.snakeBites[i].cords, player, currentPosition);
				}, 3000)
				break;
			}
		}
	}
	finalPosition = [0, 0, 0, 0]
	gameIsOver(currentPosition, nDiceValue) {
		console.log(currentPosition)
		const position = 100 - Number(currentPosition);
		console.log(position, nDiceValue)
		const data = position - nDiceValue
		if (data < 0) {
			return 1;
		}
		else if (data >= 0) {
			return 0;
		}
	}

	winnerPlayer() {
		// console.log(this.blue_pawn.x,this.tilemapContainer.list[this.tilemapContainer.list.length-1].x)
		for (let playerName = 0; playerName < this.scene.players.length; playerName++) {
			if (this[this.scene.players[playerName]].x == this.tilemapContainer.list[this.tilemapContainer.list.length - 1].x && this[this.scene.players[playerName]].y == this.tilemapContainer.list[this.tilemapContainer.list.length - 1].y) {
				setTimeout(()=>{
					this.scene.message_.setText("Player" + (playerName) + " is Win!!!!!");
					this.scene.message_.setVisible(true);
					this.scene.popup_.setVisible(true);
				},2000);
				setTimeout(()=>{
					this.scene.message_.setVisible(false);
					this.scene.popup_.setVisible(false);
				},4000)
			}
		}
	}

	playMove(nDiceValue, player, currentPosition) {
		let skip = 0
		// console.log(currentPosition)
		let s = this.finalPosition[currentPosition];
		let delay = 0;
		const final = this.gameIsOver(s, nDiceValue);

		// console.log(final)
		if (final == 1) {

			skip = 1
		}
		if (skip == 0) {
			// console.log("current position:" + s,player,this[player])
			for (let i = 0; i < nDiceValue; i++) {
				this.scene.tweens.add({
					targets: this[player],
					x: this.tilemapContainer.list[s].x,
					y: this.tilemapContainer.list[s].y,
					ease: "Power3",
					duration: 250,
					delay: delay,
				});
				if (i != nDiceValue) s++;
				delay += 500;
			}
			this.finalPosition[currentPosition] = s
			this.checkStair(s, player, currentPosition)
			this.winnerPlayer()
			this.snakeBite(s, player, currentPosition)
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here