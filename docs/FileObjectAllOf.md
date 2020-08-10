# CompetitionLabsApplicationServices.FileObjectAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The file identifier | 
**tags** | **[String]** | The tags associated with this file object | [optional] 
**repositoryId** | **String** | The repository identifier this file belongs too | 
**fileName** | **String** | Name of the original file uploaded | 
**mimeType** | **String** | Mime type of the file. Valid mime types - text/csv or application/vmd.ms-excelor or application/x-directory for directories | 
**extension** | **String** | Extension of the file uploaded. Valid extensions supported - csv, xlsx, xls | [optional] 
**path** | **String** | The name of the attachment within the bucket | 
**parentFolderPath** | **String** | The folder name containing the attachment within the bucket | 
**uri** | **String** | The uniform resource identifier where the file can be viewed/downloaded | [optional] 
**size** | **Number** | The size of the file | [optional] 
**metadata** | [**[Metadata]**](Metadata.md) |  | [optional] 


