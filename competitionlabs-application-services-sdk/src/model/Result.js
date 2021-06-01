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
import Relation from './Relation';

/**
 * The Result model module.
 * @module model/Result
 * @version 3.0.1
 */
class Result {
    /**
     * Constructs a new <code>Result</code>.
     * @alias module:model/Result
     * @param id {String} A unique system identifier of an updated record
     * @param result {String} The response of an action Possible values:   * created: Will be returned for a POST action to create entity   * updated: Will be returned for a PUT action to update entity   * deleted: Will be returned for a DELETE action on an entity 
     */
    constructor(id, result) { 
        
        Result.initialize(this, id, result);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, result) { 
        obj['id'] = id;
        obj['result'] = result;
    }

    /**
     * Constructs a <code>Result</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Result} obj Optional instance to populate.
     * @return {module:model/Result} The populated <code>Result</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Result();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('externalReference')) {
                obj['externalReference'] = ApiClient.convertToType(data['externalReference'], 'String');
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], 'String');
            }
            if (data.hasOwnProperty('relations')) {
                obj['relations'] = ApiClient.convertToType(data['relations'], [Relation]);
            }
        }
        return obj;
    }


}

/**
 * A unique system identifier of an updated record
 * @member {String} id
 */
Result.prototype['id'] = undefined;

/**
 * A reference id from external system
 * @member {String} externalReference
 */
Result.prototype['externalReference'] = undefined;

/**
 * The response of an action Possible values:   * created: Will be returned for a POST action to create entity   * updated: Will be returned for a PUT action to update entity   * deleted: Will be returned for a DELETE action on an entity 
 * @member {String} result
 */
Result.prototype['result'] = undefined;

/**
 * @member {Array.<module:model/Relation>} relations
 */
Result.prototype['relations'] = undefined;






export default Result;

