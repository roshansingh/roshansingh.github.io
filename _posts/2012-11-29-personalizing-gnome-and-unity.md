---
id: 416
title: Personalizing GNOME and Unity
date: 2012-11-29T18:27:38+00:00
author: Roshan Singh
layout: post
guid: http://roshansingh.in/blog/?p=416
permalink: /2012/11/29/personalizing-gnome-and-unity/
dsq_thread_id:
  - "950195170"
related:
  - 'a:3:{s:5:"title";s:27:"Conway&#8217;s Game of Life";s:7:"post_id";s:3:"400";s:9:"thumbnail";s:0:"";}'
  - 'a:3:{s:5:"title";s:51:"Network Manager troubles after wifi password change";s:7:"post_id";s:3:"378";s:9:"thumbnail";s:0:"";}'
  - 'a:3:{s:5:"title";s:39:"Problem due to incompatible Qt versions";s:7:"post_id";s:3:"311";s:9:"thumbnail";s:0:"";}'
  - 'a:3:{s:5:"title";s:57:"Rhythmbox id3 dumex missing plugin problem &#8212; solved";s:7:"post_id";s:3:"298";s:9:"thumbnail";s:0:"";}'
  - 'a:3:{s:5:"title";s:10:"messing up";s:7:"post_id";s:3:"283";s:9:"thumbnail";s:0:"";}'
categories:
  - Hacks
  - Linux
tags:
  - Personalization
---
I have used GNOME 3 for quite some time now. Of late the shell started to crash a lot, so I switched to Unity. I usually hate dark themes, I like bright desktop and larger fonts so that my eyes don&#8217;t get strained. It is great that people have so many useful gui tools for these things. These are my personal favorites:

  * gnome-tweak-tool &#8211; Good for changing themes and font, adding removing shell extensions. It can also be used to customize buttons(minimize, maximize, close) on title bar. I am still old school and I like all the buttons there.
  * gconf-editor &#8211; This is an advanced tool. Before you start be exactly sure about what you are doing. You can configure most of the gnome behaviour using this.
  * gnome-color-chooser &#8211; This lets you choose the various color schemes. This was particularly useful in my case as I hate white on black, and the default ubuntu has white on black for eclipse tooltips which is really annoying for me.
  * CompizConfig Settings Manager(ccsm) &#8211; You can use this to configure Unity hot-keys. I have changed the hot key for Unity launcher from super key (windows key) to super-z as I wanted to use super-c and super-v for copy paste on my terminal.
  * Gnome-Terminal &#8211; This comes with its own options for personalizing it. I use profile preferences to change the font and the color schemes. I use Monaco font. Also I have changed the copy and paste shortcut. Pressing 3 keys is cumbersome and that too when you have to do it so many times.

In the process if you screw up your system simply log out, and log in to the shell using Alt+Ctlr+F1 and delete .gnome. .gnome2. Sometimes you may have to delete .local and .config depending on what you have modified. After that press Alt+Clrl+F7 to log back in.