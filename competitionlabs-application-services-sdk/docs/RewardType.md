# CompetitionLabsAdminServices.RewardType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | [readonly] 
**spaceName** | **String** | This is the space name which is linked to the account | [readonly] 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | [readonly] 
**customFields** | [**[CustomFieldReduced]**](CustomFieldReduced.md) |  | [optional] 
**tags** | [**[TagsReduced]**](TagsReduced.md) | A list of id&#39;s used to tag models | [optional] 
**metadata** | [**[Metadata]**](Metadata.md) |  | [optional] 
**name** | **String** | The name of the Reward type | 
**description** | **String** | The description of a reward type | [optional] 
**key** | **String** | A unique key that represents the reward type | 
**unitOfMeasureType** | [**UnitOfMeasureType**](UnitOfMeasureType.md) |  | 
**translations** | **[Object]** |  | [optional] 
**constraints** | **[String]** | Additional constraints, if the value is present it means the | 


