---
id: 190
title: Some things I have been doing these days
date: 2009-04-17T17:34:48+00:00
author: Roshan Singh
layout: post
guid: http://roshansingh.wordpress.com/?p=190
permalink: /2009/04/17/some-things-i-have-been-doing-these-days/
dsq_thread_id:
  - "950827287"
categories:
  - Uncategorized
---
I have become a kind of person who does not care about examinations any more and keep on doing some stuffs.

1. I always wanted to have a bot on our channel (#nitdgplug on Freenode, though we have very less to log, you all are welcome to our channel :P). So i used eggdrop to create a bot and log messages. It is really a great software, and needs a hell lot of configuration. Here is the configuration [bot](http://roshansingh.in.cp-22.webhostbox.net/blog/wp-content/uploads/2009/04/nitdgplugbotconf.doc) file. Strangely wordpress does not allows to upload txt files, so you can simply rename it as bot.conf and use.
  
I made an important change to log all the messages and log it in directories whose name bears month name and year as Apr2009. I played with the configuration file and then it was done. Just create a directory with this name Apr2009 (three letters per month name.
  
This did the trick

logfile jpk #nitdgplug &#8220;logs/&#8221; //removed the name of file name
  
set logfile-suffix &#8220;%b%Y/%d%b%Y.txt&#8221; // I just added &#8216;%b%Y/&#8217; to what it aleady was.

you can see logs of our channel at <http://lug.nitdgp.ac.in/irclogs/>.

2. Today I created a video section for our website with wordpress. I was struggling with Drupal, even if it has a flash player module it is not properly documented (If you know tell me I will be pleased to know). With wordpress it was just a matter of 10 minutes. <http://lug.nitdgp.ac.in/videos>.

This was really fun. Looking for more things to do 🙂 .