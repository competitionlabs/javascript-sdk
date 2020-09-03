# @CompetitionlabsInsightsServicesSdk.RewardType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | [readonly] 
**spaceName** | **String** | This is the space name which is linked to the account | [readonly] 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | [readonly] 
**name** | **String** | The name of the Reward type | 
**description** | **String** | The description of a reward type | [optional] 
**key** | **String** | A unique key that represents the reward type | 
**unitOfMeasureType** | [**UnitOfMeasureType**](UnitOfMeasureType.md) |  | 
**system** | **Boolean** | A boolean value (true/false) that represents the Reward type state. A system reserved entry (set to true) cannot be deleted. | 
**metadata** | [**[Metadata]**](Metadata.md) |  | [optional] 
**providers** | **String** | The providers of the reward type | [optional] 


