=IF(NOT(LEFT(str,8)="Ertingen"),"Error: Abfahrtsort nicht Ertingen",
 IF(NOT(RIGHT(str,8)="Ertingen"), "Error: Ankunftsort nicht Ertingen",
    
))


=MAP(DEST2DIR(Fahrten!B3),LAMBDA(direction,
BYROW(DB!F:G,LAMBDA(table_direction,IF(CHOOSECOLS(table_direction,1)=direction,CHOOSECOLS(table_direction,2),)
))))
