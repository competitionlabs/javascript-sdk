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
import Error from './Error';
import MetaExtended from './MetaExtended';
import User from './User';

/**
 * The UserResponse model module.
 * @module model/UserResponse
 * @version 1.0.1
 */
class UserResponse {
    /**
     * Constructs a new <code>UserResponse</code>.
     * @alias module:model/UserResponse
     * @param meta {module:model/MetaExtended} 
     */
    constructor(meta) { 
        
        UserResponse.initialize(this, meta);
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['meta'] = new MetaExtended().model();
        obj['results'] = [new User().model()];
        obj['errors'] = [new Error().model()];

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

        obj["fields"]['meta'] = new MetaExtended().modelMap();
        obj["fields"]['results'] = [new User().modelMap()];
        obj["fields"]['errors'] = [new Error().modelMap()];

        
        obj["requiredFields"]['meta'] = new MetaExtended().modelMap();

        return obj;
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, meta) { 
        obj['meta'] = meta;
    }

    /**
     * Constructs a <code>UserResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserResponse} obj Optional instance to populate.
     * @return {module:model/UserResponse} The populated <code>UserResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserResponse();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = MetaExtended.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [User]);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/MetaExtended} meta
 */
UserResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/User>} results
 */
UserResponse.prototype['results'] = undefined;

/**
 * @member {Array.<module:model/Error>} errors
 */
UserResponse.prototype['errors'] = undefined;






export default UserResponse;
