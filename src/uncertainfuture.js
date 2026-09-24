const AUDIO_FILES = {
    1: new URL('./assets/uncertainfutures/part_1.mp3', import.meta.url).toString(),
    2: new URL('./assets/uncertainfutures/part_2.mp3', import.meta.url).toString(),
    3: new URL('./assets/uncertainfutures/part_3.mp3', import.meta.url).toString(),
    4: new URL('./assets/uncertainfutures/part_4.mp3', import.meta.url).toString(),
    5: new URL('./assets/uncertainfutures/part_5.mp3', import.meta.url).toString(),
    6: new URL('./assets/uncertainfutures/part_6.mp3', import.meta.url).toString(),
    7: new URL('./assets/uncertainfutures/part_7.mp3', import.meta.url).toString(),
    8: new URL('./assets/uncertainfutures/part_8.mp3', import.meta.url).toString(),
    9: new URL('./assets/uncertainfutures/part_9.mp3', import.meta.url).toString(),
    10: new URL('./assets/uncertainfutures/part_10.mp3', import.meta.url).toString(),
    11: new URL('./assets/uncertainfutures/part_11.mp3', import.meta.url).toString(),
    12: new URL('./assets/uncertainfutures/part_12.mp3', import.meta.url).toString(),
    13: new URL('./assets/uncertainfutures/part_13.mp3', import.meta.url).toString(),
    14: new URL('./assets/uncertainfutures/part_14.mp3', import.meta.url).toString(),
    15: new URL('./assets/uncertainfutures/part_15.mp3', import.meta.url).toString(),
    16: new URL('./assets/uncertainfutures/part_16.mp3', import.meta.url).toString(),
    17: new URL('./assets/uncertainfutures/part_17.mp3', import.meta.url).toString(),
    18: new URL('./assets/uncertainfutures/part_18.mp3', import.meta.url).toString(),
    19: new URL('./assets/uncertainfutures/part_19.mp3', import.meta.url).toString(),
    20: new URL('./assets/uncertainfutures/part_20.mp3', import.meta.url).toString(),
    21: new URL('./assets/uncertainfutures/part_21.mp3', import.meta.url).toString(),
    22: new URL('./assets/uncertainfutures/part_22.mp3', import.meta.url).toString(),
    23: new URL('./assets/uncertainfutures/part_23.mp3', import.meta.url).toString(),
    24: new URL('./assets/uncertainfutures/part_24.mp3', import.meta.url).toString(),
    25: new URL('./assets/uncertainfutures/part_25.mp3', import.meta.url).toString(),
    26: new URL('./assets/uncertainfutures/part_26.mp3', import.meta.url).toString(),
    27: new URL('./assets/uncertainfutures/part_27.mp3', import.meta.url).toString(),
    28: new URL('./assets/uncertainfutures/part_28.mp3', import.meta.url).toString(),
    29: new URL('./assets/uncertainfutures/part_29.mp3', import.meta.url).toString(),
    30: new URL('./assets/uncertainfutures/part_30.mp3', import.meta.url).toString(),
    31: new URL('./assets/uncertainfutures/part_31.mp3', import.meta.url).toString(),
    32: new URL('./assets/uncertainfutures/part_32.mp3', import.meta.url).toString(),
    33: new URL('./assets/uncertainfutures/part_33.mp3', import.meta.url).toString(),
    34: new URL('./assets/uncertainfutures/part_34.mp3', import.meta.url).toString(),
    35: new URL('./assets/uncertainfutures/part_35.mp3', import.meta.url).toString(),
    36: new URL('./assets/uncertainfutures/part_36.mp3', import.meta.url).toString(),
    37: new URL('./assets/uncertainfutures/part_37.mp3', import.meta.url).toString(),
    38: new URL('./assets/uncertainfutures/part_38.mp3', import.meta.url).toString(),
    39: new URL('./assets/uncertainfutures/part_39.mp3', import.meta.url).toString(),
    40: new URL('./assets/uncertainfutures/part_40.mp3', import.meta.url).toString(),
    41: new URL('./assets/uncertainfutures/part_41.mp3', import.meta.url).toString(),
    42: new URL('./assets/uncertainfutures/part_42.mp3', import.meta.url).toString(),
    43: new URL('./assets/uncertainfutures/part_43.mp3', import.meta.url).toString(),
    44: new URL('./assets/uncertainfutures/part_44.mp3', import.meta.url).toString(),
    45: new URL('./assets/uncertainfutures/part_45.mp3', import.meta.url).toString(),
    46: new URL('./assets/uncertainfutures/part_46.mp3', import.meta.url).toString(),
    47: new URL('./assets/uncertainfutures/part_47.mp3', import.meta.url).toString(),
    48: new URL('./assets/uncertainfutures/part_48.mp3', import.meta.url).toString(),
    49: new URL('./assets/uncertainfutures/part_49.mp3', import.meta.url).toString(),
    50: new URL('./assets/uncertainfutures/part_50.mp3', import.meta.url).toString(),
    51: new URL('./assets/uncertainfutures/part_51.mp3', import.meta.url).toString(),
    52: new URL('./assets/uncertainfutures/part_52.mp3', import.meta.url).toString(),
    53: new URL('./assets/uncertainfutures/part_53.mp3', import.meta.url).toString(),
    54: new URL('./assets/uncertainfutures/part_54.mp3', import.meta.url).toString(),
    55: new URL('./assets/uncertainfutures/part_55.mp3', import.meta.url).toString(),
    56: new URL('./assets/uncertainfutures/part_56.mp3', import.meta.url).toString(),
    57: new URL('./assets/uncertainfutures/part_57.mp3', import.meta.url).toString(),
    58: new URL('./assets/uncertainfutures/part_58.mp3', import.meta.url).toString(),
    59: new URL('./assets/uncertainfutures/part_59.mp3', import.meta.url).toString(),
    60: new URL('./assets/uncertainfutures/part_60.mp3', import.meta.url).toString(),
    61: new URL('./assets/uncertainfutures/part_61.mp3', import.meta.url).toString(),
    62: new URL('./assets/uncertainfutures/part_62.mp3', import.meta.url).toString(),
    63: new URL('./assets/uncertainfutures/part_63.mp3', import.meta.url).toString(),
    64: new URL('./assets/uncertainfutures/part_64.mp3', import.meta.url).toString(),
    65: new URL('./assets/uncertainfutures/part_65.mp3', import.meta.url).toString(),
    66: new URL('./assets/uncertainfutures/part_66.mp3', import.meta.url).toString(),
    67: new URL('./assets/uncertainfutures/part_67.mp3', import.meta.url).toString(),
    68: new URL('./assets/uncertainfutures/part_68.mp3', import.meta.url).toString(),
    69: new URL('./assets/uncertainfutures/part_69.mp3', import.meta.url).toString(),
    70: new URL('./assets/uncertainfutures/part_70.mp3', import.meta.url).toString(),
    71: new URL('./assets/uncertainfutures/part_71.mp3', import.meta.url).toString(),
    72: new URL('./assets/uncertainfutures/part_72.mp3', import.meta.url).toString(),
    73: new URL('./assets/uncertainfutures/part_73.mp3', import.meta.url).toString(),
    74: new URL('./assets/uncertainfutures/part_74.mp3', import.meta.url).toString(),
    75: new URL('./assets/uncertainfutures/part_75.mp3', import.meta.url).toString(),
    76: new URL('./assets/uncertainfutures/part_76.mp3', import.meta.url).toString(),
    77: new URL('./assets/uncertainfutures/part_77.mp3', import.meta.url).toString(),
    78: new URL('./assets/uncertainfutures/part_78.mp3', import.meta.url).toString(),
    79: new URL('./assets/uncertainfutures/part_79.mp3', import.meta.url).toString(),
    80: new URL('./assets/uncertainfutures/part_80.mp3', import.meta.url).toString(),
    81: new URL('./assets/uncertainfutures/part_81.mp3', import.meta.url).toString(),
    82: new URL('./assets/uncertainfutures/part_82.mp3', import.meta.url).toString(),
    83: new URL('./assets/uncertainfutures/part_83.mp3', import.meta.url).toString(),
    84: new URL('./assets/uncertainfutures/part_84.mp3', import.meta.url).toString(),
    85: new URL('./assets/uncertainfutures/part_85.mp3', import.meta.url).toString()
};

