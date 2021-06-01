# CompetitionLabsAdminServices.UpdateFileObjectRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**customFields** | **[String]** | A list of id&#39;s used to add cutom fields | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | [**[Metadata]**](Metadata.md) |  | [optional] 
**repositoryId** | **String** | The repository identifier this file belongs too | 
**name** | **String** | Name of the original file uploaded | 
**mimeType** | **String** | Mime type of the file. Valid mime types - text/csv or application/vmd.ms-excel | 
**parentFolderPath** | **String** | The folder containing the attachment within the repository | 
**constraints** | **[String]** | Additional constraints, if the value is present it means the | [optional] 


