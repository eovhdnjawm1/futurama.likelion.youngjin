import { Error, Loading } from '.';
import { useData } from '../hooks/useData';
import styled from '@emotion/styled';
import { Inventory } from '../types/Inventory';

export const InventoryContainer = () => {
  const name = 'inventory';
  const { data, error } = useData(name);

  if (error) return <Error />
  if (!data) return <Loading />



  return (
    <main>
      <h2>{name}</h2>
      <Ul>
        {data.map((inventoryData: Inventory) => {
          const { title, category, description, slogan, price, stock, id } = inventoryData;
          return (
            <li key={`futurama-cast-${id}`}>
              {category}
              <h3>{title}</h3>
              {slogan}
              <p>{description}</p>
              <dl>
                <div>
                  <dt>price</dt>
                  <dd>{price} </dd>
                </div>
                <div>
                  <dt>stock</dt>
                  <dd>{stock} </dd>
                </div>
              </dl>
            </li>
          )
        })}
        </Ul>
    </main >
  )
}

const Ul = styled.ul`
  max-width:1000px; margin:0 auto;
  display:grid;
  gap :2rem;

  h3{margin-bottom:0.8rem;}
  li{text-align:center;}
  dl{display:flex; flex-wrap:wrap; justify-content:center; gap:0 1em;
    div{ }
  }
`