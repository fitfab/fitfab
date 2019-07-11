# fitfab

Packages by miguel julio

## Lerna useful commands

- `lerna run test` runs test accross all packages.
  - _options_: `--scope={@fitfab/ui,@fitfab/utils}`
- `lerna version` version your code.

  - _options_: `--conventional-comits --yes` will create a changelog and `--yes` it will skip the prompt to confirm publishing. By default, **lerna version** will push the committed and tagged changes to the repository.
  - **NOTE** you will run this `CMD` after committing your code change. [more info on lerna version](https://github.com/lerna/lerna/tree/master/commands/version#readme)

- `lerna diff` will display changes in all packages or single package since the last release.
