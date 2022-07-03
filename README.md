isTrav Headquarters
========

### node.js
```bash
# fetch deps
$ npm install

# development
$ npm run dev
```

### versioning
```bash
# check version
$ npm run id

# tag a vew version
$ npm version v0.0.14 --no-git-tag-version

# check everything in
$ git add . && git commit -m "version" && git push

# then check version tag in
$ git tag v0.0.14
$ git push --tags
```