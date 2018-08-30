---
id: 75
title: LTSP server configured properly
date: 2008-11-05T18:49:00+00:00
author: Roshan Singh
layout: post
guid: http://roshansingh.wordpress.com/?p=75
permalink: /2008/11/05/ltsp-server-configured-properly/
dsq_thread_id:
  - "950827174"
categories:
  - Uncategorized
---
Linux Terminal Server Project or LTSP is our new PLAN for IOTA. So I downloaded KIWI-LTSP on installed that on openSUSE 11 with no problem using 1-click feature. More details about installation can be found here <http://en.opensuse.org/LTSP> . I started the server. After installation I used another laptop and enabled network booting from the BIOS. It booted from the LTSP server initially but after sometime it stopped and it was searching for some configuration files. Then I went to the #opensuse-kiwi channel on Freenode (IRC) and asked about it. Later I figured out that it was the switch which was troubling me. Actually I am on my college LAN with **another DHCP server** running which might be interfering with the KIWI&#8217;s DHCP server.

Then I got another switch disconnected my server and client from the college LAN and connected them with the switch. And then I started the server and then booted the client. It booted smoothing and it showed the LOGIN SCREEN. The users are same as the users on the server. Basically you just remote login to your server.

One thing is to be noticed here that your client acts like a terminal to the server and hence the name LTSP. The clients actually are machines without hard drives.