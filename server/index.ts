import 'dotenv/config'

import express from 'express'
import { connect } from '@tidbcloud/serverless'

const db = connect({ url: process.env.TIDB_DATABASE })

const app = express()

app.use(express.json())

app.get('/gallery', async (req, res) => {
  const results = await db.execute('select * from test where id = ?', [1])

  console.log(results)

  return res.json({ message: 'Hello World!' })
})

app.listen(3333, () => console.log('Server: ok!'))
