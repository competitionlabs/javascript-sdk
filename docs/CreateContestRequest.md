# @CompetitionlabsJavascriptSdk.CreateContestRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A name for the Contest. Can be translated | 
**description** | **String** | A name for the Contest. Can be translated | [optional] 
**termsConditions** | **String** | A name for the Contest. Can be translated | [optional] 
**roundType** | [**RoundType**](RoundType.md) |  | 
**maxNumberOfEntrants** | **Number** | Maximum number of entrants for the contest | [optional] 
**minNumberOfEntrants** | **Number** | Minimum number of entrants for the contest | [optional] 
**ruleSets** | [**[RuleSet]**](RuleSet.md) |  | 
**scheduledStartDate** | **Date** | ISO8601 timestamp for when a Contest should start. All records are stored in UTC time zone | [optional] 
**scheduledEndDate** | **Date** | ISO8601 timestamp for when a Contest should end. All records are stored in UTC time zone | [optional] 
**strategies** | [**Strategy**](Strategy.md) |  | [optional] 
**constraints** | **[String]** | Additional constraints | [optional] 
**metadata** | [**[Metadata]**](Metadata.md) |  | [optional] 
**translations** | [**[Translation]**](Translation.md) |  | [optional] 
**rewards** | [**[CreateRewardRequest]**](CreateRewardRequest.md) |  | [optional] 


