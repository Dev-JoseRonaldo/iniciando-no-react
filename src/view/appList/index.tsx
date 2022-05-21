import { List } from "../../components/List";
import { Link } from '../../components/Link';

function Applist() {
  let list = [
    'luis',
    'ronaldo',
    'joao',
    'marcelo',
    'pelé',
    'julios'
  ];

  let list2 = [
    {name:'luis', idade:19},
    {name:'ronaldo', idade:23},
    {name:'joao', idade:45},
    {name:'marcelo', idade:14},
    {name:'pelé', idade:78},
    {name:'julius', idade:35},
  ];


  return (
    <div>
      <Link url='http://localhost:3000/' texto='Home'/>
      <h2>Lista de Presença</h2>
      <ul>
        {list.map((item,index) =>(
          <li key={index}>{item.toUpperCase()}</li>
        ))}
      </ul>

      <ul>
        {list2.map((item,index) =>(
          <List key={index} data={item}/>
        ))}
      </ul>
    </div>
  );
}

export default Applist;
