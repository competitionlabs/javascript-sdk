/**
 * CompetitionLabs Admin Services
 * CompetitionLabs Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.1
 * Contact: support@competitionlabs.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ConnectionAllOf from './ConnectionAllOf';
import ModelDefault from './ModelDefault';

/**
 * The Connection model module.
 * @module model/Connection
 * @version 3.0.1
 */
class Connection {
    /**
     * Constructs a new <code>Connection</code>.
     * @alias module:model/Connection
     * @implements module:model/ModelDefault
     * @implements module:model/ConnectionAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param objectType {String} The type of consumer to create. Post body has to have either one of the following - KafkaConnection, SqsConnection or RabbitMqConnection model.
     */
    constructor(id, spaceName, created, objectType) { 
        ModelDefault.initialize(this, id, spaceName, created);ConnectionAllOf.initialize(this, objectType);
        Connection.initialize(this, id, spaceName, created, objectType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, objectType) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['objectType'] = objectType;
    }

    /**
     * Constructs a <code>Connection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Connection} obj Optional instance to populate.
     * @return {module:model/Connection} The populated <code>Connection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Connection();
            ModelDefault.constructFromObject(data, obj);
            ConnectionAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('spaceName')) {
                obj['spaceName'] = ApiClient.convertToType(data['spaceName'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('objectType')) {
                obj['objectType'] = ApiClient.convertToType(data['objectType'], 'String');
            }
            if (data.hasOwnProperty('transformerId')) {
                obj['transformerId'] = ApiClient.convertToType(data['transformerId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
Connection.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
Connection.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
Connection.prototype['created'] = undefined;

/**
 * The type of consumer to create. Post body has to have either one of the following - KafkaConnection, SqsConnection or RabbitMqConnection model.
 * @member {String} objectType
 */
Connection.prototype['objectType'] = undefined;

/**
 * The transformer to use, if empty the default system transformer will be used
 * @member {String} transformerId
 */
Connection.prototype['transformerId'] = undefined;


// Implement ModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
ModelDefault.prototype['id'] = undefined;
/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
ModelDefault.prototype['spaceName'] = undefined;
/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
ModelDefault.prototype['created'] = undefined;
// Implement ConnectionAllOf interface:
/**
 * The type of consumer to create. Post body has to have either one of the following - KafkaConnection, SqsConnection or RabbitMqConnection model.
 * @member {String} objectType
 */
ConnectionAllOf.prototype['objectType'] = undefined;
/**
 * The transformer to use, if empty the default system transformer will be used
 * @member {String} transformerId
 */
ConnectionAllOf.prototype['transformerId'] = undefined;




export default Connection;

