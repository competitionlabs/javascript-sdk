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

/**
 * The ActionTypeAdjustmentFactor model module.
 * @module model/ActionTypeAdjustmentFactor
 * @version 1.0.1
 */
class ActionTypeAdjustmentFactor {
    /**
     * Constructs a new <code>ActionTypeAdjustmentFactor</code>.
     * @alias module:model/ActionTypeAdjustmentFactor
     * @param adjustmentFactor {Number} The multiplier to apply to source values received for this product events
     * @param actionTypeId {String} A unique system generated identifier for Action Type
     */
    constructor(adjustmentFactor, actionTypeId) { 
        
        ActionTypeAdjustmentFactor.initialize(this, adjustmentFactor, actionTypeId);
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['adjustmentFactor'] = null;
        obj['actionTypeId'] = null;

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

        obj["fields"]['adjustmentFactor'] = { "type": 'Number', "system": false };
        obj["fields"]['actionTypeId'] = { "type": 'String', "system": false };

        
        obj["requiredFields"]['adjustmentFactor'] = { "type": 'Number', "system": false };
        obj["requiredFields"]['actionTypeId'] = { "type": 'String', "system": false };

        return obj;
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, adjustmentFactor, actionTypeId) { 
        obj['adjustmentFactor'] = adjustmentFactor;
        obj['actionTypeId'] = actionTypeId;
    }

    /**
     * Constructs a <code>ActionTypeAdjustmentFactor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionTypeAdjustmentFactor} obj Optional instance to populate.
     * @return {module:model/ActionTypeAdjustmentFactor} The populated <code>ActionTypeAdjustmentFactor</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActionTypeAdjustmentFactor();

            if (data.hasOwnProperty('adjustmentFactor')) {
                obj['adjustmentFactor'] = ApiClient.convertToType(data['adjustmentFactor'], 'Number');
            }
            if (data.hasOwnProperty('actionTypeId')) {
                obj['actionTypeId'] = ApiClient.convertToType(data['actionTypeId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The multiplier to apply to source values received for this product events
 * @member {Number} adjustmentFactor
 */
ActionTypeAdjustmentFactor.prototype['adjustmentFactor'] = undefined;

/**
 * A unique system generated identifier for Action Type
 * @member {String} actionTypeId
 */
ActionTypeAdjustmentFactor.prototype['actionTypeId'] = undefined;






export default ActionTypeAdjustmentFactor;
