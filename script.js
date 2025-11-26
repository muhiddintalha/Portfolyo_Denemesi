document.addEventListener('DOMContentLoaded', function() {
    
    // Formu ve mesaj kutusunu seçiyoruz
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');

    // Eğer form sayfada varsa bu kodu çalıştır
    if(form) {
        form.addEventListener('submit', function(event) {
            
            // 1. Sayfanın yenilenmesini ENGELLE 
            event.preventDefault();

            // 2. Kullanıcının ismini al (Daha samimi mesaj için)
            const nameInput = document.getElementById('name');
            const userName = nameInput.value;

            // 3. Mesajı hazırla
            feedback.innerHTML = `✅ Harika! Mesajın başarıyla gönderildi <strong>${userName}</strong>. En kısa sürede döneceğim.`;
            
            // 4. Mesajın Tasarımı 
            feedback.style.display = 'block';
            feedback.style.color = '#ffffff';       // Beyaz yazı
            feedback.style.backgroundColor = '#333'; // Koyu gri arka plan 
            feedback.style.padding = '15px';
            feedback.style.marginTop = '20px';
            feedback.style.borderRadius = '8px';    // Köşeleri yuvarlat
            feedback.style.fontWeight = 'bold';
            feedback.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)'; // Hafif gölge
            
            // 5. Formu temizle
            form.reset();

            // 6. 5 saniye sonra mesajı otomatik sil
            setTimeout(() => {
                feedback.style.display = 'none';
            }, 5000);
        });
    }
});