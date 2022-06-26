function doClosed () {
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 180)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P2, 180)
}
doClosed()
basic.showNumber(6)
basic.pause(3000)
