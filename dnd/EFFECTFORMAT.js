/*
desc: Returns {multiplier, effect;...} array
var: effect, amount
effect desc: The effect string of a module
effect ex: "+50% Energy usage\n-10% Input usage"
amount desc: how many of a module there are
*/

=ARRAYFORMULA(ARRAYTRIM(IFERROR(LET(effectarray, ARRAYFORMULA(SPLIT(REGEXREPLACE(SPREAD(effect),"% ","%"),"%",FALSE)),
 LET(multiplier, MAP(CHOOSECOLS(effectarray,1),LAMBDA(percent,IF(LEFT(percent,1)="+",1+DROPLEFT(percent,1)/100,1+percent/100))),
     description, CHOOSECOLS(effectarray,2),
     HSTACK(ARRAYFORMULA(multiplier^amount), description)
    )
),)))
