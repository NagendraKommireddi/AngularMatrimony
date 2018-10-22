import{HttpClientModule} from '@angular/common/http'
import { Component, OnInit,AfterViewChecked } from '@angular/core';

import { Router } from '@angular/router';

declare let paypal:any;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private router:Router) { 
    if(!sessionStorage.getItem('Gender')){
      this.router.navigateByUrl('/home')
    }
  }

  ngOnInit() {
    
  }
  ShowCard(){
    console.log("------------");  
    document.getElementById("Card").style.display='block';
    document.getElementById("UPI").style.display='none';
  }
  ShowUPI(){
    console.log("------------");  
    document.getElementById("Card").style.display='none';
    document.getElementById("UPI").style.display='block';
  }

  addScript: boolean = false;
  paypalLoad: boolean = true;
  
  finalAmount: number = .10;
  private loadExternalScript(scriptUrl: string) {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script')
      scriptElement.src = scriptUrl
      scriptElement.onload = resolve
      document.body.appendChild(scriptElement)
  })
  }
  ngAfterViewInit(): void {
    this.loadExternalScript("https://www.paypalobjects.com/api/checkout.js").then(() => {
      paypal.Button.render({
        env: 'sandbox',
        client: {
          production: '',
          sandbox: 'AfJNaRbGELXAk1PRBLBfETag7-B3uTCex83_fJ8TokwrVuOgHkWWU03qMvQHzaHzLMbafJqKhFHrNAOf'
        },
        commit: true,
        payment: function (data, actions) {
          return actions.payment.create({
            payment: {
              transactions: [
                {
                  amount: { total: '0.1', currency: 'USD' }
                }
              ]
            }
          })
        },
        onAuthorize: function(data, actions) {
          return actions.payment.execute().then(function(payment) {
            // TODO
          })
        }
      }, '#paypal-checkout-btn');
    });
  }
}
