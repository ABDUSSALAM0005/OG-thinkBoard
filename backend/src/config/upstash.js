import { Redis } from '@upstash/redis'
import { Ratelimit } from '@upstash/ratelimit'

import dotenv from "dotenv";

dotenv.config();

const redis = Redis.fromEnv()
//create a ratelimiter  that allows 10 request per 20 seconds
const ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(100,"60 s"),
});

export default ratelimit  