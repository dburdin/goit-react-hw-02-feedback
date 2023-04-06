import PropTypes from 'prop-types';

import { Title, Div } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Div>
      <Title>{title}</Title>
      {children}
    </Div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
