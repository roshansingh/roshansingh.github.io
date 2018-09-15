---
id: 10
title: 'BUG # 1 I fixed a bug on EVOLUTION (yes!)'
date: 2008-05-30T09:45:16+00:00
author: Roshan Singh
layout: post
guid: http://roshansingh.wordpress.com/?p=7
permalink: /2008/05/30/bug-1-i-fixed-a-bug-on-evolution-yes/
dsq_thread_id:
  - "950826934"
categories:
  - Bug fix
  - EVOLUTION/NOSIP
  - Linux
tags:
  - bug-fix
  - evolution
  - linux
---
Yesterday after sitting continuously for 7 hours i was able to fix a bug on Evoltion. Was easy though, but I had no idea where to start. **#evolution and #nosip (jony) ( IRC CHATROOMS ON Gimpnet)** were very helpful. This was the  [bug](http://bugzilla.gnome.org/show_bug.cgi?id=395636) .

I was searching everywhere for glade files everywhere as we (SDU ppl on [NITDGP LUG](http://lug.nitdgp.ac.in) ) did in DC++. Finally on #evolution somebody told that evo does not use glade for creating GUI rather it used libbonobo which used some xml ( which i had ignored till now) files to create GUI. I thank that man for this help.

Then I used grep and then I finally found the location and guess what i had to add only accel=&#8221;\*Contol\*\*Shift\*a&#8221; to add a keyboard shortcut to a menu item like Control+C is used for Copy. **AND THAT WAS ALL. YIPPY !!! I had just fixed a bug.**

So now you can guess how easy it can be.

Now i plan to read Gtk+ and Libbonobo in detail.

So if you have not started till now start today and believe me you cant imagine the kind of thrill and pleasure it gives after doing something. After all you have something you can boast about 🙂 .