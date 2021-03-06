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
import CollaboratorAllOf from './CollaboratorAllOf';
import CollaboratorRolesAvailable from './CollaboratorRolesAvailable';
import ModelDefault from './ModelDefault';

/**
 * The Collaborator model module.
 * @module model/Collaborator
 * @version 3.0.1
 */
class Collaborator {
    /**
     * Constructs a new <code>Collaborator</code>.
     * @alias module:model/Collaborator
     * @implements module:model/ModelDefault
     * @implements module:model/CollaboratorAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param email {String} The email of the user to log in
     */
    constructor(id, spaceName, created, email) { 
        ModelDefault.initialize(this, id, spaceName, created);CollaboratorAllOf.initialize(this, email);
        Collaborator.initialize(this, id, spaceName, created, email);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, email) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['email'] = email;
    }

    /**
     * Constructs a <code>Collaborator</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Collaborator} obj Optional instance to populate.
     * @return {module:model/Collaborator} The populated <code>Collaborator</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Collaborator();
            ModelDefault.constructFromObject(data, obj);
            CollaboratorAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('spaceName')) {
                obj['spaceName'] = ApiClient.convertToType(data['spaceName'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('roles')) {
                obj['roles'] = ApiClient.convertToType(data['roles'], ['String']);
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('availableRoles')) {
                obj['availableRoles'] = CollaboratorRolesAvailable.constructFromObject(data['availableRoles']);
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
Collaborator.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
Collaborator.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
Collaborator.prototype['created'] = undefined;

/**
 * The email of the user to log in
 * @member {String} email
 */
Collaborator.prototype['email'] = undefined;

/**
 * The access role of an individual
 * @member {Array.<String>} roles
 */
Collaborator.prototype['roles'] = undefined;

/**
 * The Surname of an individual
 * @member {String} lastName
 */
Collaborator.prototype['lastName'] = undefined;

/**
 * The Name of an individual
 * @member {String} firstName
 */
Collaborator.prototype['firstName'] = undefined;

/**
 * @member {module:model/CollaboratorRolesAvailable} availableRoles
 */
Collaborator.prototype['availableRoles'] = undefined;


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
// Implement CollaboratorAllOf interface:
/**
 * The email of the user to log in
 * @member {String} email
 */
CollaboratorAllOf.prototype['email'] = undefined;
/**
 * The access role of an individual
 * @member {Array.<String>} roles
 */
CollaboratorAllOf.prototype['roles'] = undefined;
/**
 * The Surname of an individual
 * @member {String} lastName
 */
CollaboratorAllOf.prototype['lastName'] = undefined;
/**
 * The Name of an individual
 * @member {String} firstName
 */
CollaboratorAllOf.prototype['firstName'] = undefined;
/**
 * @member {module:model/CollaboratorRolesAvailable} availableRoles
 */
CollaboratorAllOf.prototype['availableRoles'] = undefined;




export default Collaborator;

