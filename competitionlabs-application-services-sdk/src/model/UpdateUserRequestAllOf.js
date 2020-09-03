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
import Contact from './Contact';

/**
 * The UpdateUserRequestAllOf model module.
 * @module model/UpdateUserRequestAllOf
 * @version 1.0.5
 */
class UpdateUserRequestAllOf {
    /**
     * Constructs a new <code>UpdateUserRequestAllOf</code>.
     * @alias module:model/UpdateUserRequestAllOf
     */
    constructor() { 
        
        UpdateUserRequestAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['firstName'] = null;
        obj['lastName'] = null;
        obj['email'] = null;
        obj['contact'] = new Contact().model();

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

        obj["fields"]['firstName'] = { "type": 'String', "system": false };
        obj["fields"]['lastName'] = { "type": 'String', "system": false };
        obj["fields"]['email'] = { "type": 'String', "system": false };
        obj["fields"]['contact'] = new Contact().modelMap();

        

        return obj;
    }

    /**
     * Constructs a <code>UpdateUserRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateUserRequestAllOf} obj Optional instance to populate.
     * @return {module:model/UpdateUserRequestAllOf} The populated <code>UpdateUserRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateUserRequestAllOf();

            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('contact')) {
                obj['contact'] = Contact.constructFromObject(data['contact']);
            }
        }
        return obj;
    }


}

/**
 * The Name of an individual
 * @member {String} firstName
 */
UpdateUserRequestAllOf.prototype['firstName'] = undefined;

/**
 * The Surname of an individual
 * @member {String} lastName
 */
UpdateUserRequestAllOf.prototype['lastName'] = undefined;

/**
 * The email of the user to log in
 * @member {String} email
 */
UpdateUserRequestAllOf.prototype['email'] = undefined;

/**
 * @member {module:model/Contact} contact
 */
UpdateUserRequestAllOf.prototype['contact'] = undefined;






export default UpdateUserRequestAllOf;

