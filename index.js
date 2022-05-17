 
 const closeBtn = document.querySelector('.navbar__close-btn'),
       opentBtn = document.querySelector('#open'),
       navBar = document.querySelector('[data-navbar]'),
       overlay = document.querySelector('.overlay'),
       navbarLinks = navBar.querySelectorAll('.navbar__link'),
       header = document.querySelector('.header')      
  

    function openMenu(){
        navBar.classList.add('show')
        overlay.classList.add('active')
        document.body.overflow='hidden'       
      
    }

    function closeMenu(){
        navBar.classList.remove('show')
        overlay.classList.remove('active')
        document.body.overflow='auto'    
       
    }
     opentBtn.addEventListener('click',openMenu)
     closeBtn.addEventListener('click',closeMenu)
     overlay.addEventListener('click',closeMenu)

     navbarLinks.forEach((link)=>{
         link.addEventListener('click',(e)=>{
             e.preventDefault()
             closeMenu()

         })
     })

     function showHeader(){
        window.scrollY>400?header.classList.add('show'):header.classList.remove('show')    
     }

     window.addEventListener('scroll',showHeader)

    

     
     


    


     

