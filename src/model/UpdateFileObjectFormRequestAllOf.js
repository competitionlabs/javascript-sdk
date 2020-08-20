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
 * The UpdateFileObjectFormRequestAllOf model module.
 * @module model/UpdateFileObjectFormRequestAllOf
 * @version 1.0.1
 */
class UpdateFileObjectFormRequestAllOf {
    /**
     * Constructs a new <code>UpdateFileObjectFormRequestAllOf</code>.
     * @alias module:model/UpdateFileObjectFormRequestAllOf
     * @param file {Array.<File>} The files to upload
     */
    constructor(file) { 
        
        UpdateFileObjectFormRequestAllOf.initialize(this, file);
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['tags'] = [null];
        obj['parentFolderPath'] = null;
        obj['metadata'] = [new Metadata().model()];
        obj['file'] = [new File().model()];

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
        obj["fields"]['parentFolderPath'] = { "type": 'String', "system": false };
        obj["fields"]['metadata'] = [new Metadata().modelMap()];
        obj["fields"]['file'] = [new File().modelMap()];

        
        obj["requiredFields"]['file'] = [new File().modelMap()];

        return obj;
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, file) { 
        obj['file'] = file;
    }

    /**
     * Constructs a <code>UpdateFileObjectFormRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateFileObjectFormRequestAllOf} obj Optional instance to populate.
     * @return {module:model/UpdateFileObjectFormRequestAllOf} The populated <code>UpdateFileObjectFormRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateFileObjectFormRequestAllOf();

            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('parentFolderPath')) {
                obj['parentFolderPath'] = ApiClient.convertToType(data['parentFolderPath'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], [Metadata]);
            }
            if (data.hasOwnProperty('file')) {
                obj['file'] = ApiClient.convertToType(data['file'], [File]);
            }
        }
        return obj;
    }


}

/**
 * The tags associated with this file object
 * @member {Array.<String>} tags
 */
UpdateFileObjectFormRequestAllOf.prototype['tags'] = undefined;

/**
 * The folder to save these file in.
 * @member {String} parentFolderPath
 */
UpdateFileObjectFormRequestAllOf.prototype['parentFolderPath'] = undefined;

/**
 * Metadata used to describe this file. Content type application/json
 * @member {Array.<module:model/Metadata>} metadata
 */
UpdateFileObjectFormRequestAllOf.prototype['metadata'] = undefined;

/**
 * The files to upload
 * @member {Array.<File>} file
 */
UpdateFileObjectFormRequestAllOf.prototype['file'] = undefined;






export default UpdateFileObjectFormRequestAllOf;

