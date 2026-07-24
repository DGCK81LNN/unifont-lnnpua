#!/usr/bin/sh
if [ ! -n "$1" ]; then
  echo "Usage: $0 VERSION"
  exit 1
fi

mkdir -p dist &&
hex2otf hex=LNNPUA.hex out="dist/UnifontLNNPUA.otf" format=cff \
  0="(C) 2026 DGCK81LNN." \
  1="Unifont LNNPUA" \
  3="UnifontLNNPUA-$1.otf" \
  4="Unifont LNNPUA" \
  5="Version $1" \
  6="UnifontLNNPUA" \
  11="https://github.com/DGCK81LNN/unifont-lnnpua" \
  13="Licensed under the GNU General Public License, version 3 or later with the GNU font embedding exception." \
  14="https://github.com/DGCK81LNN/unifont-lnnpua#license" &&
fonttools ttLib.woff2 compress "dist/UnifontLNNPUA.otf"
exit $?
