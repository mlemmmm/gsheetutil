/*
desc: Forces a lookup on any unsorted range, higher computational complexity than LOOKUP. Returns all values, not just the first.
var: search_key, search_range, result_range
*/
=TOCOL(BYROW(HSTACK(search_range,result_range),LAMBDA(row,IF(CHOOSECOLS(row,1)=search_key,CHOOSECOLS(row,2),))),1)
