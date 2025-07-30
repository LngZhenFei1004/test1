basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    led.setBrightness(255)
    basic.showIcon(IconNames.SmallHeart)
    led.setBrightness(100)
    basic.showLeds(`
        . # # # #
        . # . . .
        . # # # .
        . # . . .
        . # . . .
        `)
    led.setBrightness(255)
    basic.pause(500)
    basic.showLeds(`
        . # # # #
        . # . . .
        . # # # .
        . # . . .
        . # # # #
        `)
    led.setBrightness(255)
    basic.pause(500)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    led.setBrightness(255)
    basic.pause(500)
    basic.showString("Fei")
    basic.pause(2000)
})
