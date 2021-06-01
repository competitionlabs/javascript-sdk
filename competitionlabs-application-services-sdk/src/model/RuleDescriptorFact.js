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
import FactDefault from './FactDefault';
import Macro from './Macro';
import RuleDescriptorFactAllOf from './RuleDescriptorFactAllOf';
import RuleDescriptorSubCondition from './RuleDescriptorSubCondition';

/**
 * The RuleDescriptorFact model module.
 * @module model/RuleDescriptorFact
 * @version 3.0.1
 */
class RuleDescriptorFact {
    /**
     * Constructs a new <code>RuleDescriptorFact</code>.
     * @alias module:model/RuleDescriptorFact
     * @implements module:model/FactDefault
     * @implements module:model/RuleDescriptorFactAllOf
     * @param operators {Array.<String>} The operators supported by the fact
     * @param constantType {String} The data type of the constant
     * @param constantExample {String} Example of the constant
     * @param constraints {Array.<String>} The fields constraint
     * @param fact {String} The name of the fact
     */
    constructor(operators, constantType, constantExample, constraints, fact) { 
        FactDefault.initialize(this, operators, constantType, constantExample);RuleDescriptorFactAllOf.initialize(this, constraints, fact);
        RuleDescriptorFact.initialize(this, operators, constantType, constantExample, constraints, fact);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, operators, constantType, constantExample, constraints, fact) { 
        obj['operators'] = operators;
        obj['constantType'] = constantType;
        obj['constantExample'] = constantExample;
        obj['constraints'] = constraints;
        obj['fact'] = fact;
    }

    /**
     * Constructs a <code>RuleDescriptorFact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RuleDescriptorFact} obj Optional instance to populate.
     * @return {module:model/RuleDescriptorFact} The populated <code>RuleDescriptorFact</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RuleDescriptorFact();
            FactDefault.constructFromObject(data, obj);
            RuleDescriptorFactAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('operators')) {
                obj['operators'] = ApiClient.convertToType(data['operators'], ['String']);
            }
            if (data.hasOwnProperty('constantType')) {
                obj['constantType'] = ApiClient.convertToType(data['constantType'], 'String');
            }
            if (data.hasOwnProperty('constantExample')) {
                obj['constantExample'] = ApiClient.convertToType(data['constantExample'], 'String');
            }
            if (data.hasOwnProperty('defaultVale')) {
                obj['defaultVale'] = ApiClient.convertToType(data['defaultVale'], 'String');
            }
            if (data.hasOwnProperty('macros')) {
                obj['macros'] = ApiClient.convertToType(data['macros'], [Macro]);
            }
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
 * The operators supported by the fact
 * @member {Array.<String>} operators
 */
RuleDescriptorFact.prototype['operators'] = undefined;

/**
 * The data type of the constant
 * @member {String} constantType
 */
RuleDescriptorFact.prototype['constantType'] = undefined;

/**
 * Example of the constant
 * @member {String} constantExample
 */
RuleDescriptorFact.prototype['constantExample'] = undefined;

/**
 * The default value of the constant for the fact
 * @member {String} defaultVale
 */
RuleDescriptorFact.prototype['defaultVale'] = undefined;

/**
 * @member {Array.<module:model/Macro>} macros
 */
RuleDescriptorFact.prototype['macros'] = undefined;

/**
 * The fields constraint
 * @member {Array.<String>} constraints
 */
RuleDescriptorFact.prototype['constraints'] = undefined;

/**
 * The name of the fact
 * @member {String} fact
 */
RuleDescriptorFact.prototype['fact'] = undefined;

/**
 * @member {Array.<module:model/RuleDescriptorSubCondition>} subConditions
 */
RuleDescriptorFact.prototype['subConditions'] = undefined;


// Implement FactDefault interface:
/**
 * The operators supported by the fact
 * @member {Array.<String>} operators
 */
FactDefault.prototype['operators'] = undefined;
/**
 * The data type of the constant
 * @member {String} constantType
 */
FactDefault.prototype['constantType'] = undefined;
/**
 * Example of the constant
 * @member {String} constantExample
 */
FactDefault.prototype['constantExample'] = undefined;
/**
 * The default value of the constant for the fact
 * @member {String} defaultVale
 */
FactDefault.prototype['defaultVale'] = undefined;
/**
 * @member {Array.<module:model/Macro>} macros
 */
FactDefault.prototype['macros'] = undefined;
// Implement RuleDescriptorFactAllOf interface:
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




export default RuleDescriptorFact;

