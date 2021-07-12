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
import RuleSet from './RuleSet';
import TranslationValue from './TranslationValue';
import UpdateContestRequest from './UpdateContestRequest';
import UpdateRewardRequest from './UpdateRewardRequest';

/**
 * The UpdateCompetitionRequestAllOf model module.
 * @module model/UpdateCompetitionRequestAllOf
 * @version 3.0.1
 */
class UpdateCompetitionRequestAllOf {
    /**
     * Constructs a new <code>UpdateCompetitionRequestAllOf</code>.
     * @alias module:model/UpdateCompetitionRequestAllOf
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
    constructor(competitionType, numberOfRounds, name, minNumberOfEntrants, ruleSets, scheduledStartDate, scheduledEndDate, dependantOn, constraints, productIds) { 
        
        UpdateCompetitionRequestAllOf.initialize(this, competitionType, numberOfRounds, name, minNumberOfEntrants, ruleSets, scheduledStartDate, scheduledEndDate, dependantOn, constraints, productIds);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, competitionType, numberOfRounds, name, minNumberOfEntrants, ruleSets, scheduledStartDate, scheduledEndDate, dependantOn, constraints, productIds) { 
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
     * Constructs a <code>UpdateCompetitionRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateCompetitionRequestAllOf} obj Optional instance to populate.
     * @return {module:model/UpdateCompetitionRequestAllOf} The populated <code>UpdateCompetitionRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateCompetitionRequestAllOf();

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






export default UpdateCompetitionRequestAllOf;

