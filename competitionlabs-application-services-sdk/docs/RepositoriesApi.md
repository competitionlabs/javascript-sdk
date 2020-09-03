# @CompetitionlabsApplicationServicesSdk.RepositoriesApi

All URIs are relative to *https://api.competitionlabs.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFileObjectRepository**](RepositoriesApi.md#createFileObjectRepository) | **POST** /repositories/{spaceName} | NOT AVAILABLE IN CURRENT RELEASE
[**deleteFileObjectRepositoriesByQuery**](RepositoriesApi.md#deleteFileObjectRepositoriesByQuery) | **POST** /repositories/{spaceName}/delete | NOT AVAILABLE IN CURRENT RELEASE
[**deleteFileObjectRepositoryById**](RepositoriesApi.md#deleteFileObjectRepositoryById) | **DELETE** /repositories/{spaceName} | NOT AVAILABLE IN CURRENT RELEASE
[**getFileObjectRepositoriesByQuery**](RepositoriesApi.md#getFileObjectRepositoriesByQuery) | **POST** /repositories/{spaceName}/query | NOT AVAILABLE IN CURRENT RELEASE
[**getListOfFileObjectRepositories**](RepositoriesApi.md#getListOfFileObjectRepositories) | **GET** /repositories/{spaceName} | NOT AVAILABLE IN CURRENT RELEASE
[**updateFileObjectRepository**](RepositoriesApi.md#updateFileObjectRepository) | **PUT** /repositories/{spaceName} | NOT AVAILABLE IN CURRENT RELEASE



## createFileObjectRepository

> ApiResponse createFileObjectRepository(spaceName, body, opts)

NOT AVAILABLE IN CURRENT RELEASE

Create a new file object repository in your CompetitionLabs space

### Example

```javascript
import @CompetitionlabsApplicationServicesSdk from '@competitionlabs/application-services-sdk';
let defaultClient = @CompetitionlabsApplicationServicesSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsApplicationServicesSdk.RepositoriesApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let body = [new @CompetitionlabsApplicationServicesSdk.CreateRepositoryRequest()]; // [CreateRepositoryRequest] | Create a new file object repository in your CompetitionLabs space
let opts = {
  'X_API_KEY': "X_API_KEY_example" // String | The admin API Key generated from CompetitionLabs back office
};
apiInstance.createFileObjectRepository(spaceName, body, opts, (error, data, response) => {
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
 **body** | [**[CreateRepositoryRequest]**](CreateRepositoryRequest.md)| Create a new file object repository in your CompetitionLabs space | 
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteFileObjectRepositoriesByQuery

> ApiResponse deleteFileObjectRepositoriesByQuery(spaceName, opts)

NOT AVAILABLE IN CURRENT RELEASE

Delete repositories nby query. Delete repositories by query and/or unique repository ID&#39;s or any other body parameters

### Example

```javascript
import @CompetitionlabsApplicationServicesSdk from '@competitionlabs/application-services-sdk';
let defaultClient = @CompetitionlabsApplicationServicesSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsApplicationServicesSdk.RepositoriesApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'body': new @CompetitionlabsApplicationServicesSdk.QueryRequest() // QueryRequest | Delete repositories from a CompetitionLabs space by unique repository ID's or any other POST body parameters using the POST method
};
apiInstance.deleteFileObjectRepositoriesByQuery(spaceName, opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete repositories from a CompetitionLabs space by unique repository ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteFileObjectRepositoryById

> ApiResponse deleteFileObjectRepositoryById(spaceName, opts)

NOT AVAILABLE IN CURRENT RELEASE

Delete the file repository for a given identifier specified

### Example

```javascript
import @CompetitionlabsApplicationServicesSdk from '@competitionlabs/application-services-sdk';
let defaultClient = @CompetitionlabsApplicationServicesSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsApplicationServicesSdk.RepositoriesApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'id': ["null"], // [String] | The unique identifiers of the resources
  'permanent': true // Boolean | Permanently delete the file object. Default is false
};
apiInstance.deleteFileObjectRepositoryById(spaceName, opts, (error, data, response) => {
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
 **permanent** | **Boolean**| Permanently delete the file object. Default is false | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFileObjectRepositoriesByQuery

> RepositoryResponse getFileObjectRepositoriesByQuery(spaceName, opts)

NOT AVAILABLE IN CURRENT RELEASE

Find file object repositories by query

### Example

```javascript
import @CompetitionlabsApplicationServicesSdk from '@competitionlabs/application-services-sdk';
let defaultClient = @CompetitionlabsApplicationServicesSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsApplicationServicesSdk.RepositoriesApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'body': new @CompetitionlabsApplicationServicesSdk.QueryRequest() // QueryRequest | Retrieve file object repositories from CompetitionLabs by unique repository ID's or any other POST body parameters using the POST method
};
apiInstance.getFileObjectRepositoriesByQuery(spaceName, opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve file object repositories from CompetitionLabs by unique repository ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**RepositoryResponse**](RepositoryResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getListOfFileObjectRepositories

> RepositoryResponse getListOfFileObjectRepositories(spaceName, opts)

NOT AVAILABLE IN CURRENT RELEASE

Returns a list of file object repositories. This assumes that repositories have first been uploaded via a POST request or web console

### Example

```javascript
import @CompetitionlabsApplicationServicesSdk from '@competitionlabs/application-services-sdk';
let defaultClient = @CompetitionlabsApplicationServicesSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsApplicationServicesSdk.RepositoriesApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56, // Number | Skip the returned records found and return the next batch of records
  'id': ["null"] // [String] | The unique identifiers of the resources
};
apiInstance.getListOfFileObjectRepositories(spaceName, opts, (error, data, response) => {
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
 **limit** | **Number**| Limit the returned total records found | [optional] 
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] 
 **id** | [**[String]**](String.md)| The unique identifiers of the resources | [optional] 

### Return type

[**RepositoryResponse**](RepositoryResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateFileObjectRepository

> ApiResponse updateFileObjectRepository(spaceName, body, opts)

NOT AVAILABLE IN CURRENT RELEASE

Update a file object repository in your CompetitionLabs space.

### Example

```javascript
import @CompetitionlabsApplicationServicesSdk from '@competitionlabs/application-services-sdk';
let defaultClient = @CompetitionlabsApplicationServicesSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsApplicationServicesSdk.RepositoriesApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let body = [new @CompetitionlabsApplicationServicesSdk.UpdateRepositoryRequest()]; // [UpdateRepositoryRequest] | Update a file object repository in your CompetitionLabs space.
let opts = {
  'X_API_KEY': "X_API_KEY_example" // String | The admin API Key generated from CompetitionLabs back office
};
apiInstance.updateFileObjectRepository(spaceName, body, opts, (error, data, response) => {
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
 **body** | [**[UpdateRepositoryRequest]**](UpdateRepositoryRequest.md)| Update a file object repository in your CompetitionLabs space. | 
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

