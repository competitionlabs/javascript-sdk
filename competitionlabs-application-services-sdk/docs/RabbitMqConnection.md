# @CompetitionlabsApplicationServicesSdk.RabbitMqConnection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | [readonly] 
**spaceName** | **String** | This is the space name which is linked to the account | [readonly] 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | [readonly] 
**name** | **String** | The name of the consumer | 
**uri** | **String** | The SQS endpoint. | 
**virtualHost** | **String** | The virtual host of the rabbitmq broker | 
**port** | **Number** | The port number on which consumer will connect on rabbitmq broker | 
**useSsl** | **Boolean** | Whether the connection is SSL enabled or not | 
**username** | **String** | Consumer username for authentication | 
**password** | **String** | Consumer password for authentication | 
**queueName** | **String** | Name of the queue | 
**exchange** | **String** | Exchange to connect to | [optional] 
**routingKey** | **String** | Routing key to use | [optional] 
**lastKnownStatus** | **String** | Last known status of the connection | 
**lastKnownStatusCode** | **Number** | Status code correspoding to the last known status | 


