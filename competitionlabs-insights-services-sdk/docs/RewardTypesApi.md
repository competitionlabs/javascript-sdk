# @CompetitionlabsInsightsServicesSdk.RewardTypesApi

All URIs are relative to *https://api.competitionlabs.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRewardTypes**](RewardTypesApi.md#createRewardTypes) | **POST** /reward-types/{spaceName} | 
[**deleteRewardTypes**](RewardTypesApi.md#deleteRewardTypes) | **DELETE** /reward-types/{spaceName} | 
[**deleteRewardTypesByQuery**](RewardTypesApi.md#deleteRewardTypesByQuery) | **POST** /reward-types/{spaceName}/delete | 
[**getRewardTypes**](RewardTypesApi.md#getRewardTypes) | **GET** /reward-types/{spaceName} | 
[**getRewardTypesByQuery**](RewardTypesApi.md#getRewardTypesByQuery) | **POST** /reward-types/{spaceName}/query | 
[**updateRewardTypes**](RewardTypesApi.md#updateRewardTypes) | **PUT** /reward-types/{spaceName} | 



## createRewardTypes

> ApiResponse createRewardTypes(spaceName, body, opts)



Create new Reward types in the CompetitionLabs database

### Example

```javascript
import @CompetitionlabsInsightsServicesSdk from '@competitionlabs/insights-services-sdk';
let defaultClient = @CompetitionlabsInsightsServicesSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsInsightsServicesSdk.RewardTypesApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let body = [new @CompetitionlabsInsightsServicesSdk.CreateRewardTypeRequest()]; // [CreateRewardTypeRequest] | Create Reward Types in the CompetitionLabs database
let opts = {
  'X_API_KEY': "X_API_KEY_example" // String | The admin API Key generated from CompetitionLabs back office
};
apiInstance.createRewardTypes(spaceName, body, opts, (error, data, response) => {
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
 **body** | [**[CreateRewardTypeRequest]**](CreateRewardTypeRequest.md)| Create Reward Types in the CompetitionLabs database | 
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteRewardTypes

> ApiResponse deleteRewardTypes(spaceName, opts)



Delete Reward types for a given identifier specified

### Example

```javascript
import @CompetitionlabsInsightsServicesSdk from '@competitionlabs/insights-services-sdk';
let defaultClient = @CompetitionlabsInsightsServicesSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsInsightsServicesSdk.RewardTypesApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'id': ["null"] // [String] | The unique identifiers of the resources
};
apiInstance.deleteRewardTypes(spaceName, opts, (error, data, response) => {
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
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 
 **id** | [**[String]**](String.md)| The unique identifiers of the resources | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteRewardTypesByQuery

> ApiResponse deleteRewardTypesByQuery(spaceName, opts)



Delete Reward types from CompetitionLabs database by unique Reward types ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import @CompetitionlabsInsightsServicesSdk from '@competitionlabs/insights-services-sdk';
let defaultClient = @CompetitionlabsInsightsServicesSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsInsightsServicesSdk.RewardTypesApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'body': new @CompetitionlabsInsightsServicesSdk.QueryRequest() // QueryRequest | Delete Reward types from CompetitionLabs database by unique Reward types ID's or any other POST body parameters using the POST method
};
apiInstance.deleteRewardTypesByQuery(spaceName, opts, (error, data, response) => {
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
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 
 **body** | [**QueryRequest**](QueryRequest.md)| Delete Reward types from CompetitionLabs database by unique Reward types ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getRewardTypes

> RewardTypeResponse getRewardTypes(spaceName, opts)



Returns a list of Reward Types. This assumes that reward types have first been uploaded via a POST request or web console

### Example

```javascript
import @CompetitionlabsInsightsServicesSdk from '@competitionlabs/insights-services-sdk';
let defaultClient = @CompetitionlabsInsightsServicesSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsInsightsServicesSdk.RewardTypesApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'id': ["null"], // [String] | The unique identifiers of the resources
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getRewardTypes(spaceName, opts, (error, data, response) => {
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
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 
 **id** | [**[String]**](String.md)| The unique identifiers of the resources | [optional] 
 **limit** | **Number**| Limit the returned total records found | [optional] 
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] 

### Return type

[**RewardTypeResponse**](RewardTypeResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRewardTypesByQuery

> RewardTypeResponse getRewardTypesByQuery(spaceName, opts)



Retrieve Reward types from CompetitionLabs database by unique Reward type ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import @CompetitionlabsInsightsServicesSdk from '@competitionlabs/insights-services-sdk';
let defaultClient = @CompetitionlabsInsightsServicesSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsInsightsServicesSdk.RewardTypesApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'body': new @CompetitionlabsInsightsServicesSdk.QueryRequest() // QueryRequest | Retrieve Reward types from CompetitionLabs database by unique Reward type ID's or any other POST body parameters using the POST method
};
apiInstance.getRewardTypesByQuery(spaceName, opts, (error, data, response) => {
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
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Reward types from CompetitionLabs database by unique Reward type ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**RewardTypeResponse**](RewardTypeResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateRewardTypes

> ApiResponse updateRewardTypes(spaceName, body, opts)



Update existing Reward types in the CompetitionLabs database

### Example

```javascript
import @CompetitionlabsInsightsServicesSdk from '@competitionlabs/insights-services-sdk';
let defaultClient = @CompetitionlabsInsightsServicesSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsInsightsServicesSdk.RewardTypesApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let body = [new @CompetitionlabsInsightsServicesSdk.UpdateRewardTypeRequest()]; // [UpdateRewardTypeRequest] | Update Reward types in the CompetitionLabs database.
let opts = {
  'X_API_KEY': "X_API_KEY_example" // String | The admin API Key generated from CompetitionLabs back office
};
apiInstance.updateRewardTypes(spaceName, body, opts, (error, data, response) => {
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
 **body** | [**[UpdateRewardTypeRequest]**](UpdateRewardTypeRequest.md)| Update Reward types in the CompetitionLabs database. | 
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

