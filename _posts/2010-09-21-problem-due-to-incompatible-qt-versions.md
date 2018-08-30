---
id: 311
title: Problem due to incompatible Qt versions
date: 2010-09-21T00:25:19+00:00
author: Roshan Singh
layout: post
guid: http://roshansingh.wordpress.com/?p=311
permalink: /2010/09/21/problem-due-to-incompatible-qt-versions/
jabber_published:
  - "1285008921"
  - "1285008921"
email_notification:
  - "1285008923"
  - "1285008923"
dsq_thread_id:
  - "1012497185"
categories:
  - Linux
---
I had recently bought MTS connection which gave a usb stick to connect it. It also gave a rpm for the GUI. Later I found that due to it, some software like vlc and skype had stopped working.

I used to get errors like this:
  
`<br />
roshan@localhost:~/Downloads$ vlc<br />
VLC media player 1.1.3 The Luggage (revision exported)<br />
Blocked: call to unsetenv("DBUS_ACTIVATION_ADDRESS")<br />
Blocked: call to unsetenv("DBUS_ACTIVATION_BUS_TYPE")<br />
Warning: call to signal(13, 0x1)<br />
[0x9e9c8fc] main libvlc: Running vlc with the default interface. Use 'cvlc' to use vlc without interface.<br />
[0xa02ba9c] skins2 interface error: no suitable dialogs provider found (hint: compile the qt4 plugin, and make sure it is loaded properly)<br />
[0xa02ba9c] skins2 interface error: cannot instanciate qt4 dialogs provider<br />
[0x9e9c8fc] main libvlc error: interface "default" initialization failed`
  
`<br />
roshan@localhost:~/Downloads$ skype<br />
Fatal: Cannot mix incompatible Qt libraries<br />
Aborted (core dumped)`

The problem was with the linking of Qt libraries.
  
`roshan@localhost:~/Downloads$ ldd /usr/bin/skype |grep -i Qt<br />
libQtDBus.so.4 => /usr/lib/libQtDBus.so.4 (0x00406000)<br />
libQtGui.so.4 => /usr/local/bin/ztemtApp/bin/libQtGui.so.4 (0x00efa000)<br />
libQtNetwork.so.4 => /usr/lib/libQtNetwork.so.4 (0x002eb000)<br />
libQtCore.so.4 => /usr/local/bin/ztemtApp/bin/libQtCore.so.4 (0x0084e000)<br />
libQtXml.so.4 => /usr/lib/libQtXml.so.4 (0x00122000)`

The libraries installed by the MTS stick had screwed the system. Notice that libQtGui links to /usr/local/bin/ztemtApp/bin/libQtGui.so.4.

So since I had forgotten which rpm had installed it I simply moved /usr/local/bin/ztemtApp/ to some location not in my path and things were back to normal.

`roshan@localhost:~/Downloads$ ldd /usr/bin/skype |grep -i Qt<br />
libQtDBus.so.4 => /usr/lib/libQtDBus.so.4 (0x00e24000)<br />
libQtGui.so.4 => /usr/lib/libQtGui.so.4 (0x00eff000)<br />
libQtNetwork.so.4 => /usr/lib/libQtNetwork.so.4 (0x002eb000)<br />
libQtCore.so.4 => /usr/lib/libQtCore.so.4 (0x073ae000)<br />
libQtXml.so.4 => /usr/lib/libQtXml.so.4 (0x00d1a000)`