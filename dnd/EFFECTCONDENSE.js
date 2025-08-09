/*
desc: Takes {multiplier,effect;...} array with multiple of unique same-named effects, returns {multiplier, effect;...} array, with all same-named effects multiplied.
var: array
array desc: An array of effects in the form of {muliplier, effect} pairs, or an array of condensed arrays
*/
=LET(effectarray,ARRAYTRIM(ARRAYFORMULA(IFERROR(SPREAD(CONDENSE(array)),))),
 LET(multipliers,CHOOSECOLS(effectarray,1),effects,CHOOSECOLS(effectarray,2),
 LET(uniques,UNIQUE(effects),
 HSTACK(MAP(uniques,LAMBDA(cell,REDUCE(1,FILTER(multipliers,effects=cell),
 LAMBDA(total,value,total*value)))),uniques))))
