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
import Translation from './Translation';

/**
 * The CreateProductRequest model module.
 * @module model/CreateProductRequest
 * @version 1.0.4
 */
class CreateProductRequest {
    /**
     * Constructs a new <code>CreateProductRequest</code>.
     * @alias module:model/CreateProductRequest
     * @param name {String} The name of the product
     * @param productType {String} The categorisation of this product by its type
     * @param adjustmentFactor {Number} The multiplier to apply to source values received for this product events
     * @param productRefId {String} The reference to this product in your system. The reference identifier can not be changed after the product has been created
     */
    constructor(name, productType, adjustmentFactor, productRefId) { 
        
        CreateProductRequest.initialize(this, name, productType, adjustmentFactor, productRefId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, productType, adjustmentFactor, productRefId) { 
        obj['name'] = name;
        obj['productType'] = productType;
        obj['adjustmentFactor'] = adjustmentFactor;
        obj['productRefId'] = productRefId;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['name'];
        obj['productType'];
        obj['productTypeName'];
        obj['description'];
        obj['adjustmentFactor'];
        obj['productRefId'];
        obj['actionTypeAdjustmentFactors'];
        obj['productGroups'];
        obj['metadata'];
        obj['translations'];

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

        obj["fields"]['name'];
        obj["fields"]['productType'];
        obj["fields"]['productTypeName'];
        obj["fields"]['description'];
        obj["fields"]['adjustmentFactor'];
        obj["fields"]['productRefId'];
        obj["fields"]['actionTypeAdjustmentFactors'];
        obj["fields"]['productGroups'];
        obj["fields"]['metadata'];
        obj["fields"]['translations'];

        
        obj["requiredFields"]['name'];
        obj["requiredFields"]['productType'];
        obj["requiredFields"]['adjustmentFactor'];
        obj["requiredFields"]['productRefId'];

        return obj;
    }

    /**
     * Constructs a <code>CreateProductRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateProductRequest} obj Optional instance to populate.
     * @return {module:model/CreateProductRequest} The populated <code>CreateProductRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateProductRequest();

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
        }
        return obj;
    }


}

/**
 * The name of the product
 * @member {String} name
 */
CreateProductRequest.prototype['name'] = undefined;

/**
 * The categorisation of this product by its type
 * @member {String} productType
 */
CreateProductRequest.prototype['productType'] = undefined;

/**
 * The name of this product by its type
 * @member {String} productTypeName
 */
CreateProductRequest.prototype['productTypeName'] = undefined;

/**
 * The description of the product for your reference
 * @member {String} description
 */
CreateProductRequest.prototype['description'] = undefined;

/**
 * The multiplier to apply to source values received for this product events
 * @member {Number} adjustmentFactor
 */
CreateProductRequest.prototype['adjustmentFactor'] = undefined;

/**
 * The reference to this product in your system. The reference identifier can not be changed after the product has been created
 * @member {String} productRefId
 */
CreateProductRequest.prototype['productRefId'] = undefined;

/**
 * @member {Array.<module:model/ActionTypeAdjustmentFactor>} actionTypeAdjustmentFactors
 */
CreateProductRequest.prototype['actionTypeAdjustmentFactors'] = undefined;

/**
 * A list of Strings used to tag products with taxonomy terms
 * @member {Array.<String>} productGroups
 */
CreateProductRequest.prototype['productGroups'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
CreateProductRequest.prototype['metadata'] = undefined;

/**
 * @member {Array.<module:model/Translation>} translations
 */
CreateProductRequest.prototype['translations'] = undefined;






export default CreateProductRequest;

