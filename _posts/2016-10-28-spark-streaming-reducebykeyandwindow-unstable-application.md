---
id: 679
title: Spark streaming reduceByKeyAndWindow unstable application
date: 2016-10-28T06:41:26+00:00
author: Roshan Singh
layout: post
guid: http://roshansingh.in/blog/?p=679
permalink: /2016/10/28/spark-streaming-reducebykeyandwindow-unstable-application/
dsq_thread_id:
  - "5259568335"
categories:
  - Coding
  - Uncategorized
tags:
  - spark
  - spark-streaming
---
I wanted to run a job which runs 24&#215;7 and which reports if certain keywords occur more than a N times in the stream. Spark streaming looked a ideal candidate for this task. Spark has a [reduceByKeyAndWindow function](http://spark.apache.org/docs/latest/streaming-programming-guide.html#window-operations) which was exactly what I was looking for.

I decided to use a window length of 1 minute and slide interval of 30 minutes. I had assumed that it will discard all the keys every 30 minutes. While running the job I noticed that the memory usage and the processing time kept on increasing to a point that the application would never be stable i.e. each job was taking more time than the window interval. So new jobs kept on getting added to the processing queue.

Since the documentation on this function is so little that I had to ask around the mailing list for the . After a few days a guy responded that I needed to add a filter function which will discard the unwanted keys.

<pre>reduceByKeyAndWindow(reduceRows, invReduceRows, 1800, 60, filterFunc=filterOldKeys)</pre>

So now the actual function call looks something like this. The filterOldKey is a simple function where I check if count of the key is greater than 0. This solved my problem.