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
import ModelDefault from './ModelDefault';
import ProductReducedAllOf from './ProductReducedAllOf';

/**
 * The ProductReduced model module.
 * @module model/ProductReduced
 * @version 1.0.0
 */
class ProductReduced {
    /**
     * Constructs a new <code>ProductReduced</code>.
     * @alias module:model/ProductReduced
     * @implements module:model/ModelDefault
     * @implements module:model/ProductReducedAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param name {String} The name of the product
     * @param productRefId {String} The reference to this product in your system. The reference identifier can not be changed after the product has been created
     */
    constructor(id, spaceName, created, name, productRefId) { 
        ModelDefault.initialize(this, id, spaceName, created);ProductReducedAllOf.initialize(this, name, productRefId);
        ProductReduced.initialize(this, id, spaceName, created, name, productRefId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, name, productRefId) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['name'] = name;
        obj['productRefId'] = productRefId;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['id'];
        obj['spaceName'];
        obj['created'];
        obj['name'];
        obj['productRefId'];

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

        obj["fields"]['id'];
        obj["fields"]['spaceName'];
        obj["fields"]['created'];
        obj["fields"]['name'];
        obj["fields"]['productRefId'];

        
        obj["requiredFields"]['id'];
        obj["requiredFields"]['spaceName'];
        obj["requiredFields"]['created'];
        obj["requiredFields"]['name'];
        obj["requiredFields"]['productRefId'];

        return obj;
    }

    /**
     * Constructs a <code>ProductReduced</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductReduced} obj Optional instance to populate.
     * @return {module:model/ProductReduced} The populated <code>ProductReduced</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductReduced();
            ModelDefault.constructFromObject(data, obj);
            ProductReducedAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('productRefId')) {
                obj['productRefId'] = ApiClient.convertToType(data['productRefId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
ProductReduced.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
ProductReduced.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
ProductReduced.prototype['created'] = undefined;

/**
 * The name of the product
 * @member {String} name
 */
ProductReduced.prototype['name'] = undefined;

/**
 * The reference to this product in your system. The reference identifier can not be changed after the product has been created
 * @member {String} productRefId
 */
ProductReduced.prototype['productRefId'] = undefined;


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
// Implement ProductReducedAllOf interface:
/**
 * The name of the product
 * @member {String} name
 */
ProductReducedAllOf.prototype['name'] = undefined;
/**
 * The reference to this product in your system. The reference identifier can not be changed after the product has been created
 * @member {String} productRefId
 */
ProductReducedAllOf.prototype['productRefId'] = undefined;




export default ProductReduced;

