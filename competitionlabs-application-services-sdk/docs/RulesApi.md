# CompetitionLabsAdminServices.RulesApi

All URIs are relative to *https://api.competitionlabs.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRulesByRuleScope**](RulesApi.md#getRulesByRuleScope) | **GET** /rules/{ruleScope} | NOT AVAILABLE IN CURRENT RELEASE
[**validateRulesByRuleScope**](RulesApi.md#validateRulesByRuleScope) | **POST** /rules/{ruleScope} | NOT AVAILABLE IN CURRENT RELEASE



## getRulesByRuleScope

> RuleDescriptor getRulesByRuleScope(ruleScope)

NOT AVAILABLE IN CURRENT RELEASE

Returns a list of either Achievement, Competition or Contest rules.

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.RulesApi();
let ruleScope = "ruleScope_example"; // String | The rule scope to assess the ruleset against
apiInstance.getRulesByRuleScope(ruleScope, (error, data, response) => {
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

### Return type

[**RuleDescriptor**](RuleDescriptor.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## validateRulesByRuleScope

> ApiResponse validateRulesByRuleScope(ruleScope, opts)

NOT AVAILABLE IN CURRENT RELEASE

Validates either Achievement, Competition or Contest Rules.

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.RulesApi();
let ruleScope = "ruleScope_example"; // String | The rule scope to assess the ruleset against
let opts = {
  'body': [new CompetitionLabsAdminServices.RuleSet()] // [RuleSet] | Post a Rules Set to validate if the contest rules are valid
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
 **body** | [**[RuleSet]**](RuleSet.md)| Post a Rules Set to validate if the contest rules are valid | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

