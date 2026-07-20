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
        '1': { name: 'Pigeon', text: 'I used to carry secret messages across the front lines. Now I just hang out near the subway for crumbs.', img: 'https://images.unsplash.com/photo-1514823197305-16c58a8ef756?w=200&h=200&fit=crop', audio: new URL('./assets/birdiebirdie.mp3', import.meta.url).toString()},
        '2': { name: 'Owl', text: 'Everyone thinks I am wise. Honestly, I just have very large eyes and a high neck rotation.', img: 'https://images.unsplash.com/photo-1543549732-230fe5d83c4c?w=200&h=200&fit=crop', audio: new URL('./assets/dodo.mp3', import.meta.url).toString() },
        '3': { name: 'Duck', text: 'The pond is fine, but have you ever tried a heated pool? Absolute game changer.', img: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=200&h=200&fit=crop', audio: new URL('./assets/londonpigeon.mp3', import.meta.url).toString() },
        '4': { name: 'Chick', text: 'I just got here. Why is everything so big? And why do people keep making high-pitched noises at me?', img: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=200&h=200&fit=crop', audio: new URL('./assets/sheepship.mp3', import.meta.url).toString() },
        '5': { name: 'Swan', text: 'Elegant? Yes. But if you come near my nest, I will remind you that I am basically a dinosaur in a fancy suit.', img: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=200&h=200&fit=crop', audio: new URL('./assets/birdiebirdie.mp3', import.meta.url).toString() },
        '6': { name: 'Raven', text: 'Nevermore? More like "Whatevermore". I am actually quite optimistic for a bird.', img: 'https://images.unsplash.com/photo-1445108771252-d1cc31a02a3c?w=200&h=200&fit=crop', audio: new URL('./assets/birdiebirdie.mp3', import.meta.url).toString() },
        '7': { name: 'Eagle', text: 'The view from up here is incredible. But finding a decent parking spot for a nest? Nightmare.', img: 'https://images.unsplash.com/photo-1481137344492-d5a0bb92f972?w=200&h=200&fit=crop', audio: new URL('./assets/birdiebirdie.mp3', import.meta.url).toString() },
        '8': { name: 'Parrot', text: 'I can speak three languages and I still get paid in sunflower seeds. My agent is a bird-brain.', img: 'https://images.unsplash.com/photo-1522858547137-f1dcec554f55?w=200&h=200&fit=crop', audio: new URL('./assets/birdiebirdie.mp3', import.meta.url).toString() },
        '9': { name: 'Avian Influenza', text: 'A collective of bird-inspired lunatics. Matteo Cancellieri, Tony Gee, David Pride', audio: new URL('./assets/birdiebirdie.mp3', import.meta.url).toString() },

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
