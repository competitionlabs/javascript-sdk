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
import ActionTypeAdjustmentFactor from './ActionTypeAdjustmentFactor';
import Metadata from './Metadata';
import ModelDefault from './ModelDefault';
import ProductAllOf from './ProductAllOf';
import Translation from './Translation';

/**
 * The Product model module.
 * @module model/Product
 * @version 1.0.0
 */
class Product {
    /**
     * Constructs a new <code>Product</code>.
     * @alias module:model/Product
     * @implements module:model/ModelDefault
     * @implements module:model/ProductAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param name {String} The name of the product
     * @param productType {String} The categorisation of this product by its type
     * @param adjustmentFactor {Number} The multiplier to apply to source values received for this product events
     * @param productRefId {String} The reference to this product in your system. The reference identifier can not be changed after the product has been created
     */
    constructor(id, spaceName, created, name, productType, adjustmentFactor, productRefId) { 
        ModelDefault.initialize(this, id, spaceName, created);ProductAllOf.initialize(this, name, productType, adjustmentFactor, productRefId);
        Product.initialize(this, id, spaceName, created, name, productType, adjustmentFactor, productRefId);
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['id'] = null;
        obj['spaceName'] = null;
        obj['created'] = null;
        obj['name'] = null;
        obj['productType'] = null;
        obj['productTypeName'] = null;
        obj['description'] = null;
        obj['adjustmentFactor'] = null;
        obj['productRefId'] = null;
        obj['actionTypeAdjustmentFactors'] = [new ActionTypeAdjustmentFactor().model()];
        obj['productGroups'] = [null];
        obj['metadata'] = [new Metadata().model()];
        obj['translations'] = [new Translation().model()];
        obj['translatableFields'] = [null];

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

        obj["fields"]['id'] = { "type": 'String' };
        obj["fields"]['spaceName'] = { "type": 'String' };
        obj["fields"]['created'] = { "type": 'Date' };
        obj["fields"]['name'] = { "type": 'String' };
        obj["fields"]['productType'] = { "type": 'String' };
        obj["fields"]['productTypeName'] = { "type": 'String' };
        obj["fields"]['description'] = { "type": 'String' };
        obj["fields"]['adjustmentFactor'] = { "type": 'Number' };
        obj["fields"]['productRefId'] = { "type": 'String' };
        obj["fields"]['actionTypeAdjustmentFactors'] = [new ActionTypeAdjustmentFactor().modelMap()];
        obj["fields"]['productGroups'] = [{ "type": 'String' }];
        obj["fields"]['metadata'] = [new Metadata().modelMap()];
        obj["fields"]['translations'] = [new Translation().modelMap()];
        obj["fields"]['translatableFields'] = [{ "type": 'String' }];

        
        obj["requiredFields"]['id'] = { "type": 'String' };
        obj["requiredFields"]['spaceName'] = { "type": 'String' };
        obj["requiredFields"]['created'] = { "type": 'Date' };
        obj["requiredFields"]['name'] = { "type": 'String' };
        obj["requiredFields"]['productType'] = { "type": 'String' };
        obj["requiredFields"]['adjustmentFactor'] = { "type": 'Number' };
        obj["requiredFields"]['productRefId'] = { "type": 'String' };

        return obj;
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, name, productType, adjustmentFactor, productRefId) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['name'] = name;
        obj['productType'] = productType;
        obj['adjustmentFactor'] = adjustmentFactor;
        obj['productRefId'] = productRefId;
    }

    /**
     * Constructs a <code>Product</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Product} obj Optional instance to populate.
     * @return {module:model/Product} The populated <code>Product</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Product();
            ModelDefault.constructFromObject(data, obj);
            ProductAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('productType')) {
                obj['productType'] = ApiClient.convertToType(data['productType'], 'String');
            }
            if (data.hasOwnProperty('productTypeName')) {
                obj['productTypeName'] = ApiClient.convertToType(data['productTypeName'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('adjustmentFactor')) {
                obj['adjustmentFactor'] = ApiClient.convertToType(data['adjustmentFactor'], 'Number');
            }
            if (data.hasOwnProperty('productRefId')) {
                obj['productRefId'] = ApiClient.convertToType(data['productRefId'], 'String');
            }
            if (data.hasOwnProperty('actionTypeAdjustmentFactors')) {
                obj['actionTypeAdjustmentFactors'] = ApiClient.convertToType(data['actionTypeAdjustmentFactors'], [ActionTypeAdjustmentFactor]);
            }
            if (data.hasOwnProperty('productGroups')) {
                obj['productGroups'] = ApiClient.convertToType(data['productGroups'], ['String']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], [Metadata]);
            }
            if (data.hasOwnProperty('translations')) {
                obj['translations'] = ApiClient.convertToType(data['translations'], [Translation]);
            }
            if (data.hasOwnProperty('translatableFields')) {
                obj['translatableFields'] = ApiClient.convertToType(data['translatableFields'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
Product.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
Product.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
Product.prototype['created'] = undefined;

/**
 * The name of the product
 * @member {String} name
 */
