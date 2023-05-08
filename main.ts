radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("holaaa ")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    radio.sendNumber(76)
})
radio.setGroup(2)
