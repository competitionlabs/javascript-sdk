# CompetitionLabsAdminServices.CreateAchievementRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customFields** | **[String]** | A list of id&#39;s used to add cutom fields | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | [**[Metadata]**](Metadata.md) |  | [optional] 
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
**rewards** | [**[CreateRewardRequest]**](CreateRewardRequest.md) |  | [optional] 
**constraints** | **[String]** | Additional constraints | 


