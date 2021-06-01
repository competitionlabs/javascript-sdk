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
import MatchCondition from './MatchCondition';
import OnRuleSetMatchTrigger from './OnRuleSetMatchTrigger';
import RuleDescriptorFact from './RuleDescriptorFact';

/**
 * The RuleDescriptorAction model module.
 * @module model/RuleDescriptorAction
 * @version 3.0.1
 */
class RuleDescriptorAction {
    /**
     * Constructs a new <code>RuleDescriptorAction</code>.
     * @alias module:model/RuleDescriptorAction
     * @param constraints {Array.<String>} The fields constraint
     * @param name {String} The rules name
     * @param operatability {module:model/MatchCondition} 
     * @param facts {Array.<module:model/RuleDescriptorFact>} 
     */
    constructor(constraints, name, operatability, facts) { 
        
        RuleDescriptorAction.initialize(this, constraints, name, operatability, facts);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, constraints, name, operatability, facts) { 
        obj['constraints'] = constraints;
        obj['name'] = name;
        obj['operatability'] = operatability;
        obj['facts'] = facts;
    }

    /**
     * Constructs a <code>RuleDescriptorAction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RuleDescriptorAction} obj Optional instance to populate.
     * @return {module:model/RuleDescriptorAction} The populated <code>RuleDescriptorAction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RuleDescriptorAction();

            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('matchCondition')) {
                obj['matchCondition'] = ApiClient.convertToType(data['matchCondition'], 'String');
            }
            if (data.hasOwnProperty('operatability')) {
                obj['operatability'] = MatchCondition.constructFromObject(data['operatability']);
            }
            if (data.hasOwnProperty('onRuleSetMatchTriggers')) {
                obj['onRuleSetMatchTriggers'] = ApiClient.convertToType(data['onRuleSetMatchTriggers'], [OnRuleSetMatchTrigger]);
            }
            if (data.hasOwnProperty('facts')) {
                obj['facts'] = ApiClient.convertToType(data['facts'], [RuleDescriptorFact]);
            }
        }
        return obj;
    }


}

/**
 * The fields constraint
 * @member {Array.<String>} constraints
 */
RuleDescriptorAction.prototype['constraints'] = undefined;

/**
 * The rules name
 * @member {String} name
 */
RuleDescriptorAction.prototype['name'] = undefined;

/**
 * The rules description
 * @member {String} description
 */
RuleDescriptorAction.prototype['description'] = undefined;

/**
 * The rules action
 * @member {String} matchCondition
 */
RuleDescriptorAction.prototype['matchCondition'] = undefined;

/**
 * @member {module:model/MatchCondition} operatability
 */
RuleDescriptorAction.prototype['operatability'] = undefined;

/**
 * @member {Array.<module:model/OnRuleSetMatchTrigger>} onRuleSetMatchTriggers
 */
RuleDescriptorAction.prototype['onRuleSetMatchTriggers'] = undefined;

/**
 * @member {Array.<module:model/RuleDescriptorFact>} facts
 */
RuleDescriptorAction.prototype['facts'] = undefined;






export default RuleDescriptorAction;

