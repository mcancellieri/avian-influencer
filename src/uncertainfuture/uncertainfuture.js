

const form = document.getElementById("fortuneForm");
const dobInput = document.getElementById("dob");
const sphere = document.getElementById("sphere");
const mist = document.getElementById("mist");
const fortuneEl = document.getElementById("fortune");

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

// Deterministic PRNG (mulberry32) so the same birthday always gets the same fortune
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
    const pick = (arr) => arr[Math.floor(rand() * arr.length)];
    return {
        opening: pick(CATEGORIES.opening),
        subject: pick(CATEGORIES.subject),
        action: pick(CATEGORIES.action),
        time: pick(CATEGORIES.time),
        advice: pick(CATEGORIES.advice)
    };
}

function reveal(fortune) {
    fortuneEl.textContent = "";
    sphere.classList.remove("revealed");
    mist.classList.remove("swirl");

    // Force reflow so the animations restart cleanly
    void sphere.offsetWidth;

    sphere.classList.add("revealed");
    mist.classList.add("swirl");

    const lines = [
        ["opening", fortune.opening],
        ["subject", fortune.subject],
        ["action", fortune.action],
        ["time", fortune.time],
        ["advice", fortune.advice]
    ];

    lines.forEach(([label, text], i) => {
        setTimeout(() => {
            const p = document.createElement("p");
            p.className = "line";
            const strong = document.createElement("strong");
            strong.textContent = " ";
            p.appendChild(strong);
            p.appendChild(document.createTextNode(text));
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

// Twinkling starfield
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
