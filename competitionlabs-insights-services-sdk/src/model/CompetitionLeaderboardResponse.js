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
import Error from './Error';
import LeaderboardResponseByContest from './LeaderboardResponseByContest';
import MetaExtended from './MetaExtended';

/**
 * The CompetitionLeaderboardResponse model module.
 * @module model/CompetitionLeaderboardResponse
 * @version 1.0.0
 */
class CompetitionLeaderboardResponse {
    /**
     * Constructs a new <code>CompetitionLeaderboardResponse</code>.
     * @alias module:model/CompetitionLeaderboardResponse
     * @param meta {module:model/MetaExtended} 
     */
    constructor(meta) { 
        
        CompetitionLeaderboardResponse.initialize(this, meta);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, meta) { 
        obj['meta'] = meta;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['meta'];
        obj['results'];
        obj['errors'];

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

        obj["fields"]['meta'];
        obj["fields"]['results'];
        obj["fields"]['errors'];

        
        obj["requiredFields"]['meta'];

        return obj;
    }

    /**
     * Constructs a <code>CompetitionLeaderboardResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompetitionLeaderboardResponse} obj Optional instance to populate.
     * @return {module:model/CompetitionLeaderboardResponse} The populated <code>CompetitionLeaderboardResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CompetitionLeaderboardResponse();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = MetaExtended.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [LeaderboardResponseByContest]);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/MetaExtended} meta
 */
CompetitionLeaderboardResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/LeaderboardResponseByContest>} results
 */
CompetitionLeaderboardResponse.prototype['results'] = undefined;

/**
 * @member {Array.<module:model/Error>} errors
 */
CompetitionLeaderboardResponse.prototype['errors'] = undefined;






export default CompetitionLeaderboardResponse;

