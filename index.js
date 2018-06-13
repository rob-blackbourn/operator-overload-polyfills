'babel-operator-overload-plugin disable'

if (!Object.prototype.__add__) {
  Object.prototype.__add__ = function (other) {
    return this + other
  }
}

if (!Object.prototype.__sub__) {
  Object.prototype.__sub__ = function (other) {
    return this - other
  }
}

if (!Object.prototype.__mul__) {
  Object.prototype.__mul__ = function (other) {
    return this * other
  }
}

if (!Object.prototype.__div__) {
  Object.prototype.__div__ = function (other) {
    return this / other
  }
}

if (!Object.prototype.__mod__) {
  Object.prototype.__mod__ = function (other) {
    return this % other
  }
}

if (!Object.prototype.__pow__) {
  Object.prototype.__pow__ = function (other) {
    return this ** other
  }
}

if (!Object.prototype.__incr__) {
  Object.prototype.__incr__ = function (other, prefix) {
    return prefix ? ++Number(this) : Number(this)++
  }
}

if (!Object.prototype.__decr__) {
  Object.prototype.__decr__ = function (other, prefix) {
    return prefix ? --Number(this) : Number(this)--
  }
}

if (!Object.prototype.__plus__) {
  Object.prototype.__plus__ = function () {
    return +this
  }
}

if (!Object.prototype.__neg__) {
  Object.prototype.__neg__ = function () {
    return -this
  }
}

if (!Object.prototype.__and__) {
  Object.prototype.__and__ = function (other) {
    return this & other
  }
}

if (!Object.prototype.__or__) {
  Object.prototype.__or__ = function (other) {
    return this | other
  }
}

if (!Object.prototype.__xor__) {
  Object.prototype.__xor__ = function (other) {
    return this ^ other
  }
}

if (!Object.prototype.__not__) {
  Object.prototype.__not__ = function () {
    return ~this
  }
}

if (!Object.prototype.__lshift__) {
  Object.prototype.__lshift__ = function (other) {
    return this << other
  }
}

if (!Object.prototype.__rshift__) {
  Object.prototype.__rshift__ = function (other, propogateRight) {
    return propogateRight ? this >> other : this >>> other
  }
}

if (!Object.prototype.__lt__) {
  Object.prototype.__lt__ = function (other) {
    return this < other
  }
}

if (!Object.prototype.__le__) {
  Object.prototype.__le__ = function (other) {
    return this <= other
  }
}

if (!Object.prototype.__eq__) {
  Object.prototype.__eq__ = function (other) {
    return this == other
  }
}

if (!Object.prototype.__ne__) {
  Object.prototype.__ne__ = function (other) {
    return this != other
  }
}

if (!Object.prototype.__gt__) {
  Object.prototype.__gt__ = function (other) {
    return this > other
  }
}

if (!Object.prototype.__ge__) {
  Object.prototype.__ge__ = function (other) {
    return this >= other
  }
}
