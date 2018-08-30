---
id: 246
title: Running topcoder applet behind proxy
date: 2009-11-11T09:17:06+00:00
author: Roshan Singh
layout: post
guid: http://roshansingh.wordpress.com/?p=246
permalink: /2009/11/11/running-topcoder-applet-behind-proxy/
dsq_thread_id:
  - "950827016"
categories:
  - Linux
tags:
  - Linux
  - Topcoder
---
Somehow the default Iced Tea Webstart throws NullPointerException which I dont know how to debug. I downloaded SUN JDK and installed on my machine, you can use your package manager also. It usually gets installed in /usr/java/jdk-<version> and /usr/java/latest links to the latest version installed, so it is better to use the later. Then download the ContestApplet.jnlp and simply sun the following command to get it working.

$ /usr/java/latest/bin/javaws ContestApplet.jnlp

It uses default system proxy to download the content from Topcoder needed to execute the arena. When the arena is open set the proxy and use HTTP Tunnel A or B. For us Tunnel B works.