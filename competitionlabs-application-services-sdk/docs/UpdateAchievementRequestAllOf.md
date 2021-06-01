# CompetitionLabsAdminServices.UpdateAchievementRequestAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A name for the Achievement. Can be translated | 
**description** | **String** | A name for the Achievement. Can be translated | [optional] 
**termsAndConditions** | **String** | Terms and conditions of an achievement. Can be translated | [optional] 
**icon** | **String** | An Icon id that has been pre uploaded to the system to display for Achievement | 
**ruleSets** | [**[RuleSet]**](RuleSet.md) |  | 
**dependantOn** | [**[Dependancy]**](Dependancy.md) |  | 
**scheduling** | [**Scheduling**](Scheduling.md) |  | 
**achievementLiveStatus** | [**AchievementLiveStatus**](AchievementLiveStatus.md) |  | 
**maxNumberOfissues** | **Number** | Maximum number of issued achievements | [optional] 
**translations** | **[Object]** |  | [optional] 
**rewards** | [**[UpdateRewardRequest]**](UpdateRewardRequest.md) |  | [optional] 
**constraints** | **[String]** | Additional constraints | 


