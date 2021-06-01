# CompetitionLabsAdminServices.UpdateMessageRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**customFields** | **[String]** | A list of id&#39;s used to add cutom fields | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | [**[Metadata]**](Metadata.md) |  | [optional] 
**dependantOn** | [**[Dependancy]**](Dependancy.md) |  | [optional] 
**messageType** | [**MessageType**](MessageType.md) |  | 
**subject** | **String** | The title of the message | 
**body** | **String** | The context of the message | 
**status** | [**MessageStatus**](MessageStatus.md) |  | [optional] 
**scheduling** | [**Scheduling**](Scheduling.md) |  | 
**translations** | **[Object]** |  | [optional] 
**translatableFields** | **[String]** | Message translatable fields | [optional] [readonly] 
**prize** | [**Reward**](Reward.md) |  | [optional] 
**constraints** | **[String]** | Additional constraints, if the value is present it means the | 
**eventReferenceId** | **String** |  | [optional] 
**eventRefType** | **String** |  | [optional] 


