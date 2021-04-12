# CompetitionLabsApplicationServices.UpdateMessageRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**customFields** | **[String]** | A list of id&#39;s used to add cutom fields | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | [**[Metadata]**](Metadata.md) |  | [optional] 
**memberGroup** | [**[TagsReduced]**](TagsReduced.md) | To which member groups the message will be sent | [optional] 
**members** | **[String]** | A list of specified members to which the message will be sent | 
**messageType** | [**MessageType**](MessageType.md) |  | 
**subject** | **String** | The title of the message | 
**body** | **String** | The context of the message | 
**scheduling** | [**Scheduling**](Scheduling.md) |  | 
**translations** | **[Object]** |  | [optional] 
**constraints** | **[String]** | Additional constraints, if the value is present it means the | 