const form = document.getElementById("fortuneForm");
const dobInput = document.getElementById("dob");
const sphere = document.getElementById("sphere");
const mist = document.getElementById("mist");
const fortuneEl = document.getElementById("fortune");

// Audio setup
const audioPlayer = new Audio();
const bgMusic = new Audio(new URL('./assets/uncertainfutures/bgmusic.mp3', import.meta.url).toString());
bgMusic.loop = true;

let bgMusicTimeout = null;
let bgMusicFadeInterval = null;

const INITIAL_BG_VOLUME = 0.25;

function startBgMusic() {
    clearTimeout(bgMusicTimeout);
    clearInterval(bgMusicFadeInterval);

    bgMusic.volume = INITIAL_BG_VOLUME;
    bgMusic.play().catch(e => console.warn("Background music play blocked by browser", e));
}

function stopBgMusicWith5SecDelay() {
    clearTimeout(bgMusicTimeout);
    clearInterval(bgMusicFadeInterval);

    const fadeDuration = 5000; // 5 seconds fade out
    const startVolume = bgMusic.volume;
    const steps = 50;
    const stepTime = fadeDuration / steps;
    const volumeStep = startVolume / steps;

    bgMusicFadeInterval = setInterval(() => {
        if (bgMusic.volume - volumeStep > 0) {
            bgMusic.volume -= volumeStep;
        } else {
            bgMusic.volume = 0;
            bgMusic.pause();
            bgMusic.currentTime = 0;
            clearInterval(bgMusicFadeInterval);
        }
    }, stepTime);
}

