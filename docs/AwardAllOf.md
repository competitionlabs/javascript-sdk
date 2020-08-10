# CompetitionLabsApplicationServices.AwardAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**memberId** | **String** | A unique identifier of a Member | 
**rewardId** | **String** | A unique identifier of a Reward | 
**rewardTypeKey** | **String** | The type of the Reward | 
**rewardTypeId** | **String** | A unique id of the Reward Type | 
**rewardRank** | **String** | If used in the context of contest this will associate with the rank of the leaderboard | 
**rewardValue** | **Number** | Numerical value of the reward that will be issued based on the reward type | 
**memberAcknowledgmentRequired** | **Boolean** | Requires member acknowledgment to claim a reward. If set to True reward will not be automatically issued | [optional] [default to false]
**claimed** | **Boolean** | has the award been claimed or not | 
**delay** | **Number** | Delay of issuing a reward in minutes | [default to 0]
**entityType** | [**EntityType**](EntityType.md) |  | 
**entityId** | **String** | The Id of the contest or achievement related to this Award. Dependant on entityType | 
**pointInTime** | **Date** | ISO8601 timestamp for when an Award is available until a specific point in time. All records are stored in UTC time zone. * There can only be one time definition used for claim period either \&quot;pointInTime\&quot; or \&quot;period\&quot; | [optional] 
**period** | **Number** | Claimable duration in minutes, this value will set the controls until when the award is claimable. * There can only be one time definition used for claim period either \&quot;pointInTime\&quot; or \&quot;period\&quot; | [optional] [default to 0]
**constraints** | **[String]** | Additional constraints, if the value is present it means the | [optional] 

