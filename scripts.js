/* Add your JavaScript to this file */

onload=function(){
    var emailAdd= document.querySelector('#email');
    var message= document.querySelector('.message');


    this.addEventListener('submit',event=>{
        event.preventDefault();

        if (emailAdd.value!=''){
            message.innerHTML=`Thank you! your email address ${emailAdd.value} has been added to our mailing list`;
            emailAdd.value='';

            
        }else{
            message.innerHTML='Please enter a valid email address';
            emailAdd.value='';
        }
    });
}