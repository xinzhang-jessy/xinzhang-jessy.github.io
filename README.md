# USAGE

```
npm install
gulp
```

# ADD NEW PROJECT

* put banner image to `/src/image/main-[project-name].jpg`
* put detail images to `/src/image/detail-[project-name]-0x.jpg` where `x` is the sequence number
* put thumbnail image to `/src/image/thumbnail-[project-name].jpg`
* add infomation at `src/pug/data/[project-name].json`
* add [project-name] to `gulpfile.js`
* add intro and [project-name] to `src/pug/includes/projects.pug`

and then

```
gulp img
gulp gen-detail
gulp
```
