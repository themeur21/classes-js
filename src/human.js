import React from "react";

export default class Human {
name;
job;
skills=[]

getJob(job){
    this.job=job;
    console.log(this.job);
}

leaveJob(){
    this.job="";
    console.log(this.job);
}

learnNewSkill(skill){
    this.skills.push(skill);
    console.log(this.skills)
}

forgetSkill(skill){

    var index = this.skills.indexOf(skill);
    this.skills.splice(index,1);
    console.log(this.skills)
}


}