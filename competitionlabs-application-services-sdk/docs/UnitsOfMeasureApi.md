# CompetitionLabsApplicationServices.UnitsOfMeasureApi

All URIs are relative to *https://api.competitionlabs.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUnitsOfMeasure**](UnitsOfMeasureApi.md#createUnitsOfMeasure) | **POST** /units-of-measure | 
[**deleteUnitsOfMeasure**](UnitsOfMeasureApi.md#deleteUnitsOfMeasure) | **DELETE** /units-of-measure | 
[**deleteUnitsOfMeasureByQuery**](UnitsOfMeasureApi.md#deleteUnitsOfMeasureByQuery) | **POST** /units-of-measure/delete | 
[**getUnitsOfMeasure**](UnitsOfMeasureApi.md#getUnitsOfMeasure) | **GET** /units-of-measure | 
[**getUnitsOfMeasureByQuery**](UnitsOfMeasureApi.md#getUnitsOfMeasureByQuery) | **POST** /units-of-measure/query | 
[**updateUnitsOfMeasure**](UnitsOfMeasureApi.md#updateUnitsOfMeasure) | **PUT** /units-of-measure | 



## createUnitsOfMeasure

> ApiResponse createUnitsOfMeasure(body, opts)



Create a new Unit of measure in the CompetitionLabs database

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

let apiInstance = new CompetitionLabsApplicationServices.UnitsOfMeasureApi();
let body = [new CompetitionLabsApplicationServices.CreateUnitOfMeasureRequest()]; // [CreateUnitOfMeasureRequest] | Create a Unit of measure in the CompetitionLabs database
let opts = {
  'X_API_KEY': "X_API_KEY_example" // String | The admin API Key generated from CompetitionLabs back office
};
apiInstance.createUnitsOfMeasure(body, opts, (error, data, response) => {
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
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[AdminApiKey](../README.md#AdminApiKey), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteUnitsOfMeasure

> ApiResponse deleteUnitsOfMeasure(opts)



Delete the Unit of measured for a given identifier specified

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

let apiInstance = new CompetitionLabsApplicationServices.UnitsOfMeasureApi();
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
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
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 
 **id** | [**[String]**](String.md)| The unique identifiers of the resources | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[AdminApiKey](../README.md#AdminApiKey), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteUnitsOfMeasureByQuery

> ApiResponse deleteUnitsOfMeasureByQuery(opts)



Delete Units of measure from CompetitionLabs database by unique Unit of measure ID&#39;s or any other POST body parameters using the POST method

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

let apiInstance = new CompetitionLabsApplicationServices.UnitsOfMeasureApi();
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'body': new CompetitionLabsApplicationServices.QueryRequest() // QueryRequest | Delete Units of measure from CompetitionLabs database by unique Unit of measure ID's or any other POST body parameters using the POST method
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
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 
 **body** | [**QueryRequest**](QueryRequest.md)| Delete Units of measure from CompetitionLabs database by unique Unit of measure ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[AdminApiKey](../README.md#AdminApiKey), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getUnitsOfMeasure

> UnitOfMeasureResponse getUnitsOfMeasure(opts)



Returns a list of Units of measure. This assumes that units of measure have first been uploaded via a POST request or web console

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

let apiInstance = new CompetitionLabsApplicationServices.UnitsOfMeasureApi();
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
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
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 
 **id** | [**[String]**](String.md)| The unique identifiers of the resources | [optional] 
 **limit** | **Number**| Limit the returned total records found | [optional] 
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] 

### Return type

[**UnitOfMeasureResponse**](UnitOfMeasureResponse.md)

### Authorization

[AdminApiKey](../README.md#AdminApiKey), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUnitsOfMeasureByQuery

> UnitOfMeasureResponse getUnitsOfMeasureByQuery(opts)



Retrieve Units of measure from CompetitionLabs database by unique Unit of measure ID&#39;s or any other POST body parameters using the POST method

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

let apiInstance = new CompetitionLabsApplicationServices.UnitsOfMeasureApi();
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'body': new CompetitionLabsApplicationServices.QueryRequest() // QueryRequest | Retrieve Units of measure from CompetitionLabs database by unique Unit of measure ID's or any other POST body parameters using the POST method
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
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Units of measure from CompetitionLabs database by unique Unit of measure ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**UnitOfMeasureResponse**](UnitOfMeasureResponse.md)

### Authorization

[AdminApiKey](../README.md#AdminApiKey), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateUnitsOfMeasure

> ApiResponse updateUnitsOfMeasure(body, opts)



Update an existing Unit of measure in the CompetitionLabs database

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

let apiInstance = new CompetitionLabsApplicationServices.UnitsOfMeasureApi();
let body = [new CompetitionLabsApplicationServices.UpdateUnitOfMeasureRequest()]; // [UpdateUnitOfMeasureRequest] | Update a Unit of measure in the CompetitionLabs database.
let opts = {
  'X_API_KEY': "X_API_KEY_example" // String | The admin API Key generated from CompetitionLabs back office
};
apiInstance.updateUnitsOfMeasure(body, opts, (error, data, response) => {
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
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[AdminApiKey](../README.md#AdminApiKey), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

