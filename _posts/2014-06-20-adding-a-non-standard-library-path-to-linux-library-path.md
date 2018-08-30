---
id: 561
title: adding a non standard library path to linux library path
date: 2014-06-20T14:57:33+00:00
author: Roshan Singh
layout: post
guid: http://roshansingh.in/blog/?p=561
permalink: /2014/06/20/adding-a-non-standard-library-path-to-linux-library-path/
dsq_thread_id:
  - "2781352850"
categories:
  - Uncategorized
---
Sometimes when you compile some libraries like opencv, they install the compiled shared libraries in non standard path `/usr/local/opencv/lib` instead of `/usr/lib` or `/usr/local/lib`.  So when you try to compile your code against these libraries, gcc will not be able to locate them or when you are using python bindings, python wont be able to locate them.  The errors will be something like this:

<pre>error while loading shared libraries: libopencv_core.so.2.4:
</pre>

You need to add them to linux library path. Create a file `/etc/ld.so.conf.d/opencv.conf` and put the path of your library in it.

<pre>/usr/local/opencv/lib</pre>

After this run:

<pre>sudo ldconfig</pre>

Then run sudo `ldconfig -v` to check if it was located.
  
If you are not sure about the path of the installed libraries you can use the `locate` utility. If locate is not able to find the path and you are sure that you have installed it, run this to update the index.

<pre>sudo updatedb</pre>