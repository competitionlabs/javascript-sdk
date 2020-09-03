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
 * The UpdateRewardTypeRequestAllOf model module.
 * @module model/UpdateRewardTypeRequestAllOf
 * @version 1.0.1
 */
class UpdateRewardTypeRequestAllOf {
    /**
     * Constructs a new <code>UpdateRewardTypeRequestAllOf</code>.
     * @alias module:model/UpdateRewardTypeRequestAllOf
     */
    constructor() { 
        
        UpdateRewardTypeRequestAllOf.initialize(this);
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
        obj['providers'] = null;

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

        obj["fields"]['name'] = { "type": 'String', "system": false };
        obj["fields"]['description'] = { "type": 'String', "system": false };
        obj["fields"]['unitOfMeasureType'] = new UnitOfMeasureType().modelMap();
        obj["fields"]['metadata'] = [new Metadata().modelMap()];
        obj["fields"]['providers'] = { "type": 'String', "system": false };

        

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
     * Constructs a <code>UpdateRewardTypeRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateRewardTypeRequestAllOf} obj Optional instance to populate.
     * @return {module:model/UpdateRewardTypeRequestAllOf} The populated <code>UpdateRewardTypeRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateRewardTypeRequestAllOf();

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
            if (data.hasOwnProperty('providers')) {
                obj['providers'] = ApiClient.convertToType(data['providers'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name of the Reward type
 * @member {String} name
 */
UpdateRewardTypeRequestAllOf.prototype['name'] = undefined;

/**
 * The description of a reward type
 * @member {String} description
 */
UpdateRewardTypeRequestAllOf.prototype['description'] = undefined;

/**
 * @member {module:model/UnitOfMeasureType} unitOfMeasureType
 */
UpdateRewardTypeRequestAllOf.prototype['unitOfMeasureType'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
UpdateRewardTypeRequestAllOf.prototype['metadata'] = undefined;

/**
 * The providers of the reward type
 * @member {String} providers
 */
UpdateRewardTypeRequestAllOf.prototype['providers'] = undefined;






export default UpdateRewardTypeRequestAllOf;
