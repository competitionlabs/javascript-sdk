# CompetitionLabsAdminServices.ProductReduced

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | [readonly] 
**spaceName** | **String** | This is the space name which is linked to the account | [readonly] 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | [readonly] 
**name** | **String** | The name of the product | [optional] 
**productRefId** | **String** | The reference to this product in your system. The reference identifier can not be changed after the product has been created | 
**tags** | [**[TagsReduced]**](TagsReduced.md) | A list of Strings used to tag products with taxonomy terms | [optional] 


