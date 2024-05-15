# aws-sdk3-wds
It will reproduce the issue I am facing to serve the Lit apps that load AWS SDK V3. As the SDK v3 has some native nodejs dependencies such as crypto, stream, buffer, process, etc that breaks the WDS with the error report could not found those libraries.

# Solution didn't work
I was trying to map those libraries with browserify, except process and util, but had no luck. You can reproduce it through the branch "browserify".

# Run
To reproducing the issue, just run the demo

```
npm run start
```