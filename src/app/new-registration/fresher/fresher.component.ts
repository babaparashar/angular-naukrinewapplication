import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fresher',
  templateUrl: './fresher.component.html',
  styleUrls: ['./fresher.component.css']
})
export class FresherComponent implements OnInit {
  personal: boolean;
  education: boolean;

  constructor(private formBuilder: FormBuilder, private router: Router) {}
  fresherPresonalForm: FormGroup;
  fresherEducationForm: FormGroup;
  ngOnInit() {
    this.personal = true;
    this.fresherPresonalForm = this.formBuilder.group({
      name: ["", Validators.required],
      emailId: ["", Validators.compose([Validators.email,Validators.required])],
      password: ["", Validators.compose([Validators.minLength(6),Validators.required])],
      mobileNumber: ["", Validators.compose([Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),Validators.required])],
      currentCity: ["", Validators.required],
      resume: ["", Validators.required]
    });
    this.fresherEducationForm = this.formBuilder.group({
      qualification: ["", Validators.required],
      course: ["", Validators.required],
      specialization: ["", Validators.required],
      institute: ["", Validators.required],
      courceType: ["", Validators.required],
      passingYear: ["", Validators.required],
      skills: this.formBuilder.array([])
    });
  }
  addSkill(){
    const skl=this.fresherEducationForm.controls.skills as FormArray;
    skl.push(this.formBuilder.group({
      skillName:""
    }));
  }
  registerUser() {
    console.log(this.fresherPresonalForm.controls);
    this.personal = false;
    this.education = true;
  }
  addEducationDetail(){
    console.log(this.fresherEducationForm.controls);
  }
}

    

