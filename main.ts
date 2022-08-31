let play = 0
let score = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    play = randint(0, 2)
    basic.pause(100)
    if (play == 0) {
        basic.showLeds(`
            . . . . .
            . . # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (play == 1) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
        score += 1
    }
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showIcon(IconNames.Square)
    play = randint(0, 2)
    basic.pause(100)
    if (play == 0) {
        basic.showIcon(IconNames.Square)
    } else if (play == 1) {
        basic.showIcon(IconNames.Scissors)
    } else {
        basic.showLeds(`
            . . . . .
            . . # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        score += 1
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(score)
    if (score == 3) {
        basic.showString("Win!")
    } else {
        basic.showString("Lose!")
    }
    score = 0
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Scissors)
    play = randint(0, 2)
    basic.pause(100)
    if (play == 0) {
        basic.showIcon(IconNames.Scissors)
    } else if (play == 1) {
        basic.showLeds(`
            . . . . .
            . . # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showIcon(IconNames.Square)
        score += 1
    }
})
