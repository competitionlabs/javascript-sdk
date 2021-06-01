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
 * The QueryMultipleFields model module.
 * @module model/QueryMultipleFields
 * @version 3.0.1
 */
class QueryMultipleFields {
    /**
     * Constructs a new <code>QueryMultipleFields</code>.
     * @alias module:model/QueryMultipleFields
     * @param queryFields {Array.<String>} Multiple fields to be included in search for the given value
     * @param queryValue {String} The value to search for across given fields.
     */
    constructor(queryFields, queryValue) { 
        
        QueryMultipleFields.initialize(this, queryFields, queryValue);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, queryFields, queryValue) { 
        obj['queryFields'] = queryFields;
        obj['queryValue'] = queryValue;
    }

    /**
     * Constructs a <code>QueryMultipleFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QueryMultipleFields} obj Optional instance to populate.
     * @return {module:model/QueryMultipleFields} The populated <code>QueryMultipleFields</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QueryMultipleFields();

            if (data.hasOwnProperty('queryFields')) {
                obj['queryFields'] = ApiClient.convertToType(data['queryFields'], ['String']);
            }
            if (data.hasOwnProperty('queryValue')) {
                obj['queryValue'] = ApiClient.convertToType(data['queryValue'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Multiple fields to be included in search for the given value
 * @member {Array.<String>} queryFields
 */
QueryMultipleFields.prototype['queryFields'] = undefined;

/**
 * The value to search for across given fields.
 * @member {String} queryValue
 */
QueryMultipleFields.prototype['queryValue'] = undefined;






export default QueryMultipleFields;

