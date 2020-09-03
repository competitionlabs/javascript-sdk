# @CompetitionlabsInsightsServicesSdk.CreateCompetitionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**competitionType** | [**CompetitionType**](CompetitionType.md) |  | 
**numberOfRounds** | **Number** | Number of rounds to be played in a competition | 
**numberOfGroupStages** | **Number** | Number of group stages | [optional] 
**name** | **String** | A name or a name of a competition. Can be translated | 
**description** | **String** | Description of the competition. Can be translated | [optional] 
**termsConditions** | **String** | Terms and conditions of a competition. Can be translated | [optional] 
**maxNumberOfEntrants** | **Number** | Maximum number of partiipants allowed in a competition | [optional] 
**minNumberOfEntrants** | **Number** | Maximum number of partiipants allowed in a competition | 
**productIds** | **[String]** | An array of pre created product identifiers | [optional] 
**ruleSets** | [**[RuleSet]**](RuleSet.md) |  | 
**isPublic** | **Boolean** | Is the event publicly exposed depending on the event model | [optional] 
**autoStart** | **Boolean** | Is the event publicly exposed depending on the event model | [optional] 
**scheduledStartDate** | **Date** | ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone | 
**scheduledEndDate** | **Date** | ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone | 
**includeEntrantsWhere** | [**ComplexFilter**](ComplexFilter.md) |  | [optional] 
**optinRequiredForEntrants** | **Boolean** | If True, members must Opt in before they can acquire points in the contest | 
**metadata** | [**[Metadata]**](Metadata.md) |  | [optional] 
**translations** | [**[Translation]**](Translation.md) |  | [optional] 
**contest** | [**CreateContestRequest**](CreateContestRequest.md) |  | [optional] 
**rewards** | [**[CreateRewardRequest]**](CreateRewardRequest.md) |  | [optional] 


