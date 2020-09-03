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
import UpdateLanguageRequestAllOf from './UpdateLanguageRequestAllOf';
import UpdateModelDefault from './UpdateModelDefault';

/**
 * The UpdateLanguageRequest model module.
 * @module model/UpdateLanguageRequest
 * @version 1.0.5
 */
class UpdateLanguageRequest {
    /**
     * Constructs a new <code>UpdateLanguageRequest</code>.
     * @alias module:model/UpdateLanguageRequest
     * @implements module:model/UpdateModelDefault
     * @implements module:model/UpdateLanguageRequestAllOf
     * @param id {String} A unique system generated identifier
     */
    constructor(id) { 
        UpdateModelDefault.initialize(this, id);UpdateLanguageRequestAllOf.initialize(this);
        UpdateLanguageRequest.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['id'] = null;
        obj['languageKey'] = null;
        obj['references'] = [null];

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

        obj["fields"]['id'] = { "type": 'String', "system": true };
        obj["fields"]['languageKey'] = { "type": 'String', "system": false };
        obj["fields"]['references'] = [{ "type": 'String', "system": false }];

        
        obj["requiredFields"]['id'] = { "type": 'String', "system": true };

        return obj;
    }

    /**
     * Constructs a <code>UpdateLanguageRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateLanguageRequest} obj Optional instance to populate.
     * @return {module:model/UpdateLanguageRequest} The populated <code>UpdateLanguageRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateLanguageRequest();
            UpdateModelDefault.constructFromObject(data, obj);
            UpdateLanguageRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
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
 * A unique system generated identifier
 * @member {String} id
 */
UpdateLanguageRequest.prototype['id'] = undefined;

/**
 * A reference to the pre created language keys
 * @member {String} languageKey
 */
UpdateLanguageRequest.prototype['languageKey'] = undefined;

/**
 * A reference to the pre created language keys
 * @member {Array.<String>} references
 */
UpdateLanguageRequest.prototype['references'] = undefined;


// Implement UpdateModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateModelDefault.prototype['id'] = undefined;
// Implement UpdateLanguageRequestAllOf interface:
/**
 * A reference to the pre created language keys
 * @member {String} languageKey
 */
UpdateLanguageRequestAllOf.prototype['languageKey'] = undefined;
/**
 * A reference to the pre created language keys
 * @member {Array.<String>} references
 */
UpdateLanguageRequestAllOf.prototype['references'] = undefined;




export default UpdateLanguageRequest;

