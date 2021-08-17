#!/bin/bash
cd /home/ec2-user/Githubaction/
docker-compose build --no-cache
docker-compose up -d