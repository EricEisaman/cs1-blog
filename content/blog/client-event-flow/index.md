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

<br/> 

<em>
  💎 DOMContentLoaded
</em> 

<br> </br>

💎  scene-ready 

<font color="#76CCF7">
〰️🔹CS1.scene has referenced an a-scene
</font>
<br> </br>
💎  player-ready 
</br>
<font color="#76CCF7">  
〰️🔹CS1.myPlayer has referenced an a-player
</font>
<br> </br>
💎  device-declared 
</br>
<font color="#76CCF7">
 〰️🔹CS1.device is now defined
</font>
<br> </br>
💎 cs1-ready 
</br>
<font color="#76CCF7">
〰️🔹fired after aframe has been hydrated
<br/>  
〰️🔹CS1 APIs should be available
</font> 
<br> </br>
💎  cs1-script-fired
</br>
<font color="#76CCF7">  
〰️ 🔹dispatched after each cs1-script has been evaluated
<br/>   
〰️ 🔹src loaded scripts are guaranteed to run before inlined scripts
</font>
<br> </br>
💎 game-start
</br>
<font color="#76CCF7">
〰️🔹dispatched after a cs1-script has called CS1.game.start()
</font>
<br> </br>
💎  my-avatar-ready
</br>
<font color="#76CCF7">
〰️🔹CS1.myPlayer.avatar has been defined.
</font>
<br> </br>
💎  view-ready
</br>
<font color="#76CCF7">
〰️🔹final device related view and controls have been set
 <br/>   
〰️🔹the CS1.myPlayer.setAvatar() enables settings to be configured via cs1-scripts
</font>
