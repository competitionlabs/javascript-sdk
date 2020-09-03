# @CompetitionlabsApplicationServicesSdk.User

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**objectType** | **String** |  | 
**id** | **String** | A unique system generated identifier | [readonly] 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | [readonly] 
**firstName** | **String** | The Name of an individual | [optional] 
**lastName** | **String** | The Surname of an individual | [optional] 
**tfaEnabled** | **Boolean** | To enable two factor authentication | 
**email** | **String** | The email of the user to log in | [optional] 
**contact** | [**Contact**](Contact.md) |  | [optional] 
**emailVerified** | **Boolean** | Is the email verified | 


