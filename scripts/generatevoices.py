import asyncio
import edge_tts
from pydub import AudioSegment
from pydub.effects import normalize

text_clips = [
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
    "The freckles on my bottom say that",
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
    "a bit of purple fluff, nestled in your belly botton",
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
    "will forbid you talk to Bill the Bongo Bubble Master",
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
    "when Beetlejuice is in Uranus",
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

VOICE = 'en-GB-SoniaNeural'

def speed_change(sound, speed=1.0):
    """Changes speed and pitch of an AudioSegment by altering sample rate."""
    sound_with_altered_frame_rate = sound._spawn(
        sound.raw_data,
        overrides={"frame_rate": int(sound.frame_rate * speed)}
    )
    return sound_with_altered_frame_rate.set_frame_rate(sound.frame_rate)

def apply_scary_voice_filter(audio_segment):
    """Applies pitch drop and cavernous multi-tap echo to make the voice sound eerie."""
    # 1. Pitch Drop / Deepen (0.85 = ~15% slower and deeper)
    scary = speed_change(audio_segment, 0.85)

    # 2. Add Multi-Tap Echo (prepend silence to create delayed layers)
    echo1 = (AudioSegment.silent(duration=100) + scary) - 7   # 100ms delay, 7 dB quieter
    echo2 = (AudioSegment.silent(duration=220) + scary) - 13  # 220ms delay, 13 dB quieter
    echo3 = (AudioSegment.silent(duration=350) + scary) - 18  # 350ms delay, 18 dB quieter

    # Layer echoes over the deep voice
    processed_voice = scary.overlay(echo1).overlay(echo2).overlay(echo3)

    # Normalize volume levels
    return normalize(processed_voice)

async def generate_audio_files(clips):
    generated_files = []

    for idx, item in enumerate(clips):
        filename = f"../src/assets/uncertainfutures/part_{idx + 1}.mp3"

        # Step 1: Save raw TTS
        communicate = edge_tts.Communicate(item, VOICE)
        await communicate.save(filename)

        # Step 2: Apply scary voice filter and overwrite file
        raw_segment = AudioSegment.from_mp3(filename)
        scary_segment = apply_scary_voice_filter(raw_segment)
        scary_segment.export(filename, format="mp3")

        generated_files.append(filename)
        print(f"Generated scary MP3: {filename} ({idx + 1}/85)")

    return generated_files

def concatenate_mp3s(file_list, output_filename="final_speech.mp3", pause_ms=400, bg_music_file=None):
    combined = AudioSegment.empty()
    pause = AudioSegment.silent(duration=pause_ms)

    for file in file_list:
        segment = AudioSegment.from_mp3(file)
        combined += segment + pause

    if bg_music_file:
        bg_music = AudioSegment.from_file(bg_music_file) - 18
        final_audio = bg_music.overlay(combined, loop=True)
        final_audio = final_audio[:len(combined) + 1000].fade_out(1500)
    else:
        final_audio = combined

    final_audio.export(output_filename, format="mp3")
    print(f"\nAll files combined into: {output_filename}")

async def main():
    file_list = await generate_audio_files(text_clips)
    concatenate_mp3s(file_list, output_filename="final_speech.mp3")

asyncio.run(main())