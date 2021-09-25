#!/bin/bash
cd /home/ec2-user/Githubaction/
docker system prune -f
docker-compose build --no-cache
docker-compose up -d