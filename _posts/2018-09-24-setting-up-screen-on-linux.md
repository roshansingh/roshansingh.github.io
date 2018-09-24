---
id: 699
title: Setting up screen on linux
date: 2018-09-24T01:10:12+00:00
author: Roshan Singh
layout: post
guid: https://www.roshansingh.in/?p=699
permalink: /2018/09/14/screen-setup/
tags:
  - screen
  - linux
---

Screen is a program that runs in terminal and allows you to create multiple terminals with one ssh login. It runs in background so that you can attach to the same session if ssh disconnects. Its particularly useful when you are using mobile data or have to leave some process running in foreground.

You can follow these instructions to set it up. 

    sudo apt-get install screen

Now paste this on your ~/.screenrc file

    hardstatus alwayslastline
    hardstatus string '%{= mK}%-Lw%{= KW}%50>%n%f* %t%{= mK}%+Lw%< %{= kG}%-=%D %d %M %Y %c:%s%{-}'
    hardstatus string '%{= kG}[ %{G}%H %{g}][%= %{= kw}%?%-Lw%?%{r}(%{W}%n*%f%t%?(%u)%?%{r})%{w}%?%+Lw%?%?%= %{g}][%{B} %d/%m %{W}%c %{g}]'
    multiuser on

Finally add this to your bash profile ~/.bashrc or ~/.bash_profile

    if [ -z "$STY" ]; then
      exec screen -aAxR -S x
    fi

Now log out and log back in. You can read some instructions online on how to use it. 
