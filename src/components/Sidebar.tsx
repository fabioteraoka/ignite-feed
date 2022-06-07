import styles from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1454117096348-e4abbeba002c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=680&q=80" alt="" />
            <div className={styles.profile}>
                <Avatar src="https://github.com/fabioteraoka.png"/>
                <strong>Fabio Teraoka</strong>
                <span>Front End Developer</span>
            </div>

            <footer>
                <a href="">
                    <PencilLine size={20}/>Editar seu perfil</a>
            </footer>
        </aside>
    )
}