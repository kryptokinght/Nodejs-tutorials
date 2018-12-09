## Process
The Node process object provides a bridge between the Node Application and its run environment.
* `process.versions` - to see the version of each node dependency
* `process.env` - prints out a copy of the user environment
  
Process object is an instance of event emitter. This means we can attach user defined callbacks on process events. Some of them have been shown in this [file]().

### Process object is built-in bridge to the Operating System(OS).