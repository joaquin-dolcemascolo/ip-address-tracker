import useFetchData from '../../hooks/useFetchData';
import InfoWindow from '../InfoWindow';
import Map from '../Map';
import SearchBox from '../SearchBox';

const className = 'app-container';
import './styles.scss';

const App = () => {
    const { ipInformation, isFetching, searchIp } = useFetchData();

    return (
        <main className={className}>
            <header className={`${className}__header`}>
                <h1 className={`${className}__title`}>
                    IP Address Tracker
                </h1>
                <SearchBox
                    onSearch={searchingIp => searchIp(searchingIp)}
                />
                <InfoWindow
                    ipInformation={ipInformation}
                    isFetching={isFetching}
                />
            </header>
            <Map location={location} />
        </main>
    );
};

export default App