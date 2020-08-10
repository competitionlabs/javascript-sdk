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
import ModelDefault from './ModelDefault';
import UnitOfMeasureAllOf from './UnitOfMeasureAllOf';
import UnitOfMeasureType from './UnitOfMeasureType';

/**
 * The UnitOfMeasure model module.
 * @module model/UnitOfMeasure
 * @version 1.0.0
 */
class UnitOfMeasure {
    /**
     * Constructs a new <code>UnitOfMeasure</code>.
     * @alias module:model/UnitOfMeasure
     * @implements module:model/ModelDefault
     * @implements module:model/UnitOfMeasureAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param name {String} The name of a unit of measure
     * @param key {String} The reference to the unit of measure in your system
     * @param multiplier {Number} Is used to multiply the value from the standardised one that is being used
     * @param unitOfMeasureType {module:model/UnitOfMeasureType} 
     */
    constructor(id, spaceName, created, name, key, multiplier, unitOfMeasureType) { 
        ModelDefault.initialize(this, id, spaceName, created);UnitOfMeasureAllOf.initialize(this, name, key, multiplier, unitOfMeasureType);
        UnitOfMeasure.initialize(this, id, spaceName, created, name, key, multiplier, unitOfMeasureType);
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
        obj['key'] = null;
        obj['description'] = null;
        obj['isoCode'] = null;
        obj['symbol'] = null;
        obj['multiplier'] = null;
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

        obj["fields"]['id'] = { "type": 'String' };
        obj["fields"]['spaceName'] = { "type": 'String' };
        obj["fields"]['created'] = { "type": 'Date' };
        obj["fields"]['name'] = { "type": 'String' };
        obj["fields"]['key'] = { "type": 'String' };
        obj["fields"]['description'] = { "type": 'String' };
        obj["fields"]['isoCode'] = { "type": 'String' };
        obj["fields"]['symbol'] = { "type": 'String' };
        obj["fields"]['multiplier'] = { "type": 'Number' };
        obj["fields"]['unitOfMeasureType'] = new UnitOfMeasureType().modelMap();
        obj["fields"]['metadata'] = [new Metadata().modelMap()];

        
        obj["requiredFields"]['id'] = { "type": 'String' };
        obj["requiredFields"]['spaceName'] = { "type": 'String' };
        obj["requiredFields"]['created'] = { "type": 'Date' };
        obj["requiredFields"]['name'] = { "type": 'String' };
        obj["requiredFields"]['key'] = { "type": 'String' };
        obj["requiredFields"]['multiplier'] = { "type": 'Number' };
        obj["requiredFields"]['unitOfMeasureType'] = new UnitOfMeasureType().modelMap();

        return obj;
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, name, key, multiplier, unitOfMeasureType) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['name'] = name;
        obj['key'] = key;
        obj['multiplier'] = multiplier;
        obj['unitOfMeasureType'] = unitOfMeasureType;
    }

    /**
     * Constructs a <code>UnitOfMeasure</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UnitOfMeasure} obj Optional instance to populate.
     * @return {module:model/UnitOfMeasure} The populated <code>UnitOfMeasure</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UnitOfMeasure();
            ModelDefault.constructFromObject(data, obj);
            UnitOfMeasureAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('isoCode')) {
                obj['isoCode'] = ApiClient.convertToType(data['isoCode'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('multiplier')) {
                obj['multiplier'] = ApiClient.convertToType(data['multiplier'], 'Number');
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
 * A unique system generated identifier
 * @member {String} id
 */
UnitOfMeasure.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
UnitOfMeasure.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
UnitOfMeasure.prototype['created'] = undefined;

/**
 * The name of a unit of measure
 * @member {String} name
 */
UnitOfMeasure.prototype['name'] = undefined;

/**
 * The reference to the unit of measure in your system
 * @member {String} key
 */
UnitOfMeasure.prototype['key'] = undefined;

/**
 * The description of a unit of measure
 * @member {String} description
 */
UnitOfMeasure.prototype['description'] = undefined;

/**
 * An alphabetical or numerical code to identify a unit of measure
 * @member {String} isoCode
 */
UnitOfMeasure.prototype['isoCode'] = undefined;

/**
 * The symbol of a unit of measure
 * @member {String} symbol
 */
UnitOfMeasure.prototype['symbol'] = undefined;

/**
 * Is used to multiply the value from the standardised one that is being used
 * @member {Number} multiplier
 */
UnitOfMeasure.prototype['multiplier'] = undefined;

/**
 * @member {module:model/UnitOfMeasureType} unitOfMeasureType
 */
UnitOfMeasure.prototype['unitOfMeasureType'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
UnitOfMeasure.prototype['metadata'] = undefined;


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
// Implement UnitOfMeasureAllOf interface:
/**
 * The name of a unit of measure
 * @member {String} name
 */
UnitOfMeasureAllOf.prototype['name'] = undefined;
/**
 * The reference to the unit of measure in your system
 * @member {String} key
 */
UnitOfMeasureAllOf.prototype['key'] = undefined;
/**
 * The description of a unit of measure
 * @member {String} description
 */
UnitOfMeasureAllOf.prototype['description'] = undefined;
/**
 * An alphabetical or numerical code to identify a unit of measure
 * @member {String} isoCode
 */
UnitOfMeasureAllOf.prototype['isoCode'] = undefined;
/**
 * The symbol of a unit of measure
 * @member {String} symbol
 */
UnitOfMeasureAllOf.prototype['symbol'] = undefined;
/**
 * Is used to multiply the value from the standardised one that is being used
 * @member {Number} multiplier
 */
UnitOfMeasureAllOf.prototype['multiplier'] = undefined;
/**
 * @member {module:model/UnitOfMeasureType} unitOfMeasureType
 */
UnitOfMeasureAllOf.prototype['unitOfMeasureType'] = undefined;
/**
 * @member {Array.<module:model/Metadata>} metadata
 */
UnitOfMeasureAllOf.prototype['metadata'] = undefined;




export default UnitOfMeasure;

