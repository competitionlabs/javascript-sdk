/**
 * CompetitionLabs Application Services
 * The services listed below are referred as CompetitionLabs Application Services.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@competitionlabs.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import FileObjectAllOf from './FileObjectAllOf';
import Metadata from './Metadata';
import ModelDefault from './ModelDefault';

/**
 * The FileObject model module.
 * @module model/FileObject
 * @version 1.0.0
 */
class FileObject {
    /**
     * Constructs a new <code>FileObject</code>.
     * @alias module:model/FileObject
     * @implements module:model/ModelDefault
     * @implements module:model/FileObjectAllOf
     * @param id {String} The file identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param repositoryId {String} The repository identifier this file belongs too
     * @param fileName {String} Name of the original file uploaded
     * @param mimeType {String} Mime type of the file. Valid mime types - text/csv or application/vmd.ms-excelor or application/x-directory for directories
     * @param path {String} The name of the attachment within the bucket
     * @param parentFolderPath {String} The folder name containing the attachment within the bucket
     */
    constructor(id, spaceName, created, repositoryId, fileName, mimeType, path, parentFolderPath) { 
        ModelDefault.initialize(this, id, spaceName, created);FileObjectAllOf.initialize(this, id, repositoryId, fileName, mimeType, path, parentFolderPath);
        FileObject.initialize(this, id, spaceName, created, repositoryId, fileName, mimeType, path, parentFolderPath);
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['id'] = null;
        obj['spaceName'] = null;
        obj['created'] = null;
        obj['tags'] = [null];
        obj['repositoryId'] = null;
        obj['fileName'] = null;
        obj['mimeType'] = null;
        obj['extension'] = null;
        obj['path'] = null;
        obj['parentFolderPath'] = null;
        obj['uri'] = null;
        obj['size'] = null;
        obj['metadata'] = [new Metadata().model()];

        return obj;
    }

    /**
    * Constructs a full object Map for all available fields.
    */
    modelMap(){
        var obj = {
            "fields": {},
            "requiredFields": {}
        };

        obj["fields"]['id'] = { "type": 'String' };
        obj["fields"]['spaceName'] = { "type": 'String' };
        obj["fields"]['created'] = { "type": 'Date' };
        obj["fields"]['tags'] = [{ "type": 'String' }];
        obj["fields"]['repositoryId'] = { "type": 'String' };
        obj["fields"]['fileName'] = { "type": 'String' };
        obj["fields"]['mimeType'] = { "type": 'String' };
        obj["fields"]['extension'] = { "type": 'String' };
        obj["fields"]['path'] = { "type": 'String' };
        obj["fields"]['parentFolderPath'] = { "type": 'String' };
        obj["fields"]['uri'] = { "type": 'String' };
        obj["fields"]['size'] = { "type": 'Number' };
        obj["fields"]['metadata'] = [new Metadata().modelMap()];

        
        obj["requiredFields"]['id'] = { "type": 'String' };
        obj["requiredFields"]['spaceName'] = { "type": 'String' };
        obj["requiredFields"]['created'] = { "type": 'Date' };
        obj["requiredFields"]['repositoryId'] = { "type": 'String' };
        obj["requiredFields"]['fileName'] = { "type": 'String' };
        obj["requiredFields"]['mimeType'] = { "type": 'String' };
        obj["requiredFields"]['path'] = { "type": 'String' };
        obj["requiredFields"]['parentFolderPath'] = { "type": 'String' };

        return obj;
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, repositoryId, fileName, mimeType, path, parentFolderPath) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['repositoryId'] = repositoryId;
        obj['fileName'] = fileName;
        obj['mimeType'] = mimeType;
        obj['path'] = path;
        obj['parentFolderPath'] = parentFolderPath;
    }

    /**
     * Constructs a <code>FileObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FileObject} obj Optional instance to populate.
     * @return {module:model/FileObject} The populated <code>FileObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileObject();
            ModelDefault.constructFromObject(data, obj);
            FileObjectAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('spaceName')) {
                obj['spaceName'] = ApiClient.convertToType(data['spaceName'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('repositoryId')) {
                obj['repositoryId'] = ApiClient.convertToType(data['repositoryId'], 'String');
            }
            if (data.hasOwnProperty('fileName')) {
                obj['fileName'] = ApiClient.convertToType(data['fileName'], 'String');
            }
            if (data.hasOwnProperty('mimeType')) {
                obj['mimeType'] = ApiClient.convertToType(data['mimeType'], 'String');
            }
            if (data.hasOwnProperty('extension')) {
                obj['extension'] = ApiClient.convertToType(data['extension'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('parentFolderPath')) {
                obj['parentFolderPath'] = ApiClient.convertToType(data['parentFolderPath'], 'String');
            }
            if (data.hasOwnProperty('uri')) {
                obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], [Metadata]);
            }
        }
        return obj;
    }


}

/**
 * The file identifier
 * @member {String} id
 */
