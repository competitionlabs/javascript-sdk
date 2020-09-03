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
import MetaBasic from './MetaBasic';
import Result from './Result';

/**
 * The ApiResponse model module.
 * @module model/ApiResponse
 * @version 1.0.5
 */
class ApiResponse {
    /**
     * Constructs a new <code>ApiResponse</code>.
     * @alias module:model/ApiResponse
     * @param meta {module:model/MetaBasic} 
     */
    constructor(meta) { 
        
        ApiResponse.initialize(this, meta);
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
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['meta'] = new MetaBasic().model();
        obj['results'] = [new Result().model()];
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

        obj["fields"]['meta'] = new MetaBasic().modelMap();
        obj["fields"]['results'] = [new Result().modelMap()];
        obj["fields"]['errors'] = [new Error().modelMap()];

        
        obj["requiredFields"]['meta'] = new MetaBasic().modelMap();

        return obj;
    }

    /**
     * Constructs a <code>ApiResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiResponse} obj Optional instance to populate.
     * @return {module:model/ApiResponse} The populated <code>ApiResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiResponse();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = MetaBasic.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [Result]);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/MetaBasic} meta
 */
ApiResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/Result>} results
 */
ApiResponse.prototype['results'] = undefined;

/**
 * @member {Array.<module:model/Error>} errors
 */
ApiResponse.prototype['errors'] = undefined;






export default ApiResponse;

