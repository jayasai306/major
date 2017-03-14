// Define a grammar called Hello
grammar todo;
r
	: select_statement from_statement where_statement?
	;
 
select_statement
	: 'select' attribute_list
	;
from_statement
	: 'from' table_name
	;
where_statement
	: 'where' attribute_name operator constant
	;
attribute_list
	: '*'
	|attribute_name(',' attribute_list?)?
	;
table_name
	: STR
	;
attribute_name
	: STR
	;
operator
	:'='|'!='|'>'|'>='|'<'|'<='
	;
constant
	: INTEGER
	|'"' STR '"'
	;
fragment DIGIT:'0'..'9';
INTEGER:DIGIT+ ;
fragment ST:  ('a'..'z'|'A'..'Z')+ ;
STR : ST|ST STR ;


WS        : [ \t\n\r]+ -> skip;