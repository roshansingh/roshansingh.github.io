---
id: 49
title: Using SVN and Pidgin via(or behind) proxy
date: 2008-08-28T19:54:54+00:00
author: Roshan Singh
layout: post
guid: http://roshansingh.wordpress.com/?p=49
permalink: /2008/08/28/using-svn-and-proxy-behind-proxy/
dsq_thread_id:
  - "950827031"
categories:
  - Linux
tags:
  - Linux
  - pidgin
  - proxy setting
  - svn
---
As our college has installed new proxy server, it has become difficult for people to use Linux. So I spent some time and then found out ways to resolve some problems.

SVN can be easily configured to work behind proxy. In your home directory search for the .subversion directory. If the directory does not exist, open a terminal type svn and hit enter the default configuration files will be created. As the name suggests it is a hidden directory. Inside it and there is a file name &#8220;servers&#8221;. All the proxy settings can be done here. Now notice the string &#8220;[global]&#8221;  which is at the last. Here you can do the necessary changes. Remove the hash &#8220;#&#8221; in front of http-proxy-host and http-proxy-port and align it to left, I mean delete any space because it looks for the settings from the first column. Now add the 10.0.0.1 and 3128 port no. After editing it should look like this

&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8211;

\## leave the lines above it untouched, it is always better to back up a configuration file before editing

[global]
  
\# http-proxy-exceptions = *.exception.com, www.internal-site.org
  
http-proxy-host = 10.0.0.1
  
http-proxy-port = 3128
  
\# http-proxy-username = defaultusername
  
\# http-proxy-password = defaultpassword
  
\# http-compression = no
  
\# http-auth-types = basic;digest;negotiate
  
\# No http-timeout, so just use the builtin default.
  
\# No neon-debug-mask, so neon debugging is disabled.
  
\# ssl-authority-files = /path/to/CAcert.pem;/path/to/CAcert2.pem
  
&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8211;

Now it is done. Check if it works, it worked for me. If it still doesnot work set the http_proxy variable.

$export http_proxy=http://10.0.0.1:3128

Now check it.

$echo $http_proxy

It should show &#8216;http://10.0.0.1:3128&#8217; .

Pidgin can be very easily configured for GTalk likewise,

Go to manage accounts, and select the account then go to the advanced tab. Check &#8220;Force old (port 5223) SSL. Then change the Connect port to 443. Now go to proxy options and then select HTTP and then set Host as 10.0.0.1 and port as 3128. You are now done. Enjoy. 🙂