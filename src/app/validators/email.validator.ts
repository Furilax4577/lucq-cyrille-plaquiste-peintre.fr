import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

/** A hero's name can't match the given regular expression */
export function EmailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/gm;
        const forbidden = regex.test(control.value);
        return forbidden ? null : { forbiddenName: { value: control.value } };
    };
}