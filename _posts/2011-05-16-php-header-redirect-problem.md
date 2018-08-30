---
id: 343
title: PHP header redirect problem
date: 2011-05-16T08:37:36+00:00
author: Roshan Singh
layout: post
guid: http://roshansingh.in/blog/?p=343
permalink: /2011/05/16/php-header-redirect-problem/
dsq_thread_id:
  - "950827383"
categories:
  - PHP
---
Few days back when I was writing some PHP, I found out that

<pre class="php" name="code">header( 'location: xyz.php' );</pre>

was not working on my hosting. The problem was headers were being sent by the server before processing the entire php. So I added this function at the top of the php file to buffer the output stream,

<pre class="php" name="code">ob_start();</pre>

and the below function at the bottom of the php file to flush the buffer.

<pre class="php" name="code">ob_end_flush();</pre>

This solved my problem.