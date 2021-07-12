# CompetitionLabsAdminServices.SpacesApi

All URIs are relative to *https://api.competitionlabs.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSpace**](SpacesApi.md#createSpace) | **POST** /spaces | 
[**deleteSpaces**](SpacesApi.md#deleteSpaces) | **DELETE** /spaces/{spaceName} | NOT AVAILABLE IN CURRENT RELEASE
[**getSpaceInfromation**](SpacesApi.md#getSpaceInfromation) | **GET** /spaces | 
[**getSpacesByName**](SpacesApi.md#getSpacesByName) | **GET** /spaces/{spaceName} | 
[**updateSpace**](SpacesApi.md#updateSpace) | **PUT** /spaces | 



## createSpace

> ApiResponse createSpace(body)



Create a new Space for the user in the CompetitionLabs

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.SpacesApi();
let body = [new CompetitionLabsAdminServices.CreateSpaceRequest()]; // [CreateSpaceRequest] | 
apiInstance.createSpace(body, (error, data, response) => {
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
 **body** | [**[CreateSpaceRequest]**](CreateSpaceRequest.md)|  | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteSpaces

> ApiResponse deleteSpaces(spaceName)

NOT AVAILABLE IN CURRENT RELEASE

Delete the Space for the given Space Name provided

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.SpacesApi();
let spaceName = "spaceName_example"; // String | This is the space name which will be deleted
apiInstance.deleteSpaces(spaceName, (error, data, response) => {
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
 **spaceName** | **String**| This is the space name which will be deleted | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSpaceInfromation

> SpaceResponse getSpaceInfromation(opts)



Returns a list of Spaces for the current session

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.SpacesApi();
let opts = {
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getSpaceInfromation(opts, (error, data, response) => {
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

### Return type

[**SpaceResponse**](SpaceResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSpacesByName

> SpaceResponse getSpacesByName(spaceName, opts)



Return a list of sub-spaces for the given Space Name provided

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.SpacesApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getSpacesByName(spaceName, opts, (error, data, response) => {
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
 **limit** | **Number**| Limit the returned total records found | [optional] 
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] 

### Return type

[**SpaceResponse**](SpaceResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateSpace

> ApiResponse updateSpace(body)



Update a  Space for the user in the CompetitionLabs

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.SpacesApi();
let body = new CompetitionLabsAdminServices.CreateSpaceRequest(); // CreateSpaceRequest | Create a Space for the user in the CompetitionLabs
apiInstance.updateSpace(body, (error, data, response) => {
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
 **body** | [**CreateSpaceRequest**](CreateSpaceRequest.md)| Create a Space for the user in the CompetitionLabs | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

