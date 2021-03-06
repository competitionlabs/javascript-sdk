# CompetitionLabsApplicationServices.TwoFactorAuthApi

All URIs are relative to *https://api.competitionlabs.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**disable2fa**](TwoFactorAuthApi.md#disable2fa) | **DELETE** /user/2fa | NOT AVAILABLE IN CURRENT RELEASE
[**get2faQrCode**](TwoFactorAuthApi.md#get2faQrCode) | **GET** /user/2fa/qr-code | NOT AVAILABLE IN CURRENT RELEASE
[**update2faScratchCodes**](TwoFactorAuthApi.md#update2faScratchCodes) | **PUT** /user/2fa | NOT AVAILABLE IN CURRENT RELEASE
[**validate2fa**](TwoFactorAuthApi.md#validate2fa) | **POST** /user/2fa/validate | NOT AVAILABLE IN CURRENT RELEASE



## disable2fa

> ApiResponse disable2fa(opts)

NOT AVAILABLE IN CURRENT RELEASE

Disable the Users two factor authenticator from the CompetitionLabs back office

### Example

```javascript
import CompetitionLabsApplicationServices from 'competition_labs_application_services';
let defaultClient = CompetitionLabsApplicationServices.ApiClient.instance;
// Configure API key authorization: AdminApiKey
let AdminApiKey = defaultClient.authentications['AdminApiKey'];
AdminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AdminApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsApplicationServices.TwoFactorAuthApi();
let opts = {
  'X_API_KEY': "X_API_KEY_example" // String | The admin API Key generated from CompetitionLabs back office
};
apiInstance.disable2fa(opts, (error, data, response) => {
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
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[AdminApiKey](../README.md#AdminApiKey), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get2faQrCode

> QrCodeResponse get2faQrCode(opts)

NOT AVAILABLE IN CURRENT RELEASE

Get the 2FA QR code to enable 2FA. This resource will return the QR code to enable 2FA

### Example

```javascript
import CompetitionLabsApplicationServices from 'competition_labs_application_services';
let defaultClient = CompetitionLabsApplicationServices.ApiClient.instance;
// Configure API key authorization: AdminApiKey
let AdminApiKey = defaultClient.authentications['AdminApiKey'];
AdminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AdminApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsApplicationServices.TwoFactorAuthApi();
let opts = {
  'X_API_KEY': "X_API_KEY_example" // String | The admin API Key generated from CompetitionLabs back office
};
apiInstance.get2faQrCode(opts, (error, data, response) => {
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
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 

### Return type

[**QrCodeResponse**](QrCodeResponse.md)

### Authorization

[AdminApiKey](../README.md#AdminApiKey), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## update2faScratchCodes

> ApiResponse update2faScratchCodes(opts)

NOT AVAILABLE IN CURRENT RELEASE

Update scratch code for 2FA

### Example

```javascript
import CompetitionLabsApplicationServices from 'competition_labs_application_services';
let defaultClient = CompetitionLabsApplicationServices.ApiClient.instance;
// Configure API key authorization: AdminApiKey
let AdminApiKey = defaultClient.authentications['AdminApiKey'];
AdminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AdminApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsApplicationServices.TwoFactorAuthApi();
let opts = {
  'X_API_KEY': "X_API_KEY_example" // String | The admin API Key generated from CompetitionLabs back office
};
apiInstance.update2faScratchCodes(opts, (error, data, response) => {
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
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[AdminApiKey](../README.md#AdminApiKey), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## validate2fa

> ApiResponse validate2fa(body, opts)

NOT AVAILABLE IN CURRENT RELEASE

Enable the Users two factor authentication in the CompetitionLabs system

### Example

```javascript
import CompetitionLabsApplicationServices from 'competition_labs_application_services';
let defaultClient = CompetitionLabsApplicationServices.ApiClient.instance;
// Configure API key authorization: AdminApiKey
let AdminApiKey = defaultClient.authentications['AdminApiKey'];
AdminApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AdminApiKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CompetitionLabsApplicationServices.TwoFactorAuthApi();
let body = new CompetitionLabsApplicationServices.TwoFactorAuthValidateRequest(); // TwoFactorAuthValidateRequest | Enable the Users 2fa in the CompetitionLabs system
let opts = {
  'X_API_KEY': "X_API_KEY_example" // String | The admin API Key generated from CompetitionLabs back office
};
apiInstance.validate2fa(body, opts, (error, data, response) => {
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
 **body** | [**TwoFactorAuthValidateRequest**](TwoFactorAuthValidateRequest.md)| Enable the Users 2fa in the CompetitionLabs system | 
 **X_API_KEY** | **String**| The admin API Key generated from CompetitionLabs back office | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[AdminApiKey](../README.md#AdminApiKey), [OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

