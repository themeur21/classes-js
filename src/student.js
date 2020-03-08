import React from "react";
import Human from './human'
class Student extends Human {
    name;
    job;
    skills=[]

    constructor(job,skills,name){
        this.super()

        this.name=name;
        this.job=job;
        this.skills=skills

        this.getJob;
        this.leaveJob;
        this.forgetSkill;
        this.learnNewSkill;
      
    }
}

const me = new Student("student",["react","Js/html/css","Violin","gaming"])
me.getJob("Software engineer");
me.leaveJob();
me.learnNewSkill("Boxing");
me.forgetSkill("gaming")
