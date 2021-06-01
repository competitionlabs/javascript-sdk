# CompetitionLabsAdminServices.UpdateWebhookRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**customFields** | **[String]** | A list of id&#39;s used to add cutom fields | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | [**[Metadata]**](Metadata.md) |  | [optional] 
**postToUrl** | **String** | A URL to post the webhook to | 
**triggers** | **[String]** | A list of event triggers | 
**description** | **String** | The description of a Webhook | [optional] 
**name** | **String** | The name of a Webhook | [optional] 
**headers** | [**[Metadata]**](Metadata.md) |  | [optional] 
**transformerId** | **String** | The identifier of the transformer | 


