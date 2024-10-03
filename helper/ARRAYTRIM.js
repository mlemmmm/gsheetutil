/*
desc:
Needs EMPTIFY. Trims blank or empty string cells of a range. Will return wonky results if spaces in the middle are left empty irregularly.
For example, {1, 2, 3; 4, , 6; 7, 8, 9} will become {1, 2, 3; 4, 8, 6; 7, 9, } as columns are trimmed first (8 goes up), then rows (9 goes below where 8 was).

Best used for compacting data that was stored with a spacer row in between.
var: range
*/
=BYROW(BYCOL(range,LAMBDA(col,TOCOL(ARRAYFORMULA(EMPTIFY(col)),1))),LAMBDA(row,TOROW(row,1)))
