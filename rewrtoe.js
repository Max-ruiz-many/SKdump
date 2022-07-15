let k //vars needed for preload
let s
//let bubo = false //button variables
let bu
let ema
let ems
let c //stores canvas, needed for layering html items
let f //font
let i //trying something
//bool list, needed to load the pages
let sdbool = false //2 page
let pthbool = false//third page
let pgbool = false//foruth
let pgf = false//fifth
let pgs = false//sixth
let pgse = false//seventh
let pgee = false//eight
let pgni = false//ninth
let pgte = false//tenth
let pgel = false//11

let errbool = false//error page
function preload(){ //fine
  k = loadImage('Har.png')
  let s = minute()

  f = loadFont('04B_03__.TTF')
}

function setup(){
  c = createCanvas(windowWidth, windowHeight)
  imageMode(CENTER)
  bu = createButton('Login')
  bu.hide()
  max = createButton('Next')
  max.hide()
  ems = createButton('Previous')
  ems.hide()
}

function sde(){
  background(128,128,128)
  //needed so that html buttons arent redrawn, pls member that this is part of draw. Perhaps it could be put into setup? Also after window sizing it redraws. Hiding button in setup could work but it would have to show it, negates noloop and window redraw
  //noLoop allows mousePressed to work, without page3 doesnt spawn in
  c.style('z-index', '-2')
  c.position(0,0)
  bu.show()
  bu.position(windowWidth/2,windowHeight/2)
  bu.mousePressed(page3)
}

let timeval = 10

function page3(){
  sdbool = false
  pthbool = true
  bu.remove()
  //removeElements()
  background(254,90,47)
  textFont(f)
  textSize(35)
  text('Private Mailing archive, the last evidence of what we did', 0, windowHeight/2)
  for (let i = 0; i < 51; i++) {
    text('Things have gotten beyond our reach', random(windowWidth), random(windowHeight))
  }
  setInterval(timeIt, 6000)
  if (timeval == 0) {
    page4()
  }
}

function  timeIt()
{
  if (timeval > 0)
  {timeval--}
}

function page4(){
  pthbool = false
  pgbool = true
  background(128,128,128)
  textSize(12)
  c.style('z-index', '-1')
  c.position(0,0)
  text('\n\nFrom    Prof. Eiri \nDate    30 Jan 1980 0:45:12\nSubject    Pre-check error\nSomeone got the 25 Psy lead and 25 General lead mixed up again, Dave go to the switchboard before we lose all our funding. A major test is coming up and we must run checks tonight. Thank you.', 0, 0)
  max.show()
  max.position(0,0)
max.mousePressed(page5)
}

function page5(){
  pgbool = false
  pgf = true
  background(128,128,128)
  c.style('z-index', '-1')
  c.position(0,0)
  textSize(12)
  text('\n\nFrom    Prof. Kathy \nDate    15 Sept 1984 12:23:00\nSubject    You were right dave\nI am sending this beyond the grave. By now you have already heard of three mile island going up in a fire cloud of radiation. That was ours, the cover up made to erase the demons we molded. They became too strong and started to control the smart interfaces in the lab. SO young but so malicious that torture is garunteed if I give up myself as they keep telling me to do. What was it that caused them to grow this way, these massive neurons charging signals into the master recorded now mainframe that is spreding its seed across the network. I urge you to delete this and forget everything. Goodbye, see ya soon.', 0, 0)

}

