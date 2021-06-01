# CompetitionLabsAdminServices.RepositoriesApi

All URIs are relative to *https://api.competitionlabs.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFileObjectRepository**](RepositoriesApi.md#createFileObjectRepository) | **POST** /repositories | NOT AVAILABLE IN CURRENT RELEASE
[**deleteFileObjectRepositoriesByQuery**](RepositoriesApi.md#deleteFileObjectRepositoriesByQuery) | **POST** /repositories/delete | NOT AVAILABLE IN CURRENT RELEASE
[**deleteFileObjectRepositoryById**](RepositoriesApi.md#deleteFileObjectRepositoryById) | **DELETE** /repositories | NOT AVAILABLE IN CURRENT RELEASE
[**getFileObjectRepositoriesByQuery**](RepositoriesApi.md#getFileObjectRepositoriesByQuery) | **POST** /repositories/query | NOT AVAILABLE IN CURRENT RELEASE
[**getListOfFileObjectRepositories**](RepositoriesApi.md#getListOfFileObjectRepositories) | **GET** /repositories | NOT AVAILABLE IN CURRENT RELEASE
[**updateFileObjectRepository**](RepositoriesApi.md#updateFileObjectRepository) | **PUT** /repositories | NOT AVAILABLE IN CURRENT RELEASE



## createFileObjectRepository

> ApiResponse createFileObjectRepository(body)

NOT AVAILABLE IN CURRENT RELEASE

Create a new file object repository in your CompetitionLabs space

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.RepositoriesApi();
let body = [new CompetitionLabsAdminServices.CreateRepositoryRequest()]; // [CreateRepositoryRequest] | Create a new file object repository in your CompetitionLabs space
apiInstance.createFileObjectRepository(body, (error, data, response) => {
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
 **body** | [**[CreateRepositoryRequest]**](CreateRepositoryRequest.md)| Create a new file object repository in your CompetitionLabs space | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteFileObjectRepositoriesByQuery

> ApiResponse deleteFileObjectRepositoriesByQuery(opts)

NOT AVAILABLE IN CURRENT RELEASE

Delete repositories nby query. Delete repositories by query and/or unique repository ID&#39;s or any other body parameters

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.RepositoriesApi();
let opts = {
  'body': new CompetitionLabsAdminServices.QueryRequest() // QueryRequest | Delete repositories from a CompetitionLabs space by unique repository ID's or any other POST body parameters using the POST method
};
apiInstance.deleteFileObjectRepositoriesByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete repositories from a CompetitionLabs space by unique repository ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteFileObjectRepositoryById

> ApiResponse deleteFileObjectRepositoryById(opts)

NOT AVAILABLE IN CURRENT RELEASE

Delete the file repository for a given identifier specified

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.RepositoriesApi();
let opts = {
  'id': ["null"], // [String] | The unique identifiers of the resources
  'permanent': true // Boolean | Permanently delete the file object. Default is false
};
apiInstance.deleteFileObjectRepositoryById(opts, (error, data, response) => {
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
 **id** | [**[String]**](String.md)| The unique identifiers of the resources | [optional] 
 **permanent** | **Boolean**| Permanently delete the file object. Default is false | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFileObjectRepositoriesByQuery

> RepositoryResponse getFileObjectRepositoriesByQuery(opts)

NOT AVAILABLE IN CURRENT RELEASE

Find file object repositories by query

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.RepositoriesApi();
let opts = {
  'body': new CompetitionLabsAdminServices.QueryRequest() // QueryRequest | Retrieve file object repositories from CompetitionLabs by unique repository ID's or any other POST body parameters using the POST method
};
apiInstance.getFileObjectRepositoriesByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve file object repositories from CompetitionLabs by unique repository ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**RepositoryResponse**](RepositoryResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getListOfFileObjectRepositories

> RepositoryResponse getListOfFileObjectRepositories(opts)

NOT AVAILABLE IN CURRENT RELEASE

Returns a list of file object repositories. This assumes that repositories have first been uploaded via a POST request or web console

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.RepositoriesApi();
let opts = {
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56, // Number | Skip the returned records found and return the next batch of records
  'id': ["null"] // [String] | The unique identifiers of the resources
};
apiInstance.getListOfFileObjectRepositories(opts, (error, data, response) => {
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
 **limit** | **Number**| Limit the returned total records found | [optional] 
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] 
 **id** | [**[String]**](String.md)| The unique identifiers of the resources | [optional] 

### Return type

[**RepositoryResponse**](RepositoryResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateFileObjectRepository

> ApiResponse updateFileObjectRepository(body)

NOT AVAILABLE IN CURRENT RELEASE

Update a file object repository in your CompetitionLabs space.

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.RepositoriesApi();
let body = [new CompetitionLabsAdminServices.UpdateRepositoryRequest()]; // [UpdateRepositoryRequest] | Update a file object repository in your CompetitionLabs space.
apiInstance.updateFileObjectRepository(body, (error, data, response) => {
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
 **body** | [**[UpdateRepositoryRequest]**](UpdateRepositoryRequest.md)| Update a file object repository in your CompetitionLabs space. | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

