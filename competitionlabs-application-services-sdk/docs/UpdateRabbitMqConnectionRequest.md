# @CompetitionlabsApplicationServicesSdk.UpdateRabbitMqConnectionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**objectType** | **String** | The type of consumer to create | 
**name** | **String** | The name of the consumer | [optional] 
**uri** | **String** | The SQS endpoint. | [optional] 
**virtualHost** | **String** | The virtual host of the rabbitmq broker | [optional] 
**port** | **Number** | The port number on which consumer will connect on rabbitmq broker | [optional] 
**useSsl** | **Boolean** | Whether the connection is SSL enabled or not | [optional] 
**username** | **String** | Consumer username for authentication | [optional] 
**password** | **String** | Consumer password for authentication | [optional] 
**queueName** | **String** | Name of the queue | [optional] 
**exchange** | **String** | Exchange to connect to | [optional] 
**routingKey** | **String** | Routing key to use | [optional] 
**transformerId** | **String** | The id of the transformer to handle incoming messages | [optional] 


