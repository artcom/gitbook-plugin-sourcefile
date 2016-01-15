"use strict";

var fs = require("fs");
var path = require("path");

module.exports = {
  filters: {
    sourcefile: function(filename) {
      var dirname = path.dirname(this.ctx.file.path);
      var file = path.join(dirname, filename);
      var content = fs.readFileSync(file);
      var type = path.extname(filename).substring(1);
      return "```" + type + "\n" + content + "\n```";
    }
  }
};
