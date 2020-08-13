# @CompetitionlabsJavascriptSdk.UpdateRabbitMqConnectionRequestAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the consumer | [optional] 
**uri** | **String** | The SQS endpoint. | [optional] 
**virtualHost** | **String** | The virtual host of the rabbitmq broker | [optional] [default to &#39;/&#39;]
**port** | **Number** | The port number on which consumer will connect on rabbitmq broker | [optional] [default to 5672]
**useSsl** | **Boolean** | Whether the connection is SSL enabled or not | [optional] 
**username** | **String** | Consumer username for authentication | [optional] 
**password** | **String** | Consumer password for authentication | [optional] 
**queueName** | **String** | Name of the queue | [optional] 
**exchange** | **String** | Exchange to connect to | [optional] 
**routingKey** | **String** | Routing key to use | [optional] 
**transformerId** | **String** | The id of the transformer to handle incoming messages | [optional] 


