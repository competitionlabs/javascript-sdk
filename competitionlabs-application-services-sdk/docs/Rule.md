# CompetitionLabsAdminServices.Rule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fact** | **String** | Fact for this sub rule. Reference of Fact schemma | 
**operator** | **String** | EXAMPLES: * \&quot;&#x3D;&#x3D;\&quot; : is * \&quot;&gt;&#x3D;\&quot; : is equal to or more than * \&quot;&gt;\&quot; : is more than * \&quot;&lt;&#x3D;\&quot; : is less than or equal to * \&quot;&lt;\&quot; : is less than * \&quot;\&quot; : are not all * \&quot;before\&quot; : is before * \&quot;after\&quot; : is after * \&quot;on.or.after\&quot; : is or or after * \&quot;on.or.before\&quot; : is on or before  | 
**constant** | **String** | A rules value that defines the fact | 
**id** | **String** | Unique system identifier of a Main Rule | [readonly] 
**subConditions** | [**[RuleSubCondition]**](RuleSubCondition.md) |  | 


