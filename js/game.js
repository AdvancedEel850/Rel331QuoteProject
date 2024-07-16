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
"\“Be careful how you characterize yourself. Don\’t characterize or define yourself by some temporary quality. The only single quality that should characterize us is that we are a son or daughter of God. That fact transcends all other characteristics, including race, occupation, physical characteristics, honors, or even religious affiliation\” (Dallin H. Oaks, \“How to Define Yourself,\” New Era, June 2013, 48).",
"\“Let there be no question in your mind about your value as an individual. The whole intent of the gospel plan is to provide an opportunity for each of you to reach your fullest potential, which is eternal progression and the possibility of godhood\” (Spencer W. Kimball, \“Privileges and Responsibilities of Sisters,\” Ensign, Nov. 1978, 105).",
"\“It is important to note that there is a difference between fitting in and belonging. Brené Brown, an American researcher and author, observed: \“Fitting in and belonging are not the same thing. In fact, fitting in is one of the greatest barriers to belonging. Fitting in is about assessing a situation and becoming who you need to be in order to be accepted. Belonging, on the other hand, doesn\’t require us to change who we are; it requires us to be who we are.\”(How Divine Identity Affects Belonging and Becoming, Elder John C. Pingree Jr., March 2023)",
"\“You are a child of God. He is the Father of your spirit. Spiritually you are of noble birth, the offspring of the King of Heaven. Fix that truth in your mind and hold to it\” (Boyd K. Packer, \“To Young Women and Men,\” Ensign, May 1989, 54).",
"\“We cannot gauge the worth of another soul any more than we can measure the span of the universe. Every person we meet is a VIP to our Heavenly Father. Once we understand that, we can begin to understand how we should treat our fellowmen\” (Dieter F. Uchtdorf, \“You Are My Hands,\” Ensign or Liahona, May 2010, 69).",
"\“First, we accept Him as our Savior and Redeemer. We recognize God\’s greatness, our lost and fallen state, and our absolute dependence on Jesus Christ to be saved. We desire to be known by His name (see Mosiah 5:7–8) and want to be His disciples \“all the remainder of our days\” (Mosiah 5:5). (How Divine Identity Affects Belonging and Becoming, Elder John C. Pingree Jr., March 2023)",
"\“When we make and strive to keep sacred covenants with God, we begin to experience a sense of belonging greater than can be achieved through affiliation with any earthly or temporal group.5 We \“are no more strangers and foreigners, but fellowcitizens with the saints, and of the household of God\” (Ephesians 2:19).\”(How Divine Identity Affects Belonging and Becoming, Elder John C. Pingree Jr., March 2023)",
"\“I eventually find myself copying the same 13 words, rewriting them over and over and over. But they aren\’t the frustrated words I had planned. They\’re quite different. \‘I am a disciple of Jesus Christ. I can forgive. I can love.\’\”(Eli Dial, Remembering My Divine Identity When I Needed to Most, November 2022)",
"Summary: \"Even when we feel the most alone, the most worthless, we should always remember that we are not only a disciple of Christ, but a Child of God.\"",

