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
import Metadata from './Metadata';
import UpdateFileObjectRequestAllOf from './UpdateFileObjectRequestAllOf';
import UpdateModelDefault from './UpdateModelDefault';

/**
 * The UpdateFileObjectRequest model module.
 * @module model/UpdateFileObjectRequest
 * @version 1.0.1
 */
class UpdateFileObjectRequest {
    /**
     * Constructs a new <code>UpdateFileObjectRequest</code>.
     * @alias module:model/UpdateFileObjectRequest
     * @implements module:model/UpdateModelDefault
     * @implements module:model/UpdateFileObjectRequestAllOf
     * @param id {String} The file identifier
     * @param repositoryId {String} The repository identifier this file belongs too
     */
    constructor(id, repositoryId) { 
        UpdateModelDefault.initialize(this, id);UpdateFileObjectRequestAllOf.initialize(this, id, repositoryId);
        UpdateFileObjectRequest.initialize(this, id, repositoryId);
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['id'] = null;
        obj['tags'] = [null];
        obj['repositoryId'] = null;
        obj['fileName'] = null;
        obj['mimeType'] = null;
        obj['parentFolderPath'] = null;
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

        obj["fields"]['id'] = { "type": 'String', "system": true };
        obj["fields"]['tags'] = [{ "type": 'String', "system": false }];
        obj["fields"]['repositoryId'] = { "type": 'String', "system": false };
        obj["fields"]['fileName'] = { "type": 'String', "system": false };
        obj["fields"]['mimeType'] = { "type": 'String', "system": false };
        obj["fields"]['parentFolderPath'] = { "type": 'String', "system": false };
        obj["fields"]['metadata'] = [new Metadata().modelMap()];

        
        obj["requiredFields"]['id'] = { "type": 'String', "system": true };
        obj["requiredFields"]['repositoryId'] = { "type": 'String', "system": false };

        return obj;
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, repositoryId) { 
        obj['id'] = id;
        obj['repositoryId'] = repositoryId;
    }

    /**
     * Constructs a <code>UpdateFileObjectRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateFileObjectRequest} obj Optional instance to populate.
     * @return {module:model/UpdateFileObjectRequest} The populated <code>UpdateFileObjectRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateFileObjectRequest();
            UpdateModelDefault.constructFromObject(data, obj);
            UpdateFileObjectRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
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
            if (data.hasOwnProperty('parentFolderPath')) {
                obj['parentFolderPath'] = ApiClient.convertToType(data['parentFolderPath'], 'String');
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
UpdateFileObjectRequest.prototype['id'] = undefined;

/**
 * The tags associated with this file object
 * @member {Array.<String>} tags
 */
UpdateFileObjectRequest.prototype['tags'] = undefined;

/**
 * The repository identifier this file belongs too
 * @member {String} repositoryId
 */
UpdateFileObjectRequest.prototype['repositoryId'] = undefined;

/**
 * Name of the original file uploaded
 * @member {String} fileName
 */
UpdateFileObjectRequest.prototype['fileName'] = undefined;

/**
 * Mime type of the file. Valid mime types - text/csv or application/vmd.ms-excel
 * @member {String} mimeType
 */
UpdateFileObjectRequest.prototype['mimeType'] = undefined;

/**
 * The folder containing the attachment within the repository
 * @member {String} parentFolderPath
 */
UpdateFileObjectRequest.prototype['parentFolderPath'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
UpdateFileObjectRequest.prototype['metadata'] = undefined;


// Implement UpdateModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateModelDefault.prototype['id'] = undefined;
// Implement UpdateFileObjectRequestAllOf interface:
/**
 * The file identifier
 * @member {String} id
 */
UpdateFileObjectRequestAllOf.prototype['id'] = undefined;
/**
 * The tags associated with this file object
 * @member {Array.<String>} tags
 */
UpdateFileObjectRequestAllOf.prototype['tags'] = undefined;
/**
 * The repository identifier this file belongs too
 * @member {String} repositoryId
 */
UpdateFileObjectRequestAllOf.prototype['repositoryId'] = undefined;
/**
 * Name of the original file uploaded
 * @member {String} fileName
 */
UpdateFileObjectRequestAllOf.prototype['fileName'] = undefined;
/**
 * Mime type of the file. Valid mime types - text/csv or application/vmd.ms-excel
 * @member {String} mimeType
 */
UpdateFileObjectRequestAllOf.prototype['mimeType'] = undefined;
/**
 * The folder containing the attachment within the repository
 * @member {String} parentFolderPath
 */
UpdateFileObjectRequestAllOf.prototype['parentFolderPath'] = undefined;
/**
 * @member {Array.<module:model/Metadata>} metadata
 */
UpdateFileObjectRequestAllOf.prototype['metadata'] = undefined;




export default UpdateFileObjectRequest;

