# CompetitionLabsAdminServices.RewardTypesApi

All URIs are relative to *https://api.competitionlabs.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRewardTypes**](RewardTypesApi.md#createRewardTypes) | **POST** /reward-types | 
[**deleteRewardTypes**](RewardTypesApi.md#deleteRewardTypes) | **DELETE** /reward-types | 
[**deleteRewardTypesByQuery**](RewardTypesApi.md#deleteRewardTypesByQuery) | **POST** /reward-types/delete | 
[**getRewardTypes**](RewardTypesApi.md#getRewardTypes) | **GET** /reward-types | 
[**getRewardTypesByQuery**](RewardTypesApi.md#getRewardTypesByQuery) | **POST** /reward-types/query | 
[**updateRewardTypes**](RewardTypesApi.md#updateRewardTypes) | **PUT** /reward-types | 



## createRewardTypes

> ApiResponse createRewardTypes(body)



Create new Reward types in the CompetitionLabs database

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.RewardTypesApi();
let body = [new CompetitionLabsAdminServices.CreateRewardTypeRequest()]; // [CreateRewardTypeRequest] | Create Reward Types in the CompetitionLabs database
apiInstance.createRewardTypes(body, (error, data, response) => {
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
 **body** | [**[CreateRewardTypeRequest]**](CreateRewardTypeRequest.md)| Create Reward Types in the CompetitionLabs database | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteRewardTypes

> ApiResponse deleteRewardTypes(opts)



Delete Reward types for a given identifier specified

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.RewardTypesApi();
let opts = {
  'id': ["null"] // [String] | The unique identifiers of the resources
};
apiInstance.deleteRewardTypes(opts, (error, data, response) => {
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


## deleteRewardTypesByQuery

> ApiResponse deleteRewardTypesByQuery(opts)



Delete Reward types from CompetitionLabs database by unique Reward types ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.RewardTypesApi();
let opts = {
  'body': new CompetitionLabsAdminServices.QueryRequest() // QueryRequest | Delete Reward types from CompetitionLabs database by unique Reward types ID's or any other POST body parameters using the POST method
};
apiInstance.deleteRewardTypesByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete Reward types from CompetitionLabs database by unique Reward types ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getRewardTypes

> RewardTypeResponse getRewardTypes(opts)



Returns a list of Reward Types. This assumes that reward types have first been uploaded via a POST request or web console

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.RewardTypesApi();
let opts = {
  'id': ["null"], // [String] | The unique identifiers of the resources
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getRewardTypes(opts, (error, data, response) => {
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

[**RewardTypeResponse**](RewardTypeResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRewardTypesByQuery

> RewardTypeResponse getRewardTypesByQuery(opts)



Retrieve Reward types from CompetitionLabs database by unique Reward type ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.RewardTypesApi();
let opts = {
  'body': new CompetitionLabsAdminServices.QueryRequest() // QueryRequest | Retrieve Reward types from CompetitionLabs database by unique Reward type ID's or any other POST body parameters using the POST method
};
apiInstance.getRewardTypesByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Reward types from CompetitionLabs database by unique Reward type ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**RewardTypeResponse**](RewardTypeResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateRewardTypes

> ApiResponse updateRewardTypes(body)



Update existing Reward types in the CompetitionLabs database

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.RewardTypesApi();
let body = [new CompetitionLabsAdminServices.UpdateRewardTypeRequest()]; // [UpdateRewardTypeRequest] | Update Reward types in the CompetitionLabs database.
apiInstance.updateRewardTypes(body, (error, data, response) => {
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
 **body** | [**[UpdateRewardTypeRequest]**](UpdateRewardTypeRequest.md)| Update Reward types in the CompetitionLabs database. | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

