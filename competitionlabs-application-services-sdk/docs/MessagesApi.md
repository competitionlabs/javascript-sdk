# CompetitionLabsAdminServices.MessagesApi

All URIs are relative to *https://api.competitionlabs.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMessages**](MessagesApi.md#createMessages) | **POST** /messages | NOT AVAILABLE IN CURRENT RELEASE
[**deleteMessages**](MessagesApi.md#deleteMessages) | **DELETE** /messages | NOT AVAILABLE IN CURRENT RELEASE
[**deleteMessagesByQuery**](MessagesApi.md#deleteMessagesByQuery) | **POST** /messages/delete | NOT AVAILABLE IN CURRENT RELEASE
[**getMessages**](MessagesApi.md#getMessages) | **GET** /messages | NOT AVAILABLE IN CURRENT RELEASE
[**getMessagesByQuery**](MessagesApi.md#getMessagesByQuery) | **POST** /messages/query | NOT AVAILABLE IN CURRENT RELEASE
[**testMessagesById**](MessagesApi.md#testMessagesById) | **POST** /messages/{id}/test | NOT AVAILABLE IN CURRENT RELEASE
[**updateMessages**](MessagesApi.md#updateMessages) | **PUT** /messages | NOT AVAILABLE IN CURRENT RELEASE
[**updateMessagesStatus**](MessagesApi.md#updateMessagesStatus) | **PUT** /messages/state | NOT AVAILABLE IN CURRENT RELEASE



## createMessages

> ApiResponse createMessages(body)

NOT AVAILABLE IN CURRENT RELEASE

Create Messages in the CompetitionLabs database

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.MessagesApi();
let body = [new CompetitionLabsAdminServices.CreateMessageRequest()]; // [CreateMessageRequest] | Create Messages in the CompetitionLabs database
apiInstance.createMessages(body, (error, data, response) => {
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
 **body** | [**[CreateMessageRequest]**](CreateMessageRequest.md)| Create Messages in the CompetitionLabs database | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteMessages

> ApiResponse deleteMessages(opts)

NOT AVAILABLE IN CURRENT RELEASE

Delete Messages for a given identifier specified

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.MessagesApi();
let opts = {
  'id': ["null"] // [String] | The unique identifiers of the resources
};
apiInstance.deleteMessages(opts, (error, data, response) => {
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


## deleteMessagesByQuery

> ApiResponse deleteMessagesByQuery(opts)

NOT AVAILABLE IN CURRENT RELEASE

Delete Messages from CompetitionLabs database by unique message ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.MessagesApi();
let opts = {
  'body': new CompetitionLabsAdminServices.QueryRequest() // QueryRequest | Delete Messages from CompetitionLabs database by unique message ID's or any other POST body parameters using the POST method
};
apiInstance.deleteMessagesByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete Messages from CompetitionLabs database by unique message ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getMessages

> MessageResponse getMessages(opts)

NOT AVAILABLE IN CURRENT RELEASE

Returns a list of Messages. This assumes that Messages have first been uploaded via a POST request or web console

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.MessagesApi();
let opts = {
  'id': ["null"], // [String] | The unique identifiers of the resources
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getMessages(opts, (error, data, response) => {
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

[**MessageResponse**](MessageResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMessagesByQuery

> MessageResponse getMessagesByQuery(opts)

NOT AVAILABLE IN CURRENT RELEASE

Retrieve Messages from CompetitionLabs database by unique message ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.MessagesApi();
let opts = {
  'body': new CompetitionLabsAdminServices.QueryRequest() // QueryRequest | Retrieve Messages from CompetitionLabs database by unique message ID's or any other POST body parameters using the POST method
};
apiInstance.getMessagesByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Messages from CompetitionLabs database by unique message ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**MessageResponse**](MessageResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## testMessagesById

> ApiResponse testMessagesById(id, body)

NOT AVAILABLE IN CURRENT RELEASE

Test Messages for a given Message identifier specified

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.MessagesApi();
let id = "id_example"; // String | Unique identifier of the resource
let body = new CompetitionLabsAdminServices.TestMessageRequest(); // TestMessageRequest | Send test Messages to Members by a Message identifier provided
apiInstance.testMessagesById(id, body, (error, data, response) => {
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
 **body** | [**TestMessageRequest**](TestMessageRequest.md)| Send test Messages to Members by a Message identifier provided | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateMessages

> ApiResponse updateMessages(body)

NOT AVAILABLE IN CURRENT RELEASE

Updates a Message by identifier provided. This assumes that Messages have first been uploaded via a POST request or web console

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.MessagesApi();
let body = new CompetitionLabsAdminServices.UpdateMessageRequest(); // UpdateMessageRequest | Update a Message by a Message identifier provided
apiInstance.updateMessages(body, (error, data, response) => {
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
 **body** | [**UpdateMessageRequest**](UpdateMessageRequest.md)| Update a Message by a Message identifier provided | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateMessagesStatus

> ApiResponse updateMessagesStatus(body)

NOT AVAILABLE IN CURRENT RELEASE

Update the Message status

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.MessagesApi();
let body = [new CompetitionLabsAdminServices.UpdateMessageStatusRequest()]; // [UpdateMessageStatusRequest] | Update the Message status in the Competitionlabs database
apiInstance.updateMessagesStatus(body, (error, data, response) => {
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
 **body** | [**[UpdateMessageStatusRequest]**](UpdateMessageStatusRequest.md)| Update the Message status in the Competitionlabs database | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

