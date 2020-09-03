# @CompetitionlabsJavascriptSdk.CreateContestRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A name for the Contest. Can be translated | 
**description** | **String** | A name for the Contest. Can be translated | [optional] 
**termsConditions** | **String** | A name for the Contest. Can be translated | [optional] 
**roundType** | [**RoundType**](docs/RoundType.md) |  | 
**maxNumberOfEntrants** | **Number** | Maximum number of entrants for the contest | [optional] 
**minNumberOfEntrants** | **Number** | Minimum number of entrants for the contest | [optional] 
**ruleSets** | [**[RuleSet]**](docs/RuleSet.md) |  | 
**scheduledStartDate** | **Date** | ISO8601 timestamp for when a Contest should start. All records are stored in UTC time zone | [optional] 
**scheduledEndDate** | **Date** | ISO8601 timestamp for when a Contest should end. All records are stored in UTC time zone | [optional] 
**strategies** | [**Strategy**](docs/Strategy.md) |  | [optional] 
**constraints** | **[String]** | Additional constraints | [optional] 
**metadata** | [**[Metadata]**](docs/Metadata.md) |  | [optional] 
**translations** | [**[Translation]**](docs/Translation.md) |  | [optional] 
**rewards** | [**[CreateRewardRequest]**](docs/CreateRewardRequest.md) |  | [optional] 


