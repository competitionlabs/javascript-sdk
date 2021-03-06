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
import AchievementLiveStatus from './AchievementLiveStatus';
import CreateAchievementRequestAllOf from './CreateAchievementRequestAllOf';
import CreateOptParamModels from './CreateOptParamModels';
import CreateRewardRequest from './CreateRewardRequest';
import Dependancy from './Dependancy';
import Metadata from './Metadata';
import RuleSet from './RuleSet';
import Scheduling from './Scheduling';
import TranslationValue from './TranslationValue';

/**
 * The CreateAchievementRequest model module.
 * @module model/CreateAchievementRequest
 * @version 3.0.1
 */
class CreateAchievementRequest {
    /**
     * Constructs a new <code>CreateAchievementRequest</code>.
     * @alias module:model/CreateAchievementRequest
     * @implements module:model/CreateOptParamModels
     * @implements module:model/CreateAchievementRequestAllOf
     * @param name {String} A name for the Achievement. Can be translated
     * @param ruleSets {Array.<module:model/RuleSet>} 
     * @param scheduling {module:model/Scheduling} 
     * @param achievementLiveStatus {module:model/AchievementLiveStatus} 
     * @param constraints {Array.<String>} Additional constraints
     */
    constructor(name, ruleSets, scheduling, achievementLiveStatus, constraints) { 
        CreateOptParamModels.initialize(this);CreateAchievementRequestAllOf.initialize(this, name, ruleSets, scheduling, achievementLiveStatus, constraints);
        CreateAchievementRequest.initialize(this, name, ruleSets, scheduling, achievementLiveStatus, constraints);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, ruleSets, scheduling, achievementLiveStatus, constraints) { 
        obj['name'] = name;
        obj['ruleSets'] = ruleSets;
        obj['scheduling'] = scheduling;
        obj['achievementLiveStatus'] = achievementLiveStatus;
        obj['constraints'] = constraints;
    }

