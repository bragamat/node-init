import {Command, Flags} from '@oclif/core'
import {spawn} from 'node:child_process'

export default class NodeInit extends Command {
  static description = 'Initializes a node app based on git the template'

  static examples = [
    '$ node-init --template=https://github.com/bragamat/node-init',
  ]

  static flags = {
    template: Flags.string({
      char: 't',
      description: 'Use the git template as default',
      hidden: false,
      multiple: false,
      env: 'NODE_PATH',
      required: true,
    }),
  }

  async run(): Promise<void> {
    const {flags} = await this.parse(NodeInit)
    if (!flags.template) {
      console.log('You must pass a github url')
      return
    }

    spawn(`wget ${flags.template}/archive/refs/heads/main.zip`)
  }
}
