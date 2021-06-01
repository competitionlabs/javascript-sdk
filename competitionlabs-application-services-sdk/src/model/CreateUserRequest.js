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
import CreateOptParamModels from './CreateOptParamModels';
import CreateUserRequestAllOf from './CreateUserRequestAllOf';
import Metadata from './Metadata';

/**
 * The CreateUserRequest model module.
 * @module model/CreateUserRequest
 * @version 3.0.1
 */
class CreateUserRequest {
    /**
     * Constructs a new <code>CreateUserRequest</code>.
     * @alias module:model/CreateUserRequest
     * @implements module:model/CreateOptParamModels
     * @implements module:model/CreateUserRequestAllOf
     * @param firstName {String} The Name of an individual
     * @param lastName {String} The Surname of an individual
     * @param password {String} Unique password of the user to log in
     * @param email {String} The email of the user to log in
     */
    constructor(firstName, lastName, password, email) { 
        CreateOptParamModels.initialize(this);CreateUserRequestAllOf.initialize(this, firstName, lastName, password, email);
        CreateUserRequest.initialize(this, firstName, lastName, password, email);
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
            CreateOptParamModels.constructFromObject(data, obj);
            CreateUserRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('customFields')) {
                obj['customFields'] = ApiClient.convertToType(data['customFields'], ['String']);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], [Metadata]);
            }
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
 * A list of id's used to add cutom fields
 * @member {Array.<String>} customFields
 */
CreateUserRequest.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
CreateUserRequest.prototype['tags'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
CreateUserRequest.prototype['metadata'] = undefined;

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


// Implement CreateOptParamModels interface:
/**
 * A list of id's used to add cutom fields
 * @member {Array.<String>} customFields
 */
CreateOptParamModels.prototype['customFields'] = undefined;
/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
CreateOptParamModels.prototype['tags'] = undefined;
/**
 * @member {Array.<module:model/Metadata>} metadata
 */
CreateOptParamModels.prototype['metadata'] = undefined;
// Implement CreateUserRequestAllOf interface:
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




export default CreateUserRequest;

