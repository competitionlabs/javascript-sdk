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
import AwardAllOf from './AwardAllOf';
import EntityType from './EntityType';
import ModelDefault from './ModelDefault';

/**
 * The Award model module.
 * @module model/Award
 * @version 1.0.1
 */
class Award {
    /**
     * Constructs a new <code>Award</code>.
     * @alias module:model/Award
     * @implements module:model/ModelDefault
     * @implements module:model/AwardAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param memberId {String} A unique identifier of a Member
     * @param rewardId {String} A unique identifier of a Reward
     * @param rewardTypeKey {String} The type of the Reward
     * @param rewardTypeId {String} A unique id of the Reward Type
     * @param rewardRank {String} If used in the context of contest this will associate with the rank of the leaderboard
     * @param rewardValue {Number} Numerical value of the reward that will be issued based on the reward type
     * @param claimed {Boolean} has the award been claimed or not
     * @param delay {Number} Delay of issuing a reward in minutes
     * @param entityType {module:model/EntityType} 
     * @param entityId {String} The Id of the contest or achievement related to this Award. Dependant on entityType
     */
    constructor(id, spaceName, created, memberId, rewardId, rewardTypeKey, rewardTypeId, rewardRank, rewardValue, claimed, delay, entityType, entityId) { 
        ModelDefault.initialize(this, id, spaceName, created);AwardAllOf.initialize(this, memberId, rewardId, rewardTypeKey, rewardTypeId, rewardRank, rewardValue, claimed, delay, entityType, entityId);
        Award.initialize(this, id, spaceName, created, memberId, rewardId, rewardTypeKey, rewardTypeId, rewardRank, rewardValue, claimed, delay, entityType, entityId);
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['id'] = null;
        obj['spaceName'] = null;
        obj['created'] = null;
        obj['memberId'] = null;
        obj['rewardId'] = null;
        obj['rewardTypeKey'] = null;
        obj['rewardTypeId'] = null;
        obj['rewardRank'] = null;
        obj['rewardValue'] = null;
        obj['memberAcknowledgmentRequired'] = null;
        obj['claimed'] = null;
        obj['delay'] = null;
        obj['entityType'] = new EntityType().model();
        obj['entityId'] = null;
        obj['pointInTime'] = null;
        obj['period'] = null;
        obj['constraints'] = [null];

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

        obj["fields"]['id'] = { "type": 'String' };
        obj["fields"]['spaceName'] = { "type": 'String' };
        obj["fields"]['created'] = { "type": 'Date' };
        obj["fields"]['memberId'] = { "type": 'String' };
        obj["fields"]['rewardId'] = { "type": 'String' };
        obj["fields"]['rewardTypeKey'] = { "type": 'String' };
        obj["fields"]['rewardTypeId'] = { "type": 'String' };
        obj["fields"]['rewardRank'] = { "type": 'String' };
        obj["fields"]['rewardValue'] = { "type": 'Number' };
        obj["fields"]['memberAcknowledgmentRequired'] = { "type": 'Boolean' };
        obj["fields"]['claimed'] = { "type": 'Boolean' };
        obj["fields"]['delay'] = { "type": 'Number' };
        obj["fields"]['entityType'] = new EntityType().modelMap();
        obj["fields"]['entityId'] = { "type": 'String' };
        obj["fields"]['pointInTime'] = { "type": 'Date' };
        obj["fields"]['period'] = { "type": 'Number' };
        obj["fields"]['constraints'] = [{ "type": 'String' }];

        
        obj["requiredFields"]['id'] = { "type": 'String' };
        obj["requiredFields"]['spaceName'] = { "type": 'String' };
        obj["requiredFields"]['created'] = { "type": 'Date' };
        obj["requiredFields"]['memberId'] = { "type": 'String' };
        obj["requiredFields"]['rewardId'] = { "type": 'String' };
        obj["requiredFields"]['rewardTypeKey'] = { "type": 'String' };
        obj["requiredFields"]['rewardTypeId'] = { "type": 'String' };
        obj["requiredFields"]['rewardRank'] = { "type": 'String' };
        obj["requiredFields"]['rewardValue'] = { "type": 'Number' };
        obj["requiredFields"]['claimed'] = { "type": 'Boolean' };
        obj["requiredFields"]['delay'] = { "type": 'Number' };
        obj["requiredFields"]['entityType'] = new EntityType().modelMap();
        obj["requiredFields"]['entityId'] = { "type": 'String' };

        return obj;
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, memberId, rewardId, rewardTypeKey, rewardTypeId, rewardRank, rewardValue, claimed, delay, entityType, entityId) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['memberId'] = memberId;
        obj['rewardId'] = rewardId;
        obj['rewardTypeKey'] = rewardTypeKey;
        obj['rewardTypeId'] = rewardTypeId;
        obj['rewardRank'] = rewardRank;
        obj['rewardValue'] = rewardValue;
        obj['claimed'] = claimed;
        obj['delay'] = delay;
        obj['entityType'] = entityType;
        obj['entityId'] = entityId;
    }

    /**
     * Constructs a <code>Award</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Award} obj Optional instance to populate.
     * @return {module:model/Award} The populated <code>Award</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Award();
            ModelDefault.constructFromObject(data, obj);
            AwardAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('spaceName')) {
                obj['spaceName'] = ApiClient.convertToType(data['spaceName'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
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
            if (data.hasOwnProperty('memberAcknowledgmentRequired')) {
                obj['memberAcknowledgmentRequired'] = ApiClient.convertToType(data['memberAcknowledgmentRequired'], 'Boolean');
            }
            if (data.hasOwnProperty('claimed')) {
                obj['claimed'] = ApiClient.convertToType(data['claimed'], 'Boolean');
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
 * A unique system generated identifier
 * @member {String} id
 */
