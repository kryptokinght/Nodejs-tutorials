## HTTP module in Node

To debug a node script using 'http' module, we can wrtie:
`NODE_DEBUG="http" node filename.js`

## req and res objects

Both `req` and `res` objects are stream objects. `req` is a *readable* stream object while `res` is a *writable* stream object.