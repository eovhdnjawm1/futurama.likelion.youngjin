import { Error, Loading } from '.';
import { useData } from '../hooks/useData';
import styled from '@emotion/styled';
// import { MEDIA_QUERY_END_POINT } from "../constants";
import Link from 'next/link';
import { Cast } from '../types/Cast';

export const CastContainer = () => {
  const name = 'cast'
  const { data, error } = useData(name);
  console.log(data);
  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <main>
      <Ul>
      <h2>{name}</h2>
      <p></p>
        {data.map((castData: Cast) => {
          const { name, born, bio, id } = castData;
          return (
            <li key={`futurama-cast-${id}`}>
              <h3>{name}</h3>
              <p><span>Birth</span> {born}</p>
              <Link href={bio.url}><a>More</a></Link>
            </li>
          )
        })}
        </Ul>
    </main>
  )
}

const Ul = styled.ul`
  width:100%;
  max-width:1000px; margin:0 auto;
  margin:0 auto;
  display: grid;
  gap :2rem;
  grid-template-columns: repeat(2, calc((100% - 2rem) / 2));
  
`