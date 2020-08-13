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
import AchievementLiveStatus from './AchievementLiveStatus';

/**
 * The AchievementLiveStatusRequest model module.
 * @module model/AchievementLiveStatusRequest
 * @version 1.0.1
 */
class AchievementLiveStatusRequest {
    /**
     * Constructs a new <code>AchievementLiveStatusRequest</code>.
     * @alias module:model/AchievementLiveStatusRequest
     * @param achievementId {String} Unique system identifier of an Achievement
     * @param status {module:model/AchievementLiveStatus} 
     */
    constructor(achievementId, status) { 
        
        AchievementLiveStatusRequest.initialize(this, achievementId, status);
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['achievementId'] = null;
        obj['status'] = new AchievementLiveStatus().model();

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

        obj["fields"]['achievementId'] = { "type": 'String' };
        obj["fields"]['status'] = new AchievementLiveStatus().modelMap();

        
        obj["requiredFields"]['achievementId'] = { "type": 'String' };
        obj["requiredFields"]['status'] = new AchievementLiveStatus().modelMap();

        return obj;
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, achievementId, status) { 
        obj['achievementId'] = achievementId;
        obj['status'] = status;
    }

    /**
     * Constructs a <code>AchievementLiveStatusRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AchievementLiveStatusRequest} obj Optional instance to populate.
     * @return {module:model/AchievementLiveStatusRequest} The populated <code>AchievementLiveStatusRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AchievementLiveStatusRequest();

            if (data.hasOwnProperty('achievementId')) {
                obj['achievementId'] = ApiClient.convertToType(data['achievementId'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = AchievementLiveStatus.constructFromObject(data['status']);
            }
        }
        return obj;
    }


}

/**
 * Unique system identifier of an Achievement
 * @member {String} achievementId
 */
AchievementLiveStatusRequest.prototype['achievementId'] = undefined;

/**
 * @member {module:model/AchievementLiveStatus} status
 */
AchievementLiveStatusRequest.prototype['status'] = undefined;






export default AchievementLiveStatusRequest;

