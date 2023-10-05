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

    const cepInput = document.createElement("input");
          cepInput.setAttribute("type", "text");
          cepInput.setAttribute("id", "cep");
          cepInput.setAttribute("placeholder", "CEP");
          cepInput.classList.add("input-form");

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
      formRegister.appendChild(cepInput);
      footer.appendChild(divConsentInput);
      divConsentInput.appendChild(consentInput);
      divConsentInput.appendChild(labelConsentInput);
      divConsentInput.appendChild(registerButton());

      footer.addEventListener(events.REGISTER, function(){
            const name = nameInput.value;
            const email = emailInput.value;
            const cep = cepInput.value;
            const consentChecked = consentInput.checked;
          
            if (name.trim() === '' || cep.trim() === '' || !consentChecked) {
              alert('Por favor, preencha todos os campos obrigatórios e marque a caixa de consentimento.');
              return; 
            }
          
            if (!/\S+@\S+\.\S+/.test(email)) {
              alert('Por favor, insira um endereço de e-mail válido.');
              return;
            }
          
            const customer = {
              name: name,
              email: email,
              cep: cep,
            };

            api.getAddressByPostalCode(cepInput.value)
                  .then((response) =>  {
                        localStorage.setItem("customer", JSON.stringify({...customer,response }));
                  })
                  .catch((error) => {
                        console.log(error);
                  })

            localStorage.setItem('customer', JSON.stringify(customer));
          
            footer.style.display = 'none';
          });
          
      return footer;
}