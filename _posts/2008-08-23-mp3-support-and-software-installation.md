---
id: 43
title: mp3 support and software installation
date: 2008-08-23T13:31:58+00:00
author: Roshan Singh
layout: post
guid: http://roshansingh.wordpress.com/?p=43
permalink: /2008/08/23/mp3-support-and-software-installation/
dsq_thread_id:
  - "1305307933"
categories:
  - Help
  - Linux
tags:
  - linux
---
This is the requirement of all the people in my college and many others. Initially it was a big problem for me also but later I was able to resolve it.

Additionally you can take a look on <http://www.google.com/linuxrepositories> which I have noticed just now and it actually explains you how to add repositories to a Linux system.

**What is a repository?**

This is a question asked to me by several people. Repository is a database which stores rpms, debs etc which Linux users use to install packages on a Linux system.

**How to add a repository?**

Refer to the above link for adding repositories. Some good repositories are Packman for openSUSE and Livna for Fedora, see this [video .](http://kushal.fedorapeople.org/livna.ogg) 

People in NIT Durgapur can add Packman from<http://10.0.0.150/?q=node/30> or check out the list of all repositories available at [http://en.opensuse.org/Additional\_YaST\_Package_Repositories .](http://en.opensuse.org/Additional_YaST_Package_Repositories)

**How to install a package?**

In openSUSE go to Yast > Software search whatever package you want and install. Also you can use the advanced 1-click install feature of openSUSE (most easy to use). Search the packages at Webpin <http://software.opensuse.org/search> and then install them using 1-click feature.

In Fedora you can use

#yum install <package> from the command line.

**How to listen to mp3 and watch avi files?**

You can either install VLC from <http://www.videolan.org/vlc/download-suse.html> and or search mplayer at webin and install it for openSUSE.

For fedora, VLC is available at  <http://www.videolan.org/vlc/download-fedora.html>. Just follow the instructions there.

**How to compile C/C++, Java programs?**

Gcc is the compiler for C/C++ , java.

sample:

Write the c program in a text editor on Linux gedit or kwrite or VI. Then compile from the command line

$gcc helloworld.c

Then run the program

$./a.out

Netbeans is also available for Linux.