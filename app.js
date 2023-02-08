$(document).ready(function () {
  $("#search").on("keyup", function (event) {
    let searchAnime = event.target.value;
    $.ajax({
      url: "https://api.jikan.moe/v4/anime?q=" + searchAnime,
      type: "GET",
      success: function (res) {   
        $.each(res.data, function (index, data) {
          $('#searchAnime').append(`                 
                 <div class="swiper-slide" style="width:100%;height:100%;">
                   <div class="card text-bg-dark card-hover">
                     <img src="${data.images.webp.image_url}" class="card-img" alt="anime" style="object-fit:fill; width:100%;height:280px"">
                     <div class="card-img-overlay hide" style="top:150px;">
                       <h5 class="card-title fs-6 text">${data.title_english}</h5>  
                       <p class="card-text"><small>${data.year}</small></p>        
                       <a target="_blank" href="${data.url}" class="btn btn-secondary">Watch</a>
                     </div>
                   </div>
                   <h5 class="text-light text-opacity-75 mt-3 fs-6 text">${data.title_english}</h5     
                 </div> `)
        })
      }
    })
  })
  $.ajax({
    url: "https://api.jikan.moe/v4/top/anime",
    type: "GET",
    success: function (response) {
      $.each(response.data, function (index, data) {    
        $('#anime').append(`                 
            <div class="swiper-slide" style="width:100%;height:100%;">
              <div class="card text-bg-dark card-hover">
                <img src="${data.images.webp.image_url}" class="card-img" alt="anime" style="object-fit:fill; width:100%;height:280px">
                <div class="card-img-overlay hide" style="top:150px;">
                  <h5 class="card-title fs-6 text">${data.title_english}</h5>  
                  <p class="card-text"><small>${data.year}</small></p>
                
                  <a target="_blank" href="${data.url}" class="btn btn-secondary">Watch</a>
                </div>
              </div>
              <h5 class="text-light text-opacity-75 mt-3 fs-6 text">${data.title_english}</h5     
            </div>     
                `)
      })
    },
  }).done(function (anime) {
    $.ajax({
      url: "https://api.jikan.moe/v4/anime/1/recommendations",
      type: "GET",
      success: function (response) {
        $.each(response.data, function (index, data) {
  
          $('#recommend').append(`                 
               <div class="swiper-slide" style="width:100%;height:100%;">
                 <div class="card text-bg-dark card-hover">
                   <img src="${data.entry.images.webp.image_url}" class="card-img" alt="anime" style="object-fit:fill; width:100%;height:280px">
                   <div class="card-img-overlay hide" style="top:190px;">
                     <h5 class="card-title fs-6 text">${data.entry.title}</h5>    
                     
                     <a target="_blank" href="${data.entry.url}" class="btn btn-secondary">Watch</a>
                   </div>
                 </div>
                 <h5 class="text-light text-opacity-75 mt-3 fs-6 text">${data.entry.title}</h5            
               </div>     
                   `)
        })
      },
    })

  }).fail(function () {
    alert("error");
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerGroup: 1,
  centerSlide: "true",
  grabCursos: "true",
  fade: "true",
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});