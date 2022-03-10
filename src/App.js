import Character from './components/Character';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<div className="App">
				<Character></Character>
			</div>
		</QueryClientProvider>
	);
}

export default App;
