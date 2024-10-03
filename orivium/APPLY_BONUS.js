/*
desc: Applies a bonus formatted as a string to a stat
var: stat, bonus
*/
=LAMBDA(stat_1,bonus_1,IF(RIGHT(bonus_1,1)="%",stat_1*(DROPRIGHT(bonus_1,1)/100+1),stat_1+bonus_1))
(stat,IF(LEFT(bonus,1)="+",DROPLEFT(bonus,1),bonus))
