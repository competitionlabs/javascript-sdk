# CompetitionLabsAdminServices.CustomFieldsApi

All URIs are relative to *https://api.competitionlabs.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCustomFields**](CustomFieldsApi.md#createCustomFields) | **POST** /custom-fields | 
[**deleteCustomFields**](CustomFieldsApi.md#deleteCustomFields) | **DELETE** /custom-fields | 
[**deleteCustomFieldsByQuery**](CustomFieldsApi.md#deleteCustomFieldsByQuery) | **POST** /custom-fields/delete | 
[**getCustomFields**](CustomFieldsApi.md#getCustomFields) | **GET** /custom-fields | 
[**getCustomFieldsByQuery**](CustomFieldsApi.md#getCustomFieldsByQuery) | **POST** /custom-fields/query | 
[**updateCustomFields**](CustomFieldsApi.md#updateCustomFields) | **PUT** /custom-fields | 



## createCustomFields

> ApiResponse createCustomFields(body)



Create new Custom fields in the CompetitionLabs database

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.CustomFieldsApi();
let body = [new CompetitionLabsAdminServices.CreateCustomFieldRequest()]; // [CreateCustomFieldRequest] | Create Custom fields in the CompetitionLabs database
apiInstance.createCustomFields(body, (error, data, response) => {
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
 **body** | [**[CreateCustomFieldRequest]**](CreateCustomFieldRequest.md)| Create Custom fields in the CompetitionLabs database | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCustomFields

> ApiResponse deleteCustomFields(opts)



Delete the Custom fields for a given identifier specified

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.CustomFieldsApi();
let opts = {
  'id': ["null"] // [String] | The unique identifiers of the resources
};
apiInstance.deleteCustomFields(opts, (error, data, response) => {
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


## deleteCustomFieldsByQuery

> ApiResponse deleteCustomFieldsByQuery(opts)



Delete Custom fields from CompetitionLabs database by unique Custom field ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.CustomFieldsApi();
let opts = {
  'body': new CompetitionLabsAdminServices.QueryRequest() // QueryRequest | Delete Custom fields from CompetitionLabs database by unique Custom field ID's or any other POST body parameters using the POST method
};
apiInstance.deleteCustomFieldsByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete Custom fields from CompetitionLabs database by unique Custom field ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getCustomFields

> CustomFieldResponse getCustomFields(opts)



Returns a list of Custom fields. This assumes that custom fields have first been uploaded via a POST request or web console

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.CustomFieldsApi();
let opts = {
  'id': ["null"], // [String] | The unique identifiers of the resources
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getCustomFields(opts, (error, data, response) => {
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

[**CustomFieldResponse**](CustomFieldResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomFieldsByQuery

> CustomFieldResponse getCustomFieldsByQuery(opts)



Retrieve Custom fields from CompetitionLabs database by unique Custom field ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.CustomFieldsApi();
let opts = {
  'body': new CompetitionLabsAdminServices.QueryRequest() // QueryRequest | Retrieve Custom fields from CompetitionLabs database by unique Custom field ID's or any other Post body parameters using the POST method
};
apiInstance.getCustomFieldsByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Custom fields from CompetitionLabs database by unique Custom field ID&#39;s or any other Post body parameters using the POST method | [optional] 

### Return type

[**CustomFieldResponse**](CustomFieldResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCustomFields

> ApiResponse updateCustomFields(body)



Update existing Custom fields in the CompetitionLabs database

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.CustomFieldsApi();
let body = [new CompetitionLabsAdminServices.UpdateCustomFieldRequest()]; // [UpdateCustomFieldRequest] | Update Custom fields details in the CompetitionLabs database
apiInstance.updateCustomFields(body, (error, data, response) => {
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
 **body** | [**[UpdateCustomFieldRequest]**](UpdateCustomFieldRequest.md)| Update Custom fields details in the CompetitionLabs database | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

