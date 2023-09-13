function L () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    n,
    SuperBit.enMotors.M2,
    p
    )
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M3,
    p,
    SuperBit.enMotors.M4,
    n
    )
}
input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(2)
    basic.showArrow(ArrowNames.South)
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendNumber(1)
    basic.showArrow(ArrowNames.North)
})
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showArrow(ArrowNames.North)
        F()
    } else if (receivedNumber == 2) {
        basic.showArrow(ArrowNames.South)
        B()
    } else if (receivedNumber == 3) {
        basic.showArrow(ArrowNames.West)
        L()
    } else if (receivedNumber == 4) {
        basic.showArrow(ArrowNames.East)
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Black))
        R()
    } else if (receivedNumber == 5) {
        stop()
    } else {
        basic.showIcon(IconNames.Angry)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(3)
    basic.showArrow(ArrowNames.West)
})
function F () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    p,
    SuperBit.enMotors.M2,
    p
    )
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M3,
    p,
    SuperBit.enMotors.M4,
    p
    )
}
input.onGesture(Gesture.ScreenDown, function () {
    radio.sendNumber(5)
})
function stop () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    0,
    SuperBit.enMotors.M2,
    0
    )
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M3,
    0,
    SuperBit.enMotors.M4,
    0
    )
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
}
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(6)
    basic.showLeds(`
        # # # . .
        # # . . .
        # . # . .
        . . . # .
        . . . . #
        `)
})
function B () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    n,
    SuperBit.enMotors.M2,
    n
    )
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M3,
    n,
    SuperBit.enMotors.M4,
    n
    )
}
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(5)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(7)
    basic.showLeds(`
        . . # # #
        . . . # #
        . . # . #
        . # . . .
        # . . . .
        `)
})
function R () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    p,
    SuperBit.enMotors.M2,
    n
    )
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M3,
    n,
    SuperBit.enMotors.M4,
    p
    )
}
function clockwiserotate () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    120,
    SuperBit.enMotors.M2,
    120
    )
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M3,
    -120,
    SuperBit.enMotors.M4,
    -120
    )
    basic.showLeds(`
        # # # # #
        . . . . #
        . # # . #
        . # . . #
        . # # # #
        `)
}
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(4)
    basic.showArrow(ArrowNames.East)
})
let obj_height = 0
let obj_width = 0
let object_y = 0
let object_x = 0
let n = 0
let p = 0
radio.setGroup(121)
p = 150
n = -150
SuperBit.RGB_Program().setBrightness(120)
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_OBJECT_TRACKING)
basic.showIcon(IconNames.Yes)
basic.pause(500)
SuperBit.MotorStopAll()
SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Green))
SuperBit.RGB_Program().show()
basic.pause(5000)
basic.forever(function () {
    huskylens.request()
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        object_x = huskylens.readeBox(1, Content1.xCenter)
        object_y = huskylens.readeBox(1, Content1.yCenter)
        obj_width = huskylens.readeBox(1, Content1.width)
        obj_height = huskylens.readeBox(1, Content1.height)
        if (object_x < 120 && obj_width < 160) {
        	
        } else if (object_x > 200 && obj_width < 160) {
        	
        } else if (object_x > 140 && obj_width < 180) {
            B()
        } else if (obj_width >= 180) {
            stop()
        } else {
            clockwiserotate()
        }
    }
})