FileObject.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
FileObject.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
FileObject.prototype['created'] = undefined;

/**
 * The tags associated with this file object
 * @member {Array.<String>} tags
 */
FileObject.prototype['tags'] = undefined;

/**
 * The repository identifier this file belongs too
 * @member {String} repositoryId
 */
FileObject.prototype['repositoryId'] = undefined;

/**
 * Name of the original file uploaded
 * @member {String} fileName
 */
FileObject.prototype['fileName'] = undefined;

/**
 * Mime type of the file. Valid mime types - text/csv or application/vmd.ms-excelor or application/x-directory for directories
 * @member {String} mimeType
 */
FileObject.prototype['mimeType'] = undefined;

/**
 * Extension of the file uploaded. Valid extensions supported - csv, xlsx, xls
 * @member {String} extension
 */
FileObject.prototype['extension'] = undefined;

/**
 * The name of the attachment within the bucket
 * @member {String} path
 */
FileObject.prototype['path'] = undefined;

/**
 * The folder name containing the attachment within the bucket
 * @member {String} parentFolderPath
 */
FileObject.prototype['parentFolderPath'] = undefined;

/**
 * The uniform resource identifier where the file can be viewed/downloaded
 * @member {String} uri
 */
FileObject.prototype['uri'] = undefined;

/**
 * The size of the file
 * @member {Number} size
 */
FileObject.prototype['size'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
FileObject.prototype['metadata'] = undefined;


// Implement ModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
ModelDefault.prototype['id'] = undefined;
/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
ModelDefault.prototype['spaceName'] = undefined;
/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
ModelDefault.prototype['created'] = undefined;
// Implement FileObjectAllOf interface:
/**
 * The file identifier
 * @member {String} id
 */
FileObjectAllOf.prototype['id'] = undefined;
/**
 * The tags associated with this file object
 * @member {Array.<String>} tags
 */
FileObjectAllOf.prototype['tags'] = undefined;
/**
 * The repository identifier this file belongs too
 * @member {String} repositoryId
 */
FileObjectAllOf.prototype['repositoryId'] = undefined;
/**
 * Name of the original file uploaded
 * @member {String} fileName
 */
FileObjectAllOf.prototype['fileName'] = undefined;
/**
 * Mime type of the file. Valid mime types - text/csv or application/vmd.ms-excelor or application/x-directory for directories
 * @member {String} mimeType
 */
FileObjectAllOf.prototype['mimeType'] = undefined;
/**
 * Extension of the file uploaded. Valid extensions supported - csv, xlsx, xls
 * @member {String} extension
 */
FileObjectAllOf.prototype['extension'] = undefined;
/**
 * The name of the attachment within the bucket
 * @member {String} path
 */
FileObjectAllOf.prototype['path'] = undefined;
/**
 * The folder name containing the attachment within the bucket
 * @member {String} parentFolderPath
 */
FileObjectAllOf.prototype['parentFolderPath'] = undefined;
/**
 * The uniform resource identifier where the file can be viewed/downloaded
 * @member {String} uri
 */
FileObjectAllOf.prototype['uri'] = undefined;
/**
 * The size of the file
 * @member {Number} size
 */
FileObjectAllOf.prototype['size'] = undefined;
/**
 * @member {Array.<module:model/Metadata>} metadata
 */
FileObjectAllOf.prototype['metadata'] = undefined;




export default FileObject;

