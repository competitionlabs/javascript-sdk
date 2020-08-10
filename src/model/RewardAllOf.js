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
import Metadata from './Metadata';
import Translation from './Translation';

/**
 * The RewardAllOf model module.
 * @module model/RewardAllOf
 * @version 1.0.0
 */
class RewardAllOf {
    /**
     * Constructs a new <code>RewardAllOf</code>.
     * @alias module:model/RewardAllOf
     * @param entityType {module:model/EntityType} 
     * @param entityId {String} A unique identifier of an achievement or contest. Dependant on entityType
     * @param rewardRank {String} If used in the context of contest this will associate with the rank of the leaderboard
     * @param rewardName {String} The name of a reward
     * @param value {Number} Numerical value of the reward that will be issued based on the reward type
     * @param rewardType {String} Reward Type key
     * @param rewardTypeId {String} A unique id of the Reward Type
     * @param description {String} The description of a Reward
     * @param delay {Number} Delay of issuing a reward in minutes
     */
    constructor(entityType, entityId, rewardRank, rewardName, value, rewardType, rewardTypeId, description, delay) { 
        
        RewardAllOf.initialize(this, entityType, entityId, rewardRank, rewardName, value, rewardType, rewardTypeId, description, delay);
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['entityType'] = new EntityType().model();
        obj['entityId'] = null;
        obj['rewardRank'] = null;
        obj['rewardName'] = null;
        obj['value'] = null;
        obj['rewardType'] = null;
        obj['rewardTypeId'] = null;
        obj['description'] = null;
        obj['delay'] = null;
        obj['icon'] = null;
        obj['metadata'] = [new Metadata().model()];
        obj['pointInTime'] = null;
        obj['period'] = null;
        obj['translations'] = [new Translation().model()];
        obj['translatableFields'] = [null];
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

        obj["fields"]['entityType'] = new EntityType().modelMap();
        obj["fields"]['entityId'] = { "type": 'String' };
        obj["fields"]['rewardRank'] = { "type": 'String' };
        obj["fields"]['rewardName'] = { "type": 'String' };
        obj["fields"]['value'] = { "type": 'Number' };
        obj["fields"]['rewardType'] = { "type": 'String' };
        obj["fields"]['rewardTypeId'] = { "type": 'String' };
        obj["fields"]['description'] = { "type": 'String' };
        obj["fields"]['delay'] = { "type": 'Number' };
        obj["fields"]['icon'] = { "type": 'String' };
        obj["fields"]['metadata'] = [new Metadata().modelMap()];
        obj["fields"]['pointInTime'] = { "type": 'Date' };
        obj["fields"]['period'] = { "type": 'Number' };
        obj["fields"]['translations'] = [new Translation().modelMap()];
        obj["fields"]['translatableFields'] = [{ "type": 'String' }];
        obj["fields"]['constraints'] = [{ "type": 'String' }];

        
        obj["requiredFields"]['entityType'] = new EntityType().modelMap();
        obj["requiredFields"]['entityId'] = { "type": 'String' };
        obj["requiredFields"]['rewardRank'] = { "type": 'String' };
        obj["requiredFields"]['rewardName'] = { "type": 'String' };
        obj["requiredFields"]['value'] = { "type": 'Number' };
        obj["requiredFields"]['rewardType'] = { "type": 'String' };
        obj["requiredFields"]['rewardTypeId'] = { "type": 'String' };
        obj["requiredFields"]['description'] = { "type": 'String' };
        obj["requiredFields"]['delay'] = { "type": 'Number' };

        return obj;
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, entityType, entityId, rewardRank, rewardName, value, rewardType, rewardTypeId, description, delay) { 
        obj['entityType'] = entityType;
        obj['entityId'] = entityId;
        obj['rewardRank'] = rewardRank;
        obj['rewardName'] = rewardName;
        obj['value'] = value;
        obj['rewardType'] = rewardType;
        obj['rewardTypeId'] = rewardTypeId;
        obj['description'] = description;
        obj['delay'] = delay;
    }

