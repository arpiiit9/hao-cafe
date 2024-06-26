import { Link } from 'react-router-dom';
import Hero from './Hero';

const Header = ({ orderItems }) => {
  const images = [
    'https://i.postimg.cc/j2S6wzqF/1.jpg',
'https://i.postimg.cc/RV81h6kg/2.jpg',
'https://i.postimg.cc/B6qHkxFn/3.jpg',
'https://i.postimg.cc/25N4Fp8v/4.jpg',
'https://i.postimg.cc/MZ9mkrd2/6.jpg',
'https://i.postimg.cc/QdTQTNsh/7.jpg',
'https://i.postimg.cc/pdQKs0pS/8.jpg',
'https://i.postimg.cc/gkrqGqTw/9.jpg'


    // Add more image URLs as needed
  ];

  return (
    <>
      <header className="mb-0 h-50 bg-gradient-to-b from-blue-600 to-blue-700 p-4 flex border-b-2 border-blue-400 justify-center items-center overflow-x-auto">
        <nav className="space-x-10 flex items-center">
          <Link to="/hungry" className="block transform transition-transform duration-300 hover:scale-150 flex flex-col items-center justify-center">
            <img src="https://w.forfun.com/fetch/9d/9d1262f39fef5b8c3bf87aa1c8b6513f.jpeg" alt="Sandwich" className="rounded-full h-12 w-13 shadow-black hover:border-white hover:shadow-white" />
            <span className='text-white font-semibold'>HUNGRY</span>
          </Link>
          <Link to="/addicted" className="block transform transition-transform duration-300 hover:scale-150 flex flex-col items-center justify-center">
            <img src="https://avatars.mds.yandex.net/i?id=c1e3f7a14d74cabf899ee7644b2601116e1a2305-9065738-images-thumbs&n=13" alt="Pizza" className="rounded-full h-12 w-13 shadow-black hover:border-white hover:shadow-white" />
            <span className='text-white font-semibold'>ADDICTED</span>
          </Link>
          <Link to="/obsessed" className="block transform transition-transform duration-300 hover:scale-150 flex flex-col items-center justify-center">
            <img src="https://w.forfun.com/fetch/61/61181258a8864f7f03216b94b27f3970.jpeg" alt="Pasta" className="rounded-full h-12 w-13 shadow-black hover:border-white hover:shadow-white" />
            <span className='text-white font-semibold'>OBSESSED</span>
          </Link>
        </nav>
      </header>
      <Hero images={images} />
    </>
  );
};

export default Header;
