---
id: 544
title: Increasing max open files limit on Ubuntu
date: 2014-05-02T17:21:21+00:00
author: Roshan Singh
layout: post
guid: http://roshansingh.in/blog/?p=544
permalink: /2014/05/02/increasing-max-open-files-limit-on-ubuntu/
dsq_thread_id:
  - "2655853156"
categories:
  - Linux
  - Uncategorized
tags:
  - devops
---
To ensure good server performance, the total number of client connections, database files, and log files must not exceed the maximum file descriptor limit on the operating system (ulimit -n).&nbsp;Linux systems limit the number of file descriptors that any one process may open to 1024 per process.

Edit /etc/security/limits.conf and add these lines to the end of the file

<pre>root hard nofile 32000
root soft nofile 32000
</pre>

Replace root with the desired username. The file describes what these parameters mean. Now edit &#8220;`/etc/pam.d/common-session`&#8221; and &#8220;`/etc/pam.d/common-session-noninteractive`&#8221; and add the below line at the end of both these files.

<pre>session required pam_limits.so</pre>

Now run `ulimit -n` to see if the changes have taken place.

<span style="text-decoration: underline;">References:</span>

1.&nbsp;<a title="http://askubuntu.com/questions/162229/how-do-i-increase-the-open-files-limit-for-a-non-root-user" href="http://askubuntu.com/questions/162229/how-do-i-increase-the-open-files-limit-for-a-non-root-user" target="_blank">http://askubuntu.com/questions/162229/how-do-i-increase-the-open-files-limit-for-a-non-root-user</a>