=REGEXREPLACE(REGEXREPLACE(REGEXREPLACE(JOIN(
  "_",
  JOIN("-",REVERSECOLS(ARRAYFORMULA(TEXT(SPLIT(A2,"."),"00")))),
  B2,
  C2,
  D2,
  E2,
  IF(ISBLANK(F2),,CONCAT("Deb",F2)),
  IF(ISBLANK(G2),,CONCATENATE("xx",
     REGEXREPLACE(REGEXREPLACE(TEXT(G2,"0"),
                           ",|\.", "-"),
                           "€|\s", ""),
                           "EUR")),
  H2
), "\s+_*\s*|(,|\.)\s*", "_"),
   "_+-*_*", "_"),
   "(_|-)$|€", "")
