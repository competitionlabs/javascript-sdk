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
import CompetitionStatusActions from './CompetitionStatusActions';

/**
 * The UpdateCompetitionStatusRequest model module.
 * @module model/UpdateCompetitionStatusRequest
 * @version 1.0.1
 */
class UpdateCompetitionStatusRequest {
    /**
     * Constructs a new <code>UpdateCompetitionStatusRequest</code>.
     * @alias module:model/UpdateCompetitionStatusRequest
     * @param competitionId {String} Unique competition identifier
     * @param status {module:model/CompetitionStatusActions} 
     */
    constructor(competitionId, status) { 
        
        UpdateCompetitionStatusRequest.initialize(this, competitionId, status);
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['competitionId'] = null;
        obj['status'] = new CompetitionStatusActions().model();

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

        obj["fields"]['competitionId'] = { "type": 'String' };
        obj["fields"]['status'] = new CompetitionStatusActions().modelMap();

        
        obj["requiredFields"]['competitionId'] = { "type": 'String' };
        obj["requiredFields"]['status'] = new CompetitionStatusActions().modelMap();

        return obj;
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, competitionId, status) { 
        obj['competitionId'] = competitionId;
        obj['status'] = status;
    }

    /**
     * Constructs a <code>UpdateCompetitionStatusRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateCompetitionStatusRequest} obj Optional instance to populate.
     * @return {module:model/UpdateCompetitionStatusRequest} The populated <code>UpdateCompetitionStatusRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateCompetitionStatusRequest();

            if (data.hasOwnProperty('competitionId')) {
                obj['competitionId'] = ApiClient.convertToType(data['competitionId'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = CompetitionStatusActions.constructFromObject(data['status']);
            }
        }
        return obj;
    }


}

/**
 * Unique competition identifier
 * @member {String} competitionId
 */
UpdateCompetitionStatusRequest.prototype['competitionId'] = undefined;

/**
 * @member {module:model/CompetitionStatusActions} status
 */
UpdateCompetitionStatusRequest.prototype['status'] = undefined;






export default UpdateCompetitionStatusRequest;

