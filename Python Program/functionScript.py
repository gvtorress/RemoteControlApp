import pyautogui

def changeScreen():
    pyautogui.keyDown("win")
    pyautogui.press("right")
    pyautogui.press("right")
    pyautogui.press("right")
    pyautogui.press("up")
    pyautogui.press("up")
    pyautogui.keyUp("win")
    
def changeProgram(time):
    if (time == "init"):
        pyautogui.keyDown("alt")
        pyautogui.press("tab")
    elif (time == "search"):
        pyautogui.press("tab")
    elif (time == "select"):
        pyautogui.keyUp("alt")

def writeText(text):
    for char in text:
        pyautogui.press(char)
    pyautogui.press('enter')

def runCommand(command):
    if (command == "Rewind"):
        pyautogui.press("left")
    elif (command == "Channel Down"):
        pyautogui.keyDown("ctrl")
        pyautogui.press("pagedown")
        pyautogui.keyUp("ctrl")
    elif (command == "Channel Up"):
        pyautogui.keyDown("ctrl")
        pyautogui.press("pageup")
        pyautogui.keyUp("ctrl")
    elif (command == "Forward"):
        pyautogui.press("right")
    elif (command == "Full Screen"):
        pyautogui.press("f")
    elif (command == "Mute"):
        pyautogui.press("m")
    elif (command == "Play" or command == "Pause"):
        pyautogui.press("space")
    elif (command == "Theater Mode"):
        pyautogui.press("t")
        pyautogui.keyDown("alt")
        pyautogui.press("t")
        pyautogui.keyUp("alt")
    elif (command == "Volume Down"):
        pyautogui.keyDown("shift")
        pyautogui.press("down")
        pyautogui.keyUp("shift")
    elif (command == "Volume Up"):
        pyautogui.keyDown("shift")
        pyautogui.press("up")
        pyautogui.keyUp("shift")
    elif (command == "Reload"):
        pyautogui.keyDown("ctrl")
        pyautogui.press("f5")
        pyautogui.keyUp("ctrl")
    elif (command == "Close"):
        pyautogui.keyDown("ctrl")
        pyautogui.press("w")
        pyautogui.keyUp("ctrl")
        
def longMouseMove(move):
    if (move == "Right"):
        pyautogui.move(200,0)
    elif (move == "Left"):
        pyautogui.move(-200,0)
    elif (move == "Up"):
        pyautogui.move(0,-200)
    elif (move == "Down"):
        pyautogui.move(0,200)
    elif (move == "UpRight"):
        pyautogui.move(200,-200)
    elif (move == "UpLeft"):
        pyautogui.move(-200,-200)
    elif (move == "DownRight"):
        pyautogui.move(200,200)
    elif (move == "DownLeft"):
        pyautogui.move(-200,200)
        
def smallMouseMove(move):
    if (move == "Right"):
        pyautogui.move(50,0)
    elif (move == "Left"):
        pyautogui.move(-50,0)
    elif (move == "Up"):
        pyautogui.move(0,-50)
    elif (move == "Down"):
        pyautogui.move(0,50)
    elif (move == "UpRight"):
        pyautogui.move(50,-50)
    elif (move == "UpLeft"):
        pyautogui.move(-50,-50)
    elif (move == "DownRight"):
        pyautogui.move(50,50)
    elif (move == "DownLeft"):
        pyautogui.move(-50,50)

def dragMouseMove(moveX, moveY):
    moveX = float(moveX)
    moveY = float(moveY)
    pyautogui.move(moveX, moveY)
        
def mouseScroll(size):
    size = int(size)
    pyautogui.scroll(size)
    
def openInNewWindow():
    pyautogui.keyDown("ctrl")
    pyautogui.press("l")
    pyautogui.press("c")
    pyautogui.press("w")
    pyautogui.press("n")
    pyautogui.press("v")
    pyautogui.keyUp("ctrl")
    pyautogui.press("enter")