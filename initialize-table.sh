#!/bin/bash

if ./check-table-exists.sh myTable ; then
  echo "Table already exists, does nothing!"
else 
  aws dynamodb create-table --table-name myTable --attribute-definitions AttributeName=id,AttributeType=S --key-schema AttributeName=id,KeyType=HASH --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5 --endpoint-url http://localhost:8000 --region local
  echo "Create table!"
e
fi
