# CompetitionLabsApplicationServices.Message

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | [readonly] 
**spaceName** | **String** | This is the space name which is linked to the account | [readonly] 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | [readonly] 
**customFields** | [**[CustomFieldReduced]**](CustomFieldReduced.md) |  | [optional] 
**tags** | [**[TagsReduced]**](TagsReduced.md) | A list of id&#39;s used to tag models | [optional] 
**metadata** | [**[Metadata]**](Metadata.md) |  | [optional] 
**memberGroup** | [**[TagsReduced]**](TagsReduced.md) | A list of tag models of member groups t5o which the message will be sent | [optional] 
**members** | **[String]** | A list of member id&#39;s to which the message will be sent | 
**messageType** | [**MessageType**](MessageType.md) |  | 
**subject** | **String** | The title of the message | 
**body** | **String** | The context of the message | 
**status** | [**MessageStatus**](MessageStatus.md) |  | 
**scheduling** | [**Scheduling**](Scheduling.md) |  | 
**translations** | **[Object]** |  | [optional] 
**translatableFields** | **[String]** | Message translatable fields | [optional] [readonly] 
**constraints** | **[String]** | Additional constraints, if the value is present it means the | 


