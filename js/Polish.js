/**
 * Function to Show the Top of the Stack
 * >> Extend Array Object
 * @return string
 */
Array.prototype.top = function()
{
  return this[this.length -1 ] || null;
};

/**
 * Check if character is part of number (integer or float)
 * @param  string  item 
 * @return boolean
 */
function isNumber( item )
{
  if(item.match(/\d|\./))
    {
      return true;
    }

  return false;
}

/**
 * Transforms Infix to Polish Reverse Grammar
 * @param  string exp [ expression - E.G. (2+3)/2 ]
 * @return Array     [ Array in Polish Reverse Notation]
 */
function inFixToPolishReverse( exp )
{
  var number = "",
      item   = "",
      count  = 0,
      mainStack = [],
      tempStack = [],
      value = { "+":2,"-":3,"*":4,"/":5 }; //Precedence
  
      exp = exp.replace(/\ |\n|\t/g,''); // Replace special characters and tab

      while( count <= exp.length )
      {
        item = exp.charAt( count ) || "";

        if( isNumber( item ) )
        {
          number += item;
        }
        else if ( number !== "" && ! isNumber( item ) )
        {
          mainStack.push( number );
          number = "";
        }

        if( item.match( /\-|\+|\*|\//g ) )
        {
          while( value[ tempStack.top() ] > value[ item ] )
          {
             mainStack.push( tempStack.pop() );
          }
          tempStack.push( item );
        }

        if( item.match(/\(/))
        {
          tempStack.push( item );
        }

        if( item == ")" )
        {
          while(tempStack.top() != "(")
          {
            mainStack.push( tempStack.pop() );
          }
          tempStack.pop();
        }
        
        count++;
      }
  
      while( tempStack.top() )
      {
        mainStack.push( tempStack.pop() );
      }

  return mainStack;
}

/**
 * Process Polish Reverse Notation to get result
 * @param  Array exp [ Array of in Polish Reverse Shape ]
 * @return int/float [ Result ]
 */
function processPolish( exp )
{
  var count = 0;


      while( count != -1 )
      {

        try
          {
          
            while( ! ( exp[ count ].match( /-{1}$|\+|\*|\//g )) )
            {
              count++;
              character = exp[ count ];
            }
          }
        catch(err)
          {
              count = -1;    
          }

        if( count > 0 )
          {
        
             switch( exp[ count ] )
             {
               case "+":
                 exp[ count - 2 ] = String
                       (Number.parseInt(exp[ count -2 ]) + Number.parseInt(exp[ count -1 ])); 
                 break;
               case "-":
                 exp[ count - 2 ] =  String
                       (Number.parseInt(exp[ count -2 ]) - Number.parseInt(exp[ count -1 ])); 
                 break;
               case "*":
                 exp[ count - 2 ] =  String
                      (Number.parseInt(exp[ count -2 ]) * Number.parseInt(exp[ count -1 ])); 
                 break;
               case "/":
                 exp[ count - 2 ] =  String
                      (Number.parseInt(exp[ count -2 ]) / Number.parseInt(exp[ count -1 ])); 
                 break;
             }
          
              exp.splice( count -1 , 2 );
              count = 0;
          }
          else
          {
              count = -1;
          }


      }
      return exp.top();
}
