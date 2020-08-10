# CompetitionLabsApplicationServices.MembersApi

All URIs are relative to *https://api.competitionlabs.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMembers**](MembersApi.md#createMembers) | **POST** /members/{spaceName} | 
[**deleteMembers**](MembersApi.md#deleteMembers) | **DELETE** /members/{spaceName} | 
[**deleteMembersByQuery**](MembersApi.md#deleteMembersByQuery) | **POST** /members/{spaceName}/delete | 
[**getAchievementsForMembers**](MembersApi.md#getAchievementsForMembers) | **GET** /members/{spaceName}/{id}/achievements | 
[**getAwardsForMembers**](MembersApi.md#getAwardsForMembers) | **GET** /members/{spaceName}/{id}/awards | 
[**getCompetitionsForMembers**](MembersApi.md#getCompetitionsForMembers) | **GET** /members/{spaceName}/{id}/competitions | 
[**getContestsForMembers**](MembersApi.md#getContestsForMembers) | **GET** /members/{spaceName}/{id}/contests | 
[**getMembers**](MembersApi.md#getMembers) | **GET** /members/{spaceName} | 
[**getMembersByQuery**](MembersApi.md#getMembersByQuery) | **POST** /members/{spaceName}/query | 
[**getMessagesForMembers**](MembersApi.md#getMessagesForMembers) | **GET** /members/{spaceName}/{id}/inbox | NOT AVAILABLE IN CURRENT RELEASE
[**updateMembers**](MembersApi.md#updateMembers) | **PUT** /members/{spaceName} | 



## createMembers

> ApiResponse createMembers(spaceName, body, opts)



Create new Members in the CompetitionLabs database

### Example

```javascript
import CompetitionLabsApplicationServices from '@competitionlabs/javascript-sdk';
let defaultClient = CompetitionLabsApplicationServices.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CompetitionLabsApplicationServices.MembersApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let body = [new CompetitionLabsApplicationServices.CreateMemberRequest()]; // [CreateMemberRequest] | Create Members in the CompetitionLabs database. An array can contain a maximum of 10,000 members in one request
let opts = {
  'X_API_KEY': "X_API_KEY_example" // String | The admin API Key generated from CompetitionLabs back office
};
apiInstance.createMembers(spaceName, body, opts, (error, data, response) => {
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
 **body** | [**[CreateMemberRequest]**](CreateMemberRequest.md)| Create Members in the CompetitionLabs database. An array can contain a maximum of 10,000 members in one request | 
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: application/json, file/csv
- **Accept**: application/json


## deleteMembers

> ApiResponse deleteMembers(spaceName, opts)



Delete Members for a given identifier specified

### Example

```javascript
import CompetitionLabsApplicationServices from '@competitionlabs/javascript-sdk';
let defaultClient = CompetitionLabsApplicationServices.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CompetitionLabsApplicationServices.MembersApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'id': ["null"] // [String] | The unique identifiers of the resources
};
apiInstance.deleteMembers(spaceName, opts, (error, data, response) => {
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

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteMembersByQuery

> ApiResponse deleteMembersByQuery(spaceName, opts)



Delete Members from CompetitionLabs database by unique Members ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import CompetitionLabsApplicationServices from '@competitionlabs/javascript-sdk';
let defaultClient = CompetitionLabsApplicationServices.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CompetitionLabsApplicationServices.MembersApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'body': new CompetitionLabsApplicationServices.QueryRequest() // QueryRequest | Delete Members from CompetitionLabs database by unique Members ID's or any other POST body parameters using the POST method
};
apiInstance.deleteMembersByQuery(spaceName, opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete Members from CompetitionLabs database by unique Members ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAchievementsForMembers

> AchievementReducedResponse getAchievementsForMembers(spaceName, id, opts)



Returns a list of Achievements for the Member id provided

### Example

```javascript
import CompetitionLabsApplicationServices from '@competitionlabs/javascript-sdk';
let defaultClient = CompetitionLabsApplicationServices.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CompetitionLabsApplicationServices.MembersApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let id = "id_example"; // String | Unique identifier of the resource
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'achievementId': "achievementId_example", // String | Id of an Achievement
  'limit': 20, // Number | Limit the returned total records found
  'skip': 0 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getAchievementsForMembers(spaceName, id, opts, (error, data, response) => {
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
 **achievementId** | **String**| Id of an Achievement | [optional] 
 **limit** | **Number**| Limit the returned total records found | [optional] [default to 20]
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] [default to 0]

### Return type

[**AchievementReducedResponse**](AchievementReducedResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAwardsForMembers

> MemberAwardResponse getAwardsForMembers(spaceName, id, opts)



Returns a list of Awards for the Member id provided

### Example

```javascript
import CompetitionLabsApplicationServices from '@competitionlabs/javascript-sdk';
let defaultClient = CompetitionLabsApplicationServices.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CompetitionLabsApplicationServices.MembersApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let id = "id_example"; // String | Unique identifier of the resource
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'awardId': "awardId_example", // String | Id of an Award
  'limit': 20, // Number | Limit the returned total records found
  'skip': 0 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getAwardsForMembers(spaceName, id, opts, (error, data, response) => {
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
 **awardId** | **String**| Id of an Award | [optional] 
 **limit** | **Number**| Limit the returned total records found | [optional] [default to 20]
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] [default to 0]

### Return type

[**MemberAwardResponse**](MemberAwardResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCompetitionsForMembers

> CompetitionReducedResponse getCompetitionsForMembers(spaceName, id, opts)



Returns a list Competitions for the Member id provided

### Example

```javascript
import CompetitionLabsApplicationServices from '@competitionlabs/javascript-sdk';
let defaultClient = CompetitionLabsApplicationServices.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CompetitionLabsApplicationServices.MembersApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let id = "id_example"; // String | Unique identifier of the resource
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'competitionId': "competitionId_example", // String | Id of a Competition
  'limit': 20, // Number | Limit the returned total records found
  'skip': 0 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getCompetitionsForMembers(spaceName, id, opts, (error, data, response) => {
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
 **competitionId** | **String**| Id of a Competition | [optional] 
 **limit** | **Number**| Limit the returned total records found | [optional] [default to 20]
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] [default to 0]

### Return type

[**CompetitionReducedResponse**](CompetitionReducedResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContestsForMembers

> ContestReducedResponse getContestsForMembers(spaceName, id, opts)



Returns a list of Contests for the Member id provided

### Example

```javascript
import CompetitionLabsApplicationServices from '@competitionlabs/javascript-sdk';
let defaultClient = CompetitionLabsApplicationServices.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CompetitionLabsApplicationServices.MembersApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let id = "id_example"; // String | Unique identifier of the resource
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'contestId': "contestId_example", // String | Id of a Contest
  'limit': 20, // Number | Limit the returned total records found
  'skip': 0 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getContestsForMembers(spaceName, id, opts, (error, data, response) => {
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
 **contestId** | **String**| Id of a Contest | [optional] 
 **limit** | **Number**| Limit the returned total records found | [optional] [default to 20]
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] [default to 0]

### Return type

[**ContestReducedResponse**](ContestReducedResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMembers

> MemberResponse getMembers(spaceName, opts)



Returns a list of Members. This assumes that members have first been uploaded via a POST request or web console

### Example

```javascript
import CompetitionLabsApplicationServices from '@competitionlabs/javascript-sdk';
let defaultClient = CompetitionLabsApplicationServices.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CompetitionLabsApplicationServices.MembersApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'id': ["null"], // [String] | The unique identifiers of the resources
  'limit': 20, // Number | Limit the returned total records found
  'skip': 0 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getMembers(spaceName, opts, (error, data, response) => {
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
 **limit** | **Number**| Limit the returned total records found | [optional] [default to 20]
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] [default to 0]

### Return type

[**MemberResponse**](MemberResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMembersByQuery

> MemberResponse getMembersByQuery(spaceName, opts)



Retrieve Members from CompetitionLabs database by unique Member ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import CompetitionLabsApplicationServices from '@competitionlabs/javascript-sdk';
let defaultClient = CompetitionLabsApplicationServices.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CompetitionLabsApplicationServices.MembersApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'body': new CompetitionLabsApplicationServices.QueryRequest() // QueryRequest | Retrieve Products from CompetitionLabs database by unique Product ID's or any other POST body parameters using the POST method
};
apiInstance.getMembersByQuery(spaceName, opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Products from CompetitionLabs database by unique Product ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**MemberResponse**](MemberResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getMessagesForMembers

> MemberMessageResponse getMessagesForMembers(spaceName, id, opts)

NOT AVAILABLE IN CURRENT RELEASE

Returns a list of Messages for the Member id provided

### Example

```javascript
import CompetitionLabsApplicationServices from '@competitionlabs/javascript-sdk';
let defaultClient = CompetitionLabsApplicationServices.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CompetitionLabsApplicationServices.MembersApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let id = "id_example"; // String | Unique identifier of the resource
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'messageId': "messageId_example", // String | Id of a Message
  'limit': 20, // Number | Limit the returned total records found
  'skip': 0 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getMessagesForMembers(spaceName, id, opts, (error, data, response) => {
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
 **messageId** | **String**| Id of a Message | [optional] 
 **limit** | **Number**| Limit the returned total records found | [optional] [default to 20]
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] [default to 0]

### Return type

[**MemberMessageResponse**](MemberMessageResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateMembers

> ApiResponse updateMembers(spaceName, body, opts)



Update existing Members in the CompetitionLabs database

### Example

```javascript
import CompetitionLabsApplicationServices from '@competitionlabs/javascript-sdk';
let defaultClient = CompetitionLabsApplicationServices.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CompetitionLabsApplicationServices.MembersApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let body = [new CompetitionLabsApplicationServices.UpdateMemberRequest()]; // [UpdateMemberRequest] | Update member details in the CompetitionLabs database for a given Member identifier. * Member Ref Id can not be changed after creation * A member Id must exist in the CompetitionLabs database to update the member
let opts = {
  'X_API_KEY': "X_API_KEY_example" // String | The admin API Key generated from CompetitionLabs back office
};
apiInstance.updateMembers(spaceName, body, opts, (error, data, response) => {
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
 **body** | [**[UpdateMemberRequest]**](UpdateMemberRequest.md)| Update member details in the CompetitionLabs database for a given Member identifier. * Member Ref Id can not be changed after creation * A member Id must exist in the CompetitionLabs database to update the member | 
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[adminApiKey](../README.md#adminApiKey)

### HTTP request headers

- **Content-Type**: application/json, file/csv
- **Accept**: application/json

