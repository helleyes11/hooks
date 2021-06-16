import react,{useState} from 'react'
import './App.css';
import{v4 as uuidv4} from 'uuid' ;
import MovieList from './component/MovieList';
import Search from './Search';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [keyword,setKeyword] = useState("")
  const [movies,setMovies] = useState([

    {
        id: uuidv4(),
        title:'Guardians of the Galaxy',
        img:'https://icdn.digitaltrends.com/image/digitaltrends/guardians-of-the-galaxy-vol-2-2-720x479.jpg',
        rate: 4 ,
        desc:"Peter Quill est un aventurier traqué par tous les chasseurs de primes pour avoir volé un mystérieux globe convoité par le puissant Ronan, dont les agissements menacent l'univers tout entier. Lorsqu'il découvre le véritable pouvoir de ce globe et la menace qui pèse sur la galaxie, il conclut une alliance fragile avec quatre extraterrestres disparates.",
    },
    {
        id: uuidv4(),
        title:'Captain America',
        img:'https://fabricelamirault.com/wp-content/uploads/2019/04/avengers-captain-america-chris-evans.jpeg',
        rate: 3 ,
        desc:"Le film raconte l'histoire de Steve Rogers, un jeune homme frêle de Brooklyn transformé en un super-soldat nommé Captain America durant la Seconde Guerre mondiale. Il doit notamment arrêter Crâne rouge, chef d'HYDRA, qui a mis au point des armes surpuissantes en utilisant une mystérieuse source d'énergie.",
    },
    {
        id: uuidv4(),
        title:'Black Widow',
        img:'https://imgr.cineserie.com/2021/03/black-widow-decouvrez-de-superbes-images-inedites-du-film.jpg?imgeng=/f_jpg/cmpr_0/w_660/h_370/m_cropbox&ver=1',
        rate: 4 ,
        desc:"La veuve noire, également connue sous le nom de Natasha Romanova, collabore avec les services secrets soviétiques pour devenir leur agent principal. Cependant, lorsque l'URSS s'effondre, le gouvernement essaie de la tuer.",
    },
    {
        id: uuidv4(),
        title:'Thor: Love And Thunder',
        img:'https://i0.wp.com/wegotthiscovered.com/wp-content/uploads/2020/11/thor-3-fan-poster.jpg?w=696&ssl=1',
        rate: 5  ,
        desc:"Thor: Love and Thunder est un film de super-héros américain réalisé par Taika Waititi, dont la sortie est prévue en 2022. Il s'agit du 29ᵉ film de l'univers cinématographique Marvel et le 6ᵉ de la phase IV. Il fait suite à Thor, Thor : Le Monde des ténèbres et Thor : Ragnarok",
    }
    
    ]);
    const search=(text)=>{
      setKeyword(text)
      
    };
    const addMovie=(movie)=>{
      setMovies(movies.concat(movie))
    }
  return (
    <div className="App">
      <Search search={search}></Search>
      <MovieList addMovie={addMovie}  movies={movies.filter(el=>el.title.toLowerCase().includes(keyword.toLowerCase().trim()))}></MovieList>
  
     
    </div>
  );
}

export default App;
