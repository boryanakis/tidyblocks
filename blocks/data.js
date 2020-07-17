const Blockly = require('blockly/blockly_compressed')
require('blockly/javascript_compressed')

Blockly.defineBlocksWithJsonArray([
  // Colors
  {
    type: 'data_colors',
    message0: 'Colors dataset',
    nextStatement: null,
    style: 'data_block',
    hat: 'cap',
    tooltip: 'eleven colors'
  }
])

// Colors
Blockly.JavaScript['data_colors'] = (block) => {
  return `["@transform", "read", "colors.csv"]`
}
