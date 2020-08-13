# @CompetitionlabsJavascriptSdk.RulesApi

All URIs are relative to *https://api.competitionlabs.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRulesByRuleScope**](RulesApi.md#getRulesByRuleScope) | **GET** /rules/{spaceName}/{ruleScope} | NOT AVAILABLE IN CURRENT RELEASE
[**validateRulesByRuleScope**](RulesApi.md#validateRulesByRuleScope) | **POST** /rules/{spaceName}/{ruleScope} | NOT AVAILABLE IN CURRENT RELEASE



## getRulesByRuleScope

> RuleDescriptor getRulesByRuleScope(spaceName, ruleScope, opts)

NOT AVAILABLE IN CURRENT RELEASE

Returns a list of either Achievement, Competition or Contest rules.

### Example

```javascript
import @CompetitionlabsJavascriptSdk from '@competitionlabs/javascript-sdk';
let defaultClient = @CompetitionlabsJavascriptSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsJavascriptSdk.RulesApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let ruleScope = "ruleScope_example"; // String | The rule scope to assess the ruleset against
let opts = {
  'X_API_KEY': "X_API_KEY_example" // String | The admin API Key generated from CompetitionLabs back office
};
apiInstance.getRulesByRuleScope(spaceName, ruleScope, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceName** | **String**| This is the space name which is linked to the account | 
 **ruleScope** | **String**| The rule scope to assess the ruleset against | 
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 

### Return type

[**RuleDescriptor**](RuleDescriptor.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## validateRulesByRuleScope

> ApiResponse validateRulesByRuleScope(spaceName, ruleScope, opts)

NOT AVAILABLE IN CURRENT RELEASE

Validates either Achievement, Competition or Contest Rules.

### Example

```javascript
import @CompetitionlabsJavascriptSdk from '@competitionlabs/javascript-sdk';
let defaultClient = @CompetitionlabsJavascriptSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsJavascriptSdk.RulesApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let ruleScope = "ruleScope_example"; // String | The rule scope to assess the ruleset against
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'body': [new @CompetitionlabsJavascriptSdk.RuleSet()] // [RuleSet] | Post a Rules Set to validate if the contest rules are valid
};
apiInstance.validateRulesByRuleScope(spaceName, ruleScope, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spaceName** | **String**| This is the space name which is linked to the account | 
 **ruleScope** | **String**| The rule scope to assess the ruleset against | 
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 
 **body** | [**[RuleSet]**](RuleSet.md)| Post a Rules Set to validate if the contest rules are valid | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

