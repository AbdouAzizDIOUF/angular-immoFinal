import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';

@Component({
  selector: 'booking',
  templateUrl: './Booking.component.html',
  styleUrls: ['./Booking.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BookingComponent implements OnInit{


    public payPalConfig ? : IPayPalConfig;

   constructor(){}

   ngOnInit(){
       this.initConfig();
   }

    private initConfig(): void {
        this.payPalConfig = {
            currency: 'EUR',
            clientId: 'AUsR649seoHegpTgPr2HSAI0a9SIpd6TNZCN3GrQ9u-V1hw5RCMVt59TL7Ipjy4-9L5QD5_WXtfPC6Pw',
            createOrderOnClient: (data) => <ICreateOrderRequest> {
                intent: 'CAPTURE',
                purchase_units: [{
                    amount: {
                        currency_code: 'EUR',
                        value: '9.99',
                        breakdown: {
                            item_total: {
                                currency_code: 'EUR',
                                value: '9.99'
                            }
                        }
                    },
                    items: [{
                        name: 'Enterprise Subscription',
                        quantity: '1',
                        category: 'DIGITAL_GOODS',
                        unit_amount: {
                            currency_code: 'EUR',
                            value: '9.99',
                        },
                    }]
                }]
            },
            advanced: {
                commit: 'true'
            },
            style: {
                label: 'paypal',
                layout: 'vertical',
                color: 'blue',
                shape: 'rect'
            },
            onApprove: (data, actions) => {
                console.log('onApprove - transaction was approved, but not authorized', data, actions);
                actions.order.get().then(details => {
                    console.log('onApprove - you can get full order details inside onApprove: ', details);
                });

            },
            onClientAuthorization: (data) => {
                console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
            },
            onCancel: (data, actions) => {
                console.log('OnCancel', data, actions);

            },
            onError: err => {
                console.log('OnError', err);
            },
            onClick: (data, actions) => {
                console.log('onClick', data, actions);

            },
        };
    }



    ngAfterViewInit()
    {
        var radios = document.querySelectorAll('.payment-tab-trigger > input');

        for (var i = 0; i < radios.length; i++) {
            radios[i].addEventListener('change', expandAccordion);
        }

        function expandAccordion (event) {
            var allTabs = document.querySelectorAll('.payment-tab');
            for (var i = 0; i < allTabs.length; i++) {
                allTabs[i].classList.remove('payment-tab-active');
            }
            event.target.parentNode.parentNode.classList.add('payment-tab-active');
        }
    }
}
