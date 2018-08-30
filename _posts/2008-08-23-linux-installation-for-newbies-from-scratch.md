---
id: 31
title: Linux installation for newbies from scratch
date: 2008-08-23T07:53:53+00:00
author: Roshan Singh
layout: post
guid: http://roshansingh.wordpress.com/?p=31
permalink: /2008/08/23/linux-installation-for-newbies-from-scratch/
dsq_thread_id:
  - "950826999"
categories:
  - Linux
tags:
  - Linux installation
---
I am overwhelmed by the response of people to my previous post on installation of openSUSE from hard drive. So I have decided to give all the instructions from basic. I will discuss the general things, applicable to all distros, and the installation of openSUSE 11.0 in particular.

&#8220;Distros&#8221; if you do not know is distributions which refers to the various flavours of Linux that are available, they have the same basic things but differ in how and what they are packaged with.

<span style="text-decoration:underline;"><strong>GETTING LINUX :<br /> </strong></span>

The most popular distros of Linux are openSUSE, Fedora, Mandriva, Ubuntu, RHEL, Debian etc. More knowledge about various distros can be found on [http://distrowatch.com.](http://distrowatch.com)

openSUSE : <http://www.opensuse.org>
  
Fedora      : <http://fedoraproject.org>
  
Mandriva  : <http://www.mandriva.com>
  
Ubuntu     : <http://www.ubuntu.com>

If you are a student from NIT Durgapur, you can download iso of various distros from our internal LUG server <http://10.0.0.150/download/linux/>. Outside people can access this <http://lug.nitdgp.ac.in/download/linux/>.

After you have obtained the iso, you should burn the iso with some iso burning utililty like Nero Burning ROM. Do not create a new data dvd and browse the iso. This is not the proper way to burn iso images.

<span style="text-decoration:underline;"><strong>PREPARING YOUR HARD DISC :</strong></span>

Now you need to have a partition to install Linux. So it is always advisable that you back-up all your important data, in case anything goes wrong. You can use Gparted. It is an opensource utility for managing partitions. It can be obtained from <http://gparted.sourceforge.net/>. More information on this available on the same site.

Power Quest&#8217;s Partition Magic (compatibility should be checked before using) can also be used for this. A 10 GB partition is sufficient for Linux installation (however a smaller size partition can also be used but you will have less space for software installation).

Also windows vista (I do not have vista, so more information can be found by googling)  has some inbuilt partitioning utility which can also be used.

NOTE:

Also whatever changes you want to make to your partition should be done now because after installation it is difficult to make changes to the partition table and can leave your system unbootable (usually some GRUB errors with some error code will pop u after you boot the system).

Also a FAT partition should also be made. Because NTFS partition can only be mounted as read only, so for data exchange between the two operating systems ( Windows and Linux) it is advisable to have FAT partition which has write permissions also.

<span style="text-decoration:underline;"><strong>INSTALLATION :</strong></span>

Boot your system now and put the DVD and reboot.  Now I assume that you are installing openSUSE 11 and will discuss it in detail.

  * On the first screen that you get select INSTALLATION. Now wait till it loads the necessary drivers.


  * Accept the Terms and Conditions.


  * Select &#8220;New Installation or update if you have an earlier version of openSUSE installed.


  * Select the Time Zone.


  * On the next screen you have 3 options GNOME, KDE 3.5 or KDE 4.0. KDE and GNOME are desktop environments which gives you different types of GUI. Select anyone it will not matter. But if you are looking for better graphics use KDE 4.0.


  * Now you will have partition setup. Linux installers are smart enough to suggest you good options. If you are happy with what it suggests then it is okay. Notice how the windows partitions are mounted. openSUSE automatically mounts NTFS partitions but Fedora does not do that, you have to do that manually and also you have to install some more packages.


  * If you are not satisfied with what is suggested. You can choose &#8220;Create partition setup&#8221; and then &#8220;Custom Partitioning&#8221;. Here you can see all the partitions. Now if you have created a partition earlier on as explained then select the partition and then delete it using the button. Now create a partition if it asks for Logical or Primary select Logical. Now create partitions.


  * First will be Swap, it is generally 1.5 times the RAM. Select the filesystem as Swap.


  * Next comes the Root partition or  &#8216;/&#8217; . Usually 6 GB is sufficient but if you are planning to install servers it is better to take more size. So here the files system is &#8220;ext3&#8221; or &#8220;Reiserfs&#8221; and select the mount point as &#8216;/&#8217;.


  * Next is the home partition where there are the various user accounts. A user when logs in lands up here. Its size also depends on you. Here also the file system is &#8220;ext3&#8221; or &#8220;Reiserfs&#8221; and the mount point is  &#8220;/home&#8221;.


  * Now you can mount the other windows partitions. Double click on the windows partitions and simply set the mount point as &#8220;/windows/c&#8221; or &#8220;/windows/d&#8221; etc. They will get mounted under these directories.


  * Next is the User account settings. Create a user account. By default the &#8220;Root password&#8221; is the same as the password you have set now. Root is the administrator.


  * On the next screen you get the overview of what changes will be made to your system. You can change the softwares to be installed by clicking on the &#8220;Chnege&#8221; botton and selecting &#8220;Software&#8221;. You dont need to worry about them now they can be changed later on.


  * Press Install and accept everything if you get any licence agreements.


  * Wait !  You can now go and have some snacks, you have done a great work today :-). Every other guy cannot install Linux !
</ul> 

Let the sytem reboot and then it will do the necessary settings. After that you will be logged on to the account that you had created.

Yast is the control centre. You can change various settings from there. But donot try to mess up with hardware things and partition or the Boot Loader it can leave your system unbootable.

Initially you will not be able to play mp3 and avi files. I will give details about it and the ways you can install softwares in my next post.

Was this post helpful to you ? Comments, critics are welcome !