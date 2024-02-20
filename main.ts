radio.onReceivedNumber(function (receivedNumber) {
    if (1 == receivedNumber) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            # . . . #
            # . . . #
            `)
        SuperBit.MotorRun(SuperBit.enMotors.M1, 50)
        basic.pause(500)
    } else if (2 == receivedNumber) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # . # #
            # . . . #
            . # . # .
            `)
        SuperBit.MotorRun(SuperBit.enMotors.M1, -50)
        basic.pause(500)
    } else if (3 == receivedNumber) {
        basic.showIcon(IconNames.Ghost)
        SuperBit.MotorRun(SuperBit.enMotors.M1, 50)
        basic.pause(500)
        SuperBit.MotorRun(SuperBit.enMotors.M1, -50)
        basic.pause(5000)
        basic.pause(5000)
        basic.pause(5000)
        basic.pause(5000)
        SuperBit.MotorRun(SuperBit.enMotors.M1, 50)
        basic.pause(500)
        SuperBit.MotorRun(SuperBit.enMotors.M1, -50)
    } else {
        basic.clearScreen()
    }
    SuperBit.MotorStopAll()
})
input.onGesture(Gesture.Shake, function () {
    if ((1 as any) == (0 as any)) {
        basic.showLeds(`
            . . # . .
            . . # . #
            # # # # #
            # . . . #
            # . . . #
            `)
        SuperBit.MotorRun(SuperBit.enMotors.M1, 50)
        basic.pause(500)
    } else if ((2 as any) == (0 as any)) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # . # #
            # . . . #
            . # . # .
            `)
        SuperBit.MotorRun(SuperBit.enMotors.M1, -50)
        basic.pause(500)
    } else if ((3 as any) == (0 as any)) {
        basic.showIcon(IconNames.Ghost)
        SuperBit.MotorRun(SuperBit.enMotors.M1, 50)
        basic.pause(500)
        SuperBit.MotorRun(SuperBit.enMotors.M1, -50)
        basic.pause(5000)
        basic.pause(5000)
        basic.pause(5000)
        basic.pause(5000)
        SuperBit.MotorRun(SuperBit.enMotors.M1, 50)
        basic.pause(500)
        SuperBit.MotorRun(SuperBit.enMotors.M1, -50)
    } else {
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.showNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
    basic.showNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    basic.showNumber(2)
})
