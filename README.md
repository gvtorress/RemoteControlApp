# Remote Control App
<br>

This project is a combination of BackEnd and FrontEnd Applications, that allows you to control your computer through an App on your Phone. <br>
With many available streaming content and platforms, many people stopped using satellite TV and began using only a computer to watch and consume content, even connecting the computer in a TV sometimes. <br>
I'm developing this project so I can control what I'm watching, without having to get out of bed to change content, go back or forward a few seconds on a video or series, pause, change the streaming platform and so on.<br><br>

## Mobile App with React Native

<!-- <img src="https://drive.google.com/drive/u/0/folders/1lk34kcSQpSvEJfIDpLf1n4SeE568CiXr/IPSignIn.jpeg" alt="IP SignIn Screen" height="300em">
<img src="" height="300em">
<img src="" height="300em"> -->

The Mobile App works with three Screens, as seen above. <br>
The first one is where the App makes the connection with the server in the computer, you can either insert the internal IP address from your computer or automatically test the connection with already used IP adressess. <br>
The second Screen is where most of the commands are, there you can choose what streaming platform to open, mute/unmute, fullscreen and back, pause and play, among other commands, and also you have an text input that writes whatever you whant in the computer, for searching porpuses for example. Only the "mouse" button on this screen that isn't a command, but it navigates to the third Screen. <br>
There, you have some ways of controlling your mouse, with some pre-determined spaces or a space that works like a touchpad, also you can click the mouse, with both right or left buttons.<br> <br>

## Python Script

The Python Script is used to control the mouse and the keyboard, so that we can use those commands sent by the App through keyboard shortcuts or mouse controlling. <br>
I used the library Pyautogui, which is most used to automate repetitive tasks that uses mouse and keyboard.<br> <br>

## Backend with NodeJs

The Backend application is a simple server with Express, that has a couple of routes in which it receives the commands from the App, and then it runs a command in cmd, calling the Python Script or just executing the command, depending on what is sent.<br>
For this, I used the Child Process module from NodeJs, which allows me to call and execute a command in cmd on the background, without taking focus of what's on the screen.
