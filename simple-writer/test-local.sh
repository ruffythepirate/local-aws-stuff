#!/bin/bash

docker network create simple-writer

docker run -d -p 8000:8000 --network=simple-writer --network-alias=dynamodb cnadiminti/dynamodb-local:latest

sam local generate-event schedule | sam local invoke --docker-network=simple-writer



