import React from 'react';
import PropTypes from 'prop-types';

const QuadrantDescription = ({ quadrant }) => {
  let quadrantInfo = '';
  if(quadrant === 'North') quadrantInfo = 'North Portland (NoPo) is home to several amazing attractions such as the Portland international Raceway, the University of Portland, Port of Portland, and the famous 31 ft. tall Paul Bunyan statue (keep Portland weird!). NoPo is also where you will find  the Mississippi corridor, which is a gold mine for wanderers who hunger for Portland culture writ large. ';
  if(quadrant === 'Northeast') quadrantInfo = 'Northeast Portland offers an urban lifestyle that is also trending and hip. It is home to a large number of restaurants, bars, breweries, and shopping destinations. Inner Northeast includes many street shopping areas such as the Lloyd District, Alberta Arts District and Hollywood.  Also check out North Mississippi Avenue in Boise neighborhood where a countless shops and restaurants exist on the street level.';
  if(quadrant === 'Northwest') quadrantInfo = 'Northwest Portland is the home of Forest Park, which is a massive area wooded area that offers the some of the best outdoor activities in Portland including trails for mountain biking, hiking, and bird-watching. Many Portlanders from other areas come to Forest Park to enjoy weekend outdoors activities and hike on a 30-mile route. Foodies can find some of Portland\'s most exclusive retail and dining locations in the Pearl District.';
  if(quadrant === 'South') quadrantInfo = 'According to Mikey Romay, this is a thing';
  if(quadrant === 'Southeast') quadrantInfo = 'Southeast Portland is the hippest district in Portland, Oregon. The area is filled with eclectic boutiques, cafes, breweries, and restaurants. The most popular streets for entertainment in SE Portland include Belmont St., Hawthorne Blvd., and Division/Clinton. SE Portland has its humble roots where the city used to be home of blue-collar workers and still today it feels like where real people live.';
  if(quadrant === 'Southwest') quadrantInfo = 'SW Portland is home to countless families and children because of its\' safe and quiet neighborhoods with beautiful parks and good schools. Notable landmarks include the zoo, Hoyt Arboretum, Lewis & Clark College, Washington Park, Japanese Garden, Tryon Creek State Park, and International Rose Test Garden.';

  return (
    <p>{quadrantInfo}</p>);
};

QuadrantDescription.propTypes = {
  quadrant: PropTypes.string
};

export default QuadrantDescription;
