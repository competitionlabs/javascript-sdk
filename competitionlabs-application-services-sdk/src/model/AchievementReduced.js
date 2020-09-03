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
import AchievementLiveStatus from './AchievementLiveStatus';
import AchievementReducedAllOf from './AchievementReducedAllOf';
import ModelDefault from './ModelDefault';

/**
 * The AchievementReduced model module.
 * @module model/AchievementReduced
 * @version 1.0.4
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
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['id'];
        obj['spaceName'];
        obj['created'];
        obj['name'];
        obj['achievementLiveStatus'];
        obj['category'];
        obj['memberGroups'];

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

        obj["fields"]['id'];
        obj["fields"]['spaceName'];
        obj["fields"]['created'];
        obj["fields"]['name'];
        obj["fields"]['achievementLiveStatus'];
        obj["fields"]['category'];
        obj["fields"]['memberGroups'];

        
        obj["requiredFields"]['id'];
        obj["requiredFields"]['spaceName'];
        obj["requiredFields"]['created'];
        obj["requiredFields"]['name'];
        obj["requiredFields"]['achievementLiveStatus'];

        return obj;
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
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], ['String']);
            }
            if (data.hasOwnProperty('memberGroups')) {
                obj['memberGroups'] = ApiClient.convertToType(data['memberGroups'], ['String']);
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
 * @member {Array.<String>} category
 */
AchievementReduced.prototype['category'] = undefined;

/**
 * A group of members that can receive the achievement
 * @member {Array.<String>} memberGroups
 */
AchievementReduced.prototype['memberGroups'] = undefined;


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
 * @member {Array.<String>} category
 */
AchievementReducedAllOf.prototype['category'] = undefined;
/**
 * A group of members that can receive the achievement
 * @member {Array.<String>} memberGroups
 */
AchievementReducedAllOf.prototype['memberGroups'] = undefined;




export default AchievementReduced;

