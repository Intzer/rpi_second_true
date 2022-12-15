import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as WorkIcon } from '../Images/book.svg';
import { ReactComponent as SchoolIcon } from '../Images/school.svg';
import { ReactComponent as DeathIcon } from '../Images/death.svg';
import { ReactComponent as LifeIcon } from '../Images/life.svg';
import { useTranslation } from 'react-i18next';


const TimeLine = ({ element }) => {
    const { t } = useTranslation();
    return(
        <>
        <h2 className='text-center'>{t('bio')}</h2>
        <VerticalTimeline>
            {element.map((info) => {
                return (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date={info.time}
                        dateClassName="date"
                        iconStyle={{ background: '#adb5bd', color: '#000' }}
                        icon={info.logo === "work" ? <WorkIcon /> : info.logo === "life" ? <LifeIcon /> : info.logo === "school" ? <SchoolIcon /> : <DeathIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">{info.title}</h3>
                        <p>
                            {info.text}
                        </p>
                    </VerticalTimelineElement>
                );
            })}

        </VerticalTimeline>
        </>
    )
}

export default TimeLine;