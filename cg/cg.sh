#!/bin/bash

set -ex

node ./cg/cg.js

npm run fmt
