---
id: 628
title: Setting up VPN using OpenVPN on Google Cloud or AWS
date: 2014-12-08T06:52:30+00:00
author: Roshan Singh
layout: post
guid: http://roshansingh.in/blog/?p=628
permalink: /2014/12/08/setting-up-vpn-using-openvpn-on-google-cloud-or-aws/
dsq_thread_id:
  - "3301594434"
categories:
  - Hacks
  - Linux
tags:
  - aws
  - google-cloud
  - vpn
---
VPN is a good way to protect your cloud infrastructure from attacks. In the method below I will list down the step how to log in to your vpn machine and access the cloud LAN from you laptop.

I am using Debian on Google Cloud as an example. The setup process should be similar on other clouds. The cloud lan is in the network 10.240.0.0/16 and the vpn lan will be in the network 10.8.0.0/16.

1. Setup firewall rules to allow connection to vpn machine:
  
Networks > your network (usually named default) > Firewall rules:

<pre>Create new:
Name: VPN Traffic
Source IP Ranges: 0.0.0.0/0
Allowed Protocols/Ports: tcp:1194
Target Tags: vpn
</pre>

2. Spawn a new debain machine, go to advanced and tag it vpn. Also enable IP Forwarding.

Log in and run this:
  
&#8220;sudo sysctl -w net.ipv4.ip_forward=1&#8220;
  
Make the same change in &#8220;/etc/sysctl.conf&#8220;

3. Install openvpn:

<pre>sudo apt-get update
sudo apt-get install openvpn
</pre>

4. Set up openvpn

* Create a new directory with the command `sudo mkdir /etc/openvpn/easy-rsa/`.
  
* Copy the necessary files with the command `sudo cp -r /usr/share/doc/openvpn/examples/easy-rsa/2.0/* /etc/openvpn/easy-rsa/`.
  
* Change the ownership of the newly copied directory with the command `sudo chown -R $USER /etc/openvpn/easy-rsa/`.
  
* Edit the file `/etc/openvpn/easy-rsa/vars` and change the variables listed below.

The variables to edit are:

<pre>export KEY_COUNTRY="US"
export KEY_PROVINCE="CA"
export KEY_CITY="SanFrancisco"
export KEY_ORG="Uberlabs"
export KEY_EMAIL="name@host.com"
export KEY_CN="FooBar"
</pre>

Once the file has been edited and saved, we&#8217;ll run several commands must be entered in order to create the certificates:

<pre>cd /etc/openvpn/easy-rsa/
source vars
./clean-all
./build-dh
./pkitool --initca
./pkitool --server server
cd keys
sudo openvpn --genkey --secret ta.key
sudo cp server.crt server.key ca.crt dh1024.pem ta.key /etc/openvpn/
</pre>

Client Certificates

The clients will need to have certificates in order to authenticate to the server. To create these certificates, do the following:

change `KEY_CN` in vars file everytime you create a new client cert, else you will notice that hostname.crt is of 0 bytes. Or you can use `KEY_CN=someuniqueclientcn ./pkitool client1.`

<pre>cd /etc/openvpn/easy-rsa/
source vars
./pkitool hostname
</pre>

Files needed to setup client
  
* /etc/openvpn/ca.crt
  
* /etc/openvpn/easy-rsa/keys/hostname.crt (Where hostname is the hostname of the client).
  
* /etc/openvpn/easy-rsa/keys/hostname.key (Where hostname is the hostname of the client).

sudo cp /usr/share/doc/openvpn/examples/sample-config-files/server.conf.gz /etc/openvpn/
  
sudo gzip -d /etc/openvpn/server.conf.gz

Open /etc/openvpn/server.conf and make the below change. SSH does not work properly in udp mode.

<pre>proto tcp
server 10.8.0.0 255.255.0.0
push "route 10.240.0.0 255.255.0.0" #this is a change
client-to-client
</pre>

While udp is recommended by openvon but ssh was failing when I tried to ssh on some other hosts on the cloud.

Configure iptables to allow traffic from VPN to LAN
  
`iptables -t nat -A POSTROUTING -s 10.8.0.0/16 -o eth0 -j MASQUERADE`

TIP: Restart openvpn every time you make a change in iptables they are not reflected instantly.

sudo service openvpn restart

Client setup:
  
Install openvpn on your laptop. Copy Sample client.conf to /etc/openvpn. Save the client files in /etc/openvpn/

<pre>proto tcp
remote 146.148.64.124 1194
ca ca.crt
cert roshan-home.crt
key roshan-home.key
</pre>

sudo service openvpn restart

sudo ifconfig in 30 seconds you will see a new vpn interface tun0. You should be able to ping 10.240.x.x and ssh.

Additional Debugging:
  
* Use routing table info to see if it is set correctly route -n or netstat -rn
  
* tcpdump to see if icmp packets are received tcpdump -i any icmp
  
* netcat or telnet to see if vpn port is open

<pre>netcat -z -v 146.148.64.124 1194
telnet 146.148.64.124 1194</pre>

References:
  
* [http://www.linux.com/learn/tutorials/457103-install-and-configure-openvpn-server-on-linux](http://www.linux.com/learn/tutorials/457103-install-and-configure-openvpn-server-on-linux "http://www.linux.com/learn/tutorials/457103-install-and-configure-openvpn-server-on-linux")
  
* [https://community.openvpn.net/openvpn/wiki/BridgingAndRouting](https://community.openvpn.net/openvpn/wiki/BridgingAndRouting "https://community.openvpn.net/openvpn/wiki/BridgingAndRouting")
  
* [https://openvpn.net/index.php/open-source/documentation/howto.html#install](https://openvpn.net/index.php/open-source/documentation/howto.html#install "https://openvpn.net/index.php/open-source/documentation/howto.html#install")
  
* [http://www.cyberciti.biz/faq/howto-iptables-show-nat-rules/](http://www.cyberciti.biz/faq/howto-iptables-show-nat-rules/ "http://www.cyberciti.biz/faq/howto-iptables-show-nat-rules/")
  
* [http://www.cyberciti.biz/tips/linux-iptables-how-to-flush-all-rules.html](http://www.cyberciti.biz/tips/linux-iptables-how-to-flush-all-rules.html "http://www.cyberciti.biz/tips/linux-iptables-how-to-flush-all-rules.html")
  
* [https://www.digitalocean.com/community/tutorials/how-to-use-netcat-to-establish-and-test-tcp-and-udp-connections-on-a-vps](https://www.digitalocean.com/community/tutorials/how-to-use-netcat-to-establish-and-test-tcp-and-udp-connections-on-a-vps "https://www.digitalocean.com/community/tutorials/how-to-use-netcat-to-establish-and-test-tcp-and-udp-connections-on-a-vps")
  
* [http://blog.kenyap.com.au/2012/07/txtdb-error-number-2-when-generating.html](http://blog.kenyap.com.au/2012/07/txtdb-error-number-2-when-generating.html "http://blog.kenyap.com.au/2012/07/txtdb-error-number-2-when-generating.html")