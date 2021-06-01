# CompetitionLabsAdminServices.Connection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | [readonly] 
**spaceName** | **String** | This is the space name which is linked to the account | [readonly] 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | [readonly] 
**objectType** | **String** | The type of consumer to create. Post body has to have either one of the following - KafkaConnection, SqsConnection or RabbitMqConnection model. | 
**transformerId** | **String** | The transformer to use, if empty the default system transformer will be used | [optional] 


