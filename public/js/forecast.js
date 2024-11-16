$(document).ready(function() {
  const input = $('.input-location');
  const ticker = $('.ticker');

  function handleUserInteraction(event) {
    ticker.remove();
    input.css('display', 'flex');
    input.focus();
    $(document).off('keydown touchstart', handleUserInteraction);
  }

  input.on('input', function() {
    let inputValue = input.val();
    
    if (inputValue.length === 1) {
      input.val(inputValue.charAt(0).toUpperCase() + inputValue.slice(1));
    }
  });

  $(document).on('keydown touchstart', handleUserInteraction);
});

$(document).ready(function() {
  if (window.location.pathname === '/forecast') {
      Scrolldown();
  }

  function Scrolldown() {
    const elementTop = $('#iWantToScrollHere').offset().top;
    const paddingTop = 150;

    const scrollTop = elementTop + paddingTop;
  
    $('html, body').animate({
      scrollTop: scrollTop
    }, 1000);
  }
});

$(document).ready(function() {
  const titles = document.querySelectorAll('.typingAnimation');
  const duration = 1100;

  titles.forEach(title => {
    const fullText = title.textContent.trim();
    title.innerHTML = ''; 
    const spanWrapper = document.createElement('span');
    
    fullText.split('').forEach(char => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.opacity = '0';
      spanWrapper.appendChild(span);
    });
    
    title.appendChild(spanWrapper);
    
    let index = 0;
    const typingSpeed = duration / fullText.length;

    function typeWriter() {
      if (index < fullText.length) {
        spanWrapper.children[index].style.transition = `opacity ${typingSpeed}ms`;
        spanWrapper.children[index].style.opacity = '1';
        index++;
        setTimeout(typeWriter, typingSpeed);
      } else {
        title.classList.add('completed');
      }
    }

    typeWriter(); 
  });
});

$(document).ready(function() {
  const arrowBottom = $('.arrow-bottom');
  if (arrowBottom.length) {
    lottie.loadAnimation({
      container: arrowBottom[0],
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: arrowBottom.attr('data-src')
    });
  }
}); 

$(window).on('load', function() {
  $('body').addClass('loaded');
});
