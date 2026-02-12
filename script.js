document.addEventListener('DOMContentLoaded', function () {
  // remove any global floating button to avoid duplicates
  document.querySelectorAll('.book-now-offering').forEach(el => el.remove());

  const bottoms = document.querySelectorAll('.slider_info-bottom');
  bottoms.forEach(el => {
    // place the button on the slide container so it can sit beside the picture
    const slide = el.closest('.swiper-slide') || el.parentElement;
    if (slide && !slide.querySelector('.book-now-inline')) {
      const a = document.createElement('a');
      a.href = '#get-in-touch';
      a.className = 'cta-primary book-now-inline';
      a.textContent = 'Book Now';
      slide.appendChild(a);
    }
  });
});

// Inline Travel Philosophy image at runtime (adds background-image inline)
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.section-image.rev.travel_phyl').forEach(function(el) {
    el.style.backgroundImage = "url('philo.png')";
    el.style.backgroundSize = 'cover';
    el.style.backgroundPosition = 'center';
  });
});

// Replace camel ride image with fixed.jpg and apply fixed background-attachment
document.addEventListener('DOMContentLoaded', function () {
  // Find swiper slides with the camel ride image URL and replace with fixed.jpg
  const camelUrl = 'https://cdn.prod.website-files.com/64fba653be6287d23f6f6bc5/65f49468cb643ae9171fc936_camel%20ride%20in%20the%20sahara%20desert%20morocco.webp';
  document.querySelectorAll('.swiper-slide.is-photos').forEach(function(slide) {
    const style = slide.getAttribute('style') || '';
    if (style.includes(camelUrl)) {
      const newStyle = style.replace(
        /background-image:\s*url\([^)]*65f49468cb643ae9171fc936[^)]*\)/g,
        "background-image: url('fixed.jpg')"
      );
      slide.setAttribute('style', newStyle);
      slide.style.backgroundAttachment = 'fixed';
    }
  });
});

// Replace Riad Hara image with mice.jpg and apply fixed background-attachment
document.addEventListener('DOMContentLoaded', function () {
  // Find swiper slides with the Riad Hara image URL and replace with mice.jpg
  const riadUrl = 'https://cdn.prod.website-files.com/64fba653be6287d23f6f6bc5/65f493e091eed51cb40643e2_first%20floor%20view%20of%20Riad%20Hara.webp';
  document.querySelectorAll('.swiper-slide.is-photos').forEach(function(slide) {
    const style = slide.getAttribute('style') || '';
    if (style.includes(riadUrl)) {
      const newStyle = style.replace(
        /background-image:\s*url\([^)]*65f493e091eed51cb40643e2[^)]*\)/g,
        "background-image: url('mice.jpg')"
      );
      slide.setAttribute('style', newStyle);
      slide.style.backgroundAttachment = 'fixed';
    }
  });
});

// Replace Kasbah Bab Ourika image with weeding.jpg and apply fixed background-attachment
document.addEventListener('DOMContentLoaded', function () {
  // Find swiper slides with the Kasbah Bab Ourika image URL and replace with weeding.jpg
  const kasbaUrl = 'https://cdn.prod.website-files.com/64fba653be6287d23f6f6bc5/65701896d063c9d2cdb04a07_Kasbah%20Bab%20Ourika%20room%20morocco.webp';
  document.querySelectorAll('.swiper-slide.is-photos').forEach(function(slide) {
    const style = slide.getAttribute('style') || '';
    if (style.includes(kasbaUrl)) {
      const newStyle = style.replace(
        /background-image:\s*url\([^)]*65701896d063c9d2cdb04a07[^)]*\)/g,
        "background-image: url('weeding.jpg')"
      );
      slide.setAttribute('style', newStyle);
      slide.style.backgroundAttachment = 'fixed';
    }
  });
});

// Replace Clay workshop image with tailored.jpg and apply fixed background-attachment
document.addEventListener('DOMContentLoaded', function () {
  // Find swiper slides with the Clay workshop image URL and replace with tailored.jpg
  const clayUrl = 'https://cdn.prod.website-files.com/64fba653be6287d23f6f6bc5/65f493226dc2aecf0f8b6a91_woman%20in%20a%20Clay%20workshop%20morocco.webp';
  document.querySelectorAll('.swiper-slide.is-photos').forEach(function(slide) {
    const style = slide.getAttribute('style') || '';
    if (style.includes(clayUrl)) {
      const newStyle = style.replace(
        /background-image:\s*url\([^)]*65f493226dc2aecf0f8b6a91[^)]*\)/g,
        "background-image: url('tailored.jpg')"
      );
      slide.setAttribute('style', newStyle);
      slide.style.backgroundAttachment = 'fixed';
    }
  });
});

// Replace Cooking class image with cuisine.jpg and apply fixed background-attachment
document.addEventListener('DOMContentLoaded', function () {
  // Find swiper slides with the Cooking class image URL and replace with cuisine.jpg
  const cookingUrl = 'https://cdn.prod.website-files.com/64fba653be6287d23f6f6bc5/65f494f9da4ced7b2110cf4b_cooking%20class%20for%20mor';
  document.querySelectorAll('.swiper-slide.is-photos').forEach(function(slide) {
    const style = slide.getAttribute('style') || '';
    if (style.includes(cookingUrl)) {
      const newStyle = style.replace(
        /background-image:\s*url\([^)]*65f494f9da4ced7b2110cf4b[^)]*\)/g,
        "background-image: url('cuisine.jpg')"
      );
      slide.setAttribute('style', newStyle);
      slide.style.backgroundAttachment = 'fixed';
    }
  });
});

// Replace Travelers in Chefchaouen image with women's.jpg and apply fixed background-attachment
document.addEventListener('DOMContentLoaded', function () {
  // Find swiper slides with the Travelers in Chefchaouen image URL and replace with women's.jpg
  const chefUrl = 'https://cdn.prod.website-files.com/64fba653be6287d23f6f6bc5/65f49695e5834f0c49c6d182_Travelers%20in%20Chefchaouen';
  document.querySelectorAll('.swiper-slide.is-photos').forEach(function(slide) {
    const style = slide.getAttribute('style') || '';
    if (style.includes(chefUrl)) {
      const newStyle = style.replace(
        /background-image:\s*url\([^)]*65f49695e5834f0c49c6d182[^)]*\)/g,
        "background-image: url('women\\'s.jpg')"
      );
      slide.setAttribute('style', newStyle);
      slide.style.backgroundAttachment = 'fixed';
    }
  });
});
