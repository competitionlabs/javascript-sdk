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

/**
 * The RewardReducedAllOf model module.
 * @module model/RewardReducedAllOf
 * @version 3.0.1
 */
class RewardReducedAllOf {
    /**
     * Constructs a new <code>RewardReducedAllOf</code>.
     * @alias module:model/RewardReducedAllOf
     * @param rewardRank {String} If used in the context of contest this will associate with the rank of the leaderboard
     * @param name {String} The name of a reward
     * @param rewardValue {Number} Numerical value of the reward that will be issued based on the reward type
     * @param rewardType {String} Reward Type key
     * @param rewardTypeId {String} A unique id of the Reward Type
     */
    constructor(rewardRank, name, rewardValue, rewardType, rewardTypeId) { 
        
        RewardReducedAllOf.initialize(this, rewardRank, name, rewardValue, rewardType, rewardTypeId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, rewardRank, name, rewardValue, rewardType, rewardTypeId) { 
        obj['rewardRank'] = rewardRank;
        obj['name'] = name;
        obj['rewardValue'] = rewardValue;
        obj['rewardType'] = rewardType;
        obj['rewardTypeId'] = rewardTypeId;
    }

    /**
     * Constructs a <code>RewardReducedAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RewardReducedAllOf} obj Optional instance to populate.
     * @return {module:model/RewardReducedAllOf} The populated <code>RewardReducedAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RewardReducedAllOf();

            if (data.hasOwnProperty('rewardRank')) {
                obj['rewardRank'] = ApiClient.convertToType(data['rewardRank'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('rewardValue')) {
                obj['rewardValue'] = ApiClient.convertToType(data['rewardValue'], 'Number');
            }
            if (data.hasOwnProperty('rewardType')) {
                obj['rewardType'] = ApiClient.convertToType(data['rewardType'], 'String');
            }
            if (data.hasOwnProperty('rewardTypeId')) {
                obj['rewardTypeId'] = ApiClient.convertToType(data['rewardTypeId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * If used in the context of contest this will associate with the rank of the leaderboard
 * @member {String} rewardRank
 */
RewardReducedAllOf.prototype['rewardRank'] = undefined;

/**
 * The name of a reward
 * @member {String} name
 */
RewardReducedAllOf.prototype['name'] = undefined;

/**
 * Numerical value of the reward that will be issued based on the reward type
 * @member {Number} rewardValue
 */
RewardReducedAllOf.prototype['rewardValue'] = undefined;

/**
 * Reward Type key
 * @member {String} rewardType
 */
RewardReducedAllOf.prototype['rewardType'] = undefined;

/**
 * A unique id of the Reward Type
 * @member {String} rewardTypeId
 */
RewardReducedAllOf.prototype['rewardTypeId'] = undefined;






export default RewardReducedAllOf;

