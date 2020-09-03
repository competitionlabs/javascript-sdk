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
import EntityType from './EntityType';

/**
 * The AwardAllOf model module.
 * @module model/AwardAllOf
 * @version 1.0.4
 */
class AwardAllOf {
    /**
     * Constructs a new <code>AwardAllOf</code>.
     * @alias module:model/AwardAllOf
     * @param memberId {String} A unique identifier of a Member
     * @param rewardId {String} A unique identifier of a Reward
     * @param rewardTypeKey {String} The type of the Reward
     * @param rewardTypeId {String} A unique id of the Reward Type
     * @param rewardRank {String} If used in the context of contest this will associate with the rank of the leaderboard
     * @param rewardValue {Number} Numerical value of the reward that will be issued based on the reward type
     * @param delay {Number} Delay of issuing a reward in minutes
     * @param entityType {module:model/EntityType} 
     * @param entityId {String} The Id of the contest or achievement related to this Award. Dependant on entityType
     */
    constructor(memberId, rewardId, rewardTypeKey, rewardTypeId, rewardRank, rewardValue, delay, entityType, entityId) { 
        
        AwardAllOf.initialize(this, memberId, rewardId, rewardTypeKey, rewardTypeId, rewardRank, rewardValue, delay, entityType, entityId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, memberId, rewardId, rewardTypeKey, rewardTypeId, rewardRank, rewardValue, delay, entityType, entityId) { 
        obj['memberId'] = memberId;
        obj['rewardId'] = rewardId;
        obj['rewardTypeKey'] = rewardTypeKey;
        obj['rewardTypeId'] = rewardTypeId;
        obj['rewardRank'] = rewardRank;
        obj['rewardValue'] = rewardValue;
        obj['delay'] = delay;
        obj['entityType'] = entityType;
        obj['entityId'] = entityId;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['memberId'];
        obj['rewardId'];
        obj['rewardTypeKey'];
        obj['rewardTypeId'];
        obj['rewardRank'];
        obj['rewardValue'];
        obj['delay'];
        obj['entityType'];
        obj['entityId'];
        obj['pointInTime'];
        obj['period'];
        obj['constraints'];

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

        obj["fields"]['memberId'];
        obj["fields"]['rewardId'];
        obj["fields"]['rewardTypeKey'];
        obj["fields"]['rewardTypeId'];
        obj["fields"]['rewardRank'];
        obj["fields"]['rewardValue'];
        obj["fields"]['delay'];
        obj["fields"]['entityType'];
        obj["fields"]['entityId'];
        obj["fields"]['pointInTime'];
        obj["fields"]['period'];
        obj["fields"]['constraints'];

        
        obj["requiredFields"]['memberId'];
        obj["requiredFields"]['rewardId'];
        obj["requiredFields"]['rewardTypeKey'];
        obj["requiredFields"]['rewardTypeId'];
        obj["requiredFields"]['rewardRank'];
        obj["requiredFields"]['rewardValue'];
        obj["requiredFields"]['delay'];
        obj["requiredFields"]['entityType'];
        obj["requiredFields"]['entityId'];

        return obj;
    }

    /**
     * Constructs a <code>AwardAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AwardAllOf} obj Optional instance to populate.
     * @return {module:model/AwardAllOf} The populated <code>AwardAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AwardAllOf();

            if (data.hasOwnProperty('memberId')) {
                obj['memberId'] = ApiClient.convertToType(data['memberId'], 'String');
            }
            if (data.hasOwnProperty('rewardId')) {
                obj['rewardId'] = ApiClient.convertToType(data['rewardId'], 'String');
            }
            if (data.hasOwnProperty('rewardTypeKey')) {
                obj['rewardTypeKey'] = ApiClient.convertToType(data['rewardTypeKey'], 'String');
            }
            if (data.hasOwnProperty('rewardTypeId')) {
                obj['rewardTypeId'] = ApiClient.convertToType(data['rewardTypeId'], 'String');
            }
            if (data.hasOwnProperty('rewardRank')) {
                obj['rewardRank'] = ApiClient.convertToType(data['rewardRank'], 'String');
            }
            if (data.hasOwnProperty('rewardValue')) {
                obj['rewardValue'] = ApiClient.convertToType(data['rewardValue'], 'Number');
            }
            if (data.hasOwnProperty('delay')) {
                obj['delay'] = ApiClient.convertToType(data['delay'], 'Number');
            }
            if (data.hasOwnProperty('entityType')) {
                obj['entityType'] = EntityType.constructFromObject(data['entityType']);
            }
            if (data.hasOwnProperty('entityId')) {
                obj['entityId'] = ApiClient.convertToType(data['entityId'], 'String');
            }
            if (data.hasOwnProperty('pointInTime')) {
                obj['pointInTime'] = ApiClient.convertToType(data['pointInTime'], 'Date');
            }
            if (data.hasOwnProperty('period')) {
                obj['period'] = ApiClient.convertToType(data['period'], 'Number');
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * A unique identifier of a Member
 * @member {String} memberId
 */
AwardAllOf.prototype['memberId'] = undefined;

/**
 * A unique identifier of a Reward
 * @member {String} rewardId
 */
AwardAllOf.prototype['rewardId'] = undefined;

/**
 * The type of the Reward
 * @member {String} rewardTypeKey
 */
AwardAllOf.prototype['rewardTypeKey'] = undefined;

/**
 * A unique id of the Reward Type
 * @member {String} rewardTypeId
 */
AwardAllOf.prototype['rewardTypeId'] = undefined;

/**
 * If used in the context of contest this will associate with the rank of the leaderboard
 * @member {String} rewardRank
 */
AwardAllOf.prototype['rewardRank'] = undefined;

/**
 * Numerical value of the reward that will be issued based on the reward type
 * @member {Number} rewardValue
 */
AwardAllOf.prototype['rewardValue'] = undefined;

/**
 * Delay of issuing a reward in minutes
 * @member {Number} delay
 */
AwardAllOf.prototype['delay'] = undefined;

/**
 * @member {module:model/EntityType} entityType
 */
AwardAllOf.prototype['entityType'] = undefined;

/**
 * The Id of the contest or achievement related to this Award. Dependant on entityType
 * @member {String} entityId
 */
AwardAllOf.prototype['entityId'] = undefined;

/**
 * ISO8601 timestamp for when an Award is available until a specific point in time. All records are stored in UTC time zone. * There can only be one time definition used for claim period either \"pointInTime\" or \"period\"
 * @member {Date} pointInTime
 */
AwardAllOf.prototype['pointInTime'] = undefined;

/**
 * Claimable duration in minutes, this value will set the controls until when the award is claimable. * There can only be one time definition used for claim period either \"pointInTime\" or \"period\"
 * @member {Number} period
 */
AwardAllOf.prototype['period'] = undefined;

/**
 * Additional constraints, if the value is present it means the
 * @member {Array.<String>} constraints
 */
AwardAllOf.prototype['constraints'] = undefined;






export default AwardAllOf;

