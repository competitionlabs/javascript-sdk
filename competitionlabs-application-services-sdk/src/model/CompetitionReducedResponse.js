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
import CompetitionReduced from './CompetitionReduced';
import Error from './Error';
import MetaExtended from './MetaExtended';

/**
 * The CompetitionReducedResponse model module.
 * @module model/CompetitionReducedResponse
 * @version 1.0.1
 */
class CompetitionReducedResponse {
    /**
     * Constructs a new <code>CompetitionReducedResponse</code>.
     * @alias module:model/CompetitionReducedResponse
     * @param meta {module:model/MetaExtended} 
     */
    constructor(meta) { 
        
        CompetitionReducedResponse.initialize(this, meta);
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['meta'] = new MetaExtended().model();
        obj['results'] = [new CompetitionReduced().model()];
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
        obj["fields"]['results'] = [new CompetitionReduced().modelMap()];
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
     * Constructs a <code>CompetitionReducedResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompetitionReducedResponse} obj Optional instance to populate.
     * @return {module:model/CompetitionReducedResponse} The populated <code>CompetitionReducedResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CompetitionReducedResponse();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = MetaExtended.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [CompetitionReduced]);
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
CompetitionReducedResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/CompetitionReduced>} results
 */
CompetitionReducedResponse.prototype['results'] = undefined;

/**
 * @member {Array.<module:model/Error>} errors
 */
CompetitionReducedResponse.prototype['errors'] = undefined;






export default CompetitionReducedResponse;
