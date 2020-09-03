# @CompetitionlabsApplicationServicesSdk.UpdateProductRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**name** | **String** | The name of the product | [optional] 
**productType** | **String** | The categorisation of this product by its type | [optional] 
**productTypeName** | **String** | The name of this product by its type | [optional] 
**description** | **String** | The description of the product for your reference | [optional] 
**adjustmentFactor** | **Number** | The multiplier to apply to source values received for this product events | [optional] 
**productRefId** | **String** | The reference to this product in your system. The reference identifier can not be changed after the product has been created | [optional] [readonly] 
**actionTypeAdjustmentFactors** | [**[ActionTypeAdjustmentFactor]**](ActionTypeAdjustmentFactor.md) |  | [optional] 
**productGroups** | **[String]** | A list of Strings used to tag products with taxonomy terms | [optional] 
**metadata** | [**[Metadata]**](Metadata.md) |  | [optional] 
**translations** | [**[Translation]**](Translation.md) |  | [optional] 


