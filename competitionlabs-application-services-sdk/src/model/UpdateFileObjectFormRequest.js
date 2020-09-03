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
import UpdateFileObjectFormRequestAllOf from './UpdateFileObjectFormRequestAllOf';

/**
 * The UpdateFileObjectFormRequest model module.
 * @module model/UpdateFileObjectFormRequest
 * @version 1.0.5
 */
class UpdateFileObjectFormRequest {
    /**
     * Constructs a new <code>UpdateFileObjectFormRequest</code>.
     * Either the file [id] or the [parentFolderPath] + [filename] are mandatory fields.
     * @alias module:model/UpdateFileObjectFormRequest
     * @extends module:model/UpdateFileObjectFormRequestAllOf
     * @implements module:model/UpdateFileObjectFormRequestAllOf
     * @param file {Array.<File>} The files to upload
     */
    constructor(file) { 
        UpdateFileObjectFormRequestAllOf.initialize(this, file);
        UpdateFileObjectFormRequest.initialize(this, file);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, file) { 
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};


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


        

        return obj;
    }

    /**
     * Constructs a <code>UpdateFileObjectFormRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateFileObjectFormRequest} obj Optional instance to populate.
     * @return {module:model/UpdateFileObjectFormRequest} The populated <code>UpdateFileObjectFormRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateFileObjectFormRequest();
            UpdateFileObjectFormRequestAllOf.constructFromObject(data, obj);
            UpdateFileObjectFormRequestAllOf.constructFromObject(data, obj);

        }
        return obj;
    }


}


// Implement UpdateFileObjectFormRequestAllOf interface:
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




export default UpdateFileObjectFormRequest;