Award.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
Award.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
Award.prototype['created'] = undefined;

/**
 * A unique identifier of a Member
 * @member {String} memberId
 */
Award.prototype['memberId'] = undefined;

/**
 * A unique identifier of a Reward
 * @member {String} rewardId
 */
Award.prototype['rewardId'] = undefined;

/**
 * The type of the Reward
 * @member {String} rewardTypeKey
 */
Award.prototype['rewardTypeKey'] = undefined;

/**
 * A unique id of the Reward Type
 * @member {String} rewardTypeId
 */
Award.prototype['rewardTypeId'] = undefined;

/**
 * If used in the context of contest this will associate with the rank of the leaderboard
 * @member {String} rewardRank
 */
Award.prototype['rewardRank'] = undefined;

/**
 * Numerical value of the reward that will be issued based on the reward type
 * @member {Number} rewardValue
 */
Award.prototype['rewardValue'] = undefined;

/**
 * Requires member acknowledgment to claim a reward. If set to True reward will not be automatically issued
 * @member {Boolean} memberAcknowledgmentRequired
 * @default false
 */
Award.prototype['memberAcknowledgmentRequired'] = false;

/**
 * has the award been claimed or not
 * @member {Boolean} claimed
 */
Award.prototype['claimed'] = undefined;

/**
 * Delay of issuing a reward in minutes
 * @member {Number} delay
 * @default 0
 */
Award.prototype['delay'] = 0;

/**
 * @member {module:model/EntityType} entityType
 */
Award.prototype['entityType'] = undefined;

/**
 * The Id of the contest or achievement related to this Award. Dependant on entityType
 * @member {String} entityId
 */
Award.prototype['entityId'] = undefined;

/**
 * ISO8601 timestamp for when an Award is available until a specific point in time. All records are stored in UTC time zone. * There can only be one time definition used for claim period either \"pointInTime\" or \"period\"
 * @member {Date} pointInTime
 */
Award.prototype['pointInTime'] = undefined;

/**
 * Claimable duration in minutes, this value will set the controls until when the award is claimable. * There can only be one time definition used for claim period either \"pointInTime\" or \"period\"
 * @member {Number} period
 * @default 0
 */
Award.prototype['period'] = 0;

/**
 * Additional constraints, if the value is present it means the
 * @member {Array.<String>} constraints
 */
Award.prototype['constraints'] = undefined;


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
// Implement AwardAllOf interface:
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
 * Requires member acknowledgment to claim a reward. If set to True reward will not be automatically issued
 * @member {Boolean} memberAcknowledgmentRequired
 * @default false
 */
AwardAllOf.prototype['memberAcknowledgmentRequired'] = false;
/**
 * has the award been claimed or not
 * @member {Boolean} claimed
 */
AwardAllOf.prototype['claimed'] = undefined;
/**
 * Delay of issuing a reward in minutes
 * @member {Number} delay
 * @default 0
 */
AwardAllOf.prototype['delay'] = 0;
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
 * @default 0
 */
AwardAllOf.prototype['period'] = 0;
/**
 * Additional constraints, if the value is present it means the
 * @member {Array.<String>} constraints
 */
AwardAllOf.prototype['constraints'] = undefined;




export default Award;

