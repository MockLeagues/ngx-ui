import { AfterViewInit, ElementRef } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors } from '@angular/forms';
export declare class MaxValidatorDirective implements Validator, AfterViewInit {
    private elm;
    max: number;
    type: string;
    constructor(elm: ElementRef);
    ngAfterViewInit(): void;
    validate(c: AbstractControl): ValidationErrors | null;
}
