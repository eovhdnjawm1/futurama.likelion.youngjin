import { Error, Loading } from '.';
import { useData } from '../hooks/useData';
import { Characters } from '../types/Characters';
import styled from '@emotion/styled';
//import { MEDIA_QUERY_END_POINT } from "../constants";


export const CharactersContainer = () => {
    const name = 'characters'
    const { data, error } = useData(name);
  
    console.log(error);
    if (error) return <Error />
    if (!data) return <Loading />
  
    return (
      <main>
        <h2>{name}</h2>
        <Ul>
          {data.map((charData: Characters) => {
            const { images, name, sayings, gender, species, age, id } = charData;
            return (
              <li key={`futurama-character-${id}`}>
                <h3>{name.first} {name.middle} {name.last}</h3>
                
                  <img src={images.main} alt={name.first} />
                  <strong>{sayings[0]}</strong>
                
                <dl>
                  <div>
                    <dt>gender</dt>
                    <dd>{gender}</dd>
                  </div>
                  <div>
                    <dt>species</dt>
                    <dd>{species}</dd>
                  </div>
                  {/* <div>
                    <dt>homePlanet</dt>
                    <dd>{homePlanet}</dd>
                  </div> */}
                  {/* <div>
                    <dt>occupation</dt>
                    <dd>{occupation}</dd>
                  </div> */}
                  <div>
                    <dt>age</dt>
                    <dd>{age}</dd>
                  </div>
                </dl>
              </li>
            )
          })}
          </Ul>
        
      </main>
    )
  }
  const Ul = styled.ul`
  width:100%;
  margin:0 auto;
  display: grid;
  gap :2rem;
  grid-template-columns: repeat(2, calc((100% - 2rem) / 2));

  li{


    &:hover > div > p{opacity:1; }

    dl{
      div{ align-items: center; justify-content: center;}
    }
  }

`
