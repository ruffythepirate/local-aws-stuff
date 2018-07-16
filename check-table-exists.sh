#!/bin/bash

aws dynamodb list-tables --endpoint-url http://0.0.0.0:8000 | grep \"$1\" > /dev/null
