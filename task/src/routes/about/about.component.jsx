const About = ({value}) => {
    
    return (
        <div>
            <h1 style={{padding:30}}>This is About</h1>
            {
                (value==='')?
                <span style={{padding:80}}>No Id value</span> :
                <span style={{padding:80}}>Id : {value}</span>
            }
        </div>
    )
}

export default About;