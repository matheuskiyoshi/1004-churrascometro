const footer = function (){

    const footer = document.createElement("footer");

    const formRegister = document.createElement("form");

    const nameInput = document.createElement("input");
          nameInput.setAttribute("type", "text");
          nameInput.setAttribute("id", "name");
          nameInput.setAttribute("placeholder", "Seu nome");
          nameInput.classList.add("input-form");

    const emailInput = document.createElement("input");
          emailInput.setAttribute("type", "email");
          emailInput.setAttribute("id", "email");
          emailInput.setAttribute("placeholder", "email@email.com");
          emailInput.classList.add("input-form");

    const cityInput = document.createElement("input");
          cityInput.setAttribute("type", "text");
          cityInput.setAttribute("id", "city");
          cityInput.setAttribute("placeholder", "Cidade");
          cityInput.classList.add("input-form");

    const divConsentInput = document.createElement("div");
          divConsentInput.setAttribute("id", "consent-input");

    const consentInput = document.createElement("input");
          consentInput.setAttribute("type", "checkbox");
          consentInput.setAttribute("id", "consent-checkbox");
          consentInput.setAttribute("name", "consentInput");
          consentInput.setAttribute("checked","checked");
    
    const labelConsentInput = document.createElement("label");
          labelConsentInput.setAttribute("for", "consent-checkbox");
          labelConsentInput.setAttribute("id","consent-label");
          labelConsentInput.innerText = "Concordo em receber comunicações e ofertas personalizadas de acordo com meus interesses.";      


    const registerInputGroup = document.createElement("div");
          registerInputGroup.classList.add("input-group");

      footer.appendChild(formRegister);
      formRegister.appendChild(nameInput);
      formRegister.appendChild(emailInput);
      formRegister.appendChild(cityInput);
      footer.appendChild(divConsentInput);
      divConsentInput.appendChild(consentInput);
      divConsentInput.appendChild(labelConsentInput);
      divConsentInput.appendChild(registerButton());

      footer.addEventListener(events.REGISTER, function(){
        
        const customer = {
            name: nameInput.value,
            email: emailInput.value,
            city: cityInput.value
        };

        localStorage.setItem(customer.email, JSON.stringify(customer));
        
      });
    

      return footer;
}