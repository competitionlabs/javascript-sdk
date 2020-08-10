# CompetitionLabsApplicationServices.ConsumersApi

All URIs are relative to *https://api.competitionlabs.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createConsumers**](ConsumersApi.md#createConsumers) | **POST** /consumers/{spaceName} | NOT AVAILABLE IN CURRENT RELEASE
[**deleteConsumers**](ConsumersApi.md#deleteConsumers) | **DELETE** /consumers/{spaceName} | 
[**deleteConsumersByQuery**](ConsumersApi.md#deleteConsumersByQuery) | **POST** /consumers/{spaceName}/delete | 
[**getConsumers**](ConsumersApi.md#getConsumers) | **GET** /consumers/{spaceName} | 
[**getConsumersByQuery**](ConsumersApi.md#getConsumersByQuery) | **POST** /consumers/{spaceName}/query | 
[**updateConsumers**](ConsumersApi.md#updateConsumers) | **PUT** /consumers/{spaceName} | NOT AVAILABLE IN CURRENT RELEASE
[**updateConsumersState**](ConsumersApi.md#updateConsumersState) | **POST** /consumers/{spaceName}/state | 



## createConsumers

> ApiResponse createConsumers(spaceName, body, opts)

NOT AVAILABLE IN CURRENT RELEASE

Create a new consumer in the CompetitionLabs system

### Example

```javascript
import CompetitionLabsApplicationServices from '@competitionlabs/javascript-sdk';
let defaultClient = CompetitionLabsApplicationServices.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CompetitionLabsApplicationServices.ConsumersApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let body = new CompetitionLabsApplicationServices.CreateConnectionRequest(); // CreateConnectionRequest | Create a consumer in the CompetitionLabs system
let opts = {
  'X_API_KEY': "X_API_KEY_example" // String | The admin API Key generated from CompetitionLabs back office
};
apiInstance.createConsumers(spaceName, body, opts, (error, data, response) => {
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
 **body** | [**CreateConnectionRequest**](CreateConnectionRequest.md)| Create a consumer in the CompetitionLabs system | 
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteConsumers

> ApiResponse deleteConsumers(spaceName, opts)



Delete the Consumers for a given identifier specified

### Example

```javascript
import CompetitionLabsApplicationServices from '@competitionlabs/javascript-sdk';
let defaultClient = CompetitionLabsApplicationServices.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CompetitionLabsApplicationServices.ConsumersApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'id': ["null"] // [String] | The unique identifiers of the resources
};
apiInstance.deleteConsumers(spaceName, opts, (error, data, response) => {
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


## deleteConsumersByQuery

> ApiResponse deleteConsumersByQuery(spaceName, opts)



Delete a Consumer or a list of Consumers from CompetitionLabs by unique Consumer ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import CompetitionLabsApplicationServices from '@competitionlabs/javascript-sdk';
let defaultClient = CompetitionLabsApplicationServices.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CompetitionLabsApplicationServices.ConsumersApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': null, // String | The admin API Key generated from CompetitionLabs back office
  'body': new CompetitionLabsApplicationServices.QueryRequest() // QueryRequest | Delete a Consumer or a list of Consumers from CompetitionLabs by unique Consumer ID's or any other POST body parameters using the POST method
};
apiInstance.deleteConsumersByQuery(spaceName, opts, (error, data, response) => {
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
 **X_API_KEY** | [**String**](.md)| The admin API Key generated from CompetitionLabs back office | [optional] 
 **body** | [**QueryRequest**](QueryRequest.md)| Delete a Consumer or a list of Consumers from CompetitionLabs by unique Consumer ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getConsumers

> ConnectionResponse getConsumers(spaceName, opts)



Return a list of Consumers

### Example

```javascript
import CompetitionLabsApplicationServices from '@competitionlabs/javascript-sdk';
let defaultClient = CompetitionLabsApplicationServices.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CompetitionLabsApplicationServices.ConsumersApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'id': ["null"], // [String] | The unique identifiers of the resources
  'limit': 20, // Number | Limit the returned total records found
  'skip': 0 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getConsumers(spaceName, opts, (error, data, response) => {
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

[**ConnectionResponse**](ConnectionResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConsumersByQuery

> ConnectionResponse getConsumersByQuery(spaceName, opts)



Retrieve a Consumer or a list of Consumers from CompetitionLabs by unique Consumer ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import CompetitionLabsApplicationServices from '@competitionlabs/javascript-sdk';
let defaultClient = CompetitionLabsApplicationServices.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CompetitionLabsApplicationServices.ConsumersApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'body': new CompetitionLabsApplicationServices.QueryRequest() // QueryRequest | Retrieve a Consumer or a list of Consumers from CompetitionLabs by unique Consumer ID's or any other Post body parameters using the POST method
};
apiInstance.getConsumersByQuery(spaceName, opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve a Consumer or a list of Consumers from CompetitionLabs by unique Consumer ID&#39;s or any other Post body parameters using the POST method | [optional] 

### Return type

[**ConnectionResponse**](ConnectionResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateConsumers

> ApiResponse updateConsumers(spaceName, body, opts)

NOT AVAILABLE IN CURRENT RELEASE

Update an existing Consumer in the CompetitionLabs system

### Example

```javascript
import CompetitionLabsApplicationServices from '@competitionlabs/javascript-sdk';
let defaultClient = CompetitionLabsApplicationServices.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CompetitionLabsApplicationServices.ConsumersApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let body = new CompetitionLabsApplicationServices.UpdateConnectionRequest(); // UpdateConnectionRequest | Update Consumer details in the CompetitionLabs system
let opts = {
  'X_API_KEY': "X_API_KEY_example" // String | The admin API Key generated from CompetitionLabs back office
};
apiInstance.updateConsumers(spaceName, body, opts, (error, data, response) => {
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
 **body** | [**UpdateConnectionRequest**](UpdateConnectionRequest.md)| Update Consumer details in the CompetitionLabs system | 
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateConsumersState

> ApiResponse updateConsumersState(spaceName, opts)



Update the state of a Consumer using the POST method

### Example

```javascript
import CompetitionLabsApplicationServices from '@competitionlabs/javascript-sdk';
let defaultClient = CompetitionLabsApplicationServices.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CompetitionLabsApplicationServices.ConsumersApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'body': [new CompetitionLabsApplicationServices.UpdateConsumerStateRequest()] // [UpdateConsumerStateRequest] | Update the state of a Consumer using the POST method
};
apiInstance.updateConsumersState(spaceName, opts, (error, data, response) => {
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
 **body** | [**[UpdateConsumerStateRequest]**](UpdateConsumerStateRequest.md)| Update the state of a Consumer using the POST method | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

