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
import Contact from './Contact';

/**
 * The CreateUserRequestAllOf model module.
 * @module model/CreateUserRequestAllOf
 * @version 3.0.1
 */
class CreateUserRequestAllOf {
    /**
     * Constructs a new <code>CreateUserRequestAllOf</code>.
     * @alias module:model/CreateUserRequestAllOf
     * @param firstName {String} The Name of an individual
     * @param lastName {String} The Surname of an individual
     * @param password {String} Unique password of the user to log in
     * @param email {String} The email of the user to log in
     */
    constructor(firstName, lastName, password, email) { 
        
        CreateUserRequestAllOf.initialize(this, firstName, lastName, password, email);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firstName, lastName, password, email) { 
        obj['firstName'] = firstName;
        obj['lastName'] = lastName;
        obj['password'] = password;
        obj['email'] = email;
    }

    /**
     * Constructs a <code>CreateUserRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateUserRequestAllOf} obj Optional instance to populate.
     * @return {module:model/CreateUserRequestAllOf} The populated <code>CreateUserRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateUserRequestAllOf();

            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
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
CreateUserRequestAllOf.prototype['firstName'] = undefined;

/**
 * The Surname of an individual
 * @member {String} lastName
 */
CreateUserRequestAllOf.prototype['lastName'] = undefined;

/**
 * Unique password of the user to log in
 * @member {String} password
 */
CreateUserRequestAllOf.prototype['password'] = undefined;

/**
 * The email of the user to log in
 * @member {String} email
 */
CreateUserRequestAllOf.prototype['email'] = undefined;

/**
 * @member {module:model/Contact} contact
 */
CreateUserRequestAllOf.prototype['contact'] = undefined;






export default CreateUserRequestAllOf;

