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
import CompetitionStatus from './CompetitionStatus';
import CompetitionType from './CompetitionType';
import ComplexFilter from './ComplexFilter';
import ContestReduced from './ContestReduced';
import Metadata from './Metadata';
import ProductReduced from './ProductReduced';
import RewardReduced from './RewardReduced';
import RuleSet from './RuleSet';
import Translation from './Translation';

/**
 * The CompetitionAllOf model module.
 * @module model/CompetitionAllOf
 * @version 1.0.4
 */
class CompetitionAllOf {
    /**
     * Constructs a new <code>CompetitionAllOf</code>.
     * @alias module:model/CompetitionAllOf
     * @param competitionType {module:model/CompetitionType} 
     * @param numberOfRounds {Number} Number of rounds to be played in a competition
     * @param name {String} A name or a name of a competition. Can be translated
     * @param minNumberOfEntrants {Number} Maximum number of partiipants allowed in a competition
     * @param products {Array.<module:model/ProductReduced>} 
     * @param ruleSets {Array.<module:model/RuleSet>} 
     * @param isPublic {Boolean} Is the event publicly exposed depending on the event model
     * @param autoStart {Boolean} Is the event publicly exposed depending on the event model
     * @param scheduledStartDate {Date} ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone
     * @param scheduledEndDate {Date} ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone
     * @param optinRequiredForEntrants {Boolean} If True, members must Opt in before they can acquire points in the contest
     * @param status {module:model/CompetitionStatus} 
     * @param statusCode {Number} The code of the competition
     */
    constructor(competitionType, numberOfRounds, name, minNumberOfEntrants, products, ruleSets, isPublic, autoStart, scheduledStartDate, scheduledEndDate, optinRequiredForEntrants, status, statusCode) { 
        
        CompetitionAllOf.initialize(this, competitionType, numberOfRounds, name, minNumberOfEntrants, products, ruleSets, isPublic, autoStart, scheduledStartDate, scheduledEndDate, optinRequiredForEntrants, status, statusCode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, competitionType, numberOfRounds, name, minNumberOfEntrants, products, ruleSets, isPublic, autoStart, scheduledStartDate, scheduledEndDate, optinRequiredForEntrants, status, statusCode) { 
        obj['competitionType'] = competitionType;
        obj['numberOfRounds'] = numberOfRounds;
        obj['name'] = name;
        obj['minNumberOfEntrants'] = minNumberOfEntrants;
        obj['products'] = products;
        obj['ruleSets'] = ruleSets;
        obj['isPublic'] = isPublic;
        obj['autoStart'] = autoStart;
        obj['scheduledStartDate'] = scheduledStartDate;
        obj['scheduledEndDate'] = scheduledEndDate;
        obj['optinRequiredForEntrants'] = optinRequiredForEntrants;
        obj['status'] = status;
        obj['statusCode'] = statusCode;
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
        obj['products'];
        obj['ruleSets'];
        obj['isPublic'];
        obj['autoStart'];
        obj['scheduledStartDate'];
        obj['scheduledEndDate'];
        obj['actualStartDate'];
        obj['actualEndDate'];
        obj['includeEntrantsWhere'];
        obj['optinRequiredForEntrants'];
        obj['metadata'];
        obj['translations'];
        obj['status'];
        obj['statusCode'];
        obj['contests'];
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

        obj["fields"]['competitionType'];
        obj["fields"]['numberOfRounds'];
        obj["fields"]['numberOfGroupStages'];
        obj["fields"]['name'];
        obj["fields"]['description'];
        obj["fields"]['termsConditions'];
        obj["fields"]['maxNumberOfEntrants'];
        obj["fields"]['minNumberOfEntrants'];
        obj["fields"]['products'];
        obj["fields"]['ruleSets'];
        obj["fields"]['isPublic'];
        obj["fields"]['autoStart'];
        obj["fields"]['scheduledStartDate'];
        obj["fields"]['scheduledEndDate'];
        obj["fields"]['actualStartDate'];
        obj["fields"]['actualEndDate'];
        obj["fields"]['includeEntrantsWhere'];
        obj["fields"]['optinRequiredForEntrants'];
        obj["fields"]['metadata'];
        obj["fields"]['translations'];
        obj["fields"]['status'];
        obj["fields"]['statusCode'];
        obj["fields"]['contests'];
        obj["fields"]['rewards'];
        obj["fields"]['constraints'];

        
        obj["requiredFields"]['competitionType'];
        obj["requiredFields"]['numberOfRounds'];
        obj["requiredFields"]['name'];
        obj["requiredFields"]['minNumberOfEntrants'];
        obj["requiredFields"]['products'];
        obj["requiredFields"]['ruleSets'];
        obj["requiredFields"]['isPublic'];
        obj["requiredFields"]['autoStart'];
        obj["requiredFields"]['scheduledStartDate'];
        obj["requiredFields"]['scheduledEndDate'];
        obj["requiredFields"]['optinRequiredForEntrants'];
        obj["requiredFields"]['status'];
        obj["requiredFields"]['statusCode'];

        return obj;
    }

    /**
     * Constructs a <code>CompetitionAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompetitionAllOf} obj Optional instance to populate.
     * @return {module:model/CompetitionAllOf} The populated <code>CompetitionAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CompetitionAllOf();

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
            if (data.hasOwnProperty('products')) {
                obj['products'] = ApiClient.convertToType(data['products'], [ProductReduced]);
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
            if (data.hasOwnProperty('status')) {
                obj['status'] = CompetitionStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('statusCode')) {
                obj['statusCode'] = ApiClient.convertToType(data['statusCode'], 'Number');
            }
            if (data.hasOwnProperty('contests')) {
                obj['contests'] = ApiClient.convertToType(data['contests'], [ContestReduced]);
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
 * @member {module:model/CompetitionType} competitionType
 */
CompetitionAllOf.prototype['competitionType'] = undefined;

/**
 * Number of rounds to be played in a competition
 * @member {Number} numberOfRounds
 */
CompetitionAllOf.prototype['numberOfRounds'] = undefined;

/**
 * Number of group stages
 * @member {Number} numberOfGroupStages
 */
CompetitionAllOf.prototype['numberOfGroupStages'] = undefined;

/**
 * A name or a name of a competition. Can be translated
 * @member {String} name
 */
CompetitionAllOf.prototype['name'] = undefined;

/**
 * Description of the competition. Can be translated
 * @member {String} description
 */
CompetitionAllOf.prototype['description'] = undefined;

/**
 * Terms and conditions of a competition. Can be translated
 * @member {String} termsConditions
 */
CompetitionAllOf.prototype['termsConditions'] = undefined;

/**
 * Maximum number of partiipants allowed in a competition
 * @member {Number} maxNumberOfEntrants
 */
CompetitionAllOf.prototype['maxNumberOfEntrants'] = undefined;

/**
 * Maximum number of partiipants allowed in a competition
 * @member {Number} minNumberOfEntrants
 */
CompetitionAllOf.prototype['minNumberOfEntrants'] = undefined;

/**
 * @member {Array.<module:model/ProductReduced>} products
 */
CompetitionAllOf.prototype['products'] = undefined;

/**
 * @member {Array.<module:model/RuleSet>} ruleSets
 */
CompetitionAllOf.prototype['ruleSets'] = undefined;

/**
 * Is the event publicly exposed depending on the event model
 * @member {Boolean} isPublic
 */
CompetitionAllOf.prototype['isPublic'] = undefined;

/**
 * Is the event publicly exposed depending on the event model
 * @member {Boolean} autoStart
 */
CompetitionAllOf.prototype['autoStart'] = undefined;

/**
 * ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone
 * @member {Date} scheduledStartDate
 */
CompetitionAllOf.prototype['scheduledStartDate'] = undefined;

/**
 * ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone
 * @member {Date} scheduledEndDate
 */
CompetitionAllOf.prototype['scheduledEndDate'] = undefined;

/**
 * ISO8601 timestamp for when a Competition started. All records are stored in UTC time zone
 * @member {Date} actualStartDate
 */
CompetitionAllOf.prototype['actualStartDate'] = undefined;

/**
 * ISO8601 timestamp for when a Competition ended. All records are stored in UTC time zone
 * @member {Date} actualEndDate
 */
CompetitionAllOf.prototype['actualEndDate'] = undefined;

/**
 * @member {module:model/ComplexFilter} includeEntrantsWhere
 */
CompetitionAllOf.prototype['includeEntrantsWhere'] = undefined;

/**
 * If True, members must Opt in before they can acquire points in the contest
 * @member {Boolean} optinRequiredForEntrants
 */
CompetitionAllOf.prototype['optinRequiredForEntrants'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
CompetitionAllOf.prototype['metadata'] = undefined;

/**
 * @member {Array.<module:model/Translation>} translations
 */
CompetitionAllOf.prototype['translations'] = undefined;

/**
 * @member {module:model/CompetitionStatus} status
 */
CompetitionAllOf.prototype['status'] = undefined;

/**
 * The code of the competition
 * @member {Number} statusCode
 */
CompetitionAllOf.prototype['statusCode'] = undefined;

/**
 * @member {Array.<module:model/ContestReduced>} contests
 */
CompetitionAllOf.prototype['contests'] = undefined;

/**
 * @member {Array.<module:model/RewardReduced>} rewards
 */
CompetitionAllOf.prototype['rewards'] = undefined;

/**
 * Additional constraints
 * @member {Array.<String>} constraints
 */
CompetitionAllOf.prototype['constraints'] = undefined;






export default CompetitionAllOf;