"The Power of Jesus Christ and Your Covenants",
"\"We do not come to the temple to hide from or escape the evils of the world. Rather, we come to the temple to conquer the world of evil.\"(Let This House be Built unto My Name, David A. Bednar, general conference, April 2020)",
"\"There exists a righteous unity between the temple and the home. Understanding the eternal nature of the temple will draw you to your family; understanding the eternal nature of the family will draw you to the temple.\"(\“Sacred Homes, Sacred Temples\”, Gary E. Stevenson, General Conference, April 2009)",
"\“I have a suggestion: When a temple is conveniently nearby, small things may interrupt your plans to go to the temple. Set specific goals, considering your circumstances, of when you can and will participate in temple ordinances. Then do not allow anything to interfere with that plan.\”(President Thomas S. Monson, \“Until We Meet Again,\” Ensign, May 2009, 113)",
"\“Temples are places of personal revelation. When I have been weighed down by a problem or a difficulty, I have gone to the House of the Lord with a prayer in my heart for answers. These answers have come in clear and unmistakable ways.\”(President Ezra Taft Benson, \“What I Hope You Will Teach Your Children about the Temple,\” Ensign, Aug. 1985, 8)",
"\"The temple is concerned with things of immortality.\” (Gordon B Hinckley, Teachings of Presidents, Chapter 23, Teachings of Gordon B. Hinckley)",
"Elder Neal A. Maxwell explained: \“Clearly, when we baptize, our eyes should gaze beyond the baptismal font to the holy temple. The great garner into which the sheaves should be gathered is the holy temple\” (in John L. Hart, \“Make Calling Focus of Your Mission,\” Church News, Sept. 17, 1994, 4)",
"\"My brothers and sisters, temples are more than stone and mortar. They are filled with faith and fasting. They are built of trials and testimonies. They are sanctified by sacrifice and service.\"(The Holy Temple-a Beacon to the World, President Thomas S. Monson, General Conference, April 2011)",
"\"Within the sound of my voice are many young women, young men, and children. I plead with you to be worthy, to be steadfast, and to look forward with great anticipation to the day you will receive the ordinances and blessings of the temple.\"(Honorably Hold a Name and Standing, David A. Bednar, General Conference, April 2009)",
"President Russell M. Nelson reminded us that: \“Each holy temple stands as a symbol of our membership in the Church, as a sign of our faith in life after death, and as a sacred step toward eternal glory for us and our families\” (\“Personal Preparation for Temple Blessings,\” Ensign, May 2001, 32).",
"Gordon B. Hinckley (1910\–2008):\“If we are a temple-going people, we will be a better people, we will be better fathers and husbands, we will be better wives and mothers. I know your lives are busy. I know that you have much to do. But I make you a promise that if you will go to the house of the Lord, you will be blessed, life will be better for you\” (\“Excerpts from Recent Addresses of President Gordon B. Hinckley,\” Ensign, July 1997, 73).",
"Summary: \"Temples are some of the most important places we can go. So long as we are worthy, there are many great blessings we can receive from the temple. The more we go, the more blessings we will receive, and the closer we will be to Christ.\"",

"Let God Prevail and Follow His Prophet",
"\“Brothers and sisters, from the bottom of my heart, I testify that the prophets speak by the power of the Holy Spirit. They testify of Christ and His divine mission on earth.\” (Prophets Speak by the Power of the Holy Spirit, Ulisses Soares, General Conference, April 2018)",
"\“A prophet does not stand between you and the Savior. Rather, he stands beside you and points the way to the Savior.\” (The Prophet of God, Neil L. Andersen, General Conference, April 2018)",
"\“Oh, if we could only learn this lesson and look to his living prophet on earth! In this day and time, following the living prophet is the only way that we can follow the Lord God and do his will. You can\’t do it by quoting the dead prophets or ignoring or throwing rocks at the living prophets. Following the prophet today, President [Russell M. Nelson]*, is the only real safety we can know in this time of decay.\”(President Hartman Rector Jr., \“Live above the Law to Be Free\” Ensign January 1973)",
"\“We are too often afraid of what is called blind obedience, but obedience to God is always right — blind or otherwise.\”(Elder Eldred G. Smith Patriarch to the Church, Conference Report, October 1970 Page 16)",
"\“In the days ahead there will be times when nothing but the wisdom of God, descending from heaven and flowing forth from prophetic lips, will be able to save his people.\”(Elder Bruce R. McConkie, A New Witness for the Articles of Faith, Deseret Book Company, 1985)",
"\“If we choose to set his counsel aside and determine that we know better, our faith suffers and our eternal perspective is clouded. I promise you that as you remain resolute in following the prophet, your faith in the Savior will increase.\”(Elder Neil L. Andersen, \“The Prophet of God\” General Conference April 2018)",
"\“The learned may feel the prophet is only inspired when he agrees with them, otherwise the prophet is just giving his opinion—speaking as a man.\”(President Ezra Taft Benson, Fourteen Fundamentals in Following the Prophet, Ensign, June 1981)",
"\“When we begin to choose which of the covenants, which of the commandments we will keep and follow, we are taking the law of the Lord into our own hands and become our own prophets, and believe me, we will be led astray, because we are false prophets to ourselves when we do not follow the Prophet of God.\”(President N. Eldon Tanner, CR, October 1966, p. 98.)",
"\“I remember years ago when I was a bishop I had President Heber J. Grant talk to our ward. After the meeting I drove him home … Standing by me, he put his arm over my shoulder and said: \‘My boy, you always keep your eye on the President of the Church and if he ever tells you to do anything, and it is wrong, and you do it, the Lord will bless you for it.\’ Then with a twinkle in his eye, he said, \‘But you don\’t need to worry. The Lord will never let his mouthpiece lead the people astray.\’\”(President Marion G. Romney, Conference Report, October 1960, p. 78.)",
"\“As a prophet reveals the truth it divides the people. The honest in heart heed his words but the unrighteous either ignore the prophet or fight him.\”(President Ezra Taft Benson, Fourteen Fundamentals in Following the Prophet, Ensign, June 1981)",
"Summary: \"We should always follow the prophet. We should know that they speak the truth, through the power of the Holy Spirit.\"",

