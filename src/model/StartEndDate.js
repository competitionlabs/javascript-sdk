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
 * The StartEndDate model module.
 * @module model/StartEndDate
 * @version 1.0.1
 */
class StartEndDate {
    /**
     * Constructs a new <code>StartEndDate</code>.
     * @alias module:model/StartEndDate
     * @param start {Date} The date and time of when something should start. ISO8601 timestamp
     */
    constructor(start) { 
        
        StartEndDate.initialize(this, start);
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['start'] = null;
        obj['end'] = null;

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

        obj["fields"]['start'] = { "type": 'Date', "system": false };
        obj["fields"]['end'] = { "type": 'Date', "system": false };

        
        obj["requiredFields"]['start'] = { "type": 'Date', "system": false };

        return obj;
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, start) { 
        obj['start'] = start;
    }

    /**
     * Constructs a <code>StartEndDate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StartEndDate} obj Optional instance to populate.
     * @return {module:model/StartEndDate} The populated <code>StartEndDate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StartEndDate();

            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'Date');
            }
            if (data.hasOwnProperty('end')) {
                obj['end'] = ApiClient.convertToType(data['end'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * The date and time of when something should start. ISO8601 timestamp
 * @member {Date} start
 */
StartEndDate.prototype['start'] = undefined;

/**
 * The date and time of when something should end. ISO8601 timestamp
 * @member {Date} end
 */
StartEndDate.prototype['end'] = undefined;






export default StartEndDate;

