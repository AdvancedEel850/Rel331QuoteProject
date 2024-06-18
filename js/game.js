const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");



canvas.width = innerWidth -30;
canvas.height = innerHeight - 10;
canvas.style.position = 'center';


const parsedCollisions = collisionsLevel1.parse2D()

const collisionBlocks = parsedCollisions.createObjectsFrom2D()

function generateRandom(min = 0, max = 100) {

    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor( rand * difference);

    // add with min value 
    rand = rand + min;

    return rand;
}

let quote_quotes = ["Our Divine Identity", 
"\“...no matter what our circumstances are, it is essential that our preeminent identity is as a child of God.\”(I Am a Child of God, Donald L. Hallstrom, General Conference, April 2016)",
"\“It is not asking too much, is it, to take a few minutes of each day to speak with your Father in Heaven when you know that you are a child of God?\”(You Are a Child of God, President Gordon B. Hinckley, General Conference, April 2003)",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"10",

"The Power of Jesus Christ and Your Covenants",
"\"We do not come to the temple to hide from or escape the evils of the world. Rather, we come to the temple to conquer the world of evil.\"(Let This House be Built unto My Name, David A. Bednar, general conference, April 2020)",
"\"There exists a righteous unity between the temple and the home. Understanding the eternal nature of the temple will draw you to your family; understanding the eternal nature of the family will draw you to the temple.\"(\“Sacred Homes, Sacred Temples\”, Gary E. Stevenson, General Conference, April 2009)",
"\“I have a suggestion: When a temple is conveniently nearby, small things may interrupt your plans to go to the temple. Set specific goals, considering your circumstances, of when you can and will participate in temple ordinances. Then do not allow anything to interfere with that plan.\”(President Thomas S. Monson, \“Until We Meet Again,\” Ensign, May 2009, 113)",
"\“Temples are places of personal revelation. When I have been weighed down by a problem or a difficulty, I have gone to the House of the Lord with a prayer in my heart for answers. These answers have come in clear and unmistakable ways.\”(President Ezra Taft Benson, \“What I Hope You Will Teach Your Children about the Temple,\” Ensign, Aug. 1985, 8)",
"5",
"6",
"7",
"8",
"9",
"10",

"Subject3",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"10",

"Subject4",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"10",

"Subject5",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"10",

"Subject6",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"10",

"Subject7",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"10",

"Personal Topic - No Quotes to share"];

let reference_references = ["Reference"];

const background = new Sprite({
    position: {
    x:0,
    y:0,
    }, 

imageSrc: "./img/map.png"

})
const player = new Player({
    collisionBlocks, 
    imageSrc: './img/king/idle.png',
    frameRate: 11,
    animations: {
        idleRight: {
            frameRate: 11,
            frameBuffer: 6,
            loop: true,
            imageSrc: './img/king/idle.png'
        },
        idleLeft: {
            frameRate: 11,
            frameBuffer: 6,
            loop: true,
            imageSrc: './img/king/idleLeft.png'
        },
        runRight: {
            frameRate: 8,
            frameBuffer: 8,
            loop: true,
            imageSrc: './img/king/runRight.png'
        },
        runLeft: {
            frameRate: 8,
            frameBuffer: 8,
            loop: true,
            imageSrc: './img/king/runLeft.png'
        }
    }
})

const quotes = new Quote({
    quotesToUse: quote_quotes,
    quoteindex: 0
})

function animate(){
    window.requestAnimationFrame(animate);
    ctx.fillStyle = 'Black'
    ctx.fillRect(0,0,canvas.width, canvas.height)


    background.draw()
    collisionBlocks.forEach(collisionBlock =>{
        collisionBlock.draw()
    })
    
    player.draw()
    player.update()

    quotes.display()

}

var popup = document.querySelector("#startPopup")
var startGameButton = document.querySelector("#startGame")

animate()


