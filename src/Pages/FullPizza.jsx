import axios from 'axios';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../scss/components/fullPizza.module.scss';

const FullPizza = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentPizza, setCurrentPizza] = React.useState();

  const fetchPizza = async () => {
    try {
      const { data } = await axios.get(`https://62d1010cd9bf9f170590bf69.mockapi.io/Items/${id}`);
      setCurrentPizza(data);
    } catch (err) {
      console.log(err);
      navigate('/');
    }
  }

  React.useEffect(() => {
    fetchPizza();
  }, []);

  return (
    <>
      {currentPizza && <div className={styles.pizza}>
        <img src={currentPizza.imageUrl} />
        <span><b>{currentPizza.title}</b><i>{currentPizza.price}</i></span>
      </div>}
    </>
  )
};

export default FullPizza;