# @CompetitionlabsApplicationServicesSdk.UnitOfMeasure

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | [readonly] 
**spaceName** | **String** | This is the space name which is linked to the account | [readonly] 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | [readonly] 
**name** | **String** | The name of a unit of measure | 
**key** | **String** | The reference to the unit of measure in your system | 
**description** | **String** | The description of a unit of measure | [optional] 
**isoCode** | **String** | An alphabetical or numerical code to identify a unit of measure | [optional] 
**symbol** | **String** | The symbol of a unit of measure | [optional] 
**multiplier** | **Number** | Is used to multiply the value from the standardised one that is being used | 
**unitOfMeasureType** | [**UnitOfMeasureType**](UnitOfMeasureType.md) |  | 
**metadata** | [**[Metadata]**](Metadata.md) |  | [optional] 


