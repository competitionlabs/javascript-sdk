# CompetitionLabsAdminServices.Collaborator

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | [readonly] 
**spaceName** | **String** | This is the space name which is linked to the account | [readonly] 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | [readonly] 
**email** | **String** | The email of the user to log in | 
**roles** | **[String]** | The access role of an individual | [optional] 
**lastName** | **String** | The Surname of an individual | [optional] 
**firstName** | **String** | The Name of an individual | [optional] 
**availableRoles** | [**CollaboratorRolesAvailable**](CollaboratorRolesAvailable.md) |  | [optional] 


