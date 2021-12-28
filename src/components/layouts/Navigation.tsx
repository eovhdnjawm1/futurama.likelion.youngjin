import Link from "next/link";
import styled from "@emotion/styled";
// import { MEDIA_QUERY_END_POINT } from "../../constants";

export const Navigation = () => {
  return (
    <Header>
      <div>
        <h1><Link href="/">
          <a>Futurama</a>
        </Link></h1>
        <nav>
          <ul>
            <li>
              <Link href="/Info">
                <a>Info</a>
              </Link>
            </li>
            <li>
              <Link href="/Characters">
                <a>Characters</a>
              </Link>
            </li>
            <li>
              <Link href="/Cast">
                <a>Cast</a>
              </Link>
            </li>

            <li>
              <Link href="/Episodes">
                <a>Episodes</a>
              </Link>
            </li>
            <li>
              <Link href="/Questions">
                <a>Questions</a>
              </Link>
            </li>
            <li>
              <Link href="/Inventory">
                <a>Inventory</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      </Header>
  )
}

const Header = styled.header`
  background:#fff;
  color:#fff;
  box-shadow:0 2px 20px rgba(0,0,0,0.2);
  margin-bottom:50px;

  div{
    max-width:1280px; margin:0 auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:1em 0;
    flex-direction:column;
  }
  h1{ 
    text-transform: uppercase;
    a{ 
      font-size:2.4rem; color:#E44047;
      /* text-shadow:2px 2px 0 #FFE591, -2px -2px 0 #FFE591, -2px 2px 0 #FFE591, 2px -2px 0 #FFE591,
      2px 0 0 #FFE591, -2px 0 0 #FFE591, 0 -2px 0 #FFE591, 0 2px 0 #FFE591, 2px 4px 0 rgba(0,0,0,0.5); */
      color: black;
    }
  }
  a{
    display:block;
    padding:0.5rem 2rem;
    font-weight:bold;
    font-size:1.6rem;
    color: black;
  }
  ul{
    display:grid;
    grid-template-columns: repeat(3,1fr);
    text-align:center; 
    gap:0.8rem; 
    margin:1rem auto 0;
  }

`
