# @CompetitionlabsJavascriptSdk.ActionTypesApi

All URIs are relative to *https://api.competitionlabs.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createActionTypes**](docs/ActionTypesApi.md#createActionTypes) | **POST** /action-types/{spaceName} | 
[**deleteActionTypes**](docs/ActionTypesApi.md#deleteActionTypes) | **DELETE** /action-types/{spaceName} | 
[**deleteActionTypesByQuery**](docs/ActionTypesApi.md#deleteActionTypesByQuery) | **POST** /action-types/{spaceName}/delete | 
[**getActionTypes**](docs/ActionTypesApi.md#getActionTypes) | **GET** /action-types/{spaceName} | 
[**getActionTypesByQuery**](docs/ActionTypesApi.md#getActionTypesByQuery) | **POST** /action-types/{spaceName}/query | 
[**updateActionTypes**](docs/ActionTypesApi.md#updateActionTypes) | **PUT** /action-types/{spaceName} | 



## createActionTypes

> ApiResponse createActionTypes(spaceName, body, opts)



Create new Action types in the CompetitionLabs database

### Example

```javascript
import @CompetitionlabsJavascriptSdk from '@competitionlabs/javascript-sdk';
let defaultClient = @CompetitionlabsJavascriptSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsJavascriptSdk.ActionTypesApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let body = [new @CompetitionlabsJavascriptSdk.CreateActionTypeRequest()]; // [CreateActionTypeRequest] | Create Action Types in the CompetitionLabs database
let opts = {
  'X_API_KEY': "X_API_KEY_example" // String | The admin API Key generated from CompetitionLabs back office
};
apiInstance.createActionTypes(spaceName, body, opts, (error, data, response) => {
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
 **body** | [**[CreateActionTypeRequest]**](docs/CreateActionTypeRequest.md)| Create Action Types in the CompetitionLabs database | 
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 

### Return type

[**ApiResponse**](docs/ApiResponse.md)

### Authorization

[adminApiKey](README.mdminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteActionTypes

> ApiResponse deleteActionTypes(spaceName, opts)



Delete Action types for a given identifier specified

### Example

```javascript
import @CompetitionlabsJavascriptSdk from '@competitionlabs/javascript-sdk';
let defaultClient = @CompetitionlabsJavascriptSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsJavascriptSdk.ActionTypesApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'id': ["null"] // [String] | The unique identifiers of the resources
};
apiInstance.deleteActionTypes(spaceName, opts, (error, data, response) => {
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

[**ApiResponse**](docs/ApiResponse.md)

### Authorization

[adminApiKey](README.mdminApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteActionTypesByQuery

> ApiResponse deleteActionTypesByQuery(spaceName, opts)



Delete Action types from CompetitionLabs database by unique Action types ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import @CompetitionlabsJavascriptSdk from '@competitionlabs/javascript-sdk';
let defaultClient = @CompetitionlabsJavascriptSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsJavascriptSdk.ActionTypesApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'body': new @CompetitionlabsJavascriptSdk.QueryRequest() // QueryRequest | Delete Action types from CompetitionLabs database by unique Action types ID's or any other POST body parameters using the POST method
};
apiInstance.deleteActionTypesByQuery(spaceName, opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](docs/QueryRequest.md)| Delete Action types from CompetitionLabs database by unique Action types ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**ApiResponse**](docs/ApiResponse.md)

### Authorization

[adminApiKey](README.mdminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getActionTypes

> ActionTypeResponse getActionTypes(spaceName, opts)



Returns a list of Action Types. This assumes that action types have first been uploaded via a POST request or web console

### Example

```javascript
import @CompetitionlabsJavascriptSdk from '@competitionlabs/javascript-sdk';
let defaultClient = @CompetitionlabsJavascriptSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsJavascriptSdk.ActionTypesApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'id': ["null"], // [String] | The unique identifiers of the resources
  'limit': 20, // Number | Limit the returned total records found
  'skip': 0 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getActionTypes(spaceName, opts, (error, data, response) => {
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
 **limit** | **Number**| Limit the returned total records found | [optional] [default to 20]
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] [default to 0]

### Return type

[**ActionTypeResponse**](docs/ActionTypeResponse.md)

### Authorization

[adminApiKey](README.mdminApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getActionTypesByQuery

> ActionTypeResponse getActionTypesByQuery(spaceName, opts)



Retrieve Action types from CompetitionLabs database by unique Action type ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import @CompetitionlabsJavascriptSdk from '@competitionlabs/javascript-sdk';
let defaultClient = @CompetitionlabsJavascriptSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsJavascriptSdk.ActionTypesApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'body': new @CompetitionlabsJavascriptSdk.QueryRequest() // QueryRequest | Retrieve Action types from CompetitionLabs database by unique Action type ID's or any other POST body parameters using the POST method
};
apiInstance.getActionTypesByQuery(spaceName, opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](docs/QueryRequest.md)| Retrieve Action types from CompetitionLabs database by unique Action type ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**ActionTypeResponse**](docs/ActionTypeResponse.md)

### Authorization

[adminApiKey](README.mdminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateActionTypes

> ApiResponse updateActionTypes(spaceName, body, opts)



Update existing Action types in the CompetitionLabs database

### Example

```javascript
import @CompetitionlabsJavascriptSdk from '@competitionlabs/javascript-sdk';
let defaultClient = @CompetitionlabsJavascriptSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsJavascriptSdk.ActionTypesApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let body = [new @CompetitionlabsJavascriptSdk.UpdateActionTypeRequest()]; // [UpdateActionTypeRequest] | Update Action types in the CompetitionLabs database.
let opts = {
  'X_API_KEY': "X_API_KEY_example" // String | The admin API Key generated from CompetitionLabs back office
};
apiInstance.updateActionTypes(spaceName, body, opts, (error, data, response) => {
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
 **body** | [**[UpdateActionTypeRequest]**](docs/UpdateActionTypeRequest.md)| Update Action types in the CompetitionLabs database. | 
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 

### Return type

[**ApiResponse**](docs/ApiResponse.md)

### Authorization

[adminApiKey](README.mdminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

