radio.onReceivedNumber(function (receivedNumber) {
    Maksimalna_temperatura = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Maksimalna_temperatura)
})
let Maksimalna_temperatura = 0
radio.setGroup(95)
