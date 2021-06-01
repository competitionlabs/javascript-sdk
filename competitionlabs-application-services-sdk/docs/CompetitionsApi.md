# CompetitionLabsAdminServices.CompetitionsApi

All URIs are relative to *https://api.competitionlabs.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCompetitions**](CompetitionsApi.md#createCompetitions) | **POST** /competitions | NOT AVAILABLE IN CURRENT RELEASE
[**getCompetitions**](CompetitionsApi.md#getCompetitions) | **GET** /competitions | NOT AVAILABLE IN CURRENT RELEASE
[**getCompetitionsBrackets**](CompetitionsApi.md#getCompetitionsBrackets) | **GET** /competitions/{id}/brackets | NOT AVAILABLE IN CURRENT RELEASE
[**getCompetitionsByQuery**](CompetitionsApi.md#getCompetitionsByQuery) | **POST** /competitions/query | NOT AVAILABLE IN CURRENT RELEASE
[**getCompetitionsToClone**](CompetitionsApi.md#getCompetitionsToClone) | **GET** /competitions/{id}/clone | NOT AVAILABLE IN CURRENT RELEASE
[**getContestsForCompetitions**](CompetitionsApi.md#getContestsForCompetitions) | **GET** /competitions/{id}/contests | NOT AVAILABLE IN CURRENT RELEASE
[**getLeaderboardByCompetitionId**](CompetitionsApi.md#getLeaderboardByCompetitionId) | **GET** /competitions/{id}/leaderboards | NOT AVAILABLE IN CURRENT RELEASE
[**getListOfEntrants**](CompetitionsApi.md#getListOfEntrants) | **GET** /competitions/{id}/entries | NOT AVAILABLE IN CURRENT RELEASE
[**updateCompetitions**](CompetitionsApi.md#updateCompetitions) | **PUT** /competitions | NOT AVAILABLE IN CURRENT RELEASE
[**updateCompetitionsEntries**](CompetitionsApi.md#updateCompetitionsEntries) | **PUT** /competitions/entries | NOT AVAILABLE IN CURRENT RELEASE
[**updateCompetitionsState**](CompetitionsApi.md#updateCompetitionsState) | **PUT** /competitions/state | NOT AVAILABLE IN CURRENT RELEASE



## createCompetitions

> ApiResponse createCompetitions(body)

NOT AVAILABLE IN CURRENT RELEASE

Create a new Competition in the CompetitionLabs database

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.CompetitionsApi();
let body = new CompetitionLabsAdminServices.CreateCompetitionRequest(); // CreateCompetitionRequest | Create a Competition in the CompetitionLabs database
apiInstance.createCompetitions(body, (error, data, response) => {
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
 **body** | [**CreateCompetitionRequest**](CreateCompetitionRequest.md)| Create a Competition in the CompetitionLabs database | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getCompetitions

> CompetitionResponse getCompetitions(opts)

NOT AVAILABLE IN CURRENT RELEASE

Returns a list of Competitions. This assumes that competitions have first been uploaded via a POST request or web console

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.CompetitionsApi();
let opts = {
  'id': ["null"], // [String] | The unique identifiers of the resources
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getCompetitions(opts, (error, data, response) => {
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

[**CompetitionResponse**](CompetitionResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCompetitionsBrackets

> BracketResponse getCompetitionsBrackets(id, opts)

NOT AVAILABLE IN CURRENT RELEASE

Returns all Contests for the Competition id provided in Brackets

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.CompetitionsApi();
let id = "id_example"; // String | Unique identifier of the resource
let opts = {
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getCompetitionsBrackets(id, opts, (error, data, response) => {
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
 **limit** | **Number**| Limit the returned total records found | [optional] 
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] 

### Return type

[**BracketResponse**](BracketResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCompetitionsByQuery

> CompetitionResponse getCompetitionsByQuery(opts)

NOT AVAILABLE IN CURRENT RELEASE

Retrieve Competitions from CompetitionLabs database by unique Competition ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.CompetitionsApi();
let opts = {
  'body': new CompetitionLabsAdminServices.QueryRequest() // QueryRequest | Retrieve Competitions from CompetitionLabs database by unique Competition ID's or any other POST body parameters using the POST method
};
apiInstance.getCompetitionsByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Competitions from CompetitionLabs database by unique Competition ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**CompetitionResponse**](CompetitionResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getCompetitionsToClone

> CreateCompetitionRequest getCompetitionsToClone(id)

NOT AVAILABLE IN CURRENT RELEASE

Clones a Competition for the identifier provided

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.CompetitionsApi();
let id = "id_example"; // String | Unique identifier of the resource
apiInstance.getCompetitionsToClone(id, (error, data, response) => {
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

[**CreateCompetitionRequest**](CreateCompetitionRequest.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContestsForCompetitions

> ContestReducedResponse getContestsForCompetitions(id, opts)

NOT AVAILABLE IN CURRENT RELEASE

Returns all Contests for the Competition id provided

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.CompetitionsApi();
let id = "id_example"; // String | Unique identifier of the resource
let opts = {
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getContestsForCompetitions(id, opts, (error, data, response) => {
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
 **limit** | **Number**| Limit the returned total records found | [optional] 
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] 

### Return type

[**ContestReducedResponse**](ContestReducedResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLeaderboardByCompetitionId

> CompetitionLeaderboardResponse getLeaderboardByCompetitionId(id, opts)

NOT AVAILABLE IN CURRENT RELEASE

Returns a list of Leaderborads for the Competition id provided

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.CompetitionsApi();
let id = "id_example"; // String | Unique identifier of the resource
let opts = {
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getLeaderboardByCompetitionId(id, opts, (error, data, response) => {
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
 **limit** | **Number**| Limit the returned total records found | [optional] 
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] 

### Return type

[**CompetitionLeaderboardResponse**](CompetitionLeaderboardResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getListOfEntrants

> EntrantResponse getListOfEntrants(id, opts)

NOT AVAILABLE IN CURRENT RELEASE

Returns all Entries for the Competition id provided

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.CompetitionsApi();
let id = "id_example"; // String | Unique identifier of the resource
let opts = {
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getListOfEntrants(id, opts, (error, data, response) => {
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
 **limit** | **Number**| Limit the returned total records found | [optional] 
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] 

### Return type

[**EntrantResponse**](EntrantResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateCompetitions

> ApiResponse updateCompetitions(body)

NOT AVAILABLE IN CURRENT RELEASE

Update an existing Competition in the CompetitionLabs database

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.CompetitionsApi();
let body = new CompetitionLabsAdminServices.UpdateCompetitionRequest(); // UpdateCompetitionRequest | Update a Competition in the CompetitionLabs database. * A Competitions Id must exist in the CompetitionLabs database for update
apiInstance.updateCompetitions(body, (error, data, response) => {
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
 **body** | [**UpdateCompetitionRequest**](UpdateCompetitionRequest.md)| Update a Competition in the CompetitionLabs database. * A Competitions Id must exist in the CompetitionLabs database for update | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCompetitionsEntries

> ApiResponse updateCompetitionsEntries(opts)

NOT AVAILABLE IN CURRENT RELEASE

Updates the status of the Entrants for a Competition id provided

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.CompetitionsApi();
let opts = {
  'body': [new CompetitionLabsAdminServices.EntrantRequest()] // [EntrantRequest] | Updates the status of the Entrants
};
apiInstance.updateCompetitionsEntries(opts, (error, data, response) => {
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
 **body** | [**[EntrantRequest]**](EntrantRequest.md)| Updates the status of the Entrants | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCompetitionsState

> ApiResponse updateCompetitionsState(opts)

NOT AVAILABLE IN CURRENT RELEASE

Manages the Competitions state

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.CompetitionsApi();
let opts = {
  'body': [new CompetitionLabsAdminServices.UpdateCompetitionStatusRequest()] // [UpdateCompetitionStatusRequest] | Updates the state of the Competition
};
apiInstance.updateCompetitionsState(opts, (error, data, response) => {
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
 **body** | [**[UpdateCompetitionStatusRequest]**](UpdateCompetitionStatusRequest.md)| Updates the state of the Competition | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

