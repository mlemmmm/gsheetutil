/*
desc: Converts a string of destinations like "Ertingen - Bad Saulgau - Herbertingen - Ertingen" to a list of destinations like {"Ertingen~Bad Saulgau"; "Bad Saulgau~Herbertingen"; "Herbertingen~Ertingen"}               
var: s
s desc: A string of destinations
s ex: "Ertingen - Bad Saulgau - Herbertingen - Ertingen"
*/
=BYROW(
       LAMBDA(destinations,
                     {ARRAY_CONSTRAIN(destinations,ROWS(destinations)-1,1),
                      REVERSEROWS(ARRAY_CONSTRAIN(REVERSEROWS(destinations),ROWS(destinations)-1,1))})
       (TRANSPOSE(ARRAYFORMULA(TRIM(SPLIT(s,"-",TRUE,TRUE))))),
       LAMBDA(row,JOIN("~",row)))
