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
import RuleSubCondition from './RuleSubCondition';

/**
 * The Rule model module.
 * @module model/Rule
 * @version 1.0.4
 */
class Rule {
    /**
     * Constructs a new <code>Rule</code>.
     * @alias module:model/Rule
     * @param fact {String} Fact for this sub rule. Reference of Fact schemma
     * @param operator {String} EXAMPLES: * \"==\" : is * \">=\" : is equal to or more than * \">\" : is more than * \"<=\" : is less than or equal to * \"<\" : is less than * \"\" : are not all * \"before\" : is before * \"after\" : is after * \"on.or.after\" : is or or after * \"on.or.before\" : is on or before 
     * @param constant {String} A rules value that defines the fact
     * @param id {String} Unique system identifier of a Main Rule
     * @param subConditions {Array.<module:model/RuleSubCondition>} 
     */
    constructor(fact, operator, constant, id, subConditions) { 
        
        Rule.initialize(this, fact, operator, constant, id, subConditions);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fact, operator, constant, id, subConditions) { 
        obj['fact'] = fact;
        obj['operator'] = operator;
        obj['constant'] = constant;
        obj['id'] = id;
        obj['subConditions'] = subConditions;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['fact'];
        obj['operator'];
        obj['constant'];
        obj['id'];
        obj['subConditions'];

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

        obj["fields"]['fact'];
        obj["fields"]['operator'];
        obj["fields"]['constant'];
        obj["fields"]['id'];
        obj["fields"]['subConditions'];

        
        obj["requiredFields"]['fact'];
        obj["requiredFields"]['operator'];
        obj["requiredFields"]['constant'];
        obj["requiredFields"]['id'];
        obj["requiredFields"]['subConditions'];

        return obj;
    }

    /**
     * Constructs a <code>Rule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Rule} obj Optional instance to populate.
     * @return {module:model/Rule} The populated <code>Rule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Rule();

            if (data.hasOwnProperty('fact')) {
                obj['fact'] = ApiClient.convertToType(data['fact'], 'String');
            }
            if (data.hasOwnProperty('operator')) {
                obj['operator'] = ApiClient.convertToType(data['operator'], 'String');
            }
            if (data.hasOwnProperty('constant')) {
                obj['constant'] = ApiClient.convertToType(data['constant'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('subConditions')) {
                obj['subConditions'] = ApiClient.convertToType(data['subConditions'], [RuleSubCondition]);
            }
        }
        return obj;
    }


}

/**
 * Fact for this sub rule. Reference of Fact schemma
 * @member {String} fact
 */
Rule.prototype['fact'] = undefined;

/**
 * EXAMPLES: * \"==\" : is * \">=\" : is equal to or more than * \">\" : is more than * \"<=\" : is less than or equal to * \"<\" : is less than * \"\" : are not all * \"before\" : is before * \"after\" : is after * \"on.or.after\" : is or or after * \"on.or.before\" : is on or before 
 * @member {String} operator
 */
Rule.prototype['operator'] = undefined;

/**
 * A rules value that defines the fact
 * @member {String} constant
 */
Rule.prototype['constant'] = undefined;

/**
 * Unique system identifier of a Main Rule
 * @member {String} id
 */
Rule.prototype['id'] = undefined;

/**
 * @member {Array.<module:model/RuleSubCondition>} subConditions
 */
Rule.prototype['subConditions'] = undefined;






export default Rule;

