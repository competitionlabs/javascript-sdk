/**
 * CompetitionLabs Application Services
 * CompetitionLabs Application Services are used to manage and configure spaces.
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
 * The UserAllOf model module.
 * @module model/UserAllOf
 * @version 1.0.0
 */
class UserAllOf {
    /**
     * Constructs a new <code>UserAllOf</code>.
     * @alias module:model/UserAllOf
     * @param email {String} The email of the user to log in
     * @param constraints {Array.<String>} Additional constraints
     */
    constructor(email, constraints) { 
        
        UserAllOf.initialize(this, email, constraints);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, constraints) { 
        obj['email'] = email;
        obj['constraints'] = constraints;
    }

    /**
     * Constructs a <code>UserAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserAllOf} obj Optional instance to populate.
     * @return {module:model/UserAllOf} The populated <code>UserAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserAllOf();

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
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * The Name of an individual
 * @member {String} firstName
 */
UserAllOf.prototype['firstName'] = undefined;

/**
 * The Surname of an individual
 * @member {String} lastName
 */
UserAllOf.prototype['lastName'] = undefined;

/**
 * The email of the user to log in
 * @member {String} email
 */
UserAllOf.prototype['email'] = undefined;

/**
 * @member {module:model/Contact} contact
 */
UserAllOf.prototype['contact'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
UserAllOf.prototype['constraints'] = undefined;






export default UserAllOf;

