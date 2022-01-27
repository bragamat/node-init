import {Command, Flags} from '@oclif/core'

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
      default: 'You should provide a valid git url',
      required: true,
    }),
  }

  async run(): Promise<void> {
    const { flags } = this.parse(NodeInit)
    if (flags.template) console.log(`--template is: ${flags.template}`)
  }
}
