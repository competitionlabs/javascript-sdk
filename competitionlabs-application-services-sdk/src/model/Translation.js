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
import TranslatedField from './TranslatedField';

/**
 * The Translation model module.
 * @module model/Translation
 * @version 1.0.1
 */
class Translation {
    /**
     * Constructs a new <code>Translation</code>.
     * @alias module:model/Translation
     */
    constructor() { 
        
        Translation.initialize(this);
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['languageKey'] = null;
        obj['translatedFields'] = [new TranslatedField().model()];

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

        obj["fields"]['languageKey'] = { "type": 'String', "system": false };
        obj["fields"]['translatedFields'] = [new TranslatedField().modelMap()];

        

        return obj;
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Translation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Translation} obj Optional instance to populate.
     * @return {module:model/Translation} The populated <code>Translation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Translation();

            if (data.hasOwnProperty('languageKey')) {
                obj['languageKey'] = ApiClient.convertToType(data['languageKey'], 'String');
            }
            if (data.hasOwnProperty('translatedFields')) {
                obj['translatedFields'] = ApiClient.convertToType(data['translatedFields'], [TranslatedField]);
            }
        }
        return obj;
    }


}

/**
 * This is the field from language key
 * @member {String} languageKey
 */
Translation.prototype['languageKey'] = undefined;

/**
 * @member {Array.<module:model/TranslatedField>} translatedFields
 */
Translation.prototype['translatedFields'] = undefined;






export default Translation;
