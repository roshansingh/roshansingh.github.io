---
id: 229
title: Pidgin 2.6.1, troubleshooting
date: 2009-08-30T08:08:27+00:00
author: Roshan Singh
layout: post
guid: http://roshansingh.wordpress.com/?p=229
permalink: /2009/08/30/pidgin-2-6-1-troubleshooting/
dsq_thread_id:
  - "950827326"
related:
  - 'a:3:{s:5:"title";s:16:"Interesting bits";s:7:"post_id";s:3:"396";s:9:"thumbnail";s:0:"";}'
  - 'a:3:{s:5:"title";s:31:"The man from earth &#8211; 2007";s:7:"post_id";s:3:"388";s:9:"thumbnail";s:0:"";}'
  - 'a:3:{s:5:"title";s:13:"Stack Vs Heap";s:7:"post_id";s:3:"325";s:9:"thumbnail";s:0:"";}'
  - 'a:3:{s:5:"title";s:6:"Update";s:7:"post_id";s:3:"315";s:9:"thumbnail";s:0:"";}'
  - 'a:3:{s:5:"title";s:4:"Fate";s:7:"post_id";s:3:"296";s:9:"thumbnail";s:0:"";}'
categories:
  - Uncategorized
---
I installed pidgin 2.6.1 today to check if it was working for me. But as soon as I started a voice conversation, it either crashed or game me the following error:

_&#8220;Could not start rtp muxer session&#8221;_.

The solution is to move your current ~/.gstreamer-0.10 to somewhere. Let pidgin create a new one. Then I made a call to one of my friends. He was able to listen whatever I said but I was not able to listen what he said. I still dont know why ?

This is where I found the solution <http://www.amsn-project.net/forums/viewtopic.php?t=6622>.