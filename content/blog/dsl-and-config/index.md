---
path: "/dsl-and-config"

date: "2020-07-13"

title: "DSL and Configuration"
---
<br>

![](https://cdn.glitch.com/53f6eb06-66f0-4243-b635-db0bfec50c28%2FCS1_logo_64.png?v=1588982390615)

<br>

___  

<br>

The **CS1 Game Engine** exposes a powerful and intuitive Domain Specific Language (**DSL**) Application Programming Interface (**API**).  The **CS1 Game Engine DSL** is a set of methods and properties accessible via the **CS1** global object.  The names and locations of these methods and properties make sense in the context of programming a game.

<br>

**Top Level CS1 Properties**

<br>

CS1.Game

CS1.Scene

CS1.MyPlayer

CS1.Cam

CS1.Rig

CS1.Design

CS1.Utils

CS1.Flags

CS1.device

CS1.version

  
<br>

In addition various optional systems and primitives are designed to append top level API access. For example the **cs1-jukebox** primitive adds a reference at CS1.Jukebox.  

<br>

**CS1.Game** includes a method **CS1.Game.start()** which does exactly what you would expects. It starts the game, at which time a **game-start** event is dispatched.

<br>

Another such sensibly named method is **CS1.MyPlayer.setAvatar()**. This method is not only available on **CS1.MyPlayer**, but also on any **player instance**.

<br>

You can think of the **CS1** global object as a **DSL** tree composed of sensibly named methods and properties.

<br>

As of today, the **CS1 Game Engine**, and consequently the **CS1** global object, are very incomplete as measured against the **API Promises** for **version 1.0.0**.  Once these promises have been fullfilled, I will be developing game design and monitoring applications which will interact with the engine via user interfaces communicating through **design** and **control** layers/planes.  The user interfaces may include **GUI**s and **CLI**s easing aspects of game design and server management.  The **design layer/plane** will bind **GUI** widgets to a **JSON configuration file**. A **flag** set in **CS1.Flags** will inform the engine whether to import and perform **API calls** based on a **JSON configuration file**.  This will enable end users to develop their own game design and level editors which write to such a configuration file.   The **control layer/plane** will enable similar writes to a **server configuration file** as well as realtime **CS1 Game Server API** calls.  Control layer applications can be designed by end users to ease server configuration and live server management.  For example, such an application could do such things as configure database settings or boot players from a live game. 

<br>

By first designing the global **CS1 Game Engine** and **CS1 Game Server** objects with set **DSL**, the **design and control layers** can cleanly encapsulate the behaviors of their intended use cases and prevent configuration references leaking into the core of the engine and server.