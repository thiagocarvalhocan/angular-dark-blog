import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'; //need to import the file to access the properties

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoContent:string = ""
  titleContent:string = ""
  descriptionContent:string = ""
  private id:string | null= "0" //everywhere I would use it, I need to declare as "string|null"

  constructor(
    private route:ActivatedRoute // need to declare this line to activate the routes
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get('id') //the return can be string or null so it forces to declare the variable ID as "string | null"
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent (id:string | null) {
    const result = dataFake.filter(article => article.id == id)[0];
    
    this.titleContent = result.title;
    this.descriptionContent = result.description;
    this.photoContent = result.photoContent;
  
    
  }
}
