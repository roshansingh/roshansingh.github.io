---
id: 175
title: mouting network directory as your own directory, NFS
date: 2009-03-09T07:13:09+00:00
author: Roshan Singh
layout: post
guid: http://roshansingh.wordpress.com/?p=175
permalink: /2009/03/09/mouting-network-directory-as-your-own-directory-nfs/
dsq_thread_id:
  - "1496862102"
categories:
  - Linux
tags:
  - Linux
  - repo
---
I manage our [local GLUG server](http://lug.nitdgp.ac.in/). And the server was running out of space. So I was thinking of some alternative, so NFS clicked my mind. I am trying to mirror Ubuntu repo for our college students. 

There is another server in the college which I happen to manage, so I decided to give NFS a try. Since both the machines are running openSUSE the distro of my choice, it was not difficult at all. <http://en.opensuse.org/NFS> This link gave sufficient information about using NFS. 

Within 10 minutes I was done. But I need to see how fast it actually is once the download completes. Hope it works out. Then our repo will be complete with support for Fedora, openSUSE and ubuntu. Check out the repo here.  <http://lug.nitdgp.ac.in/repository/>