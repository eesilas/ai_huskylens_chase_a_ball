def L():
    SuperBit.motor_run_dual(SuperBit.enMotors.M1, n, SuperBit.enMotors.M2, p)
    SuperBit.motor_run_dual(SuperBit.enMotors.M3, p, SuperBit.enMotors.M4, n)

def on_gesture_logo_up():
    radio.send_number(2)
    basic.show_arrow(ArrowNames.SOUTH)
input.on_gesture(Gesture.LOGO_UP, on_gesture_logo_up)

def on_gesture_logo_down():
    radio.send_number(1)
    basic.show_arrow(ArrowNames.NORTH)
input.on_gesture(Gesture.LOGO_DOWN, on_gesture_logo_down)

def on_received_number(receivedNumber):
    if receivedNumber == 1:
        basic.show_arrow(ArrowNames.NORTH)
        F()
    elif receivedNumber == 2:
        basic.show_arrow(ArrowNames.SOUTH)
        B()
    elif receivedNumber == 3:
        basic.show_arrow(ArrowNames.WEST)
        L()
    elif receivedNumber == 4:
        basic.show_arrow(ArrowNames.EAST)
        R()
    else:
        basic.show_icon(IconNames.ANGRY)
radio.on_received_number(on_received_number)

def on_gesture_tilt_left():
    radio.send_number(3)
    basic.show_arrow(ArrowNames.WEST)
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def F():
    SuperBit.motor_run_dual(SuperBit.enMotors.M1, p, SuperBit.enMotors.M2, p)
    SuperBit.motor_run_dual(SuperBit.enMotors.M3, p, SuperBit.enMotors.M4, p)

def on_button_pressed_a():
    global p, n
    p += 10
    n += 10
input.on_button_pressed(Button.A, on_button_pressed_a)

def B():
    SuperBit.motor_run_dual(SuperBit.enMotors.M1, n, SuperBit.enMotors.M2, n)
    SuperBit.motor_run_dual(SuperBit.enMotors.M3, n, SuperBit.enMotors.M4, n)

def on_button_pressed_ab():
    SuperBit.motor_stop_all()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global p, n
    p += -10
    n += -10
input.on_button_pressed(Button.B, on_button_pressed_b)

def R():
    SuperBit.motor_run_dual(SuperBit.enMotors.M1, p, SuperBit.enMotors.M2, n)
    SuperBit.motor_run_dual(SuperBit.enMotors.M3, n, SuperBit.enMotors.M4, p)

def on_gesture_tilt_right():
    radio.send_number(4)
    basic.show_arrow(ArrowNames.EAST)
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

n = 0
p = 0
basic.show_icon(IconNames.HEART)
radio.set_group(123)
p = 180
n = -180

def on_forever():
    pass
basic.forever(on_forever)
