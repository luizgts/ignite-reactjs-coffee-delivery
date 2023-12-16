/**
 * Créditos à Valéria Padilha de Vargas pelos códigos de mascaras com regex
 * https://valchan.com.br/mask-input/
*/

// Number
export const numeric = (value: string | number) => {
    value = String(value);
    return Number(value.replace(',', ''));
}

// Currency
export const currency = (value: string | number, format: boolean = false) => {

    value = String(value);

    if (format) {
        if(value.length === 1) {
            value = '00'+value;
        }else if (value.length === 2) {
            value = '0'+value;
        }
    }
    
    return value
        .replace(/\D/g, "")
        .replace(/(\d)(\d{2})$/, "$1,$2")
        .replace(/(?=(\d{3})+(\D))\B/g, ".")
}

// 000.000.000-00
export const cpf = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1")
  }
  
  // (00) 00000-0000
  export const phone = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d{4})(\d)/, "$1-$2")
  }
  
// 00000-000
export const cep = (value: string) => {
return value.replace(/\D/g, "").replace(/^(\d{5})(\d{3})+?$/, "$1-$2")
}

// 00/00/0000
export const date = (value: string) => {
return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1")
}

// Aceita apenas que letras sejam digitadas
export const onlyLetters = (value: string) => {
return value.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, "")
}

// Aceita apenas números
export const onlyNumbers = (value: string) => {
return value.replace(/\D/g, "")
}

const formatTo = {
    currency,
    cpf,
    phone,
    cep,
    date,
    numeric
}

export default formatTo;