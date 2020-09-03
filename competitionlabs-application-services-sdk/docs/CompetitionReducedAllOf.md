# @CompetitionlabsJavascriptSdk.CompetitionReducedAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**competitionType** | [**CompetitionType**](docs/CompetitionType.md) |  | 
**numberOfRounds** | **Number** | Number of rounds to be played in a competition | [default to 1]
**name** | **String** | A name or a name of a competition. Can be translated | 
**includeEntrantsWhere** | [**ComplexFilter**](docs/ComplexFilter.md) |  | [optional] 
**optinRequiredForEntrants** | **Boolean** | If True, members must Opt in before they can acquire points in the contest | [default to false]
**status** | [**CompetitionStatus**](docs/CompetitionStatus.md) |  | 
**statusCode** | **Number** | The code of the competition | [readonly] [default to 3]
**products** | [**[ProductReduced]**](docs/ProductReduced.md) |  | 
**scheduledStartDate** | **Date** | ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone | 
**scheduledEndDate** | **Date** | ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone | 
**actualStartDate** | **Date** | ISO8601 timestamp for when a Competition started. All records are stored in UTC time zone | [optional] [readonly] 
**actualEndDate** | **Date** | ISO8601 timestamp for when a Competition ended. All records are stored in UTC time zone | [optional] [readonly] 

