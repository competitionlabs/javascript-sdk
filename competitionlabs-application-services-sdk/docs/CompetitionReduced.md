# CompetitionLabsApplicationServices.CompetitionReduced

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | [readonly] 
**spaceName** | **String** | This is the space name which is linked to the account | [readonly] 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | [readonly] 
**competitionType** | [**CompetitionType**](CompetitionType.md) |  | 
**numberOfRounds** | **Number** | Number of rounds to be played in a competition | 
**name** | **String** | A name or a name of a competition. Can be translated | 
**includeEntrantsWhere** | [**ComplexFilter**](ComplexFilter.md) |  | [optional] 
**status** | [**CompetitionStatus**](CompetitionStatus.md) |  | 
**statusCode** | **Number** | The code of the competition | [readonly] 
**products** | [**[ProductReduced]**](ProductReduced.md) |  | 
**scheduledStartDate** | **Date** | ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone | 
**scheduledEndDate** | **Date** | ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone | 
**actualStartDate** | **Date** | ISO8601 timestamp for when a Competition started. All records are stored in UTC time zone | [optional] [readonly] 
**actualEndDate** | **Date** | ISO8601 timestamp for when a Competition ended. All records are stored in UTC time zone | [optional] [readonly] 
**tags** | **[String]** | A list of id&#39;s used to tag | [optional] 
**constraints** | **[String]** | Additional constraints | 


