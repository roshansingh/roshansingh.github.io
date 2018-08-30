---
id: 283
title: messing up
date: 2010-02-16T21:38:25+00:00
author: Roshan Singh
layout: post
guid: http://roshansingh.wordpress.com/?p=283
permalink: /2010/02/16/messing-up/
dsq_thread_id:
  - "1319953169"
categories:
  - Linux
tags:
  - gdm
---
These days I have no work to do, expect willing time :P, so I thought lets try &#8220;Sugar Desktop&#8221;, so I installed it using

\# yum groupinstall sugar

then i logged out, and logged in to Sugar, which I later found out that there was nothing for me in it, then I logged out and removed Sugar using

#yum groupremove sugar

which removed gdm as well, the gnome login manager. Things worked fine till I was logged in. Later when I rebooted, all I could see was the fedora logo and no login prompt, I was clueless what had happened. Then I realized what had happened. I tried to open console by pressing Alt+Ctrl+F1 to F7 nothing happened. 

Finally I rebooted my machine went to single user mode so that I could reinstall it again. I realized later that run level 1 did not allow me to configure network. Now what to do ? I always knew that /etc had some file which could change my default run level. Then i did /etc/init pressed tab which had two options one of which was inittab which controls the default runlevel.

So I edited /etc/inittab to change my default run level and rebooted my machine, configured network manually and then installed gdm. Finally its working again :-).

Posted from [GScribble](http://sourceforge.net/projects/gscribble/).