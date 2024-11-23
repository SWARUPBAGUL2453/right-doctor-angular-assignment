import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {
  person: any = {};

  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.peopleService.getPersonById(id).subscribe(data => {
      this.person = data;
    });
  }

  savePerson() {
    this.peopleService.updatePerson(this.person.id, this.person).subscribe(() => {
      this.router.navigate(['/people']);
    });
  }
}
