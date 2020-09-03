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
 * The TwoFactorAuthValidateRequest model module.
 * @module model/TwoFactorAuthValidateRequest
 * @version 1.0.5
 */
class TwoFactorAuthValidateRequest {
    /**
     * Constructs a new <code>TwoFactorAuthValidateRequest</code>.
     * @alias module:model/TwoFactorAuthValidateRequest
     * @param secretKey {String} Secret key of the 2FA request
     * @param twoFactorAccessCode {String} 2FA Access code
     */
    constructor(secretKey, twoFactorAccessCode) { 
        
        TwoFactorAuthValidateRequest.initialize(this, secretKey, twoFactorAccessCode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, secretKey, twoFactorAccessCode) { 
        obj['secretKey'] = secretKey;
        obj['twoFactorAccessCode'] = twoFactorAccessCode;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['secretKey'] = null;
        obj['twoFactorAccessCode'] = null;

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

        obj["fields"]['secretKey'] = { "type": 'String', "system": false };
        obj["fields"]['twoFactorAccessCode'] = { "type": 'String', "system": false };

        
        obj["requiredFields"]['secretKey'] = { "type": 'String', "system": false };
        obj["requiredFields"]['twoFactorAccessCode'] = { "type": 'String', "system": false };

        return obj;
    }

    /**
     * Constructs a <code>TwoFactorAuthValidateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TwoFactorAuthValidateRequest} obj Optional instance to populate.
     * @return {module:model/TwoFactorAuthValidateRequest} The populated <code>TwoFactorAuthValidateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TwoFactorAuthValidateRequest();

            if (data.hasOwnProperty('secretKey')) {
                obj['secretKey'] = ApiClient.convertToType(data['secretKey'], 'String');
            }
            if (data.hasOwnProperty('twoFactorAccessCode')) {
                obj['twoFactorAccessCode'] = ApiClient.convertToType(data['twoFactorAccessCode'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Secret key of the 2FA request
 * @member {String} secretKey
 */
TwoFactorAuthValidateRequest.prototype['secretKey'] = undefined;

/**
 * 2FA Access code
 * @member {String} twoFactorAccessCode
 */
TwoFactorAuthValidateRequest.prototype['twoFactorAccessCode'] = undefined;






export default TwoFactorAuthValidateRequest;

