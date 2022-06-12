 /*function dynamicEmail(){
    let fname:string="sankalpani";
    let lname: string="ranasinghe"
    let fullname:string;
    let fulname=fname +lname;
 let email=(fname+lname+'pragmatic.com.au');
 
   return email;
}
console.log(dynamicEmail());
*/
//Generate a random email with a given domain (e.g gmail .com)
function generateRandomEmail(domain:string) {
   let text:string = "";
   let possible :string= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
   for (let i = 0; i < 5; i++)
       text += possible.charAt(Math.floor(Math.random() * possible.length));
   return text + " pragmatic.com.a" + domain;
}
console.log(generateRandomEmail);