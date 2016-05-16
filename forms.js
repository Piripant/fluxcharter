// Generated by CoffeeScript 1.10.0
(function() {
  this.Vector = (function() {
    Vector.x = 0;

    Vector.y = 0;

    function Vector(x, y) {
      this.x = x;
      this.y = y;
    }

    Vector.prototype.magnitude = function() {
      return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    };

    Vector.prototype.normalize = function() {
      return this.divide_num(this.magnitude());
    };

    Vector.prototype.subtract = function(other) {
      var vec;
      vec = new Vector(0, 0);
      vec.x = this.x - other.x;
      vec.y = this.y - other.y;
      return vec;
    };

    Vector.prototype.add = function(other) {
      var vec;
      vec = new Vector(0, 0);
      vec.x = this.x - other.x;
      vec.y = this.y - other.y;
      return vec;
    };

    Vector.prototype.divide_num = function(other) {
      var vec;
      vec = new Vector(this.x, this.y);
      vec.x /= other;
      vec.y /= other;
      return vec;
    };

    Vector.prototype.mult_num = function(other) {
      var vec;
      vec = new Vector(this.x, this.y);
      vec.x *= other;
      vec.y *= other;
      return vec;
    };

    return Vector;

  })();

  this.Box = (function() {
    Box.name = '';

    Box.text = '42';

    Box.compText = '';

    Box.position = new Vector(0, 0);

    Box.type = '';

    Box.boxID = 0;

    Box.entryPoints = [];

    Box.prevBoxes = [];

    Box.yesBox = null;

    Box.noBox = null;

    function Box(type) {
      this.type = type;
      switch (type) {
        case cmdName:
          this.entryPoints = cmdEntries;
          break;
        case evalName:
          this.entryPoints = evalEntries;
          break;
        case interName:
          this.entryPoints = interEntries;
      }
      this.prevBoxes = [];
      this.yesBox = null;
      this.noBox = null;
    }

    Box.prototype.setText = function(text) {
      this.text = text;
      return this.compText = compile(text, this.type);
    };

    return Box;

  })();

  this.boxes = [];

  this.GetBoxByCoords = function(x, y) {
    var box, j, len, ref;
    ref = this.boxes;
    for (j = 0, len = ref.length; j < len; j++) {
      box = ref[j];
      if (box.position.x === x && box.position.y === y) {
        return box;
      }
    }
    return false;
  };

  this.DeleteBoxByID = function(id) {
    var i, j, ref;
    for (i = j = 0, ref = this.boxes.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
      if (this.boxes[i].boxID === id) {
        this.boxes.splice(i, 1);
        return;
      }
    }
  };

  this.GetByID = function(id) {
    var i, j, ref;
    for (i = j = 0, ref = this.boxes.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
      if (this.boxes[i].boxID === id) {
        return this.boxes[i];
      }
    }
  };

}).call(this);
