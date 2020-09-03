# @CompetitionlabsJavascriptSdk.CompetitionAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**competitionType** | [**CompetitionType**](docs/CompetitionType.md) |  | 
**numberOfRounds** | **Number** | Number of rounds to be played in a competition | [default to 1]
**numberOfGroupStages** | **Number** | Number of group stages | [optional] 
**name** | **String** | A name or a name of a competition. Can be translated | 
**description** | **String** | Description of the competition. Can be translated | [optional] 
**termsConditions** | **String** | Terms and conditions of a competition. Can be translated | [optional] 
**maxNumberOfEntrants** | **Number** | Maximum number of partiipants allowed in a competition | [optional] 
**minNumberOfEntrants** | **Number** | Maximum number of partiipants allowed in a competition | 
**products** | [**[ProductReduced]**](docs/ProductReduced.md) |  | 
**ruleSets** | [**[RuleSet]**](docs/RuleSet.md) |  | 
**isPublic** | **Boolean** | Is the event publicly exposed depending on the event model | [default to true]
**autoStart** | **Boolean** | Is the event publicly exposed depending on the event model | [default to true]
**scheduledStartDate** | **Date** | ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone | 
**scheduledEndDate** | **Date** | ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone | 
**actualStartDate** | **Date** | ISO8601 timestamp for when a Competition started. All records are stored in UTC time zone | [optional] [readonly] 
**actualEndDate** | **Date** | ISO8601 timestamp for when a Competition ended. All records are stored in UTC time zone | [optional] [readonly] 
**includeEntrantsWhere** | [**ComplexFilter**](docs/ComplexFilter.md) |  | [optional] 
**optinRequiredForEntrants** | **Boolean** | If True, members must Opt in before they can acquire points in the contest | [default to false]
**metadata** | [**[Metadata]**](docs/Metadata.md) |  | [optional] 
**translations** | [**[Translation]**](docs/Translation.md) |  | [optional] 
**status** | [**CompetitionStatus**](docs/CompetitionStatus.md) |  | 
**statusCode** | **Number** | The code of the competition | [readonly] [default to 3]
**contests** | [**[ContestReduced]**](docs/ContestReduced.md) |  | [optional] 
**rewards** | [**[RewardReduced]**](docs/RewardReduced.md) |  | [optional] 
**constraints** | **[String]** | Additional constraints | [optional] 

