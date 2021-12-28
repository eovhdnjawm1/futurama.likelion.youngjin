import type { NextPage } from 'next'
import Head from 'next/head';
import styled from "@emotion/styled";

const Home: NextPage = () => {
  return (
    <div>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <Container>
        <main>
          <img src='https://flxt.tmsimg.com/assets/p9932851_b_h8_ab.jpg' alt='' />
        </main>
        </Container>
    </div>
  )
}

export default Home




const Container = styled.div`
  background:#222;
  text-align:center;
  padding:4rem 0;
  img{
    width:900px;
    max-width:100%;
    border-radius:2rem;
    box-shadow: 0 10px 40px 0 rgba(0,0,0,1);
  }
`
