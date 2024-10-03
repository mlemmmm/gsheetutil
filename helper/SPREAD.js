/*
desc: Takes a CSV string, outputs it as a range
var: s
s desc: string to be split
s ex: "1, 2; 3, 4"
*/
=ARRAYFORMULA(LAMBDA(row,SPLIT(row,",",TRUE,FALSE))(TRANSPOSE(SPLIT(s,CHAR(10),TRUE,FALSE))))
