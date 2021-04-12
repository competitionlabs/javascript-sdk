/**
 * CompetitionLabs Application Services
 * CompetitionLabs Application Services are used to manage and configure spaces.
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
 * The DependantOn model module.
 * @module model/DependantOn
 * @version 1.0.0
 */
class DependantOn {
    /**
     * Constructs a new <code>DependantOn</code>.
     * @alias module:model/DependantOn
     */
    constructor() { 
        
        DependantOn.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DependantOn</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DependantOn} obj Optional instance to populate.
     * @return {module:model/DependantOn} The populated <code>DependantOn</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DependantOn();

            if (data.hasOwnProperty('must')) {
                obj['must'] = ApiClient.convertToType(data['must'], ['String']);
            }
            if (data.hasOwnProperty('mustNot')) {
                obj['mustNot'] = ApiClient.convertToType(data['mustNot'], ['String']);
            }
            if (data.hasOwnProperty('should')) {
                obj['should'] = ApiClient.convertToType(data['should'], ['String']);
            }
            if (data.hasOwnProperty('shouldMatchAtLeast')) {
                obj['shouldMatchAtLeast'] = ApiClient.convertToType(data['shouldMatchAtLeast'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * A rule indicating that Achievements for the achievemnt identifiers provided have to be included.
 * @member {Array.<String>} must
 */
DependantOn.prototype['must'] = undefined;

/**
 * A rule indicating that Achievements for the achievemnt identifiers provided will not be included.
 * @member {Array.<String>} mustNot
 */
DependantOn.prototype['mustNot'] = undefined;

/**
 * A rule indicating that Achievements for the achievemnt identifiers provided some of them have to be included. Dependancy on shouldMatchAtLeast parameter.
 * @member {Array.<String>} should
 */
DependantOn.prototype['should'] = undefined;

/**
 * Dependant on should. Triggered when 2 or more should parameters selected
 * @member {Number} shouldMatchAtLeast
 */
DependantOn.prototype['shouldMatchAtLeast'] = undefined;






export default DependantOn;

