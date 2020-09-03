# @CompetitionlabsJavascriptSdk.SpacesApi

All URIs are relative to *https://api.competitionlabs.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSpaces**](docs/SpacesApi.md#createSpaces) | **POST** /spaces | 
[**deleteSpaces**](docs/SpacesApi.md#deleteSpaces) | **DELETE** /spaces/{spaceName} | NOT AVAILABLE IN CURRENT RELEASE
[**getListOfSpacesForUser**](docs/SpacesApi.md#getListOfSpacesForUser) | **GET** /spaces | 
[**getSpacesByName**](docs/SpacesApi.md#getSpacesByName) | **GET** /spaces/{spaceName} | 
[**updateSpaces**](docs/SpacesApi.md#updateSpaces) | **PUT** /spaces | 



## createSpaces

> ApiResponse createSpaces(body, opts)



Create a new Space for the user in the CompetitionLabs

### Example

```javascript
import @CompetitionlabsJavascriptSdk from '@competitionlabs/javascript-sdk';
let defaultClient = @CompetitionlabsJavascriptSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsJavascriptSdk.SpacesApi();
let body = new @CompetitionlabsJavascriptSdk.CreateSpaceRequest(); // CreateSpaceRequest | Create a Space for the user in the CompetitionLabs
let opts = {
  'X_API_KEY': "X_API_KEY_example" // String | The admin API Key generated from CompetitionLabs back office
};
apiInstance.createSpaces(body, opts, (error, data, response) => {
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
 **body** | [**CreateSpaceRequest**](docs/CreateSpaceRequest.md)| Create a Space for the user in the CompetitionLabs | 
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 

### Return type

[**ApiResponse**](docs/ApiResponse.md)

### Authorization

[adminApiKey](README.mdminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteSpaces

> ApiResponse deleteSpaces(spaceName, opts)

NOT AVAILABLE IN CURRENT RELEASE

Delete the Space for the given Space Name provided

### Example

```javascript
import @CompetitionlabsJavascriptSdk from '@competitionlabs/javascript-sdk';
let defaultClient = @CompetitionlabsJavascriptSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsJavascriptSdk.SpacesApi();
let spaceName = "spaceName_example"; // String | This is the space name which will be deleted
let opts = {
  'X_API_KEY': "X_API_KEY_example" // String | The admin API Key generated from CompetitionLabs back office
};
apiInstance.deleteSpaces(spaceName, opts, (error, data, response) => {
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
 **spaceName** | **String**| This is the space name which will be deleted | 
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 

### Return type

[**ApiResponse**](docs/ApiResponse.md)

### Authorization

[adminApiKey](README.mdminApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getListOfSpacesForUser

> SpaceResponse getListOfSpacesForUser(opts)



Returns a list of Spaces for the current session

### Example

```javascript
import @CompetitionlabsJavascriptSdk from '@competitionlabs/javascript-sdk';
let defaultClient = @CompetitionlabsJavascriptSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsJavascriptSdk.SpacesApi();
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'limit': 20, // Number | Limit the returned total records found
  'skip': 0 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getListOfSpacesForUser(opts, (error, data, response) => {
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
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 
 **limit** | **Number**| Limit the returned total records found | [optional] [default to 20]
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] [default to 0]

### Return type

[**SpaceResponse**](docs/SpaceResponse.md)

### Authorization

[adminApiKey](README.mdminApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSpacesByName

> SpaceResponse getSpacesByName(spaceName, opts)



Return a list of sub-spaces for the given Space Name provided

### Example

```javascript
import @CompetitionlabsJavascriptSdk from '@competitionlabs/javascript-sdk';
let defaultClient = @CompetitionlabsJavascriptSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsJavascriptSdk.SpacesApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'limit': 20, // Number | Limit the returned total records found
  'skip': 0 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getSpacesByName(spaceName, opts, (error, data, response) => {
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
 **limit** | **Number**| Limit the returned total records found | [optional] [default to 20]
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] [default to 0]

### Return type

[**SpaceResponse**](docs/SpaceResponse.md)

### Authorization

[adminApiKey](README.mdminApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateSpaces

> ApiResponse updateSpaces(body, opts)



Update a  Space for the user in the CompetitionLabs

### Example

```javascript
import @CompetitionlabsJavascriptSdk from '@competitionlabs/javascript-sdk';
let defaultClient = @CompetitionlabsJavascriptSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsJavascriptSdk.SpacesApi();
let body = new @CompetitionlabsJavascriptSdk.CreateSpaceRequest(); // CreateSpaceRequest | Create a Space for the user in the CompetitionLabs
let opts = {
  'X_API_KEY': "X_API_KEY_example" // String | The admin API Key generated from CompetitionLabs back office
};
apiInstance.updateSpaces(body, opts, (error, data, response) => {
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
 **body** | [**CreateSpaceRequest**](docs/CreateSpaceRequest.md)| Create a Space for the user in the CompetitionLabs | 
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 

### Return type

[**ApiResponse**](docs/ApiResponse.md)

### Authorization

[adminApiKey](README.mdminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
