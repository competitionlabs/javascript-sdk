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
import AchievementLiveStatus from './AchievementLiveStatus';
import AchievementReducedAllOf from './AchievementReducedAllOf';
import ModelDefault from './ModelDefault';

/**
 * The AchievementReduced model module.
 * @module model/AchievementReduced
 * @version 1.0.0
 */
class AchievementReduced {
    /**
     * Constructs a new <code>AchievementReduced</code>.
     * @alias module:model/AchievementReduced
     * @implements module:model/ModelDefault
     * @implements module:model/AchievementReducedAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param name {String} A name for the Achievement. Can be translated
     * @param achievementLiveStatus {module:model/AchievementLiveStatus} 
     */
    constructor(id, spaceName, created, name, achievementLiveStatus) { 
        ModelDefault.initialize(this, id, spaceName, created);AchievementReducedAllOf.initialize(this, name, achievementLiveStatus);
        AchievementReduced.initialize(this, id, spaceName, created, name, achievementLiveStatus);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, name, achievementLiveStatus) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['name'] = name;
        obj['achievementLiveStatus'] = achievementLiveStatus;
    }

    /**
     * Constructs a <code>AchievementReduced</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AchievementReduced} obj Optional instance to populate.
     * @return {module:model/AchievementReduced} The populated <code>AchievementReduced</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AchievementReduced();
            ModelDefault.constructFromObject(data, obj);
            AchievementReducedAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('spaceName')) {
                obj['spaceName'] = ApiClient.convertToType(data['spaceName'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('achievementLiveStatus')) {
                obj['achievementLiveStatus'] = AchievementLiveStatus.constructFromObject(data['achievementLiveStatus']);
            }
            if (data.hasOwnProperty('tagsId')) {
                obj['tagsId'] = ApiClient.convertToType(data['tagsId'], ['String']);
            }
            if (data.hasOwnProperty('memberGroupsId')) {
                obj['memberGroupsId'] = ApiClient.convertToType(data['memberGroupsId'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
AchievementReduced.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
AchievementReduced.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
AchievementReduced.prototype['created'] = undefined;

/**
 * A name for the Achievement. Can be translated
 * @member {String} name
 */
AchievementReduced.prototype['name'] = undefined;

/**
 * @member {module:model/AchievementLiveStatus} achievementLiveStatus
 */
AchievementReduced.prototype['achievementLiveStatus'] = undefined;

/**
 * Categorisation of the achievements
 * @member {Array.<String>} tagsId
 */
AchievementReduced.prototype['tagsId'] = undefined;

/**
 * A group of members that can receive the achievement
 * @member {Array.<String>} memberGroupsId
 */
AchievementReduced.prototype['memberGroupsId'] = undefined;


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
// Implement AchievementReducedAllOf interface:
/**
 * A name for the Achievement. Can be translated
 * @member {String} name
 */
AchievementReducedAllOf.prototype['name'] = undefined;
/**
 * @member {module:model/AchievementLiveStatus} achievementLiveStatus
 */
AchievementReducedAllOf.prototype['achievementLiveStatus'] = undefined;
/**
 * Categorisation of the achievements
 * @member {Array.<String>} tagsId
 */
AchievementReducedAllOf.prototype['tagsId'] = undefined;
/**
 * A group of members that can receive the achievement
 * @member {Array.<String>} memberGroupsId
 */
AchievementReducedAllOf.prototype['memberGroupsId'] = undefined;




export default AchievementReduced;

