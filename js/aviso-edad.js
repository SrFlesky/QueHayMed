document.addEventListener('DOMContentLoaded', function() {
      const aviso = document.getElementById('avisoEdad');
      const btnSi = document.getElementById('btnSi');
      const btnNo = document.getElementById('btnNo');
      
      document.body.style.overflow = 'hidden';
      
      btnSi.addEventListener('click', function() {
        console.log('Usuario hizo clic en: Sí, soy mayor de 18 años');
        // No hacemos nada más
      });
      
      btnNo.addEventListener('click', function() {
        console.log('Usuario hizo clic en: No, no soy mayor de 18 años');
        // No hacemos nada más
      });
    });