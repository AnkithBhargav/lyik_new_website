
import {sendEmail} from '../src/api/sendEmail.js';

async function test1() {
  const data = {
    title: 'T', name:'N', phone:'P',email:'E',website:'W',subject:'S',date:'DD YY',feedback:'F',support:'S',message:'mmmm'

  }
  const r = await sendEmail(data);
  console.log(r);


}

test1()

