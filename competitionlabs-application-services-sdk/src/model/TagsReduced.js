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
import ModelDefault from './ModelDefault';
import TagsReducedAllOf from './TagsReducedAllOf';

/**
 * The TagsReduced model module.
 * @module model/TagsReduced
 * @version 3.0.1
 */
class TagsReduced {
    /**
     * Constructs a new <code>TagsReduced</code>.
     * @alias module:model/TagsReduced
     * @implements module:model/ModelDefault
     * @implements module:model/TagsReducedAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param key {String} A unique key that represents a tag
     */
    constructor(id, spaceName, created, key) { 
        ModelDefault.initialize(this, id, spaceName, created);TagsReducedAllOf.initialize(this, key);
        TagsReduced.initialize(this, id, spaceName, created, key);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, key) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['key'] = key;
    }

    /**
     * Constructs a <code>TagsReduced</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TagsReduced} obj Optional instance to populate.
     * @return {module:model/TagsReduced} The populated <code>TagsReduced</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TagsReduced();
            ModelDefault.constructFromObject(data, obj);
            TagsReducedAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('spaceName')) {
                obj['spaceName'] = ApiClient.convertToType(data['spaceName'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
TagsReduced.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
TagsReduced.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
TagsReduced.prototype['created'] = undefined;

/**
 * The name of the tag
 * @member {String} name
 */
TagsReduced.prototype['name'] = undefined;

/**
 * A unique key that represents a tag
 * @member {String} key
 */
TagsReduced.prototype['key'] = undefined;


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
// Implement TagsReducedAllOf interface:
/**
 * The name of the tag
 * @member {String} name
 */
TagsReducedAllOf.prototype['name'] = undefined;
/**
 * A unique key that represents a tag
 * @member {String} key
 */
TagsReducedAllOf.prototype['key'] = undefined;




export default TagsReduced;

