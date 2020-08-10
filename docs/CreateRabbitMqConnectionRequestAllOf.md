# CompetitionLabsApplicationServices.CreateRabbitMqConnectionRequestAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the consumer | 
**uri** | **String** | The SQS endpoint. | 
**transformerId** | **String** | The id of the transformer to handle incoming messages | 
**virtualHost** | **String** | The virtual host of the rabbitmq broker | [default to &#39;/&#39;]
**port** | **Number** | The port number on which consumer will connect on rabbitmq broker | [default to 5672]
**useSsl** | **Boolean** | Whether the connection is SSL enabled or not | 
**username** | **String** | Consumer username for authentication | 
**password** | **String** | Consumer password for authentication | 
**queueName** | **String** | Name of the queue | 
**exchange** | **String** | Exchange to connect to | [optional] 
**routingKey** | **String** | Routing key to use | [optional] 

