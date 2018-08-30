---
id: 186
title: How to /boot/grub/menu.lst for network install
date: 2009-04-04T09:45:00+00:00
author: Roshan Singh
layout: post
guid: http://roshansingh.wordpress.com/?p=186
permalink: /2009/04/04/how-to-edit-bootgrubmenulst-for-network-install/
dsq_thread_id:
  - "950827282"
related:
  - 'a:3:{s:5:"title";s:29:"Personalizing GNOME and Unity";s:7:"post_id";s:3:"416";s:9:"thumbnail";s:0:"";}'
  - 'a:3:{s:5:"title";s:51:"Network Manager troubles after wifi password change";s:7:"post_id";s:3:"378";s:9:"thumbnail";s:0:"";}'
  - 'a:3:{s:5:"title";s:39:"Problem due to incompatible Qt versions";s:7:"post_id";s:3:"311";s:9:"thumbnail";s:0:"";}'
  - 'a:3:{s:5:"title";s:57:"Rhythmbox id3 dumex missing plugin problem &#8212; solved";s:7:"post_id";s:3:"298";s:9:"thumbnail";s:0:"";}'
  - 'a:3:{s:5:"title";s:10:"messing up";s:7:"post_id";s:3:"283";s:9:"thumbnail";s:0:"";}'
categories:
  - Linux
tags:
  - editing menu.lst
---
Yesterday I went to help a Professor from Mechanical Department who had mailed me for help. He was really struggling with windows as desperately wanted to get Linux installed as he was not familiar with windows software. He was the first man I have ever met who said that he was struggling with office excel and wanted Linux.

He had an old HP workstation. I never had opportunity to see a workstation but yesterday I saw one and even installed Fedora 10 on it. I must say the machine was really fast even better than the new Centrino Duo / core 2 duo processors that we use. The instllaion took only 20 minutes and i must say here that he had nearly selected almost all the packages (GNOME & KDE both).

There was another machine whose DVD drive was not working. I had SUSE Enterprise Server installed with barely any software. So I installed openSUSE 11.1 on it from the Local Installation repository that we have. We generally use Unetbootin (Google if you dont know) for network installation. But I was not able to install that due to some dependencies. So I downlaoded the kernel and initrd filles from the installation medium and then i edited menu.lst.

  * First I made a new directory in /boot and called it install.
  * Then I copied the initrd and linux(kernel in opensuse DVD) to /boot/install.

  * Then I edited menu.lst. Since my boot partition was same as root /dev/sda2, so for me i added

title Install

root (hd0,2)
  
kernel /boot/install/linux
  
initrd /boot/install/initrd

  * Then I rebooted and selected &#8220;Install&#8221; from the boot menu and it worked out.

Once again it can be noticed how powerful Linux is, I dont know if any other OS gives you such options, if you know then please tell me  🙂