# CompetitionLabsApplicationServices.Competition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | [readonly] 
**spaceName** | **String** | This is the space name which is linked to the account | [readonly] 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | [readonly] 
**customFields** | [**[CustomFieldReduced]**](CustomFieldReduced.md) |  | [optional] 
**tags** | [**[TagsReduced]**](TagsReduced.md) | A list of id&#39;s used to tag models | [optional] 
**metadata** | [**[Metadata]**](Metadata.md) |  | [optional] 
**competitionType** | [**CompetitionType**](CompetitionType.md) |  | 
**numberOfRounds** | **Number** | Number of rounds to be played in a competition | 
**numberOfGroupStages** | **Number** | Number of group stages | [optional] 
**name** | **String** | A name or a name of a competition. Can be translated | 
**description** | **String** | Description of the competition. Can be translated | [optional] 
**termsAndConditions** | **String** | Terms and conditions of a competition. Can be translated | [optional] 
**maxNumberOfEntrants** | **Number** | Maximum number of partiipants allowed in a competition | [optional] 
**minNumberOfEntrants** | **Number** | Maximum number of partiipants allowed in a competition | 
**products** | [**[ProductReduced]**](ProductReduced.md) |  | 
**ruleSets** | [**[RuleSet]**](RuleSet.md) |  | 
**scheduledStartDate** | **Date** | ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone | 
**scheduledEndDate** | **Date** | ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone | 
**actualStartDate** | **Date** | ISO8601 timestamp for when a Competition started. All records are stored in UTC time zone | [optional] [readonly] 
**actualEndDate** | **Date** | ISO8601 timestamp for when a Competition ended. All records are stored in UTC time zone | [optional] [readonly] 
**includeEntrantsWhere** | [**ComplexFilter**](ComplexFilter.md) |  | [optional] 
**translations** | **[Object]** |  | [optional] 
**translatableFields** | **[String]** | ActionType translatable fields | [optional] [readonly] 
**status** | [**CompetitionStatus**](CompetitionStatus.md) |  | 
**statusCode** | **Number** | The code of the competition | [optional] [readonly] 
**contests** | [**[ContestReduced]**](ContestReduced.md) |  | [optional] 
**rewards** | [**[RewardReduced]**](RewardReduced.md) |  | [optional] 
**constraints** | **[String]** | Additional constraints | 


