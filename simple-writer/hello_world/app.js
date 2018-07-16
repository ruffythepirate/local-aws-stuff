
const dynamoDbUrl = process.env.DYNAMODB_URL;
const region = process.env.AWS_REGION;

const tableName = 'myTable';


// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: region});

// Create the DynamoDB service object
ddb = new AWS.DynamoDB({ endpoint: new AWS.Endpoint(dynamoDbUrl),apiVersion: '2012-10-08'});

    console.log('settings:', dynamoDbUrl, region, tableName);

var params = {
  TableName: tableName,
  Item: {
    ssoId: { N: '123456'},
    requestId: {S: 'morning!'}
  }
};

exports.lambda_handler = async (event, context, callback) => {
    // Load the AWS SDK for Node.js
    console.log('starting work...')

    // Call DynamoDB to add the item to the table
    ddb.putItem(params, function(err, data) {
      console.log('callback!');
      if (err) {
        console.err("Error", err);
        callback(err)
      } else {
        console.log("Success", data);
        callback(null, 'hello?')
      }
    });
};
