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
import EntityType from './EntityType';
import EntrantAction from './EntrantAction';
import EntrantStatus from './EntrantStatus';

/**
 * The Entrant model module.
 * @module model/Entrant
 * @version 1.0.0
 */
class Entrant {
    /**
     * Constructs a new <code>Entrant</code>.
     * @alias module:model/Entrant
     * @param memberId {String} Unique member identifier. A member has to exist in the CompetitionLabs database
     * @param memberRefId {String} Unique member reference identifier. A member has to exist in the CompetitionLabs database
     * @param entrantStatus {module:model/EntrantStatus} 
     */
    constructor(memberId, memberRefId, entrantStatus) { 
        
        Entrant.initialize(this, memberId, memberRefId, entrantStatus);
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['entrantAction'] = new EntrantAction().model();
        obj['memberId'] = null;
        obj['memberRefId'] = null;
        obj['entrantStatus'] = new EntrantStatus().model();
        obj['entityId'] = null;
        obj['entityType'] = new EntityType().model();

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

        obj["fields"]['entrantAction'] = new EntrantAction().modelMap();
        obj["fields"]['memberId'] = { "type": 'String' };
        obj["fields"]['memberRefId'] = { "type": 'String' };
        obj["fields"]['entrantStatus'] = new EntrantStatus().modelMap();
        obj["fields"]['entityId'] = { "type": 'String' };
        obj["fields"]['entityType'] = new EntityType().modelMap();

        
        obj["requiredFields"]['memberId'] = { "type": 'String' };
        obj["requiredFields"]['memberRefId'] = { "type": 'String' };
        obj["requiredFields"]['entrantStatus'] = new EntrantStatus().modelMap();

        return obj;
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, memberId, memberRefId, entrantStatus) { 
        obj['memberId'] = memberId;
        obj['memberRefId'] = memberRefId;
        obj['entrantStatus'] = entrantStatus;
    }

    /**
     * Constructs a <code>Entrant</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Entrant} obj Optional instance to populate.
     * @return {module:model/Entrant} The populated <code>Entrant</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Entrant();

            if (data.hasOwnProperty('entrantAction')) {
                obj['entrantAction'] = EntrantAction.constructFromObject(data['entrantAction']);
            }
            if (data.hasOwnProperty('memberId')) {
                obj['memberId'] = ApiClient.convertToType(data['memberId'], 'String');
            }
            if (data.hasOwnProperty('memberRefId')) {
                obj['memberRefId'] = ApiClient.convertToType(data['memberRefId'], 'String');
            }
            if (data.hasOwnProperty('entrantStatus')) {
                obj['entrantStatus'] = EntrantStatus.constructFromObject(data['entrantStatus']);
            }
            if (data.hasOwnProperty('entityId')) {
                obj['entityId'] = ApiClient.convertToType(data['entityId'], 'String');
            }
            if (data.hasOwnProperty('entityType')) {
                obj['entityType'] = EntityType.constructFromObject(data['entityType']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/EntrantAction} entrantAction
 */
Entrant.prototype['entrantAction'] = undefined;

/**
 * Unique member identifier. A member has to exist in the CompetitionLabs database
 * @member {String} memberId
 */
Entrant.prototype['memberId'] = undefined;

/**
 * Unique member reference identifier. A member has to exist in the CompetitionLabs database
 * @member {String} memberRefId
 */
Entrant.prototype['memberRefId'] = undefined;

/**
 * @member {module:model/EntrantStatus} entrantStatus
 */
Entrant.prototype['entrantStatus'] = undefined;

/**
 * Unique identifier of the entity
 * @member {String} entityId
 */
Entrant.prototype['entityId'] = undefined;

/**
 * @member {module:model/EntityType} entityType
 */
Entrant.prototype['entityType'] = undefined;






export default Entrant;

