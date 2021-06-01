# CompetitionLabsAdminServices.Contest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | [readonly] 
**spaceName** | **String** | This is the space name which is linked to the account | [readonly] 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | [readonly] 
**customFields** | [**[CustomFieldReduced]**](CustomFieldReduced.md) |  | [optional] 
**tags** | [**[TagsReduced]**](TagsReduced.md) | A list of id&#39;s used to tag models | [optional] 
**metadata** | [**[Metadata]**](Metadata.md) |  | [optional] 
**competitionId** | **String** | A unique identifier of a Competition | 
**row** | **Number** | The row number for displaying the Contest in a table | 
**name** | **String** | A name for the Contest. Can be translated | 
**description** | **String** | Description of the contest | [optional] 
**termsAndConditions** | **String** | Terms and conditions for participating in the Contest. Can be translated | [optional] 
**round** | **Number** | To what round does the contest belong | 
**roundType** | [**RoundType**](RoundType.md) |  | 
**groupStage** | **Number** | Is used for more complex Competitions e.g. multi round competitions where round 1 group stage matched round 2 | [optional] 
**groupStageLabel** | **String** | The name of the group stages | [optional] 
**entrantsFromContest** | **[String]** | A list of CompetitionLabs contest identifiers to allow contests chaining. When a Progression competition is active and you have a 2 round competition the first round has to reference the second round then this parameter becomes mandatory instead of Optional. | 
**maxNumberOfEntrants** | **Number** | Maximum number of entrants for the contest | [optional] 
**minNumberOfEntrants** | **Number** | Minimum number of entrants for the contest | 
**ruleSets** | [**[RuleSet]**](RuleSet.md) |  | 
**scheduledStartDate** | **Date** | ISO8601 timestamp for when a Contest should start. All records are stored in UTC time zone | 
**scheduledEndDate** | **Date** | ISO8601 timestamp for when a Contest should end. All records are stored in UTC time zone | 
**actualStartDate** | **Date** | ISO8601 timestamp for when a Competition started. All records are stored in UTC time zone | [optional] [readonly] 
**actualEndDate** | **Date** | ISO8601 timestamp for when a Competition ended. All records are stored in UTC time zone | [optional] [readonly] 
**strategies** | [**Strategy**](Strategy.md) |  | [optional] 
**translations** | **[Object]** |  | [optional] 
**translatableFields** | **[String]** | Contests translatable fields | [optional] [readonly] 
**status** | [**ContestStatus**](ContestStatus.md) |  | 
**statusCode** | **Number** | The code of the contest | [readonly] 
**rewards** | [**[RewardReduced]**](RewardReduced.md) |  | [optional] 
**constraints** | **[String]** | Additional constraints | 


