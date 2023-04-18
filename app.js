/*const express = require('express')//its like import statement
const app = express() //now app can be used function
const port = 3000

const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:4200',
  allowedHeaders: ['Content-Type'],
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.use((req,res,next) => {
  res.set('Access-Control-Allow-Origin','http://localhost:4200');
  res.set('Access-Control-Allow-Headers', "*");
  res.set('Access-Control-Allow-Methods', "*");
  next();
});
const employees = []

app.get('/', (req, res) => {

    res.status(200).json(employees)
//   res.status(200).json({
//     id: 1,
//     name: "employee1"
//   })
})

app.use(express.json());

app.post('/', (req, res) => {
   
    const index = employees.findIndex(e => e.id === req.body.id);
    if(index === -1){
      employees.push(req.body);
      res.status(200).json({msg: "added success"});
    }
    else{
      res.status(400).json({msg: "Employee Exist with Same id..!"});
    }
})

app.put('/', (req, res)=>{

    const index = employees.findIndex(e => e.id === req.body.id);
    if(index !== -1){

      employees.splice(index, 1);
      employees.push(req.body);
      res.status(200).json({msg: "updated success"});
    }
    else{
      res.status(400).json({msg: "NO Employee found with given id.!"});
    }

})


app.delete('/', (req, res) => {
  
  const id = req.body.id;
  console.log(id)
  const index = employees.findIndex(e => e.id === id);
  if (index !== -1) {
    employees.splice(index, 1);
  } 
  res.status(200).json({msg: "deleted success"});
})


app.listen(port, () => {
  console.log(`Example app listenin on port ${port}`)
})*/
/*const express = require('express');
const app = express();
const port = 3000;
const emplyees = []

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.set('Access-Control-Allow-Headers', "*");
  res.set('Access-Control-Allow-Methods', "*");
  next();
});

app.use(express.json());
app.get('/', (req, res) => {
  res.status(200).json(emplyees)
});

app.post('/', (req, res) => {
  console.log("body", req.body);

  emplyees.push(req.body)
  res.status(200).json(req.body)
});

app.put('/', (req, res) => {

  const index = emplyees.findIndex(e => e.id === req.body.id);
  if (index !== -1) {
    emplyees.splice(index, 1, );
    emplyees.push(req.body);
    res.status(200).json({ msg: "updated success" });
  }
  else {
    res.status(400).json({ msg: "NO Employee found with given id.!" });
  }

})

app.delete('/:id', (req, res) => {
  const id = req.params.id;
  console.log(id)
  const index = emplyees.findIndex(e => +e.id === +id);
  console.log('index', index)
  if (index !== -1) {
    emplyees.splice(index, 1);
  }
  res.status(200).json({ msg: "deleted success" });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
const express = require('express');
const app = express();
const port = 3000;
const emplyees = []

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.set('Access-Control-Allow-Headers', "*");
  res.set('Access-Control-Allow-Methods', "*");
  next();
});

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json(emplyees)
});

app.post('/', (req, res) => {
  console.log("body", req.body);

  emplyees.push(req.body)
  res.status(200).json(req.body)
});

app.put('/', (req, res) => {

  const index = emplyees.findIndex(e => e.id === req.body.id);
  if (index !== -1) {
    emplyees.splice(index, 1, );
    emplyees.push(req.body);
    res.status(200).json({ msg: "updated success" });
  }
  else {
    res.status(400).json({ msg: "NO Employee found with given id.!" });
  }

})

app.delete('/:id', (req, res) => {
  const id = req.params.id;
  console.log(id)
  const index = emplyees.findIndex(e => +e.id === +id);
  console.log('index', index)
  if (index !== -1) {
    emplyees.splice(index, 1);
  }
  res.status(200).json({ msg: "deleted success" });
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});*/

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.set('Access-Control-Allow-Headers', '*');
  res.set('Access-Control-Allow-Methods', '*');
  next();
});

const employees = [];

app.get('/', (req, res) => {
  res.status(200).json(employees);
});

app.post('/', (req, res) => {
    employees.push(req.body);
    res.status(200).json({msg: "Employee added successfully"});
});

app.put('/', (req, res) => {
  const index = employees.findIndex(e => e.id === req.body.id);
  if (index !== -1) {
    employees.splice(index, 1, req.body);
    res.status(200).json({ msg: "updated success" });
  }
  else {
    res.status(400).json({ msg: "NO Employee found with given id.!" });
  }
})

app.delete('/:id', (req, res) => {
  const id = req.params.id;
  const index = employees.findIndex(e => +e.id === +id);
  if (index !== -1) {
    employees.splice(index, 1);
  }
  res.status(200).json({ msg: "deleted success" });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
