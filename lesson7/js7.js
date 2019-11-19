const imagesToLoad = document.querySelectorAll("img[data-src]");
console.log(imagesToLoad)
function preloadImage(img){
    const src = img.getAttribute("data-src");
    if (!src) {
      return;  
    }
    img.onload = () => {
      img.removeAttribute("data-src")
    }
    img.src=src;
  }
  const imageOptions = {
      threshold: 0,
      rootMargin: "0px 0px 50px 0px"
  };
  
  const imgObserver = new IntersectionObserver((items, observer) => {
    items.forEach(item => { 
      if (!item.isIntersecting){
        return;
      }
      else {
        preloadImage(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imageOptions );
  