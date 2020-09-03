# @CompetitionlabsJavascriptSdk.ApiKey

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | [readonly] 
**spaceName** | **String** | This is the space name which is linked to the account | [readonly] 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | [readonly] 
**active** | **Boolean** | To enable or dissable an Api key | [default to true]
**description** | **String** | The description of an Api key | [optional] 
**whiteListIPs** | **[String]** | the IP&#39;s that need to be whitelisted with the Api key | [optional] 
**key** | **String** | An Api key hash | [optional] 
**role** | [**Role**](docs/Role.md) |  | [optional] 
**_default** | **Boolean** | To enable the Api key to be default | [optional] [default to false]


