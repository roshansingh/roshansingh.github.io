---
id: 366
title: cygwin on windows, linux terminal on windows
date: 2011-06-21T17:09:28+00:00
author: Roshan Singh
layout: post
guid: http://roshansingh.in/blog/?p=366
permalink: /2011/06/21/cygwin-on-windows-linux-terminal-on-windows/
dsq_thread_id:
  - "952633564"
categories:
  - FOSS
tags:
  - cygwin
  - mintty
  - terminal
---
I installed cygwin on windows today. Its really incredible, gives the same feeling of a linux terminal on windows, though you may need a little tweaking.

  * I have installed an additional shell called mintty which gives a putty like interface, as in the default terminal you cant copy/paste things.
  * You will need to create a shortcut for mintty to make it usable.
  * But when I started vim in mintty, arrow keys were not working and backspace also behaved weirdly in insert mode, reason being cygwin does not create .vimrc by default. Execute this to fix this issue

`cp  /usr/share/vim/vimXX/vimrc_example.vim .vimrc`

  * Also by default mintty, will land you to /usr/bin, but you will want to land up at your home i think 😉 . So change the link to target this

`C:cygwinbinmintty.exe c:cygwinbinbash --login -i`

  * ssh will piss you off I dont know why, _ssh host_ does not work by default. How ever _/bin/ssh host_ works as expected. So you might want to set an alias.

With these little tweaks I find cygwin usable now. I recommend using mintty as the default shell las very basic features.

Enjoy the power of linux shell on windows!

Update:

  * clear command is absent by default in cygwin, you may install the ncurses package or just hit Ctrl+L if you use bash.