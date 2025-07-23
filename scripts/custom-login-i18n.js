(function () {
  const tcTexts = {
    en: `Only authorised users are permitted to access this site. By logging in you accept our 
      <a href="https://docs.sympheos.baosystems.com/Sympheos-Portal-Terms-en-GB.pdf" target="_blank">terms and conditions</a> 
      &amp; 
      <a href="https://docs.sympheos.baosystems.com/Sympheos-Portal-Privacy-en-GB.pdf" target="_blank">privacy policy</a>.`,

    es: `Solo los usuarios autorizados pueden acceder a este sitio. Al iniciar sesión aceptás nuestros 
      <a href="https://docs.sympheos.baosystems.com/Sympheos-Portal-Terms-es-ES.pdf" target="_blank">términos y condiciones</a> 
      y nuestra 
      <a href="https://docs.sympheos.baosystems.com/Sympheos-Portal-Privacy-es-ES.pdf" target="_blank">política de privacidad</a>.`,

    fr: `Seuls les utilisateurs autorisés peuvent accéder à ce site. En vous connectant, vous acceptez nos 
      <a href="https://docs.sympheos.baosystems.com/Sympheos-Portal-Terms-fr-FR.pdf" target="_blank">conditions générales</a> 
      et notre 
      <a href="https://docs.sympheos.baosystems.com/Sympheos-Portal-Privacy-fr-FR.pdf" target="_blank">politique de confidentialité</a>.`,

    pt: `Apenas usuários autorizados podem acessar este site. Ao fazer login, você aceita nossos 
      <a href="https://docs.sympheos.baosystems.com/Sympheos-Portal-Terms-pt-PT.pdf" target="_blank">termos e condições</a> 
      e nossa 
      <a href="https://docs.sympheos.baosystems.com/Sympheos-Portal-Privacy-pt-PT.pdf" target="_blank">política de privacidade</a>.`
  };

  function updateLegalText() {
    const select = document.querySelector('select[name="uiLocale"]');
    const lang =
      select?.selectedOptions?.[0]?.value?.split('-')[0] || 'en';
    const tcDiv = document.getElementById('tc_pp_text_text');
    if (tcDiv) {
      tcDiv.innerHTML = tcTexts[lang] || tcTexts.en;
    }
  }

  const observer = new MutationObserver(() => {
    const select = document.querySelector('select[name="uiLocale"]');
    if (select) {
      updateLegalText();
      select.addEventListener('change', updateLegalText);
      observer.disconnect();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
})();
