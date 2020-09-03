# @CompetitionlabsInsightsServicesSdk.Repository

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | [readonly] 
**spaceName** | **String** | This is the space name which is linked to the account | [readonly] 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | [readonly] 
**name** | **String** | The name of the repository. This cannot contain spaces or specil characters. | 
**description** | **String** | The description of the promotion page | [optional] 
**constraints** | **[String]** | Additional constraints | [optional] 
**tags** | **[String]** | The tags associated with this repository | 
**hostingOptions** | [**HostingOptions**](HostingOptions.md) |  | 
**metadata** | [**[Metadata]**](Metadata.md) | Metadata used to describe this file. Content type application/json | [optional] 


