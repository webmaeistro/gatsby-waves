// var slugs = require('github-slugger')()
var visit = require("unist-util-visit");
// var toString = require('hast-util-to-string')
// var is = require('hast-util-is-element')
// var has = require('hast-util-has-property')
const parser = require("./parser");

module.exports = slug;

function slug() {
  return transformer;
}

function transformer(tree, ...rest) {
  // console.log("");
  // console.log("");
  // console.log("******** PLUGIN *********");
  // console.log("");

  // console.log("rest", rest);
  // console.log("tree", tree);

  // console.log("");
  // console.log("*************************");
  // console.log("");
  // console.log("");

  visit(tree, "jsx", function(node, index, parent) {
    if (node.value.startsWith("<CodeWave")) {
      const siblings = parent.children;
      let i = index + 1;
      let pres = [];
      while (i < siblings.length && siblings[i].value !== "</CodeWave>") {
        const sibling = siblings[i];
        // console.log("->", siblings[i]);
        if (sibling.tagName === "pre") {
          pres.push(sibling);
        }
        i++;
      }
      const steps = [];
      pres.forEach((pre, i) => {
        console.log(pre.children[0]);
        const step = Object.assign({}, pre.children[0].properties, {
          code: pre.children[0].children[0].value,
          lang: "javascript" //TODO
        });
        console.log({ step });
        steps.push(step);
      });

      //TODO normalize lines
      //TODO some golfing
      const s = parser.parseSteps(steps, "javascript");

      node.value = node.value.replace(">", ` steps={${JSON.stringify(s)}}>`);
      // console.log(node);
    }
    // if (is(node, headings) && !has(node, 'id')) {
    //   node.properties.id = slugs.slug(toString(node))
    // }
  });
}
