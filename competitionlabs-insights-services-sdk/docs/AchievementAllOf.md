# @CompetitionlabsInsightsServicesSdk.AchievementAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A name for the Achievement. Can be translated | 
**description** | **String** | A name for the Achievement. Can be translated | [optional] 
**icon** | **String** | An Icon id that has been pre uploaded to the system to display for Achievement | 
**ruleSets** | [**[RuleSet]**](RuleSet.md) |  | 
**dependantOn** | [**DependantOn**](DependantOn.md) |  | [optional] 
**scheduling** | [**Scheduling**](Scheduling.md) |  | 
**achievementLiveStatus** | [**AchievementLiveStatus**](AchievementLiveStatus.md) |  | 
**category** | **[String]** | Categorisation of the achievements | [optional] 
**memberGroups** | **[String]** | A group of members that can receive the achievement | [optional] 
**metadata** | [**[Metadata]**](Metadata.md) |  | [optional] 
**translations** | [**[Translation]**](Translation.md) |  | [optional] 
**translatableFields** | **[String]** | Achievements translatable fields | [optional] [readonly] 
**rewards** | [**[RewardReduced]**](RewardReduced.md) |  | [optional] 
**constraints** | **[String]** | Additional constraints, if set means true | [optional] 


