oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g node-init
$ node-init COMMAND
running command...
$ node-init (--version)
node-init/0.0.0 darwin-x64 node-v16.13.1
$ node-init --help [COMMAND]
USAGE
  $ node-init COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`node-init help [COMMAND]`](#node-init-help-command)
* [`node-init init`](#node-init-init)
* [`node-init plugins`](#node-init-plugins)
* [`node-init plugins:inspect PLUGIN...`](#node-init-pluginsinspect-plugin)
* [`node-init plugins:install PLUGIN...`](#node-init-pluginsinstall-plugin)
* [`node-init plugins:link PLUGIN`](#node-init-pluginslink-plugin)
* [`node-init plugins:uninstall PLUGIN...`](#node-init-pluginsuninstall-plugin)
* [`node-init plugins update`](#node-init-plugins-update)
* [`node-init start`](#node-init-start)

## `node-init help [COMMAND]`

Display help for node-init.

```
USAGE
  $ node-init help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for node-init.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `node-init init`

Initializes a node app based on git the template

```
USAGE
  $ node-init init -t <value>

FLAGS
  -t, --template=<value>  (required) Use the git template as default

DESCRIPTION
  Initializes a node app based on git the template

EXAMPLES
  $ node-init --template=https://github.com/bragamat/node-init
```

_See code: [dist/commands/init/index.ts](https://github.com/bragamat/node-init/blob/v0.0.0/dist/commands/init/index.ts)_

## `node-init plugins`

List installed plugins.

```
USAGE
  $ node-init plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ node-init plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `node-init plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ node-init plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ node-init plugins:inspect myplugin
```

## `node-init plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ node-init plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ node-init plugins add

EXAMPLES
  $ node-init plugins:install myplugin 

  $ node-init plugins:install https://github.com/someuser/someplugin

  $ node-init plugins:install someuser/someplugin
```

## `node-init plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ node-init plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ node-init plugins:link myplugin
```

## `node-init plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ node-init plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ node-init plugins unlink
  $ node-init plugins remove
```

## `node-init plugins update`

Update installed plugins.

```
USAGE
  $ node-init plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

## `node-init start`

Initializes a node app based on git the template

```
USAGE
  $ node-init start -t <value>

FLAGS
  -t, --template=<value>  (required) [default: You should provide a valid git url] Use the git template as default

DESCRIPTION
  Initializes a node app based on git the template

EXAMPLES
  $ node-init --template=https://github.com/bragamat/node-init
```

_See code: [dist/commands/start/index.ts](https://github.com/bragamat/node-init/blob/v0.0.0/dist/commands/start/index.ts)_
<!-- commandsstop -->
