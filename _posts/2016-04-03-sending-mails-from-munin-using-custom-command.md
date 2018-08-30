---
id: 668
title: Sending mails from munin using custom command
date: 2016-04-03T04:30:32+00:00
author: Roshan Singh
layout: post
guid: http://roshansingh.in/blog/?p=668
permalink: /2016/04/03/sending-mails-from-munin-using-custom-command/
dsq_thread_id:
  - "4715605430"
categories:
  - Hacks
tags:
  - munin
---
We use Sendgrid for email delivery on our cloud. Using custom commands in munin can be tricky. After struggling for some time I wrote a small python script to send emails from munin using sendgrid.

Add this line to munin.conf

    contacts mycontact
    contact.mycontact.command /usr/bin/sendemail alerts@example.com "[Munin] Alert for ${var:host}" "warnings: ${var:wfields} / criticals: ${var:cfields}"
    contact.mycontact.text text
    

Save this file as sendemail in /usr/bin and give it execute permission using chmod +x /usr/bin/sendemail. You should configure the email and sendgrid login details before using this script.

    #!/usr/bin/python
    import smtplib, sys
    from email.mime.text import MIMEText
    from email.Header import Header
    
    DEFAULT_SENDER = 'noreply@example.com'
    SENDGRID_USER = 'user'
    SENDGRID_PASSWORD = 'pass'
    
    if len(sys.argv) < 3:
        print 'Usage: ./sendemail "foo@example.com" "This is the subject" "This is the email text"'
        sys.exit(1)
    
    smtp = smtplib.SMTP('smtp.sendgrid.net', 2525, 'www.example.com')
    smtp.starttls()
    smtp.login(SENDGRID_USER, SENDGRID_PASSWORD)
    
    emailIds = sys.argv[1].split(',')
    subject = sys.argv[2]
    body = sys.argv[3]
    
    message = MIMEText(body)
    message['Subject'] = Header(subject)
    message['From']    = DEFAULT_SENDER
    message['To']      = ','.join(emailIds)
    
    smtp.sendmail(DEFAULT_SENDER, emailIds, message.as_string())
    

You should start receiving alerts from munin.