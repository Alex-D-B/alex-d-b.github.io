#!/bin/bash

cd physics/ && wasm-pack build --target web && cd ../ && npm run dev