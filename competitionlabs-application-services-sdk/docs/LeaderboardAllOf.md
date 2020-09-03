# @CompetitionlabsApplicationServicesSdk.LeaderboardAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**memberId** | **String** | A unique system generated identifier | 
**points** | **Number** | The value of the points a member has on the leaderboard | 
**rank** | **Number** | The rank of the member on the leaderboard | 
**memberRefId** | **String** | The reference to this member in your system | 
**name** | **String** | The name of the member that is used on leader boards and public displays | 
**change** | [**[Leaderboard]**](Leaderboard.md) |  | [optional] 
**goalReached** | **Boolean** | Is the goal reached depending on the scoring strategy | 
**timestamp** | **Date** | ISO8601 timestamp for when a the member was last updated on the leaderboard. All records are stored in UTC time zone | 


