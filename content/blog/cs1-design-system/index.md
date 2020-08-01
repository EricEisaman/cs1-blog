---
path: "/cs1-design-system"

date: "2020-08-01"

title: "CS1 Design System"
---
<br>

![](https://cdn.glitch.com/53f6eb06-66f0-4243-b635-db0bfec50c28%2FCS1_logo_64.png?v=1588982390615)

<br>

___  

<br>

The **CS1 Design System** is accessed via **CS1.Design**.  The design system uses themes ,sets of referencable properties, to provide a separation of concerns between **designers** and **developers** as well as to enable dynamic theme changes.  The values of these properties can be of any type but are commonly **colors** , **numeric dimensions**, and **asset urls**. The CS1 Game Engine currently ships with 2 builtin themes: **Pastel** and **Neon**. These may or may not be the builtin themes at the time you read this article.

<br>

Themes can be added with **CS1.Design.addTheme( name , theme )**. Theme objects will be given a name key, if not included, that refers to the name you assign to the Theme.  Registered themes are stored in **CS1.Design.Themes**.  The current theme can be set using **CS1.Design.setTheme(name)**, where **name** refers to a registered theme. Themes may also be added and set in one step with **CS1.Design.setTheme(object)** where the object defines the theme including a name:value pair.