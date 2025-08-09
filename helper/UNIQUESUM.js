/*
desc: Sums up all values of unique identifiers
var: identifiers, values
identifiers desc: array of identifiers with duplicates
values desc: array of numbers
*/
=LET(uniques,UNIQUE(identifiers),
HSTACK(uniques,MAP(uniques,LAMBDA(cell,SUM(FILTER(values,identifiers=cell))))))
