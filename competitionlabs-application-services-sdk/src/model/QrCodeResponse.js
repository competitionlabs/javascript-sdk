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
import MetaExtended from './MetaExtended';
import TwoFactorAuthQrCode from './TwoFactorAuthQrCode';

/**
 * The QrCodeResponse model module.
 * @module model/QrCodeResponse
 * @version 1.0.5
 */
class QrCodeResponse {
    /**
     * Constructs a new <code>QrCodeResponse</code>.
     * @alias module:model/QrCodeResponse
     * @param meta {module:model/MetaExtended} 
     */
    constructor(meta) { 
        
        QrCodeResponse.initialize(this, meta);
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

        obj['meta'] = new MetaExtended().model();
        obj['results'] = [new TwoFactorAuthQrCode().model()];
        obj['errors'] = [new Error().model()];

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

        obj["fields"]['meta'] = new MetaExtended().modelMap();
        obj["fields"]['results'] = [new TwoFactorAuthQrCode().modelMap()];
        obj["fields"]['errors'] = [new Error().modelMap()];

        
        obj["requiredFields"]['meta'] = new MetaExtended().modelMap();

        return obj;
    }

    /**
     * Constructs a <code>QrCodeResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QrCodeResponse} obj Optional instance to populate.
     * @return {module:model/QrCodeResponse} The populated <code>QrCodeResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QrCodeResponse();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = MetaExtended.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [TwoFactorAuthQrCode]);
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
QrCodeResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/TwoFactorAuthQrCode>} results
 */
QrCodeResponse.prototype['results'] = undefined;

/**
 * @member {Array.<module:model/Error>} errors
 */
QrCodeResponse.prototype['errors'] = undefined;






export default QrCodeResponse;

