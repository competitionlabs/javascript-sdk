# CompetitionLabsApplicationServices.RulesApi

All URIs are relative to *https://api.competitionlabs.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRulesByRuleScope**](RulesApi.md#getRulesByRuleScope) | **GET** /rules/{ruleScope} | NOT AVAILABLE IN CURRENT RELEASE
[**validateRulesByRuleScope**](RulesApi.md#validateRulesByRuleScope) | **POST** /rules/{ruleScope} | NOT AVAILABLE IN CURRENT RELEASE



## getRulesByRuleScope

> RuleDescriptor getRulesByRuleScope(ruleScope, opts)

NOT AVAILABLE IN CURRENT RELEASE

Returns a list of either Achievement, Competition or Contest rules.

### Example

```javascript
import CompetitionLabsApplicationServices from 'competition_labs_application_services';
let defaultClient = CompetitionLabsApplicationServices.ApiClient.instance;
// Configure API key authorization: AdminApiKey
let AdminApiKey = defaultClient.authentications['AdminApiKey'];
AdminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AdminApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsApplicationServices.RulesApi();
let ruleScope = "ruleScope_example"; // String | The rule scope to assess the ruleset against
let opts = {
  'X_API_KEY': "X_API_KEY_example" // String | The admin API Key generated from CompetitionLabs back office
};
apiInstance.getRulesByRuleScope(ruleScope, opts, (error, data, response) => {
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
 **ruleScope** | **String**| The rule scope to assess the ruleset against | 
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 

### Return type

[**RuleDescriptor**](RuleDescriptor.md)

### Authorization

[AdminApiKey](../README.md#AdminApiKey), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## validateRulesByRuleScope

> ApiResponse validateRulesByRuleScope(ruleScope, opts)

NOT AVAILABLE IN CURRENT RELEASE

Validates either Achievement, Competition or Contest Rules.

### Example

```javascript
import CompetitionLabsApplicationServices from 'competition_labs_application_services';
let defaultClient = CompetitionLabsApplicationServices.ApiClient.instance;
// Configure API key authorization: AdminApiKey
let AdminApiKey = defaultClient.authentications['AdminApiKey'];
AdminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AdminApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsApplicationServices.RulesApi();
let ruleScope = "ruleScope_example"; // String | The rule scope to assess the ruleset against
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'body': [new CompetitionLabsApplicationServices.RuleSet()] // [RuleSet] | Post a Rules Set to validate if the contest rules are valid
};
apiInstance.validateRulesByRuleScope(ruleScope, opts, (error, data, response) => {
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
 **ruleScope** | **String**| The rule scope to assess the ruleset against | 
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 
 **body** | [**[RuleSet]**](RuleSet.md)| Post a Rules Set to validate if the contest rules are valid | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[AdminApiKey](../README.md#AdminApiKey), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

