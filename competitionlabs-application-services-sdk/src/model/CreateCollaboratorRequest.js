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
 * The CreateCollaboratorRequest model module.
 * @module model/CreateCollaboratorRequest
 * @version 1.0.5
 */
class CreateCollaboratorRequest {
    /**
     * Constructs a new <code>CreateCollaboratorRequest</code>.
     * @alias module:model/CreateCollaboratorRequest
     * @param email {String} The email of the user to log in
     * @param role {module:model/Role} 
     */
    constructor(email, role) { 
        
        CreateCollaboratorRequest.initialize(this, email, role);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, role) { 
        obj['email'] = email;
        obj['role'] = role;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['email'] = null;
        obj['role'] = new Role().model();

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

        obj["fields"]['email'] = { "type": 'String', "system": false };
        obj["fields"]['role'] = new Role().modelMap();

        
        obj["requiredFields"]['email'] = { "type": 'String', "system": false };
        obj["requiredFields"]['role'] = new Role().modelMap();

        return obj;
    }

    /**
     * Constructs a <code>CreateCollaboratorRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCollaboratorRequest} obj Optional instance to populate.
     * @return {module:model/CreateCollaboratorRequest} The populated <code>CreateCollaboratorRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateCollaboratorRequest();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = Role.constructFromObject(data['role']);
            }
        }
        return obj;
    }


}

/**
 * The email of the user to log in
 * @member {String} email
 */
CreateCollaboratorRequest.prototype['email'] = undefined;

/**
 * @member {module:model/Role} role
 */
CreateCollaboratorRequest.prototype['role'] = undefined;






export default CreateCollaboratorRequest;

