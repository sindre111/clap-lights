input.onSound(DetectedSound.Loud, function () {
    lys_på = !(lys_på)
    if (lys_på) {
        basic.showString("hei trinie")
        basic.pause(200)
        basic.showString("hvordan går det?")
    } else {
        basic.clearScreen()
    }
})
let lys_på = false
input.setSoundThreshold(SoundThreshold.Loud, 170)
