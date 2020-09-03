# @CompetitionlabsJavascriptSdk.AwardsApi

All URIs are relative to *https://api.competitionlabs.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**claimAwards**](docs/AwardsApi.md#claimAwards) | **PUT** /awards/{spaceName}/claim | 
[**getAwards**](docs/AwardsApi.md#getAwards) | **GET** /awards/{spaceName} | 
[**getAwardsByQuery**](docs/AwardsApi.md#getAwardsByQuery) | **POST** /awards/{spaceName}/query | 



## claimAwards

> ApiResponse claimAwards(spaceName, body, opts)



Claim Awards that need to be actioned at

### Example

```javascript
import @CompetitionlabsJavascriptSdk from '@competitionlabs/javascript-sdk';
let defaultClient = @CompetitionlabsJavascriptSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsJavascriptSdk.AwardsApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let body = [new @CompetitionlabsJavascriptSdk.ClaimAwardRequest()]; // [ClaimAwardRequest] | Claim Awards that need to be actioned at in the Competitionlabs database
let opts = {
  'X_API_KEY': "X_API_KEY_example" // String | The admin API Key generated from CompetitionLabs back office
};
apiInstance.claimAwards(spaceName, body, opts, (error, data, response) => {
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
 **body** | [**[ClaimAwardRequest]**](docs/ClaimAwardRequest.md)| Claim Awards that need to be actioned at in the Competitionlabs database | 
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 

### Return type

[**ApiResponse**](docs/ApiResponse.md)

### Authorization

[adminApiKey](README.mdminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAwards

> AwardResponse getAwards(spaceName, opts)



Returns a list of Awards.

### Example

```javascript
import @CompetitionlabsJavascriptSdk from '@competitionlabs/javascript-sdk';
let defaultClient = @CompetitionlabsJavascriptSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsJavascriptSdk.AwardsApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'id': ["null"], // [String] | The unique identifiers of the resources
  'limit': 20, // Number | Limit the returned total records found
  'skip': 0 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getAwards(spaceName, opts, (error, data, response) => {
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

[**AwardResponse**](docs/AwardResponse.md)

### Authorization

[adminApiKey](README.mdminApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAwardsByQuery

> AwardResponse getAwardsByQuery(spaceName, opts)



Retrieve Awards from CompetitionLabs database by unique Awards ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import @CompetitionlabsJavascriptSdk from '@competitionlabs/javascript-sdk';
let defaultClient = @CompetitionlabsJavascriptSdk.ApiClient.instance;
// Configure API key authorization: adminApiKey
let adminApiKey = defaultClient.authentications['adminApiKey'];
adminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//adminApiKey.apiKeyPrefix = 'Token';

let apiInstance = new @CompetitionlabsJavascriptSdk.AwardsApi();
let spaceName = "spaceName_example"; // String | This is the space name which is linked to the account
let opts = {
  'X_API_KEY': "X_API_KEY_example", // String | The admin API Key generated from CompetitionLabs back office
  'body': new @CompetitionlabsJavascriptSdk.QueryRequest() // QueryRequest | Retrieve Awards from CompetitionLabs database by unique Awards ID's or any other POST body parameters using the POST method
};
apiInstance.getAwardsByQuery(spaceName, opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](docs/QueryRequest.md)| Retrieve Awards from CompetitionLabs database by unique Awards ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**AwardResponse**](docs/AwardResponse.md)

### Authorization

[adminApiKey](README.mdminApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

