document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.phone-button');
    const led = document.querySelector('.status-led');
    const tapeDeck = document.querySelector('.display-panel');
    const msgCounter = document.getElementById('msg-counter');

    let isPlaying = false;
    let messageCount = 12;

    const counterArt = {
        '12': `
  ___  __ 
 / _ \\/_ |
| | | || |
| |_| || |
 \\___/ |_|
        `,
        '11': `
 __  __ 
/_ |/_ |
 | | | |
 | | | |
 | | | |
        `,
        '10': `
 __   ___  
/_ | / _ \\ 
 | || | | |
 | || |_| |
 | | \\___/ 
        `,
        '09': `
  ___   ___  
 / _ \\ / _ \\ 
| | | | (_) |
| |_| | \\__, |
 \\___/    /_/ 
        `
    };

    const updateCounterDisplay = () => {
        const key = messageCount.toString().padStart(2, '0');
        if (counterArt[key]) {
            msgCounter.textContent = counterArt[key].trim();
        } else {
            msgCounter.textContent = `\n  ${key}\n`;
        }
    };

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const key = btn.getAttribute('data-key');
            console.log(`Button ${key} pressed`);
            
            // Flash LED
            led.classList.add('on');
            setTimeout(() => {
                if (!isPlaying) led.classList.remove('on');
            }, 150);

            handleAction(key);
            updateCounterDisplay();
        });
    });

    function handleAction(key) {
        switch(key) {
            case '1': // PLAY
                startPlayback();
                break;
            case '2': // STOP
                stopPlayback();
                break;
            case '5': // DELETE
                if (messageCount > 0) {
                    messageCount--;
                    // Update counter logic would go here
                }
                break;
            default:
                break;
        }
    }

    const reelsArt = [
        `
   .-------.       .-------.
  /   (_)   \\     /   (_)   \\
 |  _     _  |   |  _     _  |
 | (_)   (_) |---| (_)   (_) |
  \\   (_)   /     \\   (_)   /
   '-------'       '-------'
        `,
        `
   .-------.       .-------.
  /   | |   \\     /   | |   \\
 |  -     -  |   |  -     -  |
 | | |   | | |---| | |   | | |
  \\   | |   /     \\   | |   /
   '-------'       '-------'
        `
    ];

    let reelIndex = 0;
    let reelInterval = null;

    function startPlayback() {
        if (isPlaying) return;
        isPlaying = true;
        led.classList.add('on');
        tapeDeck.classList.add('spinning');
        
        reelInterval = setInterval(() => {
            reelIndex = (reelIndex + 1) % reelsArt.length;
            document.getElementById('tape-reels').textContent = reelsArt[reelIndex].trim();
        }, 300);
        
        console.log("Playback started...");
    }

    function stopPlayback() {
        isPlaying = false;
        led.classList.remove('on');
        tapeDeck.classList.remove('spinning');
        clearInterval(reelInterval);
        document.getElementById('tape-reels').textContent = reelsArt[0].trim();
        console.log("Playback stopped.");
    }
});