"Teaching Truth with Love",
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
"Summary: ",

"Take Charge of Your Testimony",
"\“We should remember that bearing a heartfelt testimony is only a beginning. We need to bear testimony, we need to mean it, and most importantly we need consistently to live it. We need to both declare and live our testimonies.\” (More Diligent and Concerned at Home, David A. Bednar, General Conference, October 2009)",
"\“a testimony needs to be kept vital and alive through continued obedience to the commandments of God and through daily prayer and scripture study.\” (The Power of the Book of Mormon, President Thomas S. Monson, General Conference, April 2017)",
"\“Building a testimony on the foundation of a sincere, personal relationship with our Heavenly Father and His Beloved Son, Jesus Christ, and on our faith in them, should be our highest priority.\” (Spiritual Bonfires of Testimony, Joseph B. Wirthlin, General Conference, October 1992)",
"\“My beloved brothers and sisters, I promise that as you more fully understand what a testimony is, and as you share it, you will overcome obstacles of uncertainty and fear, enabling you to nurture and keep this most precious possession, your testimony.\” (Nourishing and Bearing Your Testimony, Gary E. Stevenson, General Conference, October 2022)",
"\“regardless of how many times you previously may have read the Book of Mormon, there will come into your lives and into your homes an added measure of the Spirit of the Lord, a strengthened resolution to walk in obedience to His commandments, and a stronger testimony of the living reality of the Son of God.\” (A Testimony Vibrant and True, President Gordon B. Hinckley, August 2005)",
"\“Revelation and testimony do not always come with overwhelming force. For many, a testimony comes slowly—a piece at a time.\” (\“Your Potential, Your Privilege\”, Dieter F. Uchtdorf, General Conference, April 2011)",
"\“Seeking for and obtaining a testimony of spiritual truth requires asking, seeking, and knocking.\”(Converted unto the Lord, David A. Bednar, General Conference, October 2012)",
"\“Some people speak of a testimony as if it were a light switch- it\’s either on or off; you either have a testimony or you do not. In reality, a testimony is more like a tree that passes through various stages of growth and development.\”(Craig C. Christensen)",
"\“Seeking for and obtaining a testimony of spiritual truth requires asking, seeking, and knocking.\”(David A. Bednar)",
"\“Your testimony in Jesus Christ isn\’t just what you say – it\’s who you are.\”(Gary E. Stevenson)",
"Summary: \"Our testimony is not a light switch. It is something that is very gradual. We should slowly build up our testimony as we use and develop it through experiences and actions. Our testimony needs to be kept alive and working as we continue to use it every day.",

