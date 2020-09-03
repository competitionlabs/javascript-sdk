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
import CompetitionType from './CompetitionType';
import ComplexFilter from './ComplexFilter';
import CreateContestRequest from './CreateContestRequest';
import CreateRewardRequest from './CreateRewardRequest';
import Metadata from './Metadata';
import RuleSet from './RuleSet';
import Translation from './Translation';

/**
 * The CreateCompetitionRequest model module.
 * @module model/CreateCompetitionRequest
 * @version 1.0.4
 */
class CreateCompetitionRequest {
    /**
     * Constructs a new <code>CreateCompetitionRequest</code>.
     * @alias module:model/CreateCompetitionRequest
     * @param competitionType {module:model/CompetitionType} 
     * @param numberOfRounds {Number} Number of rounds to be played in a competition
     * @param name {String} A name or a name of a competition. Can be translated
     * @param minNumberOfEntrants {Number} Maximum number of partiipants allowed in a competition
     * @param ruleSets {Array.<module:model/RuleSet>} 
     * @param scheduledStartDate {Date} ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone
     * @param scheduledEndDate {Date} ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone
     * @param optinRequiredForEntrants {Boolean} If True, members must Opt in before they can acquire points in the contest
     */
    constructor(competitionType, numberOfRounds, name, minNumberOfEntrants, ruleSets, scheduledStartDate, scheduledEndDate, optinRequiredForEntrants) { 
        
        CreateCompetitionRequest.initialize(this, competitionType, numberOfRounds, name, minNumberOfEntrants, ruleSets, scheduledStartDate, scheduledEndDate, optinRequiredForEntrants);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, competitionType, numberOfRounds, name, minNumberOfEntrants, ruleSets, scheduledStartDate, scheduledEndDate, optinRequiredForEntrants) { 
        obj['competitionType'] = competitionType;
        obj['numberOfRounds'] = numberOfRounds;
        obj['name'] = name;
        obj['minNumberOfEntrants'] = minNumberOfEntrants;
        obj['ruleSets'] = ruleSets;
        obj['scheduledStartDate'] = scheduledStartDate;
        obj['scheduledEndDate'] = scheduledEndDate;
        obj['optinRequiredForEntrants'] = optinRequiredForEntrants;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['competitionType'];
        obj['numberOfRounds'];
        obj['numberOfGroupStages'];
        obj['name'];
        obj['description'];
        obj['termsConditions'];
        obj['maxNumberOfEntrants'];
        obj['minNumberOfEntrants'];
        obj['productIds'];
        obj['ruleSets'];
        obj['isPublic'];
        obj['autoStart'];
        obj['scheduledStartDate'];
        obj['scheduledEndDate'];
        obj['includeEntrantsWhere'];
        obj['optinRequiredForEntrants'];
        obj['metadata'];
        obj['translations'];
        obj['contest'];
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

        obj["fields"]['competitionType'];
        obj["fields"]['numberOfRounds'];
        obj["fields"]['numberOfGroupStages'];
        obj["fields"]['name'];
        obj["fields"]['description'];
        obj["fields"]['termsConditions'];
        obj["fields"]['maxNumberOfEntrants'];
        obj["fields"]['minNumberOfEntrants'];
        obj["fields"]['productIds'];
        obj["fields"]['ruleSets'];
        obj["fields"]['isPublic'];
        obj["fields"]['autoStart'];
        obj["fields"]['scheduledStartDate'];
        obj["fields"]['scheduledEndDate'];
        obj["fields"]['includeEntrantsWhere'];
        obj["fields"]['optinRequiredForEntrants'];
        obj["fields"]['metadata'];
        obj["fields"]['translations'];
        obj["fields"]['contest'];
        obj["fields"]['rewards'];

        
        obj["requiredFields"]['competitionType'];
        obj["requiredFields"]['numberOfRounds'];
        obj["requiredFields"]['name'];
        obj["requiredFields"]['minNumberOfEntrants'];
        obj["requiredFields"]['ruleSets'];
        obj["requiredFields"]['scheduledStartDate'];
        obj["requiredFields"]['scheduledEndDate'];
        obj["requiredFields"]['optinRequiredForEntrants'];

        return obj;
    }

