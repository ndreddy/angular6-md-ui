import { Component, OnInit } from '@angular/core';
import { UsagePlan } from '../../services/models/usageplan';
import { Customer } from '../../services/models/customer';
import { CustomerService } from '../../services/rest/customer.service';
import { UsageplanService } from '../../services/rest/usageplan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  usageplans: UsagePlan[] ;
  model = new Customer(null, 'ABC Inc', null, null, 'https://ta15.ambr.com/integration');
  submitted = false;

  constructor(private customerService: CustomerService, private usagePlanService: UsageplanService, private router: Router) { }

  ngOnInit() {
    this.getUsageplans();
  }

  onSubmit() { this.submitted = true; }

  onConfirm() {
    this.addCustomer(this.model);

  }

  addCustomer(cust: Customer) {
    this.customerService.addCustomer(cust).subscribe(key => {
      this.router.navigate(['/customers']);
    }, (error)  =>
      console.log('err', error)
    );
  }

  getUsageplans(): void {
    this.usagePlanService.getUsagePlans()
    .subscribe(usageplans => this.usageplans = usageplans);
  }
// TODO: Remove this when we're done
get diagnostic() { return JSON.stringify(this.model); }

}
