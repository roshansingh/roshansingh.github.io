---
id: 177
title: using java on linux
date: 2009-03-09T07:22:02+00:00
author: Roshan Singh
layout: post
guid: http://roshansingh.wordpress.com/?p=177
permalink: /2009/03/09/using-java-on-linux/
dsq_thread_id:
  - "950827265"
categories:
  - Linux
tags:
  - javac
  - Linux
---
This was a problem faced by my friend. He happens to use only JAVA that too JAVAC. He does not like to use Netbeans I don&#8217;t know why. And he said that it was the only problem that stopped him from using Linux. So I decided to help him. These were some links which were really helpful.

<http://en.opensuse.org/Java>
  
[http://en.opensuse.org/Installing\_Sun%27s\_Java\_on\_SUSE_Linux](http://en.opensuse.org/Installing_Sun%27s_Java_on_SUSE_Linux) (to be more precise)

The problem was that the openJDK which provides JAVC which is the default installation on openSUSE is different from JAVAC provided by SUN because the same Hello World program which compiled on SUN&#8217;s JAVAC failed to compile on openJDK&#8217;s JAVAC.

The details can be found out here [http://lug.nitdgp.ac.in/wiki/index.php/How\_to\_use\_Java\_on_Linux](http://lug.nitdgp.ac.in/wiki/index.php/How_to_use_Java_on_Linux)

The repositories described there are Local to our college you can use your package manager to locate the packages. For openSUSE users sun&#8217;s packages are in Non-OSS repo