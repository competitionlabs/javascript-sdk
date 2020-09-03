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
 * The UserModelDefault model module.
 * @module model/UserModelDefault
 * @version 1.0.4
 */
class UserModelDefault {
    /**
     * Constructs a new <code>UserModelDefault</code>.
     * @alias module:model/UserModelDefault
     * @param objectType {String} 
     * @param id {String} A unique system generated identifier
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     */
    constructor(objectType, id, created) { 
        
        UserModelDefault.initialize(this, objectType, id, created);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objectType, id, created) { 
        obj['objectType'] = objectType;
        obj['id'] = id;
        obj['created'] = created;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['objectType'];
        obj['id'];
        obj['created'];

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

        obj["fields"]['objectType'];
        obj["fields"]['id'];
        obj["fields"]['created'];

        
        obj["requiredFields"]['objectType'];
        obj["requiredFields"]['id'];
        obj["requiredFields"]['created'];

        return obj;
    }

    /**
     * Constructs a <code>UserModelDefault</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserModelDefault} obj Optional instance to populate.
     * @return {module:model/UserModelDefault} The populated <code>UserModelDefault</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserModelDefault();

            if (data.hasOwnProperty('objectType')) {
                obj['objectType'] = ApiClient.convertToType(data['objectType'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} objectType
 */
UserModelDefault.prototype['objectType'] = undefined;

/**
 * A unique system generated identifier
 * @member {String} id
 */
UserModelDefault.prototype['id'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
UserModelDefault.prototype['created'] = undefined;






export default UserModelDefault;

