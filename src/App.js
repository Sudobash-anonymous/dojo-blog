import './App.css';
function App() {
  const title = 'WELCOME TO THE NEW BLOG';
  const likes = 50;
  //const person = {name: 'Raoz' , age: 30};

  return (
    <div className="App">
       <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>

        {/*<p>{person}</p>*/}

        <p>{10}</p>
       </div>
    </div>
  );
}

export default App;
