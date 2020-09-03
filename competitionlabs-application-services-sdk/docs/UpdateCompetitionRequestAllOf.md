# @CompetitionlabsJavascriptSdk.UpdateCompetitionRequestAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**competitionType** | [**CompetitionType**](docs/CompetitionType.md) |  | [optional] 
**numberOfRounds** | **Number** | Number of rounds to be played in a competition | [optional] [default to 1]
**numberOfGroupStages** | **Number** | Number of group stages | [optional] 
**name** | **String** | A name or a name of a competition. Can be translated | [optional] 
**description** | **String** | Description of the competition. Can be translated | [optional] 
**termsConditions** | **String** | Terms and conditions of a competition. Can be translated | [optional] 
**maxNumberOfEntrants** | **Number** | Maximum number of partiipants allowed in a competition | [optional] 
**minNumberOfEntrants** | **Number** | Maximum number of partiipants allowed in a competition | [optional] 
**productIds** | **[String]** | An array of pre created product identifiers | [optional] 
**ruleSets** | [**[RuleSet]**](docs/RuleSet.md) |  | [optional] 
**isPublic** | **Boolean** | Is the event publicly exposed depending on the event model | [optional] [default to true]
**autoStart** | **Boolean** | Is the event publicly exposed depending on the event model | [optional] [default to true]
**scheduledStartDate** | **Date** | ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone | [optional] 
**scheduledEndDate** | **Date** | ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone | [optional] 
**includeEntrantsWhere** | [**ComplexFilter**](docs/ComplexFilter.md) |  | [optional] 
**optinRequiredForEntrants** | **Boolean** | If True, members must Opt in before they can acquire points in the contest | [optional] [default to false]
**metadata** | [**[Metadata]**](docs/Metadata.md) |  | [optional] 
**translations** | [**[Translation]**](docs/Translation.md) |  | [optional] 
**contests** | [**[UpdateContestRequest]**](docs/UpdateContestRequest.md) |  | [optional] 
**rewards** | [**[UpdateRewardRequest]**](docs/UpdateRewardRequest.md) |  | [optional] 


