import { Error, Loading } from '.';
import { useData } from '../hooks/useData';
import styled from '@emotion/styled';

import { Info } from '../types/Info';
import Link from 'next/link';

export const InfoContainer = () => {
  const name = 'info'
  const { data, error } = useData(name);
  console.log(data);
  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <main>
      <h2>{name}</h2>
      <Ul>
        {data.map((infoData: Info) => {
          const { synopsis, yearsAired, creators, id } = infoData;
          return (
            <li key={`futurama-info-${id}`}>
              <dl>
                <div>
                  <dt>synopsis</dt>
                  <dd>{synopsis}</dd>
                </div>
                <div>
                  <dt>yearsAired</dt>
                  <dd>{yearsAired}</dd>
                </div>
                <div>
                  <dt>creators</dt>
                  <dd>
                    <Link href={creators[0].url}>
                      <a>{creators[0].name}</a>
                    </Link>
                  </dd>
                  <dd>
                    <Link href={creators[0].url}>
                      <a>{creators[0].name}</a>
                    </Link></dd>
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
  max-width:1000px; margin:0 auto;
  display:grid;
  gap :2rem;
  li{}
  dl{
    display:flex;
    justify-content:center;
    margin-bottom:1rem;
    gap:2rem;
    flex-wrap:wrap;
  }
  dl + p{text-align:center; max-width:800px; margin:0 auto;}


`