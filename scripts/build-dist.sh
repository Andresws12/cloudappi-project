#!/bin/bash
set -e

mkdir dist
yarn run format:check
yarn run lint
yarn run test:unit
yarn run build
