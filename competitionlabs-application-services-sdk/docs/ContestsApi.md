# CompetitionLabsAdminServices.ContestsApi

All URIs are relative to *https://api.competitionlabs.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContests**](ContestsApi.md#createContests) | **POST** /contests | 
[**getChildrenOfContest**](ContestsApi.md#getChildrenOfContest) | **GET** /contests/{id}/children | 
[**getContests**](ContestsApi.md#getContests) | **GET** /contests | 
[**getContestsByQuery**](ContestsApi.md#getContestsByQuery) | **POST** /contests/query | 
[**getContestsLeaderboardById**](ContestsApi.md#getContestsLeaderboardById) | **GET** /contests/{id}/leaderboard | 
[**getContestsToClone**](ContestsApi.md#getContestsToClone) | **GET** /contests/{id}/clone | 
[**getListOfEntrantsForContest**](ContestsApi.md#getListOfEntrantsForContest) | **GET** /contests/{id}/entries | 
[**getParentsOfContest**](ContestsApi.md#getParentsOfContest) | **GET** /contests/{id}/parents | 
[**updateContest**](ContestsApi.md#updateContest) | **PUT** /contests | 
[**updateContestsState**](ContestsApi.md#updateContestsState) | **PUT** /contests/state | 



## createContests

> ApiResponse createContests(body)



Create a new Contests in the CompetitionLabs database

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.ContestsApi();
let body = new CompetitionLabsAdminServices.CreateContestForCompetitionRequest(); // CreateContestForCompetitionRequest | Create a Contests in the CompetitionLabs database
apiInstance.createContests(body, (error, data, response) => {
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
 **body** | [**CreateContestForCompetitionRequest**](CreateContestForCompetitionRequest.md)| Create a Contests in the CompetitionLabs database | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getChildrenOfContest

> ContestResponse getChildrenOfContest(id, opts)



Returns all children Contests for the Contest id provided

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.ContestsApi();
let id = "id_example"; // String | Unique identifier of the resource
let opts = {
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getChildrenOfContest(id, opts, (error, data, response) => {
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

[**ContestResponse**](ContestResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContests

> ContestResponse getContests(opts)



Returns a list of Contests. This assumes that contests have first been uploaded via a POST request or web console

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.ContestsApi();
let opts = {
  'id': ["null"], // [String] | The unique identifiers of the resources
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getContests(opts, (error, data, response) => {
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

[**ContestResponse**](ContestResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContestsByQuery

> ContestResponse getContestsByQuery(opts)



Retrieve Contests from CompetitionLabs database by unique Contests ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.ContestsApi();
let opts = {
  'body': new CompetitionLabsAdminServices.QueryRequest() // QueryRequest | Retrieve Contests from CompetitionLabs database by unique Contest ID's or any other Post body parameters using the POST method
};
apiInstance.getContestsByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Contests from CompetitionLabs database by unique Contest ID&#39;s or any other Post body parameters using the POST method | [optional] 

### Return type

[**ContestResponse**](ContestResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getContestsLeaderboardById

> ContestLeaderboardResponse getContestsLeaderboardById(id, opts)



Returns a leaderborad for the Contests id provided

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.ContestsApi();
let id = "id_example"; // String | Unique identifier of the resource
let opts = {
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getContestsLeaderboardById(id, opts, (error, data, response) => {
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

[**ContestLeaderboardResponse**](ContestLeaderboardResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContestsToClone

> CloneContestResponse getContestsToClone(id)



Clones a Contest for the identifier provided

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.ContestsApi();
let id = "id_example"; // String | Unique identifier of the resource
apiInstance.getContestsToClone(id, (error, data, response) => {
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

[**CloneContestResponse**](CloneContestResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getListOfEntrantsForContest

> EntrantResponse getListOfEntrantsForContest(id, opts)



Returns all Entries for the Contest id provided

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.ContestsApi();
let id = "id_example"; // String | Unique identifier of the resource
let opts = {
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getListOfEntrantsForContest(id, opts, (error, data, response) => {
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


## getParentsOfContest

> ContestResponse getParentsOfContest(id, opts)



Returns all parent Contests for the Contest id provided

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.ContestsApi();
let id = "id_example"; // String | Unique identifier of the resource
let opts = {
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getParentsOfContest(id, opts, (error, data, response) => {
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

[**ContestResponse**](ContestResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateContest

> ApiResponse updateContest(body)



Update an existing Contest in the CompetitionLabs database

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.ContestsApi();
let body = new CompetitionLabsAdminServices.UpdateContestRequest(); // UpdateContestRequest | Update a Contest in the CompetitionLabs database. * A Contests Id must exist in the CompetitionLabs database for update
apiInstance.updateContest(body, (error, data, response) => {
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
 **body** | [**UpdateContestRequest**](UpdateContestRequest.md)| Update a Contest in the CompetitionLabs database. * A Contests Id must exist in the CompetitionLabs database for update | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateContestsState

> ApiResponse updateContestsState(opts)



Manages the Contests state

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.ContestsApi();
let opts = {
  'body': [new CompetitionLabsAdminServices.UpdateContestStateRequest()] // [UpdateContestStateRequest] | Updates the state of the Contest
};
apiInstance.updateContestsState(opts, (error, data, response) => {
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
 **body** | [**[UpdateContestStateRequest]**](UpdateContestStateRequest.md)| Updates the state of the Contest | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

