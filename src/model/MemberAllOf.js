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
import MemberType from './MemberType';
import Metadata from './Metadata';

/**
 * The MemberAllOf model module.
 * @module model/MemberAllOf
 * @version 1.0.0
 */
class MemberAllOf {
    /**
     * Constructs a new <code>MemberAllOf</code>.
     * @alias module:model/MemberAllOf
     * @param memberRefId {String} The reference to this member in your system
     * @param memberType {module:model/MemberType} 
     */
    constructor(memberRefId, memberType) { 
        
        MemberAllOf.initialize(this, memberRefId, memberType);
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['name'] = null;
        obj['memberRefId'] = null;
        obj['memberType'] = new MemberType().model();
        obj['teamMembers'] = [null];
        obj['groups'] = [null];
        obj['metadata'] = [new Metadata().model()];

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

        obj["fields"]['name'] = { "type": 'String' };
        obj["fields"]['memberRefId'] = { "type": 'String' };
        obj["fields"]['memberType'] = new MemberType().modelMap();
        obj["fields"]['teamMembers'] = [{ "type": 'String' }];
        obj["fields"]['groups'] = [{ "type": 'String' }];
        obj["fields"]['metadata'] = [new Metadata().modelMap()];

        
        obj["requiredFields"]['memberRefId'] = { "type": 'String' };
        obj["requiredFields"]['memberType'] = new MemberType().modelMap();

        return obj;
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, memberRefId, memberType) { 
        obj['memberRefId'] = memberRefId;
        obj['memberType'] = memberType;
    }

    /**
     * Constructs a <code>MemberAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MemberAllOf} obj Optional instance to populate.
     * @return {module:model/MemberAllOf} The populated <code>MemberAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MemberAllOf();

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
            if (data.hasOwnProperty('groups')) {
                obj['groups'] = ApiClient.convertToType(data['groups'], ['String']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], [Metadata]);
            }
        }
        return obj;
    }


}

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
 * A list of Strings of groups that the member belongs to. It could be marketing segments or social friend groups
 * @member {Array.<String>} groups
 */
MemberAllOf.prototype['groups'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
MemberAllOf.prototype['metadata'] = undefined;






export default MemberAllOf;

