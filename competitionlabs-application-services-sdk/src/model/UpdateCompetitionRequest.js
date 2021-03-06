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
import CompetitionType from './CompetitionType';
import Dependancy from './Dependancy';
import Metadata from './Metadata';
import RuleSet from './RuleSet';
import TranslationValue from './TranslationValue';
import UpdateCompetitionRequestAllOf from './UpdateCompetitionRequestAllOf';
import UpdateContestRequest from './UpdateContestRequest';
import UpdateModelDefault from './UpdateModelDefault';
import UpdateOptParamModels from './UpdateOptParamModels';
import UpdateRewardRequest from './UpdateRewardRequest';

/**
 * The UpdateCompetitionRequest model module.
 * @module model/UpdateCompetitionRequest
 * @version 3.0.1
 */
class UpdateCompetitionRequest {
    /**
     * Constructs a new <code>UpdateCompetitionRequest</code>.
     * @alias module:model/UpdateCompetitionRequest
     * @implements module:model/UpdateModelDefault
     * @implements module:model/UpdateOptParamModels
     * @implements module:model/UpdateCompetitionRequestAllOf
     * @param id {String} A unique system generated identifier
     * @param competitionType {module:model/CompetitionType} 
     * @param numberOfRounds {Number} Number of rounds to be played in a competition
     * @param name {String} A name or a name of a competition. Can be translated
     * @param minNumberOfEntrants {Number} Maximum number of partiipants allowed in a competition
     * @param ruleSets {Array.<module:model/RuleSet>} 
     * @param scheduledStartDate {Date} ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone
     * @param scheduledEndDate {Date} ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone
     * @param dependantOn {module:model/Dependancy} 
     * @param constraints {Array.<String>} Additional constraints
     * @param productIds {Array.<String>} 
     */
    constructor(id, competitionType, numberOfRounds, name, minNumberOfEntrants, ruleSets, scheduledStartDate, scheduledEndDate, dependantOn, constraints, productIds) { 
        UpdateModelDefault.initialize(this, id);UpdateOptParamModels.initialize(this);UpdateCompetitionRequestAllOf.initialize(this, competitionType, numberOfRounds, name, minNumberOfEntrants, ruleSets, scheduledStartDate, scheduledEndDate, dependantOn, constraints, productIds);
        UpdateCompetitionRequest.initialize(this, id, competitionType, numberOfRounds, name, minNumberOfEntrants, ruleSets, scheduledStartDate, scheduledEndDate, dependantOn, constraints, productIds);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, competitionType, numberOfRounds, name, minNumberOfEntrants, ruleSets, scheduledStartDate, scheduledEndDate, dependantOn, constraints, productIds) { 
        obj['id'] = id;
        obj['competitionType'] = competitionType;
        obj['numberOfRounds'] = numberOfRounds;
        obj['name'] = name;
        obj['minNumberOfEntrants'] = minNumberOfEntrants;
        obj['ruleSets'] = ruleSets;
        obj['scheduledStartDate'] = scheduledStartDate;
        obj['scheduledEndDate'] = scheduledEndDate;
        obj['dependantOn'] = dependantOn;
        obj['constraints'] = constraints;
        obj['productIds'] = productIds;
    }

