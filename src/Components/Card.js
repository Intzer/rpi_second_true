import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

function Card({ person }) {
  
  const { t } = useTranslation();
  return (
    <div>
      <img class="card-image" alt={person.name} src={person.imgPath} />
      <div>
        <h2>{person.name}</h2>
      </div>
      <Link to={person.url}>
        <Button className='text-center btn btn-light border border-5' style={{ width: '15rem' }}>
          <span className='me-auto text-secondary'>{t('inform')}</span>
        </Button>
      </Link>
    </div>
  );
}

export default Card;