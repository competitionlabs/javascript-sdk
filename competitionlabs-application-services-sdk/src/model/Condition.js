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
import MatchCondition from './MatchCondition';
import Rule from './Rule';

/**
 * The Condition model module.
 * @module model/Condition
 * @version 1.0.5
 */
class Condition {
    /**
     * Constructs a new <code>Condition</code>.
     * @alias module:model/Condition
     * @param matchCondition {module:model/MatchCondition} 
     * @param mustEvaluateTo {Boolean} The value the rule(s) must evaluate to for the rule to be satisfied
     * @param rules {Array.<module:model/Rule>} 
     */
    constructor(matchCondition, mustEvaluateTo, rules) { 
        
        Condition.initialize(this, matchCondition, mustEvaluateTo, rules);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, matchCondition, mustEvaluateTo, rules) { 
        obj['matchCondition'] = matchCondition;
        obj['mustEvaluateTo'] = mustEvaluateTo;
        obj['rules'] = rules;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['matchCondition'] = new MatchCondition().model();
        obj['mustEvaluateTo'] = null;
        obj['rules'] = [new Rule().model()];

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

        obj["fields"]['matchCondition'] = new MatchCondition().modelMap();
        obj["fields"]['mustEvaluateTo'] = { "type": 'Boolean', "system": false };
        obj["fields"]['rules'] = [new Rule().modelMap()];

        
        obj["requiredFields"]['matchCondition'] = new MatchCondition().modelMap();
        obj["requiredFields"]['mustEvaluateTo'] = { "type": 'Boolean', "system": false };
        obj["requiredFields"]['rules'] = [new Rule().modelMap()];

        return obj;
    }

    /**
     * Constructs a <code>Condition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Condition} obj Optional instance to populate.
     * @return {module:model/Condition} The populated <code>Condition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Condition();

            if (data.hasOwnProperty('matchCondition')) {
                obj['matchCondition'] = MatchCondition.constructFromObject(data['matchCondition']);
            }
            if (data.hasOwnProperty('mustEvaluateTo')) {
                obj['mustEvaluateTo'] = ApiClient.convertToType(data['mustEvaluateTo'], 'Boolean');
            }
            if (data.hasOwnProperty('rules')) {
                obj['rules'] = ApiClient.convertToType(data['rules'], [Rule]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/MatchCondition} matchCondition
 */
Condition.prototype['matchCondition'] = undefined;

/**
 * The value the rule(s) must evaluate to for the rule to be satisfied
 * @member {Boolean} mustEvaluateTo
 */
Condition.prototype['mustEvaluateTo'] = undefined;

/**
 * @member {Array.<module:model/Rule>} rules
 */
Condition.prototype['rules'] = undefined;






export default Condition;

