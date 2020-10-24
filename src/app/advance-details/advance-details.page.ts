import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-advance-details',
  templateUrl: './advance-details.page.html',
  styleUrls: ['./advance-details.page.scss'],
})
export class AdvanceDetailsPage implements OnInit {
  id: any;
  title: any;
  description: any;
  full_description: any;

  constructor(
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.title = this.actRoute.snapshot.paramMap.get('title');
    this.description = this.actRoute.snapshot.paramMap.get('description');
    this.full_description = this.actRoute.snapshot.paramMap.get('full_description');
  }

}