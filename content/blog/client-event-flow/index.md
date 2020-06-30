---
path: "/client-event-flow"

date: "2020-06-30"

title: "Client Event Flow"
---
<br>

![](https://cdn.glitch.com/53f6eb06-66f0-4243-b635-db0bfec50c28%2FCS1_logo_64.png?v=1588982390615)

<br>

___  

<br>

The **CS1 Game Engine** provides a consistent event flow to avoid race conditions, ease internal development, and provide transparency to the end user. 

<br>

CS1 Game Engine uses a customized version of A-Frame 1.0.4. In fact, I will eventually be removing the WebVR Polyfill and other parts I deem unneccessary to optimize the engine.  This custom A-Frame version is the first code to load.

<br>

Below is the browser console output at the start of a demo.

<br>


<font color="#76CCF7">


aframe-custom-6.01.20.js:82880 A-Frame Version: 1.0.4 (Date 2020-05-28, Commit #2ced23bf)
  
aframe-custom-6.01.20.js:82881 THREE Version (https://github.com/supermedium/three.js): ^0.116.0
  
aframe-custom-6.01.20.js:82883 WebVR Polyfill Version: ^0.10.12
  
</font>

<br>


Next:

<br>
  
the CS1 Game Engine code is loaded
   

a cs1Script detects no scene so it creates one

the cs1Script prepares a load handler

the game system is initialized

the player system detects CS1.scene and is initialized

CS1.myPlayer is created and the player-ready event is fired


<br>

<font color="#76CCF7">

cs1.js:49 CS1 Game Engine Version:  0.0.10
  
cs1Script.js:91 creating scene ...
  
cs1Script.js:98 scene not playing, setting load handler ...
  
game.js:14 initializing game system ...
  
player.js:15 Player system responding to CS1.scene being detected.
  
player.js:29 initializing player system ...
  
player.js:30 Creating CS1.myPlayer ....
  
player.js:34 player-ready


</font>

<br>


Next:

<br>

   a service worker is registered
   
   the scene finishes loading and the cs1Script prepare to fire
   
   the cs1-ready event fires, all CS1 APIs are now available

<br>

<font color="#76CCF7">

VM90791:1 Service Worker registered ServiceWorkerRegistration
  
cs1Script.js:36 scene loaded event, cs1-script handler ...
  
cs1Script.js:40 Dispatching cs1-ready event ...

</font>

<br>


Next:

<br>

   the CS1.cam and CS1.rig are setup in response to the cs1-ready event

   CS1.game.start() from the inlined cs1Script is called in response to the cs1-ready event

   the my-avatar-ready event fires

   the CS1.game.view.type is set as THIRD_PERSON
   
   the view-ready event fires


<br>

<font color="#76CCF7">

cs1rigcam.js:12 CS1Cam system responding to cs1-ready event ....
  
game.js:26 starting game ...
  
cs1avatar.js:11 my-avatar-ready
  
view.js:8 Setting game view.
  
thirdPerson.js:12 Setting game as THIRD_PERSON.
  
thirdPerson.js:38 view-ready

</font>


