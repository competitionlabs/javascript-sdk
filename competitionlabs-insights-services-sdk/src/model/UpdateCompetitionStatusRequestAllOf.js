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
 * The UpdateCompetitionStatusRequestAllOf model module.
 * @module model/UpdateCompetitionStatusRequestAllOf
 * @version 1.0.0
 */
class UpdateCompetitionStatusRequestAllOf {
    /**
     * Constructs a new <code>UpdateCompetitionStatusRequestAllOf</code>.
     * @alias module:model/UpdateCompetitionStatusRequestAllOf
     * @param status {module:model/CompetitionStatusActions} 
     */
    constructor(status) { 
        
        UpdateCompetitionStatusRequestAllOf.initialize(this, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, status) { 
        obj['status'] = status;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['status'];

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

        obj["fields"]['status'];

        
        obj["requiredFields"]['status'];

        return obj;
    }

    /**
     * Constructs a <code>UpdateCompetitionStatusRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateCompetitionStatusRequestAllOf} obj Optional instance to populate.
     * @return {module:model/UpdateCompetitionStatusRequestAllOf} The populated <code>UpdateCompetitionStatusRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateCompetitionStatusRequestAllOf();

            if (data.hasOwnProperty('status')) {
                obj['status'] = CompetitionStatusActions.constructFromObject(data['status']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CompetitionStatusActions} status
 */
UpdateCompetitionStatusRequestAllOf.prototype['status'] = undefined;






export default UpdateCompetitionStatusRequestAllOf;

