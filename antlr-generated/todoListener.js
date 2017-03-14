// Generated from todo.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by todoParser.
function todoListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

todoListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
todoListener.prototype.constructor = todoListener;

// Enter a parse tree produced by todoParser#r.
todoListener.prototype.enterR = function(ctx) {
};

// Exit a parse tree produced by todoParser#r.
todoListener.prototype.exitR = function(ctx) {
};


// Enter a parse tree produced by todoParser#select_statement.
todoListener.prototype.enterSelect_statement = function(ctx) {
};

// Exit a parse tree produced by todoParser#select_statement.
todoListener.prototype.exitSelect_statement = function(ctx) {
};


// Enter a parse tree produced by todoParser#from_statement.
todoListener.prototype.enterFrom_statement = function(ctx) {
};

// Exit a parse tree produced by todoParser#from_statement.
todoListener.prototype.exitFrom_statement = function(ctx) {
};


// Enter a parse tree produced by todoParser#where_statement.
todoListener.prototype.enterWhere_statement = function(ctx) {
};

// Exit a parse tree produced by todoParser#where_statement.
todoListener.prototype.exitWhere_statement = function(ctx) {
};


// Enter a parse tree produced by todoParser#attribute_list.
todoListener.prototype.enterAttribute_list = function(ctx) {
};

// Exit a parse tree produced by todoParser#attribute_list.
todoListener.prototype.exitAttribute_list = function(ctx) {
};


// Enter a parse tree produced by todoParser#table_name.
todoListener.prototype.enterTable_name = function(ctx) {
};

// Exit a parse tree produced by todoParser#table_name.
todoListener.prototype.exitTable_name = function(ctx) {
};


// Enter a parse tree produced by todoParser#attribute_name.
todoListener.prototype.enterAttribute_name = function(ctx) {
};

// Exit a parse tree produced by todoParser#attribute_name.
todoListener.prototype.exitAttribute_name = function(ctx) {
};


// Enter a parse tree produced by todoParser#operator.
todoListener.prototype.enterOperator = function(ctx) {
};

// Exit a parse tree produced by todoParser#operator.
todoListener.prototype.exitOperator = function(ctx) {
};


// Enter a parse tree produced by todoParser#constant.
todoListener.prototype.enterConstant = function(ctx) {
};

// Exit a parse tree produced by todoParser#constant.
todoListener.prototype.exitConstant = function(ctx) {
};



exports.todoListener = todoListener;