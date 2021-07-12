# CompetitionLabsAdminServices.Achievement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | [readonly] 
**spaceName** | **String** | This is the space name which is linked to the account | [readonly] 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | [readonly] 
**customFields** | [**[CustomFieldReduced]**](CustomFieldReduced.md) |  | [optional] 
**tags** | [**[TagsReduced]**](TagsReduced.md) | A list of id&#39;s used to tag models | [optional] 
**metadata** | [**[Metadata]**](Metadata.md) |  | [optional] 
**name** | **String** | A name for the Achievement. Can be translated | 
**description** | **String** | A name for the Achievement. Can be translated | [optional] 
**termsAndConditions** | **String** | Terms and conditions of an achievement. Can be translated | [optional] 
**icon** | **String** | An Icon id that has been pre uploaded to the system to display for Achievement | 
**ruleSets** | [**[RuleSet]**](RuleSet.md) |  | 
**dependantOn** | [**Dependancy**](Dependancy.md) |  | [optional] 
**scheduling** | [**Scheduling**](Scheduling.md) |  | 
**achievementLiveStatus** | [**AchievementLiveStatus**](AchievementLiveStatus.md) |  | 
**maxNumberOfIssues** | **Number** | Maximum number of issued achievements | [optional] 
**translations** | **[Object]** |  | [optional] 
**translatableFields** | **[String]** | Achievements translatable fields | [optional] [readonly] 
**rewards** | [**[RewardReduced]**](RewardReduced.md) |  | [optional] 
**constraints** | **[String]** | Additional constraints, if set means true | 


