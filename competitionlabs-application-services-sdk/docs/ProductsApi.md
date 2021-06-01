# CompetitionLabsAdminServices.ProductsApi

All URIs are relative to *https://api.competitionlabs.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProducts**](ProductsApi.md#createProducts) | **POST** /products | 
[**deleteProducts**](ProductsApi.md#deleteProducts) | **DELETE** /products | 
[**deleteProductsByQuery**](ProductsApi.md#deleteProductsByQuery) | **POST** /products/delete | 
[**getAchievementsForProducts**](ProductsApi.md#getAchievementsForProducts) | **GET** /products/{id}/achievements | 
[**getCompetitionsForProducts**](ProductsApi.md#getCompetitionsForProducts) | **GET** /products/{id}/competitions | 
[**getContestsForProducts**](ProductsApi.md#getContestsForProducts) | **GET** /products/{id}/contests | 
[**getProducts**](ProductsApi.md#getProducts) | **GET** /products | 
[**getProductsByQuery**](ProductsApi.md#getProductsByQuery) | **POST** /products/query | 
[**updateProducts**](ProductsApi.md#updateProducts) | **PUT** /products | 



## createProducts

> ApiResponse createProducts(body)



Create new Products in the CompetitionLabs database

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.ProductsApi();
let body = [new CompetitionLabsAdminServices.CreateProductRequest()]; // [CreateProductRequest] | Create Products in the CompetitionLabs database. An array can contain a maximum of 10,000 products in one request
apiInstance.createProducts(body, (error, data, response) => {
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
 **body** | [**[CreateProductRequest]**](CreateProductRequest.md)| Create Products in the CompetitionLabs database. An array can contain a maximum of 10,000 products in one request | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json, file/csv
- **Accept**: application/json


## deleteProducts

> ApiResponse deleteProducts(opts)



Delete Products for a given identifier specified

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.ProductsApi();
let opts = {
  'id': ["null"] // [String] | The unique identifiers of the resources
};
apiInstance.deleteProducts(opts, (error, data, response) => {
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


## deleteProductsByQuery

> ApiResponse deleteProductsByQuery(opts)



Delete Products from CompetitionLabs database by unique Product ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.ProductsApi();
let opts = {
  'body': new CompetitionLabsAdminServices.QueryRequest() // QueryRequest | Delete Products from CompetitionLabs database by unique Product ID's or any other POST body parameters using the POST method
};
apiInstance.deleteProductsByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete Products from CompetitionLabs database by unique Product ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAchievementsForProducts

> AchievementReducedResponse getAchievementsForProducts(id, opts)



Returns a list of Achievements for the Product id provided

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.ProductsApi();
let id = "id_example"; // String | Unique identifier of the resource
let opts = {
  'achievementId': "achievementId_example", // String | Id of an Achievement
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getAchievementsForProducts(id, opts, (error, data, response) => {
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
 **achievementId** | **String**| Id of an Achievement | [optional] 
 **limit** | **Number**| Limit the returned total records found | [optional] 
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] 

### Return type

[**AchievementReducedResponse**](AchievementReducedResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCompetitionsForProducts

> CompetitionReducedResponse getCompetitionsForProducts(id, opts)



Returns a list of Competitions for the Product id provided

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.ProductsApi();
let id = "id_example"; // String | Unique identifier of the resource
let opts = {
  'competitionId': "competitionId_example", // String | Id of a Competition
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getCompetitionsForProducts(id, opts, (error, data, response) => {
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
 **competitionId** | **String**| Id of a Competition | [optional] 
 **limit** | **Number**| Limit the returned total records found | [optional] 
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] 

### Return type

[**CompetitionReducedResponse**](CompetitionReducedResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContestsForProducts

> ContestReducedResponse getContestsForProducts(id, opts)



Returns a list of Contests for the Product id provided

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.ProductsApi();
let id = "id_example"; // String | Unique identifier of the resource
let opts = {
  'contestId': "contestId_example", // String | Id of a Contest
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getContestsForProducts(id, opts, (error, data, response) => {
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
 **contestId** | **String**| Id of a Contest | [optional] 
 **limit** | **Number**| Limit the returned total records found | [optional] 
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] 

### Return type

[**ContestReducedResponse**](ContestReducedResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProducts

> ProductResponse getProducts(opts)



Returns a list of Products. This assumes that products have first been uploaded via a POST request or web console

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.ProductsApi();
let opts = {
  'id': ["null"], // [String] | The unique identifiers of the resources
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getProducts(opts, (error, data, response) => {
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

[**ProductResponse**](ProductResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProductsByQuery

> ProductResponse getProductsByQuery(opts)



Retrieve Products from CompetitionLabs database by unique Product ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.ProductsApi();
let opts = {
  'body': new CompetitionLabsAdminServices.QueryRequest() // QueryRequest | Retrieve Products from CompetitionLabs database by unique Product ID's or any other POST body parameters using the POST method
};
apiInstance.getProductsByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Products from CompetitionLabs database by unique Product ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateProducts

> ApiResponse updateProducts(body)



Update existing Products in the CompetitionLabs database

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.ProductsApi();
let body = [new CompetitionLabsAdminServices.UpdateProductRequest()]; // [UpdateProductRequest] | Update a Product or multiple Products in the CompetitionLabs database. * Product Ref Id can not be changed after creation * A products Id must exist in the CompetitionLabs database to update the product
apiInstance.updateProducts(body, (error, data, response) => {
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
 **body** | [**[UpdateProductRequest]**](UpdateProductRequest.md)| Update a Product or multiple Products in the CompetitionLabs database. * Product Ref Id can not be changed after creation * A products Id must exist in the CompetitionLabs database to update the product | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json, file/csv
- **Accept**: application/json

