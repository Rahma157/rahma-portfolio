(function(){var els=document.querySelectorAll('.rv');
if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('on')});return}
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('on');io.unobserve(x.target)}})},{threshold:.12});
els.forEach(function(e){io.observe(e)});
setTimeout(function(){els.forEach(function(e){e.classList.add('on')})},2500)})();
