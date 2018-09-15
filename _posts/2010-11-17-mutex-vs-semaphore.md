---
id: 321
title: Mutex Vs Semaphore
date: 2010-11-17T12:14:22+00:00
author: Roshan Singh
layout: post
guid: http://roshansingh.wordpress.com/?p=321
permalink: /2010/11/17/mutex-vs-semaphore/
jabber_published:
  - "1289976262"
  - "1289976262"
email_notification:
  - "1289976264"
  - "1289976264"
dsq_thread_id:
  - "1250743383"
categories:
  - Coding
tags:
  - mutex
  - semaphore
---
The title seemed to bug me a lot, until today when i found a really good explanation. If you google for the difference between Mutex and Semaphore you will see in most of the places it is mentioned that mutex is a binary semaphore. 

But mutex is not actually a binary semaphore.

See these links to understand the difference:
  
1. <http://blog.feabhas.com/2009/09/mutex-vs-semaphores-%e2%80%93-part-1-semaphores/>
  
2. <http://blog.feabhas.com/2009/09/mutex-vs-semaphores-%e2%80%93-part-2-the-mutex/>
  
3. <http://blog.feabhas.com/2009/10/mutex-vs-semaphores-%e2%80%93-part-3-final-part-mutual-exclusion-problems/>