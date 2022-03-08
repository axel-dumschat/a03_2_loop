for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.Heart)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(200)
}
