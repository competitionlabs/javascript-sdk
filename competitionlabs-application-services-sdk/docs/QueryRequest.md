# @CompetitionlabsJavascriptSdk.QueryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**must** | [**[QueryMultiple]**](docs/QueryMultiple.md) |  | [optional] 
**mustNot** | [**[QueryMultiple]**](docs/QueryMultiple.md) |  | [optional] 
**should** | [**[QueryMultiple]**](docs/QueryMultiple.md) |  | [optional] 
**gte** | [**[QuerySingle]**](docs/QuerySingle.md) |  | [optional] 
**lte** | [**[QuerySingle]**](docs/QuerySingle.md) |  | [optional] 
**gt** | [**[QuerySingle]**](docs/QuerySingle.md) |  | [optional] 
**lt** | [**[QuerySingle]**](docs/QuerySingle.md) |  | [optional] 
**range** | [**[RangeQuery]**](docs/RangeQuery.md) |  | [optional] 
**sortBy** | [**[QuerySortBy]**](docs/QuerySortBy.md) |  | [optional] 
**multiFields** | [**QueryMultipleFields**](docs/QueryMultipleFields.md) |  | [optional] 
**includeFields** | **[String]** | A list of parameters that need to be included in the response | [optional] 
**hasValue** | **[String]** | This will match fields which do not have null values | [optional] 
**hasNoValue** | **[String]** | This will match fields which have null values | [optional] 
**shouldMatch** | **Number** | How many should properties need to be displayed | [optional] [default to 0]
**skip** | **Number** | How many response objects will be skipped for preview | [optional] [default to 0]
**limit** | **Number** | How many response objects will be displayed | [optional] [default to 20]
**isCountQuery** | **Boolean** | Whether this query requires a count of records found only | [optional] 


