# CompetitionLabsApplicationServices.Leaderboard

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | [readonly] 
**spaceName** | **String** | This is the space name which is linked to the account | [readonly] 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | [readonly] 
**leaderboardEntries** | [**[LeaderboardEntry]**](LeaderboardEntry.md) |  | [optional] 
**memberId** | **String** | A unique system generated identifier | 
**memberRefId** | **String** | The reference to this member in your system | 
**name** | **String** | The name of the member that is used on leader boards and public displays | 
**points** | **Number** | The value of the points a member has on the leaderboard | 
**rank** | **Number** | The rank of the member on the leaderboard | 
**change** | [**[Leaderboard]**](Leaderboard.md) |  | [optional] 
**timestamp** | **Date** | ISO8601 timestamp for when a the member was last updated on the leaderboard. All records are stored in UTC time zone | 
**constraints** | **[String]** | Additional constraints | 


