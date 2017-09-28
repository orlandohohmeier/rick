#!/usr/bin/env bash

# This script is used to keep the container alive when started in background
if [[ -n $* ]]
then
  eval $*
else
  tail -f /dev/null
fi
