# @CompetitionlabsJavascriptSdk.MemberMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | [readonly] 
**spaceName** | **String** | This is the space name which is linked to the account | [readonly] 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | [readonly] 
**eventRefType** | [**EventRefType**](docs/EventRefType.md) |  | 
**eventReferenceId** | **String** | The reference ID of the event object | 
**messageType** | [**MessageType**](docs/MessageType.md) |  | 
**subject** | **String** | The title of the message | 
**body** | **String** | The context of the message | 
**prize** | **String** | Unique system identifier of an Award | [readonly] 
**status** | [**MessagStatus**](docs/MessagStatus.md) |  | 
**expiry** | **Date** | The time that the message will disappear after. ISO8601 timestamp | 


