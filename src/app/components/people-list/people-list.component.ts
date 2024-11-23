import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people: any[] = [];

  constructor(private peopleService: PeopleService, private router: Router) {}

  ngOnInit(): void {
    this.loadPeople();
  }

  loadPeople() {
    this.peopleService.getAllPeople().subscribe((data: any[]) => {
      this.people = data;
    });
  }

  deletePerson(id: number) {
    this.peopleService.deletePerson(id).subscribe(() => {
      this.people = this.people.filter(person => person.id !== id);
    });
  }

  editPerson(id: number) {
    this.router.navigate(['/edit', id]);
  }
}
