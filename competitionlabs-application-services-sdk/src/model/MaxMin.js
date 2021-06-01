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

/**
 * The MaxMin model module.
 * @module model/MaxMin
 * @version 3.0.1
 */
class MaxMin {
    /**
     * Constructs a new <code>MaxMin</code>.
     * @alias module:model/MaxMin
     * @param minimum {Number} Indication of a minimum amount
     */
    constructor(minimum) { 
        
        MaxMin.initialize(this, minimum);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, minimum) { 
        obj['minimum'] = minimum;
    }

    /**
     * Constructs a <code>MaxMin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MaxMin} obj Optional instance to populate.
     * @return {module:model/MaxMin} The populated <code>MaxMin</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MaxMin();

            if (data.hasOwnProperty('maximum')) {
                obj['maximum'] = ApiClient.convertToType(data['maximum'], 'Number');
            }
            if (data.hasOwnProperty('minimum')) {
                obj['minimum'] = ApiClient.convertToType(data['minimum'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Indication of a maximum amount
 * @member {Number} maximum
 */
MaxMin.prototype['maximum'] = undefined;

/**
 * Indication of a minimum amount
 * @member {Number} minimum
 */
MaxMin.prototype['minimum'] = undefined;






export default MaxMin;

