document.addEventListener('DOMContentLoaded', function() {
      const aviso = document.getElementById('avisoEdad');
      const btnSi = document.getElementById('btnSi');
      const btnNo = document.getElementById('btnNo');
      
      document.body.style.overflow = 'hidden';
      
      btnSi.addEventListener('click', function() {
        aviso.style.display = 'none';
        document.body.style.overflow = 'auto';
      });
      
      btnNo.addEventListener('click', function() {
        aviso.style.display = 'none';
        document.body.style.overflow = 'auto';
      });
    });