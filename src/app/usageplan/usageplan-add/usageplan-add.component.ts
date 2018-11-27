import { Component, OnInit } from '@angular/core';
import { UsagePlan, Quota, Throttle } from '../../services/models/usageplan';
import { UsageplanService } from '../../services/rest/usageplan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usageplan-add',
  templateUrl: './usageplan-add.component.html',
  styleUrls: ['./usageplan-add.component.css']
})
export class UsageplanAddComponent implements OnInit {
  periods: String[] = ['DAY', 'WEEK', 'MONTH'];
  usageplans: UsagePlan[] ;
  quota = new Quota('', 0, 300);
  throttle = new Throttle(100, 300);
  model = new UsagePlan(null, 'Iron', 'This is plan of ironing', this.quota, this.throttle);
  submitted = false;

  constructor(private usagePlanService: UsageplanService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }
  onConfirm() {
    this.addUsagePlan(this.model);

  }

  addUsagePlan(usagePlan: UsagePlan) {
    this.usagePlanService.addUsagePlan(usagePlan).subscribe(key => {
      this.router.navigate(['/usageplans']);
    }, (error)  =>
      console.log('err', error)
    );
  }

}
