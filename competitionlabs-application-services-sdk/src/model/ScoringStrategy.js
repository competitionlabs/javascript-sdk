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

/**
 * The ScoringStrategy model module.
 * @module model/ScoringStrategy
 * @version 1.0.4
 */
class ScoringStrategy {
    /**
     * Constructs a new <code>ScoringStrategy</code>.
     * @alias module:model/ScoringStrategy
     * @param limitUpdatesTo {Number} The scoring strategies types \"SumBest\" value
     * @param sumBestXOf {Number} The scoring strategies types \"LimitedTo\" value
     * @param lastUpdateTimeStamp {Number} The scoring strategies types \"FirstTo\" value
     * @param recordTimeWhenSumReaches {Number} Not supported at the moment
     */
    constructor(limitUpdatesTo, sumBestXOf, lastUpdateTimeStamp, recordTimeWhenSumReaches) { 
        
        ScoringStrategy.initialize(this, limitUpdatesTo, sumBestXOf, lastUpdateTimeStamp, recordTimeWhenSumReaches);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, limitUpdatesTo, sumBestXOf, lastUpdateTimeStamp, recordTimeWhenSumReaches) { 
        obj['limitUpdatesTo'] = limitUpdatesTo;
        obj['sumBestXOf'] = sumBestXOf;
        obj['lastUpdateTimeStamp'] = lastUpdateTimeStamp;
        obj['recordTimeWhenSumReaches'] = recordTimeWhenSumReaches;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['limitUpdatesTo'];
        obj['sumBestXOf'];
        obj['lastUpdateTimeStamp'];
        obj['recordTimeWhenSumReaches'];

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

        obj["fields"]['limitUpdatesTo'];
        obj["fields"]['sumBestXOf'];
        obj["fields"]['lastUpdateTimeStamp'];
        obj["fields"]['recordTimeWhenSumReaches'];

        
        obj["requiredFields"]['limitUpdatesTo'];
        obj["requiredFields"]['sumBestXOf'];
        obj["requiredFields"]['lastUpdateTimeStamp'];
        obj["requiredFields"]['recordTimeWhenSumReaches'];

        return obj;
    }

    /**
     * Constructs a <code>ScoringStrategy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScoringStrategy} obj Optional instance to populate.
     * @return {module:model/ScoringStrategy} The populated <code>ScoringStrategy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScoringStrategy();

            if (data.hasOwnProperty('limitUpdatesTo')) {
                obj['limitUpdatesTo'] = ApiClient.convertToType(data['limitUpdatesTo'], 'Number');
            }
            if (data.hasOwnProperty('sumBestXOf')) {
                obj['sumBestXOf'] = ApiClient.convertToType(data['sumBestXOf'], 'Number');
            }
            if (data.hasOwnProperty('lastUpdateTimeStamp')) {
                obj['lastUpdateTimeStamp'] = ApiClient.convertToType(data['lastUpdateTimeStamp'], 'Number');
            }
            if (data.hasOwnProperty('recordTimeWhenSumReaches')) {
                obj['recordTimeWhenSumReaches'] = ApiClient.convertToType(data['recordTimeWhenSumReaches'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The scoring strategies types \"SumBest\" value
 * @member {Number} limitUpdatesTo
 */
ScoringStrategy.prototype['limitUpdatesTo'] = undefined;

/**
 * The scoring strategies types \"LimitedTo\" value
 * @member {Number} sumBestXOf
 */
ScoringStrategy.prototype['sumBestXOf'] = undefined;

/**
 * The scoring strategies types \"FirstTo\" value
 * @member {Number} lastUpdateTimeStamp
 */
ScoringStrategy.prototype['lastUpdateTimeStamp'] = undefined;

/**
 * Not supported at the moment
 * @member {Number} recordTimeWhenSumReaches
 */
ScoringStrategy.prototype['recordTimeWhenSumReaches'] = undefined;






export default ScoringStrategy;

