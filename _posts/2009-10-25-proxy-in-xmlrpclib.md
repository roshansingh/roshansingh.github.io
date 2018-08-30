---
id: 237
title: proxy in xmlrpclib
date: 2009-10-25T20:56:13+00:00
author: Roshan Singh
layout: post
guid: http://roshansingh.wordpress.com/?p=237
permalink: /2009/10/25/proxy-in-xmlrpclib/
dsq_thread_id:
  - "950827244"
categories:
  - GScribble
tags:
  - proxy
  - python
  - xmlrpclib
---
This is just an extension of the example shown here <a title="http://docs.python.org/library/xmlrpclib.html#example-of-client-usage" href="http://docs.python.org/library/xmlrpclib.html#example-of-client-usage" target="_blank">http://docs.python.org/library/xmlrpclib.html#example-of-client-usage</a> .

<pre>import xmlrpclib, httplib
class ProxiedTransport(xmlrpclib.Transport):
    def set_proxy(self, proxy):
        self.proxy = proxy
	self.puser_pass = puser_pass
    def make_connection(self, host):
        self.realhost = host
        h = httplib.HTTP(self.proxy)
        return h
    def send_request(self, connection, handler, request_body):
        connection.putrequest("POST", 'http://%s%s' % (self.realhost, handler))
    def send_host(self, connection, host):
        connection.putheader('Host', self.realhost)
	connection.putheader('User-agent', self.user_agent)
	# Check is proxy username and password is set
	if len(self.puser_pass.strip()) != 0:
		connection.putheader('Proxy-authorization','Basic '+self.puser_pass)

p = ProxiedTransport()
proxyUsername = 'proxyuser'
proxyPassword = 'proxypass'
puser_pass = base64.encodestring('%s:%s' % (proxyUsername, proxyPassword)).strip()

p.set_proxy('proxy-server:8080', puser_pass)
server = xmlrpclib.Server('http://time.xmlrpc.com/RPC2', transport=p)
print server.currentTime.getCurrentTime()</pre>

A similar code has been used in my blog client <a title="GScribble" href="http://sourceforge.net/projects/gscribble" target="_blank">GScribble</a>.