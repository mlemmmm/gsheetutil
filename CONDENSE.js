/*
desc: Condenses a range or array into a CSV string
var: range
range desc: Any range that doesn't contain commas or newlines
range ex: {1, 2; 3, 4}
*/
=JOIN(CHAR(10),BYROW(range,LAMBDA(row,JOIN(",",row))))
