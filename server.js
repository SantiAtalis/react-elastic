import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'dist')))

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  console.log(path.join(__dirname, 'dist', 'index.html'))
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

const port = 4000
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
