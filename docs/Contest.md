# CompetitionLabsApplicationServices.Contest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | [readonly] 
**spaceName** | **String** | This is the space name which is linked to the account | [readonly] 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | [readonly] 
**competitionId** | **String** | A unique identifier of a Competition | 
**_number** | **Number** | The row number for displaying the Contest in a table | [default to 0]
**name** | **String** | A name for the Contest. Can be translated | 
**description** | **String** | Description of the contest | [optional] 
**termsConditions** | **String** | Terms and conditions for participating in the Contest. Can be translated | [optional] 
**round** | **Number** | To what round does the contest belong | [default to 1]
**roundType** | [**RoundType**](RoundType.md) |  | 
**groupStage** | **Number** | Is used for more complex Competitions e.g. multi round competitions where round 1 group stage matched round 2 | [optional] [default to 1]
**groupStageLabel** | **String** | The name of the group stages | [optional] 
**entrantsFromContest** | **[String]** | A list of CompetitionLabs contest identifiers to allow contests chaining. When a Progression competition is active and you have a 2 round competition the first round has to reference the second round then this parameter becomes mandatory instead of Optional. | 
**maxNumberOfEntrants** | **Number** | Maximum number of entrants for the contest | [optional] 
**minNumberOfEntrants** | **Number** | Minimum number of entrants for the contest | 
**ruleSets** | [**[RuleSet]**](RuleSet.md) |  | 
**isPublic** | **Boolean** | Is the event publicly exposed depending on the event model | [default to true]
**autoStart** | **Boolean** | Is the event publicly exposed depending on the event model | [optional] [default to true]
**scheduledStartDate** | **Date** | ISO8601 timestamp for when a Contest should start. All records are stored in UTC time zone | 
**scheduledEndDate** | **Date** | ISO8601 timestamp for when a Contest should end. All records are stored in UTC time zone | 
**actualStartDate** | **Date** | ISO8601 timestamp for when a Competition started. All records are stored in UTC time zone | [optional] [readonly] 
**actualEndDate** | **Date** | ISO8601 timestamp for when a Competition ended. All records are stored in UTC time zone | [optional] [readonly] 
**strategies** | [**Strategy**](Strategy.md) |  | [optional] 
**metadata** | [**[Metadata]**](Metadata.md) |  | [optional] 
**translations** | [**[Translation]**](Translation.md) |  | [optional] 
**translatableFields** | **[String]** | Contests translatable fields | [optional] [readonly] 
**status** | [**ContestStatus**](ContestStatus.md) |  | 
**statusCode** | **Number** | The code of the contest | [readonly] [default to 3]
**rewards** | [**[RewardReduced]**](RewardReduced.md) |  | [optional] 