    /**
     * Constructs a <code>CreateCompetitionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCompetitionRequest} obj Optional instance to populate.
     * @return {module:model/CreateCompetitionRequest} The populated <code>CreateCompetitionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateCompetitionRequest();

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
            if (data.hasOwnProperty('termsConditions')) {
                obj['termsConditions'] = ApiClient.convertToType(data['termsConditions'], 'String');
            }
            if (data.hasOwnProperty('maxNumberOfEntrants')) {
                obj['maxNumberOfEntrants'] = ApiClient.convertToType(data['maxNumberOfEntrants'], 'Number');
            }
            if (data.hasOwnProperty('minNumberOfEntrants')) {
                obj['minNumberOfEntrants'] = ApiClient.convertToType(data['minNumberOfEntrants'], 'Number');
            }
            if (data.hasOwnProperty('productIds')) {
                obj['productIds'] = ApiClient.convertToType(data['productIds'], ['String']);
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
            if (data.hasOwnProperty('includeEntrantsWhere')) {
                obj['includeEntrantsWhere'] = ComplexFilter.constructFromObject(data['includeEntrantsWhere']);
            }
            if (data.hasOwnProperty('optinRequiredForEntrants')) {
                obj['optinRequiredForEntrants'] = ApiClient.convertToType(data['optinRequiredForEntrants'], 'Boolean');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], [Metadata]);
            }
            if (data.hasOwnProperty('translations')) {
                obj['translations'] = ApiClient.convertToType(data['translations'], [Translation]);
            }
            if (data.hasOwnProperty('contest')) {
                obj['contest'] = CreateContestRequest.constructFromObject(data['contest']);
            }
            if (data.hasOwnProperty('rewards')) {
                obj['rewards'] = ApiClient.convertToType(data['rewards'], [CreateRewardRequest]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CompetitionType} competitionType
 */
CreateCompetitionRequest.prototype['competitionType'] = undefined;

/**
 * Number of rounds to be played in a competition
 * @member {Number} numberOfRounds
 */
CreateCompetitionRequest.prototype['numberOfRounds'] = undefined;

/**
 * Number of group stages
 * @member {Number} numberOfGroupStages
 */
CreateCompetitionRequest.prototype['numberOfGroupStages'] = undefined;

/**
 * A name or a name of a competition. Can be translated
 * @member {String} name
 */
CreateCompetitionRequest.prototype['name'] = undefined;

/**
 * Description of the competition. Can be translated
 * @member {String} description
 */
CreateCompetitionRequest.prototype['description'] = undefined;

/**
 * Terms and conditions of a competition. Can be translated
 * @member {String} termsConditions
 */
CreateCompetitionRequest.prototype['termsConditions'] = undefined;

/**
 * Maximum number of partiipants allowed in a competition
 * @member {Number} maxNumberOfEntrants
 */
CreateCompetitionRequest.prototype['maxNumberOfEntrants'] = undefined;

/**
 * Maximum number of partiipants allowed in a competition
 * @member {Number} minNumberOfEntrants
 */
CreateCompetitionRequest.prototype['minNumberOfEntrants'] = undefined;

/**
 * An array of pre created product identifiers
 * @member {Array.<String>} productIds
 */
CreateCompetitionRequest.prototype['productIds'] = undefined;

/**
 * @member {Array.<module:model/RuleSet>} ruleSets
 */
CreateCompetitionRequest.prototype['ruleSets'] = undefined;

/**
 * Is the event publicly exposed depending on the event model
 * @member {Boolean} isPublic
 */
CreateCompetitionRequest.prototype['isPublic'] = undefined;

/**
 * Is the event publicly exposed depending on the event model
 * @member {Boolean} autoStart
 */
CreateCompetitionRequest.prototype['autoStart'] = undefined;

/**
 * ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone
 * @member {Date} scheduledStartDate
 */
CreateCompetitionRequest.prototype['scheduledStartDate'] = undefined;

/**
 * ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone
 * @member {Date} scheduledEndDate
 */
CreateCompetitionRequest.prototype['scheduledEndDate'] = undefined;

/**
 * @member {module:model/ComplexFilter} includeEntrantsWhere
 */
CreateCompetitionRequest.prototype['includeEntrantsWhere'] = undefined;

/**
 * If True, members must Opt in before they can acquire points in the contest
 * @member {Boolean} optinRequiredForEntrants
 */
CreateCompetitionRequest.prototype['optinRequiredForEntrants'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
CreateCompetitionRequest.prototype['metadata'] = undefined;

/**
 * @member {Array.<module:model/Translation>} translations
 */
CreateCompetitionRequest.prototype['translations'] = undefined;

/**
 * @member {module:model/CreateContestRequest} contest
 */
CreateCompetitionRequest.prototype['contest'] = undefined;

/**
 * @member {Array.<module:model/CreateRewardRequest>} rewards
 */
CreateCompetitionRequest.prototype['rewards'] = undefined;






export default CreateCompetitionRequest;

