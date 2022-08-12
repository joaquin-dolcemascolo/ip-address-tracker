const className = 'info-window';
import './styles.scss';

const dataTitles = {
    ipAddress: 'ip address',
    location: 'location',
    timezone: 'timezone',
    isp: 'isp'
};

const InfoWindow = ({ ipInformation, isFetching }) => (
    <section className={className}>
        {isFetching ? (
            <h1>Loading...</h1>
        ) : (
            Object.keys(dataTitles).map(section => (
                <article key={`${section}-info`} className={`${className}__section`}>
                    <p className={`${className}__title`}> {dataTitles[section]} </p>
                    <h2 className={`${className}__value`}> {ipInformation[section]} </h2>
                </article>
            ))
        )}
    </section>
);

export default InfoWindow;
