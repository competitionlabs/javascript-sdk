# CompetitionLabsApplicationServices.FilesApi

All URIs are relative to *https://api.competitionlabs.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**copyFileObjects**](FilesApi.md#copyFileObjects) | **POST** /files/copy | NOT AVAILABLE IN CURRENT RELEASE
[**createFileObject**](FilesApi.md#createFileObject) | **POST** /files | NOT AVAILABLE IN CURRENT RELEASE
[**deleteFileObjectById**](FilesApi.md#deleteFileObjectById) | **DELETE** /files | NOT AVAILABLE IN CURRENT RELEASE
[**deleteFileObjectsByQuery**](FilesApi.md#deleteFileObjectsByQuery) | **POST** /files/delete | NOT AVAILABLE IN CURRENT RELEASE
[**downloadFileObject**](FilesApi.md#downloadFileObject) | **GET** /files/download | NOT AVAILABLE IN CURRENT RELEASE
[**getFileObjectsByQuery**](FilesApi.md#getFileObjectsByQuery) | **POST** /files/query | NOT AVAILABLE IN CURRENT RELEASE
[**getListOfFileObjects**](FilesApi.md#getListOfFileObjects) | **GET** /files | NOT AVAILABLE IN CURRENT RELEASE
[**updateFileObject**](FilesApi.md#updateFileObject) | **PUT** /files | NOT AVAILABLE IN CURRENT RELEASE
[**uploadFileObject**](FilesApi.md#uploadFileObject) | **POST** /files/upload | NOT AVAILABLE IN CURRENT RELEASE



## copyFileObjects

> ApiResponse copyFileObjects(body, opts)

NOT AVAILABLE IN CURRENT RELEASE

Copy an existing file object

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

let apiInstance = new CompetitionLabsApplicationServices.FilesApi();
let body = new CompetitionLabsApplicationServices.UpdateFileObjectRequest(); // UpdateFileObjectRequest | Copy file objects inside a repository and dumplicate in another folder or repository.
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'id': ["null"] // [String] | The unique identifiers of the resources
};
apiInstance.copyFileObjects(body, opts, (error, data, response) => {
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
 **body** | [**UpdateFileObjectRequest**](UpdateFileObjectRequest.md)| Copy file objects inside a repository and dumplicate in another folder or repository. | 
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 
 **id** | [**[String]**](String.md)| The unique identifiers of the resources | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[AdminApiKey](../README.md#AdminApiKey), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createFileObject

> ApiResponse createFileObject(body, opts)

NOT AVAILABLE IN CURRENT RELEASE

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

let apiInstance = new CompetitionLabsApplicationServices.FilesApi();
let body = [new CompetitionLabsApplicationServices.CreateFileObjectRequest()]; // [CreateFileObjectRequest] | Create a new file object repository in your CompetitionLabs space
let opts = {
  'X_API_KEY': "X_API_KEY_example" // String | The admin API Key generated from CompetitionLabs back office
};
apiInstance.createFileObject(body, opts, (error, data, response) => {
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
 **body** | [**[CreateFileObjectRequest]**](CreateFileObjectRequest.md)| Create a new file object repository in your CompetitionLabs space | 
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[AdminApiKey](../README.md#AdminApiKey), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteFileObjectById

> ApiResponse deleteFileObjectById(opts)

NOT AVAILABLE IN CURRENT RELEASE

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

let apiInstance = new CompetitionLabsApplicationServices.FilesApi();
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'id': ["null"], // [String] | The unique identifiers of the resources
  'permanent': true // Boolean | Permanently delete the file object. Default is false
};
apiInstance.deleteFileObjectById(opts, (error, data, response) => {
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
 **id** | [**[String]**](String.md)| The unique identifiers of the resources | [optional] 
 **permanent** | **Boolean**| Permanently delete the file object. Default is false | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[AdminApiKey](../README.md#AdminApiKey), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteFileObjectsByQuery

> ApiResponse deleteFileObjectsByQuery(opts)

NOT AVAILABLE IN CURRENT RELEASE

Delete file objects by query

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

let apiInstance = new CompetitionLabsApplicationServices.FilesApi();
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'id': ["null"], // [String] | The unique identifiers of the resources
  'body': new CompetitionLabsApplicationServices.QueryRequest() // QueryRequest | Delete file objects inside a repository from CompetitionLabs by unique file by unique object ID's or any other POST body parameters using the POST method
};
apiInstance.deleteFileObjectsByQuery(opts, (error, data, response) => {
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
 **id** | [**[String]**](String.md)| The unique identifiers of the resources | [optional] 
 **body** | [**QueryRequest**](QueryRequest.md)| Delete file objects inside a repository from CompetitionLabs by unique file by unique object ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[AdminApiKey](../README.md#AdminApiKey), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## downloadFileObject

> File downloadFileObject(opts)

NOT AVAILABLE IN CURRENT RELEASE

Download file objects from your CompetitionLabs space

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

let apiInstance = new CompetitionLabsApplicationServices.FilesApi();
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'path': "path_example" // String | The canonical path of the file to download
};
apiInstance.downloadFileObject(opts, (error, data, response) => {
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
 **path** | **String**| The canonical path of the file to download | [optional] 

### Return type

**File**

### Authorization

[AdminApiKey](../README.md#AdminApiKey), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/xml, application/json


## getFileObjectsByQuery

> FileObjectsResponse getFileObjectsByQuery(opts)

NOT AVAILABLE IN CURRENT RELEASE

Retrieve file objects by query

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

let apiInstance = new CompetitionLabsApplicationServices.FilesApi();
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'id': ["null"], // [String] | The unique identifiers of the resources
  'body': new CompetitionLabsApplicationServices.QueryRequest() // QueryRequest | Retrieve file objects inside a repository from CompetitionLabs by unique file object ID's or any other POST body parameters using the POST method
};
apiInstance.getFileObjectsByQuery(opts, (error, data, response) => {
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
 **id** | [**[String]**](String.md)| The unique identifiers of the resources | [optional] 
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve file objects inside a repository from CompetitionLabs by unique file object ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**FileObjectsResponse**](FileObjectsResponse.md)

### Authorization

[AdminApiKey](../README.md#AdminApiKey), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getListOfFileObjects

> FileObjectsResponse getListOfFileObjects(opts)

NOT AVAILABLE IN CURRENT RELEASE

Returns a list of file objects

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

let apiInstance = new CompetitionLabsApplicationServices.FilesApi();
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56, // Number | Skip the returned records found and return the next batch of records
  'id': ["null"], // [String] | The unique identifiers of the resources
  'download': "download_example" // String | 
};
apiInstance.getListOfFileObjects(opts, (error, data, response) => {
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
 **limit** | **Number**| Limit the returned total records found | [optional] 
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] 
 **id** | [**[String]**](String.md)| The unique identifiers of the resources | [optional] 
 **download** | **String**|  | [optional] 

### Return type

[**FileObjectsResponse**](FileObjectsResponse.md)

### Authorization

[AdminApiKey](../README.md#AdminApiKey), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateFileObject

> ApiResponse updateFileObject(body, opts)

NOT AVAILABLE IN CURRENT RELEASE

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

let apiInstance = new CompetitionLabsApplicationServices.FilesApi();
let body = [new CompetitionLabsApplicationServices.UpdateFileObjectRequest()]; // [UpdateFileObjectRequest] | Update a file object in your CompetitionLabs space.
let opts = {
  'X_API_KEY': "X_API_KEY_example" // String | The admin API Key generated from CompetitionLabs back office
};
apiInstance.updateFileObject(body, opts, (error, data, response) => {
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
 **body** | [**[UpdateFileObjectRequest]**](UpdateFileObjectRequest.md)| Update a file object in your CompetitionLabs space. | 
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[AdminApiKey](../README.md#AdminApiKey), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## uploadFileObject

> ApiResponse uploadFileObject(opts)

NOT AVAILABLE IN CURRENT RELEASE

Create or update file objects and binaries in your CompetitionLabs space

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

let apiInstance = new CompetitionLabsApplicationServices.FilesApi();
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'customFields': "customFields_example", // [String] | A list of id's used to add cutom fields
  'tags': "tags_example", // [String] | A list of id's used to tag models
  'metadata': new CompetitionLabsApplicationServices.Metadata(), // [Metadata] | 
  'parentFolderPath': "parentFolderPath_example", // String | The folder to save these file in.
  'files': "/path/to/file", // [File] | The files to upload
  'repositoryId': "repositoryId_example" // String | 
};
apiInstance.uploadFileObject(opts, (error, data, response) => {
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
 **customFields** | [**[String]**](String.md)| A list of id&#39;s used to add cutom fields | [optional] 
 **tags** | [**[String]**](String.md)| A list of id&#39;s used to tag models | [optional] 
 **metadata** | [**[Metadata]**](Metadata.md)|  | [optional] 
 **parentFolderPath** | **String**| The folder to save these file in. | [optional] 
 **files** | **[File]**| The files to upload | [optional] 
 **repositoryId** | **String**|  | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[AdminApiKey](../README.md#AdminApiKey), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

