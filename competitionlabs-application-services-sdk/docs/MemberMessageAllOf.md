# CompetitionLabsAdminServices.MemberMessageAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
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


