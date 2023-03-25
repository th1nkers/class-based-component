import UserFinder from './components/UserFinder';
import UsersContext from './store/users-context';

const DUMMY_USERS = [
  { id: 'u1', name: 'Thinkers' },
  { id: 'u2', name: 'Dhruv' },
  { id: 'u3', name: 'Nitesh' },
];

function App() {
  const userContext = {
    users: DUMMY_USERS
  }

  return (
    <UsersContext.Provider value={userContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
