// CODE UNTUK jQuery animation effect
$(document).ready(function(){
    $('.next').on('click', function(){
      var currentImg = $('.active');
      var nextImg = currentImg.next();
  
      if(nextImg.length){
        currentImg.removeClass('active').css('z-index', -10);
        nextImg.addClass('active').css('z-index', 10);
      }
    });
  
    $('.prev').on('click', function(){
      var currentImg = $('.active');
      var prevImg = currentImg.prev();
  
      if(prevImg.length){
        currentImg.removeClass('active').css('z-index', -10);
        prevImg.addClass('active').css('z-index', 10);
      }
    });
  });

// Code untuk validasi register form 

const NAMA = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const email = document.getElementById('email')
const addres = document.getElementById('ads')
form.addEventListener('submit', (e) => {
    let messages = []

    //Validasi Wajib Memasukan Nama
    // if (NAMA.value === '' || NAMA.value == null){
    //     messages.push('Name is required')
    //     e.preventDefault()    
    // }

    if(NAMA.value.length <= 4) {
      messages.push('Name must be longer then 4 characters')
      e.preventDefault()
  }
    
    //Validasi Wajib Memasukan Password
    if (password.value === '' || password.value == null){
      messages.push(' you must enter password')
      e.preventDefault()    
  }
    
    //Validasi Password harus lebih dari = 6
    if(password.value.length <= 6) {
        messages.push('Password must be longer then 6 characters')
        e.preventDefault()
    }
    // Validasi Password tidak boleh Password
    if(password.value === 'password'){
      messages.push('Password Cannot be Password')
    }
    // Validasi Addres harus diisi  
      if (addres.value === '' || addres.value == null){
      messages.push('address is required')
      e.preventDefault()    
  }
    
    if (messages.length > 0 ){
      
      e.preventDefault()
      errorElement.innerText = messages.join(', ')
    }
    // Validasi Harus menggunakan @ untuk email
    if (email.indexof("@")== -1 ){
      messages.push ('You must enter @ for email')
      e.preventDefault()
    }



 


   

})
  

