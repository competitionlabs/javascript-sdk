# @CompetitionlabsApplicationServicesSdk.QueryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**must** | [**[QueryMultiple]**](QueryMultiple.md) |  | [optional] 
**mustNot** | [**[QueryMultiple]**](QueryMultiple.md) |  | [optional] 
**should** | [**[QueryMultiple]**](QueryMultiple.md) |  | [optional] 
**gte** | [**[QuerySingle]**](QuerySingle.md) |  | [optional] 
**lte** | [**[QuerySingle]**](QuerySingle.md) |  | [optional] 
**gt** | [**[QuerySingle]**](QuerySingle.md) |  | [optional] 
**lt** | [**[QuerySingle]**](QuerySingle.md) |  | [optional] 
**range** | [**[RangeQuery]**](RangeQuery.md) |  | [optional] 
**sortBy** | [**[QuerySortBy]**](QuerySortBy.md) |  | [optional] 
**multiFields** | [**[QueryMultipleFields]**](QueryMultipleFields.md) |  | [optional] 
**includeFields** | **[String]** | A list of parameters that need to be included in the response | [optional] 
**hasValue** | **[String]** | This will match fields which do not have null values | [optional] 
**hasNoValue** | **[String]** | This will match fields which have null values | [optional] 
**shouldMatch** | **Number** | How many should properties need to be displayed | [optional] 
**skip** | **Number** | How many response objects will be skipped for preview | [optional] 
**limit** | **Number** | How many response objects will be displayed | [optional] 
**isCountQuery** | **Boolean** | Whether this query requires a count of records found only | [optional] 


