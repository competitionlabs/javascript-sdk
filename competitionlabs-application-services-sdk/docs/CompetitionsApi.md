# @CompetitionlabsApplicationServicesSdk.CompetitionsApi

All URIs are relative to *https://api.competitionlabs.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCompetitions**](CompetitionsApi.md#createCompetitions) | **POST** /competitions/{spaceName} | NOT AVAILABLE IN CURRENT RELEASE
[**deleteCompetitionsByQuery**](CompetitionsApi.md#deleteCompetitionsByQuery) | **POST** /competitions/{spaceName}/delete | NOT AVAILABLE IN CURRENT RELEASE
[**getCompetitions**](CompetitionsApi.md#getCompetitions) | **GET** /competitions/{spaceName} | NOT AVAILABLE IN CURRENT RELEASE
[**getCompetitionsBrackets**](CompetitionsApi.md#getCompetitionsBrackets) | **GET** /competitions/{spaceName}/{id}/brackets | NOT AVAILABLE IN CURRENT RELEASE
[**getCompetitionsByQuery**](CompetitionsApi.md#getCompetitionsByQuery) | **POST** /competitions/{spaceName}/query | NOT AVAILABLE IN CURRENT RELEASE
[**getCompetitionsToClone**](CompetitionsApi.md#getCompetitionsToClone) | **GET** /competitions/{spaceName}/{id}/clone | NOT AVAILABLE IN CURRENT RELEASE
[**getContestsForCompetitions**](CompetitionsApi.md#getContestsForCompetitions) | **GET** /competitions/{spaceName}/{id}/contests | NOT AVAILABLE IN CURRENT RELEASE
[**getLeaderboardByCompetitionId**](CompetitionsApi.md#getLeaderboardByCompetitionId) | **GET** /competitions/{spaceName}/{id}/leaderboards | NOT AVAILABLE IN CURRENT RELEASE
[**getListOfEntrants**](CompetitionsApi.md#getListOfEntrants) | **GET** /competitions/{spaceName}/{id}/entries | NOT AVAILABLE IN CURRENT RELEASE
[**updateCompetitions**](CompetitionsApi.md#updateCompetitions) | **PUT** /competitions/{spaceName} | NOT AVAILABLE IN CURRENT RELEASE
[**updateCompetitionsEntries**](CompetitionsApi.md#updateCompetitionsEntries) | **PUT** /competitions/{spaceName}/entries | NOT AVAILABLE IN CURRENT RELEASE
[**updateCompetitionsState**](CompetitionsApi.md#updateCompetitionsState) | **PUT** /competitions/{spaceName}/state | NOT AVAILABLE IN CURRENT RELEASE



## createCompetitions

> ApiResponse createCompetitions(spaceName, body, opts)

NOT AVAILABLE IN CURRENT RELEASE

Create a new Competition in the CompetitionLabs database

### Example

```javascript
import @CompetitionlabsApplicationServicesSdk from '@competitionlabs/application-services-sdk';
let defaultClient = @CompetitionlabsApplicationServicesSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsApplicationServicesSdk.CompetitionsApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let body = new @CompetitionlabsApplicationServicesSdk.CreateCompetitionRequest(); // CreateCompetitionRequest | Create a Competition in the CompetitionLabs database
let opts = {
  'X_API_KEY': "X_API_KEY_example" // String | The admin API Key generated from CompetitionLabs back office
};
apiInstance.createCompetitions(spaceName, body, opts, (error, data, response) => {
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
 **body** | [**CreateCompetitionRequest**](CreateCompetitionRequest.md)| Create a Competition in the CompetitionLabs database | 
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCompetitionsByQuery

> ApiResponse deleteCompetitionsByQuery(spaceName, opts)

NOT AVAILABLE IN CURRENT RELEASE

Delete Competitions from CompetitionLabs database by unique Competition ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import @CompetitionlabsApplicationServicesSdk from '@competitionlabs/application-services-sdk';
let defaultClient = @CompetitionlabsApplicationServicesSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsApplicationServicesSdk.CompetitionsApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'body': new @CompetitionlabsApplicationServicesSdk.QueryRequest() // QueryRequest | Delete Competitions from CompetitionLabs database by unique Competition ID's or any other POST body parameters using the POST method
};
apiInstance.deleteCompetitionsByQuery(spaceName, opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete Competitions from CompetitionLabs database by unique Competition ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getCompetitions

> CompetitionResponse getCompetitions(spaceName, opts)

NOT AVAILABLE IN CURRENT RELEASE

Returns a list of Competitions. This assumes that competitions have first been uploaded via a POST request or web console

### Example

```javascript
import @CompetitionlabsApplicationServicesSdk from '@competitionlabs/application-services-sdk';
let defaultClient = @CompetitionlabsApplicationServicesSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsApplicationServicesSdk.CompetitionsApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'id': ["null"], // [String] | The unique identifiers of the resources
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getCompetitions(spaceName, opts, (error, data, response) => {
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
 **id** | [**[String]**](String.md)| The unique identifiers of the resources | [optional] 
 **limit** | **Number**| Limit the returned total records found | [optional] 
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] 

### Return type

[**CompetitionResponse**](CompetitionResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCompetitionsBrackets

> BracketResponse getCompetitionsBrackets(spaceName, id, opts)

NOT AVAILABLE IN CURRENT RELEASE

Returns all Contests for the Competition id provided in Brackets

### Example

```javascript
import @CompetitionlabsApplicationServicesSdk from '@competitionlabs/application-services-sdk';
let defaultClient = @CompetitionlabsApplicationServicesSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsApplicationServicesSdk.CompetitionsApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let id = "id_example"; // String | Unique identifier of the resource
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getCompetitionsBrackets(spaceName, id, opts, (error, data, response) => {
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
 **id** | **String**| Unique identifier of the resource | 
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 
 **limit** | **Number**| Limit the returned total records found | [optional] 
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] 

### Return type

[**BracketResponse**](BracketResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCompetitionsByQuery

> CompetitionResponse getCompetitionsByQuery(spaceName, opts)

NOT AVAILABLE IN CURRENT RELEASE

Retrieve Competitions from CompetitionLabs database by unique Competition ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import @CompetitionlabsApplicationServicesSdk from '@competitionlabs/application-services-sdk';
let defaultClient = @CompetitionlabsApplicationServicesSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsApplicationServicesSdk.CompetitionsApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'body': new @CompetitionlabsApplicationServicesSdk.QueryRequest() // QueryRequest | Retrieve Competitions from CompetitionLabs database by unique Competition ID's or any other POST body parameters using the POST method
};
apiInstance.getCompetitionsByQuery(spaceName, opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Competitions from CompetitionLabs database by unique Competition ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**CompetitionResponse**](CompetitionResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getCompetitionsToClone

> CreateCompetitionRequest getCompetitionsToClone(spaceName, id, opts)

NOT AVAILABLE IN CURRENT RELEASE

Clones a Competition for the identifier provided

### Example

```javascript
import @CompetitionlabsApplicationServicesSdk from '@competitionlabs/application-services-sdk';
let defaultClient = @CompetitionlabsApplicationServicesSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsApplicationServicesSdk.CompetitionsApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let id = "id_example"; // String | Unique identifier of the resource
let opts = {
  'X_API_KEY': "X_API_KEY_example" // String | The admin API Key generated from CompetitionLabs back office
};
apiInstance.getCompetitionsToClone(spaceName, id, opts, (error, data, response) => {
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
 **id** | **String**| Unique identifier of the resource | 
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 

### Return type

[**CreateCompetitionRequest**](CreateCompetitionRequest.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContestsForCompetitions

> ContestReducedResponse getContestsForCompetitions(spaceName, id, opts)

NOT AVAILABLE IN CURRENT RELEASE

Returns all Contests for the Competition id provided

### Example

```javascript
import @CompetitionlabsApplicationServicesSdk from '@competitionlabs/application-services-sdk';
let defaultClient = @CompetitionlabsApplicationServicesSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsApplicationServicesSdk.CompetitionsApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let id = "id_example"; // String | Unique identifier of the resource
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getContestsForCompetitions(spaceName, id, opts, (error, data, response) => {
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
 **id** | **String**| Unique identifier of the resource | 
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 
 **limit** | **Number**| Limit the returned total records found | [optional] 
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] 

### Return type

[**ContestReducedResponse**](ContestReducedResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLeaderboardByCompetitionId

> CompetitionLeaderboardResponse getLeaderboardByCompetitionId(spaceName, id, opts)

NOT AVAILABLE IN CURRENT RELEASE

Returns a list of Leaderborads for the Competition id provided

### Example

```javascript
import @CompetitionlabsApplicationServicesSdk from '@competitionlabs/application-services-sdk';
let defaultClient = @CompetitionlabsApplicationServicesSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsApplicationServicesSdk.CompetitionsApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let id = "id_example"; // String | Unique identifier of the resource
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getLeaderboardByCompetitionId(spaceName, id, opts, (error, data, response) => {
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
 **id** | **String**| Unique identifier of the resource | 
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 
 **limit** | **Number**| Limit the returned total records found | [optional] 
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] 

### Return type

[**CompetitionLeaderboardResponse**](CompetitionLeaderboardResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getListOfEntrants

> EntrantResponse getListOfEntrants(spaceName, id, opts)

NOT AVAILABLE IN CURRENT RELEASE

Returns all Entries for the Competition id provided

### Example

```javascript
import @CompetitionlabsApplicationServicesSdk from '@competitionlabs/application-services-sdk';
let defaultClient = @CompetitionlabsApplicationServicesSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsApplicationServicesSdk.CompetitionsApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let id = "id_example"; // String | Unique identifier of the resource
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getListOfEntrants(spaceName, id, opts, (error, data, response) => {
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
 **id** | **String**| Unique identifier of the resource | 
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 
 **limit** | **Number**| Limit the returned total records found | [optional] 
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] 

### Return type

[**EntrantResponse**](EntrantResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateCompetitions

> ApiResponse updateCompetitions(spaceName, body, opts)

NOT AVAILABLE IN CURRENT RELEASE

Update an existing Competition in the CompetitionLabs database

### Example

```javascript
import @CompetitionlabsApplicationServicesSdk from '@competitionlabs/application-services-sdk';
let defaultClient = @CompetitionlabsApplicationServicesSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsApplicationServicesSdk.CompetitionsApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let body = new @CompetitionlabsApplicationServicesSdk.UpdateCompetitionRequest(); // UpdateCompetitionRequest | Update a Competition in the CompetitionLabs database. * A Competitions Id must exist in the CompetitionLabs database for update
let opts = {
  'X_API_KEY': "X_API_KEY_example" // String | The admin API Key generated from CompetitionLabs back office
};
apiInstance.updateCompetitions(spaceName, body, opts, (error, data, response) => {
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
 **body** | [**UpdateCompetitionRequest**](UpdateCompetitionRequest.md)| Update a Competition in the CompetitionLabs database. * A Competitions Id must exist in the CompetitionLabs database for update | 
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCompetitionsEntries

> ApiResponse updateCompetitionsEntries(spaceName, opts)

NOT AVAILABLE IN CURRENT RELEASE

Updates the status of the Entrants for a Competition id provided

### Example

```javascript
import @CompetitionlabsApplicationServicesSdk from '@competitionlabs/application-services-sdk';
let defaultClient = @CompetitionlabsApplicationServicesSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsApplicationServicesSdk.CompetitionsApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'body': [new @CompetitionlabsApplicationServicesSdk.EntrantRequest()] // [EntrantRequest] | Updates the status of the Entrants
};
apiInstance.updateCompetitionsEntries(spaceName, opts, (error, data, response) => {
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
 **body** | [**[EntrantRequest]**](EntrantRequest.md)| Updates the status of the Entrants | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCompetitionsState

> ApiResponse updateCompetitionsState(spaceName, opts)

NOT AVAILABLE IN CURRENT RELEASE

Manages the Competitions state

### Example

```javascript
import @CompetitionlabsApplicationServicesSdk from '@competitionlabs/application-services-sdk';
let defaultClient = @CompetitionlabsApplicationServicesSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsApplicationServicesSdk.CompetitionsApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'body': [new @CompetitionlabsApplicationServicesSdk.UpdateCompetitionStatusRequest()] // [UpdateCompetitionStatusRequest] | Updates the state of the Competition
};
apiInstance.updateCompetitionsState(spaceName, opts, (error, data, response) => {
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
 **body** | [**[UpdateCompetitionStatusRequest]**](UpdateCompetitionStatusRequest.md)| Updates the state of the Competition | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

