# @CompetitionlabsApplicationServicesSdk.UpdateApiKeyRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**active** | **Boolean** | To enable or dissable an Api key | [optional] 
**description** | **String** | The description of an Api key | [optional] 
**whiteListIPs** | **[String]** | the IP&#39;s that need to be whitelisted with the Api key | [optional] 
**key** | **String** | An Api key hash | [optional] [readonly] 
**role** | [**Role**](Role.md) |  | [optional] 
**_default** | **Boolean** | To enable the Api key to be default | [optional] 
**metadata** | [**[Metadata]**](Metadata.md) |  | [optional] 


