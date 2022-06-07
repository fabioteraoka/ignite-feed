import { useState } from 'react'
import { Header } from './components/Header'
import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

const posts =[
  {
  id:1,
  author: {
    avatarUrl: 'http://github.com/fabioteraoka.png',
    name: 'Fabio Teraoka',
    role: 'Front End'
  },
  content:[
    {type:'paragraph', content: 'Fala galeraa 👋'},
    {type:'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    {type: 'Link', content:'jane.design/doctocare'}
  ],
  publishedAt: new Date('2022-06-04 05:45:30'),
},
{
  id:2,
  author: {
    avatarUrl: 'https://github.com/diego3g.png',
    name: 'Diego Fernandes',
    role: 'CTO @Rocketseat'
  },
  content:[
    {type:'paragraph', content: 'Fala galeraa 👋'},
    {type:'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    {type: 'Link', content:'jane.design/doctocare'}
  ],
  publishedAt: new Date('2022-06-04 05:45:30'),
},
]
export default function App() {

  return (
    <div className="App">
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post =>{
            return(
              <Post key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
                />
            )
          })}
          
        </main>
      </div>
    </div>
  )
}

