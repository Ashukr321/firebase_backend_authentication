import { rateLimit } from 'express-rate-limit'

const limiter = rateLimit({
  windowMs: 15* 60 * 1000, // 15 minutes windnow size
  max: 100,
})
export default limiter;