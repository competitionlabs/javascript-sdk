/**
 * CompetitionLabs Admin Services
 * CompetitionLabs Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.1
 * Contact: support@competitionlabs.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AttachmentAllOf from './AttachmentAllOf';
import CustomFieldReduced from './CustomFieldReduced';
import Metadata from './Metadata';
import ModelDefault from './ModelDefault';
import OptParamModels from './OptParamModels';
import TagsReduced from './TagsReduced';

/**
 * The Attachment model module.
 * @module model/Attachment
 * @version 3.0.1
 */
class Attachment {
    /**
     * Constructs a new <code>Attachment</code>.
     * @alias module:model/Attachment
     * @implements module:model/ModelDefault
     * @implements module:model/OptParamModels
     * @implements module:model/AttachmentAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param attachmentType {String} A type of an attachement
     * @param md5Hash {String} Hash of the file contents to identify duplicates
     * @param name {String} Name of the original file uploaded
     * @param mimeType {String} Mime type of the file. Valid mime types - text/csv or application/vmd.ms-excel
     * @param extension {String} Extension of the file uploaded. Valid extensions supported - csv, xlsx, xls
     * @param locationKey {String} The name of the attachment within the bucket
     * @param locationFolder {String} The folder name containing the attachment within the bucket
     * @param permission {Number} 
     */
    constructor(id, spaceName, created, attachmentType, md5Hash, name, mimeType, extension, locationKey, locationFolder, permission) { 
        ModelDefault.initialize(this, id, spaceName, created);OptParamModels.initialize(this);AttachmentAllOf.initialize(this, attachmentType, md5Hash, name, mimeType, extension, locationKey, locationFolder, permission);
        Attachment.initialize(this, id, spaceName, created, attachmentType, md5Hash, name, mimeType, extension, locationKey, locationFolder, permission);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, attachmentType, md5Hash, name, mimeType, extension, locationKey, locationFolder, permission) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['attachmentType'] = attachmentType;
        obj['md5Hash'] = md5Hash;
        obj['name'] = name;
        obj['mimeType'] = mimeType;
        obj['extension'] = extension;
        obj['locationKey'] = locationKey;
        obj['locationFolder'] = locationFolder;
        obj['permission'] = permission;
    }

    /**
     * Constructs a <code>Attachment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Attachment} obj Optional instance to populate.
     * @return {module:model/Attachment} The populated <code>Attachment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Attachment();
            ModelDefault.constructFromObject(data, obj);
            OptParamModels.constructFromObject(data, obj);
            AttachmentAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('spaceName')) {
                obj['spaceName'] = ApiClient.convertToType(data['spaceName'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('customFields')) {
                obj['customFields'] = ApiClient.convertToType(data['customFields'], [CustomFieldReduced]);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], [TagsReduced]);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], [Metadata]);
            }
            if (data.hasOwnProperty('attachmentType')) {
                obj['attachmentType'] = ApiClient.convertToType(data['attachmentType'], 'String');
            }
            if (data.hasOwnProperty('md5Hash')) {
                obj['md5Hash'] = ApiClient.convertToType(data['md5Hash'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('mimeType')) {
                obj['mimeType'] = ApiClient.convertToType(data['mimeType'], 'String');
            }
            if (data.hasOwnProperty('extension')) {
                obj['extension'] = ApiClient.convertToType(data['extension'], 'String');
            }
            if (data.hasOwnProperty('locationKey')) {
                obj['locationKey'] = ApiClient.convertToType(data['locationKey'], 'String');
            }
            if (data.hasOwnProperty('locationFolder')) {
                obj['locationFolder'] = ApiClient.convertToType(data['locationFolder'], 'String');
            }
            if (data.hasOwnProperty('permission')) {
                obj['permission'] = ApiClient.convertToType(data['permission'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
Attachment.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
Attachment.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
Attachment.prototype['created'] = undefined;

/**
 * @member {Array.<module:model/CustomFieldReduced>} customFields
 */
Attachment.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<module:model/TagsReduced>} tags
 */
Attachment.prototype['tags'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
Attachment.prototype['metadata'] = undefined;

/**
 * A type of an attachement
 * @member {String} attachmentType
 */
Attachment.prototype['attachmentType'] = undefined;

/**
 * Hash of the file contents to identify duplicates
 * @member {String} md5Hash
 */
Attachment.prototype['md5Hash'] = undefined;

/**
 * Name of the original file uploaded
 * @member {String} name
 */
Attachment.prototype['name'] = undefined;

/**
 * Mime type of the file. Valid mime types - text/csv or application/vmd.ms-excel
 * @member {String} mimeType
 */
Attachment.prototype['mimeType'] = undefined;

/**
 * Extension of the file uploaded. Valid extensions supported - csv, xlsx, xls
 * @member {String} extension
 */
Attachment.prototype['extension'] = undefined;

/**
 * The name of the attachment within the bucket
 * @member {String} locationKey
 */
Attachment.prototype['locationKey'] = undefined;

/**
 * The folder name containing the attachment within the bucket
 * @member {String} locationFolder
 */
Attachment.prototype['locationFolder'] = undefined;

/**
 * @member {Number} permission
 */
Attachment.prototype['permission'] = undefined;


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
// Implement OptParamModels interface:
/**
 * @member {Array.<module:model/CustomFieldReduced>} customFields
 */
OptParamModels.prototype['customFields'] = undefined;
/**
 * A list of id's used to tag models
 * @member {Array.<module:model/TagsReduced>} tags
 */
OptParamModels.prototype['tags'] = undefined;
/**
 * @member {Array.<module:model/Metadata>} metadata
 */
OptParamModels.prototype['metadata'] = undefined;
// Implement AttachmentAllOf interface:
/**
 * A type of an attachement
 * @member {String} attachmentType
 */
AttachmentAllOf.prototype['attachmentType'] = undefined;
/**
 * Hash of the file contents to identify duplicates
 * @member {String} md5Hash
 */
AttachmentAllOf.prototype['md5Hash'] = undefined;
/**
 * Name of the original file uploaded
 * @member {String} name
 */
AttachmentAllOf.prototype['name'] = undefined;
/**
 * Mime type of the file. Valid mime types - text/csv or application/vmd.ms-excel
 * @member {String} mimeType
 */
AttachmentAllOf.prototype['mimeType'] = undefined;
/**
 * Extension of the file uploaded. Valid extensions supported - csv, xlsx, xls
 * @member {String} extension
 */
AttachmentAllOf.prototype['extension'] = undefined;
/**
 * The name of the attachment within the bucket
 * @member {String} locationKey
 */
AttachmentAllOf.prototype['locationKey'] = undefined;
/**
 * The folder name containing the attachment within the bucket
 * @member {String} locationFolder
 */
AttachmentAllOf.prototype['locationFolder'] = undefined;
/**
 * @member {Number} permission
 */
AttachmentAllOf.prototype['permission'] = undefined;




export default Attachment;

