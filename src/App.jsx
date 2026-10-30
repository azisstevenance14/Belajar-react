import KartuProfil from './KartuProfil';

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Halo, Azis Steven S. Ance!</h1>
      <p>Mari belajar merakit komponen React pertamamu:</p>
      
      {/* Memanggil komponen buatan kita sendiri */}
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <KartuProfil nama="Azis Steven Ance" keahlian="Junior Programmer & IoT" />
        <KartuProfil nama="React JS" keahlian="Frontend Library" />
      </div>
    </div>
  );
}

export default App;