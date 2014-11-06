
var form = document.querySelector("FORM"),
		expression = document.querySelector("#expression"),
		result = document.querySelector("#result"),
		temp = "";

		form.onsubmit = function(evt)
		{  

			evt.preventDefault();
			temp = inFixToPolishReverse( expression.value );
			window.t = temp;
			result.innerText  = "Equação";
			result.innerText += "\n" + expression.value;

			result.innerText += "\nPolish Reverse Notation:";
			result.innerText +=  "\n" + temp.toString().replace(/,/g, " ")
			temp = processPolish( temp );

			result.innerText += "\nResult: ";
console.log( temp );
			if( temp != null )
			{
				result.innerText += temp;
			}
			else
			{
				result.innerText += " Equation Error";
			}
			
			
			
		};
	