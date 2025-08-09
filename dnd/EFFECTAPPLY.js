/*
desc: Returns {multiplier, effect;...} array
var: effect, amount
effect desc: The effect string of a module
effect ex: "+50% Energy usage\n-10% Input usage"
amount desc: how many of a module there are

// TODO: 1st col aside, all other cols join with " ", then hstack. Use let(splitresult,...) to compact it  

*/

=LET(effectarray, ARRAYFORMULA(SPLIT(SPREAD(effect)," ",FALSE)),
 LET(multiplier, MAP(CHOOSECOLS(effectarray,1),LAMBDA(percent,1+DROPRIGHT(DROPLEFT(percent,1),1)/100)),
     description, CHOOSECOLS(effectarray,2),
    
    )
)
