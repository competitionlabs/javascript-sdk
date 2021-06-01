# CompetitionLabsAdminServices.AchievementsApi

All URIs are relative to *https://api.competitionlabs.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAchievements**](AchievementsApi.md#createAchievements) | **POST** /achievements | 
[**deleteAchievements**](AchievementsApi.md#deleteAchievements) | **DELETE** /achievements | 
[**deleteAchievementsByQuery**](AchievementsApi.md#deleteAchievementsByQuery) | **POST** /achievements/delete | 
[**getAchievementIconList**](AchievementsApi.md#getAchievementIconList) | **GET** /achievements/icons | NOT AVAILABLE IN CURRENT RELEASE
[**getAchievementToClone**](AchievementsApi.md#getAchievementToClone) | **GET** /achievements/{id}/clone | 
[**getAchievements**](AchievementsApi.md#getAchievements) | **GET** /achievements | 
[**getAchievementsByQuery**](AchievementsApi.md#getAchievementsByQuery) | **POST** /achievements/query | 
[**getAntecendentsForAchievement**](AchievementsApi.md#getAntecendentsForAchievement) | **GET** /achievements/{id}/antecedents | NOT AVAILABLE IN CURRENT RELEASE
[**getDesendentsForAchievement**](AchievementsApi.md#getDesendentsForAchievement) | **GET** /achievements/{id}/descendents | NOT AVAILABLE IN CURRENT RELEASE
[**getIssuedAchievementsCountById**](AchievementsApi.md#getIssuedAchievementsCountById) | **GET** /achievements/{id}/issued | 
[**getMembersAchievementsDetails**](AchievementsApi.md#getMembersAchievementsDetails) | **GET** /achievements/{id}/members | 
[**updateAchievements**](AchievementsApi.md#updateAchievements) | **PUT** /achievements | 
[**updateAchievementsLiveStatus**](AchievementsApi.md#updateAchievementsLiveStatus) | **PUT** /achievements/state | 
[**uploadAchievementsIcon**](AchievementsApi.md#uploadAchievementsIcon) | **POST** /achievements/icons | NOT AVAILABLE IN CURRENT RELEASE



## createAchievements

> ApiResponse createAchievements(body)



Create Achievements in the CompetitionLabs database

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.AchievementsApi();
let body = [new CompetitionLabsAdminServices.CreateAchievementRequest()]; // [CreateAchievementRequest] | Create Achievements in the CompetitionLabs database
apiInstance.createAchievements(body, (error, data, response) => {
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
 **body** | [**[CreateAchievementRequest]**](CreateAchievementRequest.md)| Create Achievements in the CompetitionLabs database | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAchievements

> ApiResponse deleteAchievements(opts)



Delete Achievements for a given identifier specified

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.AchievementsApi();
let opts = {
  'id': ["null"] // [String] | The unique identifiers of the resources
};
apiInstance.deleteAchievements(opts, (error, data, response) => {
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


## deleteAchievementsByQuery

> ApiResponse deleteAchievementsByQuery(opts)



Delete Achievements from CompetitionLabs database by unique Achievements ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.AchievementsApi();
let opts = {
  'body': new CompetitionLabsAdminServices.QueryRequest() // QueryRequest | Delete Achievements from CompetitionLabs database by unique Achievements ID's or any other Post body parameters using the POST method
};
apiInstance.deleteAchievementsByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete Achievements from CompetitionLabs database by unique Achievements ID&#39;s or any other Post body parameters using the POST method | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAchievementIconList

> AttachmentResponse getAchievementIconList(opts)

NOT AVAILABLE IN CURRENT RELEASE

Returns a list of Icons. This assumes that icons have first been uploaded via a POST request or web console

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.AchievementsApi();
let opts = {
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getAchievementIconList(opts, (error, data, response) => {
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
 **limit** | **Number**| Limit the returned total records found | [optional] 
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] 

### Return type

[**AttachmentResponse**](AttachmentResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAchievementToClone

> CloneAchievementResponse getAchievementToClone(id)



Clones an Achievement for the identifier provided

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.AchievementsApi();
let id = "id_example"; // String | Unique identifier of the resource
apiInstance.getAchievementToClone(id, (error, data, response) => {
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

[**CloneAchievementResponse**](CloneAchievementResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAchievements

> AchievementResponse getAchievements(opts)



Returns a list of Achievements. This assumes that achievements have first been uploaded via a POST request or web console

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.AchievementsApi();
let opts = {
  'id': ["null"], // [String] | The unique identifiers of the resources
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getAchievements(opts, (error, data, response) => {
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

[**AchievementResponse**](AchievementResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAchievementsByQuery

> AchievementResponse getAchievementsByQuery(opts)



Retrieve Achievements from CompetitionLabs database by unique Achievements ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.AchievementsApi();
let opts = {
  'body': new CompetitionLabsAdminServices.QueryRequest() // QueryRequest | Retrieve Achievements from CompetitionLabs database by unique Achievements ID's or any other Post body parameters using the POST method
};
apiInstance.getAchievementsByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Achievements from CompetitionLabs database by unique Achievements ID&#39;s or any other Post body parameters using the POST method | [optional] 

### Return type

[**AchievementResponse**](AchievementResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAntecendentsForAchievement

> AchievementResponse getAntecendentsForAchievement(id, opts)

NOT AVAILABLE IN CURRENT RELEASE

Receive a list of Antecedent Achievements for the Achievement identified provided

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.AchievementsApi();
let id = "id_example"; // String | Unique identifier of the resource
let opts = {
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getAntecendentsForAchievement(id, opts, (error, data, response) => {
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

[**AchievementResponse**](AchievementResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDesendentsForAchievement

> AchievementResponse getDesendentsForAchievement(id, opts)

NOT AVAILABLE IN CURRENT RELEASE

Receive a list of Descendent Achievements for the Achievement identified provided

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.AchievementsApi();
let id = "id_example"; // String | Unique identifier of the resource
let opts = {
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getDesendentsForAchievement(id, opts, (error, data, response) => {
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

[**AchievementResponse**](AchievementResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIssuedAchievementsCountById

> AchievementIssuedResponse getIssuedAchievementsCountById(id)



Receive a count of Issued Achievements by identifier provided

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.AchievementsApi();
let id = "id_example"; // String | Unique identifier of the resource
apiInstance.getIssuedAchievementsCountById(id, (error, data, response) => {
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

[**AchievementIssuedResponse**](AchievementIssuedResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMembersAchievementsDetails

> MemberAchievementIssuedResponse getMembersAchievementsDetails(id, opts)



Receive a list of members that had an Achievement issued for the Achievement identified provided

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.AchievementsApi();
let id = "id_example"; // String | Unique identifier of the resource
let opts = {
  'memberId': "memberId_example", // String | Id of a member
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getMembersAchievementsDetails(id, opts, (error, data, response) => {
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
 **memberId** | **String**| Id of a member | [optional] 
 **limit** | **Number**| Limit the returned total records found | [optional] 
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] 

### Return type

[**MemberAchievementIssuedResponse**](MemberAchievementIssuedResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAchievements

> ApiResponse updateAchievements(body)



Update existing Achievements in the CompetitionLabs database

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.AchievementsApi();
let body = [new CompetitionLabsAdminServices.UpdateAchievementRequest()]; // [UpdateAchievementRequest] | Update Achievements in the CompetitionLabs database. * An Achievement Id must exist in the CompetitionLabs database for update
apiInstance.updateAchievements(body, (error, data, response) => {
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
 **body** | [**[UpdateAchievementRequest]**](UpdateAchievementRequest.md)| Update Achievements in the CompetitionLabs database. * An Achievement Id must exist in the CompetitionLabs database for update | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateAchievementsLiveStatus

> ApiResponse updateAchievementsLiveStatus(opts)



Manage the state of achievement - Draft, Live, Archived

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.AchievementsApi();
let opts = {
  'body': [new CompetitionLabsAdminServices.AchievementLiveStatusRequest()] // [AchievementLiveStatusRequest] | Updates the state of the Achievement
};
apiInstance.updateAchievementsLiveStatus(opts, (error, data, response) => {
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
 **body** | [**[AchievementLiveStatusRequest]**](AchievementLiveStatusRequest.md)| Updates the state of the Achievement | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## uploadAchievementsIcon

> ApiResponse uploadAchievementsIcon(opts)

NOT AVAILABLE IN CURRENT RELEASE

Upload Achievements Icons into the CompetitionLabs database

### Example

```javascript
import CompetitionLabsAdminServices from 'competition_labs_admin_services';
let defaultClient = CompetitionLabsAdminServices.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsAdminServices.AchievementsApi();
let opts = {
  'body': [new CompetitionLabsAdminServices.CreateAttachmentRequest()] // [CreateAttachmentRequest] | Upload Achievements Icons into the CompetitionLabs database
};
apiInstance.uploadAchievementsIcon(opts, (error, data, response) => {
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
 **body** | [**[CreateAttachmentRequest]**](CreateAttachmentRequest.md)| Upload Achievements Icons into the CompetitionLabs database | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

