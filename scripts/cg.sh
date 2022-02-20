#!/bin/bash

set -ex

node ./src/cg/cg.js

npm run fmt
