import styles from './Profile.module.scss'
import { PrimaryBtn } from '../../Button/Button'
import { useNavigate } from 'react-router-dom'
const Profile = () => {

    const navigate =useNavigate();
 return (
    <div className={styles.Profile}>
        <ul >
            <li>Name</li>
            <li>email</li>
            <li>degree</li>
             
        </ul>
        <PrimaryBtn onClick={() => navigate('/login')}>logout </PrimaryBtn>
    </div>
 )   
}

export default Profile;