import styles from './Diplomate.module.scss'
const DiplomateMoc = ()=>{
    
    return( 
        <div className={styles.diplomate }>
            <div className={styles.mocdiv}>
                 
                <div className="moc"></div>
                <div className="moc"></div>
                <div className="moc"></div>
            </div>
            <div className={styles.mocdiv}>
                <div className="moc"></div>
                <div className="moc"></div>
                <div className="moc"></div>
                
            </div>
            <div className={styles.mocdiv}>
                <div className="moc"></div>
                <div className="moc"></div>
                <div className="moc"></div>
                
            </div>
        </div>
    )
}