var container = document.createElement('div')
container.setAttribute('class', 'container p-4  ');

var heading = document.createElement('div');
heading.setAttribute('class', 'display-4 fw-bolder text-dark');
heading.innerHTML = "Personal Details"
heading.style.textAlign = "center";

var form = document.createElement('form');
form.setAttribute('class', 'p-5  py-3 form-control border border-3 rounded-4');
form.setAttribute('id','color');
form.setAttribute('name','myform')
var divtable = document.createElement('div')
divtable.setAttribute('class', 'row');

 document.body.append(container);
 container.append(heading,form,divtable);


 var result = createformelement("Firstname:","text","fname");
 var result1 =createformelement("Lastname:","text","lname");
 var address = createformelement("Address:","textarea","address");
  var pincode =createformelement("Pincode:","number","pincode");
  var gender = createformelement1("Gender:",'text',"gender","Eg:Male or Female");
  var state = createState()
  var country = createCountry();
   var button = buttonclick();
 
  form.append(result,result1,address,pincode,gender,state,country,button);

   

 

  function buttonclick(){
      var btn= document.createElement('button');
      btn.innerHTML='Sumbit';
      btn.setAttribute('type','button');
      btn.setAttribute('class','btn btn-dark mt-5 ');
      btn.addEventListener("click", action);
       
       return(btn);
  }


function action() {
   var fn = document.getElementById('fname').value;
   var ln = document.getElementById('lname').value;
   var addr = document.getElementById('address').value;
   if (!fn) {
      alert('Please Enter First Name');
  } else if (!ln) {
      alert('Please Enter Last Name');
  } else if (!addr) {
      alert('Please Enter Address');
  } else{
   alert('Thanks for submitting the form!!')
  }
}

 function createformelement(labeltext,type,idname){
    var divs = document.createElement('div');
    divs.setAttribute('class', 'form-group row');
    var lebel =document.createElement('label');
    lebel.setAttribute( 'class','col-4 col-form-label');
    lebel.innerHTML= labeltext ;
    lebel.setAttribute('class','fw-bold display-5 py-2 text-white')
     var inp = document.createElement('input');
     inp.setAttribute('type', type);
      inp.id=idname;
      inp.placeholder=labeltext;
      inp.setAttribute('class',' form-control  ');
      inp.setAttribute('name','name')
     divs.append(lebel,inp);
      return(divs);
      
 }
 function createformelement1(labeltext,type,idname,placeholder){
   var divs = document.createElement('div');
   divs.setAttribute('class', 'form-group row');
   var lebel =document.createElement('label');
   lebel.setAttribute( 'class','col-4 col-form-label');
   lebel.innerHTML= labeltext ;
   lebel.setAttribute('class','fw-bold display-5 py-2 text-white')
    var inp = document.createElement('input');
    inp.setAttribute('type', type);
     inp.id=idname;
     inp.placeholder=placeholder;
     inp.setAttribute('class',' form-control ');
    divs.append(lebel,inp);
     return(divs);
     
}

function createState(){
   var d = document.createElement('div');
   d.setAttribute('class', 'form-group row');

   var label = document.createElement('label');
   label.innerHTML = "State:"
   label.setAttribute('class', ' col-4 fw-bold display-5  text-white ');

   var select = document.createElement('select');
   select.id = 'state'
   select.setAttribute('class', 'form-control col-6')
   var opt1 = new Option('Andhra Pradesh', 'Andhra Pradesh');
   opt1.selected = true;
   var opt2 = new Option('Karnataka', 'Karnataka');
   var opt3 = new Option('Tamilnadu', 'Tamilnadu');
   var opt4 = new Option('Kerala', 'Kerala');
   var opt5 = new Option('Madhya Pradesh', 'Madhya Pradesh');
   var opt6 = new Option('Haryana', 'Haryana');
   var opt7 = new Option('Gujarat', 'Gujarath');

   select.add(opt1);
   select.add(opt2);
   select.add(opt3);
   select.add(opt4);
   select.add(opt5);
   select.add(opt6);
   select.add(opt7);

   d.append(label, select);
   return d;
}
 
function createCountry() {
   var d = document.createElement('div');
   d.setAttribute('class', 'form-group row');

   var label = document.createElement('label');
   label.setAttribute('class', ' col-4 fw-bold display-5 py-2  text-white');
   label.innerHTML = "Country:";

   var select = document.createElement('select');
   select.setAttribute('class', 'form-control col-6')
   select.id = 'country'
   var opt1 = new Option('select country', 'select country');
   opt1.selected = true;
   var opt2 = new Option('USA', 'USA');
   var opt3 = new Option('Australia', 'Australia');
   var opt4 = new Option('South Africa', 'South Africa');
   var opt5 = new Option('New Zealand', 'New Zealand');
   var opt6 = new Option('England', 'England');
   var opt7 = new Option('West Indies', 'West Indies');
   var opt8 = new Option('India','India')
   select.add(opt1);
   select.add(opt2);
   select.add(opt3);
   select.add(opt4);
   select.add(opt5);
   select.add(opt6);
   select.add(opt7);
   select.add(opt8)

   d.append(label, select);
   return d;
}












 
