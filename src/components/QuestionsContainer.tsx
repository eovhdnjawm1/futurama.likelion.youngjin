import { Error, Loading } from '.';
import { useData } from '../hooks/useData';
import styled from '@emotion/styled';
// import { MEDIA_QUERY_END_POINT } from "../constants";
import { useState } from 'react';
import { Questions } from '../types/Questions';

export const QuestionsContainer = () => {
  const name = 'questions';
  const { data, error } = useData(name);


  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <main>
      <h2>{name}<Text>Drag to see the answer!</Text></h2>
      <Ul>
        {data.map((questionsData: Questions) => {
          const { question, possibleAnswers, correctAnswer, id } = questionsData;
          return (
            <li key={`futurama-cast-${id}`}>
              <p>
                <span>Q</span>
                <span>{id}. {question}</span>
              </p>
              <List>
                {possibleAnswers.map((questionList: string, index: number) => {
                  return (
                    <>
                      <li>
                        <input type="radio" name={question} id={questionList} />
                        <label htmlFor={questionList}><span>{index + 1}</span> {questionList}</label>
                      </li>
                    </>
                  )
                })
                }
                </List>
              <p className="answer">
                <span>A</span>
                <span className="drag">{correctAnswer}</span>
              </p>
            </li>
          )
        })}
        </Ul>
    </main >
  )
}


const Text = styled.span`
  font-size:1.8rem;
  font-weight:normal;
  display:block;
  margin-top:1rem;
`
const Ul = styled.ul`
  max-width:1000px; margin:0 auto;
  display:grid;
  gap :2rem;
  & > li{padding:3rem; text-align:center;}
  p{
    font-weight:bold;
    background:none;
    font-size:inherit;
    text-align:left;
    display:flex; justify-content:center; align-items:center;
    span:first-child{ 
      display:flex; justify-content:center; align-items:center; width:2em; height:2em; 
      background:#eee;  border-radius:50%; margin-right:1rem; 
    }
  }

  }
`

const List = styled.ul`
  display:flex;
  box-shadow:none;
  padding:2rem;       
  gap:1rem;
  justify-content:center;
  flex-wrap:wrap;
  flex-direction:column;


  li{
    position:relative;
    padding:0;
  }  
  
`