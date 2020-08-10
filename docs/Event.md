# CompetitionLabsApplicationServices.Event

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | [readonly] 
**spaceName** | **String** | This is the space name which is linked to the account | [readonly] 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | [readonly] 
**memberId** | **String** | Unique system identifier of a Member | 
**action** | **String** | The identifier that describes the meaning of this event | 
**batchId** | **String** | The batch identifier is used to group related event stream data together. This could be as simple as a UUID or your internal reference to that distinct player session event | [optional] 
**entityId** | **String** | It is a reference to a models ID for any of the following objects - Product, Achievement, Reward, Award | 
**sourceValue** | **Number** | The actual numerical value related to the event | 
**points** | **Number** | A value derived from the source value field. In the context of Product additionally an adjustment factor will be applied | 
**transactionTimestamp** | **Date** | ISO8601 timestamp for when this event happened. All records are stored in UTC time zone | 
**relatesTo** | **String** | Contains relatable object Id&#39;s of type of Competitions or Contests | 
**relatesToExternal** | **String** | Are meant to record extra information about the object that can be the original transaction Id or extra tagging information | 
**metadata** | [**EventMetadata**](EventMetadata.md) |  | 


