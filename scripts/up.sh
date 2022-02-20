#!/bin/bash

echo "Updating from source..."

set -ex

git checkout main
git fetch --all
git pull
