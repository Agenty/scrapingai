require('dotenv').config();
import Agenty from "./lib/Agenty";

const agenty = new Agenty(`${process.env.API_KEY}`);

// agenty.jobs.start(`${process.env.AGENT_ID}`).then((d) => {
//   console.log("jobs", d);
// });

// agenty.lists.get(55).then(x => console.log('result', x))

// agenty.lists.delete(92).then(x => console.log('list', x))

// agenty.lists.create({name:'List-33'}).then(x=> console.log(x))

// agenty.lists.update(94, { name: 'List-333' }).then(x => console.log(x))

// agenty.listRows.list(53).then(x=> console.log(x))

// agenty.listRows.get(53, "648ad9f67b80abde869eb704").then(x=> console.log(x))

agenty.listRows.create(53, [{url:"New row adds"}]).then(x=> console.log(x))