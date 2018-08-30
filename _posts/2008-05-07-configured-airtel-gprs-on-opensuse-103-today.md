---
id: 7
title: Configured Airtel GPRS on openSuSE 10.3 today ! (UPDATED)
date: 2008-05-07T12:53:48+00:00
author: Roshan Singh
layout: post
guid: http://roshansingh.wordpress.com/?p=3
permalink: /2008/05/07/configured-airtel-gprs-on-opensuse-103-today/
dsq_thread_id:
  - "950826915"
related:
  - 'a:3:{s:5:"title";s:29:"Personalizing GNOME and Unity";s:7:"post_id";s:3:"416";s:9:"thumbnail";s:0:"";}'
  - 'a:3:{s:5:"title";s:51:"Network Manager troubles after wifi password change";s:7:"post_id";s:3:"378";s:9:"thumbnail";s:0:"";}'
  - 'a:3:{s:5:"title";s:39:"Problem due to incompatible Qt versions";s:7:"post_id";s:3:"311";s:9:"thumbnail";s:0:"";}'
  - 'a:3:{s:5:"title";s:57:"Rhythmbox id3 dumex missing plugin problem &#8212; solved";s:7:"post_id";s:3:"298";s:9:"thumbnail";s:0:"";}'
  - 'a:3:{s:5:"title";s:10:"messing up";s:7:"post_id";s:3:"283";s:9:"thumbnail";s:0:"";}'
categories:
  - Linux
tags:
  - Airtel GPRS
  - bluetooth
  - Linux
---
Finally, I was able to configure **airtel gprs** on **Linux** via **bluetooth**. Was not difficult at all. Google is like a friend always available when y. Was not able to use kinternet which usually others prefer to use but then what i did works&#8230;.

Here is how to do this :

You have to get the Mobile office settings.(For **NOKIA USERS**, then you have set the access point to **airtelgprs.com.** This is very important because even if you have the settings you will not be able to connect your pc to net. This problem cost me an entire day. Believe the customer care people are complete idiots, they said me to meet some experts. )
  
For GNOME users, to setup your Bluetooth device under Linux you will need BlueZ (this utility allows you to test if your bluetooth is connected properly and it is being detected or you can follow the command line as explained). You need root pemission to do all this&#8230;

**For starting bluetooth service**

#/etc/init.d/bluetooth start<span style="font-size:xx-small;"><span style="font-family:Verdana;"><strong> </strong></span></span>

**Now detect your mobile**

#sdptool search DUN

here you will find the MAC address of your device copy it you will need it later on

Use this Mac address in the following command to bind it with the rfcomm device(be sure to type exactly the same)

#rfcomm bind 0 <mac\_address\_of_phone> 1

#mknod /dev/rfcomm0 c 216 0

**Configure dialer
  
** Everything, except the dialer that will dial out through your PC to your GPRS service provider, is now set. For this, you can use the standard wvdial program that comes with every Linux distribution and is also easy to configure. To configure wvdial, first, open the file called /etc/wvdial.conf and enter the following lines.

It is better to copy this file before editing (back up in case anything goes wrong then replace this with the original)

 <span style="font-family:Verdana;font-size:xx-small;">[Modem0]<br /> Modem = /dev/rfcomm0<br /> Baud = 57600<br /> SetVolume = 0<br /> Dial Command = ATDT<br /> Init1 = ATZ<br /> Init3 = ATM0<br /> FlowControl = None<br /> [Dialer GPRS]<br /> Username = user<br /> Password = user<br /> Phone = *99***1#<br /> Stupid Mode = 1<br /> Inherits = Modem0</span>

Here if it doesnot work try replace the phone line with

 <span style="font-family:Verdana;font-size:xx-small;">Phone = ATD*99***1#</span>

In the above file you will notice that we have used the /dev/rfcomm0 device as the modem and &#8216;user&#8217; as the username and password. wvdial won&#8217;t dial unless you provide a username and password to it; so you can give any name in this place. The numbers by which you will dial for GPRS are standard numbers and are independent of any carriers. The numbers you can use are \*99\***x# where x ranges from 0 to 9.

**Dial out
  
** Now, you have to run the wvdial command with the appropriate dialer name to connect you to the Internet. The command is as follows.

<span style="font-family:Verdana;font-size:xx-small;">#wvdial GPRS</span>

After running the above command you will be connected to the Internet within seconds. Once you are connected, run the command &#8216;ifconfig&#8217; and you will find that your ppp0 connection is active and has obtained an IP address from your GPRS service provider. This means you are ready to surf.

&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;

<span style="text-decoration:underline;"><strong>NOTE:</strong></span>

Later i found out that /dev/rfcomm0 vanishes everytime you restart your PC. So repeat these steps

#rfcomm bind 0 <mac\_address\_of_phone> 1

#wvdial GPRS

**You can also make a script ( i have made for myself) like dialer which can be like this**

#dialer for GPRS

rfcomm bind 0 <mac\_address\_of\_your\_phone> 1

wvdial GPRS

#end of script

**Then make this script executable** 

#chmod 777 dialer

**You are now ready to go&#8230;&#8230;. use this for connecting**

#./dialer

**If you get this error &#8220;connection refused &#8221; then your mobile is not properly paired..**

**Switch it off and then switch it on and try to pair again , this solved the problem for me.**

&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;

Please let me know if it works or what error you face&#8230;.

 <span style="font-family:Verdana;font-size:xx-small;"></span>