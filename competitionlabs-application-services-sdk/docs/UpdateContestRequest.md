# @CompetitionlabsApplicationServicesSdk.UpdateContestRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**competitionId** | **String** | A unique identifier of a Competition | [optional] 
**_number** | **Number** | The row number for displaying the Contest in a table | [optional] 
**name** | **String** | A name for the Contest. Can be translated | [optional] 
**description** | **String** | A name for the Contest. Can be translated | [optional] 
**termsConditions** | **String** | A name for the Contest. Can be translated | [optional] 
**round** | **Number** | To what round does the contest belong | [optional] 
**roundType** | [**RoundType**](RoundType.md) |  | [optional] 
**groupStage** | **Number** | Is used for more complex Competitions e.g. multi round competitions where round 1 group stage matched round 2 | [optional] 
**groupStageLabel** | **String** | The name of the group stages | [optional] 
**entrantsFromContest** | **[String]** | A list of CompetitionLabs contest identifiers to allow contests chaining. When a Progression competition is active and you have a 2 round competition the first round has to reference the second round then this parameter becomes mandatory instead of Optional. | [optional] 
**maxNumberOfEntrants** | **Number** | Maximum number of entrants for the contest | [optional] 
**minNumberOfEntrants** | **Number** | Minimum number of entrants for the contest | [optional] 
**ruleSets** | [**RuleSet**](RuleSet.md) |  | [optional] 
**isPublic** | **Boolean** | Is the event publicly exposed depending on the event model | [optional] 
**autoStart** | **Boolean** | Is the event publicly exposed depending on the event model | [optional] 
**scheduledStartDate** | **Date** | ISO8601 timestamp for when a Contest should start. All records are stored in UTC time zone | [optional] 
**scheduledEndDate** | **Date** | ISO8601 timestamp for when a Contest should end. All records are stored in UTC time zone | [optional] 
**strategies** | [**Strategy**](Strategy.md) |  | [optional] 
**constraints** | **[String]** | Additional constraints | [optional] 
**metadata** | [**[Metadata]**](Metadata.md) |  | [optional] 
**translations** | [**[Translation]**](Translation.md) |  | [optional] 
**rewards** | [**[UpdateRewardRequest]**](UpdateRewardRequest.md) |  | [optional] 


