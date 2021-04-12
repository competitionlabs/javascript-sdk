# CompetitionLabsApplicationServices.UsersApi

All URIs are relative to *https://api.competitionlabs.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](UsersApi.md#createUser) | **POST** /users | 
[**deleteUserForSpace**](UsersApi.md#deleteUserForSpace) | **DELETE** /users/{id} | 
[**getUserForSpace**](UsersApi.md#getUserForSpace) | **GET** /users/{id} | 
[**getUsersForSpace**](UsersApi.md#getUsersForSpace) | **GET** /users | 
[**updateUserForSpace**](UsersApi.md#updateUserForSpace) | **PUT** /users | 



## createUser

> ApiResponse createUser(body, opts)



Create a new user in the CompetitionLabs system

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

let apiInstance = new CompetitionLabsApplicationServices.UsersApi();
let body = new CompetitionLabsApplicationServices.CreateUserRequest(); // CreateUserRequest | Create a User in the CompetitionLabs system
let opts = {
  'X_API_KEY': "X_API_KEY_example" // String | The admin API Key generated from CompetitionLabs back office
};
apiInstance.createUser(body, opts, (error, data, response) => {
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
 **body** | [**CreateUserRequest**](CreateUserRequest.md)| Create a User in the CompetitionLabs system | 
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[AdminApiKey](../README.md#AdminApiKey), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteUserForSpace

> ApiResponse deleteUserForSpace(id, opts)



Delete a User from the CompetitionLabs

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

let apiInstance = new CompetitionLabsApplicationServices.UsersApi();
let id = "id_example"; // String | Unique identifier of the resource
let opts = {
  'X_API_KEY': "X_API_KEY_example" // String | The admin API Key generated from CompetitionLabs back office
};
apiInstance.deleteUserForSpace(id, opts, (error, data, response) => {
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
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[AdminApiKey](../README.md#AdminApiKey), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserForSpace

> UserResponse getUserForSpace(id, opts)



Get a list of user profiles owned by this space. This assumes that a user has first been uploaded via a POST request or web console

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

let apiInstance = new CompetitionLabsApplicationServices.UsersApi();
let id = "id_example"; // String | Unique identifier of the resource
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'includeSpaces': true // Boolean | Include Spaces
};
apiInstance.getUserForSpace(id, opts, (error, data, response) => {
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
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 
 **includeSpaces** | **Boolean**| Include Spaces | [optional] 

### Return type

[**UserResponse**](UserResponse.md)

### Authorization

[AdminApiKey](../README.md#AdminApiKey), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUsersForSpace

> UserResponse getUsersForSpace(opts)



Get a list of user profiles owned by this space. This assumes that a user has first been uploaded via a POST request or web console

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

let apiInstance = new CompetitionLabsApplicationServices.UsersApi();
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'includeSpaces': true // Boolean | Include Spaces
};
apiInstance.getUsersForSpace(opts, (error, data, response) => {
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
 **includeSpaces** | **Boolean**| Include Spaces | [optional] 

### Return type

[**UserResponse**](UserResponse.md)

### Authorization

[AdminApiKey](../README.md#AdminApiKey), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateUserForSpace

> ApiResponse updateUserForSpace(body, opts)



Update an existing User in the CompetitionLabs system

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

let apiInstance = new CompetitionLabsApplicationServices.UsersApi();
let body = new CompetitionLabsApplicationServices.UpdateUserRequest(); // UpdateUserRequest | Update a User in the CompetitionLabs system. * Any Put body Parameters that are excluded in the Request body field will be considered as empty and updated with an empty field
let opts = {
  'X_API_KEY': "X_API_KEY_example" // String | The admin API Key generated from CompetitionLabs back office
};
apiInstance.updateUserForSpace(body, opts, (error, data, response) => {
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
 **body** | [**UpdateUserRequest**](UpdateUserRequest.md)| Update a User in the CompetitionLabs system. * Any Put body Parameters that are excluded in the Request body field will be considered as empty and updated with an empty field | 
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[AdminApiKey](../README.md#AdminApiKey), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

