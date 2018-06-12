if (!Object.prototype.__add__) {
    Object.prototype.__add__ = function (other) {
      return this + other;
    };
  }
  
  if (!Object.prototype.__sub__) {
    Object.prototype.__sub__ = function (other) {
      return this - other;
    };
  }
  
  if (!Object.prototype.__mul__) {
    Object.prototype.__mul__ = function (other) {
      return this * other;
    };
  }
  
  if (!Object.prototype.__div__) {
    Object.prototype.__div__ = function (other) {
      return this / other;
    };
  }
  
  if (!Object.prototype.__mod__) {
    Object.prototype.__mod__ = function (other) {
      return this % other;
    };
  }