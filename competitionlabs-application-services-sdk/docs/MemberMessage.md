# CompetitionLabsAdminServices.MemberMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | [readonly] 
**spaceName** | **String** | This is the space name which is linked to the account | [readonly] 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | [readonly] 
**eventRefType** | [**EventRefType**](EventRefType.md) |  | 
**eventReferenceId** | **String** | The reference ID of the event object | 
**messageType** | [**MessageType**](MessageType.md) |  | 
**subject** | **String** | The title of the message | 
**body** | **String** | The context of the message | 
**prize** | **String** | Unique system identifier of an Award | [readonly] 
**status** | [**MessageStatus**](MessageStatus.md) |  | 
**expiry** | **Date** | The time that the message will disappear after. ISO8601 timestamp | 
**metadata** | [**[Metadata]**](Metadata.md) |  | [optional] 
**tags** | [**[TagsReduced]**](TagsReduced.md) | A list of Strings of groups that the message belongs to. | [optional] 


