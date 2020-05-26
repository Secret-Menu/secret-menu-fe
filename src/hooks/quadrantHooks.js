import { useParams } from 'react-router-dom';

export const useQuadrant = (area) => {
  let quadrantName = '';
  if(area === 'N') quadrantName = 'North';
  if(area === 'NE') quadrantName = 'Northeast';
  if(area === 'NW') quadrantName = 'Northwest';
  if(area === 'SE') quadrantName = 'Southeast';
  if(area === 'SW') quadrantName = 'Southwest';

  return {
    quadrantName
  };
};