"Marriage and Family",
"\“President Dieter F. Uchtdorf said, \‘In family relationships love is really spelled t-i-m-e, time.\’ Whether family members get together for scheduled outings, sharing interests, or serving others, these gatherings strengthen relationships that can be eternal.\” (T-I-M-E Spells Love, Breanna Olaveson, Church Magazine, July 2021)",
"\“Family time is sacred time and should be protected and respected.\”(And a Little Child Shall Lead Them, Boyd K. Packer, General Conference, April 2012)",
"\“It is more important than ever to make our families the center of our lives and the top of our priorities.\” ( The Importance of the Family, L. Tom Perry, General Conference, April 2003)",
"\“The ultimate treasures on earth and in heaven are our children.\”(The Great Plan of Happiness, Dallin H. Oaks, General Conference, October 1993)",
"\“That divine nature comes as a gift from Him with a love that only a parent can feel.\” (Discovering the Divinity Within, Rosemary M. Wixom, General Conference, October 2015)",
"\“Tenderness and respect—never selfishness—must be the guiding principles in the intimate relationship between husband and wife.\”(Howard W. Hunter)",
"\“I want my life and my marriage to look less like the world and more like Christ.\”(Marquis Clarke)",
"\“If you want something to last forever, you treat it differently. You shield it and protect it. You never abuse it. You don\’t expose it to the elements. You don\’t make it common or ordinary. If it ever becomes tarnished, you lovingly polish it until it gleams like new. It becomes special because you have made it so, and it grows more beautiful and precious as time goes by.\”(F. Burton Howard)",
"\“Marriage, in its truest sense, is a partnership of equals, with neither exercising dominion over the other, but, rather, with each encouraging and assisting the other in whatever responsibilities and aspirations he or she might have.\”(Gordon B. Hinckley)",
"\“A home with a loving and loyal husband and wife is the supreme setting in which children can be reared in love and righteousness and in which the spiritual and physical needs of children can be met.\”(David A. Bednar)",
"Summary: ",

"Faith",
"\"Abandoning our faith because it doesn\'t answer all the questions would be like closing the shutters because we can\'t see the entire mountain.\"(Fiona Givens,The Crucible of Doubt: Reflections On the Quest for Faith)",
"\"Hope gives us courage to do those things that we don\'t believe we are capable of.\"(Noelle Pikus-Pace, Focused)",
"\"Hope on. Journey on. Honestly acknowledge your questions and your concerns, but first and forever fan the flame of your faith, because all things are possible to them that believe.\"(Jeffrey R. Holland, April 2013 general conference)",
"\"Faith is both a principle of action and of power.\"(Marcus B. Nash, October 2012 general conference)",
"\“When problems come and questions arise, do not start your quest for faith by saying how much you do not have, leading as it were with your \"unbelief.\" That is like trying to stuff a turkey through the break!\"(Jeffrey R. Holland,To My Friends: Messages of Counsel and Comfort)",
"\"Like the intense fire that transforms iron into steel, as we remain faithful during the fiery trial of our faith, we are spiritually refined and strengthened.\"(Neil L. Andersen, October 2012 general conference)",
"\"There are times when we have to step into the darkness in faith, confident that God will place solid ground beneath our feet once we do.\"(Dieter F. Uchtdorf, April 2012 general conference)",
"\"Trusting in God\'s will is central to our mortality. With faith in Him, we draw upon the power of Christ\'s Atonement at those times when questions abound and answers are few.\"(Ronald A. Rasband, April 2012 general conference)",
"\“He knows we believe in Him because He hears us. Prayer is proof of our faith.\”(Patricia Holland, \“Walking on the Water\”)",
"\“He did not choose to elaborate or explain but left that indelible message: have the simple faith to follow the Brethren.\”(James E. Faust, \“An Untroubled Faith\”)",
"Summary: ",

"Personal Topic - No Quotes to share"];

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


