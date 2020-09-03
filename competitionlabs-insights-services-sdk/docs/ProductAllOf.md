# @CompetitionlabsInsightsServicesSdk.ProductAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the product | 
**productType** | **String** | The categorisation of this product by its type | 
**productTypeName** | **String** | The name of this product by its type | [optional] 
**description** | **String** | The description of the product for your reference | [optional] 
**adjustmentFactor** | **Number** | The multiplier to apply to source values received for this product events | 
**productRefId** | **String** | The reference to this product in your system. The reference identifier can not be changed after the product has been created | 
**actionTypeAdjustmentFactors** | [**[ActionTypeAdjustmentFactor]**](ActionTypeAdjustmentFactor.md) |  | [optional] 
**productGroups** | **[String]** | A list of Strings used to tag products with taxonomy terms | [optional] 
**metadata** | [**[Metadata]**](Metadata.md) |  | [optional] 
**translations** | [**[Translation]**](Translation.md) |  | [optional] 
**translatableFields** | **[String]** | Products translatable fields | [optional] [readonly] 