// Don't allow future dates
dobInput.max = new Date().toISOString().split("T")[0];

const CATEGORIES = {
    "opening": [
        "The stars reveal that",
        "The ancient spirits whisper that",
        "Your destiny suggests that",
        "The cosmic forces indicate that",
        "I sense that",
        "The crystal ball has revealed that",
        "The universe has decided that",
        "A mysterious voice tells me that",
        "The alignment of the planets suggests that",
        "The tea leaves insist that",
        "The squirrel of doom predicts that",
        "A discarded piece of chewing gum that has been trodden on every day for most of its life wants to tell you that",
        "By the power of Leighton the Buzzard has decreed that",
        "Denise and Da Nephew prophesise that",
        "Pew, Pew, Barney, McGrew, Cuthbert, Dibble and Grub have decided that",
        "A bubble in the bath told me that",
        "The freckles on my bottom say that"
    ],
    "subject": [
        "a surprisingly confident pigeon",
        "your left sock",
        "a mysterious stranger",
        "an unusually large duck",
        "your neighbour's cat",
        "a suspiciously shiny potato",
        "a forgotten sandwich",
        "a person carrying three umbrellas",
        "a very judgemental squirrel",
        "a rogue garden gnome",
        "an emotionally complicated seagull",
        "a small but determined penguin",
        "your kettle",
        "a man called Dave",
        "a mysterious wheelie bin",
        "the eels in the hovercraft",
        "a bit of purple fluff, nestled in your belly botton"
    ],
    "action": [
        "will change your life",
        "will bring you unexpected fortune",
        "will demand an explanation",
        "will reveal a secret you already knew",
        "will become strangely important",
        "will lead you into an adventure",
        "will offer you an opportunity you probably shouldn't take",
        "will turn up exactly when you need it",
        "will challenge your understanding of reality",
        "will somehow become your responsibility",
        "will ask you a deeply philosophical question",
        "will cause mild confusion",
        "will become involved in your finances",
        "will appear in a place where it definitely shouldn't be",
        "will give you a chance to win an illudium Q-36 explosive sound modulator",
        "will force you to eat 5 globs of semi fossilised cro-magnon toe jam",
        "will forbid you talk to Bill the Bongo Bubble Master"
    ],
    "time": [
        "before Thursday",
        "within seven days",
        "after lunch",
        "when the moon is full",
        "sometime next week",
        "at exactly 3:17pm",
        "before the end of the month",
        "when you least expect it",
        "during your next cup of tea",
        "on a day ending in 'y'",
        "before you find your keys",
        "very, very soon",
        "the day after you meet a man called Dave",
        "at the next full moon",
        "when a crow sings 'Rule Britannia' while perched on the roof of the town hall",
        "when you find soggy vegetables in the compartment at the bottom of the fridge",
        "when Beetlejuice is in Uranus"
    ],
    "advice": [
        "Do not ignore the signs.",
        "Trust your instincts. Unless they involve pigeons.",
        "Proceed with caution and bring snacks.",
        "Ask questions, but not too many.",
        "Keep an open mind and a closed fridge.",
        "You already know what you must do.",
        "Do not make eye contact with the duck.",
        "Take the opportunity. It may not come with instructions.",
        "Remember: fortune favours the unnecessarily prepared.",
        "The universe is not responsible for what happens next.",
        "Wear sensible shoes.",
        "Most importantly, don't mention the cheese.",
        "Please slide to the right, slide to the left and quickstep real fast.",
        "Whatever you do, don't think about penguins",
        "Take the path less trodden. We need the grass to grow back.",
        "Dance like no one is watching you",
        "Stay Dry! You will only ever get eaten by a shark if you get wet."
    ]
};

