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
import UpdateCompetitionStatusRequestAllOf from './UpdateCompetitionStatusRequestAllOf';
import UpdateModelDefault from './UpdateModelDefault';

/**
 * The UpdateCompetitionStatusRequest model module.
 * @module model/UpdateCompetitionStatusRequest
 * @version 1.0.0
 */
class UpdateCompetitionStatusRequest {
    /**
     * Constructs a new <code>UpdateCompetitionStatusRequest</code>.
     * @alias module:model/UpdateCompetitionStatusRequest
     * @implements module:model/UpdateModelDefault
     * @implements module:model/UpdateCompetitionStatusRequestAllOf
     * @param id {String} A unique system generated identifier
     * @param status {module:model/CompetitionStatusActions} 
     */
    constructor(id, status) { 
        UpdateModelDefault.initialize(this, id);UpdateCompetitionStatusRequestAllOf.initialize(this, status);
        UpdateCompetitionStatusRequest.initialize(this, id, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, status) { 
        obj['id'] = id;
        obj['status'] = status;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['id'];
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

        obj["fields"]['id'];
        obj["fields"]['status'];

        
        obj["requiredFields"]['id'];
        obj["requiredFields"]['status'];

        return obj;
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
            UpdateModelDefault.constructFromObject(data, obj);
            UpdateCompetitionStatusRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = CompetitionStatusActions.constructFromObject(data['status']);
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateCompetitionStatusRequest.prototype['id'] = undefined;

/**
 * @member {module:model/CompetitionStatusActions} status
 */
UpdateCompetitionStatusRequest.prototype['status'] = undefined;


// Implement UpdateModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateModelDefault.prototype['id'] = undefined;
// Implement UpdateCompetitionStatusRequestAllOf interface:
/**
 * @member {module:model/CompetitionStatusActions} status
 */
UpdateCompetitionStatusRequestAllOf.prototype['status'] = undefined;




export default UpdateCompetitionStatusRequest;

