# CompetitionLabsAdminServices.CreateSqsConnectionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**objectType** | **String** | The type of consumer to create like Kafka, RabbitMQ or SQS | 
**customFields** | **[String]** | A list of id&#39;s used to add cutom fields | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | [**[Metadata]**](Metadata.md) |  | [optional] 
**name** | **String** | The name of the consumer | 
**uri** | **String** | The SQS endpoint. | 
**acessKey** | **String** | The access key of the IAM user | 
**secretKey** | **String** | The secret key of IAM user | 
**transformerId** | **String** | The id of the transformer to handle incoming messages | 
**description** | **String** | The description of the consumer | [optional] 


