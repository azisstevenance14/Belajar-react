function KartuProfil(props){
    return(
        <div style={{border: "1px solid #ccc", padding: "15px", borderRadius: "8px", margin:"10px", width:"250px"}}>
            <h3>{props.nama}</h3>
            <p>Keahlian: {props.keahlian}</p>
        </div>
    );
}

export default KartuProfil;