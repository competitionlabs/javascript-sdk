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
import ApiKey from './ApiKey';
import Error from './Error';
import MetaExtended from './MetaExtended';

/**
 * The ApiKeyResponse model module.
 * @module model/ApiKeyResponse
 * @version 1.0.0
 */
class ApiKeyResponse {
    /**
     * Constructs a new <code>ApiKeyResponse</code>.
     * @alias module:model/ApiKeyResponse
     * @param meta {module:model/MetaExtended} 
     */
    constructor(meta) { 
        
        ApiKeyResponse.initialize(this, meta);
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['meta'] = new MetaExtended().model();
        obj['results'] = [new ApiKey().model()];
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
        obj["fields"]['results'] = [new ApiKey().modelMap()];
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
     * Constructs a <code>ApiKeyResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiKeyResponse} obj Optional instance to populate.
     * @return {module:model/ApiKeyResponse} The populated <code>ApiKeyResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiKeyResponse();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = MetaExtended.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [ApiKey]);
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
ApiKeyResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/ApiKey>} results
 */
ApiKeyResponse.prototype['results'] = undefined;

/**
 * @member {Array.<module:model/Error>} errors
 */
ApiKeyResponse.prototype['errors'] = undefined;






export default ApiKeyResponse;

