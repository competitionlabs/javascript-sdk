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
import RuleDescriptorAction from './RuleDescriptorAction';
import RuleScope from './RuleScope';

/**
 * The RuleDescriptor model module.
 * @module model/RuleDescriptor
 * @version 1.0.0
 */
class RuleDescriptor {
    /**
     * Constructs a new <code>RuleDescriptor</code>.
     * @alias module:model/RuleDescriptor
     * @param ruleScope {module:model/RuleScope} 
     * @param actions {Array.<module:model/RuleDescriptorAction>} 
     */
    constructor(ruleScope, actions) { 
        
        RuleDescriptor.initialize(this, ruleScope, actions);
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['ruleScope'] = new RuleScope().model();
        obj['actions'] = [new RuleDescriptorAction().model()];

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

        obj["fields"]['ruleScope'] = new RuleScope().modelMap();
        obj["fields"]['actions'] = [new RuleDescriptorAction().modelMap()];

        
        obj["requiredFields"]['ruleScope'] = new RuleScope().modelMap();
        obj["requiredFields"]['actions'] = [new RuleDescriptorAction().modelMap()];

        return obj;
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, ruleScope, actions) { 
        obj['ruleScope'] = ruleScope;
        obj['actions'] = actions;
    }

    /**
     * Constructs a <code>RuleDescriptor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RuleDescriptor} obj Optional instance to populate.
     * @return {module:model/RuleDescriptor} The populated <code>RuleDescriptor</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RuleDescriptor();

            if (data.hasOwnProperty('ruleScope')) {
                obj['ruleScope'] = RuleScope.constructFromObject(data['ruleScope']);
            }
            if (data.hasOwnProperty('actions')) {
                obj['actions'] = ApiClient.convertToType(data['actions'], [RuleDescriptorAction]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/RuleScope} ruleScope
 */
RuleDescriptor.prototype['ruleScope'] = undefined;

/**
 * @member {Array.<module:model/RuleDescriptorAction>} actions
 */
RuleDescriptor.prototype['actions'] = undefined;






export default RuleDescriptor;
