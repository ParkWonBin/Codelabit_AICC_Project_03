import { Link } from 'react-router-dom';
import './Navigation.css';

export const Navigation = ({props})=>{
    const {getNavData} = props

    return <nav id="navbar">
        <h3><Link to='/'>{getNavData.title}</Link></h3>
        <ul>
            {getNavData.data.map((item,index)=>{
                return <li key={index}><Link to={item.url}>{item.name}</Link></li>
            })}           
        </ul>
  </nav>
}

export default Navigation;