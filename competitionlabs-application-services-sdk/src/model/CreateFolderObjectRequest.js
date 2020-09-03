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
 * The CreateFolderObjectRequest model module.
 * @module model/CreateFolderObjectRequest
 * @version 1.0.1
 */
class CreateFolderObjectRequest {
    /**
     * Constructs a new <code>CreateFolderObjectRequest</code>.
     * @alias module:model/CreateFolderObjectRequest
     * @param repositoryId {String} The repository identifier this file belongs too
     * @param fileName {String} Name of the folder
     * @param parentFolderPath {String} The folder containing the file within the repository
     */
    constructor(repositoryId, fileName, parentFolderPath) { 
        
        CreateFolderObjectRequest.initialize(this, repositoryId, fileName, parentFolderPath);
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['tags'] = [null];
        obj['repositoryId'] = null;
        obj['fileName'] = null;
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

        obj["fields"]['tags'] = [{ "type": 'String', "system": false }];
        obj["fields"]['repositoryId'] = { "type": 'String', "system": false };
        obj["fields"]['fileName'] = { "type": 'String', "system": false };
        obj["fields"]['parentFolderPath'] = { "type": 'String', "system": false };
        obj["fields"]['metadata'] = [new Metadata().modelMap()];

        
        obj["requiredFields"]['repositoryId'] = { "type": 'String', "system": false };
        obj["requiredFields"]['fileName'] = { "type": 'String', "system": false };
        obj["requiredFields"]['parentFolderPath'] = { "type": 'String', "system": false };

        return obj;
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, repositoryId, fileName, parentFolderPath) { 
        obj['repositoryId'] = repositoryId;
        obj['fileName'] = fileName;
        obj['parentFolderPath'] = parentFolderPath;
    }

    /**
     * Constructs a <code>CreateFolderObjectRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateFolderObjectRequest} obj Optional instance to populate.
     * @return {module:model/CreateFolderObjectRequest} The populated <code>CreateFolderObjectRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateFolderObjectRequest();

            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('repositoryId')) {
                obj['repositoryId'] = ApiClient.convertToType(data['repositoryId'], 'String');
            }
            if (data.hasOwnProperty('fileName')) {
                obj['fileName'] = ApiClient.convertToType(data['fileName'], 'String');
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
CreateFolderObjectRequest.prototype['tags'] = undefined;

/**
 * The repository identifier this file belongs too
 * @member {String} repositoryId
 */
CreateFolderObjectRequest.prototype['repositoryId'] = undefined;

/**
 * Name of the folder
 * @member {String} fileName
 */
CreateFolderObjectRequest.prototype['fileName'] = undefined;

/**
 * The folder containing the file within the repository
 * @member {String} parentFolderPath
 */
CreateFolderObjectRequest.prototype['parentFolderPath'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
CreateFolderObjectRequest.prototype['metadata'] = undefined;






export default CreateFolderObjectRequest;
