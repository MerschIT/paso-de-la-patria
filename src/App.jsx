import { useState } from 'react'
import './App.css'

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  

  return (
    <div className='tablaDatos'>
      <SearchBar 
        filterText={filterText} 
         
        onFilterTextChange={setFilterText} 
      />
      <ProductTable 
        products={products} 
        filterText={filterText}
      />
    </div>
  );
}


function ProductRow({ product }) {
  const name = <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
            
    </tr>
  );
}

function ProductTable({ products, filterText }) {
  const rows = [''];
  let lastCategory = null;
 

  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase() 
      ) === -1
    ) {
      return;
    }
     
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  console.log('prueba:'+rows);
    if(rows==[]){
      return;}
      else{
      return (
        
    <table>
      <thead>
        <tr>
          <th>Nombre en Facebook y Teléfono</th>
          
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>);
    }
    
    
  
}

function SearchBar({
  filterText,  
  onFilterTextChange,
  
}) {
  return (
    <form>
      <input className='cuadroTexto' 
        type="text" 
        value={filterText} placeholder="  NOMBRE, EL APELLIDO O PARTE DEL TELÉFONO" 
        onChange={(e) => onFilterTextChange(e.target.value)} />
      
    </form>
  );
}

const PRODUCTS = [
  { price: '', name: "JUAN PEREZ - 3794554433"},
  { price: '', name: "MARIO GOMEZ - 3794778844"},
  { price: '', name: "OTRA PERSONA - 3794876543"},
  
];

export default function App() {
  return(
<>
<div className='lista'>
<h1>ESTAFADORES REPORTADOS</h1>
<h1>PASO DE LA PATRIA</h1>
<h2 className='h2h2'>Buscador por nombre o teléfono</h2>
<section className='resultados'><FilterableProductTable products={PRODUCTS} /></section>
<section className='footer'>
  <h2 className='h2h2'>¿De dónde sale esta información?</h2>
  <span><h3>De los reportes realizados por usuarios en:</h3></span>
<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.pngtree.com%2Ffreepng%2Fdown-arrow_4645178.html&psig=AOvVaw1bFb3AoqKK5RHSEdFe81Pu&ust=1707655599957000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLiXqP3moIQDFQAAAAAdAAAAABAEhttps://img2.freepnges.com/20180418/ske/kisspng-telephone-numbering-plan-television-internet-font-down-arrow-5ad7366977c106.1912651215240536094905.jpg" alt="" />
     <h3>Grupo de facebook:  
       <a className='enlace' href="https://www.facebook.com/groups/1799980143818187">&#128660;
  Estafadores en Paso de la Patria &#128659;</a>.
     </h3>
     <h3>Grupo de Facebook:  
      <a className='enlace' href='https://www.facebook.com/groups/636477514678455/'>&#128758;
  Alquileres en Paso de la Patria 	&#127749;</a></h3>
</section>
</div>
    </>
    ) 
}



