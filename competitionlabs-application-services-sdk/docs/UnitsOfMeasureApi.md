# CompetitionLabsAdminServices.UnitsOfMeasureApi

All URIs are relative to *https://api.competitionlabs.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUnitsOfMeasure**](UnitsOfMeasureApi.md#createUnitsOfMeasure) | **POST** /units-of-measure | 
[**deleteCollaboratorsByQuery**](UnitsOfMeasureApi.md#deleteCollaboratorsByQuery) | **POST** /collaborators/delete/ | 
[**deleteUnitsOfMeasure**](UnitsOfMeasureApi.md#deleteUnitsOfMeasure) | **DELETE** /units-of-measure | 
[**deleteUnitsOfMeasureByQuery**](UnitsOfMeasureApi.md#deleteUnitsOfMeasureByQuery) | **POST** /units-of-measure/delete | 
[**getCollaboratorsByQuery**](UnitsOfMeasureApi.md#getCollaboratorsByQuery) | **POST** /collaborators/query/ | 
[**getUnitsOfMeasure**](UnitsOfMeasureApi.md#getUnitsOfMeasure) | **GET** /units-of-measure | 
[**getUnitsOfMeasureByQuery**](UnitsOfMeasureApi.md#getUnitsOfMeasureByQuery) | **POST** /units-of-measure/query | 
[**updateUnitsOfMeasure**](UnitsOfMeasureApi.md#updateUnitsOfMeasure) | **PUT** /units-of-measure | 



## createUnitsOfMeasure

> ApiResponse createUnitsOfMeasure(body)



Create a new Unit of measure in the CompetitionLabs database

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.UnitsOfMeasureApi();
let body = [new CompetitionLabsAdminServices.CreateUnitOfMeasureRequest()]; // [CreateUnitOfMeasureRequest] | Create a Unit of measure in the CompetitionLabs database
apiInstance.createUnitsOfMeasure(body, (error, data, response) => {
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
 **body** | [**[CreateUnitOfMeasureRequest]**](CreateUnitOfMeasureRequest.md)| Create a Unit of measure in the CompetitionLabs database | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCollaboratorsByQuery

> ApiResponse deleteCollaboratorsByQuery(opts)



Remove collaborators from account

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.UnitsOfMeasureApi();
let opts = {
  'body': new CompetitionLabsAdminServices.QueryRequest() // QueryRequest | Remove collaborators from account
};
apiInstance.deleteCollaboratorsByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Remove collaborators from account | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteUnitsOfMeasure

> ApiResponse deleteUnitsOfMeasure(opts)



Delete the Unit of measured for a given identifier specified

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.UnitsOfMeasureApi();
let opts = {
  'id': ["null"] // [String] | The unique identifiers of the resources
};
apiInstance.deleteUnitsOfMeasure(opts, (error, data, response) => {
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


## deleteUnitsOfMeasureByQuery

> ApiResponse deleteUnitsOfMeasureByQuery(opts)



Delete Units of measure from CompetitionLabs database by unique Unit of measure ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.UnitsOfMeasureApi();
let opts = {
  'body': new CompetitionLabsAdminServices.QueryRequest() // QueryRequest | Delete Units of measure from CompetitionLabs database by unique Unit of measure ID's or any other POST body parameters using the POST method
};
apiInstance.deleteUnitsOfMeasureByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete Units of measure from CompetitionLabs database by unique Unit of measure ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getCollaboratorsByQuery

> CollaboratorResponse getCollaboratorsByQuery(opts)



Retrieve collaborators for the account

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.UnitsOfMeasureApi();
let opts = {
  'body': new CompetitionLabsAdminServices.QueryRequest() // QueryRequest | Retrieve collaborators for the account
};
apiInstance.getCollaboratorsByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve collaborators for the account | [optional] 

### Return type

[**CollaboratorResponse**](CollaboratorResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getUnitsOfMeasure

> UnitOfMeasureResponse getUnitsOfMeasure(opts)



Returns a list of Units of measure. This assumes that units of measure have first been uploaded via a POST request or web console

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.UnitsOfMeasureApi();
let opts = {
  'id': ["null"], // [String] | The unique identifiers of the resources
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getUnitsOfMeasure(opts, (error, data, response) => {
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

[**UnitOfMeasureResponse**](UnitOfMeasureResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUnitsOfMeasureByQuery

> UnitOfMeasureResponse getUnitsOfMeasureByQuery(opts)



Retrieve Units of measure from CompetitionLabs database by unique Unit of measure ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.UnitsOfMeasureApi();
let opts = {
  'body': new CompetitionLabsAdminServices.QueryRequest() // QueryRequest | Retrieve Units of measure from CompetitionLabs database by unique Unit of measure ID's or any other POST body parameters using the POST method
};
apiInstance.getUnitsOfMeasureByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Units of measure from CompetitionLabs database by unique Unit of measure ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**UnitOfMeasureResponse**](UnitOfMeasureResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateUnitsOfMeasure

> ApiResponse updateUnitsOfMeasure(body)



Update an existing Unit of measure in the CompetitionLabs database

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.UnitsOfMeasureApi();
let body = [new CompetitionLabsAdminServices.UpdateUnitOfMeasureRequest()]; // [UpdateUnitOfMeasureRequest] | Update a Unit of measure in the CompetitionLabs database.
apiInstance.updateUnitsOfMeasure(body, (error, data, response) => {
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
 **body** | [**[UpdateUnitOfMeasureRequest]**](UpdateUnitOfMeasureRequest.md)| Update a Unit of measure in the CompetitionLabs database. | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

