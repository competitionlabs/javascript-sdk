# CompetitionLabsAdminServices.Repository

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | [readonly] 
**spaceName** | **String** | This is the space name which is linked to the account | [readonly] 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | [readonly] 
**customFields** | [**[CustomFieldReduced]**](CustomFieldReduced.md) |  | [optional] 
**tags** | [**[TagsReduced]**](TagsReduced.md) | A list of id&#39;s used to tag models | [optional] 
**metadata** | [**[Metadata]**](Metadata.md) |  | [optional] 
**name** | **String** | The name of the repository. This cannot contain spaces or specil characters. | 
**description** | **String** | The description of the promotion page | [optional] 
**constraints** | **[String]** | Additional constraints | 
**hostingOptions** | [**HostingOptions**](HostingOptions.md) |  | 


