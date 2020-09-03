# @CompetitionlabsInsightsServicesSdk.LogoutApi

All URIs are relative to *https://api.competitionlabs.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**logout**](LogoutApi.md#logout) | **GET** /logout | 



## logout

> ApiResponse logout(opts)



Logout of CompetitionLabs

### Example

```javascript
import @CompetitionlabsInsightsServicesSdk from '@competitionlabs/insights-services-sdk';
let defaultClient = @CompetitionlabsInsightsServicesSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsInsightsServicesSdk.LogoutApi();
let opts = {
  'returnPath': "returnPath_example" // String | Return path of the request
};
apiInstance.logout(opts, (error, data, response) => {
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
 **returnPath** | **String**| Return path of the request | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

