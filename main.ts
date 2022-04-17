function CalculaServo2 () {
    PosicionServo2 += DireccionServo2
    if (PosicionServo2 > 180) {
        DireccionServo2 = -1
        PosicionServo2 = 179
    } else if (PosicionServo2 < 0) {
        DireccionServo2 = 1
        PosicionServo2 = 1
    }
}
function CalculaServo1 () {
    PosicionServo1 += DireccionServo1
    if (PosicionServo1 > 180) {
        DireccionServo1 = -1
        PosicionServo1 = 179
    } else if (PosicionServo1 < 0) {
        DireccionServo1 = 1
        PosicionServo1 = 1
    }
}
let PosicionServo1 = 0
let PosicionServo2 = 0
let DireccionServo2 = 0
let DireccionServo1 = 0
let controller = PCA9685.chipAddress("0x40")
PCA9685.init(controller, 50)
DireccionServo1 = 1
DireccionServo2 = 1
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) == true && input.buttonIsPressed(Button.B) == false) {
        CalculaServo1()
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo1, PosicionServo1, controller)
    } else if (input.buttonIsPressed(Button.B) == true && input.buttonIsPressed(Button.AB) == false) {
        CalculaServo2()
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo2, PosicionServo2, controller)
    } else if (input.buttonIsPressed(Button.A) == true && input.buttonIsPressed(Button.AB) == true) {
        CalculaServo1()
        CalculaServo2()
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo1, PosicionServo1, controller)
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo2, PosicionServo2, controller)
    }
})
