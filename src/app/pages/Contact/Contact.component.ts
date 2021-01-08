import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import {MailModel} from '../../model/mail-model';
import {MailServiceService} from '../../services/mail-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'contact-us',
  templateUrl: './Contact.component.html',
  styleUrls: ['./Contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent implements OnInit{

    public mailModel: MailModel = new MailModel();
    registerForm: FormGroup;
    submitted = false;
    controleSubmit: true;

    //private updateSubscription: Subscription;

    public mailObjet: any;
    constructor(public mailService: MailServiceService, private formBuilder: FormBuilder) {}


    ngOnInit(): void {
        this.valideForm();
    }


    valideForm(){
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
            subject: ['', [Validators.required, Validators.minLength(10)]],
            body: ['', [Validators.required, Validators.minLength(20)]]
        });
    }

    get f() { return this.registerForm.controls; }

    public OnSubmit()
    {
        //this.valideForm();
        this.submitted = true;

        if (this.registerForm.invalid) {
            return;
        }

        if (this.registerForm.valid){
            this.submitted = false;
            alert("email envoye avec succes, un mail de confirmation vous a ete envoye. Veiller verifiez votre email");
            this.mailService.envoieEmail(this.mailModel)
                .subscribe((data) => {
                    this.mailModel = new MailModel();
                }, error => {
                    console.log(error);
                });
            this.mailModel = new MailModel();
        }
    }



}
