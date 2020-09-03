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
import CustomFieldAllOf from './CustomFieldAllOf';
import FieldType from './FieldType';
import ModelDefault from './ModelDefault';

/**
 * The CustomField model module.
 * @module model/CustomField
 * @version 1.0.5
 */
class CustomField {
    /**
     * Constructs a new <code>CustomField</code>.
     * @alias module:model/CustomField
     * @implements module:model/ModelDefault
     * @implements module:model/CustomFieldAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param name {String} The name of a Custom field
     * @param term {String} The key of a Custom field
     * @param fieldType {module:model/FieldType} 
     * @param appliesTo {module:model/AppliesTo} 
     */
    constructor(id, spaceName, created, name, term, fieldType, appliesTo) { 
        ModelDefault.initialize(this, id, spaceName, created);CustomFieldAllOf.initialize(this, name, term, fieldType, appliesTo);
        CustomField.initialize(this, id, spaceName, created, name, term, fieldType, appliesTo);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, name, term, fieldType, appliesTo) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
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

        obj['id'] = null;
        obj['spaceName'] = null;
        obj['created'] = null;
        obj['name'] = null;
        obj['term'] = null;
        obj['description'] = null;
        obj['fieldType'] = new FieldType().model();
        obj['appliesTo'] = new AppliesTo().model();

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

        obj["fields"]['id'] = { "type": 'String', "system": true };
        obj["fields"]['spaceName'] = { "type": 'String', "system": true };
        obj["fields"]['created'] = { "type": 'Date', "system": true };
        obj["fields"]['name'] = { "type": 'String', "system": false };
        obj["fields"]['term'] = { "type": 'String', "system": false };
        obj["fields"]['description'] = { "type": 'String', "system": false };
        obj["fields"]['fieldType'] = new FieldType().modelMap();
        obj["fields"]['appliesTo'] = new AppliesTo().modelMap();

        
        obj["requiredFields"]['id'] = { "type": 'String', "system": true };
        obj["requiredFields"]['spaceName'] = { "type": 'String', "system": true };
        obj["requiredFields"]['created'] = { "type": 'Date', "system": true };
        obj["requiredFields"]['name'] = { "type": 'String', "system": false };
        obj["requiredFields"]['term'] = { "type": 'String', "system": false };
        obj["requiredFields"]['fieldType'] = new FieldType().modelMap();
        obj["requiredFields"]['appliesTo'] = new AppliesTo().modelMap();

        return obj;
    }

    /**
     * Constructs a <code>CustomField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomField} obj Optional instance to populate.
     * @return {module:model/CustomField} The populated <code>CustomField</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomField();
            ModelDefault.constructFromObject(data, obj);
            CustomFieldAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('spaceName')) {
                obj['spaceName'] = ApiClient.convertToType(data['spaceName'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
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
 * A unique system generated identifier
 * @member {String} id
 */
CustomField.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
CustomField.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
CustomField.prototype['created'] = undefined;

/**
 * The name of a Custom field
 * @member {String} name
 */
CustomField.prototype['name'] = undefined;

/**
 * The key of a Custom field
 * @member {String} term
 */
CustomField.prototype['term'] = undefined;

/**
 * The description of a Custom field
 * @member {String} description
 */
CustomField.prototype['description'] = undefined;

/**
 * @member {module:model/FieldType} fieldType
 */
CustomField.prototype['fieldType'] = undefined;

/**
 * @member {module:model/AppliesTo} appliesTo
 */
CustomField.prototype['appliesTo'] = undefined;


// Implement ModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
ModelDefault.prototype['id'] = undefined;
/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
ModelDefault.prototype['spaceName'] = undefined;
/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
ModelDefault.prototype['created'] = undefined;
// Implement CustomFieldAllOf interface:
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




export default CustomField;

