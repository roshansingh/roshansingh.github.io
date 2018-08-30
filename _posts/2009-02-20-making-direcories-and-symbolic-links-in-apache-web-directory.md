---
id: 160
title: making direcories and symbolic links in apache web directory
date: 2009-02-20T15:53:51+00:00
author: Roshan Singh
layout: post
guid: http://roshansingh.wordpress.com/?p=160
permalink: /2009/02/20/making-direcories-and-symbolic-links-in-apache-web-directory/
dsq_thread_id:
  - "950827003"
related:
  - 'a:3:{s:5:"title";s:29:"Personalizing GNOME and Unity";s:7:"post_id";s:3:"416";s:9:"thumbnail";s:0:"";}'
  - 'a:3:{s:5:"title";s:51:"Network Manager troubles after wifi password change";s:7:"post_id";s:3:"378";s:9:"thumbnail";s:0:"";}'
  - 'a:3:{s:5:"title";s:39:"Problem due to incompatible Qt versions";s:7:"post_id";s:3:"311";s:9:"thumbnail";s:0:"";}'
  - 'a:3:{s:5:"title";s:57:"Rhythmbox id3 dumex missing plugin problem &#8212; solved";s:7:"post_id";s:3:"298";s:9:"thumbnail";s:0:"";}'
  - 'a:3:{s:5:"title";s:10:"messing up";s:7:"post_id";s:3:"283";s:9:"thumbnail";s:0:"";}'
categories:
  - Linux
tags:
  - apache
  - Linux
---
This made me worried for the past two days. Thanks to IRC I got the solution.
  
Add these lines at the end of your default-server.conf file for apache. On opensuse it is in /etc/apache2/defualt-server.conf

<Directory &#8220;path to directory like /srv/www/htdocs/download&#8221;>
  
options Indexes Includes FollowSymLinks SymLinksifOwnerMatch ExecCGI MultiViews
  
AllowOverride All
  
Order allow,deny

Allow from all

</Directory>

Then restart apache.
  
This makes the directory visible from web browser and makes apache follow symbolic links !
  
This was really painful yet the answer was so simple.
  
I need to look in apache configurations properly.