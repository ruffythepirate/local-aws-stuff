
const dynamoDbUrl = process.env.DYNAMODB_URL;
const region = process.env.AWS_REGION;

const tableName = 'myTable';





exports.lambda_handler = async (event, context, callback) => {
  // Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: region});

// Create the DynamoDB service object
ddb = new AWS.DynamoDB({ endpoint: new AWS.Endpoint(dynamoDbUrl), apiVersion: '2012-08-10'});

console.log('settings:', dynamoDbUrl, region, tableName);

    // Load the AWS SDK for Node.js
    console.log('starting work...')

var params = {
  TableName: tableName,
  Item: {
    id: { S: '123456'},
    requestId: {S: 'morning!'}
  },
  ConditionExpression: 'attribute_not_exists(id)'
};
    // Call DynamoDB to add the item to the table
    ddb.putItem(params, function(err, data) {
      console.log('callback!');
      if (err) {
        console.log("Error", err);
        callback(err)
      } else {
        console.log("Success", data);
        callback(null, 'hello?')
      }
    });

    console.log('put in work...')

    callback(null, {});

};
