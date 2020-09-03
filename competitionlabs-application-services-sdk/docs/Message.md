# @CompetitionlabsJavascriptSdk.Message

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | [readonly] 
**spaceName** | **String** | This is the space name which is linked to the account | [readonly] 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | [readonly] 
**memberGroup** | **[String]** | To which member groups the message will be sent | [optional] 
**members** | **[String]** | A list of specified members to which the message will be sent | 
**messageType** | [**MessageType**](docs/MessageType.md) |  | 
**subject** | **String** | The title of the message | 
**body** | **String** | The context of the message | 
**status** | [**MessagStatus**](docs/MessagStatus.md) |  | 
**scheduling** | [**Scheduling**](docs/Scheduling.md) |  | 
**deprecated** | **Boolean** | A boolean value (true/false) that represents the message state | [default to false]
**metadata** | [**[Metadata]**](docs/Metadata.md) |  | [optional] 


