# CompetitionLabsAdminServices.Attachment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | [readonly] 
**spaceName** | **String** | This is the space name which is linked to the account | [readonly] 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | [readonly] 
**customFields** | [**[CustomFieldReduced]**](CustomFieldReduced.md) |  | [optional] 
**tags** | [**[TagsReduced]**](TagsReduced.md) | A list of id&#39;s used to tag models | [optional] 
**metadata** | [**[Metadata]**](Metadata.md) |  | [optional] 
**attachmentType** | **String** | A type of an attachement | 
**md5Hash** | **String** | Hash of the file contents to identify duplicates | 
**name** | **String** | Name of the original file uploaded | 
**mimeType** | **String** | Mime type of the file. Valid mime types - text/csv or application/vmd.ms-excel | 
**extension** | **String** | Extension of the file uploaded. Valid extensions supported - csv, xlsx, xls | 
**locationKey** | **String** | The name of the attachment within the bucket | 
**locationFolder** | **String** | The folder name containing the attachment within the bucket | 
**permission** | **Number** |  | 


