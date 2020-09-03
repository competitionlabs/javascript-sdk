# @CompetitionlabsInsightsServicesSdk.Member

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | [readonly] 
**spaceName** | **String** | This is the space name which is linked to the account | [readonly] 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | [readonly] 
**name** | **String** | The name of the member that is used on leader boards and public displays | [optional] 
**memberRefId** | **String** | The reference to this member in your system | 
**memberType** | [**MemberType**](MemberType.md) |  | 
**teamMembers** | **[String]** | A social group like Guilds | [optional] 
**groups** | **[String]** | A list of Strings of groups that the member belongs to. It could be marketing segments or social friend groups | [optional] 
**metadata** | [**[Metadata]**](Metadata.md) |  | [optional] 


