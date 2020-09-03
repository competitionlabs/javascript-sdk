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
import Role from './Role';

/**
 * The UpdateCollaboratorRequestAllOf model module.
 * @module model/UpdateCollaboratorRequestAllOf
 * @version 1.0.0
 */
class UpdateCollaboratorRequestAllOf {
    /**
     * Constructs a new <code>UpdateCollaboratorRequestAllOf</code>.
     * @alias module:model/UpdateCollaboratorRequestAllOf
     * @param role {module:model/Role} 
     */
    constructor(role) { 
        
        UpdateCollaboratorRequestAllOf.initialize(this, role);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, role) { 
        obj['role'] = role;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['role'];

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

        obj["fields"]['role'];

        
        obj["requiredFields"]['role'];

        return obj;
    }

    /**
     * Constructs a <code>UpdateCollaboratorRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateCollaboratorRequestAllOf} obj Optional instance to populate.
     * @return {module:model/UpdateCollaboratorRequestAllOf} The populated <code>UpdateCollaboratorRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateCollaboratorRequestAllOf();

            if (data.hasOwnProperty('role')) {
                obj['role'] = Role.constructFromObject(data['role']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Role} role
 */
UpdateCollaboratorRequestAllOf.prototype['role'] = undefined;






export default UpdateCollaboratorRequestAllOf;