Product.prototype['name'] = undefined;

/**
 * The categorisation of this product by its type
 * @member {String} productType
 */
Product.prototype['productType'] = undefined;

/**
 * The name of this product by its type
 * @member {String} productTypeName
 */
Product.prototype['productTypeName'] = undefined;

/**
 * The description of the product for your reference
 * @member {String} description
 */
Product.prototype['description'] = undefined;

/**
 * The multiplier to apply to source values received for this product events
 * @member {Number} adjustmentFactor
 */
Product.prototype['adjustmentFactor'] = undefined;

/**
 * The reference to this product in your system. The reference identifier can not be changed after the product has been created
 * @member {String} productRefId
 */
Product.prototype['productRefId'] = undefined;

/**
 * @member {Array.<module:model/ActionTypeAdjustmentFactor>} actionTypeAdjustmentFactors
 */
Product.prototype['actionTypeAdjustmentFactors'] = undefined;

/**
 * A list of Strings used to tag products with taxonomy terms
 * @member {Array.<String>} productGroups
 */
Product.prototype['productGroups'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
Product.prototype['metadata'] = undefined;

/**
 * @member {Array.<module:model/Translation>} translations
 */
Product.prototype['translations'] = undefined;

/**
 * Rewards translatable fields
 * @member {Array.<String>} translatableFields
 */
Product.prototype['translatableFields'] = undefined;


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
// Implement ProductAllOf interface:
/**
 * The name of the product
 * @member {String} name
 */
ProductAllOf.prototype['name'] = undefined;
/**
 * The categorisation of this product by its type
 * @member {String} productType
 */
ProductAllOf.prototype['productType'] = undefined;
/**
 * The name of this product by its type
 * @member {String} productTypeName
 */
ProductAllOf.prototype['productTypeName'] = undefined;
/**
 * The description of the product for your reference
 * @member {String} description
 */
ProductAllOf.prototype['description'] = undefined;
/**
 * The multiplier to apply to source values received for this product events
 * @member {Number} adjustmentFactor
 */
ProductAllOf.prototype['adjustmentFactor'] = undefined;
/**
 * The reference to this product in your system. The reference identifier can not be changed after the product has been created
 * @member {String} productRefId
 */
ProductAllOf.prototype['productRefId'] = undefined;
/**
 * @member {Array.<module:model/ActionTypeAdjustmentFactor>} actionTypeAdjustmentFactors
 */
ProductAllOf.prototype['actionTypeAdjustmentFactors'] = undefined;
/**
 * A list of Strings used to tag products with taxonomy terms
 * @member {Array.<String>} productGroups
 */
ProductAllOf.prototype['productGroups'] = undefined;
/**
 * @member {Array.<module:model/Metadata>} metadata
 */
ProductAllOf.prototype['metadata'] = undefined;
/**
 * @member {Array.<module:model/Translation>} translations
 */
ProductAllOf.prototype['translations'] = undefined;
/**
 * Rewards translatable fields
 * @member {Array.<String>} translatableFields
 */
ProductAllOf.prototype['translatableFields'] = undefined;




export default Product;

