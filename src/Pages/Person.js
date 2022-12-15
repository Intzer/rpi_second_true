import AuCard from '../Components/AuCard.js';
import AuGallery from '../Components/AuGallery.js';
import TimeLine from '../Components/TimeLine.js';
import YoutubeEmbed from '../Components/YoutubeEmbed.js';
import Home from '../Components/GoogleMap.js';

function Person({data}) {
    return (
        <>
            <AuCard element={data.info} />
            <TimeLine element={data.biografy} />
            <AuGallery element={data.info} />
            <YoutubeEmbed embedId={data.info.video} />
            <Home coord={data.info} />
        </>
    )
};

export default Person;