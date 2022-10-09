basic.forever(function () {
    serial.writeValue("x", pins.analogReadPin(AnalogPin.P0))
    if (pins.analogReadPin(AnalogPin.P0) > 10) {
        basic.showArrow(ArrowNames.North)
    }
    if (pins.analogReadPin(AnalogPin.P0) <= 10) {
        basic.showArrow(ArrowNames.South)
    }
})
