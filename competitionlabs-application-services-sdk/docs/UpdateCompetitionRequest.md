# CompetitionLabsAdminServices.UpdateCompetitionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**customFields** | **[String]** | A list of id&#39;s used to add cutom fields | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | [**[Metadata]**](Metadata.md) |  | [optional] 
**competitionType** | [**CompetitionType**](CompetitionType.md) |  | 
**numberOfRounds** | **Number** | Number of rounds to be played in a competition | 
**numberOfGroupStages** | **Number** | Number of group stages | [optional] 
**name** | **String** | A name or a name of a competition. Can be translated | 
**description** | **String** | Description of the competition. Can be translated | [optional] 
**termsAndConditions** | **String** | Terms and conditions of a competition. Can be translated | [optional] 
**entrantMemberType** | **String** |  | [optional] 
**maxNumberOfEntrants** | **Number** | Maximum number of partiipants allowed in a competition | [optional] 
**minNumberOfEntrants** | **Number** | Maximum number of partiipants allowed in a competition | 
**ruleSets** | [**[RuleSet]**](RuleSet.md) |  | 
**scheduledStartDate** | **Date** | ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone | 
**scheduledEndDate** | **Date** | ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone | 
**dependantOn** | [**[Dependancy]**](Dependancy.md) |  | 
**translations** | **[Object]** |  | [optional] 
**contests** | [**[UpdateContestRequest]**](UpdateContestRequest.md) |  | [optional] 
**rewards** | [**[UpdateRewardRequest]**](UpdateRewardRequest.md) |  | [optional] 
**constraints** | **[String]** | Additional constraints | 


