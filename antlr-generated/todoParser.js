// Generated from todo.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var todoListener = require('./todoListener').todoListener;
var grammarFileName = "todo.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0011;\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0003\u0002\u0003\u0002\u0005",
    "\u0002\u0018\n\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006",
    ")\n\u0006\u0005\u0006+\n\u0006\u0005\u0006-\n\u0006\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0005\n9\n\n\u0003\n\u0002\u0002\u000b\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0012\u0002\u0003\u0003\u0002\b\r6\u0002\u0014\u0003\u0002\u0002",
    "\u0002\u0004\u0019\u0003\u0002\u0002\u0002\u0006\u001c\u0003\u0002\u0002",
    "\u0002\b\u001f\u0003\u0002\u0002\u0002\n,\u0003\u0002\u0002\u0002\f",
    ".\u0003\u0002\u0002\u0002\u000e0\u0003\u0002\u0002\u0002\u00102\u0003",
    "\u0002\u0002\u0002\u00128\u0003\u0002\u0002\u0002\u0014\u0015\u0005",
    "\u0004\u0003\u0002\u0015\u0017\u0005\u0006\u0004\u0002\u0016\u0018\u0005",
    "\b\u0005\u0002\u0017\u0016\u0003\u0002\u0002\u0002\u0017\u0018\u0003",
    "\u0002\u0002\u0002\u0018\u0003\u0003\u0002\u0002\u0002\u0019\u001a\u0007",
    "\u0003\u0002\u0002\u001a\u001b\u0005\n\u0006\u0002\u001b\u0005\u0003",
    "\u0002\u0002\u0002\u001c\u001d\u0007\u0004\u0002\u0002\u001d\u001e\u0005",
    "\f\u0007\u0002\u001e\u0007\u0003\u0002\u0002\u0002\u001f \u0007\u0005",
    "\u0002\u0002 !\u0005\u000e\b\u0002!\"\u0005\u0010\t\u0002\"#\u0005\u0012",
    "\n\u0002#\t\u0003\u0002\u0002\u0002$-\u0007\u0006\u0002\u0002%*\u0005",
    "\u000e\b\u0002&(\u0007\u0007\u0002\u0002\')\u0005\n\u0006\u0002(\'\u0003",
    "\u0002\u0002\u0002()\u0003\u0002\u0002\u0002)+\u0003\u0002\u0002\u0002",
    "*&\u0003\u0002\u0002\u0002*+\u0003\u0002\u0002\u0002+-\u0003\u0002\u0002",
    "\u0002,$\u0003\u0002\u0002\u0002,%\u0003\u0002\u0002\u0002-\u000b\u0003",
    "\u0002\u0002\u0002./\u0007\u0010\u0002\u0002/\r\u0003\u0002\u0002\u0002",
    "01\u0007\u0010\u0002\u00021\u000f\u0003\u0002\u0002\u000223\t\u0002",
    "\u0002\u00023\u0011\u0003\u0002\u0002\u000249\u0007\u000f\u0002\u0002",
    "56\u0007\u000e\u0002\u000267\u0007\u0010\u0002\u000279\u0007\u000e\u0002",
    "\u000284\u0003\u0002\u0002\u000285\u0003\u0002\u0002\u00029\u0013\u0003",
    "\u0002\u0002\u0002\u0007\u0017(*,8"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'select'", "'from'", "'where'", "'*'", "','", 
                     "'='", "'!='", "'>'", "'>='", "'<'", "'<='", "'\"'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, "INTEGER", "STR", "WS" ];

var ruleNames =  [ "r", "select_statement", "from_statement", "where_statement", 
                   "attribute_list", "table_name", "attribute_name", "operator", 
                   "constant" ];

function todoParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

todoParser.prototype = Object.create(antlr4.Parser.prototype);
todoParser.prototype.constructor = todoParser;

