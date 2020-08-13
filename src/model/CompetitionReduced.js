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
import CompetitionReducedAllOf from './CompetitionReducedAllOf';
import CompetitionStatus from './CompetitionStatus';
import CompetitionType from './CompetitionType';
import ComplexFilter from './ComplexFilter';
import ModelDefault from './ModelDefault';
import ProductReduced from './ProductReduced';

/**
 * The CompetitionReduced model module.
 * @module model/CompetitionReduced
 * @version 1.0.1
 */
class CompetitionReduced {
    /**
     * Constructs a new <code>CompetitionReduced</code>.
     * @alias module:model/CompetitionReduced
     * @implements module:model/ModelDefault
     * @implements module:model/CompetitionReducedAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param competitionType {module:model/CompetitionType} 
     * @param numberOfRounds {Number} Number of rounds to be played in a competition
     * @param name {String} A name or a name of a competition. Can be translated
     * @param optinRequiredForEntrants {Boolean} If True, members must Opt in before they can acquire points in the contest
     * @param status {module:model/CompetitionStatus} 
     * @param statusCode {Number} The code of the competition
     * @param products {Array.<module:model/ProductReduced>} 
     * @param scheduledStartDate {Date} ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone
     * @param scheduledEndDate {Date} ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone
     */
    constructor(id, spaceName, created, competitionType, numberOfRounds, name, optinRequiredForEntrants, status, statusCode, products, scheduledStartDate, scheduledEndDate) { 
        ModelDefault.initialize(this, id, spaceName, created);CompetitionReducedAllOf.initialize(this, competitionType, numberOfRounds, name, optinRequiredForEntrants, status, statusCode, products, scheduledStartDate, scheduledEndDate);
        CompetitionReduced.initialize(this, id, spaceName, created, competitionType, numberOfRounds, name, optinRequiredForEntrants, status, statusCode, products, scheduledStartDate, scheduledEndDate);
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['id'] = null;
        obj['spaceName'] = null;
        obj['created'] = null;
        obj['competitionType'] = new CompetitionType().model();
        obj['numberOfRounds'] = null;
        obj['name'] = null;
        obj['includeEntrantsWhere'] = new ComplexFilter().model();
        obj['optinRequiredForEntrants'] = null;
        obj['status'] = new CompetitionStatus().model();
        obj['statusCode'] = null;
        obj['products'] = [new ProductReduced().model()];
        obj['scheduledStartDate'] = null;
        obj['scheduledEndDate'] = null;
        obj['actualStartDate'] = null;
        obj['actualEndDate'] = null;

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

        obj["fields"]['id'] = { "type": 'String' };
        obj["fields"]['spaceName'] = { "type": 'String' };
        obj["fields"]['created'] = { "type": 'Date' };
        obj["fields"]['competitionType'] = new CompetitionType().modelMap();
        obj["fields"]['numberOfRounds'] = { "type": 'Number' };
        obj["fields"]['name'] = { "type": 'String' };
        obj["fields"]['includeEntrantsWhere'] = new ComplexFilter().modelMap();
        obj["fields"]['optinRequiredForEntrants'] = { "type": 'Boolean' };
        obj["fields"]['status'] = new CompetitionStatus().modelMap();
        obj["fields"]['statusCode'] = { "type": 'Number' };
        obj["fields"]['products'] = [new ProductReduced().modelMap()];
        obj["fields"]['scheduledStartDate'] = { "type": 'Date' };
        obj["fields"]['scheduledEndDate'] = { "type": 'Date' };
        obj["fields"]['actualStartDate'] = { "type": 'Date' };
        obj["fields"]['actualEndDate'] = { "type": 'Date' };

        
        obj["requiredFields"]['id'] = { "type": 'String' };
        obj["requiredFields"]['spaceName'] = { "type": 'String' };
        obj["requiredFields"]['created'] = { "type": 'Date' };
        obj["requiredFields"]['competitionType'] = new CompetitionType().modelMap();
        obj["requiredFields"]['numberOfRounds'] = { "type": 'Number' };
        obj["requiredFields"]['name'] = { "type": 'String' };
        obj["requiredFields"]['optinRequiredForEntrants'] = { "type": 'Boolean' };
        obj["requiredFields"]['status'] = new CompetitionStatus().modelMap();
        obj["requiredFields"]['statusCode'] = { "type": 'Number' };
        obj["requiredFields"]['products'] = [new ProductReduced().modelMap()];
        obj["requiredFields"]['scheduledStartDate'] = { "type": 'Date' };
        obj["requiredFields"]['scheduledEndDate'] = { "type": 'Date' };

        return obj;
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, competitionType, numberOfRounds, name, optinRequiredForEntrants, status, statusCode, products, scheduledStartDate, scheduledEndDate) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['competitionType'] = competitionType;
        obj['numberOfRounds'] = numberOfRounds;
        obj['name'] = name;
        obj['optinRequiredForEntrants'] = optinRequiredForEntrants;
        obj['status'] = status;
        obj['statusCode'] = statusCode;
        obj['products'] = products;
        obj['scheduledStartDate'] = scheduledStartDate;
        obj['scheduledEndDate'] = scheduledEndDate;
    }

    /**
     * Constructs a <code>CompetitionReduced</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompetitionReduced} obj Optional instance to populate.
     * @return {module:model/CompetitionReduced} The populated <code>CompetitionReduced</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CompetitionReduced();
            ModelDefault.constructFromObject(data, obj);
            CompetitionReducedAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('spaceName')) {
                obj['spaceName'] = ApiClient.convertToType(data['spaceName'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('competitionType')) {
                obj['competitionType'] = CompetitionType.constructFromObject(data['competitionType']);
            }
            if (data.hasOwnProperty('numberOfRounds')) {
                obj['numberOfRounds'] = ApiClient.convertToType(data['numberOfRounds'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('includeEntrantsWhere')) {
                obj['includeEntrantsWhere'] = ComplexFilter.constructFromObject(data['includeEntrantsWhere']);
            }
            if (data.hasOwnProperty('optinRequiredForEntrants')) {
                obj['optinRequiredForEntrants'] = ApiClient.convertToType(data['optinRequiredForEntrants'], 'Boolean');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = CompetitionStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('statusCode')) {
                obj['statusCode'] = ApiClient.convertToType(data['statusCode'], 'Number');
            }
            if (data.hasOwnProperty('products')) {
                obj['products'] = ApiClient.convertToType(data['products'], [ProductReduced]);
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
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
CompetitionReduced.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
CompetitionReduced.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
CompetitionReduced.prototype['created'] = undefined;

/**
 * @member {module:model/CompetitionType} competitionType
 */
