
sam package \
  --template-file template.yaml \
  --s3-bucket lambda-bucket \
  --output-template-file packaged.yaml

sam deploy \ 
  --template-file packaged.yaml \
  --stack-name simple-writer
