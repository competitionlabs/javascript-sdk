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
import CountResponse from './CountResponse';
import MemberAchievementCountAllOf from './MemberAchievementCountAllOf';

/**
 * The MemberAchievementCount model module.
 * @module model/MemberAchievementCount
 * @version 1.0.0
 */
class MemberAchievementCount {
    /**
     * Constructs a new <code>MemberAchievementCount</code>.
     * @alias module:model/MemberAchievementCount
     * @implements module:model/CountResponse
     * @implements module:model/MemberAchievementCountAllOf
     * @param entityId {String} A unique identifier of a Entity
     * @param countValue {Number} The value in how many times the achievemnt was issued
     * @param name {String} A the name of the member
     * @param memberId {String} A unique identifier of a Member
     * @param memberRefId {String} The reference to this member in your system
     * @param latestIssuedTimestamp {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     */
    constructor(entityId, countValue, name, memberId, memberRefId, latestIssuedTimestamp) { 
        CountResponse.initialize(this, entityId, countValue);MemberAchievementCountAllOf.initialize(this, name, memberId, memberRefId, latestIssuedTimestamp);
        MemberAchievementCount.initialize(this, entityId, countValue, name, memberId, memberRefId, latestIssuedTimestamp);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, entityId, countValue, name, memberId, memberRefId, latestIssuedTimestamp) { 
        obj['entityId'] = entityId;
        obj['countValue'] = countValue;
        obj['name'] = name;
        obj['memberId'] = memberId;
        obj['memberRefId'] = memberRefId;
        obj['latestIssuedTimestamp'] = latestIssuedTimestamp;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['entityId'];
        obj['countValue'];
        obj['name'];
        obj['memberId'];
        obj['memberRefId'];
        obj['latestIssuedTimestamp'];

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

        obj["fields"]['entityId'];
        obj["fields"]['countValue'];
        obj["fields"]['name'];
        obj["fields"]['memberId'];
        obj["fields"]['memberRefId'];
        obj["fields"]['latestIssuedTimestamp'];

        
        obj["requiredFields"]['entityId'];
        obj["requiredFields"]['countValue'];
        obj["requiredFields"]['name'];
        obj["requiredFields"]['memberId'];
        obj["requiredFields"]['memberRefId'];
        obj["requiredFields"]['latestIssuedTimestamp'];

        return obj;
    }

    /**
     * Constructs a <code>MemberAchievementCount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MemberAchievementCount} obj Optional instance to populate.
     * @return {module:model/MemberAchievementCount} The populated <code>MemberAchievementCount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MemberAchievementCount();
            CountResponse.constructFromObject(data, obj);
            MemberAchievementCountAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('entityId')) {
                obj['entityId'] = ApiClient.convertToType(data['entityId'], 'String');
            }
            if (data.hasOwnProperty('countValue')) {
                obj['countValue'] = ApiClient.convertToType(data['countValue'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('memberId')) {
                obj['memberId'] = ApiClient.convertToType(data['memberId'], 'String');
            }
            if (data.hasOwnProperty('memberRefId')) {
                obj['memberRefId'] = ApiClient.convertToType(data['memberRefId'], 'String');
            }
            if (data.hasOwnProperty('latestIssuedTimestamp')) {
                obj['latestIssuedTimestamp'] = ApiClient.convertToType(data['latestIssuedTimestamp'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * A unique identifier of a Entity
 * @member {String} entityId
 */
MemberAchievementCount.prototype['entityId'] = undefined;

/**
 * The value in how many times the achievemnt was issued
 * @member {Number} countValue
 */
MemberAchievementCount.prototype['countValue'] = undefined;

/**
 * A the name of the member
 * @member {String} name
 */
MemberAchievementCount.prototype['name'] = undefined;

/**
 * A unique identifier of a Member
 * @member {String} memberId
 */
MemberAchievementCount.prototype['memberId'] = undefined;

/**
 * The reference to this member in your system
 * @member {String} memberRefId
 */
MemberAchievementCount.prototype['memberRefId'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} latestIssuedTimestamp
 */
MemberAchievementCount.prototype['latestIssuedTimestamp'] = undefined;


// Implement CountResponse interface:
/**
 * A unique identifier of a Entity
 * @member {String} entityId
 */
CountResponse.prototype['entityId'] = undefined;
/**
 * The value in how many times the achievemnt was issued
 * @member {Number} countValue
 */
CountResponse.prototype['countValue'] = undefined;
// Implement MemberAchievementCountAllOf interface:
/**
 * A the name of the member
 * @member {String} name
 */
MemberAchievementCountAllOf.prototype['name'] = undefined;
/**
 * A unique identifier of a Member
 * @member {String} memberId
 */
MemberAchievementCountAllOf.prototype['memberId'] = undefined;
/**
 * The reference to this member in your system
 * @member {String} memberRefId
 */
MemberAchievementCountAllOf.prototype['memberRefId'] = undefined;
/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} latestIssuedTimestamp
 */
MemberAchievementCountAllOf.prototype['latestIssuedTimestamp'] = undefined;




export default MemberAchievementCount;

