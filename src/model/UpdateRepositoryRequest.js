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
import HostingOptions from './HostingOptions';
import UpdateModelDefault from './UpdateModelDefault';
import UpdateRepositoryRequestAllOf from './UpdateRepositoryRequestAllOf';

/**
 * The UpdateRepositoryRequest model module.
 * @module model/UpdateRepositoryRequest
 * @version 1.0.1
 */
class UpdateRepositoryRequest {
    /**
     * Constructs a new <code>UpdateRepositoryRequest</code>.
     * @alias module:model/UpdateRepositoryRequest
     * @implements module:model/UpdateModelDefault
     * @implements module:model/UpdateRepositoryRequestAllOf
     * @param id {String} A unique system generated identifier
     */
    constructor(id) { 
        UpdateModelDefault.initialize(this, id);UpdateRepositoryRequestAllOf.initialize(this);
        UpdateRepositoryRequest.initialize(this, id);
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['id'] = null;
        obj['description'] = null;
        obj['tags'] = [null];
        obj['constraints'] = [null];
        obj['hostingOptions'] = new HostingOptions().model();

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
        obj["fields"]['description'] = { "type": 'String' };
        obj["fields"]['tags'] = [{ "type": 'String' }];
        obj["fields"]['constraints'] = [{ "type": 'String' }];
        obj["fields"]['hostingOptions'] = new HostingOptions().modelMap();

        
        obj["requiredFields"]['id'] = { "type": 'String' };

        return obj;
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>UpdateRepositoryRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateRepositoryRequest} obj Optional instance to populate.
     * @return {module:model/UpdateRepositoryRequest} The populated <code>UpdateRepositoryRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateRepositoryRequest();
            UpdateModelDefault.constructFromObject(data, obj);
            UpdateRepositoryRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
            if (data.hasOwnProperty('hostingOptions')) {
                obj['hostingOptions'] = HostingOptions.constructFromObject(data['hostingOptions']);
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateRepositoryRequest.prototype['id'] = undefined;

/**
 * The description of the repository
 * @member {String} description
 */
UpdateRepositoryRequest.prototype['description'] = undefined;

/**
 * The tags used to categorize the repository
 * @member {Array.<String>} tags
 */
UpdateRepositoryRequest.prototype['tags'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
UpdateRepositoryRequest.prototype['constraints'] = undefined;

/**
 * @member {module:model/HostingOptions} hostingOptions
 */
UpdateRepositoryRequest.prototype['hostingOptions'] = undefined;


// Implement UpdateModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateModelDefault.prototype['id'] = undefined;
// Implement UpdateRepositoryRequestAllOf interface:
/**
 * The description of the repository
 * @member {String} description
 */
UpdateRepositoryRequestAllOf.prototype['description'] = undefined;
/**
 * The tags used to categorize the repository
 * @member {Array.<String>} tags
 */
UpdateRepositoryRequestAllOf.prototype['tags'] = undefined;
/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
UpdateRepositoryRequestAllOf.prototype['constraints'] = undefined;
/**
 * @member {module:model/HostingOptions} hostingOptions
 */
UpdateRepositoryRequestAllOf.prototype['hostingOptions'] = undefined;




export default UpdateRepositoryRequest;

