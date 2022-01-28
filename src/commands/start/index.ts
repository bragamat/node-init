import {Command, Flags} from '@oclif/core'
import {execSync} from 'node:child_process'

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
    const {flags} = await this.parse(NodeInit)
    console.log(`Cloning ${flags.template}`)
    execSync(`git clone ${flags.template}`, {
      stdio: [0, 1, 2],
    })
  }
}
