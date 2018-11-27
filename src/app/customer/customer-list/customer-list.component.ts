import { Component, OnInit } from '@angular/core';
import { Customer } from '../../services/models/customer';
import { CustomerService } from '../../services/rest/customer.service';
import { UsageplanService } from '../../services/rest/usageplan.service';
import { UsagePlan } from '../../services/models/usageplan';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[];
  usageplans: UsagePlan[] ;

  constructor(private customerService: CustomerService, private usagePlanService: UsageplanService) { }

  ngOnInit() {
    this.getCustomers();
    this.getUsageplans();
  }

  getCustomers(): void {
    this.customerService.getCustomers()
    .subscribe(customers => this.customers = customers);
  }

  getUsageplans(): void {
    this.usagePlanService.getUsagePlans()
    .subscribe(usageplans => this.usageplans = usageplans);
  }


  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.customerService.addCustomer({ name } as Customer)
      .subscribe(customer => {
        this.customers.push(customer);
      });
  }

  update(customer: Customer) {
    if (!customer) { return; }
    this.customerService.updateCustomer(customer)
      .subscribe(cu => {
        console.log('Customer upated successfully');
      });
  }

  updateAll(): void {
    this.customers.forEach( (customer) => {
      this.customerService.updateCustomer(customer)
      .subscribe( cu => {
        console.log('Customers updated');
  });
  });
}


/**
 * Deletes the customer
 * @param customer the customer
 */
  delete(customer: Customer): void {
    if (!customer) { return; }
    this.customerService.deleteCustomer(customer.id).subscribe(cu => {
      this.customers = this.customers.filter(h => h !== customer);
      console.log('Customers updated');
    });
  }
}
