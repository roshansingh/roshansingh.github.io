---
id: 700
title: Things I learned in 2019
date: 2020-02-01T10:00:00+00:00
author: Roshan Singh
layout: post
guid: https://www.roshansingh.in/?p=700
permalink: /2020/02/01/things-i-learned-in-2019/
tags:
  - automation
  - infrastructure
  - aws
---

I work in a very small team of three engineers which does not leave much room for dedicating resources for managing infrastructure. We wanted explore managed AWS solutions so that we can focus on delivering features without worry about scaling the infrastructure or dealing with maintaining servers.

This post briefly describes the new technologies that we are using to make our lives easier. I am sure that these solutions may not be very cost effective but then it allows us to focus on things that matter most for us. In the last one year since we have started using these new technologies we have not faced any significant disruption in our daily work schedule because of outage. We just work on features and focus on shipping things.

1. **AWS Lambda for managing API**
We use Python Flask as our backend framework. <a href="https://github.com/Miserlou/zappa" target="_blank">Zappa</a> is being used for deployments. It can bundle the code and dependencies together, upload the package to an S3 bucket, create lambdas and configure api gateway. So pretty much everything. You just have to create a new IAM user with appropriate permissions and zappa takes care of the rest.

2. **AWS S3 for frontend app hosting** S3 buckets are used for hosting the single page apps. Our build tools create the final package and upload it to S3.

3. **Dynamodb**
We now use dynamodb instead of Mongodb. There are some restrictions with respect to index creation and nested objects, but it was the closest thing available to us. AWS now offers documentdb which can be used as an replacement for mongodb. We had to make adjustments around index creation. 

4. **Managed Elasticsearch** Managed Elasticsearch has been a lifesaver. You can directly add new nodes and upgrade storage or VM specs and everything works seamlessly. We had to make several iterations before we could reach the desired configuration for our cluster.

5. **Terraform** 
<a href="https://www.terraform.io/" target="_blank">Terraform</a> is an Infrastructure as code solution. You can define your infrastructure in YAML files. Terraform reads these files and creates the necessary resources by using cloud provider's apis. We save the generated terraform files in a private S3 bucket so that the state is persisted. Terraform is really helpful when you need to create multiple environment. You can write your code once and then create multiple environments by using different api keys or changing the variable names.

6. **Drone** <a href="https://drone.io/" target="_blank">Drone</a> is a continuous delivery platform. We use it for deployment to various environments. We have a staging and a master branch which are pointed to staging and production environments. Every time a pull request is merged into staging or master branch it gets deployed to the lambdas using zappa. For fronend projects, an npm build is triggered and then then the files are uploaded to appropriate S3 buckets.

These new technologies have made it possible for our team to ship incremental features so easy and stress-free. I don't think I can go back to managing servers or VMs again. 