Object.defineProperty(todoParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

todoParser.EOF = antlr4.Token.EOF;
todoParser.T__0 = 1;
todoParser.T__1 = 2;
todoParser.T__2 = 3;
todoParser.T__3 = 4;
todoParser.T__4 = 5;
todoParser.T__5 = 6;
todoParser.T__6 = 7;
todoParser.T__7 = 8;
todoParser.T__8 = 9;
todoParser.T__9 = 10;
todoParser.T__10 = 11;
todoParser.T__11 = 12;
todoParser.INTEGER = 13;
todoParser.STR = 14;
todoParser.WS = 15;

todoParser.RULE_r = 0;
todoParser.RULE_select_statement = 1;
todoParser.RULE_from_statement = 2;
todoParser.RULE_where_statement = 3;
todoParser.RULE_attribute_list = 4;
todoParser.RULE_table_name = 5;
todoParser.RULE_attribute_name = 6;
todoParser.RULE_operator = 7;
todoParser.RULE_constant = 8;

function RContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = todoParser.RULE_r;
    return this;
}

RContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RContext.prototype.constructor = RContext;

RContext.prototype.select_statement = function() {
    return this.getTypedRuleContext(Select_statementContext,0);
};

RContext.prototype.from_statement = function() {
    return this.getTypedRuleContext(From_statementContext,0);
};

RContext.prototype.where_statement = function() {
    return this.getTypedRuleContext(Where_statementContext,0);
};

RContext.prototype.enterRule = function(listener) {
    if(listener instanceof todoListener ) {
        listener.enterR(this);
	}
};

RContext.prototype.exitRule = function(listener) {
    if(listener instanceof todoListener ) {
        listener.exitR(this);
	}
};




todoParser.RContext = RContext;

todoParser.prototype.r = function() {

    var localctx = new RContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, todoParser.RULE_r);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 18;
        this.select_statement();
        this.state = 19;
        this.from_statement();
        this.state = 21;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===todoParser.T__2) {
            this.state = 20;
            this.where_statement();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Select_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = todoParser.RULE_select_statement;
    return this;
}

Select_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Select_statementContext.prototype.constructor = Select_statementContext;

Select_statementContext.prototype.attribute_list = function() {
    return this.getTypedRuleContext(Attribute_listContext,0);
};

Select_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof todoListener ) {
        listener.enterSelect_statement(this);
	}
};

Select_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof todoListener ) {
        listener.exitSelect_statement(this);
	}
};




todoParser.Select_statementContext = Select_statementContext;

todoParser.prototype.select_statement = function() {

    var localctx = new Select_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, todoParser.RULE_select_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 23;
        this.match(todoParser.T__0);
        this.state = 24;
        this.attribute_list();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function From_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = todoParser.RULE_from_statement;
    return this;
}

From_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
From_statementContext.prototype.constructor = From_statementContext;

From_statementContext.prototype.table_name = function() {
    return this.getTypedRuleContext(Table_nameContext,0);
};

From_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof todoListener ) {
        listener.enterFrom_statement(this);
	}
};

From_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof todoListener ) {
        listener.exitFrom_statement(this);
	}
};




todoParser.From_statementContext = From_statementContext;

todoParser.prototype.from_statement = function() {

    var localctx = new From_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, todoParser.RULE_from_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 26;
        this.match(todoParser.T__1);
        this.state = 27;
        this.table_name();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Where_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = todoParser.RULE_where_statement;
    return this;
}

Where_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Where_statementContext.prototype.constructor = Where_statementContext;

Where_statementContext.prototype.attribute_name = function() {
    return this.getTypedRuleContext(Attribute_nameContext,0);
};

Where_statementContext.prototype.operator = function() {
    return this.getTypedRuleContext(OperatorContext,0);
};

Where_statementContext.prototype.constant = function() {
    return this.getTypedRuleContext(ConstantContext,0);
};

Where_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof todoListener ) {
        listener.enterWhere_statement(this);
	}
};

Where_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof todoListener ) {
        listener.exitWhere_statement(this);
	}
};




todoParser.Where_statementContext = Where_statementContext;

todoParser.prototype.where_statement = function() {

    var localctx = new Where_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, todoParser.RULE_where_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 29;
        this.match(todoParser.T__2);
        this.state = 30;
        this.attribute_name();
        this.state = 31;
        this.operator();
        this.state = 32;
        this.constant();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Attribute_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = todoParser.RULE_attribute_list;
    return this;
}

Attribute_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Attribute_listContext.prototype.constructor = Attribute_listContext;

Attribute_listContext.prototype.attribute_name = function() {
    return this.getTypedRuleContext(Attribute_nameContext,0);
};

