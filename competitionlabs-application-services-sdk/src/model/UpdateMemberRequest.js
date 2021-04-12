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
import MemberType from './MemberType';
import Metadata from './Metadata';
import UpdateMemberRequestAllOf from './UpdateMemberRequestAllOf';
import UpdateModelDefault from './UpdateModelDefault';
import UpdateOptParamModels from './UpdateOptParamModels';

/**
 * The UpdateMemberRequest model module.
 * @module model/UpdateMemberRequest
 * @version 1.0.0
 */
class UpdateMemberRequest {
    /**
     * Constructs a new <code>UpdateMemberRequest</code>.
     * @alias module:model/UpdateMemberRequest
     * @implements module:model/UpdateModelDefault
     * @implements module:model/UpdateOptParamModels
     * @implements module:model/UpdateMemberRequestAllOf
     * @param id {String} A unique system generated identifier
     * @param name {String} The name of the member that is used on leader boards and public displays
     * @param memberType {module:model/MemberType} 
     */
    constructor(id, name, memberType) { 
        UpdateModelDefault.initialize(this, id);UpdateOptParamModels.initialize(this);UpdateMemberRequestAllOf.initialize(this, name, memberType);
        UpdateMemberRequest.initialize(this, id, name, memberType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, memberType) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['memberType'] = memberType;
    }

    /**
     * Constructs a <code>UpdateMemberRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateMemberRequest} obj Optional instance to populate.
     * @return {module:model/UpdateMemberRequest} The populated <code>UpdateMemberRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateMemberRequest();
            UpdateModelDefault.constructFromObject(data, obj);
            UpdateOptParamModels.constructFromObject(data, obj);
            UpdateMemberRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('customFields')) {
                obj['customFields'] = ApiClient.convertToType(data['customFields'], ['String']);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], [Metadata]);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('memberType')) {
                obj['memberType'] = MemberType.constructFromObject(data['memberType']);
            }
            if (data.hasOwnProperty('teamMembers')) {
                obj['teamMembers'] = ApiClient.convertToType(data['teamMembers'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateMemberRequest.prototype['id'] = undefined;

/**
 * A list of id's used to add cutom fields
 * @member {Array.<String>} customFields
 */
UpdateMemberRequest.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
UpdateMemberRequest.prototype['tags'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
UpdateMemberRequest.prototype['metadata'] = undefined;

/**
 * The name of the member that is used on leader boards and public displays
 * @member {String} name
 */
UpdateMemberRequest.prototype['name'] = undefined;

/**
 * @member {module:model/MemberType} memberType
 */
UpdateMemberRequest.prototype['memberType'] = undefined;

/**
 * A social group like Guilds
 * @member {Array.<String>} teamMembers
 */
UpdateMemberRequest.prototype['teamMembers'] = undefined;


// Implement UpdateModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateModelDefault.prototype['id'] = undefined;
// Implement UpdateOptParamModels interface:
/**
 * A list of id's used to add cutom fields
 * @member {Array.<String>} customFields
 */
UpdateOptParamModels.prototype['customFields'] = undefined;
/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
UpdateOptParamModels.prototype['tags'] = undefined;
/**
 * @member {Array.<module:model/Metadata>} metadata
 */
UpdateOptParamModels.prototype['metadata'] = undefined;
// Implement UpdateMemberRequestAllOf interface:
/**
 * The name of the member that is used on leader boards and public displays
 * @member {String} name
 */
UpdateMemberRequestAllOf.prototype['name'] = undefined;
/**
 * @member {module:model/MemberType} memberType
 */
UpdateMemberRequestAllOf.prototype['memberType'] = undefined;
/**
 * A social group like Guilds
 * @member {Array.<String>} teamMembers
 */
UpdateMemberRequestAllOf.prototype['teamMembers'] = undefined;




export default UpdateMemberRequest;

