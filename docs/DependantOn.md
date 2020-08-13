# @CompetitionlabsJavascriptSdk.DependantOn

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**must** | **[String]** | A rule indicating that Achievements for the achievemnt identifiers provided have to be included. | [optional] 
**mustNot** | **[String]** | A rule indicating that Achievements for the achievemnt identifiers provided will not be included. | [optional] 
**should** | **[String]** | A rule indicating that Achievements for the achievemnt identifiers provided some of them have to be included. Dependancy on shouldMatchAtLeast parameter. | [optional] 
**shouldMatchAtLeast** | **Number** | Dependant on should. Triggered when 2 or more should parameters selected | [optional] [default to 0]


