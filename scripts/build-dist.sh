#!/bin/bash
set -e

mkdir dist
yarn run format:check
yarn run lint
yarn run test:unit
yarn run test:e2e
yarn run build