function seededRandom(seed) {
    let a = seed >>> 0;
    return function () {
        a |= 0;
        a = (a + 0x6d2b79f5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

function hashDate(dateStr) {
    const digits = dateStr.replace(/-/g, "").split("").map(Number);
    return digits.reduce((acc, d) => acc * 31 + d, 7) >>> 0;
}

function readFortune(dateStr) {
    const rand = seededRandom(hashDate(dateStr));

    const pickWithAudio = (arr, offset) => {
        const idx = Math.floor(rand() * arr.length);
        const fileNum = offset + idx + 1;
        return {
            text: arr[idx],
            audio: AUDIO_FILES[fileNum]
        };
    };

    return {
        opening: pickWithAudio(CATEGORIES.opening, 0),
        subject: pickWithAudio(CATEGORIES.subject, 17),
        action: pickWithAudio(CATEGORIES.action, 34),
        time: pickWithAudio(CATEGORIES.time, 51),
        advice: pickWithAudio(CATEGORIES.advice, 68)
    };
}

function reveal(fortune) {
    fortuneEl.textContent = "";
    sphere.classList.remove("revealed");
    mist.classList.remove("swirl");

    void sphere.offsetWidth;

    sphere.classList.add("revealed");
    mist.classList.add("swirl");

    startBgMusic();

    const lines = [
        fortune.opening,
        fortune.subject,
        fortune.action,
        fortune.time,
        fortune.advice
    ];

    const playlist = lines.map(item => item.audio);
    let currentAudioIndex = 0;
    audioPlayer.pause();

    function playNextAudio() {
        if (currentAudioIndex < playlist.length) {
            audioPlayer.src = playlist[currentAudioIndex];
            currentAudioIndex++;
            audioPlayer.play().catch(e => console.warn("Voice audio play blocked", e));
        } else {
            stopBgMusicWith5SecDelay();
        }
    }

    audioPlayer.onended = playNextAudio;
    playNextAudio();

    lines.forEach((item, i) => {
        setTimeout(() => {
            const p = document.createElement("p");
            p.className = "line";
            const strong = document.createElement("strong");
            strong.textContent = " ";
            p.appendChild(strong);
            p.appendChild(document.createTextNode(item.text));
            fortuneEl.appendChild(p);
            fortuneEl.scrollTop = fortuneEl.scrollHeight;
        }, 900 + i * 1100);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const dob = dobInput.value;
    if (!dob) return;
    reveal(readFortune(dob));
});

function createStars() {
    const container = document.querySelector(".stars");
    const count = 140;
    for (let i = 0; i < count; i++) {
        const star = document.createElement("span");
        star.className = "star";
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        const size = Math.random() * 2 + 1;
        star.style.width = size + "px";
        star.style.height = size + "px";
        star.style.animationDelay = Math.random() * 4 + "s";
        star.style.animationDuration = Math.random() * 3 + 2 + "s";
        container.appendChild(star);
    }
}

createStars();