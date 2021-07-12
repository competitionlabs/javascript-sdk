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
import CollaboratorRolesAvailableAllOf from './CollaboratorRolesAvailableAllOf';
import ModelDefault from './ModelDefault';

/**
 * The CollaboratorRolesAvailable model module.
 * @module model/CollaboratorRolesAvailable
 * @version 3.0.1
 */
class CollaboratorRolesAvailable {
    /**
     * Constructs a new <code>CollaboratorRolesAvailable</code>.
     * @alias module:model/CollaboratorRolesAvailable
     * @implements module:model/ModelDefault
     * @implements module:model/CollaboratorRolesAvailableAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     */
    constructor(id, spaceName, created) { 
        ModelDefault.initialize(this, id, spaceName, created);CollaboratorRolesAvailableAllOf.initialize(this);
        CollaboratorRolesAvailable.initialize(this, id, spaceName, created);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
    }

    /**
     * Constructs a <code>CollaboratorRolesAvailable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CollaboratorRolesAvailable} obj Optional instance to populate.
     * @return {module:model/CollaboratorRolesAvailable} The populated <code>CollaboratorRolesAvailable</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CollaboratorRolesAvailable();
            ModelDefault.constructFromObject(data, obj);
            CollaboratorRolesAvailableAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('spaceName')) {
                obj['spaceName'] = ApiClient.convertToType(data['spaceName'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('roles')) {
                obj['roles'] = ApiClient.convertToType(data['roles'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
CollaboratorRolesAvailable.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
CollaboratorRolesAvailable.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
CollaboratorRolesAvailable.prototype['created'] = undefined;

/**
 * The access role of an individual
 * @member {Array.<String>} roles
 */
CollaboratorRolesAvailable.prototype['roles'] = undefined;


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
// Implement CollaboratorRolesAvailableAllOf interface:
/**
 * The access role of an individual
 * @member {Array.<String>} roles
 */
CollaboratorRolesAvailableAllOf.prototype['roles'] = undefined;




export default CollaboratorRolesAvailable;