    /**
     * Constructs a <code>RewardAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RewardAllOf} obj Optional instance to populate.
     * @return {module:model/RewardAllOf} The populated <code>RewardAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RewardAllOf();

            if (data.hasOwnProperty('entityType')) {
                obj['entityType'] = EntityType.constructFromObject(data['entityType']);
            }
            if (data.hasOwnProperty('entityId')) {
                obj['entityId'] = ApiClient.convertToType(data['entityId'], 'String');
            }
            if (data.hasOwnProperty('rewardRank')) {
                obj['rewardRank'] = ApiClient.convertToType(data['rewardRank'], 'String');
            }
            if (data.hasOwnProperty('rewardName')) {
                obj['rewardName'] = ApiClient.convertToType(data['rewardName'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('rewardType')) {
                obj['rewardType'] = ApiClient.convertToType(data['rewardType'], 'String');
            }
            if (data.hasOwnProperty('rewardTypeId')) {
                obj['rewardTypeId'] = ApiClient.convertToType(data['rewardTypeId'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('delay')) {
                obj['delay'] = ApiClient.convertToType(data['delay'], 'Number');
            }
            if (data.hasOwnProperty('icon')) {
                obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], [Metadata]);
            }
            if (data.hasOwnProperty('pointInTime')) {
                obj['pointInTime'] = ApiClient.convertToType(data['pointInTime'], 'Date');
            }
            if (data.hasOwnProperty('period')) {
                obj['period'] = ApiClient.convertToType(data['period'], 'Number');
            }
            if (data.hasOwnProperty('translations')) {
                obj['translations'] = ApiClient.convertToType(data['translations'], [Translation]);
            }
            if (data.hasOwnProperty('translatableFields')) {
                obj['translatableFields'] = ApiClient.convertToType(data['translatableFields'], ['String']);
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/EntityType} entityType
 */
RewardAllOf.prototype['entityType'] = undefined;

/**
 * A unique identifier of an achievement or contest. Dependant on entityType
 * @member {String} entityId
 */
RewardAllOf.prototype['entityId'] = undefined;

/**
 * If used in the context of contest this will associate with the rank of the leaderboard
 * @member {String} rewardRank
 */
RewardAllOf.prototype['rewardRank'] = undefined;

/**
 * The name of a reward
 * @member {String} rewardName
 */
RewardAllOf.prototype['rewardName'] = undefined;

/**
 * Numerical value of the reward that will be issued based on the reward type
 * @member {Number} value
 */
RewardAllOf.prototype['value'] = undefined;

/**
 * Reward Type key
 * @member {String} rewardType
 */
RewardAllOf.prototype['rewardType'] = undefined;

/**
 * A unique id of the Reward Type
 * @member {String} rewardTypeId
 */
RewardAllOf.prototype['rewardTypeId'] = undefined;

/**
 * The description of a Reward
 * @member {String} description
 */
RewardAllOf.prototype['description'] = undefined;

/**
 * Delay of issuing a reward in minutes
 * @member {Number} delay
 * @default 0
 */
RewardAllOf.prototype['delay'] = 0;

/**
 * An Icon id that has been pre uploaded to the system to display for Achievement
 * @member {String} icon
 */
RewardAllOf.prototype['icon'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
RewardAllOf.prototype['metadata'] = undefined;

/**
 * ISO8601 timestamp for when a Reward is available until a specific point in time. All records are stored in UTC time zone
 * @member {Date} pointInTime
 */
RewardAllOf.prototype['pointInTime'] = undefined;

/**
 * Reward available for a period of time from issuing in minutes
 * @member {Number} period
 * @default 0
 */
RewardAllOf.prototype['period'] = 0;

/**
 * @member {Array.<module:model/Translation>} translations
 */
RewardAllOf.prototype['translations'] = undefined;

/**
 * Rewards translatable fields
 * @member {Array.<String>} translatableFields
 */
RewardAllOf.prototype['translatableFields'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
RewardAllOf.prototype['constraints'] = undefined;






export default RewardAllOf;

