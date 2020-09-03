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
import Metadata from './Metadata';
import RuleSet from './RuleSet';
import Translation from './Translation';
import UpdateContestRequest from './UpdateContestRequest';
import UpdateRewardRequest from './UpdateRewardRequest';

/**
 * The UpdateCompetitionRequestAllOf model module.
 * @module model/UpdateCompetitionRequestAllOf
 * @version 1.0.5
 */
class UpdateCompetitionRequestAllOf {
    /**
     * Constructs a new <code>UpdateCompetitionRequestAllOf</code>.
     * @alias module:model/UpdateCompetitionRequestAllOf
     */
    constructor() { 
        
        UpdateCompetitionRequestAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['competitionType'] = new CompetitionType().model();
        obj['numberOfRounds'] = null;
        obj['numberOfGroupStages'] = null;
        obj['name'] = null;
        obj['description'] = null;
        obj['termsConditions'] = null;
        obj['maxNumberOfEntrants'] = null;
        obj['minNumberOfEntrants'] = null;
        obj['productIds'] = [null];
        obj['ruleSets'] = [new RuleSet().model()];
        obj['isPublic'] = null;
        obj['autoStart'] = null;
        obj['scheduledStartDate'] = null;
        obj['scheduledEndDate'] = null;
        obj['includeEntrantsWhere'] = new ComplexFilter().model();
        obj['optinRequiredForEntrants'] = null;
        obj['metadata'] = [new Metadata().model()];
        obj['translations'] = [new Translation().model()];
        obj['contests'] = [new UpdateContestRequest().model()];
        obj['rewards'] = [new UpdateRewardRequest().model()];

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

        obj["fields"]['competitionType'] = new CompetitionType().modelMap();
        obj["fields"]['numberOfRounds'] = { "type": 'Number', "system": false };
        obj["fields"]['numberOfGroupStages'] = { "type": 'Number', "system": false };
        obj["fields"]['name'] = { "type": 'String', "system": false };
        obj["fields"]['description'] = { "type": 'String', "system": false };
        obj["fields"]['termsConditions'] = { "type": 'String', "system": false };
        obj["fields"]['maxNumberOfEntrants'] = { "type": 'Number', "system": false };
        obj["fields"]['minNumberOfEntrants'] = { "type": 'Number', "system": false };
        obj["fields"]['productIds'] = [{ "type": 'String', "system": false }];
        obj["fields"]['ruleSets'] = [new RuleSet().modelMap()];
        obj["fields"]['isPublic'] = { "type": 'Boolean', "system": false };
        obj["fields"]['autoStart'] = { "type": 'Boolean', "system": false };
        obj["fields"]['scheduledStartDate'] = { "type": 'Date', "system": false };
        obj["fields"]['scheduledEndDate'] = { "type": 'Date', "system": false };
        obj["fields"]['includeEntrantsWhere'] = new ComplexFilter().modelMap();
        obj["fields"]['optinRequiredForEntrants'] = { "type": 'Boolean', "system": false };
        obj["fields"]['metadata'] = [new Metadata().modelMap()];
        obj["fields"]['translations'] = [new Translation().modelMap()];
        obj["fields"]['contests'] = [new UpdateContestRequest().modelMap()];
        obj["fields"]['rewards'] = [new UpdateRewardRequest().modelMap()];

        

        return obj;
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
            if (data.hasOwnProperty('contests')) {
                obj['contests'] = ApiClient.convertToType(data['contests'], [UpdateContestRequest]);
            }
            if (data.hasOwnProperty('rewards')) {
                obj['rewards'] = ApiClient.convertToType(data['rewards'], [UpdateRewardRequest]);
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
 * @member {String} termsConditions
 */
UpdateCompetitionRequestAllOf.prototype['termsConditions'] = undefined;

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
 * An array of pre created product identifiers
 * @member {Array.<String>} productIds
 */
UpdateCompetitionRequestAllOf.prototype['productIds'] = undefined;

/**
 * @member {Array.<module:model/RuleSet>} ruleSets
 */
UpdateCompetitionRequestAllOf.prototype['ruleSets'] = undefined;

/**
 * Is the event publicly exposed depending on the event model
 * @member {Boolean} isPublic
 */
UpdateCompetitionRequestAllOf.prototype['isPublic'] = undefined;

/**
 * Is the event publicly exposed depending on the event model
 * @member {Boolean} autoStart
 */
UpdateCompetitionRequestAllOf.prototype['autoStart'] = undefined;

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
 * @member {module:model/ComplexFilter} includeEntrantsWhere
 */
UpdateCompetitionRequestAllOf.prototype['includeEntrantsWhere'] = undefined;

/**
 * If True, members must Opt in before they can acquire points in the contest
 * @member {Boolean} optinRequiredForEntrants
 */
UpdateCompetitionRequestAllOf.prototype['optinRequiredForEntrants'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
UpdateCompetitionRequestAllOf.prototype['metadata'] = undefined;

/**
 * @member {Array.<module:model/Translation>} translations
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






export default UpdateCompetitionRequestAllOf;

