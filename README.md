# is-macos

[![npm version](http://img.shields.io/npm/v/is-macos.svg?style=flat)](https://npmjs.org/package/is-macos)

Small tool that gives exit code 0 if it's running on macOS
```bash
is-macos && echo "It's macOS"
```

Want to run a command only if it's macOS?
```bash
commandA && (is-macos && commandB || true) && commandC
```
On macOS `commandA`, `commandB`, and `commandC` will run. On other operating systems only `commandA` and `commandC` will run.
