#!/bin/bash

config="flint.config.json"
hooks="node_modules/@capsulescodes/flint/hooks"
wrapper="$PWD/node_modules/@capsulescodes/flint/src/wrapper.sh"

if [[ -f $wrapper ]]; then source $wrapper; else command git "$@"; fi;
