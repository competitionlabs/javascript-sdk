# CompetitionLabsAdminServices.Message

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | [readonly] 
**spaceName** | **String** | This is the space name which is linked to the account | [readonly] 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | [readonly] 
**customFields** | [**[CustomFieldReduced]**](CustomFieldReduced.md) |  | [optional] 
**tags** | [**[TagsReduced]**](TagsReduced.md) | A list of id&#39;s used to tag models | [optional] 
**metadata** | [**[Metadata]**](Metadata.md) |  | [optional] 
**dependantOn** | [**[Dependancy]**](Dependancy.md) |  | [optional] 
**messageType** | [**MessageType**](MessageType.md) |  | 
**subject** | **String** | The title of the message | 
**body** | **String** | The context of the message | 
**status** | [**MessageStatus**](MessageStatus.md) |  | 
**scheduling** | [**Scheduling**](Scheduling.md) |  | 
**translations** | **[Object]** |  | [optional] 
**translatableFields** | **[String]** | Message translatable fields | [optional] [readonly] 
**prize** | [**Reward**](Reward.md) |  | [optional] 
**constraints** | **[String]** | Additional constraints, if the value is present it means the | 
**eventReferenceId** | **String** |  | [optional] 
**eventRefType** | **String** |  | [optional] 


