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
 * The CreateConnectionRequest model module.
 * @module model/CreateConnectionRequest
 * @version 1.0.0
 */
class CreateConnectionRequest {
    /**
     * Constructs a new <code>CreateConnectionRequest</code>.
     * @alias module:model/CreateConnectionRequest
     * @param objectType {String} The type of consumer to create like Kafka, RabbitMQ or SQS
     */
    constructor(objectType) { 
        
        CreateConnectionRequest.initialize(this, objectType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objectType) { 
        obj['objectType'] = objectType;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['objectType'];

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

        obj["fields"]['objectType'];

        
        obj["requiredFields"]['objectType'];

        return obj;
    }

    /**
     * Constructs a <code>CreateConnectionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateConnectionRequest} obj Optional instance to populate.
     * @return {module:model/CreateConnectionRequest} The populated <code>CreateConnectionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateConnectionRequest();

            if (data.hasOwnProperty('objectType')) {
                obj['objectType'] = ApiClient.convertToType(data['objectType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The type of consumer to create like Kafka, RabbitMQ or SQS
 * @member {String} objectType
 */
CreateConnectionRequest.prototype['objectType'] = undefined;






export default CreateConnectionRequest;

