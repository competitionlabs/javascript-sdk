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
import AchievementAllOf from './AchievementAllOf';
import AchievementLiveStatus from './AchievementLiveStatus';
import DependantOn from './DependantOn';
import Metadata from './Metadata';
import ModelDefault from './ModelDefault';
import RewardReduced from './RewardReduced';
import RuleSet from './RuleSet';
import Scheduling from './Scheduling';
import Translation from './Translation';

/**
 * The Achievement model module.
 * @module model/Achievement
 * @version 1.0.4
 */
class Achievement {
    /**
     * Constructs a new <code>Achievement</code>.
     * @alias module:model/Achievement
     * @implements module:model/ModelDefault
     * @implements module:model/AchievementAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param name {String} A name for the Achievement. Can be translated
     * @param icon {String} An Icon id that has been pre uploaded to the system to display for Achievement
     * @param ruleSets {Array.<module:model/RuleSet>} 
     * @param scheduling {module:model/Scheduling} 
     * @param achievementLiveStatus {module:model/AchievementLiveStatus} 
     */
    constructor(id, spaceName, created, name, icon, ruleSets, scheduling, achievementLiveStatus) { 
        ModelDefault.initialize(this, id, spaceName, created);AchievementAllOf.initialize(this, name, icon, ruleSets, scheduling, achievementLiveStatus);
        Achievement.initialize(this, id, spaceName, created, name, icon, ruleSets, scheduling, achievementLiveStatus);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, name, icon, ruleSets, scheduling, achievementLiveStatus) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['name'] = name;
        obj['icon'] = icon;
        obj['ruleSets'] = ruleSets;
        obj['scheduling'] = scheduling;
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
        obj['description'];
        obj['icon'];
        obj['ruleSets'];
        obj['dependantOn'];
        obj['scheduling'];
        obj['achievementLiveStatus'];
        obj['category'];
        obj['memberGroups'];
        obj['metadata'];
        obj['translations'];
        obj['translatableFields'];
        obj['rewards'];
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

        obj["fields"]['id'];
        obj["fields"]['spaceName'];
        obj["fields"]['created'];
        obj["fields"]['name'];
        obj["fields"]['description'];
        obj["fields"]['icon'];
        obj["fields"]['ruleSets'];
        obj["fields"]['dependantOn'];
        obj["fields"]['scheduling'];
        obj["fields"]['achievementLiveStatus'];
        obj["fields"]['category'];
        obj["fields"]['memberGroups'];
        obj["fields"]['metadata'];
        obj["fields"]['translations'];
        obj["fields"]['translatableFields'];
        obj["fields"]['rewards'];
        obj["fields"]['constraints'];

        
        obj["requiredFields"]['id'];
        obj["requiredFields"]['spaceName'];
        obj["requiredFields"]['created'];
        obj["requiredFields"]['name'];
        obj["requiredFields"]['icon'];
        obj["requiredFields"]['ruleSets'];
        obj["requiredFields"]['scheduling'];
        obj["requiredFields"]['achievementLiveStatus'];

        return obj;
    }

    /**
     * Constructs a <code>Achievement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Achievement} obj Optional instance to populate.
     * @return {module:model/Achievement} The populated <code>Achievement</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Achievement();
            ModelDefault.constructFromObject(data, obj);
            AchievementAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('icon')) {
                obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
            }
            if (data.hasOwnProperty('ruleSets')) {
                obj['ruleSets'] = ApiClient.convertToType(data['ruleSets'], [RuleSet]);
            }
            if (data.hasOwnProperty('dependantOn')) {
                obj['dependantOn'] = DependantOn.constructFromObject(data['dependantOn']);
            }
            if (data.hasOwnProperty('scheduling')) {
                obj['scheduling'] = Scheduling.constructFromObject(data['scheduling']);
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
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], [Metadata]);
            }
            if (data.hasOwnProperty('translations')) {
                obj['translations'] = ApiClient.convertToType(data['translations'], [Translation]);
            }
            if (data.hasOwnProperty('translatableFields')) {
                obj['translatableFields'] = ApiClient.convertToType(data['translatableFields'], ['String']);
            }
            if (data.hasOwnProperty('rewards')) {
                obj['rewards'] = ApiClient.convertToType(data['rewards'], [RewardReduced]);
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
Achievement.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
Achievement.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
Achievement.prototype['created'] = undefined;

/**
 * A name for the Achievement. Can be translated
 * @member {String} name
 */
