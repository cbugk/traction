
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { Layout } from './Layout';
import { dataProvider } from './dataProvider';


export const App = () => (
    <Admin
        dataProvider={dataProvider}
        layout={Layout}
        >
        <Resource name="articles" list={ListGuesser}/>
    </Admin>
);

    