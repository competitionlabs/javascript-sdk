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
 * The QuerySingle model module.
 * @module model/QuerySingle
 * @version 1.0.1
 */
class QuerySingle {
    /**
     * Constructs a new <code>QuerySingle</code>.
     * @alias module:model/QuerySingle
     * @param queryField {String} The key of the parameter that is being searched
     * @param queryValue {String} The value of the parameter that is being searched
     */
    constructor(queryField, queryValue) { 
        
        QuerySingle.initialize(this, queryField, queryValue);
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['queryField'] = null;
        obj['queryValue'] = null;

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

        obj["fields"]['queryField'] = { "type": 'String', "system": false };
        obj["fields"]['queryValue'] = { "type": 'String', "system": false };

        
        obj["requiredFields"]['queryField'] = { "type": 'String', "system": false };
        obj["requiredFields"]['queryValue'] = { "type": 'String', "system": false };

        return obj;
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, queryField, queryValue) { 
        obj['queryField'] = queryField;
        obj['queryValue'] = queryValue;
    }

    /**
     * Constructs a <code>QuerySingle</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QuerySingle} obj Optional instance to populate.
     * @return {module:model/QuerySingle} The populated <code>QuerySingle</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QuerySingle();

            if (data.hasOwnProperty('queryField')) {
                obj['queryField'] = ApiClient.convertToType(data['queryField'], 'String');
            }
            if (data.hasOwnProperty('queryValue')) {
                obj['queryValue'] = ApiClient.convertToType(data['queryValue'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The key of the parameter that is being searched
 * @member {String} queryField
 */
QuerySingle.prototype['queryField'] = undefined;

/**
 * The value of the parameter that is being searched
 * @member {String} queryValue
 */
QuerySingle.prototype['queryValue'] = undefined;






export default QuerySingle;