    /**
     * Constructs a <code>CreateAchievementRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAchievementRequest} obj Optional instance to populate.
     * @return {module:model/CreateAchievementRequest} The populated <code>CreateAchievementRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAchievementRequest();
            CreateOptParamModels.constructFromObject(data, obj);
            CreateAchievementRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('customFields')) {
                obj['customFields'] = ApiClient.convertToType(data['customFields'], ['String']);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], [Metadata]);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('termsAndConditions')) {
                obj['termsAndConditions'] = ApiClient.convertToType(data['termsAndConditions'], 'String');
            }
            if (data.hasOwnProperty('icon')) {
                obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
            }
            if (data.hasOwnProperty('ruleSets')) {
                obj['ruleSets'] = ApiClient.convertToType(data['ruleSets'], [RuleSet]);
            }
            if (data.hasOwnProperty('dependantOn')) {
                obj['dependantOn'] = Dependancy.constructFromObject(data['dependantOn']);
            }
            if (data.hasOwnProperty('scheduling')) {
                obj['scheduling'] = Scheduling.constructFromObject(data['scheduling']);
            }
            if (data.hasOwnProperty('achievementLiveStatus')) {
                obj['achievementLiveStatus'] = AchievementLiveStatus.constructFromObject(data['achievementLiveStatus']);
            }
            if (data.hasOwnProperty('maxNumberOfIssues')) {
                obj['maxNumberOfIssues'] = ApiClient.convertToType(data['maxNumberOfIssues'], 'Number');
            }
            if (data.hasOwnProperty('translations')) {
                obj['translations'] = ApiClient.convertToType(data['translations'], [Object]);
            }
            if (data.hasOwnProperty('rewards')) {
                obj['rewards'] = ApiClient.convertToType(data['rewards'], [CreateRewardRequest]);
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * A list of id's used to add cutom fields
 * @member {Array.<String>} customFields
 */
CreateAchievementRequest.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
CreateAchievementRequest.prototype['tags'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
CreateAchievementRequest.prototype['metadata'] = undefined;

/**
 * A name for the Achievement. Can be translated
 * @member {String} name
 */
CreateAchievementRequest.prototype['name'] = undefined;

/**
 * A name for the Achievement. Can be translated
 * @member {String} description
 */
CreateAchievementRequest.prototype['description'] = undefined;

/**
 * Terms and conditions of an achievement. Can be translated
 * @member {String} termsAndConditions
 */
CreateAchievementRequest.prototype['termsAndConditions'] = undefined;

/**
 * An Icon id that has been pre uploaded to the system to display for Achievement
 * @member {String} icon
 */
CreateAchievementRequest.prototype['icon'] = undefined;

/**
 * @member {Array.<module:model/RuleSet>} ruleSets
 */
CreateAchievementRequest.prototype['ruleSets'] = undefined;

/**
 * @member {module:model/Dependancy} dependantOn
 */
CreateAchievementRequest.prototype['dependantOn'] = undefined;

/**
 * @member {module:model/Scheduling} scheduling
 */
CreateAchievementRequest.prototype['scheduling'] = undefined;

/**
 * @member {module:model/AchievementLiveStatus} achievementLiveStatus
 */
CreateAchievementRequest.prototype['achievementLiveStatus'] = undefined;

/**
 * Maximum number of issued achievements
 * @member {Number} maxNumberOfIssues
 */
CreateAchievementRequest.prototype['maxNumberOfIssues'] = undefined;

/**
 * @member {Array.<Object.<String, module:model/TranslationValue>>} translations
 */
CreateAchievementRequest.prototype['translations'] = undefined;

/**
 * @member {Array.<module:model/CreateRewardRequest>} rewards
 */
CreateAchievementRequest.prototype['rewards'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
CreateAchievementRequest.prototype['constraints'] = undefined;


// Implement CreateOptParamModels interface:
/**
 * A list of id's used to add cutom fields
 * @member {Array.<String>} customFields
 */
CreateOptParamModels.prototype['customFields'] = undefined;
/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
CreateOptParamModels.prototype['tags'] = undefined;
/**
 * @member {Array.<module:model/Metadata>} metadata
 */
CreateOptParamModels.prototype['metadata'] = undefined;
// Implement CreateAchievementRequestAllOf interface:
/**
 * A name for the Achievement. Can be translated
 * @member {String} name
 */
CreateAchievementRequestAllOf.prototype['name'] = undefined;
/**
 * A name for the Achievement. Can be translated
 * @member {String} description
 */
CreateAchievementRequestAllOf.prototype['description'] = undefined;
/**
 * Terms and conditions of an achievement. Can be translated
 * @member {String} termsAndConditions
 */
CreateAchievementRequestAllOf.prototype['termsAndConditions'] = undefined;
/**
 * An Icon id that has been pre uploaded to the system to display for Achievement
 * @member {String} icon
 */
CreateAchievementRequestAllOf.prototype['icon'] = undefined;
/**
 * @member {Array.<module:model/RuleSet>} ruleSets
 */
CreateAchievementRequestAllOf.prototype['ruleSets'] = undefined;
/**
 * @member {module:model/Dependancy} dependantOn
 */
CreateAchievementRequestAllOf.prototype['dependantOn'] = undefined;
/**
 * @member {module:model/Scheduling} scheduling
 */
CreateAchievementRequestAllOf.prototype['scheduling'] = undefined;
/**
 * @member {module:model/AchievementLiveStatus} achievementLiveStatus
 */
CreateAchievementRequestAllOf.prototype['achievementLiveStatus'] = undefined;
/**
 * Maximum number of issued achievements
 * @member {Number} maxNumberOfIssues
 */
CreateAchievementRequestAllOf.prototype['maxNumberOfIssues'] = undefined;
/**
 * @member {Array.<Object.<String, module:model/TranslationValue>>} translations
 */
CreateAchievementRequestAllOf.prototype['translations'] = undefined;
/**
 * @member {Array.<module:model/CreateRewardRequest>} rewards
 */
CreateAchievementRequestAllOf.prototype['rewards'] = undefined;
/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
CreateAchievementRequestAllOf.prototype['constraints'] = undefined;




export default CreateAchievementRequest;

