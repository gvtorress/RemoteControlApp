# -*- coding: utf-8 -*-
"""
Created on Mon Aug 30 21:04:31 2021

@author: Gabriel Torres
"""

import datetime
import sys
import pyautogui
import functionScript
## from functionScript import *

pyautogui.PAUSE = 0.00001

begin_time = datetime.datetime.now()

if (sys.argv[1] == "Click"):
    pyautogui.click(button = sys.argv[2])
elif (sys.argv[1] == "Press"):
    pyautogui.press('enter')
elif (sys.argv[1] == "Write"):
    functionScript.writeText(sys.argv[2])
elif (sys.argv[1] == "Command"):
    functionScript.runCommand(sys.argv[2])
elif (sys.argv[1] == "LongMove"):
    functionScript.longMouseMove(sys.argv[2])
elif (sys.argv[1] == "SmallMove"):
    functionScript.smallMouseMove(sys.argv[2])
elif (sys.argv[1] == "Change Screen"):
    functionScript.changeScreen()
elif (sys.argv[1] == "Change Program"):
    functionScript.changeProgram(sys.argv[2])
elif (sys.argv[1] == "Move Mouse"):
    functionScript.dragMouseMove(sys.argv[2], sys.argv[3])
elif (sys.argv[1] == "Scroll"):
    functionScript.mouseScroll(sys.argv[2])
elif (sys.argv[1] == "New Window"):
    functionScript.openInNewWindow()
    
print(datetime.datetime.now() - begin_time)
## Possíveis tipos de comando:
## -Clicar mouse (botão direito ou esquerdo);
## -Apertar enter (pós escrever texto no google por exemplo);
## -Escrever texto;
## -Comandos de controle remoto (aumentar e diminuir volume, próxima aba/aba anterior, mute, play, fullscreen, etc.)
## -Mover o mouse (movimentos grandes e curtos)