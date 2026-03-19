import { env } from './env/index.js'
import { app } from './app.js'

app
  .listen({
    port: env.PORT,
  })
  .then(async () => {
    console.log('Server Running!')
  })