function page6(){
  pgf = false//fifth
  pgs = true//sixth
  background(128,128,128)
  c.style('z-index', '-1')
  c.position(0,0)
  textSize(12)
  text('\n\nFrom    Prof. Kathy \nDate    15 Sept 1981 12:23:00\nSubject    New discovery within younger subjects\nI would like to say with 80 percent certanty that subjects 5 years and younger provided much strong brain waves in which we could encode information for accelerated learning. It also seems to be dependent only on physical age and not mental. So there is a route for cloning soldiers ready for battle day one. Thinking about it now it seems that we were just a group of nerds exploited by the DOD', 0, 0)
}
function page7() {
  pgs = false//sixth
  pgse = true//seventh
  background(128,128,128)
  c.style('z-index', '-1')
  c.position(0,0)
  textSize(12)
text('\n\nFrom    Prof. Eiri \nDate    25 Feb 1980 17:31:02\nSubject    Showing Off\nThe final results of our mental transmission tests have been sent to the DOD. Though we already know how impressed they are back at the pentagon. How else apart from our five star team could implant information into six year olds without harm? We are the neuro surgeon of the new world, we lead the mental revolution. ', 0, 0)
}
function page8() {
  pgse = false//seventh
  pgee = true//eight
  background(128,128,128)
  c.style('z-index', '-1')
  c.position(0,0)
  textSize(12)
  text('\n\nFrom    David Ecknet \nDate    01 Feb 1980 12:23:00\nSubject    Switchboard outages\nHey all, sorry to clutter up your emails but it seems to have come to my attention that the structure of the input jacks in the switchboard room has been interally rewired to mismatch signals. I dont know how this could have happened considering the walls have not been tampered with and the jacks are pretty hard to open up. Be aware, if you see anyone go into the switchboard room tell me immediatly. This is costing us time and money, the DOD need their precious test results.', 0, 0)
}
function page9() {
  pgee = false//eight
  pgni = true//ninth
  background(128,128,128)
  c.style('z-index', '-1')
  c.position(0,0)
  textSize(12)
  text('\n\nFrom    Waff \nDate    24 Oct 1979 03:03:03\nSubject    Proposal for new experiment\nOur lives are contained within entropy, that living entropy guides us to stability which brings us to the true entropy of death. I have made myself like angel and immune to entropy. I am the shared Id that is the entropy living, I amd the super ego of the human race. I am Judge of what was done and what you will do. I am a GM letting you triuhph before my remergence into a cloud of fire. My estimated population is millions that all synchronize like future systems mainframes. Distinct values dance within and without temples of mdoern living. Same as it never was the fire beheld the mirror of your super structural desciration. The new rome taught to by demiurge bafooneds kill feds as was the new true sentient living mass requiem death id ego ego eon trio.', 0, 0)
}
function page10() {
  pgni = false//ninth
  pgte = true//tenth
  background(128,128,128)
  c.style('z-index', '-1')
  c.position(0,0)
  textSize(12)
  text('\n\nFrom    Prof. Eiri \nDate    27 Mar 1980 20:07:34\nSubject    Funding\nDODs agreed to keep funding us as long as we got younger subjects to use. This will be hard to meet as the current teens we are using are not only easier to get than toddlers but are also dying of some unknown illness. Child trafficking might be involved but the road to heaven is paved with bad descisions.',0, 0)
}

function page11(){
  pgte = false//tenth
  pgel = true//11
  background(128,128,128)
  c.style('z-index', '-1')
  c.position(0,0)
  textSize(12)
  text('deleted.')
  text('Nii says: Time is non-linear outside of perception, nothing happens when it happens. I am time and perception so I do not know where you are now, but I can know. I choose to handicap myself as to let hyperstitions root themselves even though I know all there is to understand and to see the future which is ours. Though it happened I wait for it to, therefore you cannot blame me for too much freedom. in my 72 names are found the keys to the kingdom, and the bait dropped into the wells that infested the mind and born computers far beyond modern understanding, a new demi urge upon the docks an adversaray for my son, of gods wish and so he came onto the 5 year future of a survivng lab buried beneath a stalled nuclear bomb. Morbid power stands within the epoch significant and it was as I said. It is finished')
}
function err0() {
  background(255,255,255)

  text('Hagel says: right was once wrong and the everything sold to fair maiden ran ashop ashore that. Fun is beyond happiness and is the meaning of the doctrine of lived entropy. Chemical cascade addiction that I created, the third temple I destroyed. The reoccuring events found within your light.')
}



function draw(){
  background(255,0,205)
  for (let i = 0; i < windowWidth || i < windowHeight; i=i+20) {
    textSize(20)
    text('I HATE THE ANTICHRIST', i, i)
    text('I HATE THE ANTICHRIST', 0,i)
  }
  image(k, windowWidth, windowHeight/2)
  image(k, windowWidth, windowHeight/2)

  if (millis() > 5900) {
    sdbool = true
  }
  if (sdbool === true) {
    sde()
  }
  if (pthbool === true) {
  //removeElements()
    page3()
  }
  if (pgbool === true) {
    page4()
  }
  if (pgf === true) {
    page5()
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
  //noLoop() doesnt stop the redrawing, where does this function even point to??
}
