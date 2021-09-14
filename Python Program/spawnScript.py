# -*- coding: utf-8 -*-
"""
Created on Mon Aug 30 21:04:31 2021

@author: Gabriel Torres
"""

import sys
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

if (sys.argv[1] == "Click"):
    pyautogui.click(button = sys.argv[2])
elif (sys.argv[1] == "Press"):
    pyautogui.press('enter')
elif (sys.argv[1] == "Write"):
    writeText(sys.argv[2])
elif (sys.argv[1] == "Command"):
    runCommand(sys.argv[2])
elif (sys.argv[1] == "LongMove"):
    longMouseMove(sys.argv[2])
elif (sys.argv[1] == "SmallMove"):
    smallMouseMove(sys.argv[2])
elif (sys.argv[1] == "Change Screen"):
    changeScreen()
elif (sys.argv[1] == "Change Program"):
    changeProgram(sys.argv[2])
elif (sys.argv[1] == "Move Mouse"):
    dragMouseMove(sys.argv[2], sys.argv[3])
elif (sys.argv[1] == "Scroll"):
    mouseScroll(sys.argv[2])
    

## Possíveis tipos de comando:
## -Clicar mouse (botão direito ou esquerdo);
## -Apertar enter (pós escrever texto no google por exemplo);
## -Escrever texto;
## -Comandos de controle remoto (aumentar e diminuir volume, próxima aba/aba anterior, mute, play, fullscreen, etc.)
## -Mover o mouse (movimentos grandes e curtos)