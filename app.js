const observe = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }else {
            entry.target.classList.remove('show');
        }
    });
});

const hide = document.querySelectorAll('.hidden');
hide.forEach((e)=>observe.observe(e));


// page loader
let intro = document.querySelector('.intro')
    let logo = document.querySelector('.logo-header')
    let logoSpan = document.querySelectorAll('.logo')
    window.addEventListener('DOMContentLoaded',()=>{
      setTimeout(()=>{
        logoSpan.forEach((span,idx) => {
          setTimeout(()=>{
            span.classList.add('active')
        }, (idx+1)*400);
      });

      setTimeout(()=>{
        logoSpan.forEach((span,idx)=>{
          setTimeout(()=>{
            span.classList.remove('active');
            span.classList.add('fade');
          }, (idx+1)*50)
        })
      },2000);
      setTimeout(() => {
        intro.style.top= '-100vh'
      },2300);
    })
  })
