import { BARK_KEY_DEFAULT } from './constant';
import { migrateGarminCN2GarminGlobal } from './utils/garmin_cn';

const axios = require('axios');
const core = require('@actions/core');
const BARK_KEY = process.env.BARK_KEY ?? BARK_KEY_DEFAULT;

async function main() {
    try {
        await migrateGarminCN2GarminGlobal();
    } catch (e) {
        await axios.get(
            `https://api.day.app/${BARK_KEY}/Garmin CN -> Garmin Global 迁移数据运行失败了，快去检查！/${e.message}`);
        core.setFailed(e.message);
        throw new Error(e);
    }
}

main();




