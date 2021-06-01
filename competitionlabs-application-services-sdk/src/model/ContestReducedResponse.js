/**
 * CompetitionLabs Admin Services
 * CompetitionLabs Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.1
 * Contact: support@competitionlabs.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ContestReduced from './ContestReduced';
import Error from './Error';
import MetaExtended from './MetaExtended';

/**
 * The ContestReducedResponse model module.
 * @module model/ContestReducedResponse
 * @version 3.0.1
 */
class ContestReducedResponse {
    /**
     * Constructs a new <code>ContestReducedResponse</code>.
     * @alias module:model/ContestReducedResponse
     * @param meta {module:model/MetaExtended} 
     */
    constructor(meta) { 
        
        ContestReducedResponse.initialize(this, meta);
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
     * Constructs a <code>ContestReducedResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContestReducedResponse} obj Optional instance to populate.
     * @return {module:model/ContestReducedResponse} The populated <code>ContestReducedResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContestReducedResponse();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = MetaExtended.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [ContestReduced]);
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
ContestReducedResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/ContestReduced>} results
 */
ContestReducedResponse.prototype['results'] = undefined;

/**
 * @member {Array.<module:model/Error>} errors
 */
ContestReducedResponse.prototype['errors'] = undefined;






export default ContestReducedResponse;

