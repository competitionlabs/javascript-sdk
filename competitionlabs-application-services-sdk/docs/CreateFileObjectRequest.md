# CompetitionLabsAdminServices.CreateFileObjectRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customFields** | **[String]** | A list of id&#39;s used to add cutom fields | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | [**[Metadata]**](Metadata.md) |  | [optional] 
**repositoryId** | **String** | The repository identifier this file belongs too | 
**name** | **String** | Name of the original file uploaded | 
**mimeType** | **String** | Mime type of the file. Valid mime types - text/csv or application/vmd.ms-excel or application/x-directory for directories | 
**parentFolderPath** | **String** | The folder containing the file within the repository | 
**constraints** | **[String]** | Additional constraints, if the value is present it means the | [optional] 


