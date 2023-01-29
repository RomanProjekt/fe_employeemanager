export interface Employee {
  id:number;
  name:string;
  email:string;
  jobTitle:string;
  phone:string;
  imageUrl:string;
  employeeCode:string;
}

export class Employee implements  Employee {
  id:number = 0;
  name:string = "";
  email:string = "";;
  jobTitle:string = "";;
  phone:string = "";;
  imageUrl:string = "";;
  employeeCode:string = "";;
}

