# CompetitionLabsAdminServices.User

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**objectType** | **String** |  | 
**id** | **String** | A unique system generated identifier | [readonly] 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | [readonly] 
**customFields** | [**[CustomFieldReduced]**](CustomFieldReduced.md) |  | [optional] 
**tags** | [**[TagsReduced]**](TagsReduced.md) | A list of id&#39;s used to tag models | [optional] 
**metadata** | [**[Metadata]**](Metadata.md) |  | [optional] 
**firstName** | **String** | The Name of an individual | [optional] 
**lastName** | **String** | The Surname of an individual | [optional] 
**email** | **String** | The email of the user to log in | 
**contact** | [**Contact**](Contact.md) |  | [optional] 
**constraints** | **[String]** | Additional constraints | 


