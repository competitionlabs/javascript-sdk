# CompetitionLabsApplicationServices.ActionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | [readonly] 
**spaceName** | **String** | This is the space name which is linked to the account | [readonly] 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | [readonly] 
**name** | **String** | The name of the Action Helper | 
**key** | **String** | A unique key that represents an action helper | 
**description** | **String** | The description of the rule action helper for your reference | [optional] 
**system** | **Boolean** | A boolean value (true/false) that represents the Action Helpers state. A system reserved entry (set to true) cannot be deleted. | [optional] [default to false]
**unitOfMeasureType** | [**UnitOfMeasureType**](UnitOfMeasureType.md) |  | 
**metadata** | [**[Metadata]**](Metadata.md) |  | [optional] 


