import PropTypes from 'prop-types';

export const SocialNetworks = ({ socialNetworks }) => {
  return (
    <div className="uppercase flex flex-col gap-[17px] justify-center items-center">
      {socialNetworks}
      <div>icons</div>
    </div>
  );
};

SocialNetworks.propTypes = {
  socialNetworks: PropTypes.string.isRequired,
};
