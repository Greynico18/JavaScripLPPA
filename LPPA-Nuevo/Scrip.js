function calcular()
{
   
	kg = document.getElementById("kg");
	m = document.getElementById("m");
	 

     

	if(kg.value!="" && m.value!="")
    {
       

			var valor = (kg.value / ((m.value/100)* (m.value/100)));
             var display
			
            
            if(valor<18.5){ display = "Peso inferior al normal"; }
			else if(valor>=18.5 && valor<=24.9){ display = "Peso normal"; }
			else if(valor>=25 && valor<=29.9){ display = "Peso superior al normal"; }
			else if(valor>30){ display = "Obesidad"; }

            document.getElementById('resultado').value =  valor + " "+  display;
            document.getElementById('col').style.display = 'Block';

	}
    else if(m.value>"270"){
        alert("Debes ingresar una estatura menor.")
    }
    else if(kg.value>"543"){
        alert("Debes ingresar un peso  menor.")
    }
    else if(kg.value<"3"){
        alert("Debes ingresar un peso  mayor.")
    }
    else{
			alert("Debes ingresar peso y estatura.")
        }
}
   



