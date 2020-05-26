import { useParams } from 'react-router-dom';

export const useQuadrantName = (area) => {
  let quadrantName = '';
  if(area === 'N') quadrantName = 'North';
  if(area === 'NE') quadrantName = 'Northeast';
  if(area === 'NW') quadrantName = 'Northwest';
  if(area === 'S') quadrantName = 'South';
  if(area === 'SE') quadrantName = 'Southeast';
  if(area === 'SW') quadrantName = 'Southwest';

  return {
    quadrantName
  };
};