# @CompetitionlabsJavascriptSdk.CreateEntityRewardRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entityType** | [**EntityType**](docs/EntityType.md) |  | 
**entityId** | **String** | A unique identifier of an achievement or contest. Dependant on entityType | 
**rewardRank** | **String** | If used in the context of contest this will associate with the rank of the leaderboard | 
**rewardName** | **String** | The name of a reward | 
**value** | **Number** | Numerical value of the reward that will be issued based on the reward type | 
**rewardTypeId** | **String** | A unique id of the Reward Type | 
**description** | **String** | The description of a Reward | [optional] 
**delay** | **Number** | Delay of issuing a reward in minutes | [optional] [default to 0]
**icon** | **String** | An Icon id that has been pre uploaded to the system to display for Achievement | [optional] 
**isMemberAcknowledgmentRequired** | **Boolean** | Requires member acknowledgment to claim a reward. If set to True reward will not be automatically issued | [optional] [default to false]
**metadata** | [**[Metadata]**](docs/Metadata.md) |  | [optional] 
**pointInTime** | **Date** | ISO8601 timestamp for when a Reward is available until a specific point in time. All records are stored in UTC time zone | [optional] 
**period** | **Number** | Reward available for a period of time from issuing in minutes | [optional] [default to 0]
**translations** | [**[Translation]**](docs/Translation.md) |  | [optional] 
**constraints** | **[String]** | Additional constraints | [optional] 


