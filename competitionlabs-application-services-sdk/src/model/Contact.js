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
import ContactAllOf from './ContactAllOf';
import Location from './Location';
import ModelDefault from './ModelDefault';

/**
 * The Contact model module.
 * @module model/Contact
 * @version 3.0.1
 */
class Contact {
    /**
     * Constructs a new <code>Contact</code>.
     * @alias module:model/Contact
     * @implements module:model/ModelDefault
     * @implements module:model/ContactAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param addressLine1 {String} The address
     * @param zipPostalCode {String} The Postal code of the address
     * @param country {String} The Country
     */
    constructor(id, spaceName, created, addressLine1, zipPostalCode, country) { 
        ModelDefault.initialize(this, id, spaceName, created);ContactAllOf.initialize(this, addressLine1, zipPostalCode, country);
        Contact.initialize(this, id, spaceName, created, addressLine1, zipPostalCode, country);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, addressLine1, zipPostalCode, country) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['addressLine1'] = addressLine1;
        obj['zipPostalCode'] = zipPostalCode;
        obj['country'] = country;
    }

    /**
     * Constructs a <code>Contact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Contact} obj Optional instance to populate.
     * @return {module:model/Contact} The populated <code>Contact</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Contact();
            ModelDefault.constructFromObject(data, obj);
            ContactAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('spaceName')) {
                obj['spaceName'] = ApiClient.convertToType(data['spaceName'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('addressLine1')) {
                obj['addressLine1'] = ApiClient.convertToType(data['addressLine1'], 'String');
            }
            if (data.hasOwnProperty('addressLine2')) {
                obj['addressLine2'] = ApiClient.convertToType(data['addressLine2'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('zipPostalCode')) {
                obj['zipPostalCode'] = ApiClient.convertToType(data['zipPostalCode'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('mobileNumber')) {
                obj['mobileNumber'] = ApiClient.convertToType(data['mobileNumber'], 'String');
            }
            if (data.hasOwnProperty('phoneNumber')) {
                obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
            }
            if (data.hasOwnProperty('geoLocation')) {
                obj['geoLocation'] = Location.constructFromObject(data['geoLocation']);
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
Contact.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
Contact.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
Contact.prototype['created'] = undefined;

/**
 * The address
 * @member {String} addressLine1
 */
Contact.prototype['addressLine1'] = undefined;

/**
 * The secondary address
 * @member {String} addressLine2
 */
Contact.prototype['addressLine2'] = undefined;

/**
 * The city
 * @member {String} city
 */
Contact.prototype['city'] = undefined;

/**
 * The state of the city
 * @member {String} state
 */
Contact.prototype['state'] = undefined;

/**
 * The Postal code of the address
 * @member {String} zipPostalCode
 */
Contact.prototype['zipPostalCode'] = undefined;

/**
 * The Country
 * @member {String} country
 */
Contact.prototype['country'] = undefined;

/**
 * The mobile number
 * @member {String} mobileNumber
 */
Contact.prototype['mobileNumber'] = undefined;

/**
 * The phone number
 * @member {String} phoneNumber
 */
Contact.prototype['phoneNumber'] = undefined;

/**
 * @member {module:model/Location} geoLocation
 */
Contact.prototype['geoLocation'] = undefined;


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
// Implement ContactAllOf interface:
/**
 * The address
 * @member {String} addressLine1
 */
ContactAllOf.prototype['addressLine1'] = undefined;
/**
 * The secondary address
 * @member {String} addressLine2
 */
ContactAllOf.prototype['addressLine2'] = undefined;
/**
 * The city
 * @member {String} city
 */
ContactAllOf.prototype['city'] = undefined;
/**
 * The state of the city
 * @member {String} state
 */
ContactAllOf.prototype['state'] = undefined;
/**
 * The Postal code of the address
 * @member {String} zipPostalCode
 */
ContactAllOf.prototype['zipPostalCode'] = undefined;
/**
 * The Country
 * @member {String} country
 */
ContactAllOf.prototype['country'] = undefined;
/**
 * The mobile number
 * @member {String} mobileNumber
 */
ContactAllOf.prototype['mobileNumber'] = undefined;
/**
 * The phone number
 * @member {String} phoneNumber
 */
ContactAllOf.prototype['phoneNumber'] = undefined;
/**
 * @member {module:model/Location} geoLocation
 */
ContactAllOf.prototype['geoLocation'] = undefined;




export default Contact;

