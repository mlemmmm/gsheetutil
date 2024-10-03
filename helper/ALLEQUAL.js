/*
desc: Boolean if all cells in array or range are equal to the second argument.
var: range, value
*/
=AND(MAP(range,LAMBDA(cell,cell=value)))
