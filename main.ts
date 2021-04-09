let score = 0
basic.showString("START")
for (let index = 0; index <= 5; index++) {
    if (index == 0) {
        music.setVolume(90)
        music.setTempo(117)
        music.playTone(370, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(277, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(277, music.beat(BeatFraction.Whole))
        music.playTone(277, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(277, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(415, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Whole))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Double))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.playTone(554, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.playTone(494, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Whole))
        music.playTone(277, music.beat(BeatFraction.Double))
        while (true) {
            basic.showString("1ST")
            if (input.buttonIsPressed(Button.A)) {
                score += 2
                music.stopMelody(MelodyStopOptions.All)
                break;
            }
            if (input.logoIsPressed()) {
                score += 0
                music.stopMelody(MelodyStopOptions.All)
                break;
            }
            if (input.buttonIsPressed(Button.B)) {
                score += -1
                music.stopMelody(MelodyStopOptions.All)
                break;
            }
        }
    }
    if (index == 1) {
        music.setTempo(117)
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Double))
        music.rest(music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(466, music.beat(BeatFraction.Whole))
        music.playTone(466, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Double))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Double))
        music.rest(music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Half))
        while (true) {
            basic.showString("2ND")
            if (input.buttonIsPressed(Button.A)) {
                score += 2
                music.stopMelody(MelodyStopOptions.All)
                break;
            }
            if (input.logoIsPressed()) {
                score += 0
                music.stopMelody(MelodyStopOptions.All)
                break;
            }
            if (input.buttonIsPressed(Button.B)) {
                score += -1
                music.stopMelody(MelodyStopOptions.All)
                break;
            }
        }
    }
    if (index == 2) {
        music.setTempo(174)
        music.playTone(277, music.beat(BeatFraction.Half))
        music.playTone(233, music.beat(BeatFraction.Half))
        music.playTone(277, music.beat(BeatFraction.Whole))
        music.playTone(277, music.beat(BeatFraction.Half))
        music.playTone(277, music.beat(BeatFraction.Half))
        music.playTone(311, music.beat(BeatFraction.Half))
        music.playTone(277, music.beat(BeatFraction.Half))
        music.playTone(233, music.beat(BeatFraction.Whole))
        music.playTone(233, music.beat(BeatFraction.Half))
        music.playTone(277, music.beat(BeatFraction.Half))
        music.playTone(233, music.beat(BeatFraction.Whole))
        music.playTone(233, music.beat(BeatFraction.Half))
        music.playTone(277, music.beat(BeatFraction.Half))
        music.playTone(233, music.beat(BeatFraction.Whole))
        music.playTone(233, music.beat(BeatFraction.Half))
        music.playTone(277, music.beat(BeatFraction.Whole))
        music.playTone(277, music.beat(BeatFraction.Sixteenth))
        music.rest(music.beat(BeatFraction.Whole))
        music.playTone(277, music.beat(BeatFraction.Whole))
        music.playTone(277, music.beat(BeatFraction.Sixteenth))
        music.rest(music.beat(BeatFraction.Whole))
        music.playTone(277, music.beat(BeatFraction.Whole))
        music.playTone(277, music.beat(BeatFraction.Sixteenth))
        music.rest(music.beat(BeatFraction.Double))
        music.playTone(277, music.beat(BeatFraction.Whole))
        music.playTone(277, music.beat(BeatFraction.Half))
        music.playTone(277, music.beat(BeatFraction.Half))
        music.playTone(311, music.beat(BeatFraction.Half))
        music.playTone(277, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(277, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(277, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(277, music.beat(BeatFraction.Whole))
        music.playTone(277, music.beat(BeatFraction.Sixteenth))
        music.rest(music.beat(BeatFraction.Whole))
        music.playTone(277, music.beat(BeatFraction.Whole))
        music.playTone(277, music.beat(BeatFraction.Sixteenth))
        music.rest(music.beat(BeatFraction.Whole))
        music.playTone(277, music.beat(BeatFraction.Whole))
        music.playTone(277, music.beat(BeatFraction.Sixteenth))
        while (true) {
            basic.showString("3RD")
            if (input.buttonIsPressed(Button.A)) {
                score += 2
                music.stopMelody(MelodyStopOptions.All)
                break;
            }
            if (input.logoIsPressed()) {
                score += 0
                music.stopMelody(MelodyStopOptions.All)
                break;
            }
            if (input.buttonIsPressed(Button.B)) {
                score += -1
                music.stopMelody(MelodyStopOptions.All)
                break;
            }
        }
    }
    if (index == 3) {
        music.setTempo(130)
        music.playTone(277, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(277, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Eighth))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(370, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Double))
        music.playTone(277, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(277, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Eighth))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(370, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(277, music.beat(BeatFraction.Whole))
        while (true) {
            basic.showString("4TH")
            if (input.buttonIsPressed(Button.A)) {
                score += 2
                music.stopMelody(MelodyStopOptions.All)
                break;
            }
            if (input.logoIsPressed()) {
                score += 0
                music.stopMelody(MelodyStopOptions.All)
                break;
            }
            if (input.buttonIsPressed(Button.B)) {
                score += -1
                music.stopMelody(MelodyStopOptions.All)
                break;
            }
        }
    }
    if (index == 4) {
        music.setTempo(58)
        music.playTone(698, music.beat(BeatFraction.Eighth))
        music.playTone(587, music.beat(BeatFraction.Eighth))
        music.playTone(523, music.beat(BeatFraction.Eighth))
        music.playTone(587, music.beat(BeatFraction.Eighth))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(698, music.beat(BeatFraction.Eighth))
        music.playTone(587, music.beat(BeatFraction.Eighth))
        music.playTone(523, music.beat(BeatFraction.Eighth))
        music.playTone(587, music.beat(BeatFraction.Eighth))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(698, music.beat(BeatFraction.Eighth))
        music.playTone(587, music.beat(BeatFraction.Eighth))
        music.playTone(523, music.beat(BeatFraction.Eighth))
        music.playTone(587, music.beat(BeatFraction.Eighth))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(698, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(698, music.beat(BeatFraction.Eighth))
        music.playTone(659, music.beat(BeatFraction.Eighth))
        music.playTone(587, music.beat(BeatFraction.Eighth))
        music.playTone(523, music.beat(BeatFraction.Eighth))
        music.playTone(587, music.beat(BeatFraction.Half))
        while (true) {
            basic.showString("5TH")
            if (input.buttonIsPressed(Button.A)) {
                score += 2
                music.stopMelody(MelodyStopOptions.All)
                break;
            }
            if (input.logoIsPressed()) {
                score += 0
                music.stopMelody(MelodyStopOptions.All)
                break;
            }
            if (input.buttonIsPressed(Button.B)) {
                score += -1
                music.stopMelody(MelodyStopOptions.All)
                break;
            }
        }
    }
    if (index == 5) {
        music.setTempo(76)
        music.playTone(554, music.beat(BeatFraction.Whole))
        music.playTone(698, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Double))
        music.rest(music.beat(BeatFraction.Whole))
        music.playTone(622, music.beat(BeatFraction.Whole))
        music.playTone(554, music.beat(BeatFraction.Half))
        music.playTone(466, music.beat(BeatFraction.Whole))
        music.playTone(554, music.beat(BeatFraction.Whole))
        music.playTone(554, music.beat(BeatFraction.Sixteenth))
        music.playTone(698, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Double))
        music.rest(music.beat(BeatFraction.Whole))
        music.playTone(622, music.beat(BeatFraction.Whole))
        music.playTone(554, music.beat(BeatFraction.Half))
        music.playTone(698, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(554, music.beat(BeatFraction.Whole))
        music.playTone(698, music.beat(BeatFraction.Whole))
        music.playTone(831, music.beat(BeatFraction.Half))
        music.playTone(622, music.beat(BeatFraction.Whole))
        music.playTone(554, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(622, music.beat(BeatFraction.Whole))
        music.playTone(622, music.beat(BeatFraction.Half))
        music.playTone(698, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(554, music.beat(BeatFraction.Whole))
        music.playTone(698, music.beat(BeatFraction.Whole))
        music.playTone(622, music.beat(BeatFraction.Half))
        music.playTone(740, music.beat(BeatFraction.Whole))
        music.playTone(698, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(466, music.beat(BeatFraction.Whole))
        while (true) {
            basic.showString("6TH")
            if (input.buttonIsPressed(Button.A)) {
                score += 2
                music.stopMelody(MelodyStopOptions.All)
                break;
            }
            if (input.logoIsPressed()) {
                score += 0
                music.stopMelody(MelodyStopOptions.All)
                break;
            }
            if (input.buttonIsPressed(Button.B)) {
                score += -1
                music.stopMelody(MelodyStopOptions.All)
                break;
            }
        }
    }
    basic.showNumber(score)
}
