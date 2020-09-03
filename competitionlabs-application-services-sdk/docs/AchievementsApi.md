# @CompetitionlabsJavascriptSdk.AchievementsApi

All URIs are relative to *https://api.competitionlabs.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAchievements**](docs/AchievementsApi.md#createAchievements) | **POST** /achievements/{spaceName} | 
[**deleteAchievements**](docs/AchievementsApi.md#deleteAchievements) | **DELETE** /achievements/{spaceName} | 
[**deleteAchievementsByQuery**](docs/AchievementsApi.md#deleteAchievementsByQuery) | **POST** /achievements/{spaceName}/delete | 
[**getAchievementIconList**](docs/AchievementsApi.md#getAchievementIconList) | **GET** /achievements/{spaceName}/icons | NOT AVAILABLE IN CURRENT RELEASE
[**getAchievements**](docs/AchievementsApi.md#getAchievements) | **GET** /achievements/{spaceName} | 
[**getAchievementsByQuery**](docs/AchievementsApi.md#getAchievementsByQuery) | **POST** /achievements/{spaceName}/query | 
[**getAntecendentsForAchievement**](docs/AchievementsApi.md#getAntecendentsForAchievement) | **GET** /achievements/{spaceName}/{id}/antecedents | NOT AVAILABLE IN CURRENT RELEASE
[**getDesendentsForAchievement**](docs/AchievementsApi.md#getDesendentsForAchievement) | **GET** /achievements/{spaceName}/{id}/descendents | NOT AVAILABLE IN CURRENT RELEASE
[**getIssuedAchievementsCountById**](docs/AchievementsApi.md#getIssuedAchievementsCountById) | **GET** /achievements/{spaceName}/{id}/issued | 
[**getMembersAchievementsDetails**](docs/AchievementsApi.md#getMembersAchievementsDetails) | **GET** /achievements/{spaceName}/{id}/members | 
[**updateAchievements**](docs/AchievementsApi.md#updateAchievements) | **PUT** /achievements/{spaceName} | 
[**updateAchievementsLiveStatus**](docs/AchievementsApi.md#updateAchievementsLiveStatus) | **PUT** /achievements/{spaceName}/state | 
[**uploadAchievementsIcon**](docs/AchievementsApi.md#uploadAchievementsIcon) | **POST** /achievements/{spaceName}/icons | NOT AVAILABLE IN CURRENT RELEASE



## createAchievements

> ApiResponse createAchievements(spaceName, body, opts)



Create Achievements in the CompetitionLabs database

### Example

```javascript
import @CompetitionlabsJavascriptSdk from '@competitionlabs/javascript-sdk';
let defaultClient = @CompetitionlabsJavascriptSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsJavascriptSdk.AchievementsApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let body = [new @CompetitionlabsJavascriptSdk.CreateAchievementRequest()]; // [CreateAchievementRequest] | Create Achievements in the CompetitionLabs database
let opts = {
  'X_API_KEY': "X_API_KEY_example" // String | The admin API Key generated from CompetitionLabs back office
};
apiInstance.createAchievements(spaceName, body, opts, (error, data, response) => {
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
 **body** | [**[CreateAchievementRequest]**](docs/CreateAchievementRequest.md)| Create Achievements in the CompetitionLabs database | 
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 

### Return type

[**ApiResponse**](docs/ApiResponse.md)

### Authorization

[adminApiKey](README.mdminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAchievements

> ApiResponse deleteAchievements(spaceName, opts)



Delete Achievements for a given identifier specified

### Example

```javascript
import @CompetitionlabsJavascriptSdk from '@competitionlabs/javascript-sdk';
let defaultClient = @CompetitionlabsJavascriptSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsJavascriptSdk.AchievementsApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'id': ["null"] // [String] | The unique identifiers of the resources
};
apiInstance.deleteAchievements(spaceName, opts, (error, data, response) => {
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

[**ApiResponse**](docs/ApiResponse.md)

### Authorization

[adminApiKey](README.mdminApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteAchievementsByQuery

> ApiResponse deleteAchievementsByQuery(spaceName, opts)



Delete Achievements from CompetitionLabs database by unique Achievements ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import @CompetitionlabsJavascriptSdk from '@competitionlabs/javascript-sdk';
let defaultClient = @CompetitionlabsJavascriptSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsJavascriptSdk.AchievementsApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'body': new @CompetitionlabsJavascriptSdk.QueryRequest() // QueryRequest | Delete Achievements from CompetitionLabs database by unique Achievements ID's or any other Post body parameters using the POST method
};
apiInstance.deleteAchievementsByQuery(spaceName, opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](docs/QueryRequest.md)| Delete Achievements from CompetitionLabs database by unique Achievements ID&#39;s or any other Post body parameters using the POST method | [optional] 

### Return type

[**ApiResponse**](docs/ApiResponse.md)

### Authorization

[adminApiKey](README.mdminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAchievementIconList

> AttachmentResponse getAchievementIconList(spaceName, opts)

NOT AVAILABLE IN CURRENT RELEASE

Returns a list of Icons. This assumes that icons have first been uploaded via a POST request or web console

### Example

```javascript
import @CompetitionlabsJavascriptSdk from '@competitionlabs/javascript-sdk';
let defaultClient = @CompetitionlabsJavascriptSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsJavascriptSdk.AchievementsApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'limit': 20, // Number | Limit the returned total records found
  'skip': 0 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getAchievementIconList(spaceName, opts, (error, data, response) => {
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
 **limit** | **Number**| Limit the returned total records found | [optional] [default to 20]
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] [default to 0]

### Return type

[**AttachmentResponse**](docs/AttachmentResponse.md)

### Authorization

[adminApiKey](README.mdminApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAchievements

> AchievementResponse getAchievements(spaceName, opts)



Returns a list of Achievements. This assumes that achievements have first been uploaded via a POST request or web console

### Example

```javascript
import @CompetitionlabsJavascriptSdk from '@competitionlabs/javascript-sdk';
let defaultClient = @CompetitionlabsJavascriptSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsJavascriptSdk.AchievementsApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'id': ["null"], // [String] | The unique identifiers of the resources
  'limit': 20, // Number | Limit the returned total records found
  'skip': 0 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getAchievements(spaceName, opts, (error, data, response) => {
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

[**AchievementResponse**](docs/AchievementResponse.md)

### Authorization

[adminApiKey](README.mdminApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAchievementsByQuery

> AchievementResponse getAchievementsByQuery(spaceName, opts)



Retrieve Achievements from CompetitionLabs database by unique Achievements ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import @CompetitionlabsJavascriptSdk from '@competitionlabs/javascript-sdk';
let defaultClient = @CompetitionlabsJavascriptSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsJavascriptSdk.AchievementsApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'body': new @CompetitionlabsJavascriptSdk.QueryRequest() // QueryRequest | Retrieve Achievements from CompetitionLabs database by unique Achievements ID's or any other Post body parameters using the POST method
};
apiInstance.getAchievementsByQuery(spaceName, opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](docs/QueryRequest.md)| Retrieve Achievements from CompetitionLabs database by unique Achievements ID&#39;s or any other Post body parameters using the POST method | [optional] 

### Return type

[**AchievementResponse**](docs/AchievementResponse.md)

### Authorization

[adminApiKey](README.mdminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAntecendentsForAchievement

> AchievementResponse getAntecendentsForAchievement(spaceName, id, opts)

NOT AVAILABLE IN CURRENT RELEASE

Receive a list of Antecedent Achievements for the Achievement identified provided

### Example

```javascript
import @CompetitionlabsJavascriptSdk from '@competitionlabs/javascript-sdk';
let defaultClient = @CompetitionlabsJavascriptSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsJavascriptSdk.AchievementsApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let id = "id_example"; // String | Unique identifier of the resource
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'limit': 20, // Number | Limit the returned total records found
  'skip': 0 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getAntecendentsForAchievement(spaceName, id, opts, (error, data, response) => {
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
 **limit** | **Number**| Limit the returned total records found | [optional] [default to 20]
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] [default to 0]

### Return type

[**AchievementResponse**](docs/AchievementResponse.md)

### Authorization

[adminApiKey](README.mdminApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDesendentsForAchievement

> AchievementResponse getDesendentsForAchievement(spaceName, id, opts)

NOT AVAILABLE IN CURRENT RELEASE

Receive a list of Descendent Achievements for the Achievement identified provided

### Example

```javascript
import @CompetitionlabsJavascriptSdk from '@competitionlabs/javascript-sdk';
let defaultClient = @CompetitionlabsJavascriptSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsJavascriptSdk.AchievementsApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let id = "id_example"; // String | Unique identifier of the resource
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'limit': 20, // Number | Limit the returned total records found
  'skip': 0 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getDesendentsForAchievement(spaceName, id, opts, (error, data, response) => {
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
 **limit** | **Number**| Limit the returned total records found | [optional] [default to 20]
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] [default to 0]

### Return type

[**AchievementResponse**](docs/AchievementResponse.md)

### Authorization

[adminApiKey](README.mdminApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIssuedAchievementsCountById

> AchievementIssuedResponse getIssuedAchievementsCountById(spaceName, id, opts)



Receive a count of Issued Achievements by identifier provided

### Example

```javascript
import @CompetitionlabsJavascriptSdk from '@competitionlabs/javascript-sdk';
let defaultClient = @CompetitionlabsJavascriptSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsJavascriptSdk.AchievementsApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let id = "id_example"; // String | Unique identifier of the resource
let opts = {
  'X_API_KEY': "X_API_KEY_example" // String | The admin API Key generated from CompetitionLabs back office
};
apiInstance.getIssuedAchievementsCountById(spaceName, id, opts, (error, data, response) => {
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

[**AchievementIssuedResponse**](docs/AchievementIssuedResponse.md)

### Authorization

[adminApiKey](README.mdminApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMembersAchievementsDetails

> MemberAchievementIssuedResponse getMembersAchievementsDetails(spaceName, id, opts)



Receive a list of members that had an Achievement issued for the Achievement identified provided

### Example

```javascript
import @CompetitionlabsJavascriptSdk from '@competitionlabs/javascript-sdk';
let defaultClient = @CompetitionlabsJavascriptSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsJavascriptSdk.AchievementsApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let id = "id_example"; // String | Unique identifier of the resource
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'memberId': "memberId_example", // String | Id of a member
  'limit': 20, // Number | Limit the returned total records found
  'skip': 0 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getMembersAchievementsDetails(spaceName, id, opts, (error, data, response) => {
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
 **memberId** | **String**| Id of a member | [optional] 
 **limit** | **Number**| Limit the returned total records found | [optional] [default to 20]
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] [default to 0]

### Return type

[**MemberAchievementIssuedResponse**](docs/MemberAchievementIssuedResponse.md)

### Authorization

[adminApiKey](README.mdminApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAchievements

> ApiResponse updateAchievements(spaceName, body, opts)



Update existing Achievements in the CompetitionLabs database

### Example

```javascript
import @CompetitionlabsJavascriptSdk from '@competitionlabs/javascript-sdk';
let defaultClient = @CompetitionlabsJavascriptSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsJavascriptSdk.AchievementsApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let body = [new @CompetitionlabsJavascriptSdk.UpdateAchievementRequest()]; // [UpdateAchievementRequest] | Update Achievements in the CompetitionLabs database. * An Achievement Id must exist in the CompetitionLabs database for update
let opts = {
  'X_API_KEY': "X_API_KEY_example" // String | The admin API Key generated from CompetitionLabs back office
};
apiInstance.updateAchievements(spaceName, body, opts, (error, data, response) => {
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
 **body** | [**[UpdateAchievementRequest]**](docs/UpdateAchievementRequest.md)| Update Achievements in the CompetitionLabs database. * An Achievement Id must exist in the CompetitionLabs database for update | 
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 

### Return type

[**ApiResponse**](docs/ApiResponse.md)

### Authorization

[adminApiKey](README.mdminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateAchievementsLiveStatus

> ApiResponse updateAchievementsLiveStatus(spaceName, opts)



Manage the state of achievement - Draft, Live, Archived

### Example

```javascript
import @CompetitionlabsJavascriptSdk from '@competitionlabs/javascript-sdk';
let defaultClient = @CompetitionlabsJavascriptSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsJavascriptSdk.AchievementsApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'body': [new @CompetitionlabsJavascriptSdk.AchievementLiveStatusRequest()] // [AchievementLiveStatusRequest] | Updates the state of the Achievement
};
apiInstance.updateAchievementsLiveStatus(spaceName, opts, (error, data, response) => {
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
 **body** | [**[AchievementLiveStatusRequest]**](docs/AchievementLiveStatusRequest.md)| Updates the state of the Achievement | [optional] 

### Return type

[**ApiResponse**](docs/ApiResponse.md)

### Authorization

[adminApiKey](README.mdminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## uploadAchievementsIcon

> ApiResponse uploadAchievementsIcon(spaceName, opts)

NOT AVAILABLE IN CURRENT RELEASE

Upload Achievements Icons into the CompetitionLabs database

### Example

```javascript
import @CompetitionlabsJavascriptSdk from '@competitionlabs/javascript-sdk';
let defaultClient = @CompetitionlabsJavascriptSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsJavascriptSdk.AchievementsApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'body': [new @CompetitionlabsJavascriptSdk.CreateAttachmentRequest()] // [CreateAttachmentRequest] | Upload Achievements Icons into the CompetitionLabs database
};
apiInstance.uploadAchievementsIcon(spaceName, opts, (error, data, response) => {
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
 **body** | [**[CreateAttachmentRequest]**](docs/CreateAttachmentRequest.md)| Upload Achievements Icons into the CompetitionLabs database | [optional] 

### Return type

[**ApiResponse**](docs/ApiResponse.md)

### Authorization

[adminApiKey](README.mdminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

