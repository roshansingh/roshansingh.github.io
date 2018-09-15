---
id: 675
title: 'Spark streaming: Fixing all executors not getting jobs'
date: 2016-10-28T06:26:25+00:00
author: Roshan Singh
layout: post
guid: http://roshansingh.in/blog/?p=675
permalink: /2016/10/28/spark-streaming-fixing-all-executors-not-getting-jobs/
dsq_thread_id:
  - "5259546259"
categories:
  - Coding
tags:
  - spark
  - spark-streaming
---
I was working on a feature recently which needed a streaming job that runs 24&#215;7 and processing 100 million rows per day. The spark web ui is a wonderful tool to look at how things are running internally. While debugging I noticed that the streaming jobs were getting allocated to only one machine. Spark has a set priority to dispatch jobs to the executors based on proximity (on the same host, in the same pool etc) and if they complete the job within a fixed interval then all the jobs are sent to the same executor.

<img class="wp-image-683 aligncenter" src="/wp-content/uploads/2016/10/executor-300x145.png" alt="executor" width="811" height="392" srcset="/wp-content/uploads/2016/10/executor-300x145.png 300w, /wp-content/uploads/2016/10/executor-768x371.png 768w, /wp-content/uploads/2016/10/executor-1024x494.png 1024w, /wp-content/uploads/2016/10/executor.png 1349w" sizes="(max-width: 811px) 100vw, 811px" />

<pre>spark.scheduler.mode FAIR
spark.locality.wait 100ms</pre>

By making the above changes to spark-defaults.conf you can force spark to dispatch the jobs to other nodes. You might have to tweak spark.locality.wait a little so that it suits your needs.