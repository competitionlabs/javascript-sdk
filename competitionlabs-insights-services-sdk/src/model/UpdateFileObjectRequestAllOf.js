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

/**
 * The UpdateFileObjectRequestAllOf model module.
 * @module model/UpdateFileObjectRequestAllOf
 * @version 1.0.0
 */
class UpdateFileObjectRequestAllOf {
    /**
     * Constructs a new <code>UpdateFileObjectRequestAllOf</code>.
     * @alias module:model/UpdateFileObjectRequestAllOf
     * @param repositoryId {String} The repository identifier this file belongs too
     */
    constructor(repositoryId) { 
        
        UpdateFileObjectRequestAllOf.initialize(this, repositoryId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, repositoryId) { 
        obj['repositoryId'] = repositoryId;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['tags'];
        obj['repositoryId'];
        obj['fileName'];
        obj['mimeType'];
        obj['parentFolderPath'];
        obj['metadata'];

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

        obj["fields"]['tags'];
        obj["fields"]['repositoryId'];
        obj["fields"]['fileName'];
        obj["fields"]['mimeType'];
        obj["fields"]['parentFolderPath'];
        obj["fields"]['metadata'];

        
        obj["requiredFields"]['repositoryId'];

        return obj;
    }

    /**
     * Constructs a <code>UpdateFileObjectRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateFileObjectRequestAllOf} obj Optional instance to populate.
     * @return {module:model/UpdateFileObjectRequestAllOf} The populated <code>UpdateFileObjectRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateFileObjectRequestAllOf();

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






export default UpdateFileObjectRequestAllOf;

