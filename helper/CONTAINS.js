/*
desc: Boolean whether an array or range contains a specified value.
var: range, value
*/
=OR(MAP(range,LAMBDA(cell,cell=value)))
