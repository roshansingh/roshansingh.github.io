---
id: 52
title: using GIT behind proxy
date: 2008-08-29T07:25:43+00:00
author: Roshan Singh
layout: post
guid: http://roshansingh.wordpress.com/?p=52
permalink: /2008/08/29/using-git-behind-proxy/
dsq_thread_id:
  - "950827118"
related:
  - 'a:3:{s:5:"title";s:29:"Personalizing GNOME and Unity";s:7:"post_id";s:3:"416";s:9:"thumbnail";s:0:"";}'
  - 'a:3:{s:5:"title";s:51:"Network Manager troubles after wifi password change";s:7:"post_id";s:3:"378";s:9:"thumbnail";s:0:"";}'
  - 'a:3:{s:5:"title";s:39:"Problem due to incompatible Qt versions";s:7:"post_id";s:3:"311";s:9:"thumbnail";s:0:"";}'
  - 'a:3:{s:5:"title";s:57:"Rhythmbox id3 dumex missing plugin problem &#8212; solved";s:7:"post_id";s:3:"298";s:9:"thumbnail";s:0:"";}'
  - 'a:3:{s:5:"title";s:10:"messing up";s:7:"post_id";s:3:"283";s:9:"thumbnail";s:0:"";}'
categories:
  - Linux
tags:
  - git
  - ldtp
  - linux
  - proxy-setting
---
GIT is another software used for version control as SVN or CVS. Today when I was at gym Shreyank requested me to find out a possible solution for using GIT as he saw what I had posted earlier to use SVN and Pidgin. He was really very happy to see Pidgin working.

I came back then I thought I should give it a try too. I visited the [LDTP site.](http://ldtp.freedesktop.org) There I saw a link for using git behind proxy. I dont know how it worked for me. I simply noticed that there was a simple change of protocols while using proxy, git:// was changed to http://.This is what I used to download the source of LDTP

$git clone <http://anongit.freedesktop.org/git/ldtp/ldtp.git>{.http}

I tried and bang! it was working for me. I had done only the usual proxy setting form yast, it sets up the http_proxy Environment variable. Check if it is set for you.

$echo $http_proxy

If the output is not &#8220;http;//10.0.0.1:3128&#8243; then the proxy setting is not done for you. Do this

$export http_proxy=&#8221;http://10.0.0.1:3128&#8221;

It should work for you also.

Cheers 🙂