basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    led.setBrightness(255)
    basic.pause(1000)
    basic.showIcon(IconNames.SmallHeart)
    led.setBrightness(255)
    basic.pause(1000)
    basic.showLeds(`
        . # # # #
        . # . . .
        . # # # .
        . # . . .
        . # . . .
        `)
    led.setBrightness(255)
    basic.pause(10)
    basic.showLeds(`
        . # # # #
        . # . . .
        . # # # .
        . # . . .
        . # # # #
        `)
    led.setBrightness(255)
    basic.pause(10)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    led.setBrightness(255)
    basic.pause(10)
    led.setBrightness(255)
    basic.showString("Fei")
    led.setBrightness(255)
    basic.showString("Fei")
    led.setBrightness(155)
})
