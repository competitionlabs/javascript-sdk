# @CompetitionlabsJavascriptSdk.UpdateAchievementRequestAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A name for the Achievement. Can be translated | [optional] 
**description** | **String** | A name for the Achievement. Can be translated | [optional] 
**isHidden** | **Boolean** | Informs the state of the achievement. True means hidden and false means revealed | [optional] [default to false]
**icon** | **String** | An Icon id that has been pre uploaded to the system to display for Achievement | [optional] 
**ruleSets** | [**[RuleSet]**](docs/RuleSet.md) |  | [optional] 
**dependantOn** | [**DependantOn**](docs/DependantOn.md) |  | [optional] 
**scheduling** | [**Scheduling**](docs/Scheduling.md) |  | [optional] 
**achievementLiveStatus** | [**AchievementLiveStatus**](docs/AchievementLiveStatus.md) |  | [optional] 
**category** | **[String]** | Categorisation of the achievements | [optional] 
**memberGroups** | **[String]** | A group of members that can receive the achievement | [optional] 
**metadata** | [**[Metadata]**](docs/Metadata.md) |  | [optional] 
**translations** | [**[Translation]**](docs/Translation.md) |  | [optional] 
**rewards** | [**[UpdateRewardRequest]**](docs/UpdateRewardRequest.md) |  | [optional] 
**constraints** | **[String]** | Additional constraints | [optional] 


