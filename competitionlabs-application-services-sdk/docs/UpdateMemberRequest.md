# CompetitionLabsAdminServices.UpdateMemberRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**customFields** | **[String]** | A list of id&#39;s used to add cutom fields | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | [**[Metadata]**](Metadata.md) |  | [optional] 
**name** | **String** | The name of the member that is used on leader boards and public displays | 
**memberType** | [**MemberType**](MemberType.md) |  | 
**teamMembers** | **[String]** | A social group like Guilds | [optional] 
**constraints** | **[String]** | Additional constraints, if the value is present it means the | [optional] 
**timeZoneOffset** | **Number** | To what time zone teh emmber belongs to | [optional] 


