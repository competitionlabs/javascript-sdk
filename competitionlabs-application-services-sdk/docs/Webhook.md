# CompetitionLabsApplicationServices.Webhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | [readonly] 
**spaceName** | **String** | This is the space name which is linked to the account | [readonly] 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | [readonly] 
**customFields** | [**[CustomFieldReduced]**](CustomFieldReduced.md) |  | [optional] 
**tags** | [**[TagsReduced]**](TagsReduced.md) | A list of id&#39;s used to tag models | [optional] 
**metadata** | [**[Metadata]**](Metadata.md) |  | [optional] 
**postToUrl** | **String** | A URL to post the webhook to | 
**triggers** | **[String]** | A list of event triggers | 
**description** | **String** | The description of a Webhook | [optional] 
**headers** | [**[Metadata]**](Metadata.md) |  | [optional] 
**transformerId** | **String** | The identifier of the transformer | 
**status** | [**ConnectionState**](ConnectionState.md) |  | 


