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
 * The ClaimAwardRequest model module.
 * @module model/ClaimAwardRequest
 * @version 1.0.1
 */
class ClaimAwardRequest {
    /**
     * Constructs a new <code>ClaimAwardRequest</code>.
     * @alias module:model/ClaimAwardRequest
     * @param id {String} Unique system identifier of an Award
     * @param claimed {Boolean} has the award been claimed or not
     */
    constructor(id, claimed) { 
        
        ClaimAwardRequest.initialize(this, id, claimed);
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['id'] = null;
        obj['claimed'] = null;

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
        obj["fields"]['claimed'] = { "type": 'Boolean', "system": false };

        
        obj["requiredFields"]['id'] = { "type": 'String', "system": true };
        obj["requiredFields"]['claimed'] = { "type": 'Boolean', "system": false };

        return obj;
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, claimed) { 
        obj['id'] = id;
        obj['claimed'] = claimed;
    }

    /**
     * Constructs a <code>ClaimAwardRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClaimAwardRequest} obj Optional instance to populate.
     * @return {module:model/ClaimAwardRequest} The populated <code>ClaimAwardRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClaimAwardRequest();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('claimed')) {
                obj['claimed'] = ApiClient.convertToType(data['claimed'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Unique system identifier of an Award
 * @member {String} id
 */
ClaimAwardRequest.prototype['id'] = undefined;

/**
 * has the award been claimed or not
 * @member {Boolean} claimed
 */
ClaimAwardRequest.prototype['claimed'] = undefined;






export default ClaimAwardRequest;
