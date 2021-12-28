import { Error, Loading } from '.';
import { useData } from '../hooks/useData';
import styled from '@emotion/styled';
// import { MEDIA_QUERY_END_POINT } from "../constants";

import { Episodes } from '../types/Episodes';

export const EpisodesContainer = () => {
  const name = 'episodes';
  const { data, error } = useData(name);

  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <main>
      <h2>{name}</h2>
      <Ul>
        {data.map((EpisodesData: Episodes) => {
          const { number, title, writers, originalAirDate, desc, id } = EpisodesData;
          return (
            <li key={`futurama-cast-${id}`}>
              EP.{number}
              <h3>{title}</h3>
              <dl>
                <div>
                  <dt>writers:</dt>
                  <dd>{writers}</dd>
                </div>
                <div>
                  <dt>originalAirDate:</dt>
                  <dd>{originalAirDate}</dd>
                </div>
              </dl>
              <p>{desc}</p>
            </li>
          )
        })}
        </Ul>
    </main>
  )
}


const Ul = styled.ul`
  max-width:1000px; 
  margin:0 auto;
  display:grid;
  gap :20px;
  li{}
  dl{
    display:flex;
    justify-content:center;
    margin-bottom:10px;
    gap:2rem;
    flex-wrap:wrap;
  }
  dl + p{
    text-align:center; 
    max-width:800px; 
    margin:0 auto;}


`