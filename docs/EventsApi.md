# CompetitionLabsApplicationServices.EventsApi

All URIs are relative to *https://api.competitionlabs.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEvents**](EventsApi.md#createEvents) | **POST** /events/{spaceName} | NOT AVAILABLE IN CURRENT RELEASE
[**getEventsByQuery**](EventsApi.md#getEventsByQuery) | **POST** /events/{spaceName}/query | NOT AVAILABLE IN CURRENT RELEASE



## createEvents

> ApiResponse createEvents(spaceName, opts)

NOT AVAILABLE IN CURRENT RELEASE

Create an Event

### Example

```javascript
import CompetitionLabsApplicationServices from '@competitionlabs/javascript-sdk';
let defaultClient = CompetitionLabsApplicationServices.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CompetitionLabsApplicationServices.EventsApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'body': new CompetitionLabsApplicationServices.CreateEventRequest() // CreateEventRequest | Create an Event
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
 **body** | [**CreateEventRequest**](CreateEventRequest.md)| Create an Event | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getEventsByQuery

> EventResponse getEventsByQuery(spaceName, opts)

NOT AVAILABLE IN CURRENT RELEASE

Retrieve an Event or a list of Events from CompetitionLabs by unique Event ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import CompetitionLabsApplicationServices from '@competitionlabs/javascript-sdk';
let defaultClient = CompetitionLabsApplicationServices.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CompetitionLabsApplicationServices.EventsApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'body': new CompetitionLabsApplicationServices.QueryRequest() // QueryRequest | Retrieve an Event or a list of Events from CompetitionLabs by unique Event ID's or any other POST body parameters using the POST method
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

