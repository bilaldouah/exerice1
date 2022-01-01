window.addEventListener("load", function(){
    optionsChanged();
});


function calculer(){
  
    var quantite = document.getElementById('quantite').value;
    var PU=document.getElementById('prix-unitaire').value;
     
    var HT=PU*quantite;
    var TVA=HT*0.2;
    var  TTC=HT+TVA;
    document.getElementById('HT').value=HT;
    document.getElementById('TVA').value=TVA;
    document.getElementById('TTC').value=TTC;

};
 function optionsChanged(){
     if(document.getElementById('Produits').value=='Produit 1'){ document.getElementById('prix-unitaire').value=100 }
    else if(document.getElementById('Produits').value=='Produit 2'){ document.getElementById('prix-unitaire').value=200 }
    else if(document.getElementById('Produits').value=='Produit 3'){ document.getElementById('prix-unitaire').value=300 }
     else if(document.getElementById('Produits').value=='Produit 4'){ document.getElementById('prix-unitaire').value=45 }
};