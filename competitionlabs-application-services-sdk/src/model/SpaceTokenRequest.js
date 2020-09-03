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

/**
 * The SpaceTokenRequest model module.
 * @module model/SpaceTokenRequest
 * @version 1.0.5
 */
class SpaceTokenRequest {
    /**
     * Constructs a new <code>SpaceTokenRequest</code>.
     * @alias module:model/SpaceTokenRequest
     * @param spaceName {String} Name of the space user is trying to login to
     */
    constructor(spaceName) { 
        
        SpaceTokenRequest.initialize(this, spaceName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, spaceName) { 
        obj['spaceName'] = spaceName;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['userToken'] = null;
        obj['spaceName'] = null;

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

        obj["fields"]['userToken'] = { "type": 'String', "system": false };
        obj["fields"]['spaceName'] = { "type": 'String', "system": true };

        
        obj["requiredFields"]['spaceName'] = { "type": 'String', "system": true };

        return obj;
    }

    /**
     * Constructs a <code>SpaceTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SpaceTokenRequest} obj Optional instance to populate.
     * @return {module:model/SpaceTokenRequest} The populated <code>SpaceTokenRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SpaceTokenRequest();

            if (data.hasOwnProperty('userToken')) {
                obj['userToken'] = ApiClient.convertToType(data['userToken'], 'String');
            }
            if (data.hasOwnProperty('spaceName')) {
                obj['spaceName'] = ApiClient.convertToType(data['spaceName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The token recevied with key=\"user\" from the login response
 * @member {String} userToken
 */
SpaceTokenRequest.prototype['userToken'] = undefined;

/**
 * Name of the space user is trying to login to
 * @member {String} spaceName
 */
SpaceTokenRequest.prototype['spaceName'] = undefined;






export default SpaceTokenRequest;

