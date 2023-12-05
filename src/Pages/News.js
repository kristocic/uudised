import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { client } from '../App';

const News = () => {
    const { newsId } = useParams();
    const [uudis, setUudis] = useState(null);

    useEffect(() => {
        client.getEntry("GAkHl63koucZtMBTN4zZY").then((response) => {
            console.log(response);
            setUudis(response.fields);
        });
    }, [])

    if (!uudis) {
        return <div>Unable to retrieve news with id { newsId }</div>;
    }

    return (
        <div>
            <h1>{uudis.fields.title}</h1>
            <p>{uudis.fields.body}</p>
        </div>
    );
};

export default News;