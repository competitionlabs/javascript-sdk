# @CompetitionlabsInsightsServicesSdk.FilesApi

All URIs are relative to *https://api.competitionlabs.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**copyFileObjects**](FilesApi.md#copyFileObjects) | **POST** /files/{spaceName}/copy | NOT AVAILABLE IN CURRENT RELEASE
[**createFileObject**](FilesApi.md#createFileObject) | **POST** /files/{spaceName} | NOT AVAILABLE IN CURRENT RELEASE
[**deleteFileObjectById**](FilesApi.md#deleteFileObjectById) | **DELETE** /files/{spaceName} | NOT AVAILABLE IN CURRENT RELEASE
[**deleteFileObjectsByQuery**](FilesApi.md#deleteFileObjectsByQuery) | **POST** /files/{spaceName}/delete | NOT AVAILABLE IN CURRENT RELEASE
[**getFileObjectsByQuery**](FilesApi.md#getFileObjectsByQuery) | **POST** /files/{spaceName}/query | NOT AVAILABLE IN CURRENT RELEASE
[**getListOfFileObjects**](FilesApi.md#getListOfFileObjects) | **GET** /files/{spaceName} | NOT AVAILABLE IN CURRENT RELEASE
[**updateFileObject**](FilesApi.md#updateFileObject) | **PUT** /files/{spaceName} | NOT AVAILABLE IN CURRENT RELEASE
[**uploadFileObject**](FilesApi.md#uploadFileObject) | **POST** /files/{spaceName}/upload | NOT AVAILABLE IN CURRENT RELEASE



## copyFileObjects

> ApiResponse copyFileObjects(spaceName, body, opts)

NOT AVAILABLE IN CURRENT RELEASE

Copy an existing file object

### Example

```javascript
import @CompetitionlabsInsightsServicesSdk from '@competitionlabs/insights-services-sdk';
let defaultClient = @CompetitionlabsInsightsServicesSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsInsightsServicesSdk.FilesApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let body = new @CompetitionlabsInsightsServicesSdk.UpdateFileObjectRequest(); // UpdateFileObjectRequest | Copy file objects inside a repository and dumplicate in another folder or repository.
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'id': ["null"] // [String] | The unique identifiers of the resources
};
apiInstance.copyFileObjects(spaceName, body, opts, (error, data, response) => {
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
 **body** | [**UpdateFileObjectRequest**](UpdateFileObjectRequest.md)| Copy file objects inside a repository and dumplicate in another folder or repository. | 
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 
 **id** | [**[String]**](String.md)| The unique identifiers of the resources | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createFileObject

> ApiResponse createFileObject(spaceName, body, opts)

NOT AVAILABLE IN CURRENT RELEASE

### Example

```javascript
import @CompetitionlabsInsightsServicesSdk from '@competitionlabs/insights-services-sdk';
let defaultClient = @CompetitionlabsInsightsServicesSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsInsightsServicesSdk.FilesApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let body = [new @CompetitionlabsInsightsServicesSdk.CreateFileObjectRequest()]; // [CreateFileObjectRequest] | Create a new file object repository in your CompetitionLabs space
let opts = {
  'X_API_KEY': "X_API_KEY_example" // String | The admin API Key generated from CompetitionLabs back office
};
apiInstance.createFileObject(spaceName, body, opts, (error, data, response) => {
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
 **body** | [**[CreateFileObjectRequest]**](CreateFileObjectRequest.md)| Create a new file object repository in your CompetitionLabs space | 
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteFileObjectById

> ApiResponse deleteFileObjectById(spaceName, opts)

NOT AVAILABLE IN CURRENT RELEASE

### Example

```javascript
import @CompetitionlabsInsightsServicesSdk from '@competitionlabs/insights-services-sdk';
let defaultClient = @CompetitionlabsInsightsServicesSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsInsightsServicesSdk.FilesApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'id': ["null"], // [String] | The unique identifiers of the resources
  'permanent': true // Boolean | Permanently delete the file object. Default is false
};
apiInstance.deleteFileObjectById(spaceName, opts, (error, data, response) => {
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


## deleteFileObjectsByQuery

> ApiResponse deleteFileObjectsByQuery(spaceName, opts)

NOT AVAILABLE IN CURRENT RELEASE

Delete file objects by query

### Example

```javascript
import @CompetitionlabsInsightsServicesSdk from '@competitionlabs/insights-services-sdk';
let defaultClient = @CompetitionlabsInsightsServicesSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsInsightsServicesSdk.FilesApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'id': ["null"], // [String] | The unique identifiers of the resources
  'body': new @CompetitionlabsInsightsServicesSdk.QueryRequest() // QueryRequest | Delete file objects inside a repository from CompetitionLabs by unique file by unique object ID's or any other POST body parameters using the POST method
};
apiInstance.deleteFileObjectsByQuery(spaceName, opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete file objects inside a repository from CompetitionLabs by unique file by unique object ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getFileObjectsByQuery

> FileObjectsResponse getFileObjectsByQuery(spaceName, opts)

NOT AVAILABLE IN CURRENT RELEASE

Retrieve file objects by query

### Example

```javascript
import @CompetitionlabsInsightsServicesSdk from '@competitionlabs/insights-services-sdk';
let defaultClient = @CompetitionlabsInsightsServicesSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsInsightsServicesSdk.FilesApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'id': ["null"], // [String] | The unique identifiers of the resources
  'body': new @CompetitionlabsInsightsServicesSdk.QueryRequest() // QueryRequest | Retrieve file objects inside a repository from CompetitionLabs by unique file object ID's or any other POST body parameters using the POST method
};
apiInstance.getFileObjectsByQuery(spaceName, opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve file objects inside a repository from CompetitionLabs by unique file object ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**FileObjectsResponse**](FileObjectsResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getListOfFileObjects

> FileObjectsResponse getListOfFileObjects(spaceName, opts)

NOT AVAILABLE IN CURRENT RELEASE

Returns a list of file objects

### Example

```javascript
import @CompetitionlabsInsightsServicesSdk from '@competitionlabs/insights-services-sdk';
let defaultClient = @CompetitionlabsInsightsServicesSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsInsightsServicesSdk.FilesApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56, // Number | Skip the returned records found and return the next batch of records
  'id': ["null"] // [String] | The unique identifiers of the resources
};
apiInstance.getListOfFileObjects(spaceName, opts, (error, data, response) => {
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

[**FileObjectsResponse**](FileObjectsResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateFileObject

> ApiResponse updateFileObject(spaceName, body, opts)

NOT AVAILABLE IN CURRENT RELEASE

### Example

```javascript
import @CompetitionlabsInsightsServicesSdk from '@competitionlabs/insights-services-sdk';
let defaultClient = @CompetitionlabsInsightsServicesSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsInsightsServicesSdk.FilesApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let body = [new @CompetitionlabsInsightsServicesSdk.UpdateFileObjectRequest()]; // [UpdateFileObjectRequest] | Update a file object in your CompetitionLabs space.
let opts = {
  'X_API_KEY': "X_API_KEY_example" // String | The admin API Key generated from CompetitionLabs back office
};
apiInstance.updateFileObject(spaceName, body, opts, (error, data, response) => {
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
 **body** | [**[UpdateFileObjectRequest]**](UpdateFileObjectRequest.md)| Update a file object in your CompetitionLabs space. | 
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## uploadFileObject

> ApiResponse uploadFileObject(spaceName, opts)

NOT AVAILABLE IN CURRENT RELEASE

Create or update file objects and binaries in your CompetitionLabs space

### Example

```javascript
import @CompetitionlabsInsightsServicesSdk from '@competitionlabs/insights-services-sdk';
let defaultClient = @CompetitionlabsInsightsServicesSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsInsightsServicesSdk.FilesApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'tags': "tags_example", // [String] | The tags associated with this file object
  'parentFolderPath': "parentFolderPath_example", // String | The folder to save these file in.
  'metadata': new @CompetitionlabsInsightsServicesSdk.Metadata(), // [Metadata] | Metadata used to describe this file. Content type application/json
  'file': "/path/to/file" // [File] | The files to upload
};
apiInstance.uploadFileObject(spaceName, opts, (error, data, response) => {
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
 **tags** | [**[String]**](String.md)| The tags associated with this file object | [optional] 
 **parentFolderPath** | **String**| The folder to save these file in. | [optional] 
 **metadata** | [**[Metadata]**](Metadata.md)| Metadata used to describe this file. Content type application/json | [optional] 
 **file** | **[File]**| The files to upload | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

