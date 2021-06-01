# CompetitionLabsAdminServices.ApiKeysApi

All URIs are relative to *https://api.competitionlabs.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApiKeys**](ApiKeysApi.md#createApiKeys) | **POST** /api-keys | 
[**deleteApiKeysById**](ApiKeysApi.md#deleteApiKeysById) | **DELETE** /api-keys/{id} | 
[**deleteApiKeysByQuery**](ApiKeysApi.md#deleteApiKeysByQuery) | **POST** /api-keys/delete | 
[**getApiKeysById**](ApiKeysApi.md#getApiKeysById) | **GET** /api-keys/{id} | 
[**getApiKeysByQuery**](ApiKeysApi.md#getApiKeysByQuery) | **POST** /api-keys/query | 
[**getListOfApiKeys**](ApiKeysApi.md#getListOfApiKeys) | **GET** /api-keys | 
[**updateApiKeys**](ApiKeysApi.md#updateApiKeys) | **PUT** /api-keys | 



## createApiKeys

> ApiResponse createApiKeys(body)



Create a new Api key in the CompetitionLabs system

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.ApiKeysApi();
let body = new CompetitionLabsAdminServices.CreateApiKeyRequest(); // CreateApiKeyRequest | Create an Api key in the CompetitionLabs system
apiInstance.createApiKeys(body, (error, data, response) => {
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
 **body** | [**CreateApiKeyRequest**](CreateApiKeyRequest.md)| Create an Api key in the CompetitionLabs system | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteApiKeysById

> ApiResponse deleteApiKeysById(id)



Delete the Api key for a given identifier specified

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.ApiKeysApi();
let id = "id_example"; // String | Unique identifier of the resource
apiInstance.deleteApiKeysById(id, (error, data, response) => {
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
 **id** | **String**| Unique identifier of the resource | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteApiKeysByQuery

> ApiResponse deleteApiKeysByQuery(opts)



Delete an Api key or a list of Api keys from CompetitionLabs by query

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.ApiKeysApi();
let opts = {
  'body': new CompetitionLabsAdminServices.QueryRequest() // QueryRequest | Delete an Api key or a list of Api keys from CompetitionLabs by unique Api key ID's or any other POST body parameters using the POST method
};
apiInstance.deleteApiKeysByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete an Api key or a list of Api keys from CompetitionLabs by unique Api key ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getApiKeysById

> ApiKeyResponse getApiKeysById(id)



Returns an Api key by identifier provided. This assumes that api keys have first been created via a POST request or web console

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.ApiKeysApi();
let id = "id_example"; // String | Unique identifier of the resource
apiInstance.getApiKeysById(id, (error, data, response) => {
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
 **id** | **String**| Unique identifier of the resource | 

### Return type

[**ApiKeyResponse**](ApiKeyResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getApiKeysByQuery

> ApiKeyResponse getApiKeysByQuery(opts)



Retrieve an Api key or a list of Api keys by query

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.ApiKeysApi();
let opts = {
  'body': new CompetitionLabsAdminServices.QueryRequest() // QueryRequest | Retrieve an Api key or a list of Api keys from CompetitionLabs by unique Api key ID's or any other POST body parameters using the POST method
};
apiInstance.getApiKeysByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve an Api key or a list of Api keys from CompetitionLabs by unique Api key ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**ApiKeyResponse**](ApiKeyResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getListOfApiKeys

> ApiKeyResponse getListOfApiKeys(opts)



Returns a list of Api keys. This assumes that api keys have first been created via a POST request or web console

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.ApiKeysApi();
let opts = {
  'id': ["null"], // [String] | The unique identifiers of the resources
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getListOfApiKeys(opts, (error, data, response) => {
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
 **limit** | **Number**| Limit the returned total records found | [optional] 
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] 

### Return type

[**ApiKeyResponse**](ApiKeyResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateApiKeys

> ApiResponse updateApiKeys(body)



Update an existing Api key in the CompetitionLabs system

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.ApiKeysApi();
let body = new CompetitionLabsAdminServices.UpdateApiKeyRequest(); // UpdateApiKeyRequest | Update an Api key in the CompetitionLabs system. * Any Put body Parameters that are excluded in the Request body field will be considered as empty and updated with an empty field
apiInstance.updateApiKeys(body, (error, data, response) => {
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
 **body** | [**UpdateApiKeyRequest**](UpdateApiKeyRequest.md)| Update an Api key in the CompetitionLabs system. * Any Put body Parameters that are excluded in the Request body field will be considered as empty and updated with an empty field | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

