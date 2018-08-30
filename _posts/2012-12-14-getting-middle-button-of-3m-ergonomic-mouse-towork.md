---
id: 466
title: Getting middle button of 3M ergonomic mouse to work
date: 2012-12-14T20:48:28+00:00
author: Roshan Singh
layout: post
guid: http://roshansingh.in/blog/?p=466
permalink: /2012/12/14/getting-middle-button-of-3m-ergonomic-mouse-towork/
dsq_thread_id:
  - "974847846"
categories:
  - Linux
---
Yes that is a mouse. I use this at work.

<a href="http://roshansingh.in/blog/2012/12/14/getting-middle-button-of-3m-ergonomic-mouse-towork/3m-ergonomic-mouse_1/" rel="attachment wp-att-467"><img class="alignnone size-medium wp-image-467" alt="3M-Ergonomic-Mouse_1" src="http://roshansingh.in.cp-22.webhostbox.net/blog/wp-content/uploads/2012/12/3M-Ergonomic-Mouse_1-300x296.jpg" width="300" height="296" srcset="http://roshansingh.in/blog/wp-content/uploads/2012/12/3M-Ergonomic-Mouse_1-300x296.jpg 300w, http://roshansingh.in/blog/wp-content/uploads/2012/12/3M-Ergonomic-Mouse_1.jpg 600w" sizes="(max-width: 300px) 100vw, 300px" /></a>

But the default configurations did not let me use the middle button. I wanted to use it for scrolling. So I had to add some custom settings to X.

Before we begin, we need to know the device name:

<pre># hal-find-by-capability --capability "input.mouse"

/org/freedesktop/Hal/devices/usb_device_4b4_60_noserial_if0_logicaldev_input</pre>

Then get the product name by

<pre>hal-get-property --udi "/org/freedesktop/Hal/devices/usb_device_4b4_60_noserial_if0_logicaldev_input" --key "info.product"

Areson USB Device</pre>

On an ubuntu system you need to create a file at /usr/share/X11/xorg.conf.d/42-middle-mouse-scrolling.conf with the following contents:

    
    Section "InputClass"
        Identifier "Middle Mouse Button Scrolling"
        MatchProduct "Areson USB Device"
        MatchDevicePath "/dev/input/event*"
        Option "EmulateWheel" "true"
        Option "EmulateWheelButton" "2"
        Option "XAxisMapping" "6 7"
        Option "YAxisMapping" "4 5"
    EndSection
    

Then restart X or reboot.

Original Source: <http://www.conrad.id.au/2011/08/middle-mouse-button-scrolling-on-linux.html>