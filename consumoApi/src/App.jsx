import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
function App() {
	const [listaJuegos, setListaJuegos] = useState([]);

	const getDataGames = async () => {
		try {
			const respuesta = await axios.get('https://www.freetogame.com/api/games');
			setListaJuegos(respuesta.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getDataGames();
	}, []);

	return (
		<div className="d-flex justify-content-around flex-wrap">
			<>
				{listaJuegos.map((juego) => (
					<Card style={{ width: '18rem' }} className="m-3" key={juego.id}>
						<Card.Img variant="top" src={juego.thumbnail} alt={juego.title} />
						<Card.Body>
							<Card.Title>{juego.title}</Card.Title>
							<Card.Text>{juego.short_description}</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				))}
			</>
		</div>
	);
}

export default App;
