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
 * The CreateLanguageRequest model module.
 * @module model/CreateLanguageRequest
 * @version 1.0.4
 */
class CreateLanguageRequest {
    /**
     * Constructs a new <code>CreateLanguageRequest</code>.
     * @alias module:model/CreateLanguageRequest
     * @param languageKey {String} A reference to the pre created language keys
     */
    constructor(languageKey) { 
        
        CreateLanguageRequest.initialize(this, languageKey);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, languageKey) { 
        obj['languageKey'] = languageKey;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['languageKey'];
        obj['references'];

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

        obj["fields"]['languageKey'];
        obj["fields"]['references'];

        
        obj["requiredFields"]['languageKey'];

        return obj;
    }

    /**
     * Constructs a <code>CreateLanguageRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateLanguageRequest} obj Optional instance to populate.
     * @return {module:model/CreateLanguageRequest} The populated <code>CreateLanguageRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateLanguageRequest();

            if (data.hasOwnProperty('languageKey')) {
                obj['languageKey'] = ApiClient.convertToType(data['languageKey'], 'String');
            }
            if (data.hasOwnProperty('references')) {
                obj['references'] = ApiClient.convertToType(data['references'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * A reference to the pre created language keys
 * @member {String} languageKey
 */
CreateLanguageRequest.prototype['languageKey'] = undefined;

/**
 * A reference to the pre created language keys
 * @member {Array.<String>} references
 */
CreateLanguageRequest.prototype['references'] = undefined;






export default CreateLanguageRequest;

