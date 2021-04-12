/**
 * CompetitionLabs Application Services
 * CompetitionLabs Application Services are used to manage and configure spaces.
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
import ProductReduced from './ProductReduced';
import RuleSet from './RuleSet';
import TranslationValue from './TranslationValue';

/**
 * The CreateCompetitionRequestAllOf model module.
 * @module model/CreateCompetitionRequestAllOf
 * @version 1.0.0
 */
class CreateCompetitionRequestAllOf {
    /**
     * Constructs a new <code>CreateCompetitionRequestAllOf</code>.
     * @alias module:model/CreateCompetitionRequestAllOf
     * @param competitionType {module:model/CompetitionType} 
     * @param numberOfRounds {Number} Number of rounds to be played in a competition
     * @param name {String} A name or a name of a competition. Can be translated
     * @param minNumberOfEntrants {Number} Maximum number of partiipants allowed in a competition
     * @param products {Array.<module:model/ProductReduced>} 
     * @param ruleSets {Array.<module:model/RuleSet>} 
     * @param scheduledStartDate {Date} ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone
     * @param scheduledEndDate {Date} ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone
     * @param constraints {Array.<String>} Additional constraints
     */
    constructor(competitionType, numberOfRounds, name, minNumberOfEntrants, products, ruleSets, scheduledStartDate, scheduledEndDate, constraints) { 
        
        CreateCompetitionRequestAllOf.initialize(this, competitionType, numberOfRounds, name, minNumberOfEntrants, products, ruleSets, scheduledStartDate, scheduledEndDate, constraints);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, competitionType, numberOfRounds, name, minNumberOfEntrants, products, ruleSets, scheduledStartDate, scheduledEndDate, constraints) { 
        obj['competitionType'] = competitionType;
        obj['numberOfRounds'] = numberOfRounds;
        obj['name'] = name;
        obj['minNumberOfEntrants'] = minNumberOfEntrants;
        obj['products'] = products;
        obj['ruleSets'] = ruleSets;
        obj['scheduledStartDate'] = scheduledStartDate;
        obj['scheduledEndDate'] = scheduledEndDate;
        obj['constraints'] = constraints;
    }

    /**
     * Constructs a <code>CreateCompetitionRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCompetitionRequestAllOf} obj Optional instance to populate.
     * @return {module:model/CreateCompetitionRequestAllOf} The populated <code>CreateCompetitionRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateCompetitionRequestAllOf();

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
            if (data.hasOwnProperty('maxNumberOfEntrants')) {
                obj['maxNumberOfEntrants'] = ApiClient.convertToType(data['maxNumberOfEntrants'], 'Number');
            }
            if (data.hasOwnProperty('minNumberOfEntrants')) {
                obj['minNumberOfEntrants'] = ApiClient.convertToType(data['minNumberOfEntrants'], 'Number');
            }
            if (data.hasOwnProperty('products')) {
                obj['products'] = ApiClient.convertToType(data['products'], [ProductReduced]);
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
            if (data.hasOwnProperty('includeEntrantsWhere')) {
                obj['includeEntrantsWhere'] = ComplexFilter.constructFromObject(data['includeEntrantsWhere']);
            }
            if (data.hasOwnProperty('translations')) {
                obj['translations'] = ApiClient.convertToType(data['translations'], [Object]);
            }
            if (data.hasOwnProperty('contests')) {
                obj['contests'] = CreateContestRequest.constructFromObject(data['contests']);
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
 * @member {module:model/CompetitionType} competitionType
 */
CreateCompetitionRequestAllOf.prototype['competitionType'] = undefined;

/**
 * Number of rounds to be played in a competition
 * @member {Number} numberOfRounds
 */
CreateCompetitionRequestAllOf.prototype['numberOfRounds'] = undefined;

/**
 * Number of group stages
 * @member {Number} numberOfGroupStages
 */
CreateCompetitionRequestAllOf.prototype['numberOfGroupStages'] = undefined;

/**
 * A name or a name of a competition. Can be translated
 * @member {String} name
 */
CreateCompetitionRequestAllOf.prototype['name'] = undefined;

/**
 * Description of the competition. Can be translated
 * @member {String} description
 */
CreateCompetitionRequestAllOf.prototype['description'] = undefined;

/**
 * Terms and conditions of a competition. Can be translated
 * @member {String} termsAndConditions
 */
CreateCompetitionRequestAllOf.prototype['termsAndConditions'] = undefined;

/**
 * Maximum number of partiipants allowed in a competition
 * @member {Number} maxNumberOfEntrants
 */
CreateCompetitionRequestAllOf.prototype['maxNumberOfEntrants'] = undefined;

/**
 * Maximum number of partiipants allowed in a competition
 * @member {Number} minNumberOfEntrants
 */
CreateCompetitionRequestAllOf.prototype['minNumberOfEntrants'] = undefined;

/**
 * @member {Array.<module:model/ProductReduced>} products
 */
CreateCompetitionRequestAllOf.prototype['products'] = undefined;

/**
 * @member {Array.<module:model/RuleSet>} ruleSets
 */
CreateCompetitionRequestAllOf.prototype['ruleSets'] = undefined;

/**
 * ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone
 * @member {Date} scheduledStartDate
 */
CreateCompetitionRequestAllOf.prototype['scheduledStartDate'] = undefined;

/**
 * ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone
 * @member {Date} scheduledEndDate
 */
CreateCompetitionRequestAllOf.prototype['scheduledEndDate'] = undefined;

/**
 * @member {module:model/ComplexFilter} includeEntrantsWhere
 */
CreateCompetitionRequestAllOf.prototype['includeEntrantsWhere'] = undefined;

/**
 * @member {Array.<Object.<String, module:model/TranslationValue>>} translations
 */
CreateCompetitionRequestAllOf.prototype['translations'] = undefined;

/**
 * @member {module:model/CreateContestRequest} contests
 */
CreateCompetitionRequestAllOf.prototype['contests'] = undefined;

/**
 * @member {Array.<module:model/CreateRewardRequest>} rewards
 */
CreateCompetitionRequestAllOf.prototype['rewards'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
CreateCompetitionRequestAllOf.prototype['constraints'] = undefined;






export default CreateCompetitionRequestAllOf;

