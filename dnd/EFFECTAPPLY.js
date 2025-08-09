/*


*/

=LET(effects, ARRAYFORMULA(SPLIT(SPREAD(P8)," ",FALSE)),
 LET(multiplier, 1+DROPRIGHT(DROPLEFT(CHOOSECOLS(effects,1),1),1)/100,
     description, CHOOSECOLS(effects,2),
    
    )
)
