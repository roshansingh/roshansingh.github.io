---
id: 106
title: restoring panel for KDE 4.1
date: 2008-12-19T10:59:43+00:00
author: Roshan Singh
layout: post
guid: http://roshansingh.wordpress.com/?p=106
permalink: /2008/12/19/restoring-panel-for-kde-41/
dsq_thread_id:
  - "950827060"
categories:
  - Uncategorized
---
I installed openSUSE 11.1 and within no time i screwed my panel while trying to personalize things.

This is how we restore it to default, (read it in opensuse forum)

Log out and open a command prompt using Ctrl+Alt+F1. Then login as same user. And run this command

rm .kde4/share/config/plasma-appletsrc

This is the filewhere configuratations are stored for any user. If you remove it the default settings will reappear.

Then use Ctrl+Alt+F7 to log back in.

On KDE 3.5, there is &#8220;kicker&#8221; that restores the panel. When I tried that on 4.1, the default KDE 3.5 panel appeared. So it is better to use the above command. But i still feel that 3.5 is better. It is much stable but the graphics of 4.1 is too good.

You can run kicker by pressing Alt+F2 and then typing kicker and pressing enter.