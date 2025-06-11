/*
desc: Reverses rows reliably no matter the content, even with empty rows
var: range
range desc: Any range of cells
range ex: {1, 2; 3, 4}
*/
=ARRAY_CONSTRAIN(SORT(HSTACK(
                             range,
                             MAKEARRAY(ROWS(range),1,LAMBDA(row,col,row))),
                      COLUMNS(range)+1,FALSE),
                 ROWS(range),COLUMNS(range))
