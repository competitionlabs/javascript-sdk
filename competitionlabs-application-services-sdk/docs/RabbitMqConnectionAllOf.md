# CompetitionLabsApplicationServices.RabbitMqConnectionAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the consumer | 
**uri** | **String** | The SQS endpoint. | 
**virtualHost** | **String** | The virtual host of the rabbitmq broker | 
**port** | **Number** | The port number on which consumer will connect on rabbitmq broker | 
**userName** | **String** | Consumer username for authentication | 
**password** | **String** | Consumer password for authentication | 
**queueName** | **String** | Name of the queue | 
**exchange** | **String** | Exchange to connect to | [optional] 
**routingKey** | **String** | Routing key to use | [optional] 
**lastKnownStatus** | **String** | Last known status of the connection | 
**lastKnownStatusCode** | **Number** | Status code correspoding to the last known status | 
**transformerId** | **String** | The identifier of the transformer | 
**constraints** | **[String]** | Additional constraints | 