Attribute_listContext.prototype.attribute_list = function() {
    return this.getTypedRuleContext(Attribute_listContext,0);
};

Attribute_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof todoListener ) {
        listener.enterAttribute_list(this);
	}
};

Attribute_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof todoListener ) {
        listener.exitAttribute_list(this);
	}
};




todoParser.Attribute_listContext = Attribute_listContext;

todoParser.prototype.attribute_list = function() {

    var localctx = new Attribute_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, todoParser.RULE_attribute_list);
    var _la = 0; // Token type
    try {
        this.state = 42;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case todoParser.T__3:
            this.enterOuterAlt(localctx, 1);
            this.state = 34;
            this.match(todoParser.T__3);
            break;
        case todoParser.STR:
            this.enterOuterAlt(localctx, 2);
            this.state = 35;
            this.attribute_name();
            this.state = 40;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===todoParser.T__4) {
                this.state = 36;
                this.match(todoParser.T__4);
                this.state = 38;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===todoParser.T__3 || _la===todoParser.STR) {
                    this.state = 37;
                    this.attribute_list();
                }

            }

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Table_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = todoParser.RULE_table_name;
    return this;
}

Table_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Table_nameContext.prototype.constructor = Table_nameContext;

Table_nameContext.prototype.STR = function() {
    return this.getToken(todoParser.STR, 0);
};

Table_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof todoListener ) {
        listener.enterTable_name(this);
	}
};

Table_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof todoListener ) {
        listener.exitTable_name(this);
	}
};




todoParser.Table_nameContext = Table_nameContext;

todoParser.prototype.table_name = function() {

    var localctx = new Table_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, todoParser.RULE_table_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 44;
        this.match(todoParser.STR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Attribute_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = todoParser.RULE_attribute_name;
    return this;
}

Attribute_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Attribute_nameContext.prototype.constructor = Attribute_nameContext;

Attribute_nameContext.prototype.STR = function() {
    return this.getToken(todoParser.STR, 0);
};

Attribute_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof todoListener ) {
        listener.enterAttribute_name(this);
	}
};

Attribute_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof todoListener ) {
        listener.exitAttribute_name(this);
	}
};




todoParser.Attribute_nameContext = Attribute_nameContext;

todoParser.prototype.attribute_name = function() {

    var localctx = new Attribute_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, todoParser.RULE_attribute_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 46;
        this.match(todoParser.STR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = todoParser.RULE_operator;
    return this;
}

OperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorContext.prototype.constructor = OperatorContext;


OperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof todoListener ) {
        listener.enterOperator(this);
	}
};

OperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof todoListener ) {
        listener.exitOperator(this);
	}
};




todoParser.OperatorContext = OperatorContext;

todoParser.prototype.operator = function() {

    var localctx = new OperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, todoParser.RULE_operator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 48;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << todoParser.T__5) | (1 << todoParser.T__6) | (1 << todoParser.T__7) | (1 << todoParser.T__8) | (1 << todoParser.T__9) | (1 << todoParser.T__10))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConstantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = todoParser.RULE_constant;
    return this;
}

ConstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstantContext.prototype.constructor = ConstantContext;

ConstantContext.prototype.INTEGER = function() {
    return this.getToken(todoParser.INTEGER, 0);
};

ConstantContext.prototype.STR = function() {
    return this.getToken(todoParser.STR, 0);
};

ConstantContext.prototype.enterRule = function(listener) {
    if(listener instanceof todoListener ) {
        listener.enterConstant(this);
	}
};

ConstantContext.prototype.exitRule = function(listener) {
    if(listener instanceof todoListener ) {
        listener.exitConstant(this);
	}
};




todoParser.ConstantContext = ConstantContext;

todoParser.prototype.constant = function() {

    var localctx = new ConstantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, todoParser.RULE_constant);
    try {
        this.state = 54;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case todoParser.INTEGER:
            this.enterOuterAlt(localctx, 1);
            this.state = 50;
            this.match(todoParser.INTEGER);
            break;
        case todoParser.T__11:
            this.enterOuterAlt(localctx, 2);
            this.state = 51;
            this.match(todoParser.T__11);
            this.state = 52;
            this.match(todoParser.STR);
            this.state = 53;
            this.match(todoParser.T__11);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.todoParser = todoParser;
