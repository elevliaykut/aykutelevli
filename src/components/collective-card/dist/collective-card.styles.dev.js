"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Snippet = exports.TechEight = exports.TechSeven = exports.TechSix = exports.TechFive = exports.TechFour = exports.TechThree = exports.TechTwo = exports.TechOne = exports.StackList = exports.Date = exports.ItemList = exports.SubTitle = exports.BoldText = exports.Item = exports.PersonalList = exports.PersonalityInfo = exports.ImageContainer = exports.SocialIcons = exports.Summary = exports.TopTitle = exports.CollectiveTitle = exports.MainContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n    font-weight: 600;\n    font-size: 24px;\n    line-height: 1.5em;\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n    border-bottom: 3px solid #fd9426;\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n    border-bottom: 3px solid #d24939;\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n    border-bottom: 3px solid #ff9900;\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n    border-bottom: 3px solid #83ba63;\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n    border-bottom: 3px solid #306998;\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n    border-bottom: 3px solid #474a8a;\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n    border-bottom: 3px solid #0db7ed;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n    border-bottom: 3px solid #f0db4f;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n    margin-top: 5px;\n    list-style:square inside;\n    padding-left:0;\n    margin-left:0;\n    line-height:1.8;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    color:'#888';\n    font-size:16px;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    margin-top: 5px;\n    list-style: none;\n    padding-left: 0;\n    margin-left: 0;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    font-weight:bold;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    font-weight:bold;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    list-style:none;\n    padding-left:0;\n    line-height:1.2;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    font-family: Muli,sans-serif;\n    line-height: 1.7;\n    letter-spacing: -.03rem;\n    color: #222;\n    box-sizing: inherit;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    width: 1000px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    display:flex;\n    img {\n        width: 30px;\n        margin-right:9px;\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    font-size: 38px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    font-weight: bold;\n    font-size: 20px;\n    margin-bottom: 20px;\n    margin-top: 40px;\n    padding: 10px 20px;\n    border-bottom: 4px solid #413f3f;\n    width:100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    margin-bottom: -60px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MainContainer = _styledComponents["default"].div(_templateObject());

exports.MainContainer = MainContainer;

var CollectiveTitle = _styledComponents["default"].div(_templateObject2());

exports.CollectiveTitle = CollectiveTitle;

var TopTitle = _styledComponents["default"].h1(_templateObject3());

exports.TopTitle = TopTitle;

var Summary = _styledComponents["default"].p(_templateObject4());

exports.Summary = Summary;

var SocialIcons = _styledComponents["default"].div(_templateObject5());

exports.SocialIcons = SocialIcons;

var ImageContainer = _styledComponents["default"].div(_templateObject6());

exports.ImageContainer = ImageContainer;

var PersonalityInfo = _styledComponents["default"].p(_templateObject7());

exports.PersonalityInfo = PersonalityInfo;

var PersonalList = _styledComponents["default"].ul(_templateObject8());

exports.PersonalList = PersonalList;

var Item = _styledComponents["default"].li(_templateObject9());

exports.Item = Item;

var BoldText = _styledComponents["default"].span(_templateObject10());

exports.BoldText = BoldText;

var SubTitle = _styledComponents["default"].span(_templateObject11());

exports.SubTitle = SubTitle;

var ItemList = _styledComponents["default"].ul(_templateObject12());

exports.ItemList = ItemList;

var Date = _styledComponents["default"].em(_templateObject13());

exports.Date = Date;

var StackList = _styledComponents["default"].ul(_templateObject14());

exports.StackList = StackList;

var TechOne = _styledComponents["default"].em(_templateObject15());

exports.TechOne = TechOne;

var TechTwo = _styledComponents["default"].em(_templateObject16());

exports.TechTwo = TechTwo;

var TechThree = _styledComponents["default"].em(_templateObject17());

exports.TechThree = TechThree;

var TechFour = _styledComponents["default"].em(_templateObject18());

exports.TechFour = TechFour;

var TechFive = _styledComponents["default"].em(_templateObject19());

exports.TechFive = TechFive;

var TechSix = _styledComponents["default"].em(_templateObject20());

exports.TechSix = TechSix;

var TechSeven = _styledComponents["default"].em(_templateObject21());

exports.TechSeven = TechSeven;

var TechEight = _styledComponents["default"].em(_templateObject22());

exports.TechEight = TechEight;

var Snippet = _styledComponents["default"].h3(_templateObject23());

exports.Snippet = Snippet;