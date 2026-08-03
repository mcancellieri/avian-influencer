document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.phone-button');
    const displayArea = document.getElementById('main-display');
    const storyDisplay = document.getElementById('story-display');
    const storyText = document.getElementById('story-text');
    const birdImage = document.getElementById('bird-image');
    const closeBtn = document.getElementById('close-story');
    const audioPlayer = document.getElementById('audio-player');
    const progress = document.getElementById('progress');
    const timeDisplay = document.getElementById('time-display');
    const pigeonBox = document.querySelector('.pigeon-box');
    const coinSlot = document.querySelector('.coin-slot-unit');
    const coinReturn = document.querySelector('.coin-return');

    // Coin Animation Logic
    coinSlot.addEventListener('click', () => {
        if (document.querySelector('.falling-coin')) return; // Prevent spamming

        const coin = document.createElement('div');
        coin.className = 'falling-coin';
        coin.textContent = 'O';
        displayArea.appendChild(coin);

        // Remove coin after animation
        setTimeout(() => {
            coin.remove();
        }, 1000);

        // Knock down pigeon when coin hits (approx 0.5s into animation)
        setTimeout(() => {
            pigeonBox.classList.add('knocked');
            setTimeout(() => {
                pigeonBox.classList.remove('knocked');
            }, 800);
        }, 400);
    });

    // Coin Return Animation (Tray)
    coinReturn.addEventListener('click', () => {
        if (document.querySelector('.return-coin')) return;

        const coin = document.createElement('div');
        coin.className = 'return-coin';
        coin.textContent = 'O';
        displayArea.appendChild(coin);

        setTimeout(() => coin.remove(), 800);

        // Pigeon squish effort
        pigeonBox.classList.add('return-squish');
        setTimeout(() => {
            pigeonBox.classList.remove('return-squish');
        }, 600);
    });

    const stories = {
        '1': { name: 'Tracey', text: 'They say I’m a small package with a big personality, draped in beautiful blue feathers. I\'m an acrobatic performer, and it\'s no secret that I just loooooove nuts. I am utterly impossible to ignore, on a slow day my favorite move is the ‘upside down on a pole’ It always works. Are you paying attention yet?', img: new URL('./assets/tracey.png', import.meta.url).toString(), audio: new URL('./assets/bluetittracey.mp3', import.meta.url).toString()},
        '2': { name: 'Gilly', text: 'I take anything... and I mean anything. Chips, ice cream, entire sandwiches right out of your hands. I\'m completely unstoppable, and impossible to resist. Fair warning, though: don\'t make eye contact. You won\'t stand a chance.', img: new URL('./assets/gilly.png', import.meta.url).toString(), audio: new URL('./assets/GillySeagull.mp3', import.meta.url).toString()},
        '3': { name: 'Monty', text: 'I love shiny things... and my eyes are wiiiiiiiide open. I am a jewellery enthusiast, a professional collector of beautiful treasures. Once I lay my hands on something precious, I have zero intention of ever giving it back. Are you ready for me? Dare you show me your crown jewels?', img: new URL('./assets/monty.png', import.meta.url).toString(), audio: new URL('./assets/MontyMagpie.mp3', import.meta.url).toString()},
        '4': { name: 'Vera', text: 'I\'ll wait …. and I’ll wait ….. Until ….... Well you know. I have excellent timing, you see. (sqwaaak) I like things rich, complex, and ……. matured. There is no need to rush. I am very patient, and the sweetest things are always worth the wait.', img: new URL('./assets/vera.png', import.meta.url).toString(), audio: new URL('./assets/VeraVulture.mp3', import.meta.url).toString()},
        '5': { name: 'Donny', text: '"Sorry... you\'ve just missed him."\n', img: "a", audio: new URL('./assets/donnydodo.mp3', import.meta.url).toString()},
        '6': { name: 'Monique', text: 'Bonjour mon ami ca va I am Monique, Mo-nique, look at me i am doing  the thing with my plume, voila ... my feathers are green and orange, magnificient manteinant, I require an Homme who likes the va va voom, flamboyant exits and sensational spinning round, oh la la, I will give you a lemon twist, every 5 minute, while shouting "Regardez-moi, dans les yeux, tout alors!", I can not afford to work for free, c\'est la vie, qui, qua, au revoir.",   ', img: "a", audio: new URL('./assets/MoniquePeacock.mp3', import.meta.url).toString()},
        '7': { name: 'Oscar', text: 'Who? I am Oscar. A mature night owl, a quiet, attentive listener, and a wise beyond my feathers. I thrive in the deep hours of the night. And yes... I can rotate my head nearly all the way round. I can watch you, and adore you, from absolutely any angle.', img: "a", audio: new URL('./assets/OscarOwl.mp3', import.meta.url).toString()},
        '8': { name: 'Peter', text: 'Ice, Ice baby... keeping it cool is just what I do. I’I dress to impress — nothing but tuxedos and jimmy Choos for me. I am a deeply loyal partner, and I walk with a swagger so natural you\'d swear I was John Wayne. Well, do you feel lucky punk? If so, come a little closer… my 44 is going to  to keep you warm baby.', img: "a", audio: new URL('./assets/PeterPenguin.mp3', import.meta.url).toString()},
        '9': { name: 'Ray', text: 'I’m Dark. Mysterious. I already know your secrets. I am highly intelligent, delightfully gothic, and I laugh at funerals just foor the thrill. You can try to hide from me, but I can see right through you. Speak... I\'m listening.', img: "a", audio: new URL('./assets/RayMcRavenface.mp3', import.meta.url).toString()},
        '0': { name: 'Avian Influencer', text: 'I’m Dark. Mysterious. I already know your secrets. I am highly intelligent, delightfully gothic, and I laugh at funerals just foor the thrill. You can try to hide from me, but I can see right through you. Speak... I\'m listening.', img: "a", audio: new URL('./assets/RayMcRavenface.mp3', import.meta.url).toString()},
        '*': { name: 'ArtBox', text: 'I’m Dark. Mysterious. I already know your secrets. I am highly intelligent, delightfully gothic, and I laugh at funerals just foor the thrill. You can try to hide from me, but I can see right through you. Speak... I\'m listening.', img: "a", audio: new URL('./assets/RayMcRavenface.mp3', import.meta.url).toString()},
        '#': { name: 'Singalong', text: 'I’m Dark. Mysterious. I already know your secrets. I am highly intelligent, delightfully gothic, and I laugh at funerals just foor the thrill. You can try to hide from me, but I can see right through you. Speak... I\'m listening.', img: "a", audio: new URL('./assets/RayMcRavenface.mp3', import.meta.url).toString()},
        'intro': { name: 'Singalong', text: 'I’m Dark. Mysterious. I already know your secrets. I am highly intelligent, delightfully gothic, and I laugh at funerals just foor the thrill. You can try to hide from me, but I can see right through you. Speak... I\'m listening.', img: "a", audio: new URL('./assets/hotbirdintro.mp3', import.meta.url).toString()},

    };

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const key = btn.getAttribute('data-key');
            if (stories[key]) showStory(key);
        });
    });

    function showStory(key) {
        const story = stories[key];

        // Audio
        audioPlayer.src = story.audio;
        audioPlayer.play().catch(e => console.warn("Play blocked", e));

        // Display
        storyText.textContent = story.text;
        birdImage.style.backgroundImage = `url(${story.img})`;

        pigeonBox.classList.add('hidden');
        storyDisplay.classList.remove('hidden');
        displayArea.classList.add('spinning');
    }

    audioPlayer.addEventListener('timeupdate', () => {
        const pct = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progress.style.width = `${pct}%`;
        const mins = Math.floor(audioPlayer.currentTime / 60);
        const secs = Math.floor(audioPlayer.currentTime % 60).toString().padStart(2, '0');
        timeDisplay.textContent = `${mins}:${secs}`;
    });

    closeBtn.addEventListener('click', () => {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        storyDisplay.classList.add('hidden');
        pigeonBox.classList.remove('hidden');
        displayArea.classList.remove('spinning');
    });

    audioPlayer.addEventListener('ended', () => {
        displayArea.classList.remove('spinning');
    });
});
