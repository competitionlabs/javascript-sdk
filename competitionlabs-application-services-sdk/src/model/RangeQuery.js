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
 * The RangeQuery model module.
 * @module model/RangeQuery
 * @version 1.0.5
 */
class RangeQuery {
    /**
     * Constructs a new <code>RangeQuery</code>.
     * @alias module:model/RangeQuery
     * @param queryField {String} The key of the parameter that is being searched
     * @param gt {String} Greater than value
     * @param lt {String} Less than value
     */
    constructor(queryField, gt, lt) { 
        
        RangeQuery.initialize(this, queryField, gt, lt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, queryField, gt, lt) { 
        obj['queryField'] = queryField;
        obj['gt'] = gt;
        obj['lt'] = lt;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['queryField'] = null;
        obj['gt'] = null;
        obj['lt'] = null;
        obj['includeBounds'] = null;

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
        obj["fields"]['gt'] = { "type": 'String', "system": false };
        obj["fields"]['lt'] = { "type": 'String', "system": false };
        obj["fields"]['includeBounds'] = { "type": 'Boolean', "system": false };

        
        obj["requiredFields"]['queryField'] = { "type": 'String', "system": false };
        obj["requiredFields"]['gt'] = { "type": 'String', "system": false };
        obj["requiredFields"]['lt'] = { "type": 'String', "system": false };

        return obj;
    }

    /**
     * Constructs a <code>RangeQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RangeQuery} obj Optional instance to populate.
     * @return {module:model/RangeQuery} The populated <code>RangeQuery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RangeQuery();

            if (data.hasOwnProperty('queryField')) {
                obj['queryField'] = ApiClient.convertToType(data['queryField'], 'String');
            }
            if (data.hasOwnProperty('gt')) {
                obj['gt'] = ApiClient.convertToType(data['gt'], 'String');
            }
            if (data.hasOwnProperty('lt')) {
                obj['lt'] = ApiClient.convertToType(data['lt'], 'String');
            }
            if (data.hasOwnProperty('includeBounds')) {
                obj['includeBounds'] = ApiClient.convertToType(data['includeBounds'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The key of the parameter that is being searched
 * @member {String} queryField
 */
RangeQuery.prototype['queryField'] = undefined;

/**
 * Greater than value
 * @member {String} gt
 */
RangeQuery.prototype['gt'] = undefined;

/**
 * Less than value
 * @member {String} lt
 */
RangeQuery.prototype['lt'] = undefined;

/**
 * Determined whether to include bounds, to treat it as greater than equal or less than equal
 * @member {Boolean} includeBounds
 */
RangeQuery.prototype['includeBounds'] = undefined;






export default RangeQuery;

