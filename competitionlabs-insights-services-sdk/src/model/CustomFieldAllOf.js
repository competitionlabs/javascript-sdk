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
import AppliesTo from './AppliesTo';
import FieldType from './FieldType';

/**
 * The CustomFieldAllOf model module.
 * @module model/CustomFieldAllOf
 * @version 1.0.0
 */
class CustomFieldAllOf {
    /**
     * Constructs a new <code>CustomFieldAllOf</code>.
     * @alias module:model/CustomFieldAllOf
     * @param name {String} The name of a Custom field
     * @param term {String} The key of a Custom field
     * @param fieldType {module:model/FieldType} 
     * @param appliesTo {module:model/AppliesTo} 
     */
    constructor(name, term, fieldType, appliesTo) { 
        
        CustomFieldAllOf.initialize(this, name, term, fieldType, appliesTo);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, term, fieldType, appliesTo) { 
        obj['name'] = name;
        obj['term'] = term;
        obj['fieldType'] = fieldType;
        obj['appliesTo'] = appliesTo;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['name'];
        obj['term'];
        obj['description'];
        obj['fieldType'];
        obj['appliesTo'];

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

        obj["fields"]['name'];
        obj["fields"]['term'];
        obj["fields"]['description'];
        obj["fields"]['fieldType'];
        obj["fields"]['appliesTo'];

        
        obj["requiredFields"]['name'];
        obj["requiredFields"]['term'];
        obj["requiredFields"]['fieldType'];
        obj["requiredFields"]['appliesTo'];

        return obj;
    }

    /**
     * Constructs a <code>CustomFieldAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomFieldAllOf} obj Optional instance to populate.
     * @return {module:model/CustomFieldAllOf} The populated <code>CustomFieldAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomFieldAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('term')) {
                obj['term'] = ApiClient.convertToType(data['term'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('fieldType')) {
                obj['fieldType'] = FieldType.constructFromObject(data['fieldType']);
            }
            if (data.hasOwnProperty('appliesTo')) {
                obj['appliesTo'] = AppliesTo.constructFromObject(data['appliesTo']);
            }
        }
        return obj;
    }


}

/**
 * The name of a Custom field
 * @member {String} name
 */
CustomFieldAllOf.prototype['name'] = undefined;

/**
 * The key of a Custom field
 * @member {String} term
 */
CustomFieldAllOf.prototype['term'] = undefined;

/**
 * The description of a Custom field
 * @member {String} description
 */
CustomFieldAllOf.prototype['description'] = undefined;

/**
 * @member {module:model/FieldType} fieldType
 */
CustomFieldAllOf.prototype['fieldType'] = undefined;

/**
 * @member {module:model/AppliesTo} appliesTo
 */
CustomFieldAllOf.prototype['appliesTo'] = undefined;






export default CustomFieldAllOf;

