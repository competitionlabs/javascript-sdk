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
import Condition from './Condition';
import RuleScope from './RuleScope';

/**
 * The RuleSetAllOf model module.
 * @module model/RuleSetAllOf
 * @version 3.0.1
 */
class RuleSetAllOf {
    /**
     * Constructs a new <code>RuleSetAllOf</code>.
     * @alias module:model/RuleSetAllOf
     * @param priority {Number} Indicates which rule is prioritised first so that the rules work in a sequence
     * @param scope {module:model/RuleScope} 
     * @param action {String} Action of this ruleset. Reference of Action schemma
     * @param conditions {Array.<module:model/Condition>} 
     */
    constructor(priority, scope, action, conditions) { 
        
        RuleSetAllOf.initialize(this, priority, scope, action, conditions);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, priority, scope, action, conditions) { 
        obj['priority'] = priority;
        obj['scope'] = scope;
        obj['action'] = action;
        obj['conditions'] = conditions;
    }

    /**
     * Constructs a <code>RuleSetAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RuleSetAllOf} obj Optional instance to populate.
     * @return {module:model/RuleSetAllOf} The populated <code>RuleSetAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RuleSetAllOf();

            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'Number');
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = RuleScope.constructFromObject(data['scope']);
            }
            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('conditions')) {
                obj['conditions'] = ApiClient.convertToType(data['conditions'], [Condition]);
            }
            if (data.hasOwnProperty('onMatchThen')) {
                obj['onMatchThen'] = ApiClient.convertToType(data['onMatchThen'], 'String');
            }
            if (data.hasOwnProperty('onMatchConstant')) {
                obj['onMatchConstant'] = ApiClient.convertToType(data['onMatchConstant'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Indicates which rule is prioritised first so that the rules work in a sequence
 * @member {Number} priority
 */
RuleSetAllOf.prototype['priority'] = undefined;

/**
 * @member {module:model/RuleScope} scope
 */
RuleSetAllOf.prototype['scope'] = undefined;

/**
 * Action of this ruleset. Reference of Action schemma
 * @member {String} action
 */
RuleSetAllOf.prototype['action'] = undefined;

/**
 * @member {Array.<module:model/Condition>} conditions
 */
RuleSetAllOf.prototype['conditions'] = undefined;

/**
 * Only Required when \"Custom points\" action is selected Allowed values: * add: Add points when the rules are met * subtract: Subtract points when the rules are met * multiply.points: Multiply event points by a value that will be selected * multiply.source: Use my adjustment factor that overwites the existing product adjustment factor 
 * @member {String} onMatchThen
 */
RuleSetAllOf.prototype['onMatchThen'] = undefined;

/**
 * Only Required when \"Custom points\" action is selected. It’s a value that represent how many points will be added, subtracted or multiplied
 * @member {String} onMatchConstant
 */
RuleSetAllOf.prototype['onMatchConstant'] = undefined;






export default RuleSetAllOf;

