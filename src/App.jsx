import './App.css'
import NanBar from './component/NanBar';
import Cardme from './component/Cardme';
import Footer from './component/Footer';
import Home   from './component/Home';
import GetInTouch from './component/GetInTouch';
import getInTouch from './config.jsx';
import Todo from './assets/Todo.jpeg';
import Hang from './assets/Hangman.jpeg';
import Astro from './assets/asteroid.jpeg';
import Amazon from './assets/Amazon.jpeg';
function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className=" w-full h-full">
    <NanBar/>
    <div className='flex'>
    {/* <Bio/> */}
    <Home/>
    </div>
    <div className='bg-green-200 p-3 flex justify-around'>
    <Cardme
        title="TodoList"
        description="Effortlessly manage tasks in this React TodoList, styled with basic CSS for simplicity. Streamlined interface ensures efficient task organization with ease."
        image={Todo}
        githubUrl="https://github.com/Garullous/todo2"
      />
    <Cardme
        title="Asteroid"
        description="The asteroid is a JavaScript game created using HTML and the HTML5 Canvas element. It involves a spaceship dodging asteroids, with features like collision detection and user input."
        image={Astro}
        githubUrl="https://github.com/Garullous/Aestroid"
      />
    </div>
    <div className='bg-green-200 p-3 flex justify-around'>
    <Cardme
        title="Hangman"
        description="Experience classic word-guessing fun with this Hangman game crafted using HTML, CSS, and JavaScript. Enjoy an engaging interface,Attempt to unravel hidden words,showcasing a blend of front-end technologies."
        image={Hang}
        githubUrl="https://github.com/Garullous/hangman"
      />
    <Cardme
        title="Amazon Clone"
        description="The Amazon page clone is a static webpage built using HTML and CSS to replicate the visual appearance of the Amazon e-commerce platform. It mimics key components of the Amazon homepage, such as the header, navigation bar, product grid, and footer. "
        image={Amazon}
        githubUrl="https://github.com/Garullous/Amazon-Clone-"
      />
    </div>

    <div>
    <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer>
    </div>

  </div>
  );
}

export default App;
