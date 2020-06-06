(()=>{      
    document.addEventListener('scroll',()=>{
        const scrollY = window.scrollY;
        console.log(scrollY);
        const aboutUsRight = document.querySelector(".about-us-right");
        const aboutUsLeft = document.querySelector(".about-us-left-image");
        if(scrollY>483){
            aboutUsRight.classList.add("about-us-right-anim");
            aboutUsRight.style.opacity = `1`;
            aboutUsLeft.classList.add("about-us-left-imgAnim");
            aboutUsLeft.style.opacity = 1;
        }
    })
})();