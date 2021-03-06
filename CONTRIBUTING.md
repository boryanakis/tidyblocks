---
permalink: /contributing/
title: "Contributing"
layout: plain
---

Contributions of all kinds are welcome.
By offering a contribution, you agree to abide by our [Code of Conduct](CONDUCT.md)
and that your work may be made available under the terms of [our license](LICENSE.md).

1.  To report a bug or request a new feature,
    please check the [list of open issues](https://github.com/tidyblocks/tidyblocks/issues)
    to see if it's already there,
    and if not,
    file as complete a description as you can.

1.  If you have made a fix or improvement,
    please create a [pull request](https://github.com/tidyblocks/tidyblocks/pulls).
    We will review these as quickly as we can (typically within 2-3 days).
    If you are tackling an issue that has already been opened,
    please name your branch `number-some-description`
    (e.g., `20-highlighting-active-block`)
    and put `Closes #N` (e.g., `Closes #20`)
    on a line by itself at the end of the PR's long description.

## Who Can Help and How

**Asha** is a high school mathematics teacher
whose students are using TidyBlocks to do their homework.
She can help by filing bug reports and feature suggestions,
and by providing questions and solutions for us to add to our gallery of examples.

**Lupita** is using TidyBlocks to learn basic data science.
She can help by translating blocks and block descriptions into Bantu
to make TidyBlocks more accessible to her fellow students.

**Raniere** is a data scientist
who uses R and Python in his work.
He can help by creating code generators for those languages
and by extending our visualization toolkit.

**Yatindra** is a web programmer who is fluent in JavaScript.
They can help by bringing our code and tooling into line with modern standards
and by adding features to make TidyBlocks easier to use.

## Getting Started

1.  Fork <https://github.com/tidyblocks/tidyblocks/> and clone it to your desktop.

1.  Go into the newly-created `tidyblocks` directory
    and run `npm run install` to install all of the packages we depend on.
    -   Note: do *not* install `blockly` itself from NPM: madness will ensue.
        We have included a *working* copy of the library in this repository.

1.  Run `npm run test` to re-run the unit tests in `tests/test_*.js`.
    These check that our blocks generate the expected code,
    and that the code does the right things.

1.  Please see [our blog](https://tidyblocks.tech/blog/)
    for explanations of how our code is organized.
    We will update these periodically.


## Actions

-   `npm run build`: regenerate `dist/tidyblocks.js`, then open `index.html` to see it.

-   `npm run watch`: regenerate and reload `dist/tidyblocks.js` whenever files change.

-   `npm run coverage`: run tests and report code coverage (open `coverage/index.html` to see results).

-   `npm run data`: create loadable JSON file for each CSV file in `./data`.
    (These files must be loaded in `./libs/gui.js` to be accessible.)

-   `npm run docs`: regenerate code documentation (open `docs/index.html` to view).

-   `npm run lint`: run code style check.

-   `npm run test`: run tests without code coverage (which is faster).

## Organization

TidyBlocks uses [Blockly](https://developers.google.com/blockly/) for the workspace,
[React](https://reactjs.org/) for the user interface,
and [Jekyll](https://jekyllrb.com/) + [GitHub Pages](https://pages.github.com/) for the website as a whole.

### Source

-   `libs/util.js`: low-level utilities.

-   `libs/dataframe.js`: operations on data tables.

-   `libs/expr.js`, `libs/value.js`, and `libs.op.js`: things that can go in table rows.
    These may be nested (i.e., `add(multiply(2, column('red')), column('blue'))`

-   `libs/summarize.js`: summarization operations (such as `sum` and `max`).

-   `libs/transform.js`: operations on entire tables.
    These use expressions, summarizers, and statistical tests.

-   `libs/pipeline.js`: pipelines made up of stages.

-   `libs/program.js`: programs made up of pipelines.

-   `libs/persist.js`: convert serialized JSON to programs, pipelines, stages, and expressions.

-   `libs/env.js`: the runtime environment for a program that stores datasets, records error messages, and so on.

-   `libs/gui.js` : handle interactions with the user.

-   `blocks/*.js`: implementation of blocks.
    -   `blocks/blocks.js`: block initialization and code generation entry point.
    -   `blocks/helper.js`: utilities.

### Other Files

-   `index.html`: interface page.

-   `index.js`: gathers blocks for bundling to create `tidyblocks.min.js` for testing.

-   `test/test_*.js`: unit tests.

-   `static/css/*.css` and `static/sass/*`: CSS for the user interface.

-   `_config.yml`: Jekyll configuration file.

-   `_data/*`, `_includes/*`, and `_layouts/*`: Jekyll site generation files.

-   `coverage/*`: code coverage data generated by `npm run coverage`.

-   `data/*`: built-in datasets.

-   `docs/*`: JSDoc code documentation generated by `npm run docs`.

-   `workspaces/*`: small programs to load for interactive testing.

-   `guide/*`: source for user guide (written with Jekyll).
