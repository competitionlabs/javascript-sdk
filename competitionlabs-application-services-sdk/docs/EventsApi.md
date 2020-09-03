# @CompetitionlabsApplicationServicesSdk.EventsApi

All URIs are relative to *https://api.competitionlabs.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEvents**](EventsApi.md#createEvents) | **POST** /events/{spaceName} | NOT AVAILABLE IN CURRENT RELEASE
[**getEvents**](EventsApi.md#getEvents) | **GET** /events/{spaceName} | NOT AVAILABLE IN CURRENT RELEASE
[**getEventsByQuery**](EventsApi.md#getEventsByQuery) | **POST** /events/{spaceName}/query | NOT AVAILABLE IN CURRENT RELEASE



## createEvents

> ApiResponse createEvents(spaceName, opts)

NOT AVAILABLE IN CURRENT RELEASE

Create an Event

### Example

```javascript
import @CompetitionlabsApplicationServicesSdk from '@competitionlabs/application-services-sdk';
let defaultClient = @CompetitionlabsApplicationServicesSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsApplicationServicesSdk.EventsApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'body': [new @CompetitionlabsApplicationServicesSdk.CreateEventRequest()] // [CreateEventRequest] | Create an Event
};
apiInstance.createEvents(spaceName, opts, (error, data, response) => {
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
 **body** | [**[CreateEventRequest]**](CreateEventRequest.md)| Create an Event | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getEvents

> EventResponse getEvents(spaceName, opts)

NOT AVAILABLE IN CURRENT RELEASE

Retrieve an Event or a list of Events from CompetitionLabs by unique Event ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import @CompetitionlabsApplicationServicesSdk from '@competitionlabs/application-services-sdk';
let defaultClient = @CompetitionlabsApplicationServicesSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsApplicationServicesSdk.EventsApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'id': ["null"], // [String] | The unique identifiers of the resources
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getEvents(spaceName, opts, (error, data, response) => {
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
 **limit** | **Number**| Limit the returned total records found | [optional] 
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] 

### Return type

[**EventResponse**](EventResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEventsByQuery

> EventResponse getEventsByQuery(spaceName, opts)

NOT AVAILABLE IN CURRENT RELEASE

Retrieve an Event or a list of Events from CompetitionLabs by unique Event ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import @CompetitionlabsApplicationServicesSdk from '@competitionlabs/application-services-sdk';
let defaultClient = @CompetitionlabsApplicationServicesSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsApplicationServicesSdk.EventsApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'body': new @CompetitionlabsApplicationServicesSdk.QueryRequest() // QueryRequest | Retrieve an Event or a list of Events from CompetitionLabs by unique Event ID's or any other POST body parameters using the POST method
};
apiInstance.getEventsByQuery(spaceName, opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve an Event or a list of Events from CompetitionLabs by unique Event ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**EventResponse**](EventResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

