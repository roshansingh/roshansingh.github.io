---
id: 378
title: Network Manager troubles after wifi password change
date: 2011-10-07T16:38:05+00:00
author: Roshan Singh
layout: post
guid: http://roshansingh.in/blog/?p=378
permalink: /2011/10/07/network-manager-troubles-after-wifi-password-change/
dsq_thread_id:
  - "964868493"
tags:
  - linux
---
I recently changed my router&#8217;s password and even changed the authentication type. Now after that Network Manager started crashing. And thanks to the new GNOME 3 network manager, I was not able to manually change the password, I was not even getting where they had hidden the previous Network Connections window which used to list all the interfaces.

After googling for a while I found the command.

`$ nm-connection-editor`

Cheers!