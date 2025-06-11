=IF(LEN(B2)<4,, // catch unpopulated row in a robust manner, allowing for " - ", "- ", "-", empty, or any other short identifier of an unpopulated row
 LAMBDA(kms,
        IF(AND(ARRAYFORMULA(ISNUMBER(kms))), // catch all errors
               SUM(kms), // Sum up km if there are no errors
               JOIN(CHAR(10),TOCOL(MAP(kms,LAMBDA(km,IF(ISNUMBER(km),,km))),1)))) // Assemble all "unknown direction" errors into one error message
 (MAP(

  // Convert destination string to direction list
      BYROW(
           LAMBDA(destinations, 
                  // check for unknown destinations, return direction_range if no errors
                  LAMBDA(errors,direction_range,IF(ISBLANK(errors),direction_range,JOIN(CHAR(10),errors)))
                  (TOCOL(BYROW(destinations,LAMBDA(destination,IF(CONTAINS(destination_db,destination),, // query DB
                                                                  CONCATENATE(CHAR(34),destination,CHAR(34)," fehlt")))),3), // Assemble error message if destination unknown
                         // second argument of lambda, direction range:
                         {ARRAY_CONSTRAIN(destinations,ROWS(destinations)-1,1), // "from" list, cut off last row
                          REVERSEROWS(ARRAY_CONSTRAIN(REVERSEROWS(destinations),ROWS(destinations)-1,1))})) // "to" list, cut off first row

            // Turn "from" and "to" into direction string
           (TRANSPOSE(ARRAYFORMULA(TRIM(SPLIT(B2,"-",TRUE,TRUE))))), // Split string of destinations into list of destinations (first operation)
            LAMBDA(row,JOIN("~",row))), // Add "~" between "from" and "to" lists, concatenate 

  // Work through directions, output km for each direction
  LAMBDA(direction,IF(CONTAINS(direction_db,direction), // catch "unknown direction" errors
                      FORCELOOKUP(direction,CHOOSECOLS(direction_db,1),CHOOSECOLS(direction_db,2)), // Look up km values for each direction
                      CONCATENATE(CHAR(34),direction,CHAR(34)," fehlt")))))) // Assemble error message if direction unknown
