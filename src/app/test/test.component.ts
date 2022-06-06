import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "./../authentication.service";


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  color = ["rosybrown", "royalblue", "palegreen", "peru", "teal", "lightcoral", "tomato", "indianred", "aquamarine"];

  table: HTMLElement | null | undefined;
  instructorInput: HTMLInputElement | null | undefined;
  sectionInput: HTMLInputElement | null | undefined;
  roomInput: HTMLInputElement | null | undefined;
  data: any;
  info: any;

  waiting: boolean = false;

  ngOnInit(): void {
    this.table = document.getElementById("table");;
    this.instructorInput = <HTMLInputElement>document.getElementById("instructorInput")
    this.sectionInput = <HTMLInputElement>document.getElementById("sectionInput")
    this.roomInput = <HTMLInputElement>document.getElementById("roomInput")
  }


  generateProc(){
    this.waiting = true;
    this.data = null;
    this.clear();
    this.clearDropDown()
    this.authService.generate().subscribe(
      (res) => {
        this.info = res['data'].data
        this.data = res['data'].gen;
        console.log(res.data.gen);
        this.setDropDownLists();
        this.waiting = false;
      },
      (err) => {
        console.log(err);
        this.data = [];
        this.waiting = false;
      }
    );
  }
  generateReal(){
    this.waiting = true;
    this.data = null;
    this.clear();
    this.clearDropDown();
    this.authService.generateReal().subscribe(
      (res) => {
        this.info = res['data'].data
        this.data = res['data'].gen;
        console.log(this.data);
        this.setDropDownLists();
        this.waiting = false;
      },
      (err) => {
        console.log(err);
        this.data = [];
        this.waiting = false;
      }
    );
  }

  setDropDownLists(){
    let inst_: string | any[] = [];
    let sect_: string | any[] = [];
    let room_: string | any[] = [];
    if(this.table && this.data && this.instructorInput && this.sectionInput && this.roomInput){
      for(let i in this.info){
        let info_ = this.info[i]
        if(!inst_.includes(info_.instructorsData[0].name)){
          inst_.push(info_.instructorsData[0].name);

          let option = document.createElement("option");
          option.innerHTML = info_.instructorsData[0].name;
          option.value = info_.instructorsData[0].id;
          this.instructorInput.appendChild(option)
        }
        if(!sect_.includes(info_.section_name)){
          sect_.push(info_.section_name);

          let option = document.createElement("option");
          option.innerHTML = info_.section_name;
          option.value = info_.section_id;
          this.sectionInput.appendChild(option)
        }
      }

      for(let i in this.info[0].roomsData){
        if(!room_.includes(this.info[0].roomsData[i].name)){
          room_.push(this.info[0].roomsData[i].name);
          
          let option = document.createElement("option");
          option.innerHTML = this.info[0].roomsData[i].name;
          option.value = this.info[0].roomsData[i].id;
          this.roomInput.appendChild(option)
        }
      }
    }
  }
  

  setInstructor(){
    if(this.instructorInput && this.table && this.data){
      this.clear();
      var input = this.instructorInput.value
      
      for(let i in this.data){
        let data_ = this.data[i];
        if(data_.instructor_id == input){
          let day = Math.floor(data_.day_time/13);
          let time = data_.day_time - (day*13);

          this.table.children[time + 1].children[day + 1].innerHTML = "offering: " + data_.subject_name + 
                                                                      "<br>section: " + data_.section_name + 
                                                                      "<br>instructor: " + data_.instructorsData.name + 
                                                                      "<br>room: " + data_.roomsData.name;
          let color_ = data_.id;
          while(color_ > 8){
            color_ -= 9;
          }
          (<HTMLElement>this.table.children[time + 1].children[day + 1]).style.background = this.color[color_];
          (<HTMLElement>this.table.children[time + 1].children[day + 1]).style.color = "#202020";
        }
      }

    } else {
      console.log("inst here")
    }
  }

  setSection(){
    if(this.sectionInput && this.table && this.data){
      this.clear();
      var input = this.sectionInput.value
      
      for(let i in this.data){
        let data_ = this.data[i];
        if(data_.section_id == input){
          let day = Math.floor(data_.day_time/13);
          let time = data_.day_time - (day*13);

          this.table.children[time + 1].children[day + 1].innerHTML = "offering: " + data_.subject_name + 
                                                                      "<br>section: " + data_.section_name + 
                                                                      "<br>instructor: " + data_.instructorsData.name + 
                                                                      "<br>room: " + data_.roomsData.name;
          let color_ = data_.id;
          while(color_ > 8){
            color_ -= 9;
          }
          (<HTMLElement>this.table.children[time + 1].children[day + 1]).style.background = this.color[color_];
          (<HTMLElement>this.table.children[time + 1].children[day + 1]).style.color = "#202020";
        }
      }

    } else {
      console.log("sect here")
    }
  }
  
  setRoom(){
    if(this.roomInput && this.table && this.data){
      this.clear();
      var input = this.roomInput.value
      
      for(let i in this.data){
        let data_ = this.data[i];
        if(data_.room_id == input){
          let day = Math.floor(data_.day_time/13);
          let time = data_.day_time - (day*13);

          this.table.children[time + 1].children[day + 1].innerHTML = "offering: " + data_.subject_name + 
                                                                      "<br>section: " + data_.section_name + 
                                                                      "<br>instructor: " + data_.instructorsData.name + 
                                                                      "<br>room: " + data_.roomsData.name;
          let color_ = data_.id;
          while(color_ > 8){
            color_ -= 9;
          }
          (<HTMLElement>this.table.children[time + 1].children[day + 1]).style.background = this.color[color_];
          (<HTMLElement>this.table.children[time + 1].children[day + 1]).style.color = "#202020";
        }
      }

    } else {
      console.log("room here")
    }
  }

  clear(){
    if(this.table && this.instructorInput && this.roomInput && this.sectionInput){
      for(let i = 1; i < 14; i++){
        for(let j = 1; j < 6; j++){
          this.table.children[i].children[j].innerHTML = ""
          if(i % 2 == 0){
            (<HTMLElement>this.table.children[i].children[j]).style.background = "#121212"
          } else {
            (<HTMLElement>this.table.children[i].children[j]).style.background = "#202020"
          }
        }
      }
    }
  }

  clearDropDown(){
    if(this.table && this.instructorInput && this.roomInput && this.sectionInput){

      let child = this.instructorInput.lastElementChild; 
      while (child) {
        this.instructorInput.removeChild(child);
        child = this.instructorInput.lastElementChild;
      }
      child = this.sectionInput.lastElementChild; 
      while (child) {
        this.sectionInput.removeChild(child);
        child = this.sectionInput.lastElementChild;
      }
      child = this.roomInput.lastElementChild; 
      while (child) {
        this.roomInput.removeChild(child);
        child = this.roomInput.lastElementChild;
      }
    }
  }

  roomNameUtil(id: number){
    let rooms = this.info.rooms;

    for(let i in rooms){
      if(rooms[i].id == id){
        return rooms[i].code
      }
    }
    return "";
  }

  instructorNameUtil(id: number){
    let instructors = this.info.instructors;

    for(let i in instructors){
      if(instructors[i].id == id){
        return (instructors[i].last_name + ", " + instructors[i].first_name)
      }
    }
    return "";
  }

  sectionNameUtil(id: number){
    let sections = this.info.sections;

    for(let i in sections){
      if(sections[i].id == id){
        return sections[i].name
      }
    }
    return "";
  }
  
  subjectNameUtil(id: number){
    let subjects = this.info.subjects;
    let checklists = this.info.checklists;
    let offerings = this.info.offerings;
    let subject_id = 0;
    let checklist_id = 0;

    for(let i in offerings){
      if(offerings[i].id == id){
        checklist_id = offerings[i].checklist_id
        break;
      }
    }

    for(let i in checklists){
      if(checklists[i].id == checklist_id){
        subject_id = checklists[i].subject_id
        break;
      }
    }

    for(let i in subjects){
      if(subjects[i].id == subject_id){
        return subjects[i].name;
      }
    }
    return "";
  }
}
