#!/usr/bin/env node

import isMacOS from '.'

process.exit(Number(!isMacOS()))

export = undefined
