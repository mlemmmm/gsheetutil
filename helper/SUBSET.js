/*
desc: Needs CONTAINS. Returns true, when every value in range1 can also be found in range2
var: range1, range2
*/
=AND(MAP(range1,LAMBDA(cell,CONTAINS(range2,cell))))
