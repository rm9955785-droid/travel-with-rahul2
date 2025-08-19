
// Simple active nav on load (works when served locally too)
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.menu a').forEach(a=>{
    if(a.getAttribute('href')===path){ a.classList.add('active'); }
  });
})();
