// function untuk tombol experiences
document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".toggle-button");
  const contents = document.querySelectorAll(".content");
  // const contentWrapper = document.querySelector(".content-wrapper");

  buttons.forEach(button => {
    button.addEventListener("click", function() {
      const target = this.getAttribute("data-target");
      
      contents.forEach(content => {
        if (content.id === target) {
          content.classList.add("active");
        } else {
          content.classList.remove("active");
        }
      });

      // Adjust container height
      // const activeContent = document.querySelector(".content.active");
      // contentWrapper.style.height = activeContent.offsetHeight + "px";
    });
  });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Ambil nilai dari input
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simulasikan pengiriman data (Anda perlu mengganti bagian ini dengan logika nyata)
  // Jika pengiriman sukses, arahkan pengguna ke halaman terima kasih
  // Jika gagal, Anda dapat menampilkan pesan kesalahan kepada pengguna
  // Contoh sederhana di bawah ini
  const isSubmissionSuccessful = true; // Ganti dengan hasil pengiriman nyata

  if (isSubmissionSuccessful) {
    window.location.href = '/public/form-submitted.html';
  } else {
    alert('Failed to submit the form. Please try again.');
  }
});




