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
import Metadata from './Metadata';
import UnitOfMeasureType from './UnitOfMeasureType';

/**
 * The UpdateActionTypeRequestAllOf model module.
 * @module model/UpdateActionTypeRequestAllOf
 * @version 1.0.0
 */
class UpdateActionTypeRequestAllOf {
    /**
     * Constructs a new <code>UpdateActionTypeRequestAllOf</code>.
     * @alias module:model/UpdateActionTypeRequestAllOf
     */
    constructor() { 
        
        UpdateActionTypeRequestAllOf.initialize(this);
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['name'] = null;
        obj['description'] = null;
        obj['unitOfMeasureType'] = new UnitOfMeasureType().model();
        obj['metadata'] = [new Metadata().model()];

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

        obj["fields"]['name'] = { "type": 'String' };
        obj["fields"]['description'] = { "type": 'String' };
        obj["fields"]['unitOfMeasureType'] = new UnitOfMeasureType().modelMap();
        obj["fields"]['metadata'] = [new Metadata().modelMap()];

        

        return obj;
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateActionTypeRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateActionTypeRequestAllOf} obj Optional instance to populate.
     * @return {module:model/UpdateActionTypeRequestAllOf} The populated <code>UpdateActionTypeRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateActionTypeRequestAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('unitOfMeasureType')) {
                obj['unitOfMeasureType'] = UnitOfMeasureType.constructFromObject(data['unitOfMeasureType']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], [Metadata]);
            }
        }
        return obj;
    }


}

/**
 * The name of the Action Helper
 * @member {String} name
 */
UpdateActionTypeRequestAllOf.prototype['name'] = undefined;

/**
 * The description of the rule action helper for your reference
 * @member {String} description
 */
UpdateActionTypeRequestAllOf.prototype['description'] = undefined;

/**
 * @member {module:model/UnitOfMeasureType} unitOfMeasureType
 */
UpdateActionTypeRequestAllOf.prototype['unitOfMeasureType'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
UpdateActionTypeRequestAllOf.prototype['metadata'] = undefined;






export default UpdateActionTypeRequestAllOf;
