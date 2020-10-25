// C5.2.1
const parser = new DOMParser();

const xmlString = `
<list>
  <student1>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student1>
  <student2>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student2>
</list>`;
const xmlDOM = parser.parseFromString(xmlString, 'text/xml')
const student1 = xmlDOM.querySelector('student1');
const lang1 = student1.querySelector('name').getAttribute('lang');
const first1 = student1.querySelector('first');
const second1 = student1.querySelector('second');
const age1 = student1.querySelector('age');
const prof1 = student1.querySelector('prof');
const student2 = xmlDOM.querySelector('student2');
const lang2 = student2.querySelector('name').getAttribute('lang');
const first2 = student2.querySelector('first');
const second2 = student2.querySelector('second');
const age2 = student2.querySelector('age');
const prof2 = student2.querySelector('prof');

;

const arryOfObj =[
    {
        name: `${first1.textContent}  ${second1.textContent}`,
        age: age1.textContent,
        prof: prof1.textContent,
        lang: lang1
    },
    {
        name: `${first2.textContent}  ${second2.textContent}`,
        age: age2.textContent,
        prof: prof2.textContent,
        lang: lang2
    }
]
console.log(arryOfObj);

//C5.2.2
const jsonstring = `{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`;
const jsO = JSON.parse(jsonstring);
console.log(jsO);
