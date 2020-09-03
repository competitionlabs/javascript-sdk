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
import Event from './Event';
import MetaExtended from './MetaExtended';

/**
 * The EventResponse model module.
 * @module model/EventResponse
 * @version 1.0.0
 */
class EventResponse {
    /**
     * Constructs a new <code>EventResponse</code>.
     * @alias module:model/EventResponse
     * @param meta {module:model/MetaExtended} 
     */
    constructor(meta) { 
        
        EventResponse.initialize(this, meta);
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

        obj['meta'];
        obj['results'];
        obj['errors'];

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

        obj["fields"]['meta'];
        obj["fields"]['results'];
        obj["fields"]['errors'];

        
        obj["requiredFields"]['meta'];

        return obj;
    }

    /**
     * Constructs a <code>EventResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventResponse} obj Optional instance to populate.
     * @return {module:model/EventResponse} The populated <code>EventResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventResponse();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = MetaExtended.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [Event]);
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
EventResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/Event>} results
 */
EventResponse.prototype['results'] = undefined;

/**
 * @member {Array.<module:model/Error>} errors
 */
EventResponse.prototype['errors'] = undefined;






export default EventResponse;