    /**
     * Constructs a <code>UpdateCompetitionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateCompetitionRequest} obj Optional instance to populate.
     * @return {module:model/UpdateCompetitionRequest} The populated <code>UpdateCompetitionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateCompetitionRequest();
            UpdateModelDefault.constructFromObject(data, obj);
            UpdateOptParamModels.constructFromObject(data, obj);
            UpdateCompetitionRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('customFields')) {
                obj['customFields'] = ApiClient.convertToType(data['customFields'], ['String']);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], [Metadata]);
            }
            if (data.hasOwnProperty('competitionType')) {
                obj['competitionType'] = CompetitionType.constructFromObject(data['competitionType']);
            }
            if (data.hasOwnProperty('numberOfRounds')) {
                obj['numberOfRounds'] = ApiClient.convertToType(data['numberOfRounds'], 'Number');
            }
            if (data.hasOwnProperty('numberOfGroupStages')) {
                obj['numberOfGroupStages'] = ApiClient.convertToType(data['numberOfGroupStages'], 'Number');
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
            if (data.hasOwnProperty('entrantMemberType')) {
                obj['entrantMemberType'] = ApiClient.convertToType(data['entrantMemberType'], 'String');
            }
            if (data.hasOwnProperty('maxNumberOfEntrants')) {
                obj['maxNumberOfEntrants'] = ApiClient.convertToType(data['maxNumberOfEntrants'], 'Number');
            }
            if (data.hasOwnProperty('minNumberOfEntrants')) {
                obj['minNumberOfEntrants'] = ApiClient.convertToType(data['minNumberOfEntrants'], 'Number');
            }
            if (data.hasOwnProperty('ruleSets')) {
                obj['ruleSets'] = ApiClient.convertToType(data['ruleSets'], [RuleSet]);
            }
            if (data.hasOwnProperty('scheduledStartDate')) {
                obj['scheduledStartDate'] = ApiClient.convertToType(data['scheduledStartDate'], 'Date');
            }
            if (data.hasOwnProperty('scheduledEndDate')) {
                obj['scheduledEndDate'] = ApiClient.convertToType(data['scheduledEndDate'], 'Date');
            }
            if (data.hasOwnProperty('dependantOn')) {
                obj['dependantOn'] = Dependancy.constructFromObject(data['dependantOn']);
            }
            if (data.hasOwnProperty('translations')) {
                obj['translations'] = ApiClient.convertToType(data['translations'], [Object]);
            }
            if (data.hasOwnProperty('contests')) {
                obj['contests'] = ApiClient.convertToType(data['contests'], [UpdateContestRequest]);
            }
            if (data.hasOwnProperty('rewards')) {
                obj['rewards'] = ApiClient.convertToType(data['rewards'], [UpdateRewardRequest]);
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
            if (data.hasOwnProperty('productIds')) {
                obj['productIds'] = ApiClient.convertToType(data['productIds'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateCompetitionRequest.prototype['id'] = undefined;

/**
 * A list of id's used to add cutom fields
 * @member {Array.<String>} customFields
 */
UpdateCompetitionRequest.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
UpdateCompetitionRequest.prototype['tags'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
UpdateCompetitionRequest.prototype['metadata'] = undefined;

/**
 * @member {module:model/CompetitionType} competitionType
 */
UpdateCompetitionRequest.prototype['competitionType'] = undefined;

/**
 * Number of rounds to be played in a competition
 * @member {Number} numberOfRounds
 */
UpdateCompetitionRequest.prototype['numberOfRounds'] = undefined;

/**
 * Number of group stages
 * @member {Number} numberOfGroupStages
 */
UpdateCompetitionRequest.prototype['numberOfGroupStages'] = undefined;

/**
 * A name or a name of a competition. Can be translated
 * @member {String} name
 */
UpdateCompetitionRequest.prototype['name'] = undefined;

/**
 * Description of the competition. Can be translated
 * @member {String} description
 */
UpdateCompetitionRequest.prototype['description'] = undefined;

/**
 * Terms and conditions of a competition. Can be translated
 * @member {String} termsAndConditions
 */
UpdateCompetitionRequest.prototype['termsAndConditions'] = undefined;

/**
 * @member {String} entrantMemberType
 */
UpdateCompetitionRequest.prototype['entrantMemberType'] = undefined;

/**
 * Maximum number of partiipants allowed in a competition
 * @member {Number} maxNumberOfEntrants
 */
UpdateCompetitionRequest.prototype['maxNumberOfEntrants'] = undefined;

/**
 * Maximum number of partiipants allowed in a competition
 * @member {Number} minNumberOfEntrants
 */
UpdateCompetitionRequest.prototype['minNumberOfEntrants'] = undefined;

/**
 * @member {Array.<module:model/RuleSet>} ruleSets
 */
UpdateCompetitionRequest.prototype['ruleSets'] = undefined;

/**
 * ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone
 * @member {Date} scheduledStartDate
 */
UpdateCompetitionRequest.prototype['scheduledStartDate'] = undefined;

/**
 * ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone
 * @member {Date} scheduledEndDate
 */
UpdateCompetitionRequest.prototype['scheduledEndDate'] = undefined;

/**
 * @member {module:model/Dependancy} dependantOn
 */
UpdateCompetitionRequest.prototype['dependantOn'] = undefined;

/**
 * @member {Array.<Object.<String, module:model/TranslationValue>>} translations
 */
UpdateCompetitionRequest.prototype['translations'] = undefined;

/**
 * @member {Array.<module:model/UpdateContestRequest>} contests
 */
UpdateCompetitionRequest.prototype['contests'] = undefined;

/**
 * @member {Array.<module:model/UpdateRewardRequest>} rewards
 */
UpdateCompetitionRequest.prototype['rewards'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
UpdateCompetitionRequest.prototype['constraints'] = undefined;

/**
 * @member {Array.<String>} productIds
 */
UpdateCompetitionRequest.prototype['productIds'] = undefined;


// Implement UpdateModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateModelDefault.prototype['id'] = undefined;
// Implement UpdateOptParamModels interface:
/**
 * A list of id's used to add cutom fields
 * @member {Array.<String>} customFields
 */
UpdateOptParamModels.prototype['customFields'] = undefined;
/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
UpdateOptParamModels.prototype['tags'] = undefined;
/**
 * @member {Array.<module:model/Metadata>} metadata
 */
UpdateOptParamModels.prototype['metadata'] = undefined;
// Implement UpdateCompetitionRequestAllOf interface:
/**
 * @member {module:model/CompetitionType} competitionType
 */
UpdateCompetitionRequestAllOf.prototype['competitionType'] = undefined;
/**
 * Number of rounds to be played in a competition
 * @member {Number} numberOfRounds
 */
UpdateCompetitionRequestAllOf.prototype['numberOfRounds'] = undefined;
/**
 * Number of group stages
 * @member {Number} numberOfGroupStages
 */
UpdateCompetitionRequestAllOf.prototype['numberOfGroupStages'] = undefined;
/**
 * A name or a name of a competition. Can be translated
 * @member {String} name
 */
UpdateCompetitionRequestAllOf.prototype['name'] = undefined;
/**
 * Description of the competition. Can be translated
 * @member {String} description
 */
UpdateCompetitionRequestAllOf.prototype['description'] = undefined;
/**
 * Terms and conditions of a competition. Can be translated
 * @member {String} termsAndConditions
 */
UpdateCompetitionRequestAllOf.prototype['termsAndConditions'] = undefined;
/**
 * @member {String} entrantMemberType
 */
UpdateCompetitionRequestAllOf.prototype['entrantMemberType'] = undefined;
/**
 * Maximum number of partiipants allowed in a competition
 * @member {Number} maxNumberOfEntrants
 */
UpdateCompetitionRequestAllOf.prototype['maxNumberOfEntrants'] = undefined;
/**
 * Maximum number of partiipants allowed in a competition
 * @member {Number} minNumberOfEntrants
 */
UpdateCompetitionRequestAllOf.prototype['minNumberOfEntrants'] = undefined;
/**
 * @member {Array.<module:model/RuleSet>} ruleSets
 */
UpdateCompetitionRequestAllOf.prototype['ruleSets'] = undefined;
/**
 * ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone
 * @member {Date} scheduledStartDate
 */
UpdateCompetitionRequestAllOf.prototype['scheduledStartDate'] = undefined;
/**
 * ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone
 * @member {Date} scheduledEndDate
 */
UpdateCompetitionRequestAllOf.prototype['scheduledEndDate'] = undefined;
/**
 * @member {module:model/Dependancy} dependantOn
 */
UpdateCompetitionRequestAllOf.prototype['dependantOn'] = undefined;
/**
 * @member {Array.<Object.<String, module:model/TranslationValue>>} translations
 */
UpdateCompetitionRequestAllOf.prototype['translations'] = undefined;
/**
 * @member {Array.<module:model/UpdateContestRequest>} contests
 */
UpdateCompetitionRequestAllOf.prototype['contests'] = undefined;
/**
 * @member {Array.<module:model/UpdateRewardRequest>} rewards
 */
UpdateCompetitionRequestAllOf.prototype['rewards'] = undefined;
/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
UpdateCompetitionRequestAllOf.prototype['constraints'] = undefined;
/**
 * @member {Array.<String>} productIds
 */
UpdateCompetitionRequestAllOf.prototype['productIds'] = undefined;




export default UpdateCompetitionRequest;

