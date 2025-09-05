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

// Google Analytics Event Tracking
function trackEvent(eventName, parameters = {}) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, parameters);
    }
}


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

// Track project link clicks
document.addEventListener('DOMContentLoaded', () => {
    // Track project clicks
    const projectLinks = document.querySelectorAll('.view');
    projectLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            const projectTitle = e.target.closest('.project').querySelector('.projecttitle').textContent;
            trackEvent('project_click', {
                'project_name': projectTitle,
                'link_url': e.target.href
            });
        });
    });

    // Track social media clicks
    const socialLinks = document.querySelectorAll('.headericon a, .footericons a');
    socialLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            let platform = 'unknown';
            if (e.target.href.includes('github')) platform = 'github';
            else if (e.target.href.includes('linkedin')) platform = 'linkedin';
            else if (e.target.href.includes('mailto')) platform = 'email';
            
            trackEvent('social_click', {
                'social_platform': platform,
                'link_url': e.target.href
            });
        });
    });

    // Track contact form submission
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            trackEvent('contact_form_submit', {
                'form_location': 'main_contact_form'
            });
        });
    }
});
