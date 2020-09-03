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
import Location from './Location';

/**
 * The ContactAllOf model module.
 * @module model/ContactAllOf
 * @version 1.0.4
 */
class ContactAllOf {
    /**
     * Constructs a new <code>ContactAllOf</code>.
     * @alias module:model/ContactAllOf
     * @param addressLine1 {String} The address
     * @param zipPostalCode {String} The Postal code of the address
     * @param country {String} The Country
     */
    constructor(addressLine1, zipPostalCode, country) { 
        
        ContactAllOf.initialize(this, addressLine1, zipPostalCode, country);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, addressLine1, zipPostalCode, country) { 
        obj['addressLine1'] = addressLine1;
        obj['zipPostalCode'] = zipPostalCode;
        obj['country'] = country;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['addressLine1'];
        obj['addressLine2'];
        obj['city'];
        obj['state'];
        obj['zipPostalCode'];
        obj['country'];
        obj['mobileNumber'];
        obj['phoneNumber'];
        obj['geoLocation'];

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

        obj["fields"]['addressLine1'];
        obj["fields"]['addressLine2'];
        obj["fields"]['city'];
        obj["fields"]['state'];
        obj["fields"]['zipPostalCode'];
        obj["fields"]['country'];
        obj["fields"]['mobileNumber'];
        obj["fields"]['phoneNumber'];
        obj["fields"]['geoLocation'];

        
        obj["requiredFields"]['addressLine1'];
        obj["requiredFields"]['zipPostalCode'];
        obj["requiredFields"]['country'];

        return obj;
    }

    /**
     * Constructs a <code>ContactAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContactAllOf} obj Optional instance to populate.
     * @return {module:model/ContactAllOf} The populated <code>ContactAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactAllOf();

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






export default ContactAllOf;

