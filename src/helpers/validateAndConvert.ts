import Swal from "sweetalert2";

export const isOnlyNumbers = (text: string) => /^\d+(\s\d+)*$/.test(text.trim());
export const isEmpty = (text: string) => text.trim().length === 0;

export const showAlert = (msg: string) => {
    Swal.fire({
        icon: 'warning',
        title: 'Atención',
        text: msg,
        confirmButtonColor: '#3b82f6'
    });
}

export const validateAndConvert = (input: string): boolean => {

    if (isEmpty(input)) {
        showAlert('Por favor, ingresa algún texto.');
        return false;
    }
    if (isOnlyNumbers(input)) {
        showAlert('El texto contiene solo números. No se puede convertir.');
        return false;
    }

    if (input.trim().length > 5000) {
        Swal.fire({ icon: 'warning', title: 'Demasiado texto', text: 'Has superado el límite de 5000 caracteres. Reduce tu texto para continuar.' });
        return false;
    }

    return true;
}