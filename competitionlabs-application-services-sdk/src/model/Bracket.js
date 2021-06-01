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
import ContestReduced from './ContestReduced';

/**
 * The Bracket model module.
 * @module model/Bracket
 * @version 3.0.1
 */
class Bracket {
    /**
     * Constructs a new <code>Bracket</code>.
     * @alias module:model/Bracket
     * @param rounds {Number} Number of rounds to be played in a competition
     * @param contests {Array.<module:model/ContestReduced>} 
     */
    constructor(rounds, contests) { 
        
        Bracket.initialize(this, rounds, contests);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, rounds, contests) { 
        obj['rounds'] = rounds;
        obj['contests'] = contests;
    }

    /**
     * Constructs a <code>Bracket</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Bracket} obj Optional instance to populate.
     * @return {module:model/Bracket} The populated <code>Bracket</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Bracket();

            if (data.hasOwnProperty('rounds')) {
                obj['rounds'] = ApiClient.convertToType(data['rounds'], 'Number');
            }
            if (data.hasOwnProperty('contests')) {
                obj['contests'] = ApiClient.convertToType(data['contests'], [ContestReduced]);
            }
        }
        return obj;
    }


}

/**
 * Number of rounds to be played in a competition
 * @member {Number} rounds
 */
Bracket.prototype['rounds'] = undefined;

/**
 * @member {Array.<module:model/ContestReduced>} contests
 */
Bracket.prototype['contests'] = undefined;






export default Bracket;

