import React from 'react'
import { Card, Image, Badge, Toast, ToastHeader, Button } from 'react-bootstrap'
import './Home.css';
import { Link } from 'react-router-dom';
import arrow from '../Images/arrow.png'
import { useTranslation } from 'react-i18next';


function Home() {
    const { t } = useTranslation();
    return (
        <>
            <div className='d-flex justify-content-center'>
                <Card pill className='border border-5 bg-light' style={{ width: '36rem', margin: '40px 0 0'}}>
                    <Card.Header>
                        {t('about')}
                    </Card.Header>
                    <Card.Body className='text-center'>
                        {t('about_description')}
                    </Card.Body>
                 </Card>
            </div>

            <div className='package'>
                <div class="figure_of_the_day">
                    <h1>{t('day_author')}</h1>
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Francisak_Bahusevic.jpg/274px-Francisak_Bahusevic.jpg"
                        className='border border-4'
                        roundedCircle={true}
                    ></Image>
                    <h2>Франци́ск-Бенеди́кт Казими́рович Богуше́вич</h2>
                    <h2>21 марта 1840 - 28 апреля 1900</h2>
                    <p>Белорусский поэт, один из основоположников новой белорусской литературы. Основоположник критического реализма в белорусской литературе. </p>
                    <Link to="/bogush">
                        <Button className='text-center btn btn-light border border-5' style={{ width: '15rem' }}>

                            <span className='me-auto text-secondary'>{t('inform')}</span>

                        </Button>
                    </Link>

                </div>

            </div>
        </>
    )
}
export default Home;