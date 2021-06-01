# CompetitionLabsAdminServices.CreateProductRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customFields** | **[String]** | A list of id&#39;s used to add cutom fields | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | [**[Metadata]**](Metadata.md) |  | [optional] 
**name** | **String** | The name of the product | 
**description** | **String** | The description of the product for your reference | [optional] 
**adjustmentFactor** | **Number** | The multiplier to apply to source values received for this product events | 
**productRefId** | **String** | The reference to this product in your system. The reference identifier can not be changed after the product has been created | 
**actionTypeAdjustmentFactors** | [**[ActionTypeAdjustmentFactor]**](ActionTypeAdjustmentFactor.md) |  | [optional] 
**translations** | **[Object]** |  | [optional] 


