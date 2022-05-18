 
 const closeBtn = document.querySelector('.navbar__close-btn'),
       opentBtn = document.querySelector('#open'),
       navBar = document.querySelector('[data-navbar]'),
       overlay = document.querySelector('.overlay'),
       navbarLinks = navBar.querySelectorAll('.navbar__link'),
       header = document.querySelector('.header')    
       
       const anchors=navBar.querySelectorAll('a[href*="#"]')
             
       anchors.forEach((item)=>{
           item.addEventListener('click',(e)=>{
               e.preventDefault()
              const blockId = item.getAttribute('href')
              document.querySelector(`${blockId}`).scrollIntoView({
                  behavior:"smooth",
                  block:"start"
              })

           })
       })
          

    function openMenu(){
        navBar.classList.add('show')
        overlay.classList.add('active')
        document.body.style.overflow='hidden'       
      
    }

    function closeMenu(){
        navBar.classList.remove('show')
        overlay.classList.remove('active')
        document.body.style.overflow='auto'    
       
    }
     opentBtn.addEventListener('click',openMenu)
     closeBtn.addEventListener('click',closeMenu)
     overlay.addEventListener('click',closeMenu)

     navbarLinks.forEach((link)=>{
         link.addEventListener('click',(e)=>{
           
             closeMenu()

         })
     })

     function showHeader(){
        window.scrollY>400?header.classList.add('show'):header.classList.remove('show')    
     }

     window.addEventListener('scroll',showHeader)

    
    

     
     


    


     

