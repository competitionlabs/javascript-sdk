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
import Role from './Role';
import UpdateCollaboratorRequestAllOf from './UpdateCollaboratorRequestAllOf';
import UpdateModelDefault from './UpdateModelDefault';

/**
 * The UpdateCollaboratorRequest model module.
 * @module model/UpdateCollaboratorRequest
 * @version 1.0.0
 */
class UpdateCollaboratorRequest {
    /**
     * Constructs a new <code>UpdateCollaboratorRequest</code>.
     * @alias module:model/UpdateCollaboratorRequest
     * @implements module:model/UpdateModelDefault
     * @implements module:model/UpdateCollaboratorRequestAllOf
     * @param id {String} A unique system generated identifier
     * @param role {module:model/Role} 
     */
    constructor(id, role) { 
        UpdateModelDefault.initialize(this, id);UpdateCollaboratorRequestAllOf.initialize(this, role);
        UpdateCollaboratorRequest.initialize(this, id, role);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, role) { 
        obj['id'] = id;
        obj['role'] = role;
    }

    /**
     * Constructs a <code>UpdateCollaboratorRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateCollaboratorRequest} obj Optional instance to populate.
     * @return {module:model/UpdateCollaboratorRequest} The populated <code>UpdateCollaboratorRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateCollaboratorRequest();
            UpdateModelDefault.constructFromObject(data, obj);
            UpdateCollaboratorRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = Role.constructFromObject(data['role']);
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateCollaboratorRequest.prototype['id'] = undefined;

/**
 * @member {module:model/Role} role
 */
UpdateCollaboratorRequest.prototype['role'] = undefined;


// Implement UpdateModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateModelDefault.prototype['id'] = undefined;
// Implement UpdateCollaboratorRequestAllOf interface:
/**
 * @member {module:model/Role} role
 */
UpdateCollaboratorRequestAllOf.prototype['role'] = undefined;




export default UpdateCollaboratorRequest;

