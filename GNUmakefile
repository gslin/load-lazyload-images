#
.PHONY:		build

#
VERSION!=	cat manifest.json | jq -r ".version"

#
build::
	zip -r ../load-lazyload-images-${VERSION}.zip . -x ".git/*"
