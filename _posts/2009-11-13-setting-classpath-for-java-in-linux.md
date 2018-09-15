---
id: 248
title: Setting CLASSPATH for Java in Linux
date: 2009-11-13T15:11:18+00:00
author: Roshan Singh
layout: post
guid: http://roshansingh.wordpress.com/?p=248
permalink: /2009/11/13/setting-classpath-for-java-in-linux/
dsq_thread_id:
  - "950827330"
categories:
  - Help
  - Linux
tags:
  - classpath
  - java
---
This was really tough for me since I had never used command line for compiling java programs, I always used Netbeans for coding in Java. Recently I started learning JUnit for which I decided to use command Line. 

Whenever I googled for its solution I got
  
$ export CLASSPATH=$CLASSPATH:

But this did not fix my problem. Eventually I landed up on some websites and finally [here](http://mindprod.com/jgloss/classpath.html). Though it is mainly written for Windows but can be used likewise for linux also.

So the thing to be done is either add all the jar files explicitly to the classpath or put all the jars in a directory (/home/roshan/jars for me).

Now run this command:
  
$ export CLASSPATH=$CLASSPATH:/home/roshan/jars/*

The wildcard &#8216;*&#8217; fixed the problem. Now you can make this change permanent by adding this command to your .bash_profile in home directory or /etc/profile to make system wide changes.