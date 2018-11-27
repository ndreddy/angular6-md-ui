import { Component, OnInit } from '@angular/core';
import { UsagePlan } from '../../services/models/usageplan';
import { UsageplanService } from '../../services/rest/usageplan.service';

@Component({
  selector: 'app-usageplan-list',
  templateUrl: './usageplan-list.component.html',
  styleUrls: ['./usageplan-list.component.css']
})
export class UsageplanListComponent implements OnInit {
  periods: String[] = ['DAY', 'WEEK', 'MONTH'];
  usagePlans: UsagePlan [];
  constructor(private usagePlanService: UsageplanService) { }

  ngOnInit() {
    this.getUsageplans();
  }

  getUsageplans(): void {
    this.usagePlanService.getUsagePlans()
    .subscribe(usagePlans => this.usagePlans = usagePlans);
  }

}
