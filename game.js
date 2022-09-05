const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: `The fallen leaves tell a story.
    The great Elden Ring was shattered.
    In our home, across the fog, the Lands Between.
    Now, Queen Marika the Eternal is nowhere to be found,
    and in the Night of the Black Knives, Godwyn the Golden was the first to perish.
    Soon, Marika's offspring, demigods all, claimed the shards of the Elden Ring.
    The mad taint of their newfound strength triggered the Shattering.
    A war from which no lord arose.
    A war leading to abandonment by the Greater Will.
    Arise now, ye Tarnished.
    Ye dead, who yet live.
    The call of long-lost grace speaks to us all.`,
    options: [
      {
        text: 'Cross the fog, to the Lands Between',
        setState: { tarnishedFinger: false },
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: `You venture forth through the thick fog in search of answers. You feel cold, a cold you've never felt before. 
    At this instant you've regained your senses.
    A dim light shines through small window, you can barely make out shapes of a wooden gate before you.`,
    options: [
      {
        text: 'Go for the gates, no mere wood can hold your might.',
       
        nextText: 3
      },
      
    ]
  },
  {
    id: 3,
    text: `Once you're close enough a sudden reek comes through your nose. >What a stench..< you think to yourself, followed by your intuition you've scanned room for any potential threats.
    Nothing. But there is some human-like shape laying on the floor.`,
    options: [
      {
        text: 'Open the gates.',
        nextText: 4
      },
      {
        text: 'Check out that shape, maybe there is loot?',
        nextText: 5
      },
    ]
  },
  {
    id: 4,
    text: `You put your hands on the wooden gate, through your leather gloves you can make out carved out shape of a tree. With all your might you push on the doors.
    Nothing. It's closed shut.`,
    options: [
      {
        text: `Back off to check out that body, something's fishy here`,
        nextText: 5
      }
    ]
  },
  {
    id: 5,
    text: `Your intuiton didn't fooled you, you are a seasoned warrior afterall, you've seen your share of battles afterall... But this, this was no battle
    it was kill for the thirll of enjoyment. You can see on the ground laying lifeless body of a young maiden, she is dressed in a long brown robe.
    Her throat is slit from ear to ear, her pretty empty eyes are locked onto some piece of paper. Her shoes are missing`,
    options: [
      {
        text: 'Pick up a note.',
        nextText: 6
      }
    ]
  },
  {
    id: 6,
    text: `You've picked up a crumbled piece of paper, clearly this poor sould has bit off her own finger to write this message.
    It was for you.
    >Dear tarnished, as mine life is leaving mine corporal agent, as mine last crave for thou, please take this finger of mine and seek out Elden Ring, causes our orb whole again. 
    'I might  not be with thou through thy travels  yet  'I receive  thou achieve none else can.  Prithee  receive   'I  yourself, please be safe.  'I  Marika we trust.  Thy forsooth Fingermaiden<`,
    options: [
      {
        text: 'Fulfill that poor soul last request. Pick up that finger and try once more that gate.',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: `You've put your hands on wooden gate, you feel strage vibrating energy from carved out tree. It resonates with the finger you have stashed in your bag.
    Slowly gates are opening, first light is blinding, but soon you can see clearly. It is a beutiful day, in the distance there are a massive castle.
    >Whom hast that castle?< You think that to yourself, but in an instant, a golden ray of light burst from a gargantuan tree. A golden leaves dance around you, you can feel
    the warmth coming from them, you can feel it is calling for you, you want it's power, you NEED it's power...`,
    options: [
      {
        text: 'Try to orientate yourself in this strange new world of yours.',
        nextText: 8
      },
    ]
  },
  {
    id: 8,
    text: `There is only one way really, on your left there are stairs made of out old wooden planks, barely holding together.
    In the distance you can clearly see a makeshift bridge and a stone portal.`,
    options: [
      {
        text: 'Go through the bridge',
        nextText: 9
      }
    ]
  },
  {
    id: 9,
    text: `You foolishly ran through the bridge, obviously ignoring old age of this contraption, just when you have stepped out of last plank the ropes could not hold much longer and the bridge collapsed, there is no turning back now.
    But on the other hand, you have your old trusty sabres, at least you're not defensless.
    You are standing before old stone wall and a portal, on both sides there are statues of hooded man with swords, you noticed that left warrior lacks head and left hand.`,
    options: [
      {
        text: 'Ready yourself and go thorugh portal',
        nextText: 10
      }
    ]
  },
  {
    id: 10,
    text: `You have cautiously stepped through portal, suddenly you've felt a gelid gust of wind. Right before you stands a statue of the most beautiful maiden you've ever seen in your very long life.
    Her arms streches out like someone who is ready to embrace the world and you in it. You feel her warmth even standing there, realising it is just a stone statue.`,
    options: [
      {
        text: 'Embrace love of Marika',
        nextText: 11
      }
    ]
  },
  {
    id: 11,
    text: `As you made one more step bewitched by beauty of the statue, you've noticed in last moment a big shadow coming down behind fair maiden. 
    Ground beneath your soles shook tremendously. A grotesque beast shows up, a mindless beast with a face of a young woman, with... arms and legs grafted together.
    What a sight, what a odd beast, who would do something like this? A madman? You think to yourself, but there is no time to think, a foul beast unsheaths her two swords and a golden shield.
    In the corner of your eye you've spotted a bridge behind monster. Monstriosity launches herself in the air, shierks and plunges towrads you.`,
    options: [
      {
        text: 'I AM A RHYFELWR! I SHALL NO RUN FROM MY ENEMY!',
        nextText: 12
      },
      {
        text: `Dodge plunge attack and roll towards bridge`,
        nextText: 13
      }
    ]
  },
  {
    id: 12,
    text: `As soon as you've seen foul beast move, you've readied yourself. You might be old but you're no fool. This grafted scion shrieks, a sudden pain in your ears, a high pitch tone rings, you feel dizzy.
    In last moment your trained body moved on its own, >Not yet oldman< you though to yourself. A mere moment after monster landed you've counter attacked with your both sabres. A one swift attack to the back of this grotesque beast, from left to right.
    Just right through that beast spine. Like your master taught you. You've felt a slight push back as your blades cut though bones of grafted arms of men and women.
    You are a warrior all right, but you've never felt disguist like that. A high pitched shierk rang in your ears once more, the best fealt that pain of your blades.
    Beast is readying her swords once more and she looks behind her shield.`,
    options: [
        {
            text: 'Parry this filthy casual and power stance her to death',
            nextText: 14
        },
        {
            text: `Dodge and scram for the gates, fuck this monster!`,
            nextText: 13
        }
    ]
},
{
    id: 13,
    text: `Just mere seconds before enemy blades were close enough to your face to be a real threat you dodge rolled out of the way, just like your old master thought you.
    A one swift move, from roll to full time sprint you bolted thorugh same old bridge. You're safe you thought. Just as you tried to cross this damned portal a strange golden wall shimmers,
    you can't go past it yet. You can hear whispers in your head saying that you're not ready yet to move on, you need to best yourself at your weakest, defeat that monster. Be better.
    You can feel a sudden feel of cold on your back, a painful three stabs between your shoulders. You can't scream, there is no more air in your lungs. You feel gold and hot blades stabbing you mercilessly.
    >Ah, Elden Ring< Your last thoughts before your body crumbles to dust.`,
    options: [
        {
            text: 'Embrace love of Marika',
            nextText: -1
        },
    ]
},
{
    id: 14,
    text: `Scion readied herself. Your keen eyes seen right through her, you parried mindless beast first attack, then second and cheeky third, one more dodge of her shield bash, you're on fire, your body remembers, it moves on it's own.
    You are so light, and fast, you've started to push her back, an storm of attacks some might say, but not you, nay, you know excatly what are you doing. Cold and calculated attacks, mixed with jumping attacks just right after you dodge roll under belly of the beast.
    One more parry, two more parries, sparks from your own blades and blades of the beast are mixing with golden magic, it is a spectacle, but not for you. You are dancing with the dead, with the grafted maidens, fellow soldiers and children.
    A blind rage struck your nerve, you cannot stop and you won't stop. Her grafted arms starts to fall off, one by one, her young face is twisted with pain, every blow you struck you feel on your blades.
    The beast fell. You are victorious.`,
    options: [
        {
            text: 'Pick up swords and great shield',
            nextText: 15
        },   
    ]
},
{
    id: 15,
    text: `After a firce battle, broken and exhausted you decide to stroll on your way thorugh the bridge, you thank Marika for her guidance.
    Finally after short break you decide to go through portal. You've made it to the end of the road.`,
    options: [
        {
            text: 'Embrace love of Marika',
            nextText: -1
        },   
    ]
},
]

startGame()