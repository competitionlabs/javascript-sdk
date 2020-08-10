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
 * The CreateUserRequest model module.
 * @module model/CreateUserRequest
 * @version 1.0.0
 */
class CreateUserRequest {
    /**
     * Constructs a new <code>CreateUserRequest</code>.
     * @alias module:model/CreateUserRequest
     * @param firstName {String} The Name of an individual
     * @param lastName {String} The Surname of an individual
     * @param password {String} Unique password of the user to log in
     * @param email {String} The email of the user to log in
     */
    constructor(firstName, lastName, password, email) { 
        
        CreateUserRequest.initialize(this, firstName, lastName, password, email);
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['firstName'] = null;
        obj['lastName'] = null;
        obj['password'] = null;
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

        obj["fields"]['firstName'] = { "type": 'String' };
        obj["fields"]['lastName'] = { "type": 'String' };
        obj["fields"]['password'] = { "type": 'String' };
        obj["fields"]['email'] = { "type": 'String' };
        obj["fields"]['contact'] = new Contact().modelMap();

        
        obj["requiredFields"]['firstName'] = { "type": 'String' };
        obj["requiredFields"]['lastName'] = { "type": 'String' };
        obj["requiredFields"]['password'] = { "type": 'String' };
        obj["requiredFields"]['email'] = { "type": 'String' };

        return obj;
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
     * Constructs a <code>CreateUserRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateUserRequest} obj Optional instance to populate.
     * @return {module:model/CreateUserRequest} The populated <code>CreateUserRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateUserRequest();

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
CreateUserRequest.prototype['firstName'] = undefined;

/**
 * The Surname of an individual
 * @member {String} lastName
 */
CreateUserRequest.prototype['lastName'] = undefined;

/**
 * Unique password of the user to log in
 * @member {String} password
 */
CreateUserRequest.prototype['password'] = undefined;

/**
 * The email of the user to log in
 * @member {String} email
 */
CreateUserRequest.prototype['email'] = undefined;

/**
 * @member {module:model/Contact} contact
 */
CreateUserRequest.prototype['contact'] = undefined;






export default CreateUserRequest;