Achievement.prototype['name'] = undefined;

/**
 * A name for the Achievement. Can be translated
 * @member {String} description
 */
Achievement.prototype['description'] = undefined;

/**
 * An Icon id that has been pre uploaded to the system to display for Achievement
 * @member {String} icon
 */
Achievement.prototype['icon'] = undefined;

/**
 * @member {Array.<module:model/RuleSet>} ruleSets
 */
Achievement.prototype['ruleSets'] = undefined;

/**
 * @member {module:model/DependantOn} dependantOn
 */
Achievement.prototype['dependantOn'] = undefined;

/**
 * @member {module:model/Scheduling} scheduling
 */
Achievement.prototype['scheduling'] = undefined;

/**
 * @member {module:model/AchievementLiveStatus} achievementLiveStatus
 */
Achievement.prototype['achievementLiveStatus'] = undefined;

/**
 * Categorisation of the achievements
 * @member {Array.<String>} category
 */
Achievement.prototype['category'] = undefined;

/**
 * A group of members that can receive the achievement
 * @member {Array.<String>} memberGroups
 */
Achievement.prototype['memberGroups'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
Achievement.prototype['metadata'] = undefined;

/**
 * @member {Array.<module:model/Translation>} translations
 */
Achievement.prototype['translations'] = undefined;

/**
 * Achievements translatable fields
 * @member {Array.<String>} translatableFields
 */
Achievement.prototype['translatableFields'] = undefined;

/**
 * @member {Array.<module:model/RewardReduced>} rewards
 */
Achievement.prototype['rewards'] = undefined;

/**
 * Additional constraints, if set means true
 * @member {Array.<String>} constraints
 */
Achievement.prototype['constraints'] = undefined;


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
// Implement AchievementAllOf interface:
/**
 * A name for the Achievement. Can be translated
 * @member {String} name
 */
AchievementAllOf.prototype['name'] = undefined;
/**
 * A name for the Achievement. Can be translated
 * @member {String} description
 */
AchievementAllOf.prototype['description'] = undefined;
/**
 * An Icon id that has been pre uploaded to the system to display for Achievement
 * @member {String} icon
 */
AchievementAllOf.prototype['icon'] = undefined;
/**
 * @member {Array.<module:model/RuleSet>} ruleSets
 */
AchievementAllOf.prototype['ruleSets'] = undefined;
/**
 * @member {module:model/DependantOn} dependantOn
 */
AchievementAllOf.prototype['dependantOn'] = undefined;
/**
 * @member {module:model/Scheduling} scheduling
 */
AchievementAllOf.prototype['scheduling'] = undefined;
/**
 * @member {module:model/AchievementLiveStatus} achievementLiveStatus
 */
AchievementAllOf.prototype['achievementLiveStatus'] = undefined;
/**
 * Categorisation of the achievements
 * @member {Array.<String>} category
 */
AchievementAllOf.prototype['category'] = undefined;
/**
 * A group of members that can receive the achievement
 * @member {Array.<String>} memberGroups
 */
AchievementAllOf.prototype['memberGroups'] = undefined;
/**
 * @member {Array.<module:model/Metadata>} metadata
 */
AchievementAllOf.prototype['metadata'] = undefined;
/**
 * @member {Array.<module:model/Translation>} translations
 */
AchievementAllOf.prototype['translations'] = undefined;
/**
 * Achievements translatable fields
 * @member {Array.<String>} translatableFields
 */
AchievementAllOf.prototype['translatableFields'] = undefined;
/**
 * @member {Array.<module:model/RewardReduced>} rewards
 */
AchievementAllOf.prototype['rewards'] = undefined;
/**
 * Additional constraints, if set means true
 * @member {Array.<String>} constraints
 */
AchievementAllOf.prototype['constraints'] = undefined;




export default Achievement;

