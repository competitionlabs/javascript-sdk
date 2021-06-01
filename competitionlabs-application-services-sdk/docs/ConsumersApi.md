# CompetitionLabsAdminServices.ConsumersApi

All URIs are relative to *https://api.competitionlabs.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createConnections**](ConsumersApi.md#createConnections) | **POST** /connections | NOT AVAILABLE IN CURRENT RELEASE
[**deleteConnections**](ConsumersApi.md#deleteConnections) | **DELETE** /connections | 
[**deleteConnectionsByQuery**](ConsumersApi.md#deleteConnectionsByQuery) | **POST** /connections/delete | 
[**getConnections**](ConsumersApi.md#getConnections) | **GET** /connections | 
[**getConnectionsByQuery**](ConsumersApi.md#getConnectionsByQuery) | **POST** /connections/query | 
[**updateConnections**](ConsumersApi.md#updateConnections) | **PUT** /connections | NOT AVAILABLE IN CURRENT RELEASE
[**updateConnectionsState**](ConsumersApi.md#updateConnectionsState) | **POST** /connections/state | 



## createConnections

> ApiResponse createConnections(body)

NOT AVAILABLE IN CURRENT RELEASE

Create a new consumer in the CompetitionLabs system

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.ConsumersApi();
let body = new CompetitionLabsAdminServices.CreateConnectionRequest(); // CreateConnectionRequest | Create a consumer in the CompetitionLabs system
apiInstance.createConnections(body, (error, data, response) => {
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
 **body** | [**CreateConnectionRequest**](CreateConnectionRequest.md)| Create a consumer in the CompetitionLabs system | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteConnections

> ApiResponse deleteConnections(opts)



Delete the Consumers for a given identifier specified

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.ConsumersApi();
let opts = {
  'id': ["null"] // [String] | The unique identifiers of the resources
};
apiInstance.deleteConnections(opts, (error, data, response) => {
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


## deleteConnectionsByQuery

> ApiResponse deleteConnectionsByQuery(opts)



Delete a Consumer or a list of Consumers from CompetitionLabs by unique Consumer ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.ConsumersApi();
let opts = {
  'body': new CompetitionLabsAdminServices.QueryRequest() // QueryRequest | Delete a Consumer or a list of Consumers from CompetitionLabs by unique Consumer ID's or any other POST body parameters using the POST method
};
apiInstance.deleteConnectionsByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete a Consumer or a list of Consumers from CompetitionLabs by unique Consumer ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getConnections

> ConnectionResponse getConnections(opts)



Return a list of Consumers

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.ConsumersApi();
let opts = {
  'id': ["null"], // [String] | The unique identifiers of the resources
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getConnections(opts, (error, data, response) => {
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

[**ConnectionResponse**](ConnectionResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConnectionsByQuery

> ConnectionResponse getConnectionsByQuery(opts)



Retrieve a Consumer or a list of Consumers from CompetitionLabs by unique Consumer ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.ConsumersApi();
let opts = {
  'body': new CompetitionLabsAdminServices.QueryRequest() // QueryRequest | Retrieve a Consumer or a list of Consumers from CompetitionLabs by unique Consumer ID's or any other Post body parameters using the POST method
};
apiInstance.getConnectionsByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve a Consumer or a list of Consumers from CompetitionLabs by unique Consumer ID&#39;s or any other Post body parameters using the POST method | [optional] 

### Return type

[**ConnectionResponse**](ConnectionResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateConnections

> ApiResponse updateConnections(body)

NOT AVAILABLE IN CURRENT RELEASE

Update an existing Consumer in the CompetitionLabs system

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.ConsumersApi();
let body = new CompetitionLabsAdminServices.UpdateConnectionRequest(); // UpdateConnectionRequest | Update Consumer details in the CompetitionLabs system
apiInstance.updateConnections(body, (error, data, response) => {
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
 **body** | [**UpdateConnectionRequest**](UpdateConnectionRequest.md)| Update Consumer details in the CompetitionLabs system | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateConnectionsState

> ApiResponse updateConnectionsState(opts)



Update the state of a Consumer using the POST method

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.ConsumersApi();
let opts = {
  'body': [new CompetitionLabsAdminServices.UpdateConnectionStateRequest()] // [UpdateConnectionStateRequest] | Update the state of a Consumer using the POST method
};
apiInstance.updateConnectionsState(opts, (error, data, response) => {
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
 **body** | [**[UpdateConnectionStateRequest]**](UpdateConnectionStateRequest.md)| Update the state of a Consumer using the POST method | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

