# CompetitionLabsApplicationServices.WebhooksApi

All URIs are relative to *https://api.competitionlabs.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWebhooks**](WebhooksApi.md#createWebhooks) | **POST** /webhooks/{spaceName} | 
[**deleteWebhooks**](WebhooksApi.md#deleteWebhooks) | **DELETE** /webhooks/{spaceName} | 
[**deleteWebhooksByQuery**](WebhooksApi.md#deleteWebhooksByQuery) | **POST** /webhooks/{spaceName}/delete | 
[**getWebhooks**](WebhooksApi.md#getWebhooks) | **GET** /webhooks/{spaceName} | 
[**getWebhooksByQuery**](WebhooksApi.md#getWebhooksByQuery) | **POST** /webhooks/{spaceName}/query | 
[**updateWebhooks**](WebhooksApi.md#updateWebhooks) | **PUT** /webhooks/{spaceName} | 
[**updateWebhooksState**](WebhooksApi.md#updateWebhooksState) | **POST** /webhooks/{spaceName}/state | NOT AVAILABLE IN CURRENT RELEASE



## createWebhooks

> ApiResponse createWebhooks(spaceName, body, opts)



Create a new Webhook in the CompetitionLabs system

### Example

```javascript
import CompetitionLabsApplicationServices from '@competitionlabs/javascript-sdk';
let defaultClient = CompetitionLabsApplicationServices.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CompetitionLabsApplicationServices.WebhooksApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let body = new CompetitionLabsApplicationServices.CreateWebhookRequest(); // CreateWebhookRequest | Create a Webhook in the CompetitionLabs system
let opts = {
  'X_API_KEY': "X_API_KEY_example" // String | The admin API Key generated from CompetitionLabs back office
};
apiInstance.createWebhooks(spaceName, body, opts, (error, data, response) => {
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
 **body** | [**CreateWebhookRequest**](CreateWebhookRequest.md)| Create a Webhook in the CompetitionLabs system | 
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteWebhooks

> ApiResponse deleteWebhooks(spaceName, opts)



Delete the Webhooks for a given identifier specified

### Example

```javascript
import CompetitionLabsApplicationServices from '@competitionlabs/javascript-sdk';
let defaultClient = CompetitionLabsApplicationServices.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CompetitionLabsApplicationServices.WebhooksApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'id': ["null"] // [String] | The unique identifiers of the resources
};
apiInstance.deleteWebhooks(spaceName, opts, (error, data, response) => {
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


## deleteWebhooksByQuery

> ApiResponse deleteWebhooksByQuery(spaceName, opts)



Delete a Webhook or a list of Webhooks from CompetitionLabs by unique Webhook ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import CompetitionLabsApplicationServices from '@competitionlabs/javascript-sdk';
let defaultClient = CompetitionLabsApplicationServices.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CompetitionLabsApplicationServices.WebhooksApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'body': new CompetitionLabsApplicationServices.QueryRequest() // QueryRequest | Delete a Webhook or a list of Webhooks from CompetitionLabs by unique Webhook ID's or any other POST body parameters using the POST method
};
apiInstance.deleteWebhooksByQuery(spaceName, opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete a Webhook or a list of Webhooks from CompetitionLabs by unique Webhook ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getWebhooks

> WebhookResponse getWebhooks(spaceName, opts)



Returns a list of Webhooks. This assumes that webhooks have first been uploaded via a POST request or web console

### Example

```javascript
import CompetitionLabsApplicationServices from '@competitionlabs/javascript-sdk';
let defaultClient = CompetitionLabsApplicationServices.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CompetitionLabsApplicationServices.WebhooksApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'id': ["null"], // [String] | The unique identifiers of the resources
  'limit': 20, // Number | Limit the returned total records found
  'skip': 0 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getWebhooks(spaceName, opts, (error, data, response) => {
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

[**WebhookResponse**](WebhookResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebhooksByQuery

> WebhookResponse getWebhooksByQuery(spaceName, opts)



Retrieve a Webhook or a list of Webhooks from CompetitionLabs by unique Webhook ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import CompetitionLabsApplicationServices from '@competitionlabs/javascript-sdk';
let defaultClient = CompetitionLabsApplicationServices.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CompetitionLabsApplicationServices.WebhooksApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'body': new CompetitionLabsApplicationServices.QueryRequest() // QueryRequest | Retrieve a Webhook or a list of Webhooks from CompetitionLabs by unique Webhook ID's or any other Post body parameters using the POST method
};
apiInstance.getWebhooksByQuery(spaceName, opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve a Webhook or a list of Webhooks from CompetitionLabs by unique Webhook ID&#39;s or any other Post body parameters using the POST method | [optional] 

### Return type

[**WebhookResponse**](WebhookResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateWebhooks

> ApiResponse updateWebhooks(spaceName, body, opts)



Update an existing Webhook in the CompetitionLabs system

### Example

```javascript
import CompetitionLabsApplicationServices from '@competitionlabs/javascript-sdk';
let defaultClient = CompetitionLabsApplicationServices.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CompetitionLabsApplicationServices.WebhooksApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let body = new CompetitionLabsApplicationServices.UpdateWebhookRequest(); // UpdateWebhookRequest | Update Webhook details in the CompetitionLabs system
let opts = {
  'X_API_KEY': "X_API_KEY_example" // String | The admin API Key generated from CompetitionLabs back office
};
apiInstance.updateWebhooks(spaceName, body, opts, (error, data, response) => {
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
 **body** | [**UpdateWebhookRequest**](UpdateWebhookRequest.md)| Update Webhook details in the CompetitionLabs system | 
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateWebhooksState

> ApiResponse updateWebhooksState(spaceName, opts)

NOT AVAILABLE IN CURRENT RELEASE

Update the state of a Wbhook using the POST method

### Example

```javascript
import CompetitionLabsApplicationServices from '@competitionlabs/javascript-sdk';
let defaultClient = CompetitionLabsApplicationServices.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CompetitionLabsApplicationServices.WebhooksApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'body': new CompetitionLabsApplicationServices.CreateWebhookRequest() // CreateWebhookRequest | Update the state of a Webhook using the POST method
};
apiInstance.updateWebhooksState(spaceName, opts, (error, data, response) => {
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
 **body** | [**CreateWebhookRequest**](CreateWebhookRequest.md)| Update the state of a Webhook using the POST method | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

