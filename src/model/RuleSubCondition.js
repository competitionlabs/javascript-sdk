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
import SubRule from './SubRule';

/**
 * The RuleSubCondition model module.
 * @module model/RuleSubCondition
 * @version 1.0.1
 */
class RuleSubCondition {
    /**
     * Constructs a new <code>RuleSubCondition</code>.
     * @alias module:model/RuleSubCondition
     * @param matchCondition {module:model/MatchCondition} 
     * @param mustEvaluateTo {Boolean} The value the rule(s) must evaluate to for the rule to be satisfied
     * @param subRules {Array.<module:model/SubRule>} 
     */
    constructor(matchCondition, mustEvaluateTo, subRules) { 
        
        RuleSubCondition.initialize(this, matchCondition, mustEvaluateTo, subRules);
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['matchCondition'] = new MatchCondition().model();
        obj['mustEvaluateTo'] = null;
        obj['subRules'] = [new SubRule().model()];

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
        obj["fields"]['subRules'] = [new SubRule().modelMap()];

        
        obj["requiredFields"]['matchCondition'] = new MatchCondition().modelMap();
        obj["requiredFields"]['mustEvaluateTo'] = { "type": 'Boolean', "system": false };
        obj["requiredFields"]['subRules'] = [new SubRule().modelMap()];

        return obj;
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, matchCondition, mustEvaluateTo, subRules) { 
        obj['matchCondition'] = matchCondition;
        obj['mustEvaluateTo'] = mustEvaluateTo;
        obj['subRules'] = subRules;
    }

    /**
     * Constructs a <code>RuleSubCondition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RuleSubCondition} obj Optional instance to populate.
     * @return {module:model/RuleSubCondition} The populated <code>RuleSubCondition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RuleSubCondition();

            if (data.hasOwnProperty('matchCondition')) {
                obj['matchCondition'] = MatchCondition.constructFromObject(data['matchCondition']);
            }
            if (data.hasOwnProperty('mustEvaluateTo')) {
                obj['mustEvaluateTo'] = ApiClient.convertToType(data['mustEvaluateTo'], 'Boolean');
            }
            if (data.hasOwnProperty('subRules')) {
                obj['subRules'] = ApiClient.convertToType(data['subRules'], [SubRule]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/MatchCondition} matchCondition
 */
RuleSubCondition.prototype['matchCondition'] = undefined;

/**
 * The value the rule(s) must evaluate to for the rule to be satisfied
 * @member {Boolean} mustEvaluateTo
 * @default true
 */
RuleSubCondition.prototype['mustEvaluateTo'] = true;

/**
 * @member {Array.<module:model/SubRule>} subRules
 */
RuleSubCondition.prototype['subRules'] = undefined;






export default RuleSubCondition;

