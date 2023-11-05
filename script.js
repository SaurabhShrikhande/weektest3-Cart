const Products = [
    {id: 1, name: "Product-1", price:100},
    {id: 2, name: "Product-2", price:200},
    {id: 3, name: "Product-3", price:300},
    ];
    

    let negative = document.getElementById("minus1");
    negative.addEventListener("click", function(){negfun("val1","myDiv");});

    function negfun(valu, divu){
        const cval = document.getElementById(valu).innerText;
        let x1 = parseInt(cval) - 1;
        if(x1 < 0) x1=0;  document.getElementById(divu).innerHTML = ""; 
        document.getElementById(valu).innerText = x1; 
        // console.log(x1);
          total();
         p1(valu , divu);
         p2();
         p3();
    }

    let positive = document.getElementById("plus1");
     positive.addEventListener("click", function(){adufun("val1","myDiv");});
   //  positive.onclick = adufun("val1");
   
     function adufun(vala ,diva){
        let cval = document.getElementById(vala).innerText;
         let x2 = parseInt(cval) + 1;
         document.getElementById(vala).innerText = x2; 
         // console.log(x2);
         total(); 
        p1(vala,diva);
    }

    
    document.getElementById("minus2").addEventListener("click",function(){negfun("val2","myDiv2");});
    document.getElementById("plus2").addEventListener("click", function(){adufun("val2","myDiv2");});;
    
    document.getElementById("minus3").addEventListener("click",function(){negfun("val3","myDiv3");});
    document.getElementById("plus3").addEventListener("click", function(){adufun("val3","myDiv3");});;
    
    
  /*  <div  class="w">
    <h1 class="heading">Cart</h1>
    <div class="item pad">
    <div id="myDiv" class="w">
        <h3>ProductName</h3>
        <h3> <span>Qty</span> <span>x</span> <span>Rate</span></h3>
        </div>
    </div>
  </div> */
 
  function p1 (valc, divc){
if(parseInt(document.getElementById(valc).innerText) > 0){
    document.getElementById(divc).innerHTML = "";

      //  console.log("work");
        let upd = document.createElement("div");
       upd.classList.add("item");
        
       document.getElementById(divc).appendChild(upd);

       let upd2 = document.createElement("h3");
       let vac = ""; 
       let vac2 = "";
       if (divc === "myDiv") { vac = "Product-1"; vac2 = "100"; }
       if (divc === "myDiv2") { vac = "Product-2"; vac2 = "200"; }
       if (divc === "myDiv3") { vac = "Product-3";  vac2 = "300"; }
       upd2.innerText = vac;
        upd.appendChild(upd2);
    
        let upd3 = document.createElement("h3");
        upd.appendChild(upd3);
   
        let upd4 = document.createElement("span");
        upd4.innerText = document.getElementById(valc).innerText;
        upd3.appendChild(upd4);

        let upd5 = document.createElement("span");
        upd5.innerText = " X " + vac2;
        upd3.appendChild(upd5);
        
       }
    } 
            
function total(){
document.getElementById("total").innerText =
parseInt(document.getElementById("val1").innerText)*100 +
parseInt(document.getElementById("val2").innerText)*200 + 
parseInt(document.getElementById("val3").innerText)*300;   


console.log("a" + parseInt(document.getElementById("val1").innerText));
                  }