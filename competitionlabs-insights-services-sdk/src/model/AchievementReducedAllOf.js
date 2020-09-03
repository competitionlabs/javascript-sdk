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

/**
 * The AchievementReducedAllOf model module.
 * @module model/AchievementReducedAllOf
 * @version 1.0.0
 */
class AchievementReducedAllOf {
    /**
     * Constructs a new <code>AchievementReducedAllOf</code>.
     * @alias module:model/AchievementReducedAllOf
     * @param name {String} A name for the Achievement. Can be translated
     * @param achievementLiveStatus {module:model/AchievementLiveStatus} 
     */
    constructor(name, achievementLiveStatus) { 
        
        AchievementReducedAllOf.initialize(this, name, achievementLiveStatus);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, achievementLiveStatus) { 
        obj['name'] = name;
        obj['achievementLiveStatus'] = achievementLiveStatus;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

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

        obj["fields"]['name'];
        obj["fields"]['achievementLiveStatus'];
        obj["fields"]['category'];
        obj["fields"]['memberGroups'];

        
        obj["requiredFields"]['name'];
        obj["requiredFields"]['achievementLiveStatus'];

        return obj;
    }

    /**
     * Constructs a <code>AchievementReducedAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AchievementReducedAllOf} obj Optional instance to populate.
     * @return {module:model/AchievementReducedAllOf} The populated <code>AchievementReducedAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AchievementReducedAllOf();

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






export default AchievementReducedAllOf;

