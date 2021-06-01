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
import Leaderboard from './Leaderboard';

/**
 * The LeaderboardResponseByContest model module.
 * @module model/LeaderboardResponseByContest
 * @version 3.0.1
 */
class LeaderboardResponseByContest {
    /**
     * Constructs a new <code>LeaderboardResponseByContest</code>.
     * @alias module:model/LeaderboardResponseByContest
     * @param contestId {String} The id of the contest
     * @param name {String} A name for the Contest. Can be translated
     * @param round {Number} To what round does the contest belong
     */
    constructor(contestId, name, round) { 
        
        LeaderboardResponseByContest.initialize(this, contestId, name, round);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, contestId, name, round) { 
        obj['contestId'] = contestId;
        obj['name'] = name;
        obj['round'] = round;
    }

    /**
     * Constructs a <code>LeaderboardResponseByContest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LeaderboardResponseByContest} obj Optional instance to populate.
     * @return {module:model/LeaderboardResponseByContest} The populated <code>LeaderboardResponseByContest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LeaderboardResponseByContest();

            if (data.hasOwnProperty('contestId')) {
                obj['contestId'] = ApiClient.convertToType(data['contestId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('round')) {
                obj['round'] = ApiClient.convertToType(data['round'], 'Number');
            }
            if (data.hasOwnProperty('leaderboard')) {
                obj['leaderboard'] = ApiClient.convertToType(data['leaderboard'], [Leaderboard]);
            }
        }
        return obj;
    }


}

/**
 * The id of the contest
 * @member {String} contestId
 */
LeaderboardResponseByContest.prototype['contestId'] = undefined;

/**
 * A name for the Contest. Can be translated
 * @member {String} name
 */
LeaderboardResponseByContest.prototype['name'] = undefined;

/**
 * To what round does the contest belong
 * @member {Number} round
 */
LeaderboardResponseByContest.prototype['round'] = undefined;

/**
 * @member {Array.<module:model/Leaderboard>} leaderboard
 */
LeaderboardResponseByContest.prototype['leaderboard'] = undefined;






export default LeaderboardResponseByContest;

