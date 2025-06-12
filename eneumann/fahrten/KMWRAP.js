=IF(LEN(B2)<4,"-", // catch unpopulated row in a robust manner, allowing for " - ", "- ", "-", empty, or any other short identifier of an unpopulated row

 // catch destination errors
 LAMBDA(destinations, 
 
 LAMBDA(kms,
        IF(AND(ARRAYFORMULA(ISNUMBER(kms))), // catch direction errors
               SUM(kms), // Sum up km if there are no errors
               JOIN(CHAR(9888),CHAR(10),TOCOL(MAP(kms,LAMBDA(km,IF(ISNUMBER(km),,km))),1)))) // Assemble all "unknown direction" errors into one error message
 (MAP(

  // Convert destination string to direction list
      BYROW({ARRAY_CONSTRAIN(destinations,ROWS(destinations)-1,1), // "from" list, cut off last row
             REVERSEROWS(ARRAY_CONSTRAIN(REVERSEROWS(destinations),ROWS(destinations)-1,1))}, // "to" list, cut off first row
             LAMBDA(row,JOIN("~",row))), // Add "~" between "from" and "to" lists, concatenate 

  // Work through directions, output km for each direction, catch direction errors
  LAMBDA(direction,IF(CONTAINS(direction_db,direction), // query DB
                      FORCELOOKUP(direction,CHOOSECOLS(direction_db,1),CHOOSECOLS(direction_db,2)), // Look up km values for each direction
                      CONCATENATE(CHAR(9888),CHAR(34),direction,CHAR(34)," fehlt")))))) // Assemble error message if direction unknown

    // Split string of destinations into list of destinations (first operation)
    (TRANSPOSE(ARRAYFORMULA(TRIM(SPLIT(B2,"-",TRUE,TRUE))))) 



