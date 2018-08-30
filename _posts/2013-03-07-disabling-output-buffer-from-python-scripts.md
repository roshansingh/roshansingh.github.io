---
id: 503
title: disabling output buffer from python scripts
date: 2013-03-07T13:15:54+00:00
author: Roshan Singh
layout: post
guid: http://roshansingh.in/blog/?p=503
permalink: /2013/03/07/disabling-output-buffer-from-python-scripts/
dsq_thread_id:
  - "1133923587"
categories:
  - Python
tags:
  - buffer
  - nohup
  - python
---
Today I encountered a weird problem while running a python script with nohup. I was not getting anything in the output file even after waiting for 2-3 minutes which was unusual as I have used nohup on countless occasions with bash scripts and had not seen this issue.

Python itself buffers stdout and stderr which was causing this issue. So you have to explicitly disable buffering when you execute python scripts with nohup.

$nohup python -u script.py

With -u parameter python will disable the buffering and you will get all the outputs as it happens.