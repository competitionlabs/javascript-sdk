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
import RuleDescriptorSubCondition from './RuleDescriptorSubCondition';

/**
 * The RuleDescriptorFactAllOf model module.
 * @module model/RuleDescriptorFactAllOf
 * @version 1.0.0
 */
class RuleDescriptorFactAllOf {
    /**
     * Constructs a new <code>RuleDescriptorFactAllOf</code>.
     * @alias module:model/RuleDescriptorFactAllOf
     * @param constraints {Array.<String>} The fields constraint
     * @param fact {String} The name of the fact
     */
    constructor(constraints, fact) { 
        
        RuleDescriptorFactAllOf.initialize(this, constraints, fact);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, constraints, fact) { 
        obj['constraints'] = constraints;
        obj['fact'] = fact;
    }

    /**
     * Constructs a <code>RuleDescriptorFactAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RuleDescriptorFactAllOf} obj Optional instance to populate.
     * @return {module:model/RuleDescriptorFactAllOf} The populated <code>RuleDescriptorFactAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RuleDescriptorFactAllOf();

            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
            if (data.hasOwnProperty('fact')) {
                obj['fact'] = ApiClient.convertToType(data['fact'], 'String');
            }
            if (data.hasOwnProperty('subConditions')) {
                obj['subConditions'] = ApiClient.convertToType(data['subConditions'], [RuleDescriptorSubCondition]);
            }
        }
        return obj;
    }


}

/**
 * The fields constraint
 * @member {Array.<String>} constraints
 */
RuleDescriptorFactAllOf.prototype['constraints'] = undefined;

/**
 * The name of the fact
 * @member {String} fact
 */
RuleDescriptorFactAllOf.prototype['fact'] = undefined;

/**
 * @member {Array.<module:model/RuleDescriptorSubCondition>} subConditions
 */
RuleDescriptorFactAllOf.prototype['subConditions'] = undefined;






export default RuleDescriptorFactAllOf;

