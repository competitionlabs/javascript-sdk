# CompetitionLabsAdminServices.TransformersApi

All URIs are relative to *https://api.competitionlabs.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTransformers**](TransformersApi.md#createTransformers) | **POST** /transformers | 
[**deleteTransformers**](TransformersApi.md#deleteTransformers) | **DELETE** /transformers | 
[**deleteTransformersByQuery**](TransformersApi.md#deleteTransformersByQuery) | **POST** /transformers/delete | 
[**getTransformers**](TransformersApi.md#getTransformers) | **GET** /transformers | 
[**getTransformersByQuery**](TransformersApi.md#getTransformersByQuery) | **POST** /transformers/query | 
[**updateTransformers**](TransformersApi.md#updateTransformers) | **PUT** /transformers | 



## createTransformers

> ApiResponse createTransformers(body)



Create a new Transformer in the CompetitionLabs system

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.TransformersApi();
let body = [new CompetitionLabsAdminServices.CreateTransformerRequest()]; // [CreateTransformerRequest] | Create a Transformer in the CompetitionLabs system
apiInstance.createTransformers(body, (error, data, response) => {
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
 **body** | [**[CreateTransformerRequest]**](CreateTransformerRequest.md)| Create a Transformer in the CompetitionLabs system | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTransformers

> ApiResponse deleteTransformers(opts)



Delete the Transformers for a given identifier specified

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.TransformersApi();
let opts = {
  'id': ["null"] // [String] | The unique identifiers of the resources
};
apiInstance.deleteTransformers(opts, (error, data, response) => {
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

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteTransformersByQuery

> ApiResponse deleteTransformersByQuery(opts)



Delete a Transformer or a list of Transformers from CompetitionLabs by unique Transformer ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.TransformersApi();
let opts = {
  'body': new CompetitionLabsAdminServices.QueryRequest() // QueryRequest | Delete a Transformer or a list of Transformers from CompetitionLabs by unique Transformer ID's or any other POST body parameters using the POST method
};
apiInstance.deleteTransformersByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete a Transformer or a list of Transformers from CompetitionLabs by unique Transformer ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getTransformers

> TransformerResponse getTransformers(opts)



Returns a list of Transformers. This assumes that transformers have first been uploaded via a POST request or web console

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.TransformersApi();
let opts = {
  'id': ["null"], // [String] | The unique identifiers of the resources
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getTransformers(opts, (error, data, response) => {
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

[**TransformerResponse**](TransformerResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTransformersByQuery

> TransformerResponse getTransformersByQuery(opts)



Retrieve a Transformer or a list of Transformers from CompetitionLabs by unique Transformer ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.TransformersApi();
let opts = {
  'body': new CompetitionLabsAdminServices.QueryRequest() // QueryRequest | Retrieve a Transformer or a list of Transformers from CompetitionLabs by unique Transformer ID's or any other Post body parameters using the POST method
};
apiInstance.getTransformersByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve a Transformer or a list of Transformers from CompetitionLabs by unique Transformer ID&#39;s or any other Post body parameters using the POST method | [optional] 

### Return type

[**TransformerResponse**](TransformerResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateTransformers

> ApiResponse updateTransformers(body)



Update an existing Transformer in the CompetitionLabs system

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.TransformersApi();
let body = [new CompetitionLabsAdminServices.UpdateTransformerRequest()]; // [UpdateTransformerRequest] | Update Transformer details in the CompetitionLabs system
apiInstance.updateTransformers(body, (error, data, response) => {
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
 **body** | [**[UpdateTransformerRequest]**](UpdateTransformerRequest.md)| Update Transformer details in the CompetitionLabs system | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

