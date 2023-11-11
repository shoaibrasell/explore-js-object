const student ={
  name: "Shoaib Ullah Rasel",
  money: 15000,
  study:"Computer Science And Engineering",
  subject :['calculus','programming','data structure and algorithm'],
  exam :function(){
    console.log(this.name, "is attending in an exam");
  }
}
student.exam();