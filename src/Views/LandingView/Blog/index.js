import React from 'react';
import styles from './blog.module.css';
import axios from 'axios';

function Blog() {
  const clientId = '24632328236412900';
  const access_token =
    'IGQWRNZAmFsNjZACakNRT2RuWUpDdFBTdmN1SW9hRTRMcE5VcUZAlZAHprZAFZAfOERfLTZAoWEpZAT3BqbVgwemN5X0NWeW92MHNjczZAocnNjUDJDTmJfNzFhUHhrLUpMMUY3amUwNnUzU2FsTHEtUjBvcmhuVDd2ZA05pZAmhoQnF4SG96aGpiZAwZDZD';

  const handleSubmit = () => {
    axios
      .get(
        `'https://graph.instagram.com/${clientId}?fields=id,username&access_token=${access_token}
        `
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className={styles.container} onClick={handleSubmit}>
      Blog y Recetas
    </div>
  );
}

export default Blog;
