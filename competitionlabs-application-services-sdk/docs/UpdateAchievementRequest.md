# @CompetitionlabsApplicationServicesSdk.UpdateAchievementRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**name** | **String** | A name for the Achievement. Can be translated | [optional] 
**description** | **String** | A name for the Achievement. Can be translated | [optional] 
**isHidden** | **Boolean** | Informs the state of the achievement. True means hidden and false means revealed | [optional] 
**icon** | **String** | An Icon id that has been pre uploaded to the system to display for Achievement | [optional] 
**ruleSets** | [**[RuleSet]**](RuleSet.md) |  | [optional] 
**dependantOn** | [**DependantOn**](DependantOn.md) |  | [optional] 
**scheduling** | [**Scheduling**](Scheduling.md) |  | [optional] 
**achievementLiveStatus** | [**AchievementLiveStatus**](AchievementLiveStatus.md) |  | [optional] 
**category** | **[String]** | Categorisation of the achievements | [optional] 
**memberGroups** | **[String]** | A group of members that can receive the achievement | [optional] 
**metadata** | [**[Metadata]**](Metadata.md) |  | [optional] 
**translations** | [**[Translation]**](Translation.md) |  | [optional] 
**rewards** | [**[UpdateRewardRequest]**](UpdateRewardRequest.md) |  | [optional] 
**constraints** | **[String]** | Additional constraints | [optional] 


