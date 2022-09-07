input.onButtonPressed(Button.A, function () {
    music.setVolume(0)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (input.temperature()))
})
input.onButtonPressed(Button.B, function () {
    music.setVolume(255)
})
music.playSoundEffect(music.createSoundEffect(
WaveShape.Noise,
500,
1,
255,
0,
10,
SoundExpressionEffect.None,
InterpolationCurve.Linear
), SoundExpressionPlayMode.UntilDone)
basic.forever(function () {
	
})
