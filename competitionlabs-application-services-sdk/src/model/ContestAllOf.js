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
import ContestStatus from './ContestStatus';
import Metadata from './Metadata';
import RewardReduced from './RewardReduced';
import RoundType from './RoundType';
import RuleSet from './RuleSet';
import Strategy from './Strategy';
import Translation from './Translation';

/**
 * The ContestAllOf model module.
 * @module model/ContestAllOf
 * @version 1.0.4
 */
class ContestAllOf {
    /**
     * Constructs a new <code>ContestAllOf</code>.
     * @alias module:model/ContestAllOf
     * @param competitionId {String} A unique identifier of a Competition
     * @param _number {Number} The row number for displaying the Contest in a table
     * @param name {String} A name for the Contest. Can be translated
     * @param round {Number} To what round does the contest belong
     * @param roundType {module:model/RoundType} 
     * @param entrantsFromContest {Array.<String>} A list of CompetitionLabs contest identifiers to allow contests chaining. When a Progression competition is active and you have a 2 round competition the first round has to reference the second round then this parameter becomes mandatory instead of Optional.
     * @param minNumberOfEntrants {Number} Minimum number of entrants for the contest
     * @param ruleSets {Array.<module:model/RuleSet>} 
     * @param isPublic {Boolean} Is the event publicly exposed depending on the event model
     * @param scheduledStartDate {Date} ISO8601 timestamp for when a Contest should start. All records are stored in UTC time zone
     * @param scheduledEndDate {Date} ISO8601 timestamp for when a Contest should end. All records are stored in UTC time zone
     * @param status {module:model/ContestStatus} 
     * @param statusCode {Number} The code of the contest
     */
    constructor(competitionId, _number, name, round, roundType, entrantsFromContest, minNumberOfEntrants, ruleSets, isPublic, scheduledStartDate, scheduledEndDate, status, statusCode) { 
        
        ContestAllOf.initialize(this, competitionId, _number, name, round, roundType, entrantsFromContest, minNumberOfEntrants, ruleSets, isPublic, scheduledStartDate, scheduledEndDate, status, statusCode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, competitionId, _number, name, round, roundType, entrantsFromContest, minNumberOfEntrants, ruleSets, isPublic, scheduledStartDate, scheduledEndDate, status, statusCode) { 
        obj['competitionId'] = competitionId;
        obj['number'] = _number;
        obj['name'] = name;
        obj['round'] = round;
        obj['roundType'] = roundType;
        obj['entrantsFromContest'] = entrantsFromContest;
        obj['minNumberOfEntrants'] = minNumberOfEntrants;
        obj['ruleSets'] = ruleSets;
        obj['isPublic'] = isPublic;
        obj['scheduledStartDate'] = scheduledStartDate;
        obj['scheduledEndDate'] = scheduledEndDate;
        obj['status'] = status;
        obj['statusCode'] = statusCode;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['competitionId'];
        obj['number'];
        obj['name'];
        obj['description'];
        obj['termsConditions'];
        obj['round'];
        obj['roundType'];
        obj['groupStage'];
        obj['groupStageLabel'];
        obj['entrantsFromContest'];
        obj['maxNumberOfEntrants'];
        obj['minNumberOfEntrants'];
        obj['ruleSets'];
        obj['isPublic'];
        obj['autoStart'];
        obj['scheduledStartDate'];
        obj['scheduledEndDate'];
        obj['actualStartDate'];
        obj['actualEndDate'];
        obj['strategies'];
        obj['metadata'];
        obj['translations'];
        obj['translatableFields'];
        obj['status'];
        obj['statusCode'];
        obj['rewards'];

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

        obj["fields"]['competitionId'];
        obj["fields"]['number'];
        obj["fields"]['name'];
        obj["fields"]['description'];
        obj["fields"]['termsConditions'];
        obj["fields"]['round'];
        obj["fields"]['roundType'];
        obj["fields"]['groupStage'];
        obj["fields"]['groupStageLabel'];
        obj["fields"]['entrantsFromContest'];
        obj["fields"]['maxNumberOfEntrants'];
        obj["fields"]['minNumberOfEntrants'];
        obj["fields"]['ruleSets'];
        obj["fields"]['isPublic'];
        obj["fields"]['autoStart'];
        obj["fields"]['scheduledStartDate'];
        obj["fields"]['scheduledEndDate'];
        obj["fields"]['actualStartDate'];
        obj["fields"]['actualEndDate'];
        obj["fields"]['strategies'];
        obj["fields"]['metadata'];
        obj["fields"]['translations'];
        obj["fields"]['translatableFields'];
        obj["fields"]['status'];
        obj["fields"]['statusCode'];
        obj["fields"]['rewards'];

        
        obj["requiredFields"]['competitionId'];
        obj["requiredFields"]['number'];
        obj["requiredFields"]['name'];
        obj["requiredFields"]['round'];
        obj["requiredFields"]['roundType'];
        obj["requiredFields"]['entrantsFromContest'];
        obj["requiredFields"]['minNumberOfEntrants'];
        obj["requiredFields"]['ruleSets'];
        obj["requiredFields"]['isPublic'];
        obj["requiredFields"]['scheduledStartDate'];
        obj["requiredFields"]['scheduledEndDate'];
        obj["requiredFields"]['status'];
        obj["requiredFields"]['statusCode'];

        return obj;
    }

    /**
     * Constructs a <code>ContestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContestAllOf} obj Optional instance to populate.
     * @return {module:model/ContestAllOf} The populated <code>ContestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContestAllOf();

            if (data.hasOwnProperty('competitionId')) {
                obj['competitionId'] = ApiClient.convertToType(data['competitionId'], 'String');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('termsConditions')) {
                obj['termsConditions'] = ApiClient.convertToType(data['termsConditions'], 'String');
            }
            if (data.hasOwnProperty('round')) {
                obj['round'] = ApiClient.convertToType(data['round'], 'Number');
            }
            if (data.hasOwnProperty('roundType')) {
                obj['roundType'] = RoundType.constructFromObject(data['roundType']);
            }
            if (data.hasOwnProperty('groupStage')) {
                obj['groupStage'] = ApiClient.convertToType(data['groupStage'], 'Number');
            }
            if (data.hasOwnProperty('groupStageLabel')) {
                obj['groupStageLabel'] = ApiClient.convertToType(data['groupStageLabel'], 'String');
            }
            if (data.hasOwnProperty('entrantsFromContest')) {
                obj['entrantsFromContest'] = ApiClient.convertToType(data['entrantsFromContest'], ['String']);
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
            if (data.hasOwnProperty('isPublic')) {
                obj['isPublic'] = ApiClient.convertToType(data['isPublic'], 'Boolean');
            }
            if (data.hasOwnProperty('autoStart')) {
                obj['autoStart'] = ApiClient.convertToType(data['autoStart'], 'Boolean');
            }
            if (data.hasOwnProperty('scheduledStartDate')) {
                obj['scheduledStartDate'] = ApiClient.convertToType(data['scheduledStartDate'], 'Date');
            }
            if (data.hasOwnProperty('scheduledEndDate')) {
                obj['scheduledEndDate'] = ApiClient.convertToType(data['scheduledEndDate'], 'Date');
            }
            if (data.hasOwnProperty('actualStartDate')) {
                obj['actualStartDate'] = ApiClient.convertToType(data['actualStartDate'], 'Date');
            }
            if (data.hasOwnProperty('actualEndDate')) {
                obj['actualEndDate'] = ApiClient.convertToType(data['actualEndDate'], 'Date');
            }
            if (data.hasOwnProperty('strategies')) {
                obj['strategies'] = Strategy.constructFromObject(data['strategies']);
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
            if (data.hasOwnProperty('status')) {
                obj['status'] = ContestStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('statusCode')) {
                obj['statusCode'] = ApiClient.convertToType(data['statusCode'], 'Number');
            }
            if (data.hasOwnProperty('rewards')) {
                obj['rewards'] = ApiClient.convertToType(data['rewards'], [RewardReduced]);
            }
        }
        return obj;
    }


}

/**
 * A unique identifier of a Competition
 * @member {String} competitionId
 */
ContestAllOf.prototype['competitionId'] = undefined;

/**
 * The row number for displaying the Contest in a table
 * @member {Number} number
 */
ContestAllOf.prototype['number'] = undefined;

/**
 * A name for the Contest. Can be translated
 * @member {String} name
 */
ContestAllOf.prototype['name'] = undefined;

/**
 * Description of the contest
 * @member {String} description
 */
ContestAllOf.prototype['description'] = undefined;

/**
 * Terms and conditions for participating in the Contest. Can be translated
 * @member {String} termsConditions
 */
ContestAllOf.prototype['termsConditions'] = undefined;

/**
 * To what round does the contest belong
 * @member {Number} round
 */
ContestAllOf.prototype['round'] = undefined;

/**
 * @member {module:model/RoundType} roundType
 */
ContestAllOf.prototype['roundType'] = undefined;

/**
 * Is used for more complex Competitions e.g. multi round competitions where round 1 group stage matched round 2
 * @member {Number} groupStage
 */
ContestAllOf.prototype['groupStage'] = undefined;

/**
 * The name of the group stages
 * @member {String} groupStageLabel
 */
ContestAllOf.prototype['groupStageLabel'] = undefined;

/**
 * A list of CompetitionLabs contest identifiers to allow contests chaining. When a Progression competition is active and you have a 2 round competition the first round has to reference the second round then this parameter becomes mandatory instead of Optional.
 * @member {Array.<String>} entrantsFromContest
 */
ContestAllOf.prototype['entrantsFromContest'] = undefined;

/**
 * Maximum number of entrants for the contest
 * @member {Number} maxNumberOfEntrants
 */
ContestAllOf.prototype['maxNumberOfEntrants'] = undefined;

/**
 * Minimum number of entrants for the contest
 * @member {Number} minNumberOfEntrants
 */
ContestAllOf.prototype['minNumberOfEntrants'] = undefined;

/**
 * @member {Array.<module:model/RuleSet>} ruleSets
 */
ContestAllOf.prototype['ruleSets'] = undefined;

/**
 * Is the event publicly exposed depending on the event model
 * @member {Boolean} isPublic
 */
ContestAllOf.prototype['isPublic'] = undefined;

/**
 * Is the event publicly exposed depending on the event model
 * @member {Boolean} autoStart
 */
ContestAllOf.prototype['autoStart'] = undefined;

/**
 * ISO8601 timestamp for when a Contest should start. All records are stored in UTC time zone
 * @member {Date} scheduledStartDate
 */
ContestAllOf.prototype['scheduledStartDate'] = undefined;

/**
 * ISO8601 timestamp for when a Contest should end. All records are stored in UTC time zone
 * @member {Date} scheduledEndDate
 */
ContestAllOf.prototype['scheduledEndDate'] = undefined;

/**
 * ISO8601 timestamp for when a Competition started. All records are stored in UTC time zone
 * @member {Date} actualStartDate
 */
ContestAllOf.prototype['actualStartDate'] = undefined;

/**
 * ISO8601 timestamp for when a Competition ended. All records are stored in UTC time zone
 * @member {Date} actualEndDate
 */
ContestAllOf.prototype['actualEndDate'] = undefined;

/**
 * @member {module:model/Strategy} strategies
 */
ContestAllOf.prototype['strategies'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
ContestAllOf.prototype['metadata'] = undefined;

/**
 * @member {Array.<module:model/Translation>} translations
 */
ContestAllOf.prototype['translations'] = undefined;

/**
 * Contests translatable fields
 * @member {Array.<String>} translatableFields
 */
ContestAllOf.prototype['translatableFields'] = undefined;

/**
 * @member {module:model/ContestStatus} status
 */
ContestAllOf.prototype['status'] = undefined;

/**
 * The code of the contest
 * @member {Number} statusCode
 */
ContestAllOf.prototype['statusCode'] = undefined;

/**
 * @member {Array.<module:model/RewardReduced>} rewards
 */
ContestAllOf.prototype['rewards'] = undefined;






export default ContestAllOf;

