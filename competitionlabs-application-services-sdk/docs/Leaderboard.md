# CompetitionLabsAdminServices.Leaderboard

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | [readonly] 
**spaceName** | **String** | This is the space name which is linked to the account | [readonly] 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | [readonly] 
**leaderboardEntries** | [**[LeaderboardEntry]**](LeaderboardEntry.md) |  | [optional] 
**constraints** | **[String]** | Additional constraints | 
**sequence** | **Number** | how many changes were made to teh leaderboard | [optional] 


