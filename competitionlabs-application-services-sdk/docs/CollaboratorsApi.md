# CompetitionLabsAdminServices.CollaboratorsApi

All URIs are relative to *https://api.competitionlabs.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCollaborators**](CollaboratorsApi.md#createCollaborators) | **POST** /collaborators | 
[**deleteCollaboratorsById**](CollaboratorsApi.md#deleteCollaboratorsById) | **DELETE** /collaborators/{id} | 
[**getCollaborators**](CollaboratorsApi.md#getCollaborators) | **GET** /collaborators | 
[**getCollaboratorsById**](CollaboratorsApi.md#getCollaboratorsById) | **GET** /collaborators/{id} | 
[**updateCollaborators**](CollaboratorsApi.md#updateCollaborators) | **PUT** /collaborators | NOT AVAILABLE IN CURRENT RELEASE



## createCollaborators

> ApiResponse createCollaborators(body)



Create a new Collaborator in the CompetitionLabs

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.CollaboratorsApi();
let body = new CompetitionLabsAdminServices.CreateCollaboratorRequest(); // CreateCollaboratorRequest | Create a Collaborator in the CompetitionLabs system
apiInstance.createCollaborators(body, (error, data, response) => {
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
 **body** | [**CreateCollaboratorRequest**](CreateCollaboratorRequest.md)| Create a Collaborator in the CompetitionLabs system | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCollaboratorsById

> ApiResponse deleteCollaboratorsById(id)



Delete the Collaborator for a given identifier specified

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.CollaboratorsApi();
let id = "id_example"; // String | Unique identifier of the resource
apiInstance.deleteCollaboratorsById(id, (error, data, response) => {
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


## getCollaborators

> CollaboratorResponse getCollaborators(opts)



Returns a list of Collaborators. This assumes that Users have first been uploaded via a POST request or web console

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.CollaboratorsApi();
let opts = {
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getCollaborators(opts, (error, data, response) => {
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

[**CollaboratorResponse**](CollaboratorResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCollaboratorsById

> CollaboratorResponse getCollaboratorsById(id)



Returns a Collaborator by identifier requested. This assumes that Users have first been uploaded via a POST request or web console

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.CollaboratorsApi();
let id = "id_example"; // String | Unique identifier of the resource
apiInstance.getCollaboratorsById(id, (error, data, response) => {
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

[**CollaboratorResponse**](CollaboratorResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateCollaborators

> ApiResponse updateCollaborators(body)

NOT AVAILABLE IN CURRENT RELEASE

Update an existing Collaborator in the CompetitionLabs system

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.CollaboratorsApi();
let body = new CompetitionLabsAdminServices.UpdateCollaboratorRequest(); // UpdateCollaboratorRequest | Update a Collaborator in the CompetitionLabs system. * Any Put body Parameters that are excluded in the Request body field will be considered as empty and updated with an empty field
apiInstance.updateCollaborators(body, (error, data, response) => {
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
 **body** | [**UpdateCollaboratorRequest**](UpdateCollaboratorRequest.md)| Update a Collaborator in the CompetitionLabs system. * Any Put body Parameters that are excluded in the Request body field will be considered as empty and updated with an empty field | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

