=ARRAY_CONSTRAIN(SORT(HSTACK(
                             range,
                             MAKEARRAY(ROWS(range),1,LAMBDA(row,col,row))),
                      COLUMNS(range)+1,FALSE),
                 ROWS(range),COLUMNS(range))
