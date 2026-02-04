import type { UserConfig } from '@commitlint/types'
import { RuleConfigSeverity } from '@commitlint/types'

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      RuleConfigSeverity.Error,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'revert', 'ci', 'build'],
    ],
    'scope-max-length': [RuleConfigSeverity.Error, 'always', 20],
    'subject-case': [RuleConfigSeverity.Error, 'always', 'lower-case'],
    'subject-max-length': [RuleConfigSeverity.Error, 'always', 72],
  },
}

export default Configuration
