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
import DependantOn from './DependantOn';
import Metadata from './Metadata';
import RuleSet from './RuleSet';
import Scheduling from './Scheduling';
import Translation from './Translation';
import UpdateAchievementRequestAllOf from './UpdateAchievementRequestAllOf';
import UpdateModelDefault from './UpdateModelDefault';
import UpdateRewardRequest from './UpdateRewardRequest';

/**
 * The UpdateAchievementRequest model module.
 * @module model/UpdateAchievementRequest
 * @version 1.0.0
 */
class UpdateAchievementRequest {
    /**
     * Constructs a new <code>UpdateAchievementRequest</code>.
     * @alias module:model/UpdateAchievementRequest
     * @implements module:model/UpdateModelDefault
     * @implements module:model/UpdateAchievementRequestAllOf
     * @param id {String} A unique system generated identifier
     */
    constructor(id) { 
        UpdateModelDefault.initialize(this, id);UpdateAchievementRequestAllOf.initialize(this);
        UpdateAchievementRequest.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['id'];
        obj['name'];
        obj['description'];
        obj['isHidden'];
        obj['icon'];
        obj['ruleSets'];
        obj['dependantOn'];
        obj['scheduling'];
        obj['achievementLiveStatus'];
        obj['category'];
        obj['memberGroups'];
        obj['metadata'];
        obj['translations'];
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
        obj["fields"]['name'];
        obj["fields"]['description'];
        obj["fields"]['isHidden'];
        obj["fields"]['icon'];
        obj["fields"]['ruleSets'];
        obj["fields"]['dependantOn'];
        obj["fields"]['scheduling'];
        obj["fields"]['achievementLiveStatus'];
        obj["fields"]['category'];
        obj["fields"]['memberGroups'];
        obj["fields"]['metadata'];
        obj["fields"]['translations'];
        obj["fields"]['rewards'];
        obj["fields"]['constraints'];

        
        obj["requiredFields"]['id'];

        return obj;
    }

    /**
     * Constructs a <code>UpdateAchievementRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateAchievementRequest} obj Optional instance to populate.
     * @return {module:model/UpdateAchievementRequest} The populated <code>UpdateAchievementRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateAchievementRequest();
            UpdateModelDefault.constructFromObject(data, obj);
            UpdateAchievementRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('isHidden')) {
                obj['isHidden'] = ApiClient.convertToType(data['isHidden'], 'Boolean');
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
            if (data.hasOwnProperty('rewards')) {
                obj['rewards'] = ApiClient.convertToType(data['rewards'], [UpdateRewardRequest]);
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
UpdateAchievementRequest.prototype['id'] = undefined;

/**
 * A name for the Achievement. Can be translated
 * @member {String} name
 */
UpdateAchievementRequest.prototype['name'] = undefined;

/**
 * A name for the Achievement. Can be translated
 * @member {String} description
 */
UpdateAchievementRequest.prototype['description'] = undefined;

/**
 * Informs the state of the achievement. True means hidden and false means revealed
 * @member {Boolean} isHidden
 */
UpdateAchievementRequest.prototype['isHidden'] = undefined;

/**
 * An Icon id that has been pre uploaded to the system to display for Achievement
 * @member {String} icon
 */
UpdateAchievementRequest.prototype['icon'] = undefined;

/**
 * @member {Array.<module:model/RuleSet>} ruleSets
 */
UpdateAchievementRequest.prototype['ruleSets'] = undefined;

/**
 * @member {module:model/DependantOn} dependantOn
 */
UpdateAchievementRequest.prototype['dependantOn'] = undefined;

/**
 * @member {module:model/Scheduling} scheduling
 */
UpdateAchievementRequest.prototype['scheduling'] = undefined;

/**
 * @member {module:model/AchievementLiveStatus} achievementLiveStatus
 */
UpdateAchievementRequest.prototype['achievementLiveStatus'] = undefined;

/**
 * Categorisation of the achievements
 * @member {Array.<String>} category
 */
UpdateAchievementRequest.prototype['category'] = undefined;

/**
 * A group of members that can receive the achievement
 * @member {Array.<String>} memberGroups
 */
UpdateAchievementRequest.prototype['memberGroups'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
UpdateAchievementRequest.prototype['metadata'] = undefined;

/**
 * @member {Array.<module:model/Translation>} translations
 */
UpdateAchievementRequest.prototype['translations'] = undefined;

/**
 * @member {Array.<module:model/UpdateRewardRequest>} rewards
 */
UpdateAchievementRequest.prototype['rewards'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
UpdateAchievementRequest.prototype['constraints'] = undefined;


// Implement UpdateModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateModelDefault.prototype['id'] = undefined;
// Implement UpdateAchievementRequestAllOf interface:
/**
 * A name for the Achievement. Can be translated
 * @member {String} name
 */
UpdateAchievementRequestAllOf.prototype['name'] = undefined;
/**
 * A name for the Achievement. Can be translated
 * @member {String} description
 */
UpdateAchievementRequestAllOf.prototype['description'] = undefined;
/**
 * Informs the state of the achievement. True means hidden and false means revealed
 * @member {Boolean} isHidden
 */
UpdateAchievementRequestAllOf.prototype['isHidden'] = undefined;
/**
 * An Icon id that has been pre uploaded to the system to display for Achievement
 * @member {String} icon
 */
UpdateAchievementRequestAllOf.prototype['icon'] = undefined;
/**
 * @member {Array.<module:model/RuleSet>} ruleSets
 */
UpdateAchievementRequestAllOf.prototype['ruleSets'] = undefined;
/**
 * @member {module:model/DependantOn} dependantOn
 */
UpdateAchievementRequestAllOf.prototype['dependantOn'] = undefined;
/**
 * @member {module:model/Scheduling} scheduling
 */
UpdateAchievementRequestAllOf.prototype['scheduling'] = undefined;
/**
 * @member {module:model/AchievementLiveStatus} achievementLiveStatus
 */
UpdateAchievementRequestAllOf.prototype['achievementLiveStatus'] = undefined;
/**
 * Categorisation of the achievements
 * @member {Array.<String>} category
 */
UpdateAchievementRequestAllOf.prototype['category'] = undefined;
/**
 * A group of members that can receive the achievement
 * @member {Array.<String>} memberGroups
 */
UpdateAchievementRequestAllOf.prototype['memberGroups'] = undefined;
/**
 * @member {Array.<module:model/Metadata>} metadata
 */
UpdateAchievementRequestAllOf.prototype['metadata'] = undefined;
/**
 * @member {Array.<module:model/Translation>} translations
 */
UpdateAchievementRequestAllOf.prototype['translations'] = undefined;
/**
 * @member {Array.<module:model/UpdateRewardRequest>} rewards
 */
UpdateAchievementRequestAllOf.prototype['rewards'] = undefined;
/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
UpdateAchievementRequestAllOf.prototype['constraints'] = undefined;




export default UpdateAchievementRequest;