CompetitionReduced.prototype['competitionType'] = undefined;

/**
 * Number of rounds to be played in a competition
 * @member {Number} numberOfRounds
 * @default 1
 */
CompetitionReduced.prototype['numberOfRounds'] = 1;

/**
 * A name or a name of a competition. Can be translated
 * @member {String} name
 */
CompetitionReduced.prototype['name'] = undefined;

/**
 * @member {module:model/ComplexFilter} includeEntrantsWhere
 */
CompetitionReduced.prototype['includeEntrantsWhere'] = undefined;

/**
 * If True, members must Opt in before they can acquire points in the contest
 * @member {Boolean} optinRequiredForEntrants
 * @default false
 */
CompetitionReduced.prototype['optinRequiredForEntrants'] = false;

/**
 * @member {module:model/CompetitionStatus} status
 */
CompetitionReduced.prototype['status'] = undefined;

/**
 * The code of the competition
 * @member {Number} statusCode
 * @default 3
 */
CompetitionReduced.prototype['statusCode'] = 3;

/**
 * @member {Array.<module:model/ProductReduced>} products
 */
CompetitionReduced.prototype['products'] = undefined;

/**
 * ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone
 * @member {Date} scheduledStartDate
 */
CompetitionReduced.prototype['scheduledStartDate'] = undefined;

/**
 * ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone
 * @member {Date} scheduledEndDate
 */
CompetitionReduced.prototype['scheduledEndDate'] = undefined;

/**
 * ISO8601 timestamp for when a Competition started. All records are stored in UTC time zone
 * @member {Date} actualStartDate
 */
CompetitionReduced.prototype['actualStartDate'] = undefined;

/**
 * ISO8601 timestamp for when a Competition ended. All records are stored in UTC time zone
 * @member {Date} actualEndDate
 */
CompetitionReduced.prototype['actualEndDate'] = undefined;


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
// Implement CompetitionReducedAllOf interface:
/**
 * @member {module:model/CompetitionType} competitionType
 */
CompetitionReducedAllOf.prototype['competitionType'] = undefined;
/**
 * Number of rounds to be played in a competition
 * @member {Number} numberOfRounds
 * @default 1
 */
CompetitionReducedAllOf.prototype['numberOfRounds'] = 1;
/**
 * A name or a name of a competition. Can be translated
 * @member {String} name
 */
CompetitionReducedAllOf.prototype['name'] = undefined;
/**
 * @member {module:model/ComplexFilter} includeEntrantsWhere
 */
CompetitionReducedAllOf.prototype['includeEntrantsWhere'] = undefined;
/**
 * If True, members must Opt in before they can acquire points in the contest
 * @member {Boolean} optinRequiredForEntrants
 * @default false
 */
CompetitionReducedAllOf.prototype['optinRequiredForEntrants'] = false;
/**
 * @member {module:model/CompetitionStatus} status
 */
CompetitionReducedAllOf.prototype['status'] = undefined;
/**
 * The code of the competition
 * @member {Number} statusCode
 * @default 3
 */
CompetitionReducedAllOf.prototype['statusCode'] = 3;
/**
 * @member {Array.<module:model/ProductReduced>} products
 */
CompetitionReducedAllOf.prototype['products'] = undefined;
/**
 * ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone
 * @member {Date} scheduledStartDate
 */
CompetitionReducedAllOf.prototype['scheduledStartDate'] = undefined;
/**
 * ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone
 * @member {Date} scheduledEndDate
 */
CompetitionReducedAllOf.prototype['scheduledEndDate'] = undefined;
/**
 * ISO8601 timestamp for when a Competition started. All records are stored in UTC time zone
 * @member {Date} actualStartDate
 */
CompetitionReducedAllOf.prototype['actualStartDate'] = undefined;
/**
 * ISO8601 timestamp for when a Competition ended. All records are stored in UTC time zone
 * @member {Date} actualEndDate
 */
CompetitionReducedAllOf.prototype['actualEndDate'] = undefined;




export default CompetitionReduced;

