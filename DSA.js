/* Linked list are abstract daya types(ie not an build in types likes String and boolean).
They are created by us.

Singly Linked list:
  *They are kind of nodes containing values and address of next value considered they are linkded with one other.
  * We implement singly linked using Classes and objects
*/


//array methods
// let arrage = [];
// arrage.push(15);
// arrage.unshift(12);
// arrage.pop();
// arrage.shift();
// console.log(arrage);

//task to create an linked list for storing age

// class Node{
//     constructor(age){
//         this.age = age;
//         this.next = null;
//     }
// }
// class Linkedlist{
//     constructor(){
//         this.head = null;
//     }
//     insertatfirst(age){
//     let input = new Node(age)
//      if(this.head == null){
//         this.head = input;
//      }else
//      {
//         let tail = this.head;
//         while(tail.next !=null){
//             tail = tail.next;
//         }
//         tail.next=input;
//      }
//      //this.length++;
//      }

//    toArray(){

//  let spare = this.head;
//  let dummy = [];

//  while(spare !=null){

//   dummy.push(spare.age);
//   spare = spare.next;
//  }

//  return dummy;

// }
// length(){
//     let i = 0;
//     let len = this.head;
//    while(len!=null){
//     i = i+1
//     len = len.next;
//    }
//    return i;
// }

// deleteattail(){
//   let delt = this.head;
//   if(delt.next == null){
//     this.head = null;
//   }
//   else if(this.head!=null){
//     while(delt.next.next!=null){
//         delt = delt.next;
//     }
//     delt.next = null;

//   }
// }
// deleteathead(){
// if(this.head.next == 0){
//     this.head = null
// }
// else if(this.head.next !=0){
//     this.head = this.head.next;
// }
// }
// insertathead(age){
// let newhnode = new Node(age)
// newhnode.next = this.head;
// this.head = newhnode;
// }
// }


// let value = new Linkedlist();
// value.insertatfirst(23);
// value.insertatfirst(25);
// value.insertatfirst(895);
// value.insertatfirst(255);
// value.insertatfirst(255);
// //value.insertathead(15);

// //value.deleteathead();
// // value.deleteattail();
// value.insertathead(78);
// value.deleteathead();
//  console.log(value.toArray());


/*creating linked list for users containing properties of name,age, sex and ID
for Employees
*/

class Employees{
    constructor(Name,Age,Sex,ID){
        this.Name =Name;
        this.Age = Age;
        this.Sex = Sex;
    this.ID = ID;
    this.last = null;
    }
}
class Linkedlist{
    constructor(){
        this.head = null;
}
insert(Name,Age,Sex,ID){
    let list1 = new Employees(Name,Age,Sex,ID)

if(this.head == null){
    this.head = list1;
}
else{
    let tail = this.head;
    while(tail.last !=null){
        tail  = tail.last;
    
    }
    tail.last = list1;
    
}

}

deletefromtail(){
let thead = this.head;
if(thead.last == null){
    this.head = null
}
else if(this.head !=null){
    while(thead.last.last !=null){
        thead = thead.last;
    }
    thead.last = null;
}
}

insertintohead(Name,Age,Sex,ID){ //Iserting values into head 
    let headnode = new Employees(Name,Age,Sex,ID);
    headnode.last = this.head;
    this.head = headnode;
}

deletefromhead(){
    if(this.head.last == null){
        this.head = null
    }
    else {
  this.head = this.head.last;
}

}

toarray(){
    let arry = this.head;
    let emptyarry = [];
    while(arry !=null){
        emptyarry.push(arry.Name);
        arry = arry.last;
    }
    return emptyarry;
}
}
let values = new Linkedlist();
values.insert("Nitish",23,"Male",10001);
values.insert("Mahesh",24,"Male",10002);
values.insert("Ajay",29,"Not Identified",10003);
values.insert("Arivu",34,"Male",10004);

values.insertintohead("Mani",59,"Male",10000);
values.deletefromhead();
values.deletefromtail();
console.log(values);
console.log(values.toarray());
