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
import QueryMultiple from './QueryMultiple';
import QueryMultipleFields from './QueryMultipleFields';
import QuerySingle from './QuerySingle';
import QuerySortBy from './QuerySortBy';
import RangeQuery from './RangeQuery';

/**
 * The QueryRequest model module.
 * @module model/QueryRequest
 * @version 1.0.5
 */
class QueryRequest {
    /**
     * Constructs a new <code>QueryRequest</code>.
     * @alias module:model/QueryRequest
     */
    constructor() { 
        
        QueryRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['must'] = [new QueryMultiple().model()];
        obj['mustNot'] = [new QueryMultiple().model()];
        obj['should'] = [new QueryMultiple().model()];
        obj['gte'] = [new QuerySingle().model()];
        obj['lte'] = [new QuerySingle().model()];
        obj['gt'] = [new QuerySingle().model()];
        obj['lt'] = [new QuerySingle().model()];
        obj['range'] = [new RangeQuery().model()];
        obj['sortBy'] = [new QuerySortBy().model()];
        obj['multiFields'] = [new QueryMultipleFields().model()];
        obj['includeFields'] = [null];
        obj['hasValue'] = [null];
        obj['hasNoValue'] = [null];
        obj['shouldMatch'] = null;
        obj['skip'] = null;
        obj['limit'] = null;
        obj['isCountQuery'] = null;

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

        obj["fields"]['must'] = [new QueryMultiple().modelMap()];
        obj["fields"]['mustNot'] = [new QueryMultiple().modelMap()];
        obj["fields"]['should'] = [new QueryMultiple().modelMap()];
        obj["fields"]['gte'] = [new QuerySingle().modelMap()];
        obj["fields"]['lte'] = [new QuerySingle().modelMap()];
        obj["fields"]['gt'] = [new QuerySingle().modelMap()];
        obj["fields"]['lt'] = [new QuerySingle().modelMap()];
        obj["fields"]['range'] = [new RangeQuery().modelMap()];
        obj["fields"]['sortBy'] = [new QuerySortBy().modelMap()];
        obj["fields"]['multiFields'] = [new QueryMultipleFields().modelMap()];
        obj["fields"]['includeFields'] = [{ "type": 'String', "system": false }];
        obj["fields"]['hasValue'] = [{ "type": 'String', "system": false }];
        obj["fields"]['hasNoValue'] = [{ "type": 'String', "system": false }];
        obj["fields"]['shouldMatch'] = { "type": 'Number', "system": false };
        obj["fields"]['skip'] = { "type": 'Number', "system": false };
        obj["fields"]['limit'] = { "type": 'Number', "system": false };
        obj["fields"]['isCountQuery'] = { "type": 'Boolean', "system": false };

        

        return obj;
    }

    /**
     * Constructs a <code>QueryRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QueryRequest} obj Optional instance to populate.
     * @return {module:model/QueryRequest} The populated <code>QueryRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QueryRequest();

            if (data.hasOwnProperty('must')) {
                obj['must'] = ApiClient.convertToType(data['must'], [QueryMultiple]);
            }
            if (data.hasOwnProperty('mustNot')) {
                obj['mustNot'] = ApiClient.convertToType(data['mustNot'], [QueryMultiple]);
            }
            if (data.hasOwnProperty('should')) {
                obj['should'] = ApiClient.convertToType(data['should'], [QueryMultiple]);
            }
            if (data.hasOwnProperty('gte')) {
                obj['gte'] = ApiClient.convertToType(data['gte'], [QuerySingle]);
            }
            if (data.hasOwnProperty('lte')) {
                obj['lte'] = ApiClient.convertToType(data['lte'], [QuerySingle]);
            }
            if (data.hasOwnProperty('gt')) {
                obj['gt'] = ApiClient.convertToType(data['gt'], [QuerySingle]);
            }
            if (data.hasOwnProperty('lt')) {
                obj['lt'] = ApiClient.convertToType(data['lt'], [QuerySingle]);
            }
            if (data.hasOwnProperty('range')) {
                obj['range'] = ApiClient.convertToType(data['range'], [RangeQuery]);
            }
            if (data.hasOwnProperty('sortBy')) {
                obj['sortBy'] = ApiClient.convertToType(data['sortBy'], [QuerySortBy]);
            }
            if (data.hasOwnProperty('multiFields')) {
                obj['multiFields'] = ApiClient.convertToType(data['multiFields'], [QueryMultipleFields]);
            }
            if (data.hasOwnProperty('includeFields')) {
                obj['includeFields'] = ApiClient.convertToType(data['includeFields'], ['String']);
            }
            if (data.hasOwnProperty('hasValue')) {
                obj['hasValue'] = ApiClient.convertToType(data['hasValue'], ['String']);
            }
            if (data.hasOwnProperty('hasNoValue')) {
                obj['hasNoValue'] = ApiClient.convertToType(data['hasNoValue'], ['String']);
            }
            if (data.hasOwnProperty('shouldMatch')) {
                obj['shouldMatch'] = ApiClient.convertToType(data['shouldMatch'], 'Number');
            }
            if (data.hasOwnProperty('skip')) {
                obj['skip'] = ApiClient.convertToType(data['skip'], 'Number');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('isCountQuery')) {
                obj['isCountQuery'] = ApiClient.convertToType(data['isCountQuery'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/QueryMultiple>} must
 */
QueryRequest.prototype['must'] = undefined;

/**
 * @member {Array.<module:model/QueryMultiple>} mustNot
 */
QueryRequest.prototype['mustNot'] = undefined;

/**
 * @member {Array.<module:model/QueryMultiple>} should
 */
QueryRequest.prototype['should'] = undefined;

/**
 * @member {Array.<module:model/QuerySingle>} gte
 */
QueryRequest.prototype['gte'] = undefined;

/**
 * @member {Array.<module:model/QuerySingle>} lte
 */
QueryRequest.prototype['lte'] = undefined;

/**
 * @member {Array.<module:model/QuerySingle>} gt
 */
QueryRequest.prototype['gt'] = undefined;

/**
 * @member {Array.<module:model/QuerySingle>} lt
 */
QueryRequest.prototype['lt'] = undefined;

/**
 * @member {Array.<module:model/RangeQuery>} range
 */
QueryRequest.prototype['range'] = undefined;

/**
 * @member {Array.<module:model/QuerySortBy>} sortBy
 */
QueryRequest.prototype['sortBy'] = undefined;

/**
 * @member {Array.<module:model/QueryMultipleFields>} multiFields
 */
QueryRequest.prototype['multiFields'] = undefined;

/**
 * A list of parameters that need to be included in the response
 * @member {Array.<String>} includeFields
 */
QueryRequest.prototype['includeFields'] = undefined;

/**
 * This will match fields which do not have null values
 * @member {Array.<String>} hasValue
 */
QueryRequest.prototype['hasValue'] = undefined;

/**
 * This will match fields which have null values
 * @member {Array.<String>} hasNoValue
 */
QueryRequest.prototype['hasNoValue'] = undefined;

/**
 * How many should properties need to be displayed
 * @member {Number} shouldMatch
 */
QueryRequest.prototype['shouldMatch'] = undefined;

/**
 * How many response objects will be skipped for preview
 * @member {Number} skip
 */
QueryRequest.prototype['skip'] = undefined;

/**
 * How many response objects will be displayed
 * @member {Number} limit
 */
QueryRequest.prototype['limit'] = undefined;

/**
 * Whether this query requires a count of records found only
 * @member {Boolean} isCountQuery
 */
QueryRequest.prototype['isCountQuery'] = undefined;






export default QueryRequest;

