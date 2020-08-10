# CompetitionLabsApplicationServices.UpdateRewardRequestAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rewardRank** | **String** | If used in the context of contest this will associate with the rank of the leaderboard | [optional] 
**rewardName** | **String** | The name of a reward | [optional] 
**value** | **Number** | Numerical value of the reward that will be issued based on the reward type | [optional] 
**rewardTypeId** | **String** | A unique id of the Reward Type | [optional] 
**description** | **String** | The description of a Reward | [optional] 
**delay** | **Number** | Delay of issuing a reward in minutes | [optional] [default to 0]
**isMemberAcknowledgmentRequired** | **Boolean** | Requires member acknowledgment to claim a reward. If set to True reward will not be automatically issued | [optional] [default to false]
**metadata** | [**[Metadata]**](Metadata.md) |  | [optional] 
**pointInTime** | **Date** | ISO8601 timestamp for when a Reward is available until a specific point in time. All records are stored in UTC time zone | [optional] 
**period** | **Number** | Reward available for a period of time from issuing in minutes | [optional] [default to 0]
**translations** | [**[Translation]**](Translation.md) |  | [optional] 
**constraints** | **[String]** | Additional constraints | [optional] 


