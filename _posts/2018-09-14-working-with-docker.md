---
published: false
---
## Working with docker

During migration of a website which has not been updated in a while, it occured to me that docker will be ideal for this website. It did not have a lot of traffic and business impact was also less. 

So I gave myself a few days to deep dive and learn it. The documentation and getting started guide is just beautiful. Everything was explained properly and all the flags in the docker command were listed down with lot of examples. I will recommend spending a week if you are planning to use it. List down everything that you need and do a bit of research to understand how to do things. There are enough blogs available which can help you with that.

**Good parts:** 

- Not having to worry about host system was such a game changer. I used mac to build my image and Ubuntu for production deployment. I could use any linux distribution for the base image.

- Prebuilt images which can be customized to suit your needs. In my case, I needed something to host my flask application. I used a prebuilt image with nginx and uwsgi. I just to add my code to the image and point uwsgi to load it.

- Docker monitors your services and auto-restarts them for you.

- Scaling services could not have been easier :)

- You can add configuration files for various environments and add them to your service at the time of deployment at any specific location (eg. /etc/myservice.conf) so that your application can read it.

- Logs can be redicted to splunk with just a flag. If you ever had to setup log forwarders you know that it can be a painful experience if you have to do it manually on all the servers. In my case we have a leased data center so we don't have the luxury of using custom built images all the time.

**Things to keep in mind:** 

- Since the containers can die and be restarted automatically. Sometimes it can be started on some other host machine than that it was originally running on. Persisting data like reports or uploaded files or images can be a pain if you do not use a cloud service like S3. You can mount a directory on host machine to the container so I mounted a NFS shared directory on all the docker host machines and then mounted it on the container.

- The images built by docker is fairly large so if you work in a place where you do not have large data limits for your broadband plan I think you should reconsider your decision of using docker.

- Docker image hosting can increase your expenses. Docker hub currently allows one private repo. 

- Some understanding of system administration will be needed if you have to debug something.

- Docker does not directly support cron jobs. You might have to do some tricks with setting up cron service.

- The community edition does not come with a UI for managing docker swarm(cluster of hosts which run docker) or adding/scaling new services. I am using [Portainer](https://portainer.io/) which is fairly easy to understand and use. Kubernetes is another service which can be used to maintain swarm but I found it difficult to understand and set up on your own.


