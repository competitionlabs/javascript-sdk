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
import CreateOptParamModels from './CreateOptParamModels';
import MemberAllOf from './MemberAllOf';
import MemberType from './MemberType';
import Metadata from './Metadata';

/**
 * The CreateMemberRequest model module.
 * @module model/CreateMemberRequest
 * @version 3.0.1
 */
class CreateMemberRequest {
    /**
     * Constructs a new <code>CreateMemberRequest</code>.
     * @alias module:model/CreateMemberRequest
     * @implements module:model/CreateOptParamModels
     * @implements module:model/MemberAllOf
     * @param name {String} The name of the member that is used on leader boards and public displays
     * @param memberRefId {String} The reference to this member in your system
     * @param memberType {module:model/MemberType} 
     */
    constructor(name, memberRefId, memberType) { 
        CreateOptParamModels.initialize(this);MemberAllOf.initialize(this, name, memberRefId, memberType);
        CreateMemberRequest.initialize(this, name, memberRefId, memberType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, memberRefId, memberType) { 
        obj['name'] = name;
        obj['memberRefId'] = memberRefId;
        obj['memberType'] = memberType;
    }

    /**
     * Constructs a <code>CreateMemberRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateMemberRequest} obj Optional instance to populate.
     * @return {module:model/CreateMemberRequest} The populated <code>CreateMemberRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateMemberRequest();
            CreateOptParamModels.constructFromObject(data, obj);
            MemberAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('memberRefId')) {
                obj['memberRefId'] = ApiClient.convertToType(data['memberRefId'], 'String');
            }
            if (data.hasOwnProperty('memberType')) {
                obj['memberType'] = MemberType.constructFromObject(data['memberType']);
            }
            if (data.hasOwnProperty('teamMembers')) {
                obj['teamMembers'] = ApiClient.convertToType(data['teamMembers'], ['String']);
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
            if (data.hasOwnProperty('timeZoneOffset')) {
                obj['timeZoneOffset'] = ApiClient.convertToType(data['timeZoneOffset'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * A list of id's used to add cutom fields
 * @member {Array.<String>} customFields
 */
CreateMemberRequest.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
CreateMemberRequest.prototype['tags'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
CreateMemberRequest.prototype['metadata'] = undefined;

/**
 * The name of the member that is used on leader boards and public displays
 * @member {String} name
 */
CreateMemberRequest.prototype['name'] = undefined;

/**
 * The reference to this member in your system
 * @member {String} memberRefId
 */
CreateMemberRequest.prototype['memberRefId'] = undefined;

/**
 * @member {module:model/MemberType} memberType
 */
CreateMemberRequest.prototype['memberType'] = undefined;

/**
 * A social group like Guilds
 * @member {Array.<String>} teamMembers
 */
CreateMemberRequest.prototype['teamMembers'] = undefined;

/**
 * Additional constraints, if the value is present it means the
 * @member {Array.<String>} constraints
 */
CreateMemberRequest.prototype['constraints'] = undefined;

/**
 * To what time zone teh emmber belongs to
 * @member {Number} timeZoneOffset
 */
CreateMemberRequest.prototype['timeZoneOffset'] = undefined;


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
// Implement MemberAllOf interface:
/**
 * The name of the member that is used on leader boards and public displays
 * @member {String} name
 */
MemberAllOf.prototype['name'] = undefined;
/**
 * The reference to this member in your system
 * @member {String} memberRefId
 */
MemberAllOf.prototype['memberRefId'] = undefined;
/**
 * @member {module:model/MemberType} memberType
 */
MemberAllOf.prototype['memberType'] = undefined;
/**
 * A social group like Guilds
 * @member {Array.<String>} teamMembers
 */
MemberAllOf.prototype['teamMembers'] = undefined;
/**
 * Additional constraints, if the value is present it means the
 * @member {Array.<String>} constraints
 */
MemberAllOf.prototype['constraints'] = undefined;
/**
 * To what time zone teh emmber belongs to
 * @member {Number} timeZoneOffset
 */
MemberAllOf.prototype['timeZoneOffset'] = undefined;




export default CreateMemberRequest;

