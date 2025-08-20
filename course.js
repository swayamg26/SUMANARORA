let courses = [
  {
    title: 'Crystal Healing Webinar',
    image: 'img.jpg',
    time: '5.8.2025, 3:30 PM',
    descr:
      'Explore the healing power of crystals, aura cleansing, and chakra balancing. Anyone seeking holistic wellness is welcome.',
  },
  // Other courses...
];
function showCourse(idx) {
  document.querySelectorAll('section').forEach((s) => s.classList.remove('active'));
  document.getElementById('courses').classList.add('active');
  document.getElementById('courses-list').style.display = 'none';
  document.getElementById('courses-upcoming').style.display = 'none';
  document.querySelector('.courses-section-title:nth-of-type(1)').style.display = 'none';
  document.querySelector('.courses-section-title:nth-of-type(2)').style.display = 'none';
  document.querySelector('h2.text-center.mb-4').style.display = 'none';
  let c = courses[idx];
  document.getElementById('course-detail').innerHTML = `
    <div class="full-info-box">
      <button class="close-info" title="Close" onclick="closeCourseDetail();">&times;</button>
      <h3>${c.title}</h3>
      <img src="${c.image}" alt="${c.title}" />
      <div style="font-size:1.08rem; margin-top:6px; margin-bottom:12px;"><b>Time:</b> ${c.time}</div>
      <div style="font-size:1.15rem;">${c.descr}</div>
      <button onclick="alert('Thank you for applying to ${c.title}! We will contact you soon.');" 
        style="margin-top: 18px; background: #1e3a8a; color: #fff; border:none; padding: 10px 18px; font-weight: 700; border-radius: 10px; cursor:pointer;">
        Apply Now
      </button>
    </div>`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function closeCourseDetail() {
  document.getElementById('course-detail').innerHTML = '';
  document.getElementById('courses-list').style.display = 'flex';
  document.getElementById('courses-upcoming').style.display = 'block';
  document.querySelector('.courses-section-title:nth-of-type(1)').style.display = 'block';
  document.querySelector('.courses-section-title:nth-of-type(2)').style.display = 'block';
  document.querySelector('h2.text-center.mb-4').style.display = 'block';
}